import { createFileRoute } from "@tanstack/react-router";
import SiteLayout from "@/components/SiteLayout";
import VideoPlayer from "@/components/VideoPlayer";
import { Link } from "@/lib/router-compat";
import { waLink } from "@/lib/contact";
import { FileText, Download, ArrowLeft, MessageCircle } from "lucide-react";
import { lesson1Materials } from "@/data/lesson1Materials";
import { lesson1Photos } from "@/data/lesson1Photos";
import LessonPhotoGallery from "@/components/lesson/LessonPhotoGallery";

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
              Сабақ суреттері
            </h2>
            <LessonPhotoGallery photos={lesson1Photos} />
          </div>

          <div className="mt-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Сабақ материалдары
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {lesson1Materials.map((mat) => (
                <div
                  key={mat.url}
                  className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg emerald-gradient flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {mat.title}
                      </p>
                      <p className="text-xs text-muted-foreground">PDF</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={mat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 emerald-gradient text-primary-foreground px-3 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity min-h-11 flex-1"
                    >
                      <FileText className="w-4 h-4" /> PDF-ті ашу
                    </a>
                    <a
                      href={mat.url}
                      download
                      className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground border border-border px-3 py-2 rounded-lg text-sm font-semibold hover:bg-muted transition-colors min-h-11 flex-1"
                    >
                      <Download className="w-4 h-4" /> Жүктеп алу
                    </a>
                  </div>
                </div>
              ))}
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
