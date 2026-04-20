import Section from "../components/Section";
import { SUPPORT_EMAIL } from "../content/constants";
import LegalPageLayout from "../layouts/LegalPageLayout";

export default function ContactPage() {
  return (
    <LegalPageLayout
      title="Contact | Socod Legal"
      description="Contact Socod support for privacy, terms, deletion, technical support, and rewards."
      heading="Contact Socod"
      subheading="We are here to help with policy and support requests."
    >
      <Section title="Support email">
        <p>
          Contact us at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </Section>

      <Section title="Request categories">
        <ul className="list-disc space-y-2 pl-5">
          <li>Privacy questions and personal data rights requests</li>
          <li>Terms and policy clarifications</li>
          <li>Account and data deletion support</li>
          <li>Technical support issues</li>
          <li>Rewards and payout questions</li>
        </ul>
      </Section>

      <Section title="Response time">
        <p>
          We aim to respond to most requests within 2 to 5 business days. Complex cases may take longer if
          additional verification is needed.
        </p>
      </Section>

      <Section title="Important note for deletion requests">
        <p>
          To speed up verification, please send deletion requests from the same email address registered on
          your Socod account.
        </p>
      </Section>
    </LegalPageLayout>
  );
}
