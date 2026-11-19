// EDIT THIS FILE FIRST when you want to update Bhavya's portfolio.
// Replace the sample copy and links with details she has confirmed.
// Portrait: add public/images/bhavya-portrait.jpg (or change portrait below).

export const portfolio = {
  name: 'Bhavya',
  initials: 'B.',
  eyebrow: 'A curious mind · A creative spirit',
  headline: 'Making room for ideas, expression & possibility.',
  intro: 'I’m interested in the places where communication, creativity and thoughtful problem-solving meet.',
  location: 'Vadodara, India',
  email: 'hello@example.com', // Replace with her preferred public email.
  portrait: '/images/portrait-placeholder.svg',
  socials: [
    { label: 'Instagram', url: '#' },
    { label: 'LinkedIn', url: '#' },
    { label: 'YouTube', url: '#' },
  ],
  about: [
    'I enjoy learning across disciplines, finding new ways to express ideas, and taking on projects that challenge the way I think.',
    'This portfolio is a growing record of the work, interests and experiences that matter to me — from communication and writing to music and collaborative projects.',
  ],
  focus: ['Public speaking & debate', 'Writing & storytelling', 'Music & guitar', 'Research & collaboration'],
  projects: [
    {
      number: '01',
      type: 'Collaborative project · Space exploration',
      title: 'Paradigm Shift',
      description: 'A project exploring how Earth environments can help us understand potential analogue locations for future lunar and Martian exploration.',
      note: 'NASA Space Apps · Collaborative work',
      link: 'link: 'https://bhavyatuhin.github.io/Paradigm-Shift-/',',
    },
    {
      number: '02',
      type: 'Collaborative project · Language & technology',
      title: 'BANGUJ Bridge',
      description: 'A multilingual disaster-intelligence concept focused on making important information more accessible across language communities.',
      note: 'Collaborative work · Details to be confirmed',
      link: 'https://ban-guj-bridge.vercel.app/',
    },
    {
      number: '03',
      type: 'Independent work · Coming soon',
      title: 'A space for the next idea',
      description: 'A place for a future research, writing, speaking or creative project.',
      note: 'Portfolio placeholder',
      link: '#',
    },
  ],
  recognition: [
    { title: 'Awards & recognitions', detail: 'Add verified award, issuing organization and year here.', year: '—' },
    { title: 'Certificates & participation', detail: 'Add selected certificates and official verification links here.', year: '—' },
  ],
  creative: [
    { title: 'Words', detail: 'Writing, storytelling and ideas worth exploring.', mark: '01' },
    { title: 'Voice', detail: 'Singing, performance and finding a personal sound.', mark: '02' },
    { title: 'Strings', detail: 'Learning guitar and enjoying the process of making music.', mark: '03' },
  ],
  publications: [
    { title: 'Lights Out', detail: 'Book listing and publication details to be confirmed.', link: '#' },
  ],
} as const
