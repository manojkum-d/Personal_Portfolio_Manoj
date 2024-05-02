import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import "../styles/globals.css";
// import Spline from "@splinetool/react-spline";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={variants}
        className="relative z-10" // Adjust z-index here
      >
        <Navbar />  
        <Component {...pageProps} />
      </motion.div>
    </>
  );
}

export default MyApp;
