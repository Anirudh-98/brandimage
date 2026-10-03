import type { Metadata } from "next";
import {
  Users,
  Package,
  MessageCircle,
  Sparkles,
  GraduationCap,
  Trophy,
  HeartHandshake,
  Calendar,
} from "lucide-react";
import {
  PageShell,
  Section,
  Cards,
  Flow,
  Checks,
  Notice,
  CtaBand,
} from "@/components/PageKit";

export const metadata: Metadata = {
  title: "Media - Brand Image Beauty & Wellness",
  description:
    "Beauty Talks live and recorded: expert panel discussions, product demonstrations, Q&A sessions, training videos and success stories.",
};

export default function MediaPage() {
  return (
    <PageShell
      eyebrow="Media"
      title="Beauty Talks — Live & Recorded"
      intro="Live • Interactive • Informative • Inspiring. Watch, learn and share beauty talks and product demonstrations on the Brand Image YouTube channel and web portal."
      image="/assets/gen/thumb-video.jpg"
    >
      <Section title="YouTube Programmes">
        <Cards
          cols={4}
          items={[
            { title: "Expert Panel Discussions", icon: Users, desc: "Expert talks, interviews and debates." },
            { title: "Product Demonstrations", icon: Package, desc: "Product awareness and how products are used." },
            { title: "Q & A Sessions (Live)", icon: MessageCircle, desc: "Customer questions answered by the panel." },
            { title: "Beauty & Wellness Tips", icon: Sparkles, desc: "Practical everyday guidance." },
            { title: "Training & How-to Videos", icon: GraduationCap, desc: "Professional development videos." },
            { title: "Success Stories", icon: Trophy, desc: "Beautician stories from the network." },
            { title: "Women Welfare Awareness", icon: HeartHandshake, desc: "Awareness and skill-development programmes." },
            { title: "Upcoming Events & Opportunities", icon: Calendar, desc: "Get notified of live programmes, new episodes and special offers." },
          ]}
        />
      </Section>

      <Section
        title="Free YouTube Live and Recorded Programmes"
        image="/assets/gen/video-editor.jpg"
        intro="Access scheduled expert discussions, product-awareness sessions, demonstrations, interviews, Q&A programmes and professional development videos that are publicly available."
      />

      <Section
        title="The Signature Hexagon Studio"
        image="/assets/gen/hexagon-studio.jpg"
        flip
        intro="A central hexagon discussion table with a centrally mounted 360° Wi-Fi cloud camera for auto recording and live streaming, professional lighting and clear audio. A backend editor handles editing, captions, branding, quality checks and publishing."
      >
        <Checks
          cols={3}
          items={[
            "Pre-recorded programmes",
            "Live debates and expert talks",
            "Auto recording to cloud",
            "No cameraman required (subject to technical testing)",
            "Multi-angle views",
            "Easy editing and broadcast",
          ]}
        />
      </Section>

      <Section title="Programme Formats">
        <Checks
          items={[
            "Pre-recorded expert discussions",
            "Live debates and Q&A",
            "Recurring daily/weekly relay episodes",
            "Product-awareness and demonstration sessions",
            "Customer-awareness programmes",
            "Professional training and manufacturer-authorised training",
            "Quizzes and debates",
            "Women-oriented awareness and skill-development programmes",
          ]}
        />
      </Section>

      <Section title="How a Programme Is Made">
        <Flow
          steps={[
            "Topic / Product Brief",
            "Expert / Moderator Review",
            "Record / Live",
            "Edit",
            "Claim / Compliance Check",
            "Publish",
            "Distribute",
            "Questions / Feedback",
          ]}
        />
      </Section>

      <Section
        title="Telugu Magazine"
        image="/assets/gen/magazine.jpg"
        intro="The free monthly Telugu digital magazine covers beauty, health, lifestyle and opportunities, and carries upcoming YouTube programme schedules."
      />

      <Notice title="Trust & compliance">
        Educational and awareness content is separated from paid promotional
        content where appropriate, and sponsorship is disclosed. Recording and
        publication consent is obtained, personal data is protected, and
        applicable platform, advertising and professional rules are followed.
      </Notice>

      <CtaBand
        title="Subscribe Now — Free Login"
        text="Get notified for live programmes, new episodes and special offers."
        href="/privileges#register"
        label="Register Free"
      />
    </PageShell>
  );
}
