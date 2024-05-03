import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Strategic Agency",
    url: "https://misha-vynnyk.github.io/layout_dia/",
    img: "./Agency.png",
    desc: "Bold Ideas, Bold Solutions At Air Strategic Agency, we believe in the transformation power of bold ideas. Our approach is designed to tackle your business challenges with innovative solutions that stand out in the digital age. Efficiency Meets Innovation Our landing page reflects our ethos of modernity and efficiency. The image of a person checking a smartwatch symbolizes our commitment to timely delivery and technological advancement. Sleek Design, Professional Impact With a sleek design that combines text and visuals, our landing page captures the essence of our professional and forward-thinking brand. Your Strategic Partner Choose Air as your strategic partner, and let us elevate your business with our expertise in harnessing the power of great ideas.",
  },
  {
    id: 2,
    title: "My-Bike",
    url: "https://misha-vynnyk.github.io/MyBike-landing/",
    img: "./My-Bike.png",
    desc: "Empower Your Ride Unleash the thrill of urban exploration with MyBiKE. Our landing page captures the essence of freedom on two wheels, featuring a sleek, modern bicycle that’s more than just a mode of transport—it’s a statement. With the bold tagline “Take the Streets,” we invite you to experience the city like never before. Our high-quality image of a stylish black bike against a dark backdrop sets the tone for an empowering journey ahead. Join the MyBiKE movement and transform your commute into an adventure.",
  },
  {
    id: 3,
    title: "Miami",
    url: "https://misha-vynnyk.github.io/miami-landing/",
    img: "./Miami.png",
    desc: "Welcome to Miami Condo Kings Experience the epitome of luxury living with Miami Condo Kings. Our landing page invites you to immerse yourself in the vibrant lifestyle of Miami, featuring a stunning sunrise view of the city’s iconic skyline and tranquil ocean. With modern amenities and breathtaking vistas, Miami Condo Kings is your gateway to an exclusive waterfront paradise. Discover the allure of Miami - where beauty meets sophistication.",
  },
];

const Single = ({item: {img, title, desc, url}}) => {
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
            <img src={img} alt="Picture portfolio" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <a href={url} className="button" target="_blank">See Demo</a>
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
