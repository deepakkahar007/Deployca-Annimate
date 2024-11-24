import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

import { startingFeatures } from "../constants";
import { TypingText, TitleText } from "./TypingText";
import StartSteps from "./StartSteps";

const GetsStarted = () => {
  return (
    <section className={`xs:p-8 relative z-10 px-6 py-12 sm:p-16`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`styles.2xl:max-w-[1280px] mx-auto flex w-full flex-col gap-8 lg:flex-row`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`flex flex-1 items-center justify-center`}
        >
          <img
            src="/get-started.png"
            alt="get-started"
            className="h-[90%] w-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex flex-[0.75] flex-col justify-center"
        >
          <TypingText title="| How Metaversus Works" />
          <TitleText title={<>Get started with just a few clicks</>} />
          <div className="mt-[31px] flex max-w-[370px] flex-col gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps
                key={feature}
                number={`${index < 10 ? "0" : ""} ${index + 1}`}
                text={feature}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetsStarted;
