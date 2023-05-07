import Image from "next/image";

export const Quality = () => {
  return (
    <div className="bg-black bg-opacity-70 flex flex-col md:flex-row text-center p-5">
      <div className="flex-1 flex flex-col text-center mx-auto px-5">
        <div className="mx-auto">
          <Image
            src="/quality/gia-logo-white.png"
            alt="GIA diamond certified engagement ring lecreateur"
            width={135}
            height={131}
          />
        </div>
        <div className="text-xl py-1">Certified Diamonds</div>
        <p className="py-2 text-gray-300">
          I work with diamonds that are certified and will provide all the
          relavent certifications.
        </p>
      </div>
      <div className="flex-1 flex flex-col text-center mx-auto px-5">
        <div className="mx-auto">
          <Image
            src="/quality/microscope-white.png"
            alt="engagement ring by certified gemologist lecreateur"
            width={86}
            height={131}
          />
        </div>
        <div className="text-xl py-1">Certified Gemologist</div>
        <p className="py-2 text-gray-300">
          My love for high jewelry led me to Gemological Institute of America
          (GIA) where I graduated as a gemologist for both diamonds and coloured
          gemstones.
        </p>
      </div>
      <div className="flex-1 flex flex-col text-center mx-auto px-5">
        <div className="mx-auto">
          <Image
            src="/quality/engagement-ring-vector.png"
            alt="quality assured engagement ring lecreateur"
            width={107}
            height={131}
          />
        </div>
        <div className="text-xl py-1">Uniquely Crafted</div>
        <p className="py-2 text-gray-300">
          I am passionate about jewelry and have crafted rings for many couples.
          You can be assured that any piece I craft for you is designed to last
          a lifetime and beyond.
        </p>
      </div>
    </div>
  );
};
