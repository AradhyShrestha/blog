"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 transition-colors duration-300 bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-gray-200">
      {/* HEADER */}
      <motion.h1
        className="text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ⚡ About This Chaos
      </motion.h1>

      {/* INTRO */}
      <motion.p
        className="text-lg leading-relaxed mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Welcome to <span className="font-semibold text-pink-500">Code in the Wild</span> — where caffeine meets commits,
        and semicolons fear for their lives. This is not your average “Hello World” corner of the internet —
        this is the digital jungle where <span className="text-yellow-500">bugs evolve faster than frameworks</span> and{" "}
        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">console.log()</code> screams into the
        void.
      </motion.p>

      {/* SECTIONS */}
      <div className="space-y-12">
        {/* Who Am I */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-3 text-indigo-500 dark:text-indigo-400">💻 Who Am I?</h2>
          <p>
            Hey, I’m <span className="font-semibold text-blue-500">Aradhy</span> — a full-time human and part-time
            debugger. I write code, break code, fix code (sometimes), and then blog about how I *should’ve written it
            better* in the first place. My stack? A rotating buffet of JavaScript, caffeine, and regret.
          </p>
        </motion.section>

        {/* What’s This Blog About */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-3 text-green-500 dark:text-green-400">🚀 What’s This Blog About?</h2>
          <p>
            Tutorials, memes, code dumps, and weird experiments that sometimes work. If you’re here for perfectly
            polished code — good luck. If you’re here to learn, laugh, and occasionally cry with me over a failed
            deployment — welcome home. 💀
          </p>
        </motion.section>

        {/* Tech Philosophy */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-3 text-pink-500 dark:text-pink-400">🧠 Tech Philosophy</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Code first, Google later.</li>
            <li>Every bug is a feature in disguise.</li>
            <li>“Works on my machine” is a valid excuse.</li>
            <li>Commit messages are art. (“pls work”, “final_final_REAL_final”)</li>
          </ul>
        </motion.section>

        {/* Random Facts */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-3 text-yellow-500 dark:text-yellow-400">🔥 Random Facts</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>I’ve spent more time naming variables than writing logic.</li>
            <li>I measure productivity in cups of coffee.</li>
            <li>Dark mode isn’t a preference — it’s a lifestyle.</li>
          </ul>
        </motion.section>
      </div>

      {/* OUTRO */}
      <motion.p
        className="text-center text-2xl font-semibold mt-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Let’s make the web weird again. 🧩
      </motion.p>
    </div>
  );
}
