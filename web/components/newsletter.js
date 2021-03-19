import Mailchimp from "react-mailchimp-form";

export default function Newsletter() {
  return (
    <div className="flex flex-col justify-center items-center text-center col-span-4 md:col-span-3 w-full py-12 md:pt-0 md:pb-0">
      <h4 className="font-body text-xl md:text-2xl font-bold mb-4">
        Sign up to our newsletter.
      </h4>
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
        className="mailchimp-form relative w-full md:w-1/2 flex justify-between items-center bg-white pl-3 rounded-full shadow-input border-4 border-white"
      />
    </div>
  );
}
