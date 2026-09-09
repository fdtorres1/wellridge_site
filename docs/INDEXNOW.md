# IndexNow submissions

`scripts/indexnow.py` prepares a narrowly scoped IndexNow notification for
changed Wellridge Group production URLs. It accepts repeated explicit `--url`
arguments and caps a request at 10,000 URLs. It intentionally has no sitemap
mode, so a routine run cannot submit the entire site by accident.

The default is a dry run and does not make network requests:

```sh
python3 scripts/indexnow.py \
  --url https://www.wellridgegroup.com/grant-writing \
  --url https://www.wellridgegroup.com/pricing
```

After deployment is live, `--submit` performs these checks before sending one
POST to Bing's IndexNow endpoint:

1. The key file at `https://www.wellridgegroup.com/8be544e2bcd2400ca7d93af44b02d215.txt` returns HTTP 200 and contains exactly the public key.
2. Every selected URL uses exact HTTPS `www.wellridgegroup.com` syntax and returns HTTP 200 without a redirect. Query strings, fragments (including empty ones), whitespace, control characters, userinfo, ports, foreign hosts, duplicates, and malformed URLs are rejected.
3. The request contains only the selected URLs, the host, key, and key-file location.

```sh
python3 scripts/indexnow.py \
  --url https://www.wellridgegroup.com/grant-writing \
  --submit
```

The key is a public ownership token in one root-level `public/<uuidhex>.txt`
file; it is not a credential. Do not add additional key files or secrets.
IndexNow HTTP 200 means the URL set was received, and HTTP 202 means receipt
with key validation pending. Neither status proves crawling or indexing, and
the script does not claim either outcome.

The protocol details and response meanings are documented by
[IndexNow](https://www.indexnow.org/documentation). This repository does not
add an automation, GitHub Action, dependency, or secret for submissions.
