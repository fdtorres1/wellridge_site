import { submitInquiry } from './inquiry';
const form = document.querySelector<HTMLFormElement>('#inquiry-form')!;
const fields = document.querySelector<HTMLFieldSetElement>('#inquiry-fields')!;
const service = document.querySelector<HTMLSelectElement>('#inquiry-service')!;
const packageSelect = document.querySelector<HTMLSelectElement>('#inquiry-package')!;
const packageField = document.querySelector<HTMLElement>('#package-field')!;
const detailLabel = document.querySelector<HTMLElement>('#detail-label')!;
const sendButton = document.querySelector<HTMLButtonElement>('#send-inquiry')!;
const status = document.querySelector<HTMLElement>('#inquiry-status')!;
const newButton = document.querySelector<HTMLButtonElement>('#new-inquiry')!;
const fallback = document.querySelector<HTMLDetailsElement>('#email-fallback')!;
const preview = document.querySelector<HTMLElement>('#email-preview')!;
const prepared = document.querySelector<HTMLTextAreaElement>('#prepared-details')!;
const emailLink = document.querySelector<HTMLAnchorElement>('#open-email')!;
const fallbackStatus = document.querySelector<HTMLElement>('#fallback-status')!;
const params = new URLSearchParams(location.search);
if (params.get('service') === 'operations') service.value = 'operations';
const requestedPackage = params.get('package');
if (requestedPackage && ['review', 'loi', 'application'].includes(requestedPackage)) packageSelect.value = requestedPackage;
let busy = false;
let sent = false;
const read = (name: string) => (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement).value.trim();
const selected = (select: HTMLSelectElement) => select.selectedOptions[0].text;
const subject = () => service.value === 'operations' ? 'Wellridge program-operations inquiry' : 'Wellridge grant-writing inquiry';
const emailBody = () => `Service: ${selected(service)}\nPackage: ${service.value === 'operations' ? 'Separately scoped operations' : selected(packageSelect)}\nSource page: /contact\n\nName: ${read('name')}\nReply email: ${read('email')}\nOrganization: ${read('organization')}\nPublic website: ${read('website')}\nDeadline: ${read('deadline')}\n\n${read('message')}`;
const prepare = () => {
  prepared.value = emailBody();
  emailLink.href = `mailto:hello@wellridgegroup.com?subject=${encodeURIComponent(subject())}&body=${encodeURIComponent(prepared.value)}`;
  preview.classList.remove('hidden');
};
const syncService = () => {
  const operations = service.value === 'operations';
  packageField.hidden = operations; packageField.classList.toggle('block', !operations); packageSelect.disabled = operations;
  detailLabel.textContent = operations ? 'Operations deliverables and help needed (required)' : 'Funder, public instructions, and help needed (required)';
  if (!preview.classList.contains('hidden')) prepare();
};
syncService();
service.addEventListener('change', syncService);
form.addEventListener('input', () => { if (!preview.classList.contains('hidden')) prepare(); });
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (busy || sent || !form.reportValidity()) return;
  const data = Object.fromEntries(Array.from(new FormData(form).entries(), ([key, value]) => [key, String(value).trim()]));
  if (data._honey) return;
  if (!data.name || !data.email || !data.organization || !data.message) {
    status.textContent = 'Please add your name, reply email, organization, and a short description of the work.';
    status.classList.remove('hidden'); status.focus(); return;
  }
  const payload = { ...data, Service: selected(service), Package: service.value === 'operations' ? 'Separately scoped operations' : selected(packageSelect), 'Source page': '/contact', _subject: subject(), _template: 'table' };
  busy = true; fields.disabled = true; sendButton.disabled = true; sendButton.textContent = 'Sending…';
  status.textContent = 'Sending your inquiry. Please keep this page open.'; status.classList.remove('hidden');
  try {
    await submitInquiry(payload); sent = true; sendButton.textContent = 'Inquiry submitted';
    status.textContent = 'Thank you—your inquiry was submitted to Wellridge. We’ll reply to the email you provided. Your details remain in the form for reference.';
    newButton.classList.remove('hidden');
  } catch {
    fields.disabled = false; sendButton.disabled = false; sendButton.textContent = 'Try sending again';
    status.textContent = 'We couldn’t confirm submission. Your details are still here. A delayed request may still arrive; you can try again or use the email option below.';
    prepare(); fallback.open = true;
  } finally { busy = false; status.focus(); }
});
newButton.addEventListener('click', () => {
  form.reset(); fields.disabled = false; syncService(); sent = false; sendButton.disabled = false; sendButton.textContent = 'Send inquiry';
  status.classList.add('hidden'); newButton.classList.add('hidden'); preview.classList.add('hidden'); prepared.value = ''; fallbackStatus.textContent = ''; fallback.open = false; emailLink.href = 'mailto:hello@wellridgegroup.com';
  (form.elements.namedItem('name') as HTMLInputElement).focus();
});
document.querySelector('#prepare-email')!.addEventListener('click', () => { prepare(); fallbackStatus.textContent = 'Details prepared locally. Opening an email draft does not send it.'; });
document.querySelector('#copy-details')!.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(prepared.value); fallbackStatus.textContent = 'Details copied. Paste them into your email.'; }
  catch { prepared.focus(); prepared.select(); fallbackStatus.textContent = 'Select and copy the prepared details using your device’s copy command.'; }
});
// Enable data entry only after handlers are installed. Without JavaScript, use email.
fields.disabled = false;
sendButton.classList.remove('hidden');
