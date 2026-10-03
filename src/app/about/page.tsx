import type { Metadata } from "next";
import {
  Scissors,
  Stethoscope,
  Factory,
  Truck,
  Heart,
  GraduationCap,
  Users,
  Globe,
  Play,
  Database,
  Eye,
  Target,
  Network,
  Film,
  Briefcase,
  ShieldCheck,
  Settings,
} from "lucide-react";
import {
  PageShell,
  Section,
  Cards,
  Flow,
  Checks,
  Numbered,
  Rows,
  Notice,
  CtaBand,
} from "@/components/PageKit";

export const metadata: Metadata = {
  title: "About Us - Brand Image Beauty & Wellness",
  description:
    "Brand Image Beauty & Wellness is a specialised digital and professional ecosystem connecting beauty professionals, experts, manufacturers, distributors and women customers.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Us"
      title="Learn • Connect • Empower • Grow • Contribute"
      intro="Brand Image Beauty & Wellness is a specialised digital and professional ecosystem connecting beauty parlours and beauticians, qualified beauty, skin and cosmetic professionals, herbal and cosmetic product manufacturers, distributors, dealers and suppliers, women customers, students and the Brand Image team through a Web Portal, YouTube and video programmes, live or pre-recorded discussions, training, networking, customer engagement and selected partner privileges."
      image="/assets/gen/hero-center.jpg"
    >
      <Section title="Vision & Mission">
        <Cards
          cols={2}
          items={[
            {
              title: "Vision",
              icon: Eye,
              desc: "Build a trusted, scalable Beauty & Wellness information and professional network that supports knowledge, responsible product communication, professional growth, customer awareness and sustainable opportunities.",
            },
            {
              title: "Mission",
              icon: Target,
              desc: "Organise people, products, professionals, knowledge, training, digital content and business opportunities through one coordinated platform, beginning with a controlled Hyderabad pilot.",
            },
          ]}
        />
      </Section>

      <Section
        title="Core Business Model"
        image="/assets/gen/team-meeting.jpg"
        intro="The platform is intended to be more than a directory or one-way advertising channel. Information flows from the manufacturer through qualified experts and beauty professionals to the customer, and questions and feedback flow back."
      >
        <Flow
          steps={[
            "Manufacturer / Brand",
            "Product Information",
            "Qualified Expert",
            "Beauty Professional",
            "Customer / Woman Consumer",
            "Questions",
            "Feedback",
            "Better Awareness and Business Relationships",
          ]}
        />
      </Section>

      <Section title="Stakeholders">
        <Cards
          cols={4}
          items={[
            { title: "Beauty professionals", icon: Scissors, desc: "Beauty parlours, salons, academies and beauticians." },
            { title: "Skin & cosmetic professionals", icon: Stethoscope, desc: "Dermatologists, skin and cosmetic professionals." },
            { title: "Manufacturers", icon: Factory, desc: "Herbal, Ayurvedic, cosmetic and cosmeceutical manufacturers." },
            { title: "Distributors", icon: Truck, desc: "Distributors, dealers and wholesalers." },
            { title: "Women & customers", icon: Heart, desc: "Women, customers and end users." },
            { title: "Students & trainees", icon: GraduationCap, desc: "Eligible learners building a career in beauty and wellness." },
            { title: "Brand Image team", icon: Users, desc: "Management and operating staff." },
          ]}
        />
      </Section>

      <Section title="A Win-Win-Win Model">
        <Cards
          cols={4}
          items={[
            { title: "Professionals", desc: "Receive knowledge, training, expert interaction, product and technology awareness, networking and selected opportunities." },
            { title: "Customers", desc: "Receive clearer information, expert interaction, participating-parlour discovery and selected privileges." },
            { title: "Industry", desc: "Receives targeted professional reach, product presentation, demonstrations, feedback and digital visibility." },
            { title: "Brand Image", desc: "Builds a recurring professional, content and business ecosystem — a sustainable ecosystem connecting all participants responsibly." },
          ]}
        />
      </Section>

      <Section title="Digital Platform">
        <Cards
          cols={3}
          items={[
            { title: "Web Portal", icon: Globe, desc: "Profiles, professional registration, brand and product information, experts, resources, training and events, programme archive, enquiries, feedback and partner privileges." },
            { title: "YouTube", icon: Play, desc: "Expert talks, product awareness, demonstrations, interviews, debates, beautician stories, customer questions and training." },
            { title: "CRM", icon: Database, desc: "Verified contacts, referrals, participation, follow-ups, enquiries and feedback." },
          ]}
        />
      </Section>

      <Section
        title="Our Operating Philosophy"
        intro="Brand Image should be:"
      >
        <Checks
          items={[
            "A bridge, not merely a directory",
            "An information platform, not merely an advertising channel",
            "A professional network, not merely a contact database",
            "A measurable business ecosystem, not a collection of activities",
          ]}
        />
        <p className="text-[14.5px] font-semibold text-ink mt-4 mb-2">
          Core discipline
        </p>
        <Flow
          steps={["Verify", "Inform", "Connect", "Produce", "Review", "Publish", "Measure", "Improve", "Repeat"]}
        />
      </Section>

      <Section
        id="execution"
        title="How the Platform Runs"
      >
        <Rows
          items={[
            { label: "Input", detail: "Beauty Professionals + Experts + Manufacturers + Distributors + Customers + Students" },
            { label: "Core engine", detail: "Web Portal + YouTube + Hexagon Studio + CRM + Programme Team" },
            { label: "Output", detail: "Knowledge + Product Awareness + Expert Interaction + Training + Customer Engagement + Business Opportunities" },
            { label: "Execution loop", detail: "Prospect → Verify → Register → Plan → Moderate → Record/Live → Edit → Review → Publish → Engage → Measure → Improve → Repeat" },
            { label: "Management gates", detail: "Founding network verified → Studio technically works → Pilot engagement demonstrated → Repeat participation / commercial viability → Controlled expansion" },
          ]}
        />
        <p className="text-[14.5px] font-semibold text-ink mt-5 mb-2">
          Standard workflow
        </p>
        <Flow
          steps={[
            "Prospect",
            "Verify",
            "Permission / First Contact",
            "Qualify",
            "Register",
            "Orient",
            "Topic / Product Brief",
            "Expert / Moderator Review",
            "Record / Live",
            "Edit",
            "Claim / Compliance Check",
            "Publish",
            "Distribute",
            "Questions / Feedback",
            "CRM Update",
            "Follow-up",
            "Repeat",
          ]}
        />
      </Section>

      <Section
        title="Pilot Approach"
        image="/assets/gen/hexagon-studio.jpg"
        flip
        intro="Avoid heavy fixed investment at the beginning. Validate the model with a modest studio, small core team, existing professional contacts and a limited programme schedule. Track cost per episode, production time, participation, viewers, questions, leads, conversions and repeat participation before major expansion."
      >
        <p className="text-[14.5px] font-semibold text-ink mb-2">First 90 days</p>
        <Numbered
          cols={3}
          items={[
            { title: "Days 1–15", desc: "Finalise brand and entity basics, SOPs, database, website structure, studio test and staff orientation." },
            { title: "Days 16–30", desc: "Verify founding professionals, contact priority companies, confirm experts and topics." },
            { title: "Days 31–45", desc: "Dry runs and technical tests." },
            { title: "Days 46–60", desc: "Publish pilot episodes and collect feedback." },
            { title: "Days 61–75", desc: "Refine and approach the next industry batch." },
            { title: "Days 76–90", desc: "Review KPIs, economics, team performance and expansion readiness." },
          ]}
        />
        <div className="mt-4">
          <Notice title="Pilot success gate">
            The first milestone is not a large database. It is a repeatable
            working cycle: active Associates + qualified experts + participating
            industry partners + completed programmes + measurable
            viewer/customer interaction + documented feedback + willingness to
            repeat. Scale only after these indicators are demonstrated.
          </Notice>
        </div>
      </Section>

      <Section title="KPI Dashboard">
        <Cards
          cols={5}
          items={[
            { title: "Network", icon: Network, desc: "Verified and active Associates, referrals, industry partners, experts." },
            { title: "Content", icon: Film, desc: "Episodes, live sessions, watch time, questions, repeat viewers, turnaround time." },
            { title: "Business", icon: Briefcase, desc: "Qualified enquiries, meetings, participating companies, revenue and repeat partners." },
            { title: "Quality", icon: ShieldCheck, desc: "Verification rate, corrections, complaints and consent/document completeness." },
            { title: "Operations", icon: Settings, desc: "Cost per episode, follow-up completion, punctuality and system uptime." },
          ]}
        />
      </Section>

      <Section title="Risks & Controls">
        <Rows
          items={[
            { label: "Low participation", detail: "Small founding cohort and evidence-led outreach." },
            { label: "Weak content", detail: "Topic briefs and expert/moderator review." },
            { label: "Unverified claims", detail: "Documentation checks." },
            { label: "Medical / legal risk", detail: "Scope rules and disclosures." },
            { label: "Poor audio / video", detail: "Mandatory dry runs." },
            { label: "Duplicate data", detail: "Verification." },
            { label: "Spam", detail: "Permission-based communications." },
            { label: "Over-expansion", detail: "KPI stage gates." },
            { label: "Sponsor dependence", detail: "Diversified revenue." },
            { label: "Staff confusion", detail: "Written roles, SOPs, CRM and reporting." },
          ]}
        />
      </Section>

      <Section title="Team Roles & Governance">
        <Rows
          items={[
            { label: "Field Coordinator", detail: "Identify, verify, register, orient and follow up." },
            { label: "Industry Coordinator", detail: "Qualify companies and coordinate participation." },
            { label: "Expert Coordinator", detail: "Schedule experts and prepare briefs." },
            { label: "Moderator", detail: "Control agenda, questions, time and professional discipline." },
            { label: "Backend Editor", detail: "Ingest, edit, caption, quality-check, archive and publish." },
            { label: "CRM Coordinator", detail: "Maintain the single source of truth and reports." },
            { label: "Management", detail: "Approve programmes, partnerships, budgets, policies, quality and risk controls." },
            { label: "Weekly operating review", detail: "Network, programme pipeline, outreach, content, feedback, risks and finances." },
            { label: "Monthly review", detail: "Unit economics, partner retention, programme quality, staff performance, technology, compliance and scale decision." },
            { label: "Every major programme", detail: "Has an owner, moderator, technical owner, content owner and post-programme report." },
          ]}
        />
        <div className="mt-4">
          <Notice title="Team case study">
            A herbal skincare manufacturer requests a YouTube product-awareness
            session. The team decides company relevance; information and
            documents required; suitable experts; moderator questions; claims to
            avoid; recording consent; editing and disclosure; viewer-question
            handling; CRM follow-up; and transparent commercial treatment. The
            exercise is repeated for a cosmetic manufacturer, a distributor and
            a customer-awareness topic.
          </Notice>
        </div>
        <div className="mt-3">
          <Notice title="Every staff member">
            Do not promise what the platform cannot deliver. Verify facts,
            obtain appropriate consent, follow the programme brief, disclose
            commercial relationships, protect information and report outcomes
            honestly.
          </Notice>
        </div>
      </Section>

      <Section
        title="Illustrative Launch Targets"
      >
        <Cards
          cols={5}
          items={[
            { title: "300+", desc: "Women Members" },
            { title: "100+", desc: "Beauty Professionals" },
            { title: "50+", desc: "Experts & Doctors" },
            { title: "20+", desc: "Partner Brands" },
            { title: "30+", desc: "Training Partners" },
            { title: "10+", desc: "Welfare Partners" },
          ]}
        />
      </Section>

      <CtaBand
        title="Together for Healthy, Beautiful and Confident Women"
        text="Be part of a healthier, more beautiful and empowered society."
        href="/privileges#register"
        label="Join Our Network"
      />
    </PageShell>
  );
}
