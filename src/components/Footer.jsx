// components/Footer.jsx
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full mt-8 mb-4 text-center bg-white/50 backdrop-blur-sm py-6"
    >
      <div className="max-w-md mx-auto px-4">
        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://github.com/Moderatorboy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-700 hover:text-gray-900 text-2xl"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://t.me/b2gpt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-blue-500 hover:text-blue-700 text-2xl"
          >
            <i className="fa-brands fa-telegram-plane"></i>
          </a>
          <a
            href="https://www.instagram.com/b2_gpt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-500 hover:text-pink-700 text-2xl"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/@B2GPT"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-red-600 hover:text-red-800 text-2xl"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            href="mailto:contactb2gpt@gmail.com"
            aria-label="Mail"
            className="text-gray-700 hover:text-gray-900 text-2xl"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-purple-700 font-medium inline-block">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <Link
            href="https://b2gpt.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-purple-800 transition-colors"
          >
            @b2gpt
          </Link>
        </p>
      </div>
    </motion.footer>
  );
}
