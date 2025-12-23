import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  GraduationCap,
  Award,
  Calendar,
  Rocket,
  BookOpen,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Career Counselling & Psychometric Test",
    description:
      "Scientific, multi-dimensional assessment combining psychology, aptitude, interests, and learning styles.",
    highlight: "30+ Page 5D Report",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: GraduationCap,
    title: "Study Abroad",
    description:
      "20+ countries, 3000+ universities with complete guidance from evaluation to visa.",
    highlight: "Free Profile Evaluation",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: BookOpen,
    title: "Indian Degree Programs",
    description:
      "UG, PG, and Doctorate programs across 2000+ on-campus and 150+ online universities.",
    highlight: "Career-Aligned Selection",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Award,
    title: "Certifications & Internships",
    description:
      "10,000+ certifications and 300+ internships to build job-ready skills.",
    highlight: "Industry-Aligned Skills",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Calendar,
    title: "Scientific Events",
    description:
      "International conferences, FDPs, workshops, and academic awards.",
    highlight: "Academic Profile Building",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Rocket,
    title: "Startup Support & Investor Connect",
    description:
      "From idea incubation to investor funding and ecosystem support.",
    highlight: "Idea to Investor",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80",
  },
];

const CIRCLE_SIZE = 460;
const ICON_SIZE = 68;
const RADIUS = 190;
const STEP = 360 / services.length;

const ServicesOverviewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const rotation = -(activeIndex * STEP);

  return (
    <section id="services" className="py-36 bg-white">
      <div className="container-custom">

        {/* SECTION HEADER */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Award className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Comprehensive Solutions
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-5">
            Our <span className="text-gradient-primary">Core Services</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A unified ecosystem for career clarity, education, research,
            skill-building, and entrepreneurship.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-28 items-center">

          {/* LEFT — ROTATING CIRCLE */}
          <div className="relative flex justify-center items-center">

            {/* Circle outline */}
            <div
              className="relative rounded-full border border-gray-200"
              style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }}
            />

            {/* Center text (NON-ROTATING) */}
            <div className="absolute flex items-center justify-center text-center px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl md:text-2xl font-display font-extrabold leading-snug max-w-[260px]"
                >
                  {services[activeIndex].title}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Rotating icons */}
            <motion.div
              className="absolute"
              style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }}
              animate={{ rotate: rotation }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                const angle = index * STEP;

                return (
                  <div
                    key={service.title}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `
                        translate(-50%, -50%)
                        rotate(${angle}deg)
                        translate(${RADIUS}px)
                        rotate(-${angle}deg)
                      `,
                    }}
                  >
                    <motion.button
                      onClick={() => setActiveIndex(index)}
                      className="relative"
                    >
                      <motion.div
                        animate={{ rotate: -rotation }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        className={`
                          rounded-full border flex items-center justify-center
                          transition-all duration-300
                          ${
                            activeIndex === index
                              ? "bg-black text-white border-black scale-110"
                              : "bg-white text-black border-gray-300 hover:scale-105"
                          }
                        `}
                        style={{ width: ICON_SIZE, height: ICON_SIZE }}
                      >
                        <Icon className="h-7 w-7" />
                      </motion.div>
                    </motion.button>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT — DETAILS */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
                className="space-y-3"
              >
                <img
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  className="w-full max-w-md rounded-xl object-cover"
                />

                <h3 className="text-3xl md:text-4xl font-display font-extrabold">
                  {services[activeIndex].title}
                </h3>

                <p className="text-lg text-gray-600 max-w-xl">
                  {services[activeIndex].description}
                </p>

                <span className="inline-block px-5 py-2 rounded-full border border-gray-300 text-sm font-semibold">
                  {services[activeIndex].highlight}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
