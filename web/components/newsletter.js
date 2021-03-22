import { useContext } from "react";
import { DataContext } from "../pages/_app.js";

import Mailchimp from "react-mailchimp-form";

export default function Newsletter() {
  const { aboutContent } = useContext(DataContext);

  const newsletter = aboutContent[0].newsletter;

  return (
    <div className="flex flex-col justify-center items-center text-center col-span-4 md:col-span-3 w-full py-12 md:pt-0 md:pb-0">
      {newsletter && (
        <h4 className="font-body text-xl md:text-2xl font-bold mb-4">
          {newsletter}
        </h4>
      )}
      <style>
        {`
        .mailchimp-form > input {
          outline: none;
          padding: 0 0.5rem;
          color: black;
          border-radius: 9999px;
          width: 100%;
          height: 100%;
          font-family: "Plain", sans-serif;
        }
        .mailchimp-form > input:focus {
          outline: none;
          background-color: transparent;
        }
        .mailchimp-form > button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem;
          outline: none;
          background-color: black;
          color: white;
          border-radius: 9999px;
          font-weight: 500;
          font-family: "Plain", sans-serif;
          padding: 0.75rem 1.3rem;
          transition: all 200ms ease;
        }
        .mailchimp-form > button:hover {
          background-color: #3e80fe;
        }
        .msg-alert {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -40px;
          font-weight: 500;
          font-family: "Plain", sans-serif;
        }
      `}
      </style>
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
        className="mailchimp-form relative w-full md:w-10/12 flex justify-between items-center bg-white pl-3 rounded-full shadow-input border-4 border-white"
      />
    </div>
  );
}
