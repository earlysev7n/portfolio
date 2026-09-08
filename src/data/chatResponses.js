export const suggestedQuestions = [
  'What is OneFit?',
  'What technologies does John use?',
  'When does John graduate?',
  'How can I contact John?',
]

const responseRules = [
  {
    keywords: ['hello', 'hi', 'hey'],
    response:
      'Hello! You can ask me about John’s projects, skills, education, resume, or contact information.',
  },
  {
    keywords: [
      'onefit',
      'project',
      'fitness app',
      'capstone',
    ],
    response:
      'OneFit is John’s featured fitness and nutrition application. It creates personalized seven-day workout and meal plans using Flutter, Firebase, external APIs, and optimization algorithms.',
  },
  {
    keywords: [
      'algorithm',
      'genetic algorithm',
      'greedy algorithm',
      'optimization',
    ],
    response:
      'OneFit uses a constraint-aware greedy algorithm for workout planning and a genetic algorithm for meal optimization across 100 generations.',
  },
  {
    keywords: [
      'skill',
      'skills',
      'technology',
      'technologies',
      'tech stack',
      'tools',
    ],
    response:
      'John works with Flutter, Dart, Firebase, React, JavaScript, Git, REST APIs, and OpenAI API integrations.',
  },
  {
    keywords: [
      'openai',
      'artificial intelligence',
      'ai integration',
    ],
    response:
      'John integrated the OpenAI API into OneFit to generate structured recipe instructions. This portfolio assistant itself uses predefined local responses.',
  },
  {
    keywords: [
      'education',
      'school',
      'university',
      'degree',
      'graduate',
      'graduation',
    ],
    response:
      'John is taking a Bachelor of Science in Computer Science at Central Philippine University and expects to graduate in 2027.',
  },
  {
    keywords: [
      'experience',
      'internship',
      'work history',
    ],
    response:
      'John’s professional experience section is still being prepared. His current portfolio focuses on his Computer Science education and development work on OneFit.',
  },
  {
    keywords: [
      'contact',
      'email',
      'hire',
      'reach',
      'opportunity',
    ],
    response:
      'You can contact John at johnjerickagapito@gmail.com. He is open to software engineering internships and collaborative development opportunities.',
  },
  {
    keywords: ['resume', 'cv'],
    response:
      'John’s resume is available through the “View Resume” button near the top of the homepage.',
  },
  {
    keywords: [
      'github',
      'repository',
      'source code',
      'source',
    ],
    response:
      'John’s GitHub profile is github.com/earlysev7n. The OneFit source code is available at github.com/earlysev7n/onefit.',
  },
  {
    keywords: ['linkedin'],
    response:
      'John’s LinkedIn profile is linkedin.com/in/john-jerick-agapito-30651a337.',
  },
]

function matchesKeyword(question, keyword) {
  if (keyword.includes(' ')) {
    return question.includes(keyword)
  }

  return question.split(/\s+/).includes(keyword)
}

export function getChatResponse(question) {
  const normalizedQuestion = question
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  const bestMatch = responseRules
    .map((rule) => ({
      response: rule.response,
      score: rule.keywords.reduce(
        (total, keyword) =>
          matchesKeyword(normalizedQuestion, keyword)
            ? total + keyword.split(' ').length
            : total,
        0,
      ),
    }))
    .sort((first, second) => second.score - first.score)[0]

  if (bestMatch?.score > 0) {
    return bestMatch.response
  }

  return 'I do not have an answer for that yet. Try asking about OneFit, John’s technologies, education, resume, GitHub, or contact information.'
}