import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
const testimonials = [
    {
      quote:
        "Nitin's expertise in frontend development is truly exceptional. His ability to translate complex design ideas into seamless, user-friendly interfaces is impressive. He played a crucial role in our project, ensuring that every detail was meticulously implemented. Nitin's dedication to continuous improvement and his proactive approach to learning new technologies make him an invaluable asset to any team.",
      name: "kaushal",
      title: "Software developer | z1 tech",
    },
    {
      quote:
        "Nitin is not just a frontend developer; he is a visionary who understands the importance of user experience. His creativity in crafting visually stunning interfaces has significantly enhanced our product's appeal. Beyond technical skills, Nitin brings a passion for innovation and a strong work ethic to every project. His ability to collaborate effectively and his proactive communication style make him an ideal teammate. I look forward to continuing to work with Nitin on future projects.",
      name: "Aditya Sharma",
      title: "Software developer | z1 tech",
    },
    {
      quote: "Working with Nitin has been a pleasure. His deep knowledge of HTML, CSS, and JavaScript, coupled with his proficiency in React and Vue.js, allowed us to elevate our web applications to the next level. Nitin's attention to detail and commitment to delivering high-quality code are remarkable. He consistently goes above and beyond to meet project goals and deadlines, making him a reliable and trusted team member",
      name: "Bickey Yadav",
      title: "Software developer | z1 tech",
    },
   
  ];


function Testimonial() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mt-[20px]">
            <h2 className="mt-2 mb-6  text-xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Testimonials
      </h2>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      );
    
}

export default Testimonial
