import Section from "../components/Section";
import { SUPPORT_EMAIL } from "../content/constants";
import LegalPageLayout from "../layouts/LegalPageLayout";

export default function DataDeletionPage() {
  return (
    <LegalPageLayout
      title="Data Deletion | Socod"
      description="How to request account and data deletion in Socod."
      heading="Data Deletion Request"
      subheading="How to permanently delete your Socod account and personal data."
    >
      <Section title="What data Socod stores">
        <p>
          Socod may store account details, profile fields, step and activity history, goals and sessions,
          leaderboard records, group/chat content, and support history. If rewards were processed, limited
          payout and transaction references may also exist.
        </p>
      </Section>

      <Section title="In-app deletion flow">
        <ol className="list-decimal space-y-2 pl-5">
          <li>Open Socod and sign in to your account.</li>
          <li>Go to account settings.</li>
          <li>Select the delete account option.</li>
          <li>Follow the confirmation steps to submit your request.</li>
        </ol>
      </Section>

      <Section title="Email deletion request alternative">
        <p>
          If you cannot access the app, email {SUPPORT_EMAIL} with the subject “Socod Data Deletion
          Request.” For security, use your registered account email whenever possible.
        </p>
      </Section>

      <Section title="Identity verification">
        <p>
          Before deleting an account, we may verify your identity to prevent unauthorized requests. This may
          include confirming account ownership through your registered email or other account indicators.
        </p>
      </Section>

      <Section title="Processing timeline">
        <p>
          Deletion requests are typically processed within up to 30 days, depending on system status and
          request volume. You may receive confirmation when deletion is completed.
        </p>
      </Section>

      <Section title="What gets deleted and what may be retained">
        <p>
          We aim to remove account and user content data from active systems. Some minimal records may be
          retained for legal, anti-fraud, accounting, or security reasons where required by law.
        </p>
      </Section>

      <Section title="Consequences of deletion">
        <p>
          Account deletion is irreversible. You may lose access to progress history, competition records,
          chat content, and related features. Deleted data generally cannot be restored.
        </p>
      </Section>
    </LegalPageLayout>
  );
}
