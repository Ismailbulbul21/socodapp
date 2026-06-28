import Section from "../components/Section";
import { EFFECTIVE_DATE, LEGAL_ENTITY_NAME, SUPPORT_EMAIL } from "../content/constants";
import LegalPageLayout from "../layouts/LegalPageLayout";

const externalLinkClass =
  "font-medium text-brand-700 underline decoration-brand-300 underline-offset-2 hover:text-brand-900";

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy | Socod"
      description="Privacy Policy for SocodApp, a walking and step tracking app with weekly competitions, squads, and group chat."
      heading="Privacy Policy"
      subheading={`Effective date: ${EFFECTIVE_DATE}`}
    >
      <Section title="1. About this policy">
        <p>
          This Privacy Policy explains how {LEGAL_ENTITY_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
          your information when you use SocodApp, an Android walking and step tracker app with weekly step
          competitions, squads, and group chat. We use clear, simple language so you can understand what we
          collect and why.
        </p>
      </Section>

      <Section title="2. Information we collect">
        <p>We collect the following information when you create an account and use the app:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Account information:</strong> your name, email address and/or phone number, gender, and
            profile photo.
          </li>
          <li>
            <strong>Fitness data:</strong> your daily and weekly step counts, read from your device&rsquo;s
            motion and step sensors.
          </li>
          <li>
            <strong>User content:</strong> messages and photos you share inside squads and group chat.
          </li>
          <li>
            <strong>Payout information:</strong> the mobile-money number you enter to receive prize money if
            you win a competition. We support EVC, Zaad, and Sahal.
          </li>
          <li>
            <strong>Device and advertising identifiers:</strong> your device&rsquo;s advertising ID and a
            push-notification token used to send you alerts.
          </li>
          <li>
            <strong>Usage and diagnostic data:</strong> basic information about how the app is performing,
            such as crash reports, app version, and feature usage, used to keep the app stable.
          </li>
        </ul>
      </Section>

      <Section title="3. How we use your information">
        <ul className="list-disc space-y-2 pl-5">
          <li>Track your steps and walking activity.</li>
          <li>Run weekly step competitions and show leaderboards.</li>
          <li>Power squads, group chat, and shared photos.</li>
          <li>Send push notifications about competitions, rank changes, and messages.</li>
          <li>Pay prize money to winners using the mobile-money number you provided.</li>
          <li>Display ads inside the app.</li>
          <li>Keep the app secure, prevent fraud and cheating, and fix bugs.</li>
        </ul>
      </Section>

      <Section title="4. Advertising">
        <p>
          SocodApp shows advertisements through <strong>Google AdMob</strong>, an advertising service
          operated by Google LLC. To serve and measure ads, AdMob collects and uses your device&rsquo;s
          <strong> advertising ID</strong> along with other information allowed by Google&rsquo;s policies.
        </p>
        <p>You can learn more about how Google uses this information here:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className={externalLinkClass}
            >
              How Google uses information for advertising
            </a>
          </li>
          <li>
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className={externalLinkClass}
            >
              How Google uses information from sites and apps that use its services
            </a>
          </li>
        </ul>
        <p>
          On Android you can reset or limit ad personalization at any time from your device settings under
          <em> Google &rsaquo; Ads</em>.
        </p>
      </Section>

      <Section title="5. Third-party services we use">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Supabase</strong> &mdash; provides our backend, user authentication, and database. Your
            account information, fitness data, messages, and photos are stored on Supabase infrastructure.
          </li>
          <li>
            <strong>Google AdMob (Google LLC)</strong> &mdash; serves ads inside the app and receives your
            device&rsquo;s advertising ID for ad delivery and measurement.
          </li>
        </ul>
        <p>
          <strong>We do not sell your personal data</strong> to anyone.
        </p>
      </Section>

      <Section title="6. Security">
        <p>
          Data sent between the app and our servers is transmitted over encrypted <strong>HTTPS</strong>. We
          also use reasonable technical and organizational measures to protect your data from unauthorized
          access, loss, or misuse. No system is 100% secure, but we work to keep your information safe.
        </p>
      </Section>

      <Section title="7. Data retention and your rights">
        <p>
          We keep your information for as long as your account is active and as needed to run competitions,
          process prize payouts, prevent fraud, and meet legal obligations.
        </p>
        <p>
          You can request deletion of your account and your personal data at any time by contacting us at
          {" "}<strong>{SUPPORT_EMAIL}</strong>. Please include enough account detail (such as the email or
          phone number used to sign in) so we can identify your account and process the request safely.
        </p>
      </Section>

      <Section title="8. Children">
        <p>
          SocodApp is <strong>not directed to children under 13</strong>. We do not knowingly collect
          personal information from children under 13. If you believe a child has provided us with personal
          information, please contact us and we will take appropriate steps to delete it.
        </p>
      </Section>

      <Section title="9. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. When we make material changes, we will
          update the &ldquo;Effective date&rdquo; above and, where appropriate, notify you inside the app.
        </p>
      </Section>

      <Section title="10. Contact us">
        <p>
          If you have any questions about this Privacy Policy, your data, or you want to delete your
          account, contact us at <strong>{SUPPORT_EMAIL}</strong>.
        </p>
      </Section>
    </LegalPageLayout>
  );
}
