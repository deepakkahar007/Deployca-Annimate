import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TypingText, TitleText } from "./TypingText";
import InsightCard from "./InsightCard";
import { insights } from "../constants";

const Insight = () => {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`styles.2xl:max-w-[1280px] mx-auto flex w-full flex-col`}
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText title="Insight about Deployca" textStyles="text-center" />

        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index) => {
            return (
              <InsightCard
                key={`insight-${index}`}
                {...insight}
                index={index + 1}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Insight;
