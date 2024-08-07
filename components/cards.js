// components/cards.js

const cards = [
  {
    id: 1,
    title: 'Classifying Content',
    subtitleAbove: 'Overview',
    subtitleBelow: 'with Dokkio',
    content: 'Dokkio reads your Google Drive and sorts its contents into suggested categories.',
    link: '/card2',
    type: 'writeup',
    category: 'category1',
    buttons: [
      { text: 'Watch the tutorial', url: '/tutorial' },
      { text: 'Read the guide', url: '/guide' },
      { text: 'Next Card', url: '#2' }
    ],
    media: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: 'Reimagine Google Drive',
    subtitleAbove: 'I want to...',
    subtitleBelow: 'by:',
    content: 'I want to...',
    link: '/card3',
    type: 'buttons',
    category: 'category1',
    buttons: [
      { text: 'Chatting with my Documents', url: '/chatting' },
      { text: 'Classifying Content', url: '/classifying' },
      { text: 'Renaming Documents', url: '/renaming' },
      { text: 'Previous Card', url: '#1' }
    ],
    media: 'https://www.example.com/video.mp4'
  },
  // Add more cards with different categories as needed
];

export default cards;

