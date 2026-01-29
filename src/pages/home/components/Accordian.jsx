import { useState } from "react"

export const Accordian = ({ faq }) => {
  const { id, question, answer } = faq
  const [show, setShow] = useState(false)

  return (
    <div>
      <h2 id={`accordion-heading-${id}`}>
        <button
          type="button"
          onClick={() => setShow(prev => !prev)}
          className="flex w-full items-center justify-between py-5 text-left text-lg font-medium border-b border-gray-200 dark:border-gray-700"
          aria-expanded={show}
          aria-controls={`accordion-body-${id}`}
        >
          <span className="text-slate-900 dark:text-white">
            {question}
          </span>

          <svg
            className={`w-6 h-6 transition-transform ${show ? "rotate-180" : ""}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </h2>

      {show && (
        <div
          id={`accordion-body-${id}`}
          aria-labelledby={`accordion-heading-${id}`}
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-500 dark:text-gray-400">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
