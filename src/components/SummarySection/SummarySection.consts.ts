export const SUMMARY_SECTION_LABEL = 'Summary';

export type SummaryItem = {
  id: string;
  label: string;
  description: string;
  imageSrc?: string;
};

export const SUMMARY_INTRO = {
  greeting: "Hi, I'm",
  name: 'Karolina Bauman',
  description:
    'I do digital marketing, wrangle teams, make crafty things, and turn random ideas into something worth sharing.',
};

export const SUMMARY_ITEMS: SummaryItem[] = [
  {
    id: 'BOLDShift',
    label: 'At BOLDShift, I lead digital marketing powered by people, creativity, and AI',
    imageSrc: '/boldshift-logo.jpg',
    description:
      'As Digital Marketing Director at BOLDShift, I lead marketing initiatives across strategy, content, campaigns, and digital growth. I use AI tools such as Claude and Codex to accelerate research, ideation, content creation, and workflows, while keeping the human side of marketing at the center. I also manage teams and turn ambitious ideas into campaigns that actually get shipped.',
  },
  {
    id: 'Honne',
    label: 'At Honne, I ran digital marketing campaigns for clients across Europe and Asia',
    imageSrc: '/honne-logo.jpg',
    description:
      'As a Digital Marketing Specialist at Lets Pro, I worked on large-scale campaigns for clients across European and Asian markets. I combined campaign strategy, content, social media, performance marketing, and analytics to help brands reach the right audiences. Working across different markets taught me how to adapt ideas, communicate clearly, and keep many moving pieces on track.',
  },
  {
    id: 'Science',
    label: 'I have a curious streak for science, nanotechnology, and how tiny things shape big ideas',
    imageSrc: '/nano.png',
    description:
      'I have always been fascinated by science and emerging technologies, especially the world of nanotechnology. Exploring how materials and systems behave at incredibly small scales scratches the same itch as marketing: understanding how small changes can create surprisingly big effects.',
  },
  {
    id: 'Making',
    label: 'I like making things with my hands just as much as making things happen',
    imageSrc: '/hands.png',
    description:
      'When I am away from screens, I like working on crafty projects, experimenting with materials, fixing things, and making random ideas tangible. It is a nice counterbalance to digital work and a reminder that not everything needs a dashboard, a strategy deck, or an AI assistant.',
  },
  {
    id: 'Side Projects',
    label: 'In my free time, I start side projects purely because they seem interesting',
    imageSrc: '/side-projects.gif',
    description:
      'My side projects tend to follow whatever I am curious about at the moment. Sometimes that means experimenting with AI and new digital tools, sometimes building something, and sometimes going down a completely unnecessary rabbit hole just to see where it leads. The common thread is curiosity, experimentation, and making things for the fun of it.',
  },
];
