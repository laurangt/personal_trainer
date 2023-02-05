import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LandingPage from '../components/home/LandingPage';
import Intro from '../components/home/Intro';
import trainerKettlebell from '../images/trainer-kettlebell.jpg'
import introFood from '../images/intro-food.jpg'

function Home() {
  return (
    <div>
      <Navbar />
        <LandingPage />
        <Intro
          img={trainerKettlebell}
          description="Trainer with kettlebells"
          title="Online Personal Training"
          // need to do break line
          text="You decided to take your fitness journey seriously and want some help? Whether your goal is to build muscle, lose weight or just finding that healthy routine again, I can get you on track."
          extratext="My goal is to help you become autonomous so that you can continue your personal journey without me and become the best version of yourself."
        />
        <Intro
          img={introFood}
          description="healthy food"
          title="Nutrition"
          text="Fitness is a combination of training and nutrition. Both deserve your attention on your self improvement journey. Although this can be a complexe topic the basics are really simple and if you're honest with yourself most of the time you know what you should and shouldn't eat. I'll make nutrition the easiest part for you but if you still want to have a more detailed look into it click here."
        />
      <Footer />
    </div>
  );
}

export default Home;
