import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mic2, 
  Users, 
  Target, 
  Trophy, 
  ArrowRight, 
  CheckCircle2,
  Presentation,
  MessageSquare,
  Video,
  Building2,
  Star
} from "lucide-react";

const features = [
  {
    icon: Mic2,
    title: "Voice Mastery",
    description: "Develop a powerful, authentic voice that commands attention and conveys confidence in every interaction.",
  },
  {
    icon: Presentation,
    title: "Presentation Excellence",
    description: "Transform your presentations from forgettable to unforgettable with techniques that engage and inspire.",
  },
  {
    icon: MessageSquare,
    title: "Meeting Impact",
    description: "Learn to speak with clarity and authority in meetings, ensuring your ideas are heard and valued.",
  },
  {
    icon: Video,
    title: "Virtual Presence",
    description: "Master the art of virtual communication for video calls, webinars, and online presentations.",
  },
  {
    icon: Users,
    title: "Leadership Voice",
    description: "Develop the vocal gravitas that distinguishes exceptional leaders from the crowd.",
  },
  {
    icon: Building2,
    title: "Corporate Training",
    description: "Customised programs for teams and organisations seeking to elevate their collective communication.",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechVentures",
    content: "VocalImage transformed how I communicate with my board and investors. The confidence I've gained has been invaluable for our recent Series B.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Senior Partner, McKenzie Law",
    content: "After 20 years in courtrooms, I thought I knew how to speak. VocalImage showed me techniques that have genuinely elevated my presence.",
    rating: 5,
  },
  {
    name: "Dr. Emma Thompson",
    role: "Medical Director, HealthFirst",
    content: "The training helped me connect better with patients and colleagues alike. I wish I'd discovered this years ago.",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Professionals Trained" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Corporate Partners" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Australia &amp; New Zealand&apos;s #1 Vocal Coaching Specialists
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Your Voice Is Your Most Powerful{" "}
              <span className="gradient-text">Professional Asset</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Transform how you&apos;re perceived at work, in presentations, and in meetings. 
              We help professionals develop a vocal image that matches their expertise and ambition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="animate-pulse-glow">
                <Link href="/contact">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">The Challenge</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Ideas Deserve to Be Heard
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                You&apos;re brilliant at what you do. But do people really <em>hear</em> you? 
                Too many professionals struggle with:
              </p>
              <ul className="space-y-3">
                {[
                  "Being overlooked in meetings despite having the best ideas",
                  "Presentations that don't land the way you intended",
                  "Lacking the vocal authority that matches your expertise",
                  "Uncertainty about how you come across to others",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/30 rounded-2xl p-8">
              <Badge className="mb-4">The Solution</Badge>
              <h3 className="text-2xl font-bold mb-4">Your Vocal Image, Perfected</h3>
              <p className="text-muted-foreground mb-6">
                We work with you to develop a vocal presence that&apos;s authentically you—but amplified. 
                Our proven methodology helps you:
              </p>
              <ul className="space-y-3">
                {[
                  "Speak with natural authority and confidence",
                  "Captivate any audience, from boardrooms to conferences",
                  "Project warmth and competence simultaneously",
                  "Make every word count",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Vocal Development
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From one-on-one executive coaching to team workshops, we offer 
              tailored solutions for every professional need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Leaders Across Industries
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-card">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Trophy className="h-12 w-12 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Vocal Image?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of professionals across Australia and New Zealand who have 
            discovered the power of their authentic voice.
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
