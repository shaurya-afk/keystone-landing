"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ColophonSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Header and subheading fade up
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Columns fade up with stagger
      if (linksRef.current) {
        const columns = linksRef.current.querySelectorAll(":scope > div")
        gsap.from(columns, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: linksRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Bottom strip fade in
      if (footerRef.current) {
        gsap.from(footerRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="colophon"
      className="relative py-24 pl-6 md:pl-28 pr-6 md:pr-12 overflow-hidden border-t border-border/20 bg-background"
    >
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-16 mb-24 md:mb-32">
          {/* Header & Subheading */}
          <div ref={headerRef} className="max-w-md">
            <h2 className="font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight mb-6">
              AI SEO Systems
            </h2>
            <p className="font-mono text-sm text-foreground/70 leading-relaxed">
              We design and deploy AI-driven systems that increase organic traffic, rankings, and conversion.
            </p>
          </div>

          {/* Links Columns */}
          <div ref={linksRef}>
            <div className="flex flex-col">
              <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:shauryasha090@gmail.com" className="font-mono text-xs text-foreground/80 hover:text-foreground transition-colors">Email</a>
                </li>
                <li>
                  <a href="https://x.com/shauryadotafk" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-foreground/80 hover:text-foreground transition-colors">X (Twitter)</a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/shaurya-afk" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-foreground/80 hover:text-foreground transition-colors">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div ref={footerRef} className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between md:items-center gap-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            © 2026 Keystone
          </p>
        </div>
      </div>
    </section>
  )
}
