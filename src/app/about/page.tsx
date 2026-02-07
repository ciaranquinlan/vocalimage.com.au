import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Heart, 
  Target, 
  Lightbulb, 
  Users,
  GraduationCap,
  Award,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | VocalImage - Our Story & Mission",
  description: "Learn about VocalImage's mission to transform professional communication across Australia and New Zealand. Meet our expert coaching team.",
};

const values = [
  {
    icon: Heart,
    title: "Authenticity",
    description: "We don't create artificial personas. We help you find and amplify your genuine voice.",
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "Every session is designed to deliver measurable improvements in your communication impact.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We combine time-tested techniques with cutting-edge research in vocal psychology and neuroscience.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work alongside you as partners in your professional development journey.",
  },
];

const team = [
  {
    name: "Alexandra Reid",
    role: "Founder & Lead Coach",
    bio: "Former broadcast journalist with 20+ years experience. Trained executives at Fortune 500 companies across APAC.",
    credentials: ["MA Communications", "Certified Voice Coach", "TEDx Speaker"],
  },
  {
    name: "Michael Torres",
    role: "Executive Presence Specialist",
    bio: "Background in theatre and corporate training. Specialises in C-suite coaching and high-stakes presentations.",
    credentials: ["Drama & Performance Studies", "Executive Coaching Certification"],
  },
  {
    name: "Dr. Priya Sharma",
    role: "Voice Science Consultant",
    bio: "PhD in Speech Pathology. Brings scientific rigour to our vocal development methodology.",
    credentials: ["PhD Speech Pathology", "Research Fellow, University of Sydney"],
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">About VocalImage</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Empowering Professionals to{" "}
              <span className="gradient-text">Find Their Voice</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              For over 15 years, we&apos;ve helped thousands of professionals across 
              Australia and New Zealand discover the transformative power of effective 
              vocal communication.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Born from a Simple Observation
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  VocalImage was founded when our lead coach, Alexandra Reid, noticed 
                  something troubling during her years as a broadcast journalist: brilliant 
                  people with incredible ideas were being overlooked simply because of 
                  how they communicated.
                </p>
                <p>
                  The most qualified candidate didn&apos;t always get the job. The best 
                  idea didn&apos;t always win the pitch. The smartest person in the room 
                  wasn&apos;t always heard.
                </p>
                <p>
                  What made the difference? <strong>Vocal image</strong>—the impression 
                  you create through your voice, delivery, and presence. It&apos;s not 
                  about being louder or more aggressive. It&apos;s about communicating 
                  with authenticity, clarity, and confidence.
                </p>
                <p>
                  Today, VocalImage has grown into Australia and New Zealand&apos;s 
                  premier vocal coaching practice, helping executives, entrepreneurs, 
                  and professionals at every level unlock their communication potential.
                </p>
              </div>
            </div>
            <div className="bg-secondary/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg mb-6">
                To ensure that every professional has the vocal presence to match 
                their expertise—so the best ideas get heard, the right leaders get 
                recognised, and authentic communication becomes the norm.
              </p>
              <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Professionals trained annually
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Believe
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="bg-card text-center">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Your Coaches
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team brings together decades of experience in broadcasting, theatre, 
              corporate training, and speech science.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="bg-card overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-primary/30 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.credentials.map((credential) => (
                      <Badge key={credential} variant="secondary" className="text-xs">
                        {credential}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-6">Industry Recognition</h2>
            <p className="text-lg text-muted-foreground mb-8">
              VocalImage has been recognised as a leader in professional development 
              across Australasia, with partnerships spanning major corporations, 
              government agencies, and leading universities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Australian HR Institute Partner",
                "NZ Institute of Management Approved",
                "ISO 9001 Certified Training",
              ].map((award) => (
                <Badge key={award} variant="outline" className="px-4 py-2">
                  {award}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards transforming your vocal image. 
            Book a free consultation with one of our expert coaches.
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
