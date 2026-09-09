export const INQUIRY_ENDPOINT = 'https://formsubmit.co/ajax/hello@wellridgegroup.com';
export function providerAccepted(response: unknown): boolean {
  if (!response || typeof response !== 'object') return false;
  const value = response as { success?: unknown; message?: unknown };
  return (value.success === true || value.success === 'true') && value.message === 'The form was submitted successfully.';
}
export async function submitInquiry(payload: Record<string, string>, send: typeof fetch = fetch): Promise<void> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);
  try {
    const response = await send(INQUIRY_ENDPOINT, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(payload), signal: controller.signal });
    if (!response.ok || !providerAccepted(await response.json())) throw new Error('Submission not confirmed');
  } finally { clearTimeout(timeout); }
}
