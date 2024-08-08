// components/cards.js

const cards = [
    {
        "id": 1,
        "subtitleAbove": "",
        "title": "Welcome!",
        "subtitleBelow": "",
        "content": "",
        "buttons": [
            {
                "text": "Browse by Tool",
                "url": "#31"
            },
            {
                "text": "Search by Task",
                "url": "#32"
            }],
        "media": "",
        "type": "",
        "category": "",
        "canShuffle": false,
        "tool": ""
    },
    {
        "id": 30,
        "subtitleAbove": ".",
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
        "canShuffle": false,
        "tool": "Slack"
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
                "text": "More on Slack Search",
                "url": "#6"
            },
            {
                "text": "More on Slack Summary",
                "url": "#7"
            }
        ],
        "media": "",
        "type": "buttons",
        "category": "",
        "canShuffle": false,
        "tool": "Slack"
    },
    {
        "id": 3,
        "subtitleAbove": "Here are some ways to...",
        "title": "Bring Tools Into Slack",
        "subtitleBelow": "",
        "content": "",
        "buttons": [
            {
                "text": "Synchronize Support",
                "url": "#26"
            },
            {
                "text": "Manage Teams",
                "url": "#27"
            },
            {
                "text": "Access AI Models",
                "url": "#28"
            },
            {
                "text": "Wildcard: Do Anything",
                "url": "29"
            },
            {
                "text": "Back to Slack Overview",
                "url": "#30"
            }
        ],
        "media": "",
        "type": "written",
        "category": "",
        "canShuffle": false,
        "tool": "Slack"
    },
    {
        "id": 4,
        "subtitleAbove": "",
        "title": "Extending Slack's Capabilities",
        "subtitleBelow": "",
        "content": "",
        "buttons": [
            {
                "text": "Back to Slack",
                "url": "#30"
            },
            {
                "text": "Link to our list",
                "url": "http://superxchange.dora.run/card4"
            }
        ],
        "media": "",
        "type": "written",
        "category": "",
        "canShuffle": false,
        "tool": "Slack"
    },
    {
        "id": 5,
        "subtitleAbove": "Here's an",
        "title": "Overview",
        "subtitleBelow": "of Slack AI:",
        "content": "",
        "buttons": [
            {
                "text": "Back to Slack",
                "url": "#30"
            }
        ],
        "media": "https://www.youtube.com/watch?v=GaMrFJqpa2Y",
        "type": "written",
        "category": "",
        "canShuffle": false,
        "tool": "Slack"
    },
    {
        "id": 6,
        "subtitleAbove": "",
        "title": "Search",
        "subtitleBelow": "with Slack AI",
        "content": "First, take a look at Slack's [tips for searching](https://slack.com/intl/en-sg/help/articles/25604701408275-Tips-for-searching-with-Slack-AI). Here are three more ideas:- **1) Avoid hyperspecificity**: At least at the time of writing, Slack AI sometimes hallucinates responses to questions on extremely specific tasks. If you are ever in doubt, check it against the source, hyperlinked in square brackets -- and wherever you can, rephrase the question broadly, so Slack doesn't jump the gun.",
        "buttons": [
            {
                "text": "2) [Keyword] + ?",
                "url": "#8"
            },
            {
                "text": "3) Uncover message context",
                "url": "#9"
            },
            {
                "text": "Show me some alternatives",
                "url": "#10"
            },
            {
                "text": "Go back",
                "url": "#5"
            }
        ],
        "media": "",
        "type": "written",
        "category": "",
        "canShuffle": false,
        "tool": "Slack"
    },
    {
        "id": 7,
        "subtitleAbove": "",
        "title": "Summarize",
        "subtitleBelow": "with Slack AI",
        "content": "",
        "buttons": [
            {
                "text": "Ideas",
                "url": "http://superxchange.dora.run/card7"
            },
            {
                "text": "Go back",
                "url": "#5"
            }
        ],
        "media": "",
        "type": "buttons",
        "category": "",
        "canShuffle": false,
        "tool": "Slack"
    },
    {
        "id": 8,
        "subtitleAbove": "Use the prompt",
        "title": "[Keyword] + ?",
        "subtitleBelow": "to brainstorm more angles to a single topic.",
        "content": "Curious about a topic, but not sure what to ask? Slack AI also generates recommended questions. These appear on regular searches from time to time, but to reliably call on it, type: [Keyword] + ? ",
        "buttons": [
            {
                "text": "Go back",
                "url": "#6"
            }
        ],
        "media": "https://www.youtube.com/watch?v=NM1cMlSG-jk",
        "type": "written",
        "category": "",
        "canShuffle": false,
        "tool": "Slack"
    },
    {
        "id": 9,
        "subtitleAbove": "Use the prompt",
        "title": "[copy-pasted message] + context of this message?",
        "subtitleBelow": "to uncover missing context",
        "content": "If you've pulled up an isolated message and wonder how it fits into a broader conversation, try this prompt! Learn more in the video below:",
        "buttons": [
            {
                "text": "Go back",
                "url": "#6"
            }
        ],
        "media": "https://www.youtube.com/watch?v=wPObo0dENbs",
        "type": "",
        "category": "",
        "canShuffle": false,
        "tool": "Slack"
    },
    {
        "id": 10,
        "subtitleAbove": "I'd like to...",
        "title": "Automate Gmail",
        "subtitleBelow": "to...",
        "content": "",
        "buttons": [
            {
                "text": "Auto-sort and Prioritize emails",
                "url": "#11"
            },
            {
                "text": "Auto-extract insights",
                "url": "#12"
            },
            {
                "text": "Automate Digests",
                "url": "#13"
            },
            {
                "text": "Chat with your Inbox",
                "url": "#14"
            },
            {
                "text": "Go back",
                "url": "#1"
            }
        ],
        "media": "https://www.youtube.com/watch?v=3v0EY-h7lPE",
        "type": "title",
        "category": "",
        "canShuffle": false,
        "tool": "Gmail"
    },
    {
        "id": 11,
        "subtitleAbove": "",
        "title": "Auto-sort and Prioritize emails",
        "subtitleBelow": "with Shortwave",
        "content": "",
        "buttons": [
            {
                "text": "Go back",
                "url": "#10"
            }
        ],
        "media": "https://www.youtube.com/watch?v=sOcBw06khMc",
        "type": "",
        "category": "",
        "canShuffle": false,
        "tool": "Gmail"
    },
    {
        "id": 12,
        "subtitleAbove": "",
        "title": "Auto-extract insights",
        "subtitleBelow": "wiith Zapier",
        "content": "",
        "buttons": [
            {
                "text": "Shuffle Ideas",
                "url": "#16"
            },
            {
                "text": "Recommended: Ideas from Zapier",
                "url": "https://zapier.com/blog/automate-gmail-with-zapier/"
            }
        ],
        "media": "",
        "type": "",
        "category": "",
        "canShuffle": false,
        "tool": "Gmail"
    },
    {
        "id": 13,
        "subtitleAbove": "",
        "title": "Automate Digests",
        "subtitleBelow": "with Cognosys",
        "content": "",
        "buttons": [
            {
                "text": "Go back",
                "url": "#10"
            }
        ],
        "media": "https://www.youtube.com/watch?v=Z-Nmq8sIJVg",
        "type": "",
        "category": "",
        "canShuffle": false,
        "tool": "Gmail"
    },
    {
        "id": 14,
        "subtitleAbove": "",
        "title": "Chat with your Inbox",
        "subtitleBelow": "with Gemini for Gmail",
        "content": "",
        "buttons": [
            {
                "text": "Learn More: Google Blog",
                "url": "https://support.google.com/mail/answer/14199860?hl=EN"
            },
            {
                "text": "See Ideas",
                "url": "#21"
            },
            {
                "text": "Go back",
                "url": "#10"
            }
        ],
        "media": "",
        "type": "",
        "category": "",
        "canShuffle": false,
        "tool": "Gmail"
    },
    {
        "id": 15,
        "subtitleAbove": "",
        "title": "Add Costs From An Email Directly Into Splitwise",
        "subtitleBelow": "with Zapier",
        "content": "",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#10"
            }
        ],
        "media": "https://youtu.be/VHsPgxTAFIE",
        "type": "category2",
        "category": "",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 16,
        "subtitleAbove": "",
        "title": "Send Google Alert Links to a Spreadsheet",
        "subtitleBelow": "with Zapier",
        "content": "",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#10"
            }
        ],
        "media": "https://youtu.be/BM8t28EMu6E",
        "type": "category2",
        "category": "",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 17,
        "subtitleAbove": "",
        "title": "Collate Weekly Updates into a Single Document",
        "subtitleBelow": "with Zapier",
        "content": "",
        "buttons": [
            {
                "text": "Read Our Step-by-step Guide",
                "url": "https://www.glitter.io/guides/how-to-automate-tasks-with-zapier-step-by-step-guide"
            },
            {
                "text": "Go Back",
                "url": "#10"
            }
        ],
        "media": "",
        "type": "category2",
        "category": "",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 18,
        "subtitleAbove": "",
        "title": "Automatic Slack Notifications for High-Stakes Emails",
        "subtitleBelow": "with Zapier",
        "content": "",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#10"
            }
        ],
        "media": "",
        "type": "category2",
        "category": "",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 19,
        "subtitleAbove": "",
        "title": "Describe and Classify Audio and Image Attachments ",
        "subtitleBelow": "with Zapier",
        "content": "",
        "buttons": [
            {
                "text": "Read our Step-by-step Guide",
                "url": "https://www.glitter.io/guides/how-to-automate-gmail-attachments-with-zapier-and-gemini"
            },
            {
                "text": "Go Back",
                "url": "#10"
            }
        ],
        "media": "",
        "type": "category2",
        "category": "",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 20,
        "subtitleAbove": "",
        "title": "Funnel Customer Support Queries",
        "subtitleBelow": "with Zapier",
        "content": "",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#10"
            }
        ],
        "media": "",
        "type": "category2",
        "category": "",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 21,
        "subtitleAbove": "",
        "title": "Brainstorm Ideas",
        "subtitleBelow": "with Gemini for Gmail",
        "content": "",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#14"
            }
        ],
        "media": "",
        "type": "category3",
        "category": "",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 22,
        "subtitleAbove": "",
        "title": "Process Newsletters and Digests",
        "subtitleBelow": "with Gemini for Gmail",
        "content": "",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#14"
            }
        ],
        "media": "",
        "type": "category3",
        "category": "",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 23,
        "subtitleAbove": "",
        "title": "Advanced Filtering",
        "subtitleBelow": "with Gemini for Gmail",
        "content": "",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#14"
            }
        ],
        "media": "",
        "type": "category3",
        "category": "",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 24,
        "subtitleAbove": "",
        "title": "Manage Subscriptions",
        "subtitleBelow": "with Gemini for Gmail",
        "content": "",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#14"
            }
        ],
        "media": "",
        "type": "category3",
        "category": "",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 25,
        "subtitleAbove": "",
        "title": "Get Advice on Affirming Colleagues",
        "subtitleBelow": "with Gemini for Gmail",
        "content": "",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#14"
            }
        ],
        "media": "",
        "type": "category3",
        "category": "",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 26,
        "subtitleAbove": "Bring Tools Into Slack:",
        "title": "Synchronize Support",
        "subtitleBelow": "",
        "content": "",
        "buttons": [
            {
                "text": "View resource bin",
                "url": "http://superxchange.dora.run/card26"
            },
            {
                "text": "Go Back",
                "url": "#3"
            }
        ],
        "media": "",
        "type": "category4",
        "category": "",
        "canShuffle": true,
        "tool": "Slack"
    },
    {
        "id": 27,
        "subtitleAbove": "Bring Tools Into Slack:",
        "title": "Manage Teams",
        "subtitleBelow": "",
        "content": "Look out for work tasks -- and for the people you're doing these tasks with.",
        "buttons": [
            {
                "text": "View resource bin",
                "url": "http://superxchange.dora.run/card27"
            },
            {
                "text": "Go Back",
                "url": "#3"
            }
        ],
        "media": "",
        "type": "category4",
        "category": "",
        "canShuffle": true,
        "tool": "Slack"
    },
    {
        "id": 28,
        "subtitleAbove": "Bring Tools Into Slack:",
        "title": "Access AI Models",
        "subtitleBelow": "",
        "content": "",
        "buttons": [
            {
                "text": "View resource bin",
                "url": "http://superxchange.dora.run/card28"
            },
            {
                "text": "Go Back",
                "url": "#3"
            }
        ],
        "media": "",
        "type": "category4",
        "category": "",
        "canShuffle": true,
        "tool": "Slack"
    },
    {
        "id": 29,
        "subtitleAbove": "Bring Tools Into Slack:",
        "title": "Wildcard: Do Anything",
        "subtitleBelow": "with Zapier Central",
        "content": "Zapier Central is a tool-using chatbot -- think, doing a wide range of tasks from adding songs to a Spotify playlist to sending out an email, just through chatting. Zapier's strength is multi-step automations. This might not seem like much, until we remember that editing a Spreadsheet row is a two-step process -- find rows, then edit row -- and many chatbots, built on the fluidity of probability, don't always have the precision needed to carry data from Step A to Step B. Great news -- Zapier Central now integrates with Slack! To learn more, click below.",
        "buttons": [
            {
                "text": "Learn More",
                "url": "http://superxchange.dora.run/card29"
            },
            {
                "text": "Go Back",
                "url": "#3"
            }
        ],
        "media": "",
        "type": "category4",
        "category": "",
        "canShuffle": true,
        "tool": "Slack"
    },
    {
        "id": 31,
        "subtitleAbove": "",
        "title": "Browse by Tool!",
        "subtitleBelow": "",
        "content": "",
        "buttons": [
            {
                "text": "Slack",
                "url": "#30"
            },
            {
                "text": "Gmail",
                "url": "#10"
            },
            {
                "text": "Go back",
                "url": "#1"
            }
        ],
        "media": "",
        "type": "",
        "category": "",
        "canShuffle": false,
        "tool": ""
    },
    {
        "id": 32,
        "subtitleAbove": "",
        "title": "Search by Task",
        "subtitleBelow": "",
        "content": "Here, users will be able to input and submit text (trailing after the sentence stem, \"I would like to...\"), and this will be sent to Qdrant cluster where each row saved as a single item is stored. It should return the 3-5 rows most similar to the user's input. Ideally, these results will link directly to the necessary cards, or generate buttons that users can press to access these cards (i.e. write out the button JSON -- would require a reliable enough LLM)",
        "buttons": [
            {
                "text": "Go back",
                "url": "#1"
            }
        ],
        "media": "",
        "type": "",
        "category": "",
        "canShuffle": false,
        "tool": ""
    }
];

export default cards;

