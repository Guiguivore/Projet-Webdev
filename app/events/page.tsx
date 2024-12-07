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
      <section id="events">
          <h2>Nos Événements</h2>
          <article>
            <h3>Concours Make IT Agri</h3>
            <p>Un concours dédié à l'innovation technologique pour une agriculture durable. Les étudiants travaillent sur
              des projets innovants, accompagnés par des experts, et ont une chance de remporter des prix.</p>
          </article>
          <article>
            <h3>Forum Digital Native</h3>
            <p>Une opportunité unique pour les étudiants de rencontrer des professionnels du numérique et d'explorer des
              opportunités de stage, d'alternance, ou d'emploi.</p>
          </article>
          <article>
            <h3>Activités culturelles et sportives</h3>
            <p>Des événements tels que des concerts, des expositions artistiques et des compétitions sportives sont
              organisés tout au long de l'année pour enrichir la vie étudiante.</p>
          </article>
          <article>
            <h3>Événements associatifs</h3>
            <p>Organisés par des associations comme le BDE, ces événements incluent des soirées à thème, des journées
              d'intégration et des galas annuels.</p>
          </article>
          <article>
            <h3>Hackathons et Projets de recherche</h3>
            <p>L'ISEN participe à des hackathons et projets collaboratifs où les étudiants résolvent des problématiques
              technologiques et innovent en partenariat avec des entreprises.</p>
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
