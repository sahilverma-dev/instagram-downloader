import React from "react";
import { faqData } from "../constants/faqData";

const Faq = () => {
  return (
    <>
      <div className="py-8">
        <h2 className="text-4xl font-bold text-center mb-5 dark:text-white">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="max-w-7xl mx-auto space-y-4 z-10 rounded p-2">
        {faqData?.map((item, index) => (
          <details className="group" key={index} open={index === 0}>
            <summary className="flex items-center justify-between p-4 rounded cursor-pointer bg-gray-50">
              <h2 className="font-medium">{item?.title}</h2>
              <i className="fa fa-caret-down text-xl transition-transform duration-300 group-open:-rotate-180"></i>
            </summary>
            <div className="px-4 mt-4">
              <p className="leading-relaxed dark:text-white text-gray-700">
                {item?.desc}
              </p>
            </div>
          </details>
        ))}
      </div>
    </>
  );
};

export default Faq;
