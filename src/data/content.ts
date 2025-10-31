import { Attorney, PracticeArea, Testimonial, ContactInfo } from '../types';

export const contactInfo: ContactInfo = {
  phone: '(513) 382-6543',
  alternatePhone: '(513) 792-2276',
  email: 'hlhewittlaw@aol.com',
  address: '7659 Montgomery Rd Suite 2, Cincinnati, OH 45236'
};

export const attorneys: Attorney[] = [
  {
    id: 'h-leon-hewitt',
    name: 'H. Leon Hewitt',
    title: 'Attorney',
    bio: 'H. Leon Hewitt is an experienced attorney with years of legal experience in the fields of divorce, traffic and bankruptcy law. He handles cases professionally and meticulously, always being available to answer client questions and respond quickly to concerns.',
    profileUrl: '/h-leon-hewitt/'
  },
  {
    id: 'mary-t-foster',
    name: 'Mary T. Foster',
    title: 'Attorney',
    bio: 'Mary T. Foster specializes in bankruptcy law and other legal areas. She handles cases professionally and with care for each client\'s unique situation, providing comprehensive legal support.',
    profileUrl: '/mary-t-foster/'
  }
];

export const practiceAreas: PracticeArea[] = [
  {
    id: 'bankruptcy-law',
    title: 'Bankruptcy Law',
    description: 'Get the fresh start you deserve with our experienced bankruptcy attorneys.',
    services: [
      'Chapter 7 Bankruptcy',
      'Chapter 13 Bankruptcy',
      'Debt Relief Solutions',
      'Asset Protection'
    ],
    icon: 'Scale',
    detailUrl: '/bankruptcy-law-cincinnati-oh/'
  },
  {
    id: 'traffic-law',
    title: 'Traffic Law',
    description: 'Expert representation for traffic violations and related legal matters.',
    services: [
      'Speeding Tickets',
      'Traffic Violation Defense',
      'License Suspension',
      'DUI Defense'
    ],
    icon: 'Car',
    detailUrl: '/traffic-law-cincinnati-oh/'
  },
  {
    id: 'divorce-law',
    title: 'Divorce Law',
    description: 'Compassionate legal guidance through divorce and family law matters.',
    services: [
      'Divorce Settlement',
      'Child Custody',
      'Asset Division',
      'Family Mediation'
    ],
    icon: 'Heart',
    detailUrl: '/divorce-law-cincinnati-oh/'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    text: 'Mr. Hewitt handled my case professionally and meticulously. He was also always available to answer my questions and responded quickly to any of my concerns.',
    author: 'Patricia M.',
    rating: 5
  },
  {
    id: '2',
    text: 'She does more than Bankruptcy but from my experience, I would definitely recommend her. My case was handled professionally and with care for my situation.',
    author: 'Wayne B.',
    rating: 5
  }
];

export const covidStatement = {
  title: 'Virus Statement',
  content: `Hewitt Foster Legal Group, LTD is complying with the shelter in place public health order in OHIO. We are working remotely and will continue to do so until the order is lifted or modified.

EVEN THOUGH OUR PHYSICAL OFFICE IS OPEN, WE ARE ALSO AVAILABLE BY PHONE AND EMAIL. WE REMAIN FULLY ENGAGED AND READY TO PROVIDE SUPPORT AND EXCELLENT SERVICE WITHOUT INTERRUPTION.

As of today, most courts are still providing limited services, but are closed to the public. Essentially all matters on calendar for the next three weeks have been continued or postponed.

Some courts are proceeding with limited calendars but requiring that attorneys appear by telephone or video.

If you have an active matter before the courts, we will keep you informed about schedules and hearings.

For our business clients, we are following the Federal, State and local directives concerning COVID-19 and its effects on business operations or pending transactions.

Please feel free to contact us if you have any questions or we may be of any assistance to you. The best way to do so is by email or phone.

Most importantly, during this Public Health Emergency, please take care of yourself and your loved ones.`
};