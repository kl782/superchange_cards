// components/cards.js

const cards = [
  [
  {
    "id": 1,
    "subtitleAbove": "I want to...",
    "title": "Supercharge Slack",
    "subtitleBelow": "...by",
    "content": "",
    "buttons": [
      {
        "text": "Going Further with Slack AI",
        "url": "#2"
      },
      {
        "text": "Bringing Tools Into Slack",
        "url": "#3"
      },
      {
        "text": "Extending Slack Capabilities",
        "url": "#4"
      }
    ],
    "media": "",
    "type": "buttons",
    "category": "",
    "canShuffle": false
  },
  {
    "id": 2,
    "subtitleAbove": "I'd like to...",
    "title": "Go Further with Slack AI",
    "subtitleBelow": "",
    "content": "",
    "buttons": [
      {
        "text": "Overview",
        "url": "#5"
      },
      {
        "text": "Slack Search (Extended)",
        "url": "#6"
      },
      {
        "text": "Slack Summary (Extended)",
        "url": "#7"
      }
    ],
    "media": "",
    "type": "buttons",
    "category": "",
    "canShuffle": false
  },
  {
    "id": 3,
    "subtitleAbove": "Here are some ways to...",
    "title": "Bring Tools Into Slack",
    "subtitleBelow": "",
    "content": "",
    "buttons": [],
    "media": "",
    "type": "written",
    "category": "",
    "canShuffle": false
  },
  {
    "id": 4,
    "subtitleAbove": "",
    "title": "Extending Slack's Capabilities",
    "subtitleBelow": "",
    "content": "PLACEHOLDER",
    "buttons": [],
    "media": "",
    "type": "written",
    "category": "",
    "canShuffle": false
  },
  {
    "id": 5,
    "subtitleAbove": "",
    "title": "Overview",
    "subtitleBelow": "",
    "content": "PLACEHOLDER",
    "buttons": [],
    "media": "",
    "type": "written",
    "category": "",
    "canShuffle": false
  },
  {
    "id": 6,
    "subtitleAbove": "",
    "title": "Search",
    "subtitleBelow": "with Slack AI",
    "content": "First, take a look at Slack's [guide to searching](http://let'sgetthaturl.com)\nHere are three more suggestions:\n- **1) Avoid hyperspecificity**: At the time of recording, Slack AI sometimes hallucinates responses to queries about things that were discussed, but not in a significant way. *E.g. Who edited [one, specific brief]?* If you are ever in doubt, check it against the source, hyperlinked in [square brackets] \n",
    "buttons": [
      {
        "text": "2) [keyword] + ?",
        "url": "#8"
      },
      {
        "text": "3) Uncover message context",
        "url": "#9"
      },
      {
        "text": "Show me some alternatives",
        "url": "#10"
      }
    ],
    "media": "",
    "type": "written",
    "category": "",
    "canShuffle": false
  },
  {
    "id": 7,
    "subtitleAbove": "",
    "title": "Summarize",
    "subtitleBelow": "with Slack AI",
    "content": "",
    "buttons": [],
    "media": "",
    "type": "buttons",
    "category": "",
    "canShuffle": false
  },
  {
    "id": 8,
    "subtitleAbove": "Use the prompt",
    "title": "[Keyword] + ?",
    "subtitleBelow": "to brainstorm more angles to a single topic.",
    "content": "[Placeholder video until edits are in]\nCurious about a topic, but not sure what to ask? Slack AI also generates recommended questions. These appear on regular searches from time to time, but to reliably call on it, type: [keyword] + ?\n\n- You can also use this to pull up timeframes that are of interest.\n- Note: This method is a keyword search, not semantic search.",
    "buttons": [],
    "media": "https://www.youtube.com/watch?v=7216J7j3cp0",
    "type": "written",
    "category": "",
    "canShuffle": false
  },
  {
    "id": 9,
    "subtitleAbove": "Use the prompt",
    "title": "[copy-pasted message] + context of this message?",
    "subtitleBelow": "to uncover missing context",
    "content": "[Placeholder video]\nIf you've pulled up an isolated message and wonder how it fits into a broader conversation, try this prompt! \nLearn more in the video below:",
    "buttons": [],
    "media": "https://www.youtube.com/watch?v=7216J7j3cp0",
    "type": "",
    "category": "",
    "canShuffle": false
  }
]

  // Add more cards with different categories as needed
];

export default cards;

