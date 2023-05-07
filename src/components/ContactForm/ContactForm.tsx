"use client";
import { submitContactAction } from "@/app/actions/contact";

export const ContactForm = ({ headerText }: { headerText: string }) => {
  return (
    <form
      id="contact-form"
      className="w-full bg-white px-2 py-5 rounded bg-opacity-75"
      action={submitContactAction}
    >
      <div className="text-center pt-3 pb-6">
        <span className="text-3xl py-5 text-black">{headerText}</span>
      </div>
      <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block tracking-wide text-gray-600 mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-white"
            id="name"
            name="name"
            type="text"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block tracking-wide text-gray-600 mb-2"
            htmlFor="contact-number"
          >
            Contact Number
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-white"
            id="contact-number"
            name="contactNumber"
            type="text"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6">
        <div className="w-full px-3">
          <label
            htmlFor="email"
            className="block tracking-wide text-gray-600 mb-2"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-white"
            id="email"
            name="email"
            type="text"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6">
        <div className="w-full px-3">
          <label
            htmlFor="message"
            className="block tracking-wide text-gray-600 mb-2"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="resize-none appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-white"
            placeholder="Include all your requirements..."
            defaultValue={"dsasdasdsa"}
          ></textarea>
        </div>
      </div>

      <div className="flex flex-wrap mb-2">
        <div className="w-full px-3 py-1">
          <button
            formAction={submitContactAction}
            type="submit"
            className="w-full bg-gray-50 text-gray-700 font-semibold rounded py-4 px-4 border border-gray-500 hover:border-white hover:text-white hover:border-transparent hover:bg-gray-700"
          >
            Submit inquiry
          </button>
        </div>
      </div>
    </form>
  );
};
