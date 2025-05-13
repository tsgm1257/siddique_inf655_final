import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="footer p-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div>
          <span className="footer-title">Event Booker</span>
          <p>
            Your gateway to awesome events around the U.S.
            <br />
            Powered by React & Firebase.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex gap-16 mt-6 md:mt-0">
          <div className="flex flex-col">
            <span className="footer-title">Quick Links</span>
            <a
              href="https://www.linkedin.com/"
              className="link link-hover flex items-center gap-1"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://www.facebook.com/"
              className="link link-hover flex items-center gap-1"
            >
              <FaFacebook /> Facebook
            </a>
            <a
              href="https://github.com/tsgm1257"
              className="link link-hover flex items-center gap-1"
            >
              <FaGithub /> Github
            </a>
          </div>
          <div className="flex flex-col">
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of Use</a>
            <a className="link link-hover">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
