import importlib.util
from pathlib import Path
import unittest
from unittest.mock import patch


SCRIPT = Path(__file__).with_name("indexnow.py")
SPEC = importlib.util.spec_from_file_location("indexnow", SCRIPT)
indexnow = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(indexnow)


class IndexNowValidationTests(unittest.TestCase):
    def test_accepts_production_url(self):
        self.assertEqual(indexnow.validate_url("https://www.wellridgegroup.com/grant-writing"), "https://www.wellridgegroup.com/grant-writing")

    def test_rejects_foreign_host_query_fragment_userinfo_port_and_raw_whitespace(self):
        for value in (
            "https://wellridgegroup.com/grant-writing",
            "https://www.wellridgegroup.com/grant-writing?",
            "https://www.wellridgegroup.com/grant-writing#",
            "https://www.wellridgegroup.com/grant-writing?x=1",
            "https://www.wellridgegroup.com/grant-writing#top",
            "https://user:pass@www.wellridgegroup.com/grant-writing",
            "https://www.wellridgegroup.com:443/grant-writing",
            "https://www.wellridgegroup.com/grant writing",
            "https://www.wellridgegroup.com/grant-writing\n",
            "https://www.wellridgegroup.com/grant-writing\x00",
        ):
            with self.subTest(value=value), self.assertRaises(ValueError):
                indexnow.validate_url(value)

    def test_rejects_duplicate_and_over_limit_urls(self):
        with self.assertRaises(ValueError):
            indexnow.validate_urls(["https://www.wellridgegroup.com/", "https://www.wellridgegroup.com/"])
        with self.assertRaises(ValueError):
            indexnow.validate_urls(["https://www.wellridgegroup.com/"] * (indexnow.MAX_URLS + 1))

    def test_dry_run_does_not_open_network(self):
        with patch.object(indexnow, "get_exact", side_effect=AssertionError("network")):
            self.assertEqual(indexnow.main(["--url", "https://www.wellridgegroup.com/grant-writing"]), 0)

    def test_submit_key_mismatch_prevents_post(self):
        with patch.object(indexnow, "get_exact", return_value=(200, b"wrong-key")) as get, patch.object(indexnow.urllib.request, "urlopen") as post:
            with self.assertRaises(RuntimeError):
                indexnow.submit(["https://www.wellridgegroup.com/grant-writing"], "8be544e2bcd2400ca7d93af44b02d215", "8be544e2bcd2400ca7d93af44b02d215.txt")
            get.assert_called_once()
            post.assert_not_called()

    def test_submit_checks_key_and_urls_before_post(self):
        key = "8be544e2bcd2400ca7d93af44b02d215"
        with patch.object(indexnow, "get_exact", return_value=(200, key.encode())) as get, patch.object(indexnow.urllib.request, "urlopen") as post:
            post.return_value.__enter__.return_value.status = 202
            self.assertEqual(indexnow.submit(["https://www.wellridgegroup.com/grant-writing"], key, f"{key}.txt"), 202)
            self.assertEqual(get.call_count, 2)
            post.assert_called_once()


if __name__ == "__main__":
    unittest.main()
