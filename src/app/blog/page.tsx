import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | VocalImage - Insights on Professional Communication",
  description: "Expert insights, tips, and strategies on vocal presence, presentation skills, and professional communication from Australia's leading voice coaches.",
};

const categories = [
  "All",
  "Vocal Techniques",
  "Presentation Skills",
  "Leadership Communication",
  "Virtual Presence",
  "Career Growth",
];

const posts = [
  {
    slug: "five-seconds-to-make-impression",
    title: "You Have 5 Seconds: How Your Voice Creates First Impressions",
    excerpt: "Research shows that people form lasting impressions within moments of hearing your voice. Here's how to make those seconds count.",
    category: "Vocal Techniques",
    author: "Alexandra Reid",
    date: "2026-02-01",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "nervous-speaker-to-confident-presenter",
    title: "From Nervous Speaker to Confident Presenter: A 30-Day Journey",
    excerpt: "Follow one executive's transformation from presentation anxiety to boardroom confidence with our proven methodology.",
    category: "Presentation Skills",
    author: "Michael Torres",
    date: "2026-01-25",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "virtual-meetings-presence",
    title: "Why Your Virtual Presence Matters More Than Ever in 2026",
    excerpt: "With hybrid work here to stay, your ability to command attention through a screen is a critical career skill.",
    category: "Virtual Presence",
    author: "Dr. Priya Sharma",
    date: "2026-01-18",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "vocal-warm-up-routine",
    title: "The 5-Minute Vocal Warm-Up Every Professional Should Know",
    excerpt: "A quick, effective routine to prepare your voice before important meetings, presentations, or calls.",
    category: "Vocal Techniques",
    author: "Alexandra Reid",
    date: "2026-01-12",
    readTime: "4 min read",
    featured: false,
  },
  {
    slug: "speak-with-authority-not-aggression",
    title: "How to Speak With Authority Without Coming Across as Aggressive",
    excerpt: "Finding the balance between confident and approachable is an art. Here's how to master it.",
    category: "Leadership Communication",
    author: "Michael Torres",
    date: "2026-01-05",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "accent-asset-not-liability",
    title: "Your Accent Is an Asset, Not a Liability",
    excerpt: "Why we coach clarity, not conformity—and how embracing your authentic voice makes you more memorable.",
    category: "Career Growth",
    author: "Dr. Priya Sharma",
    date: "2025-12-28",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "handling-difficult-questions",
    title: "Mastering the Art of Handling Difficult Questions",
    excerpt: "Whether in a media interview or a hostile board meeting, these techniques will help you stay composed and on message.",
    category: "Leadership Communication",
    author: "Alexandra Reid",
    date: "2025-12-20",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "voice-of-leadership",
    title: "The Voice of Leadership: What Makes a CEO Sound Like a CEO",
    excerpt: "An analysis of the vocal patterns that distinguish executive-level communicators from the rest.",
    category: "Leadership Communication",
    author: "Michael Torres",
    date: "2025-12-15",
    readTime: "6 min read",
    featured: false,
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogPage() {
  const featuredPosts = posts.filter((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">Blog &amp; Resources</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Insights on{" "}
              <span className="gradient-text">Professional Communication</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert tips, strategies, and stories to help you develop a 
              powerful vocal presence.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20" />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.slug} className="bg-card group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-2">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-muted-foreground mb-6">
              Get our latest articles, tips, and exclusive content delivered 
              straight to your inbox. No spam, just value.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border bg-background"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
