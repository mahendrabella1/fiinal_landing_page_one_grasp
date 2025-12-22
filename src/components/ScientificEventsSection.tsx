import { Award, BookOpen, Users, Presentation, Calendar, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ScientificEventsSection = () => {
  const eventTypes = [
    { icon: Globe, name: "International Conferences", description: "Global research exposure" },
    { icon: Award, name: "Awards & Recognitions", description: "Celebrate academic excellence" },
    { icon: Users, name: "FDPs (Faculty Development)", description: "Professional growth for educators" },
    { icon: Presentation, name: "Workshops", description: "Hands-on skill building" },
  ];

  const domains = [
    "Engineering & Technology",
    "Health & Medical Sciences",
    "Business & Economics",
    "Education",
    "Social Sciences & Humanities",
    "Physical & Life Sciences",
    "Mathematics & Data Science",
    "Agriculture & Food Sciences",
    "Arts, Culture & Communication",
    "Interdisciplinary & Emerging Fields"
  ];

  return (
    <section className="section-padding bg-background">
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
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Academic Excellence</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Scientific <span className="text-gradient-primary">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Build your academic profile through international conferences, awards,
            <br />
            faculty development programs, and research workshops.
          </p>
        </motion.div>

        {/* Event Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {eventTypes.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-secondary/50 rounded-2xl p-6 text-center card-hover"
            >
              <div className="p-4 bg-primary/10 rounded-xl w-fit mx-auto mb-4">
                <event.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-display font-bold text-foreground mb-2">{event.name}</h4>
              <p className="text-sm text-muted-foreground">{event.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Domains */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary/5 rounded-2xl p-8"
        >
          <h3 className="text-xl font-display font-bold text-center text-foreground mb-6">
            Research Domains Covered
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {domains.map((domain) => (
              <span
                key={domain}
                className="px-4 py-2 bg-background rounded-lg text-sm font-medium text-foreground shadow-sm"
              >
                {domain}
              </span>
            ))}
          </div>
          <div className="text-center">
            <Button variant="default" size="lg">
              Explore Upcoming Events
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScientificEventsSection;
