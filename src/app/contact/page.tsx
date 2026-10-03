import type { Metadata } from "next";
import { MapPin, Phone, Mail, Handshake, Globe } from "lucide-react";
import { PageShell, Section, Checks, CONTACT } from "@/components/PageKit";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact - Brand Image Beauty & Wellness",
  description:
    "Contact Brand Image Beauty & Wellness, Archana Arcade, Secunderabad, Telangana.",
};

export default function ContactPage() {
  const details = [
    { icon: MapPin, label: "Office", value: CONTACT.address },
    { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
    { icon: Mail, label: "General enquiries", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Handshake, label: "Manufacturers, distributors & suppliers", value: CONTACT.partnerEmail, href: `mailto:${CONTACT.partnerEmail}` },
    { icon: Globe, label: "Web portal", value: CONTACT.website },
  ];

  return (
    <PageShell
      eyebrow="Contact"
      title="Let's Connect"
      image="/assets/gen/call-centre.jpg"
      intro="Discuss participation opportunities, register for an orientation, or ask us a question. We invite you to join the Brand Image Beauty & Wellness Professional Associate Network and participate in building this platform."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 flex flex-col gap-14">
          <Section title="Brand Image Beauty & Wellness">
            <ul className="flex flex-col gap-6">
              {details.map((d) => {
                const Icon = d.icon;
                return (
                  <li
                    key={d.label}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[13.5px] text-ink/70">
                        {d.label}
                      </span>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="text-[15.5px] font-semibold hover:text-accent transition-colors break-words"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <span className="text-[15.5px] font-semibold break-words">
                          {d.value}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </Section>

          <Section title="Why Get in Touch">
            <Checks
              cols={2}
              items={[
                "Be Informed",
                "Be Connected",
                "Be Recognised",
                "Be Part of a Larger Purpose",
              ]}
            />
            <p className="font-script text-2xl text-accent mt-6">
              Beauty with Purpose for a Better Tomorrow
            </p>
          </Section>
        </div>

        <div className="lg:col-span-7">
          <EnquiryForm
            heading="For Registration / Orientation"
            subject="Brand Image Registration / Orientation Enquiry"
            to={CONTACT.email}
            submitLabel="Send Enquiry"
            fields={[
              { name: "name", label: "Name", required: true },
              { name: "designation", label: "Designation" },
              { name: "mobile", label: "Mobile", type: "tel", required: true },
              { name: "whatsapp", label: "WhatsApp", type: "tel" },
              { name: "email", label: "Email", type: "email" },
              { name: "website", label: "Website" },
              {
                name: "iam",
                label: "I am a",
                options: [
                  "Beauty Professional / Salon Owner",
                  "Dermatologist / Cosmetic Doctor",
                  "Product Manufacturer / Distributor",
                  "Student / Trainee",
                  "Customer",
                ],
              },
              { name: "message", label: "Message", type: "textarea" },
            ]}
          />
        </div>
      </div>
    </PageShell>
  );
}
