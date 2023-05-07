import Image from "next/image";
import { ContactForm } from "../ContactForm/ContactForm";
import styles from "./LandingPage.module.css";
import { Whisper } from "next/font/google";
import { Quality } from "../Quality/Quality";

const whisper = Whisper({ subsets: ["latin"], weight: "400" });

export default function LandingPage() {
  return (
    <main
      className={`${styles.home} flex min-h-screen flex-col justify-between w-full`}
    >
      <section className="text-center py-5">
        <Image
          className="mx-auto"
          src="/logo-black.png"
          alt="lecreatuer logo"
          width={324}
          height={278}
          priority
        />
        <div className={whisper.className}>
          <p className="text-9xl text-black mx-auto">Le Créateur</p>
        </div>
        <div className="mx-auto my-3">
          <span className="text-center text-2xl">I craft engagement rings</span>
        </div>
      </section>
      <section className="bg-black bg-opacity-50 p-10">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-3">
            <img
              className="mx-auto"
              src="steps/steps-design.jpeg"
              alt="lecreateur"
            />
            <div className="">Designing</div>
            <hr />
            <div className="">
              Give me your ideas and tell me what you need. I will be glad to
              guide you through my creative discovery process. So, fred not if
              you are unsure or uncertain about what she wants!
            </div>
          </div>
          <div className="flex-1 p-3">
            <img
              className="mx-auto"
              src="steps/steps-crafting.jpeg"
              alt="lecreateur"
            />
            <div className="">Crafting</div>
            <hr />
            <div className="">
              I usually start with a hand drawn blueprint, then move into a 3D
              rendering process to give you a realistic view of what to expect.
              Then, your ring will be crafted with a GIA certified diamond.
            </div>
          </div>
          <div className="flex-1 p-3">
            <img
              className="mx-auto"
              src="steps/steps-propose.jpeg"
              alt="lecreateur"
            />
            <div className="">Propose</div>
            <hr />
            <div className="">
              Now that you have a stunning ring, it is all up to you to go down
              on one knee. Keep me inform and stay connected! I will do free
              re-sizing and provide other jewelry services as required.
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="p-3 md:max-w-3xl max-w-full mx-auto">
          <ContactForm headerText="Contact Us" />
        </div>
      </section>
      <section>
        <Quality />
      </section>
    </main>
  );
}
