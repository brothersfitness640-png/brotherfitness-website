"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ShieldCheck, Phone } from "lucide-react";

interface NavbarProps {
  onOpenTrialModal?: (plan?: string) => void;
}

export default function Navbar({ onOpenTrialModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#070707]/95 backdrop-blur-md border-b border-[#E5A919]/20 py-3 shadow-xl shadow-black/50"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden border-2 border-[#E5A919]/80 bg-black shadow-lg shadow-[#E5A919]/25 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="Brother's Fitness Logo"
                width={48}
                height={48}
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-medium uppercase tracking-wider text-white leading-none group-hover:text-[#E5A919] transition-colors">
                BROTHER&apos;S
              </span>
              <span className="text-[10px] tracking-[0.25em] font-medium text-[#E5A919] uppercase leading-tight">
                FITNESS CLUB
              </span>
            </div>
          </Link>

          {/* Center: Menus (Home, About, Contact) with Active State */}
          <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1.5 px-1 transition-all duration-200 ${
                    isActive
                      ? "text-[#E5A919] font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#E5A919] after:shadow-[0_0_10px_#E5A919]"
                      : "text-gray-300 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E5A919]/60 hover:after:w-full after:transition-all after:duration-200"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Money Refund Message + Join Button */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            {/* Money Refund Guarantee Message */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A919]/15 border border-[#E5A919]/40 text-amber-300 text-xs font-medium shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#E5A919] shrink-0" />
              <span>100% Money Refund Guarantee</span>
            </div>

            {/* Join Button */}
            <button
              onClick={() => onOpenTrialModal && onOpenTrialModal("Header Join Now")}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E5A919] via-[#F59E0B] to-[#D97706] text-black font-medium text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#E5A919]/30 cursor-pointer"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-gray-200 hover:text-[#E5A919] hover:border-[#E5A919]/50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/95 backdrop-blur-xl flex flex-col p-6 animate-fadeIn">
          <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full border border-[#E5A919] bg-black overflow-hidden flex items-center justify-center p-1">
                <Image
                  src="/logo.png"
                  alt="Brother's Fitness Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-medium uppercase tracking-wider text-white">
                BROTHER&apos;S <span className="text-[#E5A919]">FITNESS</span>
              </span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-zinc-900 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Guarantee message in Mobile Drawer */}
          <div className="my-6 p-3 rounded-xl bg-[#E5A919]/10 border border-[#E5A919]/30 text-amber-300 text-xs flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#E5A919] shrink-0" />
            <span>1-on-1 PT for Every Client • 100% Money Refund Guarantee</span>
          </div>

          {/* Menus with Active State */}
          <div className="flex flex-col gap-3 text-base font-medium py-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-xl border transition-all ${
                    isActive
                      ? "bg-[#E5A919]/15 border-[#E5A919] text-[#E5A919]"
                      : "border-transparent text-gray-300 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto pt-6 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenTrialModal) onOpenTrialModal("Mobile Join Now");
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E5A919] to-[#F59E0B] text-black font-medium text-center uppercase text-sm tracking-wider shadow-lg shadow-[#E5A919]/30"
            >
              Join Now & Claim Trial
            </button>
            <a
              href="tel:+919505560783"
              className="w-full py-3 rounded-xl border border-zinc-800 text-gray-300 hover:text-white hover:border-[#E5A919]/40 text-center font-medium text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E5A919]" />
              Call Gym: +91 95055 60783
            </a>
          </div>
        </div>
      )}
    </>
  );
}

