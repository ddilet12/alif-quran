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
        <h4 className="font-semibold text-foreground mb-3 text-sm">Платформа</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/courses" className="text-muted-foreground hover:text-primary">Курстар</Link></li>
          <li><Link to="/teachers" className="text-muted-foreground hover:text-primary">Ұстаздар</Link></li>
          <li><Link to="/dashboard" className="text-muted-foreground hover:text-primary">Кабинет</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-foreground mb-3 text-sm">Бөлімдер</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="/#formats" className="text-muted-foreground hover:text-primary">Оқу форматтары</a></li>
          <li><a href="/#pricing" className="text-muted-foreground hover:text-primary">Баға</a></li>
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
