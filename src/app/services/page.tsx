import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Crown, 
  Presentation, 
  Video, 
  Users, 
  Mic2, 
  Globe,
  Building2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Clock,
  Target
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | VocalImage - Vocal Coaching & Training",
  description: "Explore our comprehensive vocal coaching services including executive presence training, presentation mastery, media training, and corporate workshops.",
};

const services = [
  {
    id: "executive",
    icon: Crown,
    title: "Executive Presence Coaching",
    subtitle: "For Senior Leaders & C-Suite",
    description: "Develop the vocal gravitas that commands respect and inspires confidence. Our executive program is tailored for leaders who need to influence at the highest levels.",
    features: [
      "One-on-one sessions with senior coaches",
      "Boardroom communication strategies",
      "Stakeholder influence techniques",
      "Crisis communication preparation",
      "Personal brand voice development",
    ],
    duration: "8-12 sessions",
    format: "In-person or Virtual",
    ideal: "CEOs, Directors, Senior Executives",
  },
  {
    id: "presentations",
    icon: Presentation,
    title: "Presentation Mastery",
    subtitle: "For Keynotes & High-Stakes Pitches",
    description: "Transform your presentations from forgettable to unforgettable. Learn to captivate audiences, handle Q&A with confidence, and deliver messages that stick.",
    features: [
      "Content structure for maximum impact",
      "Vocal variety and pacing techniques",
      "Stage presence and body language",
      "Handling nerves and anxiety",
      "Q&A mastery and impromptu speaking",
    ],
    duration: "6-8 sessions",
    format: "In-person with video review",
    ideal: "Speakers, Salespeople, Entrepreneurs",
  },
  {
    id: "media",
    icon: Video,
    title: "Media Training",
    subtitle: "For Interviews & Public Appearances",
    description: "Prepare for media interviews, podcasts, and public appearances with confidence. Learn to stay on message, handle difficult questions, and make every soundbite count.",
    features: [
      "On-camera presence and techniques",
      "Message development and bridging",
      "Handling hostile questioning",
      "Podcast and radio interview skills",
      "Social media video confidence",
    ],
    duration: "4-6 sessions",
    format: "Studio-based with recordings",
    ideal: "Executives, Founders, Subject Matter Experts",
  },
  {
    id: "virtual",
    icon: Globe,
    title: "Virtual Communication",
    subtitle: "For Video Calls & Webinars",
    description: "Master the unique challenges of virtual communication. From Zoom meetings to webinars, learn to project presence through the screen.",
    features: [
      "Camera presence and eye contact",
      "Audio quality and microphone technique",
      "Virtual meeting leadership",
      "Webinar hosting and engagement",
      "Hybrid meeting dynamics",
    ],
    duration: "4 sessions",
    format: "100% Virtual",
    ideal: "Remote Workers, Team Leaders, Trainers",
  },
  {
    id: "team",
    icon: Users,
    title: "Team Workshops",
    subtitle: "For Groups & Departments",
    description: "Elevate your team's collective communication. Our interactive workshops transform how teams collaborate, present, and represent your organisation.",
    features: [
      "Customised to your industry and challenges",
      "Interactive exercises and role-play",
      "Team presentation skills",
      "Meeting facilitation training",
      "Internal communication excellence",
    ],
    duration: "Half-day to 2-day programs",
    format: "On-site or Virtual",
    ideal: "Sales Teams, Leadership Teams, Client-Facing Roles",
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Programs",
    subtitle: "For Organisation-Wide Transformation",
    description: "Comprehensive communication transformation for your entire organisation. We work with you to develop a bespoke program that drives lasting change.",
    features: [
      "Needs assessment and program design",
      "Tiered training for all levels",
      "Internal coach certification",
      "Ongoing support and measurement",
      "Culture of communication excellence",
    ],
    duration: "Ongoing partnership",
    format: "Blended learning",
    ideal: "HR Leaders, L&D Teams, Transformation Projects",
  },
];

const methodology = [
  {
    step: "1",
    title: "Assess",
    description: "We start with a comprehensive assessment of your current vocal presence, identifying strengths and areas for development.",
  },
  {
    step: "2",
    title: "Design",
    description: "Based on your goals and assessment, we create a personalised development plan tailored to your specific needs.",
  },
  {
    step: "3",
    title: "Practice",
    description: "Through guided sessions, you'll practice new techniques in a safe environment with expert feedback.",
  },
  {
    step: "4",
    title: "Apply",
    description: "We help you apply your new skills to real-world situations, with ongoing coaching and refinement.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Tailored Vocal Coaching for{" "}
              <span className="gradient-text">Every Professional Need</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From executive presence to team workshops, we offer comprehensive 
              programs designed to transform how you communicate.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">Our Proven Methodology</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {methodology.map((step, index) => (
              <div key={step.title} className="text-center relative">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] border-t-2 border-dashed border-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                id={service.id}
                className={`overflow-hidden ${index % 2 === 1 ? "bg-secondary/10" : ""}`}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`p-8 md:p-10 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <Badge variant="secondary" className="mb-3">{service.subtitle}</Badge>
                    <CardTitle className="text-2xl md:text-3xl mb-4">{service.title}</CardTitle>
                    <CardDescription className="text-base mb-6">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link href="/contact">
                        Enquire Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={`bg-gradient-to-br from-primary/5 to-accent/10 p-8 md:p-10 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Duration</div>
                          <div className="font-semibold">{service.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Globe className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Format</div>
                          <div className="font-semibold">{service.format}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Target className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Ideal For</div>
                          <div className="font-semibold">{service.ideal}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Enhance Your Program</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Mic2,
                title: "Voice Analysis",
                description: "Advanced acoustic analysis of your voice patterns with personalised recommendations.",
              },
              {
                icon: Video,
                title: "Video Review Sessions",
                description: "Recorded practice sessions with detailed feedback on your progress.",
              },
              {
                icon: Sparkles,
                title: "Intensive Bootcamps",
                description: "Accelerated 2-3 day immersive programs for rapid transformation.",
              },
            ].map((addon) => (
              <Card key={addon.title} className="bg-card text-center">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <addon.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{addon.title}</h3>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Program Is Right for You?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book a free consultation and we&apos;ll help you identify the perfect 
            program for your goals and circumstances.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
