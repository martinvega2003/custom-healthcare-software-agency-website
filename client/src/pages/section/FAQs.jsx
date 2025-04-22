import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqsData as faqs } from "../../data/faqsData";

const FAQs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 bg-gray-800 text-white">
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
                    className={`mb-4 cursor-pointer border-white rounded-lg border-2 transition-all duration-300 ease-in-out ${
                      isOpen ? 'bg-blue-500 text-white' : ''
                    } p-4 rounded-lg hover:bg-blue-500 hover:text-white`}
                  >
                    <div
                      onClick={() => toggleQuestion(`${sectionIndex}-${index}`)}
                      className="flex justify-between items-center cursor-pointer"
                    >
                      <h4 className="text-lg font-medium text-white">{faq.question}</h4>
                      {isOpen ? (
                        <FaMinus className="text-white" />
                      ) : (
                        <FaPlus className="text-white" />
                      )}
                    </div>
                    <div
                      className={`overflow-hidden transition-all ${
                        isOpen ? "max-h-screen mt-4 border-t-2 border-white pt-2" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-gray-200">{faq.answer}</p>
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