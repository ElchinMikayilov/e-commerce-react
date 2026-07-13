import React from "react";

const faqData = [
  {
    question: "How can I place an order?",
    answer:
      "Browse our products, add your favorite items to the basket, and proceed with the checkout process.",
  },
  {
    question: "Do you offer fast delivery?",
    answer:
      "Yes, we provide fast and secure delivery to ensure your products arrive on time.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Yes, products can be returned according to our return policy if they meet the required conditions.",
  },
  {
    question: "Are the products high quality?",
    answer:
      "We carefully select our products to provide the best quality at affordable prices.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us through the Contact page by filling out the contact form.",
  },
];

const FAQ = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold mb-2">
              {item.question}
            </h2>

            <p className="text-gray-600">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;