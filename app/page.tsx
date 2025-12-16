"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Phone, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

export default function Home() {
  // Refs for animated elements
  const headerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement[]>([]);
  const contactBtnRef = useRef<HTMLDivElement>(null);
  const blogLabelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const ctaBtnRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const hero1Ref = useRef<HTMLDivElement>(null);
  const hero2Ref = useRef<HTMLDivElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation - fade in from top
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Logo animation
      gsap.from(logoRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "back.out(1.7)",
      });

      // Navigation items - stagger animation
      if (navItemsRef.current.length > 0) {
        gsap.from(navItemsRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.4,
          ease: "power2.out",
        });
      }

      // Contact button animation
      gsap.from(contactBtnRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        delay: 0.8,
        ease: "back.out(1.7)",
      });

      // Hero content animations
      gsap.from(blogLabelRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
      });

      gsap.from(headlineRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(descriptionRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        ease: "power2.out",
      });

      gsap.from(ctaBtnRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        delay: 1.1,
        ease: "back.out(1.7)",
      });

      // Image container animation
      gsap.from(imageContainerRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
      });

      // Hero images - stagger animation
      gsap.from(hero2Ref.current, {
        x: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.from(hero1Ref.current, {
        x: -50,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out",
      });

      // Background shapes - floating animation
      if (shape1Ref.current) {
        gsap.from(shape1Ref.current, {
          x: -30,
          y: -30,
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out",
        });

        gsap.to(shape1Ref.current, {
          y: "+=10",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 1.3,
        });
      }

      if (shape2Ref.current) {
        gsap.from(shape2Ref.current, {
          x: 30,
          y: 30,
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          delay: 0.7,
          ease: "power2.out",
        });

        gsap.to(shape2Ref.current, {
          y: "-=10",
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 1.5,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
  return (
    <div className="father pt-6 pb-14 relative flex flex-col justify-start items-start gap-2.5 bg-slate-950 min-h-screen">
      <div className="daughter w-full flex flex-col justify-start items-center gap-14">
        <div className="layer1 w-[1440px] mx-auto flex flex-col justify-start items-start gap-14">
          {/* Header */}
          <div ref={headerRef} className="layer2 self-stretch h-10 px-14 inline-flex justify-between items-center">
            <div ref={logoRef}>
              <Image 
                className="w-36 h-9" 
                src="/hero/logo.svg" 
                alt="Logo" 
                width={138} 
                height={36}
              />
            </div>

            <div className="flex justify-start items-center">
              <div 
                ref={(el) => { if (el) navItemsRef.current[0] = el; }}
                data-left-icon="false" 
                data-right-icon="false" 
                data-state="Default" 
                data-type="Text" 
                className="px-6 py-3 rounded-[999px] flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                <div className="justify-start text-slate-100 text-base font-medium font-['Inter'] leading-4 tracking-tight transition-colors duration-300 hover:text-emerald-400">
                  Home
                </div>
              </div>

              <div 
                ref={(el) => { if (el) navItemsRef.current[1] = el; }}
                data-left-icon="false" 
                data-right-icon="false" 
                data-state="Default" 
                data-type="Text" 
                className="px-6 py-3 rounded-[999px] flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                <div className="justify-start text-slate-100 text-base font-medium font-['Inter'] leading-4 tracking-tight transition-colors duration-300 hover:text-emerald-400">
                  Services
                </div>
              </div>

              <div 
                ref={(el) => { if (el) navItemsRef.current[2] = el; }}
                data-left-icon="false" 
                data-right-icon="false" 
                data-state="Default" 
                data-type="Text" 
                className="px-6 py-3 rounded-[999px] flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                <div className="justify-start text-slate-100 text-base font-medium font-['Inter'] leading-4 tracking-tight transition-colors duration-300 hover:text-emerald-400">
                  Industries
                </div>
              </div>

              <div 
                ref={(el) => { if (el) navItemsRef.current[3] = el; }}
                data-left-icon="false" 
                data-right-icon="false" 
                data-state="Default" 
                data-type="Text" 
                className="px-6 py-3 rounded-[999px] flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                <div className="justify-start text-slate-100 text-base font-medium font-['Inter'] leading-4 tracking-tight transition-colors duration-300 hover:text-emerald-400">
                  Blog
                </div>
              </div>

              <div 
                ref={(el) => { if (el) navItemsRef.current[4] = el; }}
                data-left-icon="false" 
                data-right-icon="false" 
                data-state="Default" 
                data-type="Text" 
                className="px-6 py-3 rounded-[999px] flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                <div className="justify-start text-slate-100 text-base font-medium font-['Inter'] leading-4 tracking-tight transition-colors duration-300 hover:text-emerald-400">
                  About Us
                </div>
              </div>
            </div>

            <div 
              ref={contactBtnRef}
              data-left-icon="true" 
              data-right-icon="false" 
              data-state="Default" 
              data-type="Secondary" 
              className="px-4 py-2 bg-amber-300 rounded-[999px] flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-amber-400 hover:scale-105 hover:shadow-lg hover:shadow-amber-300/50"
            >
              <Phone 
                data-property-1="Call" 
                className="w-5 h-5 text-neutral-900 transition-transform duration-300 hover:scale-110"
              />
              <div className="justify-start text-slate-950 text-base font-medium font-['Inter'] leading-4 tracking-tight">
                Contact
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="layer3 w-[1440px] mx-auto px-14 relative flex justify-between items-center gap-10">
          {/* Left: 50% content */}
          <div className="layer4 basis-1/2 max-w-[50%] min-w-96 flex flex-col justify-center items-start gap-5">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div ref={blogLabelRef} className="self-stretch justify-start text-amber-300 text-lg font-bold font-['Red_Hat_Display'] leading-7 tracking-widest">
                BLOG
              </div>
              <div ref={headlineRef} className="w-[700px] justify-start">
                <span className="text-slate-100 text-6xl font-bold font-['Inter'] leading-[67.20px]">
                  Insights That Drive{" "}
                </span>
                <span className="text-emerald-400 text-6xl font-bold font-['Inter'] leading-[67.20px]">
                  Business Growth
                </span>
              </div>
            </div>

            <div ref={descriptionRef} className="w-[489px] justify-start text-gray-400 text-base font-normal font-['Inter'] leading-6 tracking-tight">
              Explore expert articles, case studies, and industry trends that help you reduce costs, boost efficiency, and scale smartly.
            </div>

            <div 
              ref={ctaBtnRef}
              data-left-icon="false" 
              data-right-icon="true" 
              data-state="Default" 
              data-type="Primary" 
              className="px-6 py-3 bg-emerald-400 rounded-[999px] inline-flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-emerald-500 hover:scale-105 hover:shadow-lg hover:shadow-emerald-400/50 group"
            >
              <div className="justify-start text-slate-950 text-base font-medium font-['Inter'] leading-4 tracking-tight">
                Explore Our Insights
              </div>
              <ArrowUpRight 
                data-property-1="Arrow Up Right" 
                className="w-5 h-5 text-neutral-900 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </div>

          {/* Right: 50% image composition */}
          <div className="basis-1/2 max-w-[50%] relative flex justify-center items-center">
            {/* 
              Main image composition container
              - Contains the layered laptop images with background shapes
              - Matches the group-1261154925.png pattern structure
            */}
            <div 
              className="relative w-[554px] h-[440px]"
              style={{ marginLeft: "100px" }}
            >
              {/* 
                Background Shape 1: Top-left green shape (circletop.svg)
                - Absolutely positioned, can be easily moved by adjusting top/left values
                - Serves as decorative background element
              */}
              <div
                className="absolute top-6 -left-12 w-[97px] h-[49px] bg-[url('/hero/circletop.svg')] bg-contain bg-no-repeat"
                style={{ zIndex: 0 }}
              />

              {/* 
                Background Shape 2: Bottom-right orange shape (circlebottom.svg)
                - Absolutely positioned, can be easily moved by adjusting bottom/right values
                - Serves as decorative background element
              */}
              <div
                className="absolute -bottom-6 -right-10 w-[182px] h-[92px] bg-[url('/hero/circlebottom.svg')] bg-contain bg-no-repeat"
                style={{ zIndex: 0 }}
              />

              {/* 
                Layer 1: Bottom image (hero1.png) - appears on top
                - Primary laptop/blog workspace image
                - Positioned at bottom of container
                - Higher z-index, appears on top of top image and background shapes
              */}
              <div className="absolute bottom-0 left-0 w-[434px] h-[392px] overflow-hidden z-10">
                <Image
                  src="/hero/hero1.png"
                  alt="Blog workspace"
                  fill
                  className="object-cover"
                />
              </div>

              {/* 
                Layer 2: Top image (hero2.png) - appears behind
                - Secondary laptop/collaboration image
                - Positioned at top of container
                - Lower z-index, appears behind bottom image
                - Creates overlapping composition effect
              */}
              <div className="absolute top-0 right-0 w-[434px] h-[392px] overflow-hidden z-0">
                <Image
                  src="/hero/hero2.png"
                  alt="Collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
