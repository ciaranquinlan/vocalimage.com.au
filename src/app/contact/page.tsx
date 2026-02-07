"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Calendar,
  CheckCircle2,
  Send
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    value: "hello@vocalimage.com.au",
    href: "mailto:hello@vocalimage.com.au",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri, 9am-5pm AEST",
    value: "+61 2 9000 1234",
    href: "tel:+61290001234",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our studios",
    value: "Sydney & Melbourne",
    href: "#locations",
  },
];

const faqs = [
  {
    question: "How long does a typical coaching program take?",
    answer: "Most individual programs run 6-12 sessions over 2-4 months. However, we tailor the duration to your specific goals and circumstances.",
  },
  {
    question: "Do you offer virtual coaching?",
    answer: "Yes! We offer both in-person and virtual coaching. Many of our clients combine both for maximum flexibility.",
  },
  {
    question: "What's included in the free consultation?",
    answer: "A 30-minute call where we discuss your goals, assess your current challenges, and recommend the most suitable program for you.",
  },
  {
    question: "Do you work with teams and organisations?",
    answer: "Absolutely. We offer team workshops and corporate programs for groups of all sizes.",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s Start Your{" "}
              <span className="gradient-text">Transformation</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Book a free consultation or get in touch with our team. 
              We&apos;re here to help you find your voice.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                className="flex items-center gap-4 p-6 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{method.title}</h3>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                  <p className="text-primary font-medium">{method.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Book Your Free Consultation</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll be in touch within 24 hours.
              </p>

              {isSubmitted ? (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-2">Thank You!</CardTitle>
                    <CardDescription className="text-base">
                      We&apos;ve received your enquiry and will be in touch within 24 hours 
                      to schedule your free consultation.
                    </CardDescription>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+61 4XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-2">
                      I&apos;m interested in *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formState.interest}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-md border bg-background"
                    >
                      <option value="">Select an option</option>
                      <option value="executive">Executive Presence Coaching</option>
                      <option value="presentation">Presentation Mastery</option>
                      <option value="media">Media Training</option>
                      <option value="virtual">Virtual Communication</option>
                      <option value="team">Team Workshop</option>
                      <option value="corporate">Corporate Program</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell us about your goals
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="What would you like to achieve? Any specific challenges you're facing?"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Book Free Consultation
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Privacy Policy.
                  </p>
                </form>
              )}
            </div>

            {/* FAQs and Info */}
            <div className="space-y-8">
              {/* What to Expect */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      "30-minute complimentary video or phone call",
                      "Discussion of your goals and challenges",
                      "Personalised program recommendation",
                      "Transparent pricing and timeline",
                      "No obligation to proceed",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM AEST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">By appointment</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQs */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Common Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="border-b pb-4 last:border-0">
                      <h4 className="font-medium mb-2">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
            <p className="text-muted-foreground">
              We have studios in Sydney and Melbourne, with virtual coaching available Australia-wide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Sydney Studio</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Level 10, 123 George Street<br />
                  Sydney NSW 2000
                </p>
                <p className="text-sm">
                  <span className="text-muted-foreground">Nearest station:</span> Wynyard
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Melbourne Studio</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Level 8, 456 Collins Street<br />
                  Melbourne VIC 3000
                </p>
                <p className="text-sm">
                  <span className="text-muted-foreground">Nearest station:</span> Southern Cross
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
