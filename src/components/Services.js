import React from "react";

import Image1 from "../assets/html.png";
import Image2 from "../assets/css.png";
import Image3 from "../assets/javascript.png";
import Image4 from "../assets/bootstrap.png";
import Image5 from "../assets/tailwindcss.png";
import Image6 from "../assets/php.png";
import Image7 from "../assets/sharp.png";
import Image8 from "../assets/Ai.png";
import Image9 from "../assets/figma.png";
import Image10 from "../assets/mysql.png";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bottom mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Some programming languages & tools that I can
            </h3>
            <a href="https://github.com/KukuhAgung" className="btn btn-sm py-5">
              Go to my github
            </a>
          </motion.div>

          <div>
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="border-white/20 h-[170px] mb-[38px] flex"
            >
              <div className="max-w-[476px]">
                <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                  Programming Languages
                </h4>
                <p className="font-secondary leading-tight">
                  HTML, CSS, JavaScript, PHP, C#, MySQL
                </p>
                <div className="grid grid-cols-6 gap-6 max-w-full mt-5 border-b border-neutral-600 pb-7">
                  <div className="w-[70px]  px-3 py-3 bg-slate-900 shadow-sm shadow-black hover:drop-shadow-lg hover:shadow-accent/25 hover:shadow-lg hover:-translate-y-1 hover:duration-150 hover:ease-in rounded-sm">
                    <img src={Image1} alt="" />
                  </div>
                  <div className="w-[70px]  px-3 py-3 bg-slate-900 shadow-sm shadow-black hover:drop-shadow-lg hover:shadow-accent/25 hover:shadow-lg hover:-translate-y-1 hover:duration-150 hover:ease-in rounded-sm">
                    <img src={Image2} alt="" />
                  </div>
                  <div className="w-[70px]  px-3 py-3 bg-slate-900 shadow-sm shadow-black hover:drop-shadow-lg hover:shadow-accent/25 hover:shadow-lg hover:-translate-y-1 hover:duration-150 hover:ease-in rounded-sm">
                    <img src={Image3} alt="" />
                  </div>
                  <div className="w-[70px]  px-3 py-3 bg-slate-900 shadow-sm shadow-black hover:drop-shadow-lg hover:shadow-accent/25 hover:shadow-lg hover:-translate-y-1 hover:duration-150 hover:ease-in rounded-sm">
                    <img src={Image6} alt="" />
                  </div>
                  <div className="w-[70px]  px-3 py-3 bg-slate-900 shadow-sm shadow-black hover:drop-shadow-lg hover:shadow-accent/25 hover:shadow-lg hover:-translate-y-1 hover:duration-150 hover:ease-in rounded-sm">
                    <img src={Image7} alt="" />
                  </div>
                  <div className="w-[70px]  px-3 py-3 bg-slate-900 shadow-sm shadow-black hover:drop-shadow-lg hover:shadow-accent/25 hover:shadow-lg hover:-translate-y-1 hover:duration-150 hover:ease-in rounded-sm">
                    <img src={Image10} alt="" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="border-white/20 h-[170px] mb-[38px] flex"
            >
              <div className="max-w-[476px]">
                <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                  Framework & Tools
                </h4>
                <p className="font-secondary leading-tight">
                  TailwindCss, Bootstrap, Laragon, Adobe Ilustrator, Figma
                </p>
                <div className="grid grid-cols-6 gap-6 max-w-full mt-5 border-b border-neutral-600 pb-7">
                  <div className="w-[70px]  px-3 py-3 bg-slate-900 shadow-sm flex items-center shadow-black hover:drop-shadow-lg hover:shadow-accent/25 hover:shadow-lg hover:-translate-y-1 hover:duration-150 hover:ease-in rounded-sm">
                    <img src={Image5} alt="" />
                  </div>
                  <div className="w-[70px]  px-3 py-3 bg-slate-900 shadow-sm shadow-black hover:drop-shadow-lg hover:shadow-accent/25 hover:shadow-lg hover:-translate-y-1 hover:duration-150 hover:ease-in rounded-sm">
                    <img src={Image4} alt="" />
                  </div>
                  <div className="w-[70px]  px-3 py-3 bg-slate-900 shadow-sm shadow-black hover:drop-shadow-lg hover:shadow-accent/25 hover:shadow-lg hover:-translate-y-1 hover:duration-150 hover:ease-in rounded-sm">
                    <img src={Image8} alt="" />
                  </div>
                  <div className="w-[70px]  px-3 py-3 bg-slate-900 shadow-sm shadow-black hover:drop-shadow-lg hover:shadow-accent/25 hover:shadow-lg hover:-translate-y-1 hover:duration-150 hover:ease-in rounded-sm">
                    <img src={Image9} alt="" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
