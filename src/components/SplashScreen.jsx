import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
      fixed
      inset-0
      flex
      flex-col
      items-center
      justify-center
      bg-slate-950
      overflow-hidden
      z-[999]
      "
    >
      <div
        className="
        absolute
        w-96
        h-96
        bg-purple-500/20
        rounded-full
        blur-3xl
        "
      />

      <div
        className="
        absolute
        w-80
        h-80
        bg-cyan-500/20
        rounded-full
        blur-3xl
        top-20
        right-20
        "
      />

      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.5,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        className="
        text-7xl
        md:text-8xl
        font-black
        tracking-widest
        text-white
        relative
        z-10
        "
      >
        LEVEL UP
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="
        text-white
        text-xl
        mt-5
        relative
        z-10
        "
      >
        Transform Tasks Into Progress
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="
        text-gray-400
        mt-2
        relative
        z-10
        "
      >
        Habits • Focus • Growth
      </motion.p>

      <div
        className="
        w-72
        h-2
        bg-white/10
        rounded-full
        overflow-hidden
        mt-8
        relative
        z-10
        "
      >
        <motion.div
          initial={{
            width: "0%",
          }}
          animate={{
            width: "100%",
          }}
          transition={{
            duration: 3,
            ease: "linear",
          }}
          className="
          h-full
          bg-gradient-to-r
          from-cyan-400
          via-purple-500
          to-green-400
          "
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
        }}
        className="
        text-gray-400
        text-sm
        mt-3
        relative
        z-10
        "
      >
        Loading your journey...
      </motion.p>
    </motion.div>
  );
}