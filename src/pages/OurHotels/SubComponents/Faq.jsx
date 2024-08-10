import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "What is the purpose of this site?",
    answer:
      "This site provides information about our services and allows you to contact us for more details.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact customer support through the 'Contact Us' page or via email at support@example.com.",
  },
  {
    question: "What are the operating hours?",
    answer: "Our operating hours are Monday to Friday, 9 AM to 6 PM.",
  },
  {
    question: "Where are you located?",
    answer: "We are located at 123 Main St, Anytown, USA.",
  },
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b last:border-b-0">
    <button
      className="flex w-full items-center justify-between py-4 text-left"
      onClick={onToggle}
    >
      <span className="text-lg font-semibold">{question}</span>
      {isOpen ? (
        <FaChevronUp className="text-gray-600" />
      ) : (
        <FaChevronDown className="text-gray-600" />
      )}
    </button>
    {isOpen && <p className="py-2 text-gray-600">{answer}</p>}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white lg:px-28 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="text-lg font-bold text-gray-800 lg:text-xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-6">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
