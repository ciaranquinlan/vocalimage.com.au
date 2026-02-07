import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter } from "lucide-react";

// This would normally come from a CMS or database
const posts: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorBio: string;
  date: string;
  readTime: string;
}> = {
  "five-seconds-to-make-impression": {
    title: "You Have 5 Seconds: How Your Voice Creates First Impressions",
    excerpt: "Research shows that people form lasting impressions within moments of hearing your voice. Here's how to make those seconds count.",
    content: `
## The Science of First Impressions

When you walk into a room and speak your first words, something remarkable happens in the brains of everyone listening. Within just 5 seconds, they've already formed impressions about your competence, trustworthiness, and likability—and these impressions are notoriously difficult to change.

Research from Princeton University shows that we make judgments about others within a tenth of a second of seeing their face. But when it comes to voice, the impact is even more profound. A study published in the Journal of Voice found that listeners form stable impressions of a speaker's personality within just 7 seconds of hearing them speak.

## What Your Voice Communicates

Your voice conveys far more than words. When you speak, you're unconsciously transmitting:

**Confidence levels** — Hesitations, uptalk, and filler words signal uncertainty, while steady pacing and clear articulation suggest self-assurance.

**Energy and enthusiasm** — Monotone delivery suggests disengagement, while vocal variety indicates passion and investment in your message.

**Warmth and approachability** — The pitch, pace, and tone of your voice signal whether you're someone others want to connect with.

**Authority and expertise** — Lower pitch and measured pacing are often associated with competence and leadership.

## The Three Components of Vocal First Impressions

### 1. Resonance

The richness and depth of your voice creates an immediate impression of authority. A thin, nasal voice can undermine credibility, while a full, resonant voice commands attention.

**Quick tip:** Practice speaking from your diaphragm rather than your throat. Place your hand on your belly and feel it expand as you breathe—this is the foundation of a powerful voice.

### 2. Pace

Speaking too quickly suggests nervousness; too slowly can lose your audience. The key is deliberate pacing with strategic pauses.

**Quick tip:** Before important interactions, consciously slow down by 10-15%. What feels slow to you often sounds perfectly natural to listeners.

### 3. Pitch Variety

A dynamic pitch range keeps listeners engaged and helps emphasise key points. Monotone delivery, regardless of content, creates an impression of boredom or disengagement.

**Quick tip:** Record yourself speaking and listen back. Note where you could add more variation to bring your message to life.

## Making Those 5 Seconds Count

Here's a simple framework for your opening moments:

1. **Pause before speaking** — Resist the urge to fill silence immediately. A brief, confident pause shows self-assurance.

2. **Start with conviction** — Make your first words count. Avoid weak openers like "Um, so..." or "I just wanted to..."

3. **Ground your voice** — Take a breath before speaking. This lowers your pitch and adds resonance.

4. **Make eye contact** — This isn't about voice directly, but it reinforces the confidence you're projecting vocally.

## The Good News

Vocal first impressions are trainable. Unlike some aspects of first impressions (height, for example), your voice is remarkably malleable. With practice and awareness, you can develop a vocal presence that creates the exact impression you want to make.

The professionals we work with at VocalImage typically see significant improvements within 4-6 weeks of consistent practice. The key is awareness, feedback, and deliberate practice.

## Your Next Step

Start by recording yourself in a typical work scenario—a team meeting, a presentation, or a client call. Listen back with fresh ears. What impression does your voice create? What would you change?

If you're ready to take your vocal presence to the next level, [book a free consultation](/contact) with our team.
    `,
    category: "Vocal Techniques",
    author: "Alexandra Reid",
    authorBio: "Founder & Lead Coach at VocalImage. Former broadcast journalist with 20+ years experience training executives across APAC.",
    date: "2026-02-01",
    readTime: "6 min read",
  },
  "nervous-speaker-to-confident-presenter": {
    title: "From Nervous Speaker to Confident Presenter: A 30-Day Journey",
    excerpt: "Follow one executive's transformation from presentation anxiety to boardroom confidence with our proven methodology.",
    content: `
## Meet David: A Brilliant Mind with a Communication Challenge

David Chen is a senior engineer at a leading tech company. Brilliant problem-solver. Deep technical expertise. Respected by his team. But every time he had to present to leadership, he felt like a different person—nervous, rushed, forgettable.

"I knew I was undermining myself," David told us in our first session. "I had solutions that could save the company millions, but I couldn't communicate them effectively. People with half my expertise were getting promoted over me."

David's story is more common than you might think. This is the story of his 30-day transformation.

## Week 1: Awareness

The first step in any transformation is awareness. We started by recording David in a simulated presentation scenario. Watching the playback was uncomfortable for him—but illuminating.

**What we noticed:**
- Speaking 40% faster than his normal conversational pace
- Minimal eye contact, mostly looking at slides
- Uptalk at the end of statements (making declarations sound like questions)
- Shallow breathing leading to a higher-pitched, less authoritative voice

"I had no idea I was doing any of this," David admitted. "I thought I was just a naturally nervous speaker."

The reality? David wasn't "naturally" anything. He had simply developed a set of habits that weren't serving him.

## Week 2: Foundation Building

With awareness established, we focused on building fundamental skills:

**Breathing exercises:** 5 minutes each morning practicing diaphragmatic breathing. This single change had the biggest impact on David's vocal quality.

**Pace calibration:** Using a metronome app to practice speaking at a measured pace. We started at 120 words per minute and gradually found David's optimal pace.

**Grounding rituals:** Developing a pre-presentation routine that included physical grounding (feet planted, shoulders back) and vocal warm-ups.

## Week 3: Practice with Feedback

Week three was about deliberate practice. David presented the same content multiple times, each time implementing one new technique:

- Session 1: Focus on pace alone
- Session 2: Add strategic pauses
- Session 3: Incorporate vocal variety
- Session 4: Full integration

By the end of the week, David was presenting the same content with completely different energy. The material hadn't changed—but the delivery was transformed.

## Week 4: Real-World Application

The true test came in week four: David had a quarterly review presentation with the executive team. We prepared specifically for this scenario, including:

- Handling potential interruptions and questions
- Opening with confidence
- Using the room's layout to his advantage
- Recovery strategies if he felt nerves rising

## The Result

"I walked out of that presentation and barely recognised myself," David reported. "For the first time, I felt like my voice matched my expertise. The CEO asked follow-up questions—engaged, interested follow-up questions. That had never happened before."

Three months later, David was promoted to Principal Engineer.

## The Framework We Used

David's transformation wasn't magic. It was methodology. Here's the framework:

1. **Record and review** — You can't fix what you can't see
2. **Isolate variables** — Work on one skill at a time
3. **Practice deliberately** — Not just more practice, but focused practice
4. **Apply progressively** — Start with low-stakes situations, build to high-stakes
5. **Maintain and refine** — Ongoing awareness and adjustment

## Your Transformation Starts Today

If David's story resonates with you, know that transformation is possible—often faster than you think. The voice that undermines you today can become your greatest professional asset.

[Book a free consultation](/contact) to discuss your specific challenges and goals.
    `,
    category: "Presentation Skills",
    author: "Michael Torres",
    authorBio: "Executive Presence Specialist at VocalImage. Background in theatre and corporate training, specialising in C-suite coaching.",
    date: "2026-01-25",
    readTime: "8 min read",
  },
};

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  
  if (!post) {
    return { title: "Post Not Found | VocalImage" };
  }
  
  return {
    title: `${post.title} | VocalImage Blog`,
    description: post.excerpt,
  };
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = posts[slug];
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-6">
          Sorry, we couldn&apos;t find the article you&apos;re looking for.
        </p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  const relatedPosts = Object.entries(posts)
    .filter(([postSlug]) => postSlug !== slug)
    .slice(0, 2);

  return (
    <article className="flex flex-col">
      {/* Header */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <span>{post.author}</span>
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
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/^## (.+)$/gm, '<h2>$1</h2>')
                  .replace(/^### (.+)$/gm, '<h3>$1</h3>')
                  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
                  .replace(/^- (.+)$/gm, '<li>$1</li>')
                  .replace(/(<li>[\s\S]*<\/li>)/, '<ul class="list-disc pl-6 space-y-2">$1</ul>')
                  .split('\n\n').join('</p><p>')
              }}
            />

            <Separator className="my-12" />

            {/* Author Bio */}
            <Card className="bg-secondary/20">
              <CardContent className="flex gap-6 pt-6">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{post.author}</h3>
                  <p className="text-muted-foreground text-sm">{post.authorBio}</p>
                </div>
              </CardContent>
            </Card>

            {/* Share */}
            <div className="flex items-center justify-between mt-8">
              <span className="text-sm text-muted-foreground">Share this article</span>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedPosts.map(([postSlug, relatedPost]) => (
                <Card key={postSlug} className="bg-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">{relatedPost.category}</Badge>
                    <CardTitle className="text-lg hover:text-primary transition-colors">
                      <Link href={`/blog/${postSlug}`}>{relatedPost.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Vocal Presence?
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-xl mx-auto">
            Book a free consultation and discover how VocalImage can help you 
            achieve your communication goals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Book Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </article>
  );
}
