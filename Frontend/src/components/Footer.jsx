import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Street No.132/2 Navi Mumbai, Maharastra</li>
            <li>opportune@gmail.com</li>
            <li>+91 7602932266</li>
          </ul>
        </div>

        <div>
  <h4>Quick Links</h4>
  <ul>
    <li>
      <Link to={"/"}>Home</Link>
    </li>
    <li>
      <Link to={"/jobs"}>Jobs</Link>  {/* Moved 'to' inside the Link component */}
    </li>
    {isAuthenticated && (
      <li>
        <Link to={"/dashboard"}>Dashboard</Link>
      </li>
    )}
  </ul>
</div>

<div>
  <h4>Follow Us</h4>
  <ul>
    <li>
      <Link to={"https://twitter.com/"} target="_blank" rel="noopener noreferrer">
        <span>
          <FaSquareXTwitter />
        </span>
        <span>Twitter (X)</span>
      </Link>
    </li>
    <li>
      <Link to={"https://instagram.com/"} target="_blank" rel="noopener noreferrer">
        <span>
          <FaSquareInstagram />
        </span>
        <span>Instagram</span>
      </Link>
    </li>
    <li>
      <Link to={"https://youtube.com/"} target="_blank" rel="noopener noreferrer">
        <span>
          <FaYoutube />
        </span>
        <span>YouTube</span>
      </Link>
    </li>
    <li>
      <Link to={"https://linkedin.com/"} target="_blank" rel="noopener noreferrer">
        <span>
          <FaLinkedin />
        </span>
        <span>LinkedIn</span>
      </Link>
    </li>
  </ul>
</div>

      </footer>
      <div className="copyright">
        &copy; CopyRight 2024. All Rights Reserved By Anurupa Roy
      </div>
    </>
  );
};

export default Footer;