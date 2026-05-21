const BIBLE_BOOKS = [
  // OLD TESTAMENT (46 books in Catholic GNT Canon)
  {
    id: "genesis",
    name: "Genesis",
    testament: "OT",
    chapters: 50,
    description: "The book of beginnings, detailing the creation of the cosmos, the origin of humanity, and the covenant established with Abraham and his descendants."
  },
  {
    id: "exodus",
    name: "Exodus",
    testament: "OT",
    chapters: 40,
    description: "The epic narrative of Israel's liberation from Egyptian slavery, their journey through the wilderness, and the receiving of the Ten Commandments."
  },
  {
    id: "leviticus",
    name: "Leviticus",
    testament: "OT",
    chapters: 27,
    description: "A sacred manual of holiness, worship, and ritual law, guiding Israel on how to live in the presence of a holy God."
  },
  {
    id: "numbers",
    name: "Numbers",
    testament: "OT",
    chapters: 36,
    description: "The story of Israel's forty-year wilderness wanderings, tracing their journeys, censuses, and lessons in trust and obedience."
  },
  {
    id: "deuteronomy",
    name: "Deuteronomy",
    testament: "OT",
    chapters: 34,
    description: "Moses' final moving addresses to Israel before entering the Promised Land, renewing the covenant and emphasizing devotion to God."
  },
  {
    id: "joshua",
    name: "Joshua",
    testament: "OT",
    chapters: 24,
    description: "The account of Israel entering, conquering, and settling the Promised Land under the courageous leadership of Joshua."
  },
  {
    id: "judges",
    name: "Judges",
    testament: "OT",
    chapters: 21,
    description: "A dramatic history of Israel's cycles of rebellion, oppression, and rescue by charismatic leaders raised up by God."
  },
  {
    id: "ruth",
    name: "Ruth",
    testament: "OT",
    chapters: 4,
    description: "A beautiful, intimate story of loyalty, redemption, and hope, tracking a Moabite widow who finds refuge in the God of Israel."
  },
  {
    id: "1-samuel",
    name: "1 Samuel",
    testament: "OT",
    chapters: 31,
    description: "Traces Israel's transition from judges to kings, highlighting the lives of Samuel, Saul, and the rise of David."
  },
  {
    id: "2-samuel",
    name: "2 Samuel",
    testament: "OT",
    chapters: 24,
    description: "Recounts the reign of King David, charting his triumphs, personal failures, and the promise of an everlasting dynasty."
  },
  {
    id: "1-kings",
    name: "1 Kings",
    testament: "OT",
    chapters: 22,
    description: "Details the golden reign of Solomon, the building of the Temple, and the tragic division of the kingdom into Israel and Judah."
  },
  {
    id: "2-kings",
    name: "2 Kings",
    testament: "OT",
    chapters: 25,
    description: "Chronicles the decline of the divided kingdoms, the ministries of Elijah and Elisha, and Israel and Judah's eventual exile."
  },
  {
    id: "1-chronicles",
    name: "1 Chronicles",
    testament: "OT",
    chapters: 29,
    description: "A grand retelling of Israel's history, focusing on King David's genealogy and his preparations for the Temple."
  },
  {
    id: "2-chronicles",
    name: "2 Chronicles",
    testament: "OT",
    chapters: 36,
    description: "Focuses on the reigns of the kings of Judah, Solomon's glory, and the spiritual reforms and failures leading up to exile."
  },
  {
    id: "ezra",
    name: "Ezra",
    testament: "OT",
    chapters: 10,
    description: "Recounts the return of the Jewish exiles from Babylon, the rebuilding of the Temple in Jerusalem, and spiritual restoration."
  },
  {
    id: "nehemiah",
    name: "Nehemiah",
    testament: "OT",
    chapters: 13,
    description: "The inspiring story of leadership and determination as Nehemiah rebuilds the walls of Jerusalem and restores the community."
  },
  {
    id: "tobit",
    name: "Tobit",
    testament: "OT",
    chapters: 14,
    description: "A heartwarming story of faith, family, and healing. Follows young Tobias and the angel Raphael on a journey to restore a family's fortune and sight."
  },
  {
    id: "judith",
    name: "Judith",
    testament: "OT",
    chapters: 16,
    description: "A powerful story of courage and deliverance. Features a brave widow who saves her entire nation from an invading army through immense daring and prayer."
  },
  {
    id: "esther",
    name: "Esther",
    testament: "OT",
    chapters: 16,
    description: "The dramatic story of Queen Esther saving her people from genocide, expanded with additional prayers and Greek historical records."
  },
  {
    id: "1-maccabees",
    name: "1 Maccabees",
    testament: "OT",
    chapters: 16,
    description: "A thrilling historical account of the Jewish revolt for religious freedom. Covers the cleansing of the Temple and the origin of Hanukkah."
  },
  {
    id: "2-maccabees",
    name: "2 Maccabees",
    testament: "OT",
    chapters: 15,
    description: "Focuses on the heroic spiritual elements of the Maccabean revolt, emphasizing the power of prayer, martyrdom, and the hope of resurrection."
  },
  {
    id: "job",
    name: "Job",
    testament: "OT",
    chapters: 42,
    description: "A profound, poetic exploration of suffering, faith, and the mysterious wisdom of God in the face of human pain."
  },
  {
    id: "psalms",
    name: "Psalms",
    testament: "OT",
    chapters: 150,
    description: "A rich collection of 150 songs, prayers, and poetry expressing the full range of human emotion in relationship with God."
  },
  {
    id: "proverbs",
    name: "Proverbs",
    testament: "OT",
    chapters: 31,
    description: "A treasury of practical wisdom, insights, and moral instructions for living a righteous and successful life."
  },
  {
    id: "ecclesiastes",
    name: "Ecclesiastes",
    testament: "OT",
    chapters: 12,
    description: "A philosophical reflection on the meaning of life, concluding that true purpose is found in fearing God and keeping His commandments."
  },
  {
    id: "song-of-solomon",
    name: "Song of Solomon",
    testament: "OT",
    chapters: 8,
    description: "A beautiful, poetic celebration of romantic love, marriage, and deep emotional devotion."
  },
  {
    id: "wisdom",
    name: "Wisdom",
    testament: "OT",
    chapters: 19,
    description: "A beautiful poetic book praising the beauty of divine wisdom, reminding us how seeking God’s truth protects and guides our souls."
  },
  {
    id: "sirach",
    name: "Sirach",
    testament: "OT",
    chapters: 51,
    description: "A treasure chest of practical Christian living. Packed with wise advice on friendship, family life, speech, and daily choices."
  },
  {
    id: "isaiah",
    name: "Isaiah",
    testament: "OT",
    chapters: 66,
    description: "A majestic prophetic work warning of judgment, comfort in exile, and the glorious promise of the coming Messiah."
  },
  {
    id: "jeremiah",
    name: "Jeremiah",
    testament: "OT",
    chapters: 52,
    description: "Known as the weeping prophet, he courageously delivers warnings of judgment to Judah and promises a future new covenant."
  },
  {
    id: "lamentations",
    name: "Lamentations",
    testament: "OT",
    chapters: 5,
    description: "A collection of sorrowful, poetic dirges mourning the destruction of Jerusalem, yet anchoring hope in God's faithfulness."
  },
  {
    id: "baruch",
    name: "Baruch",
    testament: "OT",
    chapters: 6,
    description: "A comforting prophetic message sent from exile in Babylon, focusing on repentance, true wisdom, and the hope of returning home."
  },
  {
    id: "ezekiel",
    name: "Ezekiel",
    testament: "OT",
    chapters: 48,
    description: "Filled with dramatic, symbolic visions, this book declares judgment but promises spiritual rebirth and the return of God's presence."
  },
  {
    id: "daniel",
    name: "Daniel",
    testament: "OT",
    chapters: 14,
    description: "A book of faith and prophetic dreams, updated with additional prayers and tales of Susanna and Bel and the Dragon."
  },
  {
    id: "hosea",
    name: "Hosea",
    testament: "OT",
    chapters: 14,
    description: "A powerful illustration of God's relentless, redeeming love for an unfaithful people through the prophet's own troubled marriage."
  },
  {
    id: "joel",
    name: "Joel",
    testament: "OT",
    chapters: 3,
    description: "Warns of a devastating locust plague as a sign of the Day of the Lord, while calling for repentance and promising the outpouring of the Spirit."
  },
  {
    id: "amos",
    name: "Amos",
    testament: "OT",
    chapters: 9,
    description: "A fierce, passionate call for social justice, condemning the empty rituals of the wealthy who oppress the poor."
  },
  {
    id: "obadiah",
    name: "Obadiah",
    testament: "OT",
    chapters: 1,
    description: "A short, dramatic prophecy announcing judgment on Edom for betraying their relatives, the people of Israel, in their time of need."
  },
  {
    id: "jonah",
    name: "Jonah",
    testament: "OT",
    chapters: 4,
    description: "The famous and ironical account of a stubborn prophet who runs from God's call, only to see a pagan city repent and receive mercy."
  },
  {
    id: "micah",
    name: "Micah",
    testament: "OT",
    chapters: 7,
    description: "Proclaims judgment on corrupt leaders and predicts the birth of the Messiah in Bethlehem, summarizing true faith as acting justly and loving mercy."
  },
  {
    id: "nahum",
    name: "Nahum",
    testament: "OT",
    chapters: 3,
    description: "A vivid, poetic prophecy announcing the fall and ruin of Nineveh, the cruel capital of the Assyrian Empire."
  },
  {
    id: "habakkuk",
    name: "Habakkuk",
    testament: "OT",
    chapters: 3,
    description: "A unique dialogue between a questioning prophet and God, exploring how a holy God can use evil nations for judgment."
  },
  {
    id: "zephaniah",
    name: "Zephaniah",
    testament: "OT",
    chapters: 3,
    description: "Warns of the approaching Day of the Lord, yet ends with a beautiful song of God rejoicing over a restored, humble remnant."
  },
  {
    id: "haggai",
    name: "Haggai",
    testament: "OT",
    chapters: 2,
    description: "A direct, encouraging call to the returned exiles to prioritize rebuilding God's Temple over their own houses."
  },
  {
    id: "zechariah",
    name: "Zechariah",
    testament: "OT",
    chapters: 14,
    description: "Filled with rich, symbolic visions pointing to the rebuilding of the Temple and the future entry of the Messianic King on a donkey."
  },
  {
    id: "malachi",
    name: "Malachi",
    testament: "OT",
    chapters: 4,
    description: "The final prophetic word of the Old Testament, calling for sincerity in worship and promising the future coming of the messenger of the covenant."
  },

  // NEW TESTAMENT (27 books)
  {
    id: "matthew",
    name: "Matthew",
    testament: "NT",
    chapters: 28,
    description: "Presents Jesus as the promised Messiah and King of the Jews, highlighting His teachings, including the Sermon on the Mount."
  },
  {
    id: "mark",
    name: "Mark",
    testament: "NT",
    chapters: 16,
    description: "A fast-paced, action-oriented Gospel presenting Jesus as the suffering Servant who came to give His life as a ransom for many."
  },
  {
    id: "luke",
    name: "Luke",
    testament: "NT",
    chapters: 24,
    description: "A detailed, compassionate Gospel portraying Jesus as the Savior of all humanity, focusing on the marginalized, parables, and the Holy Spirit."
  },
  {
    id: "john",
    name: "John",
    testament: "NT",
    chapters: 21,
    description: "A profound, spiritual Gospel focusing on Jesus' identity as the eternal Word of God made flesh, and the source of eternal life."
  },
  {
    id: "acts",
    name: "Acts",
    testament: "NT",
    chapters: 28,
    description: "The thrilling historical account of the early Church's birth, the Holy Spirit's empowerment, and the spread of the Gospel to the ends of the earth."
  },
  {
    id: "romans",
    name: "Romans",
    testament: "NT",
    chapters: 16,
    description: "Paul's masterwork of theology, outlining salvation by grace through faith, the righteousness of God, and Christian living."
  },
  {
    id: "1-corinthians",
    name: "1 Corinthians",
    testament: "NT",
    chapters: 16,
    description: "Paul's pastoral counsel addressing division, immorality, and spiritual gifts in the Corinthian church, featuring the famous discourse on love."
  },
  {
    id: "2-corinthians",
    name: "2 Corinthians",
    testament: "NT",
    chapters: 13,
    description: "A deeply personal letter where Paul defends his apostolic ministry, reflecting on strength in weakness and the ministry of reconciliation."
  },
  {
    id: "galatians",
    name: "Galatians",
    testament: "NT",
    chapters: 6,
    description: "A passionate defense of Christian freedom, declaring that justification is by faith alone and not by keeping the Mosaic law."
  },
  {
    id: "ephesians",
    name: "Ephesians",
    testament: "NT",
    chapters: 6,
    description: "Explores the glorious mystery of the Church as the body of Christ, united in love and equipped for spiritual warfare."
  },
  {
    id: "philippians",
    name: "Philippians",
    testament: "NT",
    chapters: 4,
    description: "A warm, joyful letter written from prison, encouraging believers to adopt the humble mindset of Christ and find joy in all circumstances."
  },
  {
    id: "colossians",
    name: "Colossians",
    testament: "NT",
    chapters: 4,
    description: "Exalts the supreme preeminence and sufficiency of Jesus Christ as the head of all creation and the church."
  },
  {
    id: "1-thessalonians",
    name: "1 Thessalonians",
    testament: "NT",
    chapters: 5,
    description: "A letter of encouragement praising a young church for their faith, love, and offering comfort regarding the return of Christ."
  },
  {
    id: "2-thessalonians",
    name: "2 Thessalonians",
    testament: "NT",
    chapters: 3,
    description: "Clarifies misunderstandings about the Day of the Lord, urging perseverance in work and vigilance against deception."
  },
  {
    id: "1-timothy",
    name: "1 Timothy",
    testament: "NT",
    chapters: 6,
    description: "Practical instructions from Paul to a young pastor on church leadership, sound doctrine, and orderly worship."
  },
  {
    id: "2-timothy",
    name: "2 Timothy",
    testament: "NT",
    chapters: 4,
    description: "Paul's moving final letter, urging Timothy to remain faithful, endure suffering, and boldly preach the Word of God."
  },
  {
    id: "titus",
    name: "Titus",
    testament: "NT",
    chapters: 3,
    description: "Guidelines for Titus on appointing elders in Crete, promoting sound doctrine, and fostering good works."
  },
  {
    id: "philemon",
    name: "Philemon",
    testament: "NT",
    chapters: 1,
    description: "A tender appeal for reconciliation, urging a Christian slave owner to receive his runaway slave back as a beloved brother in Christ."
  },
  {
    id: "hebrews",
    name: "Hebrews",
    testament: "NT",
    chapters: 13,
    description: "A majestic sermon demonstrating that Jesus is superior to angels, Moses, the priesthood, and the old covenant sacrifices."
  },
  {
    id: "james",
    name: "James",
    testament: "NT",
    chapters: 5,
    description: "A highly practical epistle emphasizing that true, saving faith must express itself in good deeds, speech control, and patience."
  },
  {
    id: "1-peter",
    name: "1 Peter",
    testament: "NT",
    chapters: 5,
    description: "Offers hope and encouragement to persecuted Christians, reminding them of their identity as God's chosen people and living stones."
  },
  {
    id: "2-peter",
    name: "2 Peter",
    testament: "NT",
    chapters: 3,
    description: "Warns against false teachers and complacency, reminding believers of the certainty of Christ's return and the call to holiness."
  },
  {
    id: "1-john",
    name: "1 John",
    testament: "NT",
    chapters: 5,
    description: "A warm, fatherly letter emphasizing walking in the light, loving one another, and finding assurance of eternal life in Jesus."
  },
  {
    id: "2-john",
    name: "2 John",
    testament: "NT",
    chapters: 1,
    description: "A brief letter urging a local congregation to walk in truth and love, and to be cautious of false teachers."
  },
  {
    id: "3-john",
    name: "3 John",
    testament: "NT",
    chapters: 1,
    description: "A personal note praising Gaius for his hospitality to traveling teachers and warning against a prideful leader named Diotrephes."
  },
  {
    id: "jude",
    name: "Jude",
    testament: "NT",
    chapters: 1,
    description: "A brief, powerful appeal to earnestly contend for the faith against deceptive influences, ending with a beautiful doxology."
  },
  {
    id: "revelation",
    name: "Revelation",
    testament: "NT",
    chapters: 22,
    description: "An apocalyptic vision of the spiritual war between good and evil, culminating in the final victory of the Lamb and the creation of a new heaven and earth."
  }
];

