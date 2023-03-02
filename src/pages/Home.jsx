import React from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import LandingPage from '../components/home/LandingPage';
import Intro from '../components/home/Intro';
import trainerKettlebell from '../images/trainer-kettlebell.jpg'
import introFood from '../images/intro-food.jpg'
import Coaching from '../components/home/Coaching'
import Programme from '../components/home/Programme'
import FAQ from '../components/home/FAQ'
import Contact from '../components/home/Contact'
import BeginnerProgramme from '../components/home/BeginnerProgramme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp } from '@fortawesome/free-solid-svg-icons'


function Home() {
  return (
    <div>
      <div className='relative' id="topOfHome">
        <div className='absolute right-0'><Navbar /></div>
        <LandingPage />
      </div>
      <Intro
        location="left"
        img={trainerKettlebell}
        description="Trainer with kettlebells"
        title="Online Personal Training"
        text="You decided to take your fitness journey seriously and want some help? Whether your goal is to build muscle, lose weight or just finding that healthy routine again, I can get you on track."
        extratext="My goal is to help you become autonomous so that you can continue your personal journey without me and become the best version of yourself."
      />
      <Intro
        img={introFood}
        description="healthy food"
        title="Nutrition"
        text="Fitness is a combination of training and nutrition. Both deserve your attention on your self improvement journey. Although this can be a complex topic the basics are really simple and if you're honest with yourself most of the time you know what you should and shouldn't eat. I'll make nutrition the easiest part for you but if you still want to have a more detailed look into it click here."
      />
        <div id="1on1coaching" className='bg-coaching-blue'>
          {<Coaching />}
        </div>
        <div id="programs" className='pt-10'>
          <h2 className='text-center text-2xl mb-10'>PROGRAMS</h2>
          <div className='flex justify-center mb-20'>
            {<BeginnerProgramme />}
          </div>
          <div className='flex flex-col lg:flex-row justify-center'>
            <Programme />
          </div>
        </div>
        <div className='lg:m-auto mx-10 py-10 lg:py-16 lg:w-2/3'>
          <h2 className='mb-10 text-2xl text-center'>FREQUENTLY ASKED QUESTIONS</h2>
          <FAQ
            question="I struggle to be consistent with my training and nutrition, what can I do?"
            answer="Consistency is key to get results and maintain them long term. The most important thing in order to be consistent is to enjoy what you do. Forcing yourself to eat or do things you don't like will not cut it. I will help you find your own way to reach your goals while enjoying what you do."
          />
          <FAQ question="I want to lose my abdominal fat, can you help me?"
            answer="There is no magical formula or exercise to lose abdominal fat. Training and adapted nutrition will reduce your overall body fat and so also in the abdominal region. I will help you combine both to put you in the best position to get rid of this belly fat."
          />
          <FAQ question="Do I need to have training experience ?"
            answer="NO. Anyone can train with me whether fitness is completely new to you or you already have some experience. All my trainings and tips are adapted to the individual client in order to get the best possible results."
          />
          <FAQ question="What happens on the first meeting?"
            answer="The first meeting is a chance to get to know each other. We will discuss your goals, your current daily routine, your eating habits, your activity level, possible physical limitations, etc. Everything we need in order to work most effectively."
          />
        </div>
        <div id="contact">
          <Contact />
        </div>
      <a href="#topOfHome" className='fixed right-10 bottom-24 text-yellow'><FontAwesomeIcon icon={faCircleUp} /></a>
      <Footer />
    </div>
  );
}

export default Home;
