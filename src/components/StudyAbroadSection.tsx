import { GraduationCap, Globe, FileCheck, Award, Plane, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const StudyAbroadSection = () => {
  const countries = [
    "UK", "USA", "Canada", "Germany", "France", "Australia", "Ireland", "Spain"
  ];

  const features = [
    { icon: FileCheck, title: "Free Profile Weightage", description: "Get your admission chances evaluated" },
    { icon: GraduationCap, title: "University Shortlisting", description: "3000+ universities across 20+ countries" },
    { icon: BookOpen, title: "SOP & LOR Support", description: "Expert assistance for applications" },
    { icon: Award, title: "IELTS/TOEFL/PTE Training", description: "Language proficiency preparation" },
    { icon: Plane, title: "Spot Admissions Drives", description: "Direct university interviews" },
    { icon: Globe, title: "Visa Guidance", description: "Complete visa support" },
  ];

  const universities = [
    "Liverpool John Moores University",
    "Golden Gate University",
    "University of Warwick",
    "Michigan State University",
    "Johnson & Wales University",
    "James Cook University",
    "Deakin University",
    "University of Arizona",
    "University of Bridgeport",
    "Wharton Business School",
    "University Canada West",
    "SSBM Geneva"
  ];

  return (
    <section id="study-abroad" className="section-padding bg-secondary/30">
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
            <Globe className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Global Education</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Study <span className="text-gradient-primary">Abroad</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your education by making the world your campus. Access 3000+ universities 
            across 20+ countries with integrated career counselling + admissions strategy.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "20+", label: "Countries" },
            { value: "3000+", label: "Universities" },
            { value: "UG/PG/PhD", label: "Programs" },
            { value: "FREE", label: "Profile Evaluation" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-background rounded-2xl p-6 text-center shadow-soft"
            >
              <div className="text-3xl md:text-4xl font-display font-extrabold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Countries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-display font-bold text-center text-foreground mb-6">
            Study Destinations
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {countries.map((country) => (
              <span
                key={country}
                className="px-6 py-3 bg-background border border-border rounded-full font-semibold text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                {country}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-background rounded-2xl p-6 shadow-soft card-hover"
            >
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-display font-bold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Partner Universities Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-2xl p-8 shadow-soft"
        >
          <h3 className="text-xl font-display font-bold text-center text-foreground mb-6">
            Partner Universities Abroad
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {universities.map((uni) => (
              <span
                key={uni}
                className="px-4 py-2 bg-secondary/50 rounded-lg text-sm font-medium text-foreground"
              >
                {uni}
              </span>
            ))}
            <span className="px-4 py-2 bg-primary/10 rounded-lg text-sm font-semibold text-primary">
              + Many More
            </span>
          </div>
          <div className="text-center">
            <Button variant="default" size="lg">
              Get Free Profile Evaluation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudyAbroadSection;
