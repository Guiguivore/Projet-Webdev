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
        <section id="about">
          <h2>À propos de l'ISEN Méditerranée</h2>

          <p>
            L’ISEN Méditerranée est un établissement d’enseignement supérieur
            reconnu, ouvert en 1991 et qui accueille plus de 850 élèves sur ses
            deux campus situés à Toulon et Marseille.
          </p>

          <p>
            L’ISEN Méditerranée fait partie des 204 grandes écoles d’ingénieurs
            françaises. Son statut est associatif, à but non lucratif et elle est
            labellisée d’intérêt général EESPIG.
          </p>

          <p>
            L’ISEN promet à chaque élève, chaque talent, chaque futur
            professionnel d’être accompagné tout au long de son parcours de
            formation, un parcours qui correspond autant à ses envies qu’aux
            besoins des entreprises et de la société.
          </p>

          <p>
            Parce que les technologies du numérique sont partout, l’ISEN forme des
            professionnels aptes à répondre aux besoins de tous les secteurs
            d’activité et de la société :
          </p>

          <ul>
            <li>Informatique</li>
            <li>Cybersécurité</li>
            <li>Intelligence artificielle</li>
            <li>Développement</li>
            <li>Big data</li>
            <li>Jeux vidéo</li>
            <li>E-santé</li>
            <li>Objets connectés</li>
            <li>Smart energy</li>
            <li>Systèmes embarqués</li>
            <li>Robotique</li>
            <li>Ingénierie d’affaires</li>
          </ul>

          <p>
            L’ISEN est accréditée par la CTI, Commission des Titres d’Ingénieurs
            (certification et gage de qualité d’enseignement).
          </p>
        </section>



        <Chatbot isOpen={isChatbotOpen} toggleChatbot={toggleChatbot} />
        {isModalOpen && <Modal toggleModal={toggleModal} />}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
