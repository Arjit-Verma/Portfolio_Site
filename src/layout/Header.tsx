import { motion } from "framer-motion";

export function HeaderBar() {
  return (
    <motion.div className="fixed  w-full flex justify-center">
      <motion.button
        className="font-bold text-xl text-white mx-4 opacity-90"
        whileTap={{ scale: 0.9 }}
      >
        Introduction
      </motion.button>
      <motion.button
        className="font-bold text-xl text-white mx-4 opacity-90"
        whileTap={{ scale: 0.9 }}
      >
        About Me
      </motion.button>
      <motion.button
        className="font-bold text-xl text-white mx-4 opacity-90"
        whileTap={{ scale: 0.9 }}
      >
        Skills
      </motion.button>
      <motion.button
        className="font-bold text-xl text-white mx-4 opacity-90"
        whileTap={{ scale: 0.9 }}
      >
        Projects
      </motion.button>
      <motion.button
        className="font-bold text-xl text-white mx-4 opacity-90"
        whileTap={{ scale: 0.9 }}
      >
        Contacts
      </motion.button>

      <motion.button
        className="font-bold text-xl text-white mx-4 opacity-90"
        whileTap={{ scale: 0.9 }}
        whileHover={{ color: "#fffff" }}
      >
        Resume
      </motion.button>
    </motion.div>
  );
}
