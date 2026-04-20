import Section from "../components/Section";
import { EFFECTIVE_DATE, LEGAL_ENTITY_NAME, SUPPORT_EMAIL } from "../content/constants";
import LegalPageLayout from "../layouts/LegalPageLayout";

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy | Socod"
      description="Privacy Policy for Socod step tracking and weekly walking competition app."
      heading="Policy"
      subheading={`Last updated: ${EFFECTIVE_DATE}`}
    >
      <Section title="1. Who we are">
        <p>
          {LEGAL_ENTITY_NAME} operates Socod, a mobile app for step tracking, walking goals, group
          interaction, and weekly walking competition rankings. This policy explains what personal
          information we collect, why we collect it, and how we protect it.
        </p>
      </Section>

      <Section title="2. Information we collect">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Account information:</strong> email address, password hash through authentication
            services, and basic account identifiers.
          </li>
          <li>
            <strong>Profile information:</strong> name, phone number for reward payouts, gender, city, and
            district.
          </li>
          <li>
            <strong>Step and activity data:</strong> step counts and related sensor-based activity records
            from supported device motion/pedometer features.
          </li>
          <li>
            <strong>Goals, sessions, and progress:</strong> daily/weekly/monthly goals, session start/stop
            events, and historical progress summaries.
          </li>
          <li>
            <strong>Group and chat content:</strong> text, images, voice messages, timestamps, and message
            metadata used to deliver social features.
          </li>
          <li>
            <strong>Device and diagnostics data:</strong> app version, crash logs, performance data, and
            technical diagnostics.
          </li>
          <li>
            <strong>Notification token:</strong> push notification token when you allow notifications.
          </li>
          <li>
            <strong>Reward/payout data:</strong> phone-based payout details and payment reference metadata
            when rewards are processed.
          </li>
        </ul>
      </Section>

      <Section title="3. How we use data">
        <ul className="list-disc space-y-2 pl-5">
          <li>To create and manage your account and profile.</li>
          <li>To run step tracking, goals, sessions, and weekly leaderboard competition features.</li>
          <li>To validate step submissions with anti-cheat and fraud-prevention logic.</li>
          <li>To keep the app secure, detect misuse, and support users.</li>
          <li>To send notifications about rank changes, goal milestones, competition updates, and messages.</li>
        </ul>
      </Section>

      <Section title="4. Legal bases for processing">
        <p>
          Depending on your location, we process personal data under one or more legal bases: your consent
          (for optional features such as notifications), contract performance (providing core app features),
          legitimate interests (security, anti-cheat, product reliability), and legal obligations (record
          retention where required).
        </p>
      </Section>

      <Section title="5. Sharing with service providers">
        <p>
          We use third-party infrastructure providers to operate Socod. This includes Supabase services for
          authentication, PostgreSQL database storage, file storage, and real-time features. We may also use
          push notification providers, cloud storage/CDN tools, and analytics/error monitoring services when
          needed to operate and improve the app.
        </p>
        <p>
          Service providers are required to process data for approved business purposes and apply reasonable
          security protections.
        </p>
      </Section>

      <Section title="6. Data retention">
        <p>
          We retain data as long as needed to provide Socod services, maintain competition integrity,
          resolve disputes, enforce terms, and meet legal obligations. Retention periods vary by data type.
          When data is no longer needed, we delete or anonymize it when reasonably possible.
        </p>
      </Section>

      <Section title="7. International transfers">
        <p>
          Socod services may be hosted or processed in countries outside your own. When cross-border
          transfers apply, we use reasonable safeguards designed to protect personal information in transit
          and at rest.
        </p>
      </Section>

      <Section title="8. Security practices">
        <p>
          We use technical and organizational measures such as access controls, encrypted transport,
          monitoring, and logging to reduce risk of unauthorized access, loss, or misuse. No system is
          completely secure, but we continuously improve our safeguards.
        </p>
      </Section>

      <Section title="9. Children’s privacy">
        <p>
          Socod is not intended for children under 13. We do not knowingly collect personal data from
          children under 13. If you believe a child has provided data, contact us so we can review and take
          appropriate action.
        </p>
      </Section>

      <Section title="10. Your rights">
        <p>
          You may request access to your data, correction of inaccurate profile information, or deletion of
          your account and associated data, subject to legal and operational limitations. You can submit
          requests by contacting us at {SUPPORT_EMAIL}.
        </p>
      </Section>

      <Section title="11. How to contact us">
        <p>
          For privacy questions, data rights requests, or complaints, email {SUPPORT_EMAIL}. Please include
          enough account detail for us to identify and process your request safely.
        </p>
      </Section>

      <Section title="12. Policy updates">
        <p>
          We may update this Privacy Policy to reflect product, legal, or operational changes. When we make
          material updates, we will revise the “Last updated” date and may provide in-app or email notice
          when appropriate.
        </p>
      </Section>
    </LegalPageLayout>
  );
}
