import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import svenPT from '../images/svenPT.jpg';
import svenTRX from '../images/svenTRX.jpg';

function AboutMe() {
  return (
    <div>
      <Navbar />
      <div className='mx-10 lg:mx-40 mt-7 lg:mt-14 mb-20 text-justify text-lg'>
        <h2 className='text-2xl text-center mb-7 lg:mb-10 font-bold'>About me</h2>
        <div className='flex flex-col lg:flex-row items-end'>
          <p className='lg:w-1/2'>If you're here, that means you want to know more about me. First I want to thank you for showing your interest, I am glad to share my story with you.<br></br>As you probably know my name is Sven and I was born and raised in the small country of Luxembourg. Growing up here, I had the privilege to learn 3 languages (French, German and English) in addition to my mother tongue (Luxembourgish). I've always had a passion for sports, especially football in my early years (which little boy didn't?). In my family I was the only person who really was into sports that much. I just had to go out and move, play football if I could, or anything else. I struggled to find any interest in an other subject to be honest and sometimes I felt like nobody would understand me. From the beginning it was clear, I had to do something sports related in the future. In school they don't push you towards the sports industry. It's a secondary thing, but for me it was the only thing I felt good at so I knew I had to figure it all out by myself but I had absolutely no idea what to do and how. However, I wasn't going to settle for something I don't like.</p>
          <img className="lg:w-1/2 lg:ml-10 mt-10 lg:mt-0 object-cover" src={svenPT} alt="trainer profile pic" />
        </div>
        <div className='flex flex-col lg:flex-row mt-8'>
          <img className='lg:w-1/3 mr-0 lg:mb-0 mb-10 lg:mr-10 object-cover' src={svenTRX} alt="trainer with TRX" />
          <p className='lg:w-2/3 '>Everyone has his own insecurities and I can say fitness and sport in general definitely helped me feel better and gain confidence. When we're stuck in our routine it's difficult to come out of it. It means doing something we're not used to, which means uncertainty, which means taking a risk. But it's that step which makes someone grow and learn. When I first went to a gym I had no real plan and I wasn't consistent at all, nor did I watch out what I ate. I probably did nothing right, except the most important thing, I took action. It took me some years to see the first results and more importantly to realise that everybody starts somewhere, and usually, it's at the bottom.<br></br><br></br>"We are what we repeatedly do. Excellence then is not an act but a habit" - Aristotle<br></br><br></br>Eventually I studied Sports Science in Montpellier (France). Classes in Anatomy, Physiology, Psychology, Motor Control, Biomechanics, Neuroscience, etc. built the foundation of what I do today. When I came back to Luxembourg, I took a course in Personal Training to enrich my knowledge even further and become a certified Personal Trainer. On top of that I did a nutrition course too. Such a fascinating and probably my favorite topic which goes far beyond just calculating calories and worrying how much protein you eat. Training and nutrition complement each other perfectly so it was important to me to have a deeper understanding of both.<br></br><br></br>If I learned one thing from all this, then it's that my body and my health are the most important things in my life. Today I try to inspire and help others who want to adopt a healthier lifestyle and reach their fitness goals. I'll be glad to be the partner you start your new journey with.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
