import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Microsoft Copilot?",
      answer:
        "Microsoft Copilot is an AI-powered digital assistant designed to engage in conversations and help people with a range of tasks and activities on their devices.",
    },
    {
      question: "What are the latest changes to Copilot and Copilot Pro?",
      answer: "Here are the latest changes to Copilot and Copilot Pro...",
    },
    {
      question: "What can Copilot do?",
      answer: "Copilot can perform a wide range of tasks including...",
    },
    {
      question: "How should I talk to Copilot?",
      answer: "When talking to Copilot, use clear and concise commands.",
    },
    {
      question: "How do I access Copilot?",
      answer: "You can access Copilot by navigating to...",
    },
    {
      question: "What is Visual Search in Copilot and how does it work?",
      answer: "Visual Search in Copilot allows users to...",
    },
    {
      question: "Where can I get answers to my Copilot Pro related questions?",
      answer: "You can get answers to your Copilot Pro questions at...",
    },
  ];

  const [expanded, setExpanded] = useState([]);
  const [isAllExpanded, setIsAllExpanded] = useState(false);

  const toggleItem = (index) => {
    setExpanded((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const expandAll = () => {
    setExpanded(faqs.map((_, index) => index));
    setIsAllExpanded(true);
  };

  const collapseAll = () => {
    setExpanded([]);
    setIsAllExpanded(false);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl">Get the most out of Copilot</h2>
        <div className="flex gap-4">
          <button
            onClick={expandAll}
            className="text-[#1a59c8] hover:underline"
            disabled={isAllExpanded}
          >
            Expand All
          </button>
          <p className="text-gray-400"> | </p>
          <button
            onClick={collapseAll}
            className="text-[#1a59c8] hover:underline"
            disabled={!isAllExpanded}
          >
            Collapse All
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-400 border-dotted py-4">
            <button
              className="w-full flex gap-3 items-center text-left font-semibold text-[black]"
              onClick={() => toggleItem(index)}
            >
              <span className="text-[#1a59c8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 5 7"
                  height="0.75em"
                  width="0.75em"
                  className={`px-icon common-faq-item__icon ${
                    expanded.includes(index) ? "rotate-90" : ""
                  }`}
                  tag="span"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M0 6.608V.392C0 .176.188 0 .42 0a.44.44 0 0 1 .263.086l4.16 3.108a.375.375 0 0 1 0 .612L.682 6.914a.44.44 0 0 1-.59-.061A.376.376 0 0 1 0 6.608Z"
                    fill="currentColor"
                    fill-rule="nonzero"
                  ></path>
                </svg>
              </span>
              {faq.question}
            </button>
            <div
              className={`mt-2 text-[black] overflow-hidden transition-all duration-500 ease-in-out ${
                expanded.includes(index)
                  ? "max-h-[200px] opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              }`}
            >
              <p className="mt-2 ml-6 text-[black] max-w-[750px]">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
