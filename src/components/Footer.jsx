import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full mt-8 mb-4 text-center"
    >
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-center space-x-4 mb-3">
          <div className="socials">
            <ul className="social-icons">
              <li><a className="github" aria-label="GitHub" href="https://github.com/Moderatorboy" target="_blank"><i className="fab fa-github"></i></a></li>
              <li><a className="telegram" aria-label="Telegram" href="https://t.me/b2gpt" target="_blank"><i className="fab fa-telegram-plane"></i></a></li>
              <li><a className="instagram" aria-label="Instagram" href="https://www.instagram.com/b2_gpt" target="_blank"><i className="fab fa-instagram"></i></a></li>
              <li><a className="youtube" aria-label="Youtube" href="https://www.youtube.com/@B2GPT" target="_blank"><i className="fab fa-youtube"></i></a></li>
              <li><a href="mailto:contactb2gpt@gmail.com" aria-label="Mail"><i className="fas fa-envelope"></i></a></li>
            </ul>
          </div>
        </div>

        <p className="text-purple-700 font-medium bg-white/50 backdrop-blur-sm py-2 px-4 rounded-full inline-block">
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
