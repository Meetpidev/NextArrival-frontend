"use client";

import { Headphones, Home, MessageCircleMore, ShieldCheck } from "lucide-react";

export default function SupportSection() {
  const supportItems = [
    {
      title: "For tenants",
      description: "Help with listings, move-in questions, booking support, and getting answers fast during the rental search.",
      icon: Home,
    },
    {
      title: "For owners",
      description: "Support for posting homes, managing inquiries, and staying responsive without the back-and-forth.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto rounded-[28px] border border-[#eadcc6] bg-[#fdfaf4] shadow-[0_18px_50px_rgba(44,39,36,0.05)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-10 lg:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#eadcc6] bg-white px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#8d7f6b]">
              <Headphones className="h-3.5 w-3.5 text-[#cfa052]" />
              24/7 support
            </div>

            <div className="space-y-4 max-w-2xl">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#2c2724] leading-[1.1]">
                Always here for tenants and owners.
              </h2>
              <p className="text-[1.05rem] text-[#5c544d] leading-relaxed max-w-xl">
                Whether you&apos;re searching for a home or managing one, our support is available around the clock so questions do not stall the move.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {supportItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-[#eadcc6] bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f4efe6] text-[#cfa052]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-bold text-[#2c2724] text-lg">{item.title}</h3>
                    </div>
                    <p className="text-sm leading-6 text-[#6a5f54]">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[260px] lg:min-h-full bg-[#f4efe6] p-8 sm:p-10 lg:p-12 flex items-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(207,160,82,0.18),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(44,39,36,0.06),_transparent_42%)]" />
            <div className="relative z-10 max-w-md space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#8d7f6b] border border-[#eadcc6]">
                Always on support
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#2c2724] leading-[1.1]">
                  Help that stays with you through every step.
                </h3>
                <p className="text-[1rem] leading-7 text-[#5c544d]">
                  Our team is available 24/7 to answer questions, resolve booking concerns, and keep communication clear for tenants and owners alike.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-2xl border border-[#eadcc6] bg-white p-4">
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#f4efe6] text-[#cfa052]">
                    <MessageCircleMore className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold text-[#2c2724]">Instant answers</p>
                    <p className="text-sm leading-6 text-[#6a5f54]">Quick help when a question cannot wait until morning.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-[#eadcc6] bg-white p-4">
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#f4efe6] text-[#cfa052]">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold text-[#2c2724]">Reliable support</p>
                    <p className="text-sm leading-6 text-[#6a5f54]">Guidance for listings, move-in steps, and owner communication.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
