import { Brain, GraduationCap, Award, Calendar, Rocket, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const ServicesOverviewSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Career Counselling + Psychometric Test",
      description: "Scientific, multi-dimensional assessment combining psychology, aptitude, interests, and learning styles.",
      highlight: "30+ Page 5D Report"
    },
    {
      icon: GraduationCap,
      title: "Study Abroad",
      description: "20+ countries, 3000+ universities. Complete support from profile evaluation to visa guidance.",
      highlight: "Free Profile Evaluation"
    },
    {
      icon: BookOpen,
      title: "Indian Degree Programs",
      description: "2000+ on-campus and 150+ online universities. UG, PG, Doctorate across all major domains.",
      highlight: "Career-Aligned Selection"
    },
    {
      icon: Award,
      title: "Certifications & Internships",
      description: "10,000+ certifications and 300+ virtual internships for skill development and profile building.",
      highlight: "Industry-Aligned Skills"
    },
    {
      icon: Calendar,
      title: "Scientific Events",
      description: "International conferences, awards, FDPs, and workshops across multiple research domains.",
      highlight: "Academic Profile Building"
    },
    {
      icon: Rocket,
      title: "Startups Support & Investors Connect",
      description: "From idea incubation to investor funding. Complete ecosystem for aspiring entrepreneurs.",
      highlight: "Idea to Investor"
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/50">
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
            <Award className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Our <span className="text-gradient-primary">Core Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From career clarity to global education to entrepreneurship support — 
            everything you need for a future-proof career journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // Color intensity variations for headings - varying red shades
            const colorVariants = [
              "text-primary", // Base red
              "text-[hsl(0,77%,38%)]", // Darker red
              "text-[hsl(0,77%,50%)]", // Lighter red
              "text-[hsl(0,70%,42%)]", // Slightly muted red
              "text-[hsl(0,85%,46%)]", // More saturated red
              "text-[hsl(0,77%,35%)]", // Deep red
            ];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-background rounded-2xl p-8 shadow-soft card-hover group"
              >
                <div className="p-4 bg-primary/10 rounded-xl w-fit mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className={`font-display font-bold text-xl mb-3 ${colorVariants[index % colorVariants.length]}`}>
                  {service.title}
                </h4>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                  {service.highlight}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
