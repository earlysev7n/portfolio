import {
  useEffect,
  useRef,
  useState,
} from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import {
  getChatResponse,
  suggestedQuestions,
} from '../../data/chatResponses.js'

const initialMessages = [
  {
    role: 'assistant',
    content:
      'Hi! Ask me about John’s projects, skills, education, or experience.',
  },
]

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] =
    useState(initialMessages)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] =
    useState(false)
  const messagesEndRef = useRef(null)
  const responseTimerRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }, [isOpen, messages, isLoading])

  useEffect(
    () => () => {
      window.clearTimeout(responseTimerRef.current)
    },
    [],
  )

  function sendMessage(messageText) {
    const trimmedMessage = messageText.trim()

    if (!trimmedMessage || isLoading) return

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        role: 'user',
        content: trimmedMessage,
      },
    ])

    setInput('')
    setIsLoading(true)

    responseTimerRef.current = window.setTimeout(() => {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: 'assistant',
          content: getChatResponse(trimmedMessage),
        },
      ])

      setIsLoading(false)
    }, 400)
  }

  function handleSubmit(event) {
    event.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="chat-widget">
      {isOpen && (
        <section
          className="chat-panel"
          id="portfolio-chat"
          aria-label="Portfolio assistant"
        >
          <header className="chat-header">
            <div className="chat-agent">
              <span className="chat-avatar">
                <img
                  src="/images/lebron-chat.jpg"
                  alt="Lebron James"
                />
                <span className="chat-presence" aria-hidden="true" />
              </span>

              <div>
                <p className="chat-title">
                  Lebron James
                </p>
                <p className="chat-status">
                  Portfolio assistant
                </p>
              </div>
            </div>

            <button
              className="chat-close"
              type="button"
              aria-label="Close chatbot"
              onClick={() => setIsOpen(false)}
            >
              <X aria-hidden="true" size={18} />
            </button>
          </header>

          <div
            className="chat-messages"
            role="log"
            aria-live="polite"
          >
            {messages.map((message, index) => (
              <div
                className={`chat-message ${message.role}`}
                key={`${message.role}-${index}`}
              >
                <p>{message.content}</p>
              </div>
            ))}

            {messages.length === 1 && (
              <div
                className="chat-suggestions"
                aria-label="Suggested questions"
              >
                {suggestedQuestions.map((question) => (
                  <button
                    className="chat-suggestion"
                    type="button"
                    key={question}
                    onClick={() => sendMessage(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div
                className="chat-message assistant chat-loading"
                aria-label="Assistant is responding"
              >
                <span />
                <span />
                <span />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            className="chat-form"
            onSubmit={handleSubmit}
          >
            <div className="chat-input-row">
              <label
                className="sr-only"
                htmlFor="chat-input"
              >
                Ask about John’s portfolio
              </label>

              <input
                id="chat-input"
                type="text"
                value={input}
                maxLength={300}
                placeholder="Ask about my work..."
                autoComplete="off"
                disabled={isLoading}
                onChange={(event) =>
                  setInput(event.target.value)
                }
              />

              <button
                type="submit"
                aria-label="Send message"
                disabled={!input.trim() || isLoading}
              >
                <Send aria-hidden="true" size={18} />
              </button>
            </div>
          </form>
        </section>
      )}

      <button
        className="chat-toggle"
        type="button"
        aria-label="Open portfolio assistant"
        aria-expanded={isOpen}
        aria-controls="portfolio-chat"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle
          aria-hidden="true"
          size={22}
        />
      </button>
    </div>
  )
}

export default ChatWidget
