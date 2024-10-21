import React from 'react';
import './home.css';
import Banner from '../../components/Banner/Banner';
import Explore from '../../components/Explore/Explore';
import About from '../../components/About/About';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import FAQ from '../../components/FAQ/Faq';

const Home = () => {
  return (
    <div id='home' className="home">
      <Header/>
      <Banner />
      <section id="explore"><Explore /></section>
      <section id="about"><About /></section>
      <section id="faq"><FAQ /></section>
      <Footer/>
    </div>
  );
};

export default Home;
