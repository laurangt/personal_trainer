import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import fruitveg from '../images/fruitveg.jpg';
import healthycooking from '../images/healthycooking.jpg';

function Nutrition() {
  return (
    <div>
      <Navbar />
      <div className='mx-10 lg:mx-40 mt-7 lg:mt-14 mb-20 text-justify text-lg'>
        <h2 className='text-2xl text-center mb-7 lg:mb-10 font-bold'>Nutrition</h2>
        <p className='mb-5'>The power of nutrition is truly underestimated. The impact it can have on our body, on our physical as well as on our mental health, is immense and backed by an infinite amount of scientific research. Yet, are you doing anything to change it for the better?<br></br><br></br>To be fair, the modern lifestyle doesn't play in our favour here. In a world where everything has to be quick and easy, we have an abundance of fast food possibilities around the corner. The sad reality is, food loaded with sugar and unhealthy fats have become so normal in today's society, that we almost feel guilty when we eat actual organic food.</p>
        <div className='flex flex-col lg:flex-row mb-4 lg:items-center'>
          <div className='lg:w-3/5 self-center'>
            <p className='font-bold mb-4'>Are fruits and vegetables part of your daily eating?</p>
            <p className='font-bold mb-4'>Can you actually spend 1 week without soft drinks or energy drinks?</p>
            <p className='font-bold mb-4'>Does your meal tastes more like salt than like the actual food on your plate?</p>
            <p className='font-bold mb-4'>When was the last time you ate pasta without putting cheese on it?</p>
            <br />
            <p>Often times we don't realise how bad we eat. Processed food is dominating our kitchen and we don't even see it. The crazy thing is even if we do have food which is only a little or not processed, we still manage to denaturalise it with the aggressive style of cooking that we have nowadays.<br></br>Unfortunately, a lot of times these eating habits happen to be the source of many diseases and daily issues. From bad skin and lack of motivation to cardiovascular problems and cancer.</p>
          </div>
          <img className="lg:w-2/5 object-cover lg:ml-10 mt-5 lg:mt-0" id="fruitvegimg" src={fruitveg} alt="fruit and vegtables"/>
        </div>
        <div className='flex flex-col lg:flex-row mt-4 mb-8 lg:items-center'>
          <img className="lg:w-2/5 object-cover lg:mr-10 mb-5 lg:mb-0" id="healthycookingimg" src={healthycooking} alt="healthy cooking"/>
          <div className='lg:w-3/5 flex self-center	'>
            <p>Now what do we have to do to change those habits for the better? Well, we definitely have to understand what is meant by "healthy" and "unhealthy" food because although it can be obvious in some examples, often times it's not black or white. We also have to learn how to read the nutrition facts label to be able to know what's actually in it. And we for sure have to have the willpower to make a change in the first place.<br></br><br></br>Think about this. When it comes to the food you eat you generally have 3 variables: Quality, Time, Price. You will always have to sacrifice one and in the end it's only a matter of priority.<br></br><br></br>The goal is certainly not to be perfect. This would be impossible. Nevertheless, what if you could feel better just by changing what you eat?<br></br>"The fuel of the human body". Nutrition is what makes your body work and is the perfect complement to physical activity. When you give your body what it needs you give yourself endless benefits wether it be recovering better, being more motivated, gaining muscle, losing fat, feeling fitter, strengthening your immune system or boosting your concentration to name just a fraction of them. Forget about any diet you have heard of. Nutrition is a long term way of eating. The goal is to make it enjoyable and sustainable.<br></br><br></br>YOU ARE WHAT YOU EAT</p>
            <br></br>
          </div>
        </div>
        <h3 className='text-xl mt-4 mb-4 font-bold'>Nutritional Supplements</h3>
        <p>You probably have heard of this in relation to the fitness industry. Especially in bodybuilding the marketing for supplements is omnipresent. Whey protein, Casein protein, BCAA, Mass gainers, Fat burners, ..., we all have seen them in the gym, in the supermarket, sometimes even in scary XXL packs. I agree that this is a controversial topic. Although popular in the bodybuilding industry and sometimes effective for muscle building purposes only, a lot of these products are probably rather useless for most of us and potentially may even cause more harm than good in the long run but I feel like "supplements" often get a bad name because of this. It can actually be very important to supplement our nutrition, especially nowadays where it becomes more and more difficult to find nutrient dense food. However, I'm talking here about a different type of supplements.<br></br><br></br>The modernisation of the world has certainly many good points and made our lives a lot easier with endless opportunities. Almost everything is possible nowadays. But if anything is suffering because of it, it's nature, and with it is our nutrition. Industrialisation and pollution have made it almost impossible for us to get a sufficient amount of essential nutrients through food alone. Today's lifestyle has dramatically decreased the nutrient density so that in order to get the same benefits of eating a "healthy" food, we need to eat so much more of it than before. In other words, eating an apple now doesn't provide near as much beneficial nutrients than would you have eaten the same apple 50 or 100 years ago. Our bodies on the other hand still need the same amount of nutrients to function correctly if not more due to the modern way of life. That's where supplements can become useful and can help us fill the lack of essential nutrients.<br></br><br></br>That being said, a supplement will never replace good nutrition! As its name says, it's supposed to supplement an already good nutrition to make it even better if you want the extra benefits.<br></br><br></br>IMPORTANT: Never take any supplement without doing your own research or speaking with your doctor first.</p>
      </div>
      <Footer />
    </div>
  )
}

export default Nutrition
