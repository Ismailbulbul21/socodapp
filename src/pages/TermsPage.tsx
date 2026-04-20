import Section from "../components/Section";
import { EFFECTIVE_DATE, JURISDICTION, SUPPORT_EMAIL } from "../content/constants";
import LegalPageLayout from "../layouts/LegalPageLayout";

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service | Socod"
      description="Terms of Service for Socod walking tracker and weekly competition app."
      heading="Terms of Service"
      subheading={`Last updated: ${EFFECTIVE_DATE}`}
    >
      <Section title="1. Acceptance of terms">
        <p>
          By creating an account or using Socod, you agree to these Terms of Service and related policies.
          If you do not agree, do not use the app.
        </p>
      </Section>

      <Section title="2. Eligibility and account responsibilities">
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and for all
          activity under your account. You agree to provide accurate registration and profile details.
        </p>
      </Section>

      <Section title="3. Acceptable use">
        <p>You agree not to misuse Socod, including by cheating, abuse, spam, harassment, or fraud.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Do not attempt to manipulate step data, competition results, or payout outcomes.</li>
          <li>Do not upload harmful, illegal, or abusive content in groups or chat.</li>
          <li>Do not interfere with app security, availability, or other users’ experience.</li>
        </ul>
      </Section>

      <Section title="4. Step data and fairness rules">
        <p>
          Socod uses server-side anti-cheat validation and fairness checks on step submissions. We may flag,
          adjust, or remove suspicious activity and apply account restrictions. Repeated abuse may reduce
          trust scoring, disqualify results, suspend participation, or lead to account termination.
        </p>
      </Section>

      <Section title="5. Competition and leaderboard rules">
        <p>
          Weekly competition rankings are calculated using validated data within the server-defined Somalia
          competition week window. Users may be automatically enrolled based on active use. Rankings and
          outcomes are determined by system logic and moderation review where needed.
        </p>
      </Section>

      <Section title="6. Groups and chat conduct">
        <p>
          You are responsible for content you share in groups and chat, including text, images, and voice
          messages. Socod may moderate content and remove material or restrict accounts that violate these
          terms or harm the community.
        </p>
      </Section>

      <Section title="7. Rewards and payout rules">
        <p>
          Rewards or payouts, when offered, are subject to eligibility checks, anti-fraud review, and
          accurate payout details. Processing times can vary. Socod may delay, limit, or cancel payouts in
          cases of suspected abuse, technical failure, legal restrictions, or incorrect account data.
        </p>
      </Section>

      <Section title="8. Subscriptions and payments">
        <p>
          If paid features are introduced in the future, additional billing terms may apply. App-store
          billing providers may process charges under their own policies.
        </p>
      </Section>

      <Section title="9. Intellectual property">
        <p>
          The app, brand, design, and software content are owned by Socod or its licensors and are protected
          by applicable intellectual property laws. You may not copy, reverse engineer, or redistribute the
          service except as allowed by law.
        </p>
      </Section>

      <Section title="10. Suspension and termination">
        <p>
          We may suspend or terminate access to Socod for violations of these terms, security concerns, or
          legal requirements. You may stop using the service at any time and request account deletion through
          the documented process.
        </p>
      </Section>

      <Section title="11. Disclaimer of warranties">
        <p>
          Socod is provided on an “as is” and “as available” basis. To the maximum extent permitted by law,
          we disclaim warranties of uninterrupted availability, accuracy, fitness for a particular purpose,
          and non-infringement.
        </p>
      </Section>

      <Section title="12. Limitation of liability">
        <p>
          To the extent permitted by law, Socod and its affiliates are not liable for indirect, incidental,
          special, consequential, or punitive damages, or loss of data, profits, or opportunity arising from
          use of the app.
        </p>
      </Section>

      <Section title="13. Governing law and jurisdiction">
        <p>
          These terms are governed by the laws of {JURISDICTION}. Any disputes will be subject to applicable
          courts or dispute mechanisms in that jurisdiction, unless local mandatory law requires otherwise.
        </p>
      </Section>

      <Section title="14. Changes to terms">
        <p>
          We may update these terms from time to time. Continued use of Socod after updates become effective
          means you accept the revised terms.
        </p>
      </Section>

      <Section title="15. Contact">
        <p>
          Questions about these terms can be sent to {SUPPORT_EMAIL}. Include your account email and a clear
          summary of your concern.
        </p>
      </Section>
    </LegalPageLayout>
  );
}
