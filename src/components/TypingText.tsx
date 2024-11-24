/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

type TypingTextType = {
  title: string;
  textStyles?: string;
};

export const TypingText = ({ title, textStyles }: TypingTextType) => {
  return (
    <div>
      <motion.p
        variants={textContainer}
        className={`text-[14px] font-normal text-secondary-white ${textStyles}`}
      >
        {Array.from(title).map((letter, index) => {
          return (
            <motion.span variants={textVariant2} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          );
        })}
      </motion.p>
    </div>
  );
};

export const TitleText = ({ title, textStyles }: any) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] text-[40px] font-bold text-white md:text-[64px] ${textStyles}`}
  >
    {title}
  </motion.h2>
);
