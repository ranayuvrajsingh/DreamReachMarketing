import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>

        <p className="text-white-200 md:mt-10 mt-6 text-center">
          Reach out to us today and let&apos;s discuss how we can help you
          achieve your goals.
        </p>

        <p className="text-white-300 mt-3 text-sm md:text-base text-center">
          📍 16/A, Old Survey Road, Dehradun, Uttarakhand - 248001
        </p>

        {/* Two Email Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            target="_blank"
            href="mailto:contact@dreamreachmrktng.com"
          >
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a
            target="_blank"
            href="mailto:help@dreamreachmrktng.com"
          >
            <MagicButton
              title="Need Help?"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center w-full">
        <p className="md:text-base text-sm md:font-normal font-light text-white-300">
          Copyright © 2024 DreamReach Marketing
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link href={info.link} target="_blank">
                <img src={info.img} alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
