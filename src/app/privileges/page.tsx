import type { Metadata } from "next";
import {
  PageShell,
  Section,
  Cards,
  Numbered,
  Rows,
  Notice,
} from "@/components/PageKit";
import EnquiryForm from "@/components/EnquiryForm";
import { CONTACT } from "@/components/PageKit";

export const metadata: Metadata = {
  title: "Member Privileges - Brand Image Beauty & Wellness",
  description:
    "Free Login. Useful Knowledge. New Opportunities. Women's free-login member benefits and additional privileges for verified active members.",
};

export default function PrivilegesPage() {
  return (
    <PageShell
      eyebrow="Women's Wellness & Privilege Network"
      title="Free Login. Useful Knowledge. New Opportunities."
      intro="Join our Beauty & Wellness community and access available YouTube programmes, monthly Telugu digital magazine content, expert discussions, product-awareness sessions, skill-development updates and women's welfare information."
      image="/assets/gen/hero-right.jpg"
    >
      <Section
        title="Benefits for Free-Login Members"
      >
        <Numbered
          items={[
            { title: "Free monthly Telugu beauty and women's wellness magazine", desc: "Access the digital magazine at no charge, subject to publication and availability. Practical information on beauty, health, education, employment, financial awareness, family life and women's rights." },
            { title: "Free YouTube live and recorded programmes", desc: "Access scheduled expert discussions, product-awareness sessions, demonstrations, interviews, Q&A programmes and professional development videos that are publicly available." },
            { title: "Free orientation and skill-development sessions", desc: "Scheduled introductory sessions on communication skills, personality development, computer literacy, customer care, new technologies and professional conduct." },
            { title: "Cosmetics discount-card information and special offers", desc: "Verified discounts on nominated cosmetics and participating services, with the participating brand, offer period, eligibility and redemption process explained. A digital privilege card can be introduced when partner arrangements are confirmed." },
            { title: "Product knowledge and expert guidance", desc: "Scheduled orientation on herbal products, new cosmetics, product ingredients, appropriate use and precautions, with participating skin and cosmetic doctors and other qualified experts." },
            { title: "Employment, business and customer opportunities", desc: "Verified employment and self-employment information, beauty-sector opportunities, training announcements and ways to express interest in bridal makeup orders or other customer enquiries routed through the Brand Image call centre." },
            { title: "Quarterly get-togethers and networking announcements", desc: "Information about planned professional meetings, refreshment programmes, networking events and community activities. Participation terms are announced in advance." },
            { title: "Women's welfare, rights and family awareness", desc: "Educational content about women's rights, security, legal awareness, financial planning, savings, nutrition, exercise, family relationships and community welfare programmes." },
          ]}
        />
      </Section>

      <Section
        title="Additional Privileges for Verified Active Members"
        image="/assets/gen/bridal.jpg"
        intro="These benefits are offered as a second stage once the relevant arrangements are established. They are not guaranteed merely because a member subscribes to YouTube."
      >
        <Rows
          items={[
            { label: "Magazine distribution agency", detail: "Eligible members may be offered a magazine distribution agency with a proposed 20% commission, subject to a written agreement and confirmed commercial terms." },
            { label: "Free training on new products and samples", detail: "Manufacturer-sponsored product training and free samples when available." },
            { label: "Manufacturer-authorised certification", detail: "Certificates are provided only through manufacturers or authorised training partners that have approved the programme and its assessment requirements." },
            { label: "Bridal makeup orders", detail: "Suitable bridal makeup enquiries are routed through the Brand Image call centre to available, participating professionals. Orders are subject to customer demand and service agreements." },
            { label: "Quarterly get-togethers", detail: "Quarterly networking and professional refreshment programmes, subject to the event calendar and funding." },
            { label: "Event-management PRO opportunities", detail: "Opportunities for trained members to work as public relations officers or event coordinators at participating events. Selection and remuneration are specified in advance." },
            { label: "Special cosmetics discount card", detail: "A member privilege card is issued after participating brands and discount terms are confirmed." },
            { label: "Advanced expert training", detail: "Special workshops with qualified skin and cosmetic professionals. Each session states whether it is free or paid." },
          ]}
        />
      </Section>

      <Section
        title="Membership Categories"
        intro="Benefits are subject to partner terms, availability and applicable conditions."
      >
        <Cards
          cols={5}
          items={[
            { title: "Professional Associate", desc: "Parlours, salons, academies and beauty professionals." },
            { title: "Customer / Wellness Member", desc: "Customers and viewers." },
            { title: "Industry Partner", desc: "Manufacturer, distributor, dealer or supplier." },
            { title: "Expert Partner", desc: "Qualified professionals." },
            { title: "Training / Student Participant", desc: "Eligible learners." },
          ]}
        />
      </Section>

      <Section title="Membership Policy">
        <div className="flex flex-col gap-4">
          <Notice title="Policy">
            Free login provides access to available public content and
            information. Additional commercial, training, certification and
            welfare privileges are provided according to published eligibility
            conditions.
          </Notice>
          <Notice title="Participating members">
            Participating members may also receive access to
            manufacturer-sponsored training, product samples, certification
            programmes, cosmetics discounts, bridal makeup enquiries, magazine
            distribution opportunities, professional networking and
            event-related work opportunities, subject to eligibility and
            confirmed partner arrangements.
          </Notice>
          <Notice title="No guarantee">
            Free registration does not guarantee discounts, employment, product
            samples or other partner-funded benefits. Terms and availability
            will be published for each programme.
          </Notice>
        </div>
      </Section>

      <Section
        id="register"
        title="Member Registration"
        image="/assets/gen/online-learning.jpg"
        flip
        intro="It gives ordinary women a free entry point and provides participating beauticians with a pathway to additional professional privileges."
      >
        <EnquiryForm
          heading="Brand Image — Member Registration"
          subject="Brand Image Member Registration"
          to={CONTACT.email}
          submitLabel="Register Free"
          fields={[
            { name: "name", label: "Member's full name", required: true },
            {
              name: "category",
              label: "Membership category",
              options: [
                "Free-login subscriber",
                "Beauty professional / beautician",
                "Privilege member",
              ],
            },
            { name: "mobile", label: "Mobile", type: "tel", required: true },
            { name: "experience", label: "Years of experience", type: "number" },
            { name: "parlour", label: "Beauty parlour name (if applicable)" },
            { name: "established", label: "Parlour establishment year (if applicable)", type: "number" },
            { name: "address", label: "Address (Door No. / Street / Colony)" },
            { name: "area", label: "Area / District" },
          ]}
        />
      </Section>
    </PageShell>
  );
}
