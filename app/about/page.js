
import React from 'react';

const About = () => {
  return (
    <div className="bg-[#fafafa] dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 min-h-screen selection:bg-orange-200">

      {/* SECTION 1: HERO */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-orange-100/50 to-transparent dark:from-orange-950/20 pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto text-center">
          <span className="px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium">
            Revolutionizing Creator Economy
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Fund your passion <br />
            <span className="bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
              chai by chai.
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Get Me a Chai is the simplest way for creators to receive support from their fans. No complicated subscriptions, just pure love (and caffeine).
          </p>
        </div>
      </section>

      {/* SECTION 2: PROBLEM & SOLUTION */}
      <section className="py-20 bg-white dark:bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Get Me a Chai?</h2>

            <p className="text-zinc-600 dark:text-zinc-400">
              Many creators struggle with platforms that take huge cuts or force users into expensive monthly commitments. We saw talented people giving up because &quot;traditional&quot; funding was too hard.
            </p>

            <div className="space-y-4">
              {[
                {
                  t: "The Barrier:",
                  d: "Subscription fatigue is real. Fans often hesitate to commit to monthly bills."
                },
                {
                  t: "The Solution:",
                  d: "One-time micro-payments (Chai) make it effortless for fans to say thanks."
                }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700">
                  <strong className="text-orange-600">{item.t}</strong>
                  <p className="text-sm mt-1">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />

            <div className="relative bg-white dark:bg-zinc-950 rounded-2xl p-2 border border-zinc-200 dark:border-zinc-800">
              <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl h-[300px] flex items-center justify-center">
                <span className="text-4xl">☕</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURES */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Powerful Features for Modern Creators
          </h2>
          <p className="text-zinc-500">
            Everything you need to grow your community and income.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{f.title}</h3>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section className="py-24 bg-zinc-950 text-white rounded-[3rem] mx-4 md:mx-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">
            Start in 3 Simple Steps
          </h2>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-zinc-800 -z-0" />

            {[
              {
                s: "01",
                t: "Setup Profile",
                d: "Connect your social accounts and tell your story."
              },
              {
                s: "02",
                t: "Share Link",
                d: "Add your 'Get Me a Chai' link to your bio or video descriptions."
              },
              {
                s: "03",
                t: "Receive Funds",
                d: "Get paid directly into your bank account instantly."
              }
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 outline outline-8 outline-zinc-950">
                  {step.s}
                </div>

                <h3 className="text-xl font-bold mb-2">{step.t}</h3>
                <p className="text-zinc-400 text-sm">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Questions? We got you.
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 bg-white dark:bg-zinc-900 shadow-sm">
              <summary className="font-semibold cursor-pointer flex justify-between items-center list-none">
                {faq.q}
                <span className="transition-transform group-open:rotate-180">↓</span>
              </summary>

              <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto p-12 rounded-[2.5rem] bg-gradient-to-r from-orange-600 to-orange-400 text-white text-center shadow-2xl shadow-orange-500/20">
          <h2 className="text-4xl font-bold mb-6">
            Join the Chai Revolution
          </h2>

          <p className="text-orange-50 mb-10 text-lg max-w-xl mx-auto">
            Your fans are waiting to support you. Don&apos;t let the barrier of complicated payments stand in your way.
          </p>

          <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            Get Started for Free
          </button>
        </div>
      </section>
    </div>
  );
};

const features = [
  { icon: "⚡", title: "Instant Payouts", desc: "No more waiting for the end of the month. Your money reaches you when you need it." },
  { icon: "🛡️", title: "Fan Privacy", desc: "Fans can support you anonymously or leave a public message. They choose." },
  { icon: "📊", title: "Rich Analytics", desc: "Deep insights into where your fans are coming from and what they love most." },
  { icon: "🎨", title: "Custom Branding", desc: "Your page, your rules. Customize colors and themes to match your brand personality." },
  { icon: "🌍", title: "Global Payments", desc: "Accept payments via UPI, Credit Cards, PayPal, and more from fans worldwide." },
  { icon: "🤝", title: "Direct Connect", desc: "Engage with your supporters through private updates and exclusive rewards." },
];

const faqs = [
  { q: "How much does it cost?", a: "We believe in creators. Our basic tier has a 0% platform fee. We only pass on the standard payment gateway charges." },
  { q: "Can I use it alongside Patreon?", a: "Absolutely! Many creators use Get Me a Chai for one-time tips while keeping Patreon for long-term memberships." },
  { q: "Is it safe for my fans?", a: "We use top-tier SSL encryption and industry-leading payment partners like Razorpay and Stripe to ensure every transaction is secure." },
];

export const metadata = {
  title: "About Us - Get Me A Chai",
  description: "Learn more about the mission behind Get Me A Chai and how we empower creators.",
};

export default About;
