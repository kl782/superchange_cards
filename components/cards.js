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
        "media": "https://www.youtube.com/embed/GaMrFJqpa2Y?si=BloUxWiMnBIOacFP",
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
        "content": "Here is a brief rundown, and some ideas for how else you can use these tools.",
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
        "content": "You can make Slack your one-stop platform for just about anything you need to do -- track support tickets, send emails, manage teams -- thanks to Integrations. We are compiling a list of integrations that we find interesting -- check them out below.",
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
        "content": "Over time, your Slack becomes more than just a communication platform -- it becomes a database of information, and a platform to collect curated insights. Here are some ways we are thinking of extending these capabilities:",
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
        "content": "Slack's 3 AI features are: AI-powered search, AI-powered summarization and Recap. Learn more below. ",
        "buttons": [
            {
                "text": "Back to Slack",
                "url": "#30"
            }
        ],
        "media": "https://www.youtube.com/embed/GaMrFJqpa2Y?si=BloUxWiMnBIOacFP",
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
        "content": "Summaries on Slack are bound by just one parameter: time. Here are some ideas for adjusting this parameter.",
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
        "media": "https://www.youtube.com/embed/NM1cMlSG-jk?si=qYqCVS2EGI5CAqAJ",
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
        "media": "https://www.youtube.com/embed/wPObo0dENbs?si=82BYl5L6ra7Ouiox",
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
        "media": "https://www.youtube.com/embed/3v0EY-h7lPE?si=aeWZ03BLChZ9ZZoQ",
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
        "content": "Shortwave lets you treat your inbox like a to-do list -- that means filtering out emails you don't need to take action on, and grouping, snoozing, and ticking off emails that you do. Personally, I think it's a great way to streamline email-related tasks, and segment taking action as distinct from passively reading threads we have only a tangential relationship with. We take a tour below:",
        "buttons": [
            {
                "text": "Go back",
                "url": "#10"
            }
        ],
        "media": "https://www.youtube.com/embed/sOcBw06khMc?si=dZSvqRAl9Kw0PGzH",
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
        "content": "Zapier lets you directly connect Gmail to over 6000 applications. That's a lot of possible workflows! From automatically logging receipts into Splitwise, to sorting Google Alert links within a Spreadsheet, here are some ideas to get you started.",
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
        "content": "Maybe there's a lot taking place in your inbox each day, and you don't want to have to sift through every single email to get a high-level sense of what's going on. Set up an automation in Cognosys to summarize key emails for you on your behalf, at a cadence of your choice. For example: Every day at 5pm, send me a brief summary of the 3 key things I need to know. See more in our video:",
        "buttons": [
            {
                "text": "Go back",
                "url": "#10"
            }
        ],
        "media": "https://www.youtube.com/embed/Z-Nmq8sIJVg?si=ixtNCFJGGDEkS0VL",
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
        "content": "Ever wished you could chat with your inbox? Enter Gemini for Gmail. Here are some ideas to get started, ranging from potentially helpful to slightly quirky.",
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
        "content": "Zapier's Email Parser is great for extracting systematic information that might be formatted differently across senders. In our example, we've pulled up receipts (different vendor, different format). But this could just as well apply to news digests from different publications, subscription renewal notifications, or meeting reminders. Give it a go! And as always, because it's Zapier, we can take this information and plug it into almost any app: here, we send it to Splitwise. ",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#10"
            }
        ],
        "media": "https://youtu.be/VHsPgxTAFIE",
        "type": "",
        "category": "category2",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 16,
        "subtitleAbove": "",
        "title": "Send Google Alert Links to a Spreadsheet",
        "subtitleBelow": "with Zapier",
        "content": "When we set Gmail as our automation trigger in Zapier, we have the opportunity to extract pretty fine-grained information. Here, we're working with Google Alerts because its format is reliably consistent. But this also applies to many other newsletters, confirmation emails, customer ticket notifications -- in other words, *most things* that come from a single vendor. Is a certain format of email central to any of your Gmail workflows? Consider extracting that information and automating what you do with it. Hint: You could even send these nuggets of information to ChatGPT to classify, summarize or respond to!   Here, we also include paths, so we sort this information to the right destination.",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#10"
            }
        ],
        "media": "https://youtu.be/BM8t28EMu6E",
        "type": "",
        "category": "category2",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 17,
        "subtitleAbove": "",
        "title": "Collate Weekly Updates into a Single Document",
        "subtitleBelow": "with Zapier",
        "content": "Sometimes, the relevance of a weekly update persists past that week. If you've ever reached the end of a quarter, and wished you could seamlessly scroll through a record of what happened week-by-week within a single document, you're in luck.",
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
        "type": "",
        "category": "category2",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 18,
        "subtitleAbove": "",
        "title": "Automatic Slack Notifications for High-Stakes Emails",
        "subtitleBelow": "with Zapier",
        "content": "Some communiques are more critical than others. Set up an automation that automatically notifies the team on Slack when a high-stakes partner or client replies. You can even append the message directly in your Slack notification.",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#10"
            }
        ],
        "media": "",
        "type": "",
        "category": "category2",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 19,
        "subtitleAbove": "",
        "title": "Describe and Classify Audio and Image Attachments ",
        "subtitleBelow": "with Zapier",
        "content": "Maybe you deal with a lot of attachments, and would find it useful if these could be processed in advance on your behalf. If you're starting from .doc or .pdf, searching for it with a simple text query gets the job done -- but what about audio and images?  One possible approach: every time a new attachment comes in, use Zapier to have it described by an LLM (Gemini for audio).  You can use this description to sort it further -- maybe all pictures of company events get sent directly to a Notion page, along with a first draft for a blog post.  Maybe images related to specific social media projects are sent to the relevant Slack channel.  Maybe audio recordings of keynote speeches on Topic A are forwarded to the marketing team to be trimmed and reposted, and on Topic B, summarized with key points sent to the whole company via email.  Try it out! For tips on how to get this set up, click below for our step-by-step guide.",
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
        "type": "",
        "category": "category2",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 20,
        "subtitleAbove": "",
        "title": "Funnel Customer Support Queries",
        "subtitleBelow": "with Zapier",
        "content": "Maybe you have dedicated platforms and email addresses for customer support queries -- but how do you quickly bring the rogue email where it needs to go? Set up an automation that automatically forwards emails with a specified label to the right Slack channel, Jira board, or other inbox. ",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#10"
            }
        ],
        "media": "",
        "type": "",
        "category": "category2",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 21,
        "subtitleAbove": "",
        "title": "Brainstorm Ideas",
        "subtitleBelow": "with Gemini for Gmail",
        "content": "If your project is well-documented within your Gmail inbox, why not use these as a base to brainstorm with Gemini?   *Sample prompt*: Based on all emails from *sender* about *project* , what are some interesting directions that YOU think our project could take?   You can follow up by asking Gemini to list some pros and cons of each idea (it doesn't like to decide on best), or run a Google Search to generate more related ideas.",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#14"
            }
        ],
        "media": "",
        "type": "",
        "category": "category3",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 22,
        "subtitleAbove": "",
        "title": "Process Newsletters and Digests",
        "subtitleBelow": "with Gemini for Gmail",
        "content": "Way too much of my inbox traffic is just newsletters, so this idea comes from a personal place: If it's time to clear them off to make room for more, but you can't bear the thought of missing something interesting, ask Gemini to give you a summary of newsletters that you batch off, get summarized, and then delete.     *Sample prompt*: What were the most interesting papers highlighted in *sender name + subject of all these emails* for *time frame* ?   You can click on *Sources* to retrieve these directly from the source before deleting them!",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#14"
            }
        ],
        "media": "",
        "type": "",
        "category": "category3",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 23,
        "subtitleAbove": "",
        "title": "Advanced Filtering",
        "subtitleBelow": "with Gemini for Gmail",
        "content": "Go beyond search -- ask for Gemini's take.    *Sample prompt*: Based on emails about *project*, what are some outstanding tasks that you think *my new hire, Name*, might be well-suited to tackle?   Follow up with more context, replace names with descriptions (e.g. *a recent grad with experience in marketing*), or adjust the description for locating the relevant emails, if Gemini needs more support.",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#14"
            }
        ],
        "media": "",
        "type": "",
        "category": "category3",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 24,
        "subtitleAbove": "",
        "title": "Manage Subscriptions",
        "subtitleBelow": "with Gemini for Gmail",
        "content": "A slightly silly one -- but it can yield interesting perspectives. *Sample prompt*: If you had to recommend I unsubscribe from one existing content platform, which would it be and why?",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#14"
            }
        ],
        "media": "",
        "type": "",
        "category": "category3",
        "canShuffle": true,
        "tool": "Gmail"
    },
    {
        "id": 25,
        "subtitleAbove": "",
        "title": "Get Advice on Affirming Colleagues",
        "subtitleBelow": "with Gemini for Gmail",
        "content": "In an ideal world, hard work never goes unappreciated. This isn't always easy to keep track of, but Gemini gives us the resources to get closer to that ideal world.   *Sample prompt*: Based on work that *name* has been doing *this past 3 months*, what are some ways I can affirm them at *the upcoming board meeting*?",
        "buttons": [
            {
                "text": "Go Back",
                "url": "#14"
            }
        ],
        "media": "",
        "type": "",
        "category": "category3",
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
        "type": "",
        "category": "category4",
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
        "type": "",
        "category": "category4",
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
        "type": "",
        "category": "category4",
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
        "type": "",
        "category": "category4",
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

