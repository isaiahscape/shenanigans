import Container from "@/components/container";
import { ImageComponent } from "@/components/image";
import { TextScroll } from "@/components/ui/text-scroll";
import { Book, Info } from "lucide-react";
import { Metadata } from "next";
import CuteImage from "@/assets/img/banner.jpg";
import type { WebPage, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Write stuff and things.",
  openGraph: {
    title: "Blog",
    description: "Write stuff and things.",
  },
};

export default function About() {
  const jsonLd: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Blog",
    alternateName: "shenanigans | Blog",
    mainEntityOfPage: "https://isaiahthings.eu.org/blog",
    description: "Write stuff and things.",
    url: "https://isaiahthings.eu.org/blog",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Landing",
          item: "https://isaiahthings.eu.org/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://isaiahthings.eu.org/about",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Server Status",
          item: "https://isaiahthings.eu.org/status",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Blog",
          item: "https://isaiahthings.eu.org/blog",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Projects",
          item: "https://isaiahthings.eu.org/projects",
        },
      ],
    },
  };

  return (
    <>
      <Container>
        <div className="relative rounded-lg overflow-clip">
          <ImageComponent
            img={CuteImage}
            alt="Awoo"
            className="w-full relative max-h-96 z-10 rounded-lg"
            innerClassName="md:-translate-y-8"
            height={720}
          />
          <p className="z-20 md:w-fit w-3/4 text-center font-bold absolute bottom-3 left-1/2 rounded-full -translate-x-1/2 px-7 py-3 font-doto bg-background/80 text-foreground md:text-xl backdrop-blur-lg">
            all posts
          </p>
        </div>
        <div className="w-full bg-background rounded-lg border border-border">
          <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
            <Book className="size-4" />
            <span className="text-sm font-mono">details.md</span>
          </h2>
          <p className="px-5 py-3">
            In case you are wondering, yes, I write things. Mainly for some
            stuffs that I find interesting, or just to get my thoughts out of my
            head. You might also find rambles, rants,{" "}
            <span className="line-through">a couple backshots</span>, and some
            random stuffs, maybe code or some shit like that I don&apos;t know.
          </p>
        </div>
        <div className="w-full bg-background rounded-lg border border-border">
          <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
            <Info className="size-4" />
            <span className="text-sm font-mono">notice.md</span>
          </h2>
          <p className="px-5 py-3">
            This page is currently under heavy development. Please check again
            later. Otherwise you can try visiting other pages since what can you
            do anyways here.
          </p>
        </div>
      </Container>
      <TextScroll
        className="text-5xl md:text-7xl text-muted-foreground/50 dark:font-semibold font-bold py-24 md:space-y-2"
        textClassName="py-1 md:py-3 font-doto"
        default_velocity={0.66}
        text="AGES AND AGES LATER AND I'M STILL WRITING RANDOM SHIT.  "
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
