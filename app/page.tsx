"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Phone, ArrowUpRight, Menu } from "lucide-react";
import gsap from "gsap";

export default function Home() {
  // Refs for animated elements
  const headerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
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
  const noticeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation - fade in from top
      if (headerRef.current) {
        gsap.fromTo(headerRef.current,
          {
            y: -50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          }
        );
      }

      // Logo animation
      if (logoRef.current) {
        gsap.fromTo(logoRef.current,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            delay: 0.2,
            ease: "back.out(1.7)",
          }
        );
      }

      // Navigation items - stagger animation
      // Use container to find children if refs aren't set
      let navItems: HTMLDivElement[] = [];
      if (navContainerRef.current) {
        navItems = Array.from(navContainerRef.current.children) as HTMLDivElement[];
      }
      
      if (navItems.length > 0) {
        gsap.fromTo(navItems, 
          {
            y: -20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.4,
            ease: "power2.out",
          }
        );
      }

      // Contact button animation
      if (contactBtnRef.current) {
        gsap.fromTo(contactBtnRef.current,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: 0.8,
            ease: "back.out(1.7)",
          }
        );
      }

      // Hero content animations
      if (blogLabelRef.current) {
        gsap.fromTo(blogLabelRef.current,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.3,
            ease: "power2.out",
          }
        );
      }

      if (headlineRef.current) {
        gsap.fromTo(headlineRef.current,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.5,
            ease: "power3.out",
          }
        );
      }

      if (descriptionRef.current) {
        gsap.fromTo(descriptionRef.current,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.8,
            ease: "power2.out",
          }
        );
      }

      if (ctaBtnRef.current) {
        gsap.fromTo(ctaBtnRef.current,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: 1.1,
            ease: "back.out(1.7)",
          }
        );
      }

      // Notice section animation
      if (noticeRef.current) {
        gsap.fromTo(noticeRef.current,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 1.4,
            ease: "power2.out",
          }
        );
      }

      // Image container animation
      if (imageContainerRef.current) {
        gsap.fromTo(imageContainerRef.current,
          {
            scale: 0.9,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay: 0.4,
            ease: "power2.out",
          }
        );
      }

      // Hero images - stagger animation
      if (hero2Ref.current) {
        gsap.fromTo(hero2Ref.current,
          {
            x: 50,
            opacity: 0,
            scale: 0.9,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: 0.6,
            ease: "power3.out",
          }
        );
      }

      if (hero1Ref.current) {
        gsap.fromTo(hero1Ref.current,
          {
            x: -50,
            opacity: 0,
            scale: 0.9,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: 0.8,
            ease: "power3.out",
          }
        );
      }

      // Background shapes - floating animation
      if (shape1Ref.current) {
        gsap.fromTo(shape1Ref.current,
          {
            x: -30,
            y: -30,
            opacity: 0,
            scale: 0.8,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: 0.5,
            ease: "power2.out",
          }
        );

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
        gsap.fromTo(shape2Ref.current,
          {
            x: 30,
            y: 30,
            opacity: 0,
            scale: 0.8,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: 0.7,
            ease: "power2.out",
          }
        );

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
    <div className="father pt-6 pb-14 relative flex flex-col justify-start items-start gap-2.5 bg-slate-950 min-h-screen">
      <div className="daughter w-full flex flex-col justify-start items-center gap-8 md:gap-14">
        <div className="layer1 w-full max-w-[1440px] mx-auto flex flex-col justify-start items-start gap-8 md:gap-14 px-4 md:px-14">
          {/* Header */}
          <div ref={headerRef} className="layer2 self-stretch h-10 inline-flex justify-between items-center">
            {/* Hamburger menu for mobile */}
            <Menu className="w-6 h-6 text-white lg:hidden cursor-pointer" />
            
            <div ref={logoRef} className="flex-1 lg:flex-none flex justify-center lg:justify-start">
              <Image 
                className="w-28 h-7 md:w-36 md:h-9" 
                src="/hero/logo.svg" 
                alt="Logo" 
                width={138} 
                height={36}
              />
            </div>

            <div ref={navContainerRef} className="hidden lg:flex justify-start items-center">
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
              className="px-3 py-2 md:px-4 bg-amber-300 rounded-[999px] flex justify-center items-center gap-1 md:gap-2 cursor-pointer transition-all duration-300 hover:bg-amber-400 hover:scale-105 hover:shadow-lg hover:shadow-amber-300/50"
            >
              <Phone 
                data-property-1="Call" 
                className="w-5 h-5 text-neutral-900 transition-transform duration-300 hover:scale-110"
              />
              <div className="hidden md:block justify-start text-slate-950 text-base font-medium font-['Inter'] leading-4 tracking-tight">
                Contact
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="layer3 w-full max-w-[1440px] mx-auto px-4 md:px-14 relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-10">
          {/* Left: 50% content */}
          <div className="layer4 w-full lg:basis-1/2 lg:max-w-[50%] flex flex-col justify-center items-start gap-5 order-1 lg:order-1">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div ref={blogLabelRef} className="self-stretch justify-start text-amber-300 text-base md:text-lg font-bold font-['Red_Hat_Display'] leading-6 md:leading-7 tracking-widest">
                BLOG
              </div>
              <div ref={headlineRef} className="w-full lg:w-[700px] justify-start">
                <span className="text-slate-100 text-3xl md:text-4xl lg:text-6xl font-bold font-['Inter'] leading-tight md:leading-[50px] lg:leading-[67.20px]">
                  Insights That Drive{" "}
                </span>
                <span className="text-emerald-400 text-3xl md:text-4xl lg:text-6xl font-bold font-['Inter'] leading-tight md:leading-[50px] lg:leading-[67.20px]">
                  Business Growth
                </span>
              </div>
            </div>

            <div ref={descriptionRef} className="w-full lg:w-[489px] justify-start text-gray-400 text-sm md:text-base font-normal font-['Inter'] leading-5 md:leading-6 tracking-tight">
              Explore expert articles, case studies, and industry trends that help you reduce costs, boost efficiency, and scale smartly.
            </div>

            <div 
              ref={ctaBtnRef}
              data-left-icon="false" 
              data-right-icon="true" 
              data-state="Default" 
              data-type="Primary" 
              className="w-full md:w-auto px-6 py-3 bg-emerald-400 rounded-[999px] inline-flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-emerald-500 hover:scale-105 hover:shadow-lg hover:shadow-emerald-400/50 group"
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

          {/* Right: 50% image composition - moves to bottom on mobile/tablet */}
          <div className="w-full lg:basis-1/2 lg:max-w-[50%] relative flex justify-center items-center order-2 lg:order-2">
            {/* 
              Main image composition container
              - Contains the layered laptop images with background shapes
              - Matches the group-1261154925.png pattern structure
              - UNCHANGED: Same dimensions and positioning on all screens
            */}
            <div 
              ref={imageContainerRef}
              className="relative w-full max-w-[554px] aspect-[554/440] mx-auto lg:w-[554px] lg:h-[440px] lg:ml-[100px]"
            >
              {/* 
                Background Shape 1: Top-left green shape (circletop.svg)
                - Absolutely positioned, can be easily moved by adjusting top/left values
                - Serves as decorative background element
                - Animated with floating effect
                - Scales proportionally with container
              */}
              <div
                ref={shape1Ref}
                className="absolute top-[6px] left-[-48px] w-[17.5%] aspect-[97/49] bg-[url('/hero/circletop.svg')] bg-contain bg-no-repeat lg:top-6 lg:-left-12 lg:w-[97px] lg:h-[49px]"
                style={{ zIndex: 0 }}
              />

              {/* 
                Background Shape 2: Bottom-right orange shape (circlebottom.svg)
                - Absolutely positioned, can be easily moved by adjusting bottom/right values
                - Serves as decorative background element
                - Animated with floating effect
                - Scales proportionally with container
              */}
              <div
                ref={shape2Ref}
                className="absolute -bottom-[24px] -right-[40px] w-[32.9%] aspect-[182/92] bg-[url('/hero/circlebottom.svg')] bg-contain bg-no-repeat lg:-bottom-6 lg:-right-10 lg:w-[182px] lg:h-[92px]"
                style={{ zIndex: 0 }}
              />

              {/* 
                Layer 1: Bottom image (hero1.png) - appears on top
                - Primary laptop/blog workspace image
                - Positioned at bottom of container
                - Higher z-index, appears on top of top image and background shapes
                - Scales proportionally with container
              */}
              <div ref={hero1Ref} className="absolute bottom-0 left-0 w-[78.3%] aspect-[434/392] overflow-hidden z-10 lg:w-[434px] lg:h-[392px]">
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
                - Scales proportionally with container
              */}
              <div ref={hero2Ref} className="absolute top-0 right-0 w-[78.3%] aspect-[434/392] overflow-hidden z-0 lg:w-[434px] lg:h-[392px]">
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

        {/* Project Discussion Notice */}
        <div ref={noticeRef} className="w-full max-w-[1440px] mx-auto px-4 md:px-14 mt-8 md:mt-14 flex justify-center">
          <div className="p-4 md:p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm max-w-[600px] w-full">
            <p className="text-slate-100 text-sm md:text-base lg:text-lg font-bold font-['Inter'] leading-6 md:leading-7 text-center">
              Before start working in the full project I have to discuss about with you more and also you have to make sure that I&apos;ll have the full project because I&apos;m giving my effort and time.
            </p>
            <p className="text-slate-100 text-sm md:text-base lg:text-lg font-bold font-['Inter'] leading-6 md:leading-7 mt-4 text-center">
              Hope you like the starting. And you can message me in freelancer chat box or we can set for a meeting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
