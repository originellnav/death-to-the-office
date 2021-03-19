import { useContext } from "react";
import { DataContext } from "../pages/_app.js";

import Mailchimp from "react-mailchimp-form";

export default function Trends() {
  const { aboutContent } = useContext(DataContext);

  const trendsHeader = aboutContent[0].trendsHeader;
  const trendsText = aboutContent[0].trendsText;

  return (
    <div className="flex flex-col w-full md:w-3/4">
      <div className="w-full md:w-3/4 mb-8">
        {trendsHeader && (
          <h1 className="text-white text-4xl md:text-5xl font-body font-bold leading-snug">
            {trendsHeader}
          </h1>
        )}
        {trendsText && (
          <p className="mt-4 text-primary text-base md:text-lg font-body font-medium">
            {trendsText}
          </p>
        )}
      </div>
      <Mailchimp
        action="https://chasethesun.us2.list-manage.com/subscribe/post?u=e0f8e5fc98940771a7df53f58&amp;id=3d8a439b74"
        //Adding multiple fields:
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email Address",
            type: "email",
            required: true,
          },
        ]}
        // Change predetermined language
        messages={{
          sending: "Sending...",
          success: "Thank you for subscribing!",
          error: "An unexpected internal error has occurred.",
          empty: "You must write an e-mail.",
          duplicate: "Too many subscribe attempts for this email address.",
          button: "Submit",
        }}
        // Add a personalized class
        className="mailchimp-form relative w-full md:w-3/4 flex justify-between items-center bg-white pl-3 rounded-full shadow-input border-4 border-white font-body"
      />
    </div>
  );
}
