import React from "react";

const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        About Us
      </h1>

      <div className="bg-white shadow-md rounded-xl p-8 space-y-6">
        <p className="text-gray-600 leading-7">
          Welcome to our online store! We provide a wide range of quality
          products at affordable prices. Our goal is to make online shopping
          simple, fast, and enjoyable for everyone.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-5 text-center">
            <h3 className="text-lg font-semibold mb-2">
              Quality Products
            </h3>
            <p className="text-sm text-gray-500">
              Carefully selected products with reliable quality.
            </p>
          </div>

          <div className="border rounded-lg p-5 text-center">
            <h3 className="text-lg font-semibold mb-2">
              Fast Delivery
            </h3>
            <p className="text-sm text-gray-500">
              Quick and secure shipping to your destination.
            </p>
          </div>

          <div className="border rounded-lg p-5 text-center">
            <h3 className="text-lg font-semibold mb-2">
              Customer Support
            </h3>
            <p className="text-sm text-gray-500">
              Friendly support whenever you need assistance.
            </p>
          </div>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-2xl font-semibold mb-3">
            Why Choose Us?
          </h2>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Wide variety of products</li>
            <li>Affordable prices</li>
            <li>Easy shopping experience</li>
            <li>Secure ordering process</li>
            <li>Responsive customer service</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;