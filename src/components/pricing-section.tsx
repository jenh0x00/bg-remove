export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      desc: "Perfect for trying the tool before you commit.",
      features: [
        "3 credits on signup",
        "Standard quality downloads",
        "No batch processing",
        "Personal use only",
      ],
      cta: "Start Free",
      highlight: false,
      badge: "",
    },
    {
      name: "Credits",
      price: "$14.9",
      period: "",
      desc: "Best for freelancers, casual users, and small stores.",
      features: [
        "100 one-time credits",
        "Credits never expire",
        "HD downloads",
        "No watermark",
        "Commercial use",
      ],
      cta: "Buy Credits",
      highlight: true,
      badge: "Most Popular",
    },
    {
      name: "Pro Monthly",
      price: "$9.9",
      period: "/ month",
      desc: "Best for regular users who process images often.",
      features: [
        "100 credits every month",
        "HD downloads",
        "No watermark",
        "Faster processing",
        "Cancel anytime",
      ],
      cta: "Get Pro",
      highlight: false,
      badge: "",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For teams, agencies, and high-volume API usage.",
      features: [
        "Custom credit volume",
        "API access",
        "Priority support",
        "Bulk processing",
        "Team workflow",
      ],
      cta: "Contact Sales",
      highlight: false,
      badge: "",
    },
  ];

  const faqItems = [
    {
      q: "Do I need an account to use the tool?",
      a: "You can try it once without an account. Sign up to get 3 free credits.",
    },
    {
      q: "What are credits?",
      a: "Each background removal uses 1 credit. Credits are deducted from your balance when you process an image.",
    },
    {
      q: "Do credits expire?",
      a: "Purchased credits never expire. Free promotional credits may have a time limit.",
    },
    {
      q: "What happens when I run out of credits?",
      a: "You can buy more credits or upgrade to a monthly plan to keep using the tool.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Monthly plans can be canceled anytime with no hidden fees.",
    },
    {
      q: "Do paid plans include commercial use?",
      a: "Yes, paid plans and purchased credits include commercial usage rights.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start for free, pay only when you need more. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 shadow-sm relative flex flex-col ${
                plan.highlight
                  ? "border-blue-500 shadow-lg bg-white"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-6 inline-block bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                {plan.period && (
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                )}
              </div>

              <p className="mt-3 text-sm text-gray-600 leading-6">{plan.desc}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <div className="text-center text-sm text-gray-500 mb-16">
          No hidden fees • Cancel anytime • Credits never expire • Secure checkout
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Frequently asked questions
          </h3>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.q} className="border-b border-gray-100 pb-6">
                <h4 className="text-base font-medium text-gray-900 mb-2">{item.q}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              Still have questions?{" "}
              <a href="/about" className="text-blue-600 hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
