import { FaCcAmex } from "react-icons/fa";
import {
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t-2 border-green h-[40vh] w-full mt-16 px-4 sm:px-6 lg:px-8 py-8 font-acumin">
      <div className="flex flex-row flex-wrap justify-start gap-52 items-start">
        <div className="flex flex-col items-start justify-center gap-1">
          <h4 className="text-base text-green font-bold mb-2">
            ABOUT LIT KICKS
          </h4>
          <a href="/" className="text-white text-sm">
            ABOUT
          </a>
          <a href="/" className="text-white text-sm">
            CAREERS
          </a>
          <a href="/" className="text-white text-sm">
            PRIVACY STATEMENT
          </a>
          <a href="/" className="text-white text-sm">
            TERMS OF USE
          </a>
        </div>
        <div className="flex flex-col items-start justify-center gap-1">
          <h4 className="text-base text-green font-bold mb-2">
            CUSTOMER SERVICE
          </h4>
          <a href="/" className="text-white text-sm">
            CONTACT
          </a>
          <a href="/" className="text-white text-sm">
            FAQs
          </a>
          <a href="/" className="text-white text-sm">
            RETURNS
          </a>
          <a href="/" className="text-white text-sm">
            COVID-19 INFORMATION & SAFETY
          </a>
        </div>
        <div className="flex flex-col items-start justify-center gap-1">
          <h4 className="text-base text-green font-bold mb-2">FOLLOW US</h4>
          <div className="flex flex-row items-center gap-4">
            <a href="/" className="text-white text-sm">
              <FaInstagram size={30} />
            </a>
            <a href="/" className="text-white text-sm">
              <FaFacebook size={30} />
            </a>
            <a href="/" className="text-white text-sm">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-1">
          <h4 className="text-base text-green font-bold mb-2">
            JOIN OUR NEWSLETTER
          </h4>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="bg-black text-white px-4 pr-8 py-1 border-2 border-green placeholder:text-white/25 font-nanum"
          />
          <button className="bg-green py-1 px-4 border-2 border-green font-nanum font-bold text-black mt-2">
            JOIN
          </button>
        </div>
      </div>
      <div className=" my-20 flex flex-row items-center justify-center gap-6">
        <FaCcVisa size={40} />
        <FaCcAmex size={40} />
        <FaCcMastercard size={40} />
        <FaCcPaypal size={40} />
        <FaCcApplePay size={40} />
      </div>
    </footer>
  );
};

export default Footer;
