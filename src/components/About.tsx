import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "./TypingText";

const About = () => {
  return (
    <section className={`xs:p-8 relative z-10 px-6 py-12 sm:p-16`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex w-full flex-col items-center justify-center 2xl:max-w-[1280px]`}
      >
        <TypingText title={"| About Deployca"} textStyles={"text-center"} />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] text-center text-[20px] font-normal text-secondary-white sm:text-[32px]"
        >
          <span className="font-extrabold text-white">Lorem</span>
          ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veniam,
          consectetur beatae, optio nobis debitis necessitatibus sequi
          praesentium ad doloremque est officia eius,
          <span className="font-extrabold text-white">
            id deleniti nostrum aut
          </span>
          rem consequatur vel? Voluptates laboriosam libero, animi aliquid
          praesentium omnis. Assumenda nisi quisquam, labore ipsa pariatur
          <span className="font-extrabold text-white">eius</span>
          saepe. Nisi eveniet provident voluptas maiores!
        </motion.p>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="mt-[28px] w-[28px] object-contain"
        />
      </motion.div>
    </section>
  );
};

export default About;
