import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import heroPanels from "@/assets/hero-panels.jpg";
import heroScada from "@/assets/hero-scada.jpg";
import heroWaterTreatment from "@/assets/hero-water-treatment.jpg";
import heroHvac from "@/assets/hero-hvac.jpg";
import heroFactory from "@/assets/hero-factory.jpg";

const slides = [
  {
    image: heroPanels,
    title: "Industrial Control Panel Manufacturing",
    subtitle: "Custom-engineered electrical panels designed to meet your exact specifications with world-class quality standards",
  },
  {
    image: heroScada,
    title: "PLC & SCADA Automation Solutions",
    subtitle: "Advanced automation systems for process control, monitoring, and data acquisition across industries",
  },
  {
    image: heroWaterTreatment,
    title: "Water & Wastewater Treatment Automation",
    subtitle: "Complete electrical and automation solutions for STP, WTP, and ETP plants with energy-efficient designs",
  },
  {
    image: heroHvac,
    title: "HVAC & Building Panels",
    subtitle: "Intelligent control systems for heating, ventilation, and air conditioning with BMS integration",
  },
  {
    image: heroFactory,
    title: "Factory Automation & Integration",
    subtitle: "End-to-end industrial automation solutions for manufacturing excellence and operational efficiency",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[500px] overflow-hidden md:h-[600px] lg:h-[700px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
      ))}

      {/* Content */}
      <div className="container-custom relative z-10 flex h-full items-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="mb-4 font-heading text-3xl font-bold text-secondary md:text-4xl lg:text-5xl xl:text-6xl">
            {slides[currentSlide].title}
          </h1>
          <p className="mb-8 text-lg text-secondary/90 md:text-xl">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-cta text-cta-foreground hover:bg-cta/90 text-base"
            >
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-primary text-base"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/20 p-2 backdrop-blur-sm transition-colors hover:bg-card/40"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-secondary" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/20 p-2 backdrop-blur-sm transition-colors hover:bg-card/40"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-secondary" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              index === currentSlide
                ? "w-8 bg-cta"
                : "w-2 bg-secondary/50 hover:bg-secondary"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
