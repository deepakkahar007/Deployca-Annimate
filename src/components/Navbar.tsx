import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`relative px-6 py-8 sm:px-16`}
  >
    <div className="gradient-01 absolute inset-0 w-[50%]" />
    <div className={`mx-auto flex w-[100%] justify-between gap-8 lg:w-[80%]`}>
      <img
        loading="lazy"
        src="/search.svg"
        alt="search"
        className="size-[24px] object-contain"
      />
      <h2 className="text-[24px] font-extrabold leading-[30px] text-white">
        Deployca
      </h2>
      <img src="/menu.svg" alt="menu" className="w-[24px] object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;
