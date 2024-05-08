import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="foot">
      <a href="#" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="#" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="#" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><FontAwesomeIcon icon={faYoutube} /></a>
      <a href="#" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><FontAwesomeIcon icon={faWhatsapp} /></a>
      <a href="#" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><FontAwesomeIcon icon={faTwitter} /></a>
    </div>
  );
};

export default SocialIcons;
