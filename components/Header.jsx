import Link from 'next/link';
import React from "react";

const Header = ({ toggleChatbot, toggleModal }) => { // Réception de la prop toggleModal
  return (
    <header>
      <div className="logo">
        <h1><Link href="/">ISEN Méditerranée</Link></h1>
      </div>
      <nav>
        <ul>
          <li><Link href="/about">À propos</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/events">Événements</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><button id="loginBtn" type="button" onClick={toggleModal}>Connexion</button></li> {/* Le bouton appelle la fonction toggleModal */}
          <li><button id="chatbotBtn" type="button" onClick={toggleChatbot}>Assistance</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
