'use client';
import './button-socials.css';
import { FaFacebook, FaLinkedin,FaInstagram } from 'react-icons/fa';

const ButtonSocials = () => {
  return (
    <ul className="footer-socials-container">
      <li><a href="#"><span className="icon"><FaFacebook /></span></a></li>
      <li><a href="#"><span className="icon"><FaLinkedin /></span></a></li>
      <li><a href="#"><span className="icon"><FaInstagram /></span></a></li>
    </ul>
  )
};

export default ButtonSocials;
