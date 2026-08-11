import { MessageCircle, Send, Phone, ArrowRight } from "lucide-react";
import { WHATSAPP_URL, TELEGRAM_URL, TEL_HREF, PHONE_DISPLAY } from "@/lib/contact";

const ContactSection = () => (
  <section id="contact" className="py-16 sm:py-20 px-4 emerald-gradient">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        Қазір бастаңыз — кеш болмай тұрып
      </h2>
      <p className="text-primary-foreground/85 text-base sm:text-lg mb-3">
        Құран оқуды бастаудың ең жақсы уақыты — қазір. Бірінші қадамды жасаңыз!
      </p>
      <p className="text-primary-foreground/60 text-sm mb-8 sm:mb-10">
        Сұрақтарыңыз болса — тегін кеңес алу үшін хабарласыңыз
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 sm:gap-3 gold-gradient text-accent-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          WhatsApp
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-primary-foreground/30 text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-primary-foreground/10 transition-colors"
        >
          <Send className="w-5 h-5 sm:w-6 sm:h-6" />
          Telegram
        </a>
      </div>

      <a
        href={TEL_HREF}
        className="inline-flex items-center justify-center gap-2 text-primary-foreground/90 hover:text-primary-foreground text-sm sm:text-base"
      >
        <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
      </a>
    </div>
  </section>
);

export default ContactSection;
