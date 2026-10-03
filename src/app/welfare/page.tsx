import type { Metadata } from "next";
import {
  PageShell,
  Section,
  Cards,
  Checks,
  Rows,
  Notice,
  CtaBand,
} from "@/components/PageKit";

export const metadata: Metadata = {
  title: "Women's Welfare - Brand Image Beauty & Wellness",
  description:
    "Women's welfare, rights and family awareness, employment and self-employment information, and the free monthly Telugu magazine.",
};

const magazineSections = [
  {
    title: "A. Beauty, lifestyle and personal wellness",
    topics: [
      "Traditional, Modern and Professional Women",
      "Lifestyle, Culture and Responsibilities",
      "Health, Exercise and Beauty",
      "Beautique: Dress, Jewellery, Cosmetics and Seasonal Wear",
      "Healthy and Nutritional Foods",
      "Hobbies and Entertainment",
    ],
  },
  {
    title: "B. Education, technology and achievement",
    topics: [
      "Science and Technology",
      "Educational Values and Higher Education",
      "Eminent Personalities and Achievements",
      "Quiz Programmes and Debates",
    ],
  },
  {
    title: "C. Employment, enterprise and financial empowerment",
    topics: [
      "Employment Resources",
      "Economy, Financial Planning and Savings",
      "Self-Employment Training, Schemes and Resources",
      "Skill Development: Challenges and Encouragement",
    ],
  },
  {
    title: "D. Safety, rights and society",
    topics: [
      "Security and Awareness",
      "Women's Rights, Privileges and Legal Forum",
      "Society and Environment",
      "Cultural Activities, Sports and Games",
    ],
  },
  {
    title: "E. Family and home wellness",
    topics: ["Family Care and Relationships", "Home Decorations and Gardening"],
  },
];

export default function WelfarePage() {
  return (
    <PageShell
      eyebrow="Women's Welfare & Community"
      title="A Healthier, Happier & Stronger Women's World"
      intro="Awareness programmes, support and opportunities. Brand Image shares educational content and practical pathways for women's personal and economic empowerment."
      image="/assets/gen/thumb-welfare.jpg"
    >
      <Section
        title="Women's Welfare, Rights and Family Awareness"
        intro="Educational content about:"
      >
        <Checks
          cols={3}
          items={[
            "Women's rights",
            "Security",
            "Legal awareness",
            "Financial planning",
            "Savings",
            "Nutrition",
            "Exercise",
            "Family relationships",
            "Community welfare programmes",
          ]}
        />
      </Section>

      <Section title="Welfare Programmes">
        <Cards
          cols={4}
          items={[
            { title: "Skills", desc: "Women-oriented awareness and skill-development programmes." },
            { title: "Employment", desc: "Verified employment information and beauty-sector opportunities." },
            { title: "Self-Employment", desc: "Self-employment training, schemes and resources, with growth support." },
            { title: "Community Support", desc: "Community activities, welfare initiatives and networking." },
          ]}
        />
      </Section>

      <Section
        id="magazine"
        title="Monthly Digital Magazine (Telugu)"
        image="/assets/gen/magazine.jpg"
        intro="Free monthly Telugu beauty and women's wellness magazine. Members access the digital magazine at no charge, subject to publication and availability, with practical information on beauty, health, education, employment, financial awareness, family life and women's rights. The 20 topics are organised into five easy-to-understand sections."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {magazineSections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl bg-surface border border-line p-6"
            >
              <h3 className="text-[16px] font-semibold leading-snug">
                {section.title}
              </h3>
              <ul className="mt-3 flex flex-col gap-1.5 text-[14px] text-ink/70 list-disc pl-4 marker:text-accent">
                {section.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="rounded-2xl bg-surface border border-line p-6">
            <h3 className="text-[16px] font-semibold leading-snug">
              Brand Image Beauty Professional Corner
            </h3>
            <p className="text-[14px] text-ink/70 leading-relaxed mt-3">
              A recurring corner with expert interviews, new product awareness,
              salon success stories, training announcements, member
              achievements and upcoming YouTube programme schedules.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Opportunities for Members">
        <Rows
          items={[
            { label: "Magazine distribution agency", detail: "Eligible members may be offered a magazine distribution agency with a proposed 20% commission, subject to a written agreement and confirmed commercial terms." },
            { label: "Bridal makeup orders", detail: "Suitable bridal makeup enquiries are routed through the Brand Image call centre to available, participating professionals. Orders are subject to customer demand and service agreements." },
            { label: "Event-management PRO opportunities", detail: "Trained members may work as public relations officers or event coordinators at participating events. Selection and remuneration are specified in advance." },
            { label: "Employment and self-employment", detail: "Verified employment and self-employment information, beauty-sector opportunities and training announcements." },
          ]}
        />
      </Section>

      <Section
        title="Quarterly Get-Togethers"
        image="/assets/gen/networking.jpg"
        flip
        intro="Members receive information about planned professional meetings, refreshment programmes, networking events and community activities. Quarterly networking and professional refreshment programmes are organised subject to the event calendar and funding, and participation terms are announced in advance."
      />

      <Notice title="Our commitment">
        To connect women with reliable information, professional services,
        learning opportunities and practical pathways for personal and economic
        empowerment. Free registration does not guarantee discounts,
        employment, product samples or other partner-funded benefits. Terms and
        availability will be published for each programme.
      </Notice>

      <CtaBand
        title="Be Part of a Healthier, More Beautiful & Empowered Society"
        text="Free Login. Useful Knowledge. New Opportunities."
        href="/privileges#register"
        label="Join Today"
      />
    </PageShell>
  );
}
