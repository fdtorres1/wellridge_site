export type GrantOffer = {
  id: 'review' | 'loi' | 'application';
  name: string;
  shortName: string;
  price: string;
  payment: string;
  description: string;
  deliverables: string[];
  timing: string;
  servicePath?: string;
};

export const grantOffers: GrantOffer[] = [
  {
    id: 'review',
    servicePath: '/grant-application-review',
    name: 'Existing application review',
    shortName: 'Application review',
    price: '$295',
    payment: 'paid upfront',
    description: 'Review of a narrative up to 2,000 words against one funder rubric or instruction set, with tracked edits and a missing-items checklist.',
    deliverables: ['One narrative review', 'Tracked edits', 'Missing-items checklist'],
    timing: 'First draft within 3 business days after complete materials and access.',
  },
  {
    id: 'loi',
    servicePath: '/letter-of-inquiry-writing',
    name: 'Letter of inquiry',
    shortName: 'Letter of inquiry',
    price: '$350',
    payment: 'paid upfront',
    description: 'A letter up to two pages for one identified funder, using an existing approved program and budget, with one revision.',
    deliverables: ['One letter up to two pages', 'One identified funder', 'One revision'],
    timing: 'First draft within 3 business days after complete materials and access.',
  },
  {
    id: 'application',
    name: 'Short foundation application',
    shortName: 'Foundation application',
    price: '$750',
    payment: '$375 to begin and $375 on delivery of the agreed submission-ready package',
    description: 'One identified opportunity, up to 2,000 narrative words, an attachment checklist, and one consolidated revision using an approved program and budget.',
    deliverables: ['One foundation opportunity', 'Up to 2,000 narrative words', 'Attachment checklist', 'One consolidated revision'],
    timing: 'First draft within 5–7 business days after complete materials and access.',
  },
];

export const grantOfferById = Object.fromEntries(grantOffers.map((offer) => [offer.id, offer]));
