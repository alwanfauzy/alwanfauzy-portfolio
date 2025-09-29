import { FC } from "react";
import { motion } from "framer-motion";

const totalSteps = 5;

const reverseIndex = (index: number) => totalSteps - index - 1;

const Stairs: FC = () => {
  return (
    <>
      {[...Array(totalSteps)].map((_, index) => (
        <motion.div
          key={index}
          variants={{
            initial: { bottom: "0%" },
            animate: { bottom: "100%" },
            exit: { bottom: ["100%", "0%"] },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
