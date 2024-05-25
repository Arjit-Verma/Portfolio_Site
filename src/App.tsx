import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";
import "./index.css";
import { HeaderBar } from "./layout/Header";
function App() {
  return (
    <motion.div className="bg-custom-gradient h-screen flex felx-col justify-center ">
      <motion.div
        className=" sticky w-11/12 h-16 mt-5 glass-container flex items-center justify-center "
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <HeaderBar />
      </motion.div>
      <div>
        <motion.div></motion.div>
      </div>
    </motion.div>
  );
}

export default App;