const GNT_QUOTES = [
  {
    text: "For God loved the world so much that he gave his only Son, so that everyone who believes in him may not die but have eternal life.",
    reference: "John 3:16"
  },
  {
    text: "We know that in all things God works for good with those who love him, those whom he has called according to his purpose.",
    reference: "Romans 8:28"
  },
  {
    text: "Do not be worried about anything, but in all prayers ask God for what you need, always asking him with a thankful heart.",
    reference: "Philippians 4:6"
  },
  {
    text: "The Lord is my shepherd; I have everything I need.",
    reference: "Psalm 23:1"
  },
  {
    text: "For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11"
  },
  {
    text: "Trust in the Lord with all your heart. Never rely on what you think you know.",
    reference: "Proverbs 3:5"
  },
  {
    text: "Remember that I have commanded you to be determined and confident! Do not be afraid or discouraged, for the Lord your God is with you wherever you go.",
    reference: "Joshua 1:9"
  },
  {
    text: "But those who trust in the Lord for help will find their strength renewed. They will rise on wings like eagles; they will run and not get weary; they will walk and not grow weak.",
    reference: "Isaiah 40:31"
  },
  {
    text: "Happy are those who work for peace; God will call them his children!",
    reference: "Matthew 5:9"
  },
  {
    text: "Love is patient and kind; it is not jealous or conceited or proud; love is not ill-mannered or selfish or irritable; love does not keep a record of wrongs.",
    reference: "1 Corinthians 13:4-5"
  },
  {
    text: "So do not worry about tomorrow; it will have enough worries of its own. There is no need to add to the troubles each day brings.",
    reference: "Matthew 6:34"
  },
  {
    text: "Ask, and you will receive; seek, and you will find; knock, and the door will be opened to you.",
    reference: "Matthew 7:7"
  },
  {
    text: "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.",
    reference: "Romans 15:13"
  },
  {
    text: "The Lord is near to those who are discouraged; he saves those who have lost all hope.",
    reference: "Psalm 34:18"
  },
  {
    text: "Give thanks to the Lord, because he is good; his love is eternal.",
    reference: "Psalm 118:1"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BIBLE_BOOKS, GNT_QUOTES };
}
