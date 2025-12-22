import { Rocket, Lightbulb, Users, DollarSign, TrendingUp, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const StartupsSection = () => {
  const supportAreas = [
    {
      icon: Lightbulb,
      title: "Idea Incubation & Mentoring",
      features: ["Structured Idea Validation", "Expert Mentorship Network", "Curated Curriculum"]
    },
    {
      icon: DollarSign,
      title: "Access to Funding & Capital",
      features: ["Strategic Funding Roadmap", "Exclusive Investor Introductions", "Grant and Subsidy Navigation"]
    },
    {
      icon: Rocket,
      title: "Product Launch & Scaling Support",
      features: ["Go-to-Market Strategy", "Operational Scaling Toolkit", "Global Expansion Readiness"]
    },
    {
      icon: Handshake,
      title: "Networking & Investor Connect",
      features: ["High-Value Connect Events", "Ecosystem Integration", "Strategic Partnerships"]
    },
  ];

  const useCases = [
    "Student Founders",
    "Early-stage Startups",
    "Academic Research Commercialization",
    "Side Project to Startup Transition"
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Rocket className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Entrepreneurship</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Startups Support{" "}
            <span className="text-gradient-primary">& Investors Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A structured ecosystem to take your idea from incubation to investor funding. 
            Not isolated mentoring — comprehensive startup support.
          </p>
        </motion.div>

        {/* Support Areas Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {supportAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-background rounded-2xl p-8 shadow-soft card-hover"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary rounded-xl">
                  <area.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-display font-bold text-foreground text-xl">{area.title}</h4>
              </div>
              <ul className="space-y-3">
                {area.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-2xl p-8 shadow-soft text-center"
        >
          <h3 className="text-xl font-display font-bold text-foreground mb-6">
            Who Can Benefit?
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {useCases.map((useCase) => (
              <span
                key={useCase}
                className="px-6 py-3 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-foreground"
              >
                {useCase}
              </span>
            ))}
          </div>
          <Button variant="accent" size="lg">
            Connect with Investors
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupsSection;
