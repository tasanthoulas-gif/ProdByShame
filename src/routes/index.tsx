import { createFileRoute } from "@tanstack/react-router";
import avatar from "../assets/prodbyshame-avatar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ProdByShame | Music Producer & Sound Engineer" },
      { name: "description", content: "Music Producer | Mixing & Mastering | Beats | Recording. \nListen to my latest tracks on SoundCloud." },
      { property: "og:title", content: "ProdByShame | Music Producer & Sound Engineer" },
      { property: "og:description", content: "Music Producer | Mixing & Mastering | Beats | Recording. \nListen to my latest tracks on SoundCloud." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.14v14.72a1 1 0 0 0 1.5.86l11-7.36a1 1 0 0 0 0-1.72l-11-7.36A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function Index() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-12 bg-glow-radial">
      <div className="relative z-10 w-full max-w-md space-y-8">
        <header className="flex flex-col items-center space-y-5 text-center">
          <div className="relative">
            <img
              src={avatar}
              alt="ProdByShame"
              className="h-28 w-28 rounded-full object-cover border-2 border-primary/30 shadow-2xl"
            />
            <span className="absolute bottom-1 right-1 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-primary" />
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">ProdByShame</h1>
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Music Producer | Mixing & Mastering | Beats | Recording
            </p>
          </div>
        </header>

        <nav className="flex flex-col gap-4" aria-label="ProdByShame links">
          <a
            href="https://soundcloud.com/shameonprod?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background glow-pulse"
          >
            <span className="flex items-center gap-2">
              <PlayIcon className="h-5 w-5" />
              Listen to My Music / Soundcloud
            </span>
          </a>

          <a
            href="https://www.tiktok.com/@shameonprod?_r=1&_t=ZN-98ZYgC6SL9K"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 self-center rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground/90 transition-all duration-200 hover:scale-105 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            <TikTokIcon className="h-4 w-4" />
            <span>@shameonprod</span>
          </a>

          <div className="flex items-center justify-between rounded-2xl border border-border bg-secondary/60 px-6 py-4 text-foreground/90 cursor-default">
            <span className="font-medium">Mixing & Mastering</span>
            <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent-foreground">30€</span>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-border bg-secondary/60 px-6 py-4 text-foreground/90 cursor-default">
            <span className="font-medium">Beat License</span>
            <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent-foreground">50€</span>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-border bg-secondary/60 px-6 py-4 text-foreground/90 cursor-default">
            <span className="font-medium">Studio Recording</span>
            <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent-foreground">4€ / hour</span>
          </div>
        </nav>

        <section
          aria-label="ProdByShame tracks on SoundCloud"
          className="overflow-hidden rounded-2xl border border-border bg-card/80 shadow-2xl"
        >
          <div className="flex items-center justify-between px-5 pt-4 pb-3">
            <div>
              <h2 className="text-lg font-bold text-foreground">Top Tracks</h2>
              <p className="text-xs text-muted-foreground">Streaming on SoundCloud</p>
            </div>
            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
              Live
            </span>
          </div>
          <iframe
            title="ProdByShame tracks on SoundCloud"
            width="100%"
            height="420"
            allow="autoplay"
            loading="lazy"
            className="block border-0"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/shameonprod&color=%2338bdf8&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"
          />
        </section>


        <footer className="text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ProdByShame. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
