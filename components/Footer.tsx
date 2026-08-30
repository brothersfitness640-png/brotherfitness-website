"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-zinc-900 text-gray-400 relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Col 1: Brand & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-4"
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#E5A919] bg-black flex items-center justify-center p-1 shadow-lg shadow-[#E5A919]/20">
                <Image
                  src="/logo.png"
                  alt="Brother's Fitness Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-medium uppercase tracking-wider text-white">
                  BROTHER&apos;S
                </span>
                <span className="text-[10px] tracking-[0.25em] font-medium text-[#E5A919] uppercase">
                  FITNESS CLUB
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Stronger. Everyday. Better You. India&apos;s premier personal training gym where every candidate receives dedicated 1-on-1 coaching and our 100% Results or Full Refund Guarantee.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#E5A919] hover:bg-[#E5A919]/20 text-gray-400 hover:text-[#E5A919] flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#E5A919] hover:bg-[#E5A919]/20 text-gray-400 hover:text-[#E5A919] flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.593 0 9 1.582 9 4.615V8z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#E5A919] hover:bg-[#E5A919]/20 text-gray-400 hover:text-[#E5A919] flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919505560783"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#E5A919] hover:bg-[#E5A919]/20 text-gray-400 hover:text-[#E5A919] flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </motion.div>


          {/* Col 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-3"
          >
            <h4 className="text-sm font-medium uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#E5A919] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E5A919] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#programs" className="hover:text-[#E5A919] transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/#facilities" className="hover:text-[#E5A919] transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E5A919] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Col 3: Branches */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-3"
          >
            <h4 className="text-sm font-medium uppercase tracking-wider text-white">
              Our Branches
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                <span className="text-[#E5A919] font-medium block">1st Branch (Kunchanapalli)</span>
                <p className="text-gray-400 leading-relaxed text-[11px]">
                  Door no: 3-273/2, Ground floor, Bank of Baroda building, near Aravinda High School, Kunchanapalli village, Tadepalli (Mandal), Guntur (Dist) - 522501.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                <span className="text-[#E5A919] font-medium block">2nd Branch (KL University Rd)</span>
                <p className="text-gray-400 leading-relaxed text-[11px]">
                  20-9-121/2, KL University Road, Vaddeswaram, Revenue Ward No 20, Mangalagiri Tadepalli - 522502.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Col 4: Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 space-y-3"
          >
            <h4 className="text-sm font-medium uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E5A919] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919505560783" className="text-gray-300 hover:text-[#E5A919] transition-colors font-medium">
                    +91 95055 60783
                  </a>
                  <a href="tel:+918885553402" className="text-gray-300 hover:text-[#E5A919] transition-colors font-medium">
                    +91 88855 53402
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E5A919] shrink-0" />
                <a href="mailto:brothers.fitness640@gmail.com" className="hover:text-white transition-colors truncate">
                  brothers.fitness640@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#E5A919] shrink-0" />
                <span>Mon - Sun: 5:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500"
        >
          <p>© 2026 Brother&apos;s Fitness. All Rights Reserved.</p>
          <div className="flex items-center gap-2 text-amber-400/90 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#E5A919]" />
            <span>Dedicated 1-on-1 PT Gym • 100% Results or Money-Back Guarantee</span>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}

