import { Link } from "react-router-dom";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-300 py-16 text-black">
      <div className="w-full flex justify-center text-center mx-auto gap-5">
        <h2><Link to="/about">About</Link></h2> 
        <h2><Link to="/contact">Contact</Link></h2>
        <h2><Link to="/register">Join</Link></h2>
      </div>
      <div className="w-full flex justify-center text-3xl mt-5 mx-auto gap-5">
        <h2 className="text-blue-700"><Link to="/facebook.com"><FaFacebook></FaFacebook></Link></h2> 
        <h2><Link to="/twitter.com"><FaXTwitter></FaXTwitter></Link></h2>
        <h2><Link to="/Github"><FaGithub></FaGithub></Link></h2>
      </div>
      <h2 className="text-center mt-5">Copyright @ 2024 - All rights reserved by Travel Europe</h2>
    </footer>
  );
};

export default Footer;