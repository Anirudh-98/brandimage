import type { Metadata } from "next";
import {
  Package,
  Users,
  Play,
  Scissors,
  TrendingUp,
  Globe,
  Share2,
  Handshake,
  ShieldCheck,
  Leaf,
} from "lucide-react";
import {
  PageShell,
  Section,
  Cards,
  Flow,
  Checks,
  Numbered,
  Notice,
  CtaBand,
  CONTACT,
} from "@/components/PageKit";

export const metadata: Metadata = {
  title: "Business Network - Brand Image Beauty & Wellness",
  description:
    "Invitation to manufacturers, distributors and suppliers, and to beauty parlours joining the Professional Associate Network.",
};

export default function BusinessPage() {
  return (
    <PageShell
      eyebrow="Business Network"
      title="People | Products | Professionals | Positive Change"
      intro="Be part of a purpose-driven digital platform that connects your products with experts, beauty professionals and women customers. We approach companies as professional information and engagement partners, not merely as advertisers."
      image="/assets/gen/thumb-business.jpg"
    >
      <Section
        id="industry"
        title="Of Herbal, Cosmetic, Skincare, Haircare and Personal Care Products"
      >
        <p className="text-[14.5px] font-semibold text-ink mb-2">
          How you can participate
        </p>
        <Cards
          cols={5}
          items={[
            { title: "1. Product Showcase", icon: Package, desc: "Introduce your brand and product range." },
            { title: "2. Expert Discussion", icon: Users, desc: "Your products discussed with dermatologists and cosmetic experts." },
            { title: "3. Demonstrations", icon: Play, desc: "Product use, application and benefits explained." },
            { title: "4. Beauty Professional Engagement", icon: Scissors, desc: "Reach parlours and beauticians with correct product information." },
            { title: "5. Digital Promotion", icon: TrendingUp, desc: "Feature on our YouTube channel, web portal and social media." },
          ]}
        />
      </Section>

      <Section title="Key Benefits">
        <Checks
          items={[
            "Reach a focused audience of beauty professionals and women customers",
            "Build credibility through expert interaction",
            "Educate users with accurate product information",
            "Increase brand visibility via YouTube, web portal and social media",
            "Position your brand as a responsible partner in women's wellness",
            "Long-term relationship with a trusted platform",
          ]}
        />
      </Section>

      <Section title="Our Programme Format">
        <Flow
          steps={[
            "Company Representative",
            "Dermatologist / Skin Specialist",
            "Cosmetic Professional",
            "Senior Beautician",
            "Customer Questions",
            "Product Information",
            "Customer Feedback",
          ]}
        />
      </Section>

      <Section title="Our Reach">
        <Cards
          cols={4}
          items={[
            { title: "YouTube Channel", icon: Play, desc: "Educational videos, product features and expert talks." },
            { title: "Web Portal", icon: Globe, desc: "Brand listings, articles, resources and industry updates." },
            { title: "Social Media", icon: Share2, desc: "Wider visibility and engagement." },
            { title: "Beauty Parlours", icon: Scissors, desc: "Direct reach to professionals and customers." },
          ]}
        />
      </Section>

      <Section
        title="Industry Outreach Sequence"
      >
        <Flow
          steps={[
            "Introductory meeting",
            "Understand product range",
            "Request company / product information and supporting documents",
            "Assess fit",
            "Select 2–3 pilot participants",
            "Conduct programme",
            "Use the completed programme as demonstration material for wider outreach",
          ]}
        />
      </Section>

      <Section title="Our Commitment">
        <Cards
          cols={4}
          items={[
            { title: "Transparency", icon: Handshake },
            { title: "Responsible Communication", icon: ShieldCheck },
            { title: "Professional Collaboration", icon: Users },
            { title: "Support for Women's Health and Natural Beauty", icon: Leaf },
          ]}
        />
        <div className="mt-4">
          <Notice title="Important note">
            Brand Image provides an information, awareness and digital
            communication platform. Participation does not constitute medical
            endorsement, product certification or guarantee of therapeutic
            efficacy by Brand Image. Product claims, regulatory compliance,
            manufacturing standards and supporting evidence remain the
            responsibility of the respective manufacturer/brand. Qualified
            professionals will provide information within their respective
            professional scope.
          </Notice>
        </div>
      </Section>

      <Section
        id="associates"
        title="Professional Beauty & Wellness Associate Network"
        image="/assets/gen/salon-owner.jpg"
        intro="We are developing the Brand Image Beauty & Wellness Platform, a specialised professional and public-awareness network connecting beauty parlours and beauticians, beauty experts (dermatologists and cosmetic professionals), cosmetic and herbal product companies, distributors, and customers and end users. The objective is to create a common platform through which beauty professionals can continuously receive useful information, training opportunities, product awareness, expert interaction, customer-engagement opportunities and selected member privileges."
      >
        <p className="text-[14.5px] font-semibold text-ink mb-2">
          Why this platform? Beauty professionals today need to keep themselves
          updated about:
        </p>
        <Checks
          items={[
            "New cosmetic, herbal and beauty products",
            "Product ingredients, applications and precautions",
            "New beauty equipment and technologies",
            "Professional techniques and trends",
            "Customer-care practices",
            "Communication and personality development",
            "Digital tools and modern business practices",
            "Training and certification opportunities",
            "Business-development and networking opportunities",
          ]}
        />
        <p className="text-[14.5px] text-ink/70 mt-3">
          Instead of searching individually, our platform brings these
          opportunities together.
        </p>
      </Section>

      <Section title="Benefits for Professional Associates">
        <Numbered
          cols={3}
          items={[
            { title: "Participation in Brand Image professional programmes." },
            { title: "Product and technology awareness sessions." },
            { title: "Training opportunities on selected new products and equipment." },
            { title: "Samples or demonstrations where manufacturers provide them." },
            { title: "Manufacturer-authorised training/certification opportunities, subject to the manufacturer's terms." },
            { title: "Expert interaction with qualified professionals." },
            { title: "Business and professional networking opportunities." },
            { title: "Opportunities for customer engagement through the platform." },
            { title: "Selected customer privileges and discounts from participating partners." },
            { title: "Personality-development and communication programmes." },
            { title: "Computer, digital-technology and customer-care orientation." },
            { title: "Participation in quarterly professional get-togethers." },
            { title: "Opportunities to participate in beauty, wellness and women-oriented programmes." },
            { title: "Recognition and participation opportunities within the Associate Network." },
            { title: "Opportunities for eligible bridal makeup and other customer enquiries generated through the platform/call centre, subject to availability and terms." },
          ]}
        />
      </Section>

      <Section
        title="Associate Network Principle"
        image="/assets/gen/networking.jpg"
        flip
        intro="We are not merely collecting a directory of beauty parlours. Our objective is to develop an active professional network in which associates can:"
      >
        <Flow
          steps={[
            "Learn",
            "Connect",
            "Participate",
            "Receive Privileges",
            "Serve Customers Better",
            "Grow Together",
          ]}
        />
        <p className="text-[14.5px] text-ink/70 leading-relaxed mt-4 max-w-4xl">
          We therefore invite your parlour to become part of the initial
          Founding Associate Network. Your participation can also help us
          understand the actual requirements of beauty professionals and design
          useful programmes accordingly. Referrals should be genuine and
          permission-based; recognition rewards verified professional
          participation rather than collection of phone numbers.
        </p>
        <p className="text-[14.5px] font-semibold text-ink mt-5 mb-2">
          Network growth stages
        </p>
        <Flow
          steps={[
            "20 active founding Associates",
            "100 verified network",
            "500 verified network",
            "Wider Hyderabad expansion",
            "Telangana expansion only after operating proof",
          ]}
        />
      </Section>

      <Section title="A Win-Win-Win Model">
        <Cards
          cols={3}
          items={[
            { title: "Beauty Professionals", desc: "Knowledge, training, networking, customer opportunities and privileges." },
            { title: "Customers", desc: "Awareness, better information, expert interaction and participating-member privileges." },
            { title: "Manufacturers / Distributors", desc: "Targeted professional reach, product awareness, interaction, feedback and long-term brand relationships." },
          ]}
        />
      </Section>

      <Section
        title="Ways to Work With Us"
        intro="Potential commercial arrangements on the platform:"
      >
        <Checks
          cols={3}
          items={[
            "Membership",
            "Sponsorship",
            "Clearly disclosed programme sponsorship",
            "Product-awareness packages",
            "Training / workshop fees",
            "Event participation",
            "Approved profile / directory upgrades",
            "Lead / enquiry facilitation",
            "Transparent partner commissions where lawful",
            "Digital advertising",
            "Production / content services",
            "Institutional programmes",
          ]}
        />
      </Section>

      <CtaBand
        title="Let's Connect — Discuss Participation Opportunities"
        text={`Email ${CONTACT.partnerEmail} or call ${CONTACT.phone}. Let's create a more informed, confident and naturally beautiful women's world — together.`}
        href="/contact"
        label="Contact Us"
      />
    </PageShell>
  );
}
