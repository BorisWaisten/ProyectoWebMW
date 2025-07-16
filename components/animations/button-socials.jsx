'use client';
import './button-socials.css';
import { FaFacebook, FaLinkedin,FaInstagram } from 'react-icons/fa';

const ButtonSocials = () => {
  return (
    <ul className="footer-socials-container">
      <li><a href="#"><span className="icon cursor-pointer"><FaFacebook /></span></a></li>
      <li><a href="https://www.linkedin.com/in/martina-waisten-308b9b7a/"><span className="icon cursor-pointer"><FaLinkedin /></span></a></li>
      <li><a href="https://www.instagram.com/martinawdesign/"><span className="icon cursor-pointer"><FaInstagram /></span></a></li>
    </ul>
  )
};

export default ButtonSocials;
