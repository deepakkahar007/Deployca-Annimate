import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import ExploreCard from "./ExploreCard";
import { exploreWorlds } from "../constants";
import { TitleText, TypingText } from "./TypingText";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`xs:p-8 px-6 py-12 sm:p-16`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`styles.2xl:max-w-[1280px] mx-auto flex w-full flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="hidden md:block" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex min-h-[70vh] flex-col gap-5 lg:flex-row">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
