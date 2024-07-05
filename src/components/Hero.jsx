import React, { useState } from "react";
import BgImage from "../assets/bg-slate-CF7-1x4s.png";
import BlackCoffee from "../assets/black-Dl2umTo2.png";
import { Navbar } from "./Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          {/* navbar section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section  */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Blvck Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4 w-[30vw] h-[11.5vw] bg-gray-700/25 p-5">
                  <h1 className="text-2xl">Black Lifestyle Lovers</h1>
                  <h1 className="text-lightOrange text-sm opacity-55 leading leading-loose">
                    nunc aliquet bibendum enim facilisis gravida neque convallis
                    a cras semper auctor neque vitae tempus quam pellentesque
                    nec nam aliquam sem et tortor consequat id porta nibh
                    venenatis cras sed
                  </h1>
                </div>
              </motion.div>
              
            </div>
            {/* Hero Image section  */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={BlackCoffee}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
            </div>
            {/* Orange circle ring */}
            <motion.diV
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.8,
              }}
              className="h-[180px] w-[180px] absolute top-24 right-90 border-primary  border-[20px] rounded-full z-10"
            ></motion.diV>

            {/* big text section  */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.8,
              }}
              className="absolute -top-20 right-[200px] z-[1]"
            >
              <h1 className="text-[140px] scale-150 font-bold text-darkGray leading-none">
                Blvck <br/>Tumbler
              </h1>
            </motion.div>
            {/* Third div section 18:54 */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <div className="relative ">
                <div className="relative top-36 z-10 space-y-4 md: hidden lg:block w-[30vw] h-[11.5vw]  bg-darkGray/50 p-5">
                  <h1 className="text-2xl">Blvck Tumbler</h1>
                  <h1 className="text-lightOrange text-sm opacity-55 leading leading-loose">
                    nunc aliquet bibendum enim facilisis gravida neque convallis
                    a cras semper auctor neque vitae tempus quam pellentesque
                    nec nam aliquam sem et tortor consequat id porta nibh
                    venenatis cras sed
                  </h1>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sidebar Menu Section  */}
        {sidebar && (
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10"
          >
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                {/* line  */}
                <div className="w-[1px] h-[70px] bg-white"></div>
                {/* social icons  */}
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaTwitter className="text-2xl"/>
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl"/>
                </div>
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
