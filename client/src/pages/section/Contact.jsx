import React from "react";
import bgImageUrl from "../../images/hero.webp";
import Button from "../../components/Button";

const Contact = () => {
  return (
    <section className="relative py-16">
      {/* Background Image Layer */}
      <div
        className="fixed z-0 inset-0 bg-fixed bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
          zIndex: -1,
          //backgroundAttachment: "scroll", // Ensures smooth scrolling
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 px-6 sm:px-12 md:px-24 flex md:justify-end justify-center">
        {/* Contact Form and Information */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-md lg:text-lg xl:text-xl mb-6">
            If you have any questions or something to talk about, please don't hestitate to contact.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
            </div>
            <textarea
              placeholder="Message"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full h-32"
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;