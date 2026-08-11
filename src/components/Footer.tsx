import { Link } from "@/lib/router-compat";
import { Phone, MessageCircle, Send } from "lucide-react";
import { PHONE_DISPLAY, TEL_HREF, WHATSAPP_URL, TELEGRAM_URL } from "@/lib/contact";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <Link to="/" className="font-bold text-lg text-primary">
          ☪ Әліппе
        </Link>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          Араб әліппесі мен Құран оқуды үйрететін онлайн платформа.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-foreground mb-3 text-sm">Бағдарламалар</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/courses/alippe" className="text-muted-foreground hover:text-primary">Әліппе</Link></li>
          <li><Link to="/courses/tajweed-basics" className="text-muted-foreground hover:text-primary">Тәжуид</Link></li>
          <li><Link to="/courses/quran-reading" className="text-muted-foreground hover:text-primary">Құран хатымы</Link></li>
          <li><Link to="/courses" className="text-muted-foreground hover:text-primary">Барлық сабақтар</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-foreground mb-3 text-sm">Бөлімдер</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/" className="text-muted-foreground hover:text-primary">Басты бет</Link></li>
          <li><a href="/#about" className="text-muted-foreground hover:text-primary">Ұстаз туралы</a></li>
          <li><a href="/#formats" className="text-muted-foreground hover:text-primary">Оқу форматы</a></li>
          <li><a href="/#faq" className="text-muted-foreground hover:text-primary">Сұрақтар</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-foreground mb-3 text-sm">Байланыс</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <a href={TEL_HREF} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary">
              <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
            </a>
          </li>
          <li>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </li>
          <li>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary">
              <Send className="w-4 h-4" /> Telegram
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-border py-5 px-4 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Әліппе онлайн курсы. Барлық құқықтар қорғалған.
    </div>
  </footer>
);

export default Footer;
