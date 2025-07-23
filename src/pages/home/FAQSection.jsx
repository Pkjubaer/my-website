import { useState } from "react";
import HeaderSection from "./HeaderSection";
const Faqs = [
  {
    id: 1,
    question: "Who should use the app?",
    answere:
      "Any app is designed for a specific target audience. To determine who should use an app, you need to know what the app does.",
  },
  {
    id: 2,
    question: "What is included with my subscription?",
    answere:
      "Any app is designed for a specific target audience. To determine who should use an app, you need to know what the app does.",
  },
  {
    id: 3,
    question: "How do I get paid?",
    answere:
      "Any app is designed for a specific target audience. To determine who should use an app, you need to know what the app does.",
  },
  {
    id: 4,
    question: "Is my personal information sage?",
    answere:
      "Any app is designed for a specific target audience. To determine who should use an app, you need to know what the app does.",
  },
  {
    id: 5,
    question: "How can we get in touch?",
    answere:
      "Any app is designed for a specific target audience. To determine who should use an app, you need to know what the app does.",
  },
];

const FaqSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const toggleFAQ = (id) => {
    if (expandedFAQ === id) {
      setExpandedFAQ(null);
    } else {
      setExpandedFAQ(id);
    }
  };

  return (
    <div className="max-w-screen-2xl container bg-gray-100 mx-auto py-20 px-5">
      <HeaderSection subheading="faqs" heading="Frequently asked questions" />
      <div>
        <div className="sm:w-3/5 mx-auto">
          {Faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-300 mb-4">
              <div className="cursor-pointer flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-200 transition duration-200" onClick={() => toggleFAQ(faq.id)}>
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span
                  className={`transform transition text-gray-800 duration-200 text-lg font-bold ${
                    expandedFAQ === faq.id ? "rotate-180" : ""
                  }`}
                >
                  {expandedFAQ === faq.id ? "-" : "+"}
                </span>
              </div>
              {
                expandedFAQ === faq.id &&(
                  <div className="p-4 bg-white">
                    <p className="text-gray-600">{faq.answere}</p>
                  </div>
                )
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
