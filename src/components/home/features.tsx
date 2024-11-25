import { Briefcase, Shield, Users, Mail } from "lucide-react";

const features = [
  {
    name: "Email Verification",
    description:
      "Verify your work experience through email using zero-knowledge proofs.",
    icon: Mail,
  },
  {
    name: "Soulbound Tokens",
    description:
      "Receive non-transferable tokens that represent your verified achievements.",
    icon: Shield,
  },
  {
    name: "Company Verification",
    description:
      "Get your experience verified by authorized company representatives.",
    icon: Briefcase,
  },
  {
    name: "Third-Party Access",
    description:
      "Share your verified credentials with potential employers securely.",
    icon: Users,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center glass-card p-8 rounded-2xl mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-400">
            Proof of Work
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to verify your professional experience
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-6 w-6 flex-none text-blue-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
