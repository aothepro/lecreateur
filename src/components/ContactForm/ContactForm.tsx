"use client";
import { useEffect, useState } from "react";
import styles from "./ContactForm.module.css";

export const ContactForm = ({ headerText }: { headerText: string }) => {
  enum SUBMIT_STATUSES {
    IDLE,
    SUBMITTING,
    SUBMITTED,
    ERROR,
  }

  const [submitStatus, setSubmitStatus] = useState<SUBMIT_STATUSES>(
    SUBMIT_STATUSES.IDLE
  );

  const handleFormSubmission = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setSubmitStatus(SUBMIT_STATUSES.SUBMITTING);

    const data = new FormData(event.currentTarget);

    const contactData = {
      name: data.get("name"),
      contactNumber: data.get("contactNumber"),
      email: data.get("email"),
      message: data.get("message"),
    };

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setSubmitStatus(SUBMIT_STATUSES.SUBMITTED);
      })
      .catch((err) => {
        setSubmitStatus(SUBMIT_STATUSES.ERROR);
      });
  };

  useEffect(() => {
    if (
      submitStatus === SUBMIT_STATUSES.SUBMITTED ||
      submitStatus === SUBMIT_STATUSES.ERROR
    ) {
      const timer = setTimeout(() => {
        setSubmitStatus(SUBMIT_STATUSES.IDLE);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [
    SUBMIT_STATUSES.ERROR,
    SUBMIT_STATUSES.IDLE,
    SUBMIT_STATUSES.SUBMITTED,
    submitStatus,
  ]);

  switch (submitStatus) {
    case SUBMIT_STATUSES.IDLE:
      return (
        <form
          onSubmit={handleFormSubmission}
          id="contact-form"
          className="w-full bg-white px-2 py-5 rounded bg-opacity-75"
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
              ></textarea>
            </div>
          </div>

          <div className="flex flex-wrap mb-2">
            <div className="w-full px-3 py-1">
              <button
                type="submit"
                className="w-full bg-gray-50 text-gray-700 font-semibold rounded py-4 px-4 border border-gray-500 hover:border-white hover:text-white hover:border-transparent hover:bg-gray-700"
              >
                Submit inquiry
              </button>
            </div>
          </div>
        </form>
      );
      break;

    case SUBMIT_STATUSES.SUBMITTING:
      return (
        <div
          id="contact-form"
          className="w-full bg-white px-2 py-5 rounded bg-opacity-75"
        >
          <div className="text-center pt-3 pb-6">
            <span className="text-3xl py-5 text-black">{headerText}</span>
          </div>
          <div className="text-center pt-3 pb-6">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Sending Message...</span>
            </div>
            <span className="text-xl py-5 text-gray-700">
              Please wait while we send your message...
            </span>
          </div>
        </div>
      );

    case SUBMIT_STATUSES.SUBMITTED:
      return (
        <div
          id="contact-form"
          className="w-full bg-white px-2 py-5 rounded bg-opacity-75"
        >
          <div className="text-center pt-3">
            <span className="text-3xl py-5 text-black">{headerText}</span>
          </div>
          <div className="text-center">
            <div className={styles.animationCtn}>
              <div className={`${styles.iconOrderSuccess} ${styles.svg}`}>
                <svg
                  className="mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="154px"
                  height="154px"
                >
                  <g fill="none" stroke="#3A3A3A" strokeWidth="2">
                    <circle
                      cx="77"
                      cy="77"
                      r="72"
                      style={{
                        strokeDasharray: "480px, 480px",
                        strokeDashoffset: "960px",
                      }}
                    ></circle>
                    <circle
                      id="colored"
                      fill="#3A3A3A"
                      cx="77"
                      cy="77"
                      r="72"
                      style={{
                        strokeDasharray: "480px, 480px",
                        strokeDashoffset: "960px",
                      }}
                    ></circle>
                    <polyline
                      className="st0"
                      stroke="#fff"
                      strokeWidth="10"
                      points="43.5,77.8 63.7,97.9 112.2,49.4"
                      style={{
                        strokeDasharray: "100px, 100px",
                        strokeDashoffset: "200px",
                      }}
                    />
                  </g>
                </svg>
              </div>
            </div>
            <span className="text-xl py-5 text-gray-700">
              Thanks for reaching out, we will get in touch with you soon!
            </span>
          </div>
        </div>
      );

    case SUBMIT_STATUSES.ERROR:
      return (
        <div
          id="contact-form"
          className="w-full bg-white px-2 py-5 rounded bg-opacity-75"
        >
          <div className="text-center pt-3">
            <span className="text-3xl py-5 text-black">{headerText}</span>
          </div>
          <div className="text-center">
            <span className="text-xl py-5 text-gray-700">
              Unfortunately the mailboxes are full at the moment. You can reach
              out to me via WhatsApp at +65 9121 3519, to tell me that you are
              looking for an engagement ring!
            </span>
          </div>
        </div>
      );

    default:
      break;
  }
};
