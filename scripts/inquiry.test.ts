import { test } from 'node:test';
import assert from 'node:assert/strict';
import { providerAccepted, submitInquiry, INQUIRY_ENDPOINT } from '../src/lib/inquiry.ts';
test('activation and arbitrary successful HTTP responses are not submission acknowledgements', () => {
  for (const value of [null, {}, {success: 'false'}, {success: true, message: 'Activate your form'}, {success: 'true'}]) assert.equal(providerAccepted(value), false);
  for (const success of [true, 'true']) assert.equal(providerAccepted({success, message: 'The form was submitted successfully.'}), true);
});
test('one JSON request preserves the inquiry and uses the Wellridge route', async () => {
  const payload = {name: 'Synthetic test', Package: 'Letter of inquiry — $350', message: 'A & B\nSecond line'};
  let calls = 0;
  await submitInquiry(payload, (async (url, options) => {
    calls++; assert.equal(url, INQUIRY_ENDPOINT); assert.ok(String(url).includes('wellridgegroup.com'));
    assert.equal(options?.method, 'POST'); assert.deepEqual(JSON.parse(String(options?.body)), payload); assert.ok(options?.signal);
    return new Response(JSON.stringify({success: 'true', message: 'The form was submitted successfully.'}));
  }) as typeof fetch);
  assert.equal(calls, 1);
});
test('network, server, malformed and unconfirmed responses fail without automatic retries', async () => {
  for (const result of [new Error('offline'), new Response('{}', {status: 503}), new Response('not JSON'), new Response('{"success":true,"message":"Activate your form"}')]) {
    let calls = 0;
    await assert.rejects(submitInquiry({message: 'Keep my message'}, (async () => {calls++; if (result instanceof Error) throw result; return result;}) as typeof fetch));
    assert.equal(calls, 1);
  }
});
