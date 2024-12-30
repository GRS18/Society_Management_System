import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../css/faq.css';
export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    const faqs = [
      {
        question: "How can members pay their maintenance fees?",
        answer:
          "Members can pay their maintenance fees through online payment gateways integrated into the system, such as credit/debit cards, UPI, or net banking.",
      },
      {
        question: "Can the system send notifications to residents?",
        answer:
          "Yes, the system can send notifications via email, SMS, or push notifications to residents about important updates, events, or alerts.",
      },
      {
        question: "Is the system secure for storing member data?",
        answer:
          "Yes, the system uses secure encryption methods to protect sensitive data and ensures compliance with data privacy regulations.",
      },
      {
        question: "How do I reset my password?",
        answer:
          'You can reset your password by clicking on the "Forgot Password" link on the login page. An email will be sent to your registered email address with instructions to reset your password.',
      },
      {
        question: "What is the price for using Rohan Seher?",
        answer:
          'ApnaComplex is offered in four different pricing plans. There is a free edition for any society/complex to get started and then paid editions with advanced features for active housing societies. You can try the features before you subscribe to ApnaComplex. For more details, please visit our pricing page.',
      },
    ];
  
    return (
      <div className="faq-container about-header">
        <h1 className="faq-title">FAQ</h1>
        <ul class="breadcrumb list-inline mt-2">
              <li class="list-inline-item">
                <Link to="/" class="text-secondary text-decoration-none">Home</Link>
              </li>
              <li class="list-inline-item text-secondary">
                &rarr;
              </li>
              <li class="list-inline-item text-dark">
                FAQ
              </li>
            </ul>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );

}