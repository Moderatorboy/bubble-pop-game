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
       <div class="socials">
        <ul class="social-icons">
          <li><a class="github" aria-label="GitHub" href="https://github.com/Moderatorboy" target="_blank"><i class="fab fa-github"></i></a></li>
          <li><a class="telegram" aria-label="Telegram" href="https://t.me/b2gpt" target="_blank"><i class="fab fa-telegram-plane"></i></a></li>
          <li><a class="instagram" aria-label="Instagram" href="https://www.instagram.com/b2_gpt"><i class="fab fa-instagram" target="_blank"></i></a></li>
          <li><a class="youtube" aria-label="Youtube" href="https://www.youtube.com/@B2GPT"><i class="fab fa-youtube" target="_blank"></i></a></li>
          <li><a href="mailto:contactb2gpt@gmail.com" class="fas fa-envelope" aria-label="Mail" target="_blank"></a></li>
        </ul>
      </div>
    </div>
<div class="image">
    <img draggable="false" class="tilt" src="./assets/images/hero.png" alt="">
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
