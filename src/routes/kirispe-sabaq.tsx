import { createFileRoute } from "@tanstack/react-router";
import SiteLayout from "@/components/SiteLayout";
import VideoPlayer from "@/components/VideoPlayer";
import { Link } from "@/lib/router-compat";
import { waLink } from "@/lib/contact";
import { FileText, Download, ArrowLeft, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/kirispe-sabaq")({
  component: IntroLessonPage,
  head: () => ({
    meta: [
      { title: "Кіріспе сабақ — Әліппе онлайн курсы" },
      {
        name: "description",
        content:
          "Әліппе курсының кіріспе сабағы: оқу форматы, алғашқы қадамдар, сабақ материалдары және тапсырма.",
      },
      { property: "og:title", content: "Кіріспе сабақ — Әліппе онлайн курсы" },
      {
        property: "og:description",
        content: "Оқу форматы және алғашқы қадамдармен танысыңыз.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/kirispe-sabaq" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/kirispe-sabaq" }],
  }),
});

function IntroLessonPage() {
  return (
    <SiteLayout>
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Басты бетке
          </Link>

          <span className="block text-xs font-medium text-gold uppercase tracking-wider">
            1-сабақ
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-1 mb-3">
            Кіріспе сабақ
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
            Оқу форматы және алғашқы қадамдармен танысыңыз.
          </p>

          <VideoPlayer title="Кіріспе сабақ" />

          <div className="mt-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Сабақ материалдары
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">PDF оқулық</p>
                  <p className="text-xs text-muted-foreground">Жақында қолжетімді</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                <Download className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">
                    Электронды жұмыс дәптері
                  </p>
                  <p className="text-xs text-muted-foreground">Жақында қолжетімді</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Тапсырма</h2>
            <div className="bg-card border border-border rounded-2xl p-6">
              <ul className="space-y-2.5 text-sm sm:text-base text-foreground/85 list-disc pl-5">
                <li>Сабақ видеосын толық көріңіз.</li>
                <li>Материалмен танысып, негізгі ұғымдарды жазып алыңыз.</li>
                <li>Алғашқы әріптерді дауыстап оқып, дыбыстық жазба жасаңыз.</li>
              </ul>
              <a
                href={waLink("Сәлеметсіз бе! Кіріспе сабақтың тапсырмасын жіберемін.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 gold-gradient text-accent-foreground px-6 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md"
              >
                <MessageCircle className="w-5 h-5" /> Тапсырманы жіберу
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
