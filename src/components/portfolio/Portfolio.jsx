import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Strategic Agency",
    img: "./Agency.png",
    desc: "Bold Ideas, Bold Solutions At Air Strategic Agency, we believe in the transformative power of bold ideas. Our approach is designed to tackle your business challenges with innovative solutions that stand out in the digital age. Efficiency Meets Innovation Our landing page reflects our ethos of modernity and efficiency. The image of a person checking a smartwatch symbolizes our commitment to timely delivery and technological advancement. Sleek Design, Professional Impact With a sleek design that combines text and visuals, our landing page captures the essence of our professional and forward-thinking brand. Your Strategic Partner Choose Air as your strategic partner, and let us elevate your business with our expertise in harnessing the power of great ideas.",
  },
  {
    id: 2,
    title: "My-Bike",
    img: "./My-Bike.png",
    desc: "Empower Your Ride Unleash the thrill of urban exploration with MyBiKE. Our landing page captures the essence of freedom on two wheels, featuring a sleek, modern bicycle that’s more than just a mode of transport—it’s a statement. With the bold tagline “Take the Streets,” we invite you to experience the city like never before. Our high-quality image of a stylish black bike against a dark backdrop sets the tone for an empowering journey ahead. Join the MyBiKE movement and transform your commute into an adventure.",
  },
  {
    id: 3,
    title: "Miami",
    img: "./Miami.png",
    desc: "Welcome to Miami Condo Kings Experience the epitome of luxury living with Miami Condo Kings. Our landing page invites you to immerse yourself in the vibrant lifestyle of Miami, featuring a stunning sunrise view of the city’s iconic skyline and tranquil ocean. With modern amenities and breathtaking vistas, Miami Condo Kings is your gateway to an exclusive waterfront paradise. Discover the allure of Miami - where beauty meets sophistication.",
  },
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
