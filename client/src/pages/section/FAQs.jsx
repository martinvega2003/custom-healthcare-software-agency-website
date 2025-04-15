import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  const faqs = [
    {
      category: "General Information",
      faqs: [
        {
          question: "What services do you offer?",
          answer:
            "I provide comprehensive full-stack software development services, including web and mobile application development, user interface design, backend development, and system integration. My goal is to deliver tailored solutions that meet your business needs and enhance operational efficiency.",
        },
        {
          question: "What is your experience in software development?",
          answer:
            "With a year of dedicated experience in full-stack development, I have successfully completed various projects that demonstrate my ability to deliver functional and user-friendly software solutions. My portfolio showcases a range of applications developed to address diverse client requirements.",
        },
        {
          question: "How do you ensure the quality of your work?",
          answer:
            "Quality is paramount in my development process. I adhere to industry best practices, conduct thorough testing, and engage in continuous feedback loops with clients to ensure the final product aligns with their expectations and operates seamlessly.",
        },
        {
          question: "What is your typical project timeline?",
          answer:
            "Project timelines vary based on complexity and scope. However, I strive to deliver the first usable prototype within 2-3 months. A detailed timeline will be provided after assessing your specific project requirements.",
        },
        {
          question: "How do you handle communication during the project?",
          answer:
            "Effective communication is key to project success. I maintain regular updates through your preferred channels, provide progress reports, and am readily available to address any questions or concerns throughout the development process.",
        },
      ],
    },
    {
      category: "Pricing and Payment",
      faqs: [
        {
          question: "What are your rates for software development services?",
          answer:
            "My services are competitively priced to offer value without compromising quality. After understanding your project scope and requirements, I will provide a detailed proposal outlining the costs involved.",
        },
        {
          question: "Do you offer payment plans?",
          answer:
            "Yes, I offer flexible payment plans to accommodate your budgeting needs. Payment structures can be discussed and tailored to ensure mutual agreement and project feasibility.",
        },
        {
          question: "Are there any additional costs I should be aware of?",
          answer:
            "Transparency is important to me. Any potential additional costs, such as third-party integrations or extended support, will be discussed upfront to avoid surprises.",
        },
      ],
    },
    {
      category: "Security and Confidentiality",
      faqs: [
        {
          question: "How do you ensure the security of my project data?",
          answer:
            "I prioritize data security by implementing robust measures, including secure coding practices and compliance with relevant data protection regulations, to safeguard your project information.",
        },
        {
          question: "Will you sign a Non-Disclosure Agreement (NDA)?",
          answer:
            "Absolutely. I am willing to sign an NDA to ensure the confidentiality of your project details and intellectual property.",
        },
      ],
    },
    {
      category: "Project Management",
      faqs: [
        {
          question: "How do you handle project deadlines?",
          answer:
            "Meeting deadlines is crucial. I employ effective project management techniques to ensure timely delivery. In the event of unforeseen circumstances, I communicate promptly to discuss and mitigate any potential delays.",
        },
        {
          question: "What if I need changes during the development process?",
          answer:
            "I understand that project requirements may evolve. I offer a flexible approach to accommodate changes, ensuring they are managed efficiently without significantly impacting the project timeline or budget.",
        },
      ],
    },
    {
      category: "Post-Development Support",
      faqs: [
        {
          question: "Do you provide support after the project is completed?",
          answer:
            "Yes, I offer post-launch support and maintenance services to address any issues, implement updates, and ensure the continued optimal performance of the software.",
        },
        {
          question: "Can you assist with future enhancements?",
          answer:
            "Certainly. I am available to collaborate on future enhancements and iterations to help your software evolve in line with your business growth and changing needs.",
        },
      ],
    },
  ];

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