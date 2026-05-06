"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  title: string;
  image: string;
  shortBio: string;
  fullBio: string;
  expertise: string[];
  socials: { label: string; icon: "linkedin" | "twitter" | "facebook"; url: string }[];
}

const TEAM: TeamMember[] = [
  {
    name: "Tanvir Shaikh",
    title: "Founder",
    image: "/tanvir-dp.png",
    shortBio:
      "Business leader with 18+ years in global business development, strategic partnerships, and enterprise growth across APAC, UAE, Middle East, Europe, and India.",
    fullBio:
      "Business leader with 18+ years of experience in global business development, strategic partnerships, and enterprise growth across APAC, UAE, Middle East, Europe, and India. Currently focused on Web3, Blockchain, Crypto Ecosystems, Digital Assets, AI-driven solutions, and next-generation fintech innovations.\n\nExperienced in building scalable partnerships, driving investor and client relations, and enabling growth across crypto payments, tokenized ecosystems, DeFi, and enterprise technology solutions. Strong background across IT, BFSI, Engineering, Manufacturing, and emerging tech sectors.\n\nKnown for strategic thinking, relationship-driven leadership, and building high-performing teams that deliver measurable business impact.",
    expertise: [
      "Web3 & Blockchain Business Development",
      "Crypto & Digital Asset Ecosystems",
      "Strategic Partnerships & Investor Relations",
      "Global Enterprise Growth",
      "DeFi & Crypto Payment Solutions",
      "AI & Emerging Technology Consulting",
      "Key Account Management & Team Leadership",
    ],
    socials: [
      { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/tanvir-shaikh-b990395/" },
      { label: "Facebook", icon: "facebook", url: "https://www.facebook.com/share/18kA9X2Egg/" },
    ],
  },
  {
    name: "Amulay Prakash",
    title: "Co-Founder",
    image: "/amulay-dp.png",
    shortBio:
      "Seasoned Software Product Engineering Leader and Web3 strategist with 20+ years building scalable digital products and innovation-driven businesses across global markets.",
    fullBio:
      "Amulay is a seasoned Software Product Engineering Leader, Web3 strategist, and hands-on technologist with 20+ years of experience building scalable digital products and innovation-driven businesses across global markets.\n\nFounder of Quagnitia Systems and co-founder of ventures like WeSafeQR and DocBoyz, he has been actively involved in Blockchain, Web3, AI, NFT ecosystems, PropTech, and emerging technologies since the early stages of adoption. His expertise spans product engineering, crypto ecosystems, tokenization, digital identity solutions, and enterprise technology transformation.\n\nWith a strong foundation in Mathematics and Computer Science, Amulay has led global teams, launched innovative platforms, and driven technology-led growth across startups and enterprise environments. He is passionate about leveraging Blockchain and AI to build secure, scalable, and future-ready digital ecosystems.",
    expertise: [
      "Web3, Blockchain & NFT Ecosystems",
      "Product Engineering & Technology Leadership",
      "Crypto & Tokenized Platforms",
      "AI & Emerging Technologies",
      "Digital Identity & Safety Tech",
      "PropTech & Enterprise Innovation",
      "Global Team Leadership & Product Strategy",
      "Startup Scaling & Business Transformation",
    ],
    socials: [
      { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/amulay-prakash-2835791/" },
      { label: "Twitter / X", icon: "twitter", url: "https://x.com/Amulayfrny" },
    ],
  },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function SocialIcon({ type }: { type: "linkedin" | "twitter" | "facebook" }) {
  if (type === "linkedin") return <LinkedInIcon />;
  if (type === "twitter") return <TwitterIcon />;
  return <FacebookIcon />;
}

function TeamCard({ member }: { member: TeamMember }) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className={`team-card relative rounded-2xl overflow-hidden transition-all duration-500 ${
        expanded ? "ring-1 ring-[#00ffd1]/40" : "ring-1 ring-white/5 hover:ring-[#00ffd1]/20"
      }`}
      style={{
        background: "linear-gradient(135deg, rgba(0,255,209,0.04) 0%, rgba(0,119,182,0.06) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Ambient top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #00ffd180, transparent)" }}
      />

      {/* Card header — always visible */}
      <div className="p-6">
        {/* Top row: avatar + expand toggle */}
        <div className="flex items-start justify-between mb-4">
          {/* Avatar */}
          <div className={`relative flex-shrink-0 transition-all duration-500 ${expanded ? "w-28 h-28" : "w-20 h-20"}`}>
            <div
              className="absolute inset-0 rounded-full blur-md opacity-60 transition-all duration-500"
              style={{ background: expanded ? "#00ffd150" : "#00ffd130" }}
            />
            <div className={`relative w-full h-full rounded-full overflow-hidden ring-2 transition-all duration-500 ${expanded ? "ring-[#00ffd1]/60" : "ring-[#00ffd1]/30"}`}>
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 112px, 112px"
              />
            </div>
            {/* online-style dot */}
            <span className={`absolute bottom-1 right-1 rounded-full bg-[#00ffd1] ring-2 ring-black transition-all duration-500 ${expanded ? "w-3.5 h-3.5" : "w-3 h-3"}`} />
          </div>

          {/* Expand toggle */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all duration-300"
            style={{
              background: expanded ? "rgba(0,255,209,0.12)" : "rgba(255,255,255,0.04)",
              color: expanded ? "#00ffd1" : "rgba(255,255,255,0.4)",
              border: `1px solid ${expanded ? "rgba(0,255,209,0.3)" : "rgba(255,255,255,0.08)"}`,
            }}
            aria-expanded={expanded}
          >
            <span>{expanded ? "Less" : "More"}</span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            >
              <path d="M3 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Name / title / short bio */}
        <div>
          <h3
            className="font-bold text-xl leading-tight"
            style={{
              fontFamily: "var(--font-space, 'Space Grotesk', sans-serif)",
              background: "linear-gradient(135deg, #ffffff 0%, #00ffd1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {member.name}
          </h3>
          <p className="text-[#00ffd1] text-sm font-semibold tracking-widest uppercase mt-0.5 mb-2">
            {member.title}
          </p>
          <p className="text-white/60 text-sm leading-relaxed line-clamp-3">{member.shortBio}</p>

          {/* Social links — always visible */}
          <div className="flex flex-wrap gap-2 mt-4">
            {member.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white/50 hover:text-[#00ffd1] transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <SocialIcon type={s.icon} />
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Expandable section */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 border-t border-white/5 pt-5">
          {/* Full bio */}
          <div className="mb-5">
            <h4 className="text-[#00ffd1] text-xs font-bold tracking-widest uppercase mb-3">About</h4>
            {member.fullBio.split("\n\n").map((para, i) => (
              <p key={i} className="text-white/65 text-sm leading-relaxed mb-3 last:mb-0">
                {para}
              </p>
            ))}
          </div>

          {/* Core Expertise */}
          <div>
            <h4 className="text-[#00ffd1] text-xs font-bold tracking-widest uppercase mb-3">
              Core Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(0,255,209,0.07)",
                    border: "1px solid rgba(0,255,209,0.2)",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Heading entrance
      gsap.fromTo(
        headingRef.current,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Cards staggered entrance — fromTo so they're never stuck invisible
      const cards = cardsRef.current?.querySelectorAll(".team-card");
      if (cards?.length) {
        gsap.fromTo(
          cards,
          { y: 60, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section id="team" ref={sectionRef} className="relative section-padding">
      {/* Background ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-10 blur-[120px]"
          style={{ background: "radial-gradient(ellipse, #00ffd1 0%, #0077b6 60%, transparent 100%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-14">
          <p className="text-[#00ffd1] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            The People Behind USBT
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-space, 'Space Grotesk', sans-serif)" }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff 30%, #00ffd1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Meet the Team
            </span>
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            Decades of combined experience in Web3, enterprise technology, and global business
            development — united by a single mission.
          </p>

          {/* Gradient divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00ffd1]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ffd1]/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00ffd1]/40" />
          </div>
        </div>

        {/* Team cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {TEAM.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
