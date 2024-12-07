"use client";
import React, { useState } from 'react';
import '../../styles/globals.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";
import Modal from "../../components/Modal";

const HomePage = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false); // État du chatbot
  const [isModalOpen, setIsModalOpen] = useState(false); // État du modal de connexion

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen); // Permet de basculer l'état du chatbot
  };

  const toggleModal = () => {
    console.log("toggleModal appelée"); // Ajout pour débogage
    setIsModalOpen(prevState => !prevState); // Toggle de l'état du modal
  };

  return (
    <div>
      <Header toggleChatbot={toggleChatbot} toggleModal={toggleModal} />
      <main>
      <section id="services">
          <h2>Nos Services</h2>
          <article>
            <h3>Formation académique</h3>
            <p>L’ISEN Méditerranée propose des cycles d’études variés :</p>
            <ul>
              <li><strong>Cycle ingénieur</strong> : Spécialisations comme la cybersécurité, le big data, et la robotique.
              </li>
              <li><strong>Bachelor Cybersécurité</strong> : Formation axée sur la défense des systèmes numériques.</li>
            </ul>
          </article>
          <article>
            <h3>Vie étudiante</h3>
            <ul>
              <li>Plus de 20 associations étudiantes pour des activités culturelles, sportives, et technologiques.</li>
              <li><strong>Cursus aménagés</strong> pour sportifs ou artistes.</li>
            </ul>
          </article>
          <article>
            <h3>Relations entreprises</h3>
            <ul>
              <li>Stages et alternances dans des entreprises partenaires.</li>
              <li>Participation au <strong>Forum École-Entreprises</strong>.</li>
            </ul>
          </article>
          <article>
            <h3>Recherche et innovation</h3>
            <p>Les étudiants ont accès à :</p>
            <ul>
              <li>Des projets innovants en biotechnologie, robotique, etc.</li>
              <li>Laboratoires de recherche et contributions scientifiques.</li>
            </ul>
          </article>
          <article>
            <h3>Ouverture internationale</h3>
            <ul>
              <li>Programmes d’échange avec des universités partenaires à l’étranger.</li>
              <li>Cours dispensés en anglais pour une meilleure préparation au marché global.</li>
            </ul>
          </article>
        </section>



        <Chatbot isOpen={isChatbotOpen} toggleChatbot={toggleChatbot} />
        {isModalOpen && <Modal toggleModal={toggleModal} />}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
