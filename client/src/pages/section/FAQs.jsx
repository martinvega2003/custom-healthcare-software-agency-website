import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqsData as faqs } from "../../data/faqsData";

const FAQs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 text-black dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-10">
            <h3 className="text-2xl font-semibold mb-6">{section.category}</h3>
            <div className="space-y-4">
              {section.faqs.map((faq, index) => {
                const isOpen = openQuestion === `${sectionIndex}-${index}`;
                return (
                  <div
                    key={index}
                    onClick={() => toggleQuestion(`${sectionIndex}-${index}`)}
                    className={`mb-4 cursor-pointer border-gray-800 dark:border-white rounded-lg border-2 transition-all duration-300 ease-in-out ${
                      isOpen ? 'bg-blue-500 dark:bg-blue-800 text-white' : ''
                    } p-4 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-800 group`}
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                    >
                      <h4 className={`text-lg font-medium ${isOpen ? 'text-white' : 'text-gray-800 dark:text-white group-hover:text-white'} transition-colors duration-300`}>{faq.question}</h4>
                      {isOpen ? (
                        <FaMinus className={isOpen ? 'text-white' : 'text-gray-800 dark:text-white group-hover:text-white'} />
                      ) : (
                        <FaPlus className="text-gray-800 dark:text-white group-hover:text-white" />
                      )}
                    </div>
                    <div
                      className={`overflow-hidden transition-all ${
                        isOpen ? "max-h-screen mt-4 border-t-2 border-white pt-2" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-white">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;