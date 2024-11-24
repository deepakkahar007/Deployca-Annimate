import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "./TypingText";

const World = () => {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| People on the world" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play togather in the
              same world
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex h-[550px] w-full"
      >
        <img src="/map.png" alt="map" className="h-full w-full object-cover" />

        <div className="absolute bottom-20 right-20 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px]">
          <img src="people-01.png" alt="people" className="h-full w-full" />
        </div>

        <div className="absolute left-20 top-20 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px]">
          <img src="people-02.png" alt="people-02" className="h-full w-full" />
        </div>

        <div className="absolute left-[45%] top-1/2 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px]">
          <img src="people-03.png" alt="people-03" className="h-full w-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default World;
