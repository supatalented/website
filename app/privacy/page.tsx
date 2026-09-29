import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How SUPATALENTED handles personal information.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <style>{`
        .privacy-page,
        .privacy-page * {
          box-sizing: border-box;
        }

        .privacy-page {
          min-height: 100svh;
          padding:
            max(24px, env(safe-area-inset-top, 0px))
            max(16px, env(safe-area-inset-right, 0px))
            max(48px, env(safe-area-inset-bottom, 0px))
            max(16px, env(safe-area-inset-left, 0px));
          color: #fff;
          background: #071126;
          font-family: Arial, sans-serif;
        }

        .privacy-wrap {
          width: min(100%, 900px);
          margin: 0 auto;
        }

        .privacy-brand {
          margin: 0 0 28px;
          color: #fff;
          font-family: "Arial Black", Arial, sans-serif;
          font-size: clamp(26px, 7vw, 42px);
          font-weight: 900;
          text-align: center;
          overflow-wrap: anywhere;
        }

        .privacy-panel {
          padding: clamp(20px, 5vw, 44px);
          border: 1px solid rgba(90, 157, 255, .55);
          background: #0a1731;
        }

        .privacy-title {
          margin: 0 0 14px;
          color: #fdfd0e;
          font-size: clamp(25px, 6vw, 38px);
          font-weight: 900;
          text-align: center;
        }

        .privacy-details {
          margin: 0 0 30px;
          padding: 18px;
          border: 1px solid rgba(90, 157, 255, .35);
          background: rgba(0, 0, 0, .18);
        }

        .privacy-details p {
          margin: 0 0 10px;
        }

        .privacy-details p:last-child {
          margin-bottom: 0;
        }

        .privacy-section {
          margin-top: 32px;
        }

        .privacy-section h2 {
          margin: 0 0 14px;
          color: #0f7dfa;
          font-size: clamp(19px, 4vw, 24px);
          line-height: 1.3;
        }

        .privacy-page p {
          font-size: 15px;
          line-height: 1.75;
        }

        .privacy-section p {
          margin: 0 0 16px;
        }

        .privacy-section p:last-child {
          margin-bottom: 0;
        }

        .privacy-page a {
          color: #fdfd0e;
          text-underline-offset: 3px;
        }

        .privacy-page a:focus-visible {
          outline: 3px solid #0f7dfa;
          outline-offset: 4px;
        }

        .privacy-back {
          display: inline-block;
          margin: 28px 0 0;
          font-size: 24px;
          font-weight: 900;
          text-decoration: none;
        }
      `}</style>

      <div className="privacy-wrap">
        <p className="privacy-brand">SUPATALENTED</p>

        <article className="privacy-panel">
          <h1 className="privacy-title">PRIVACY POLICY</h1>

          <div className="privacy-details">
            <p>
              <strong>Operator:</strong> Supatalented Pty Ltd
            </p>
            <p><strong>Last updated:</strong> 29 September 2026</p>
          </div>

          <section className="privacy-section">
            <h2>At a glance</h2>

            <p>
              SUPATALENTED is a global sports video and connection
              service. We use account and profile details to provide
              the service, manage permissions and respond to safety
              issues. Public videos and selected profile details can
              be seen by other users, including adults and people
              outside Australia. A child’s full date of birth, email
              and guardian contact details is not published publicly.
              We use external providers for account
              authentication, database services, hosting, video
              processing and transactional email. We do not promise
              that other people cannot copy material they can view.
            </p>
          </section>

          <section className="privacy-section">
            <h2>1. What we collect</h2>
            <p>
              <strong>Account and profile:</strong> first and last
              name, date of birth, email, role, profile photo, age
              category, gender choice, country, region, sport,
              position and details you provide. Authentication is
              handled through Supabase. For under-18 accounts, we
              also collect guardian name, relationship, email,
              permission requests, responses, timestamps and
              evidence of those responses.
            </p>

            <p>
              <strong>Content and activity:</strong> videos,
              thumbnails, descriptions and visibility choices;
              Friends requests and connections; Chat and TEEM
              messages, memberships and comments; Cool, Save,
              Share and view activity; reports, blocks and
              moderation records. Content can reveal your image,
              voice or other personal or sensitive information.
            </p>

            <p>
              <strong>Technical information:</strong> sign-in and
              session information, information needed to operate
              the service, request and device details, IP address,
              timestamps, upload metadata, errors and security
              records. We use essential cookies or equivalent
              storage for sign-in and service functions. Our
              hosting and service providers may also generate
              technical logs.
            </p>

            <p>
              We usually collect information from you. Guardians
              provide their own details and responses. Other
              users, providers or authorities may send us reports
              and information relevant to safety or compliance.
            </p>
          </section>

          <section className="privacy-section">
            <h2>2. Why we use it</h2>
            <p>
              We use information to create and authenticate
              accounts, assess eligibility and guardian permissions,
              provide profiles, publish and deliver videos according
              to selected settings, operate search, Friends, Chat
              and TEEM, display activity signals, send account and
              safety emails, handle reports and moderation, secure
              the service and comply with applicable law.
            </p>

            <p>
              We may use aggregated or de-identified information
              to understand and improve the service. Account,
              guardian and safety messages are transactional
              communications. If we introduce promotional
              messages, we will explain them separately and
              provide applicable opt-out choices.
            </p>
          </section>

          <section className="privacy-section">
            <h2>3. Who can see information</h2>

            <p>
              Depending on the feature and settings, other users can
              see Stage videos, thumbnails, a first name, age band or
              age, sport, position, country, profile image, signals
              and other profile information. Friends or TEEM members
              may see information shared within those features.
              Private or limited-visibility settings restrict
              ordinary in-app access as implemented; authorised
              moderators and service providers may still need
              access for safety and operations. External sharing
              can make a permitted public link available to people
              outside SUPATALENTED. Once material has been viewed or
              shared, we cannot guarantee its removal from copies
              held by others.
            </p>

            <p>
              Guardian contact and permission information is used
              for the permission workflow and safety notifications.
              It is not a public profile field. A guardian can
              receive certain courtesy activity notices; these are
              not a complete transcript or continuous monitoring
              service.
            </p>
          </section>

          <section className="privacy-section">
            <h2>4. Service providers and overseas disclosure</h2>
            <p>
              We use Supabase for authentication and database
              services, Cloudinary for video hosting and processing,
              Vercel for application hosting, Resend for
              transactional email, and Google Workspace for
              business correspondence. These providers and their
              subprocessors may handle information outside
              Australia. Public content can also be viewed by
              people in other countries. The locations used by
              particular providers depend on their service and
              account configuration; contact us for information
              about the locations relevant to your data.
            </p>

            <p>
              We take steps appropriate to the information and
              applicable law when using providers and making
              overseas disclosures. We may also share information
              with professional advisers or lawful authorities when
              required or permitted by law. We do not represent
              that all information stays in Australia.
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. Children and guardian information</h2>
            <p>
              SUPATALENTED does not permit accounts for children
              under 13. The app asks users under 18 to complete
              its guardian approval process before platform
              access. FRIENDS and CHAT are separate guardian
              permissions. Guardian approval does not override
              any higher minimum age required by law in a user's
              location.
            </p>

            <p>
              We use a minor's date of birth for eligibility and
              age-display rules. Guardian details are used to
              request and record permissions and send applicable
              activity and safety notices. A child's full date of
              birth, account email and guardian contact details
              are not public profile fields. A guardian can ask
              about a child's data or permissions at{' '}
              <a href="mailto:support@supatalented.com">
                support@supatalented.com
              </a>. We may verify authority before sharing
              private information.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Security and retention</h2>
            <p>
              We use authentication, access controls, database
              restrictions, protected server functions and
              administrative controls to reduce unauthorised
              access. No online service is completely secure.
              Report a suspected security incident to{' '}
              <a href="mailto:support@supatalented.com">
                support@supatalented.com
              </a>.
            </p>

            <p>
              Account, profile, video, message and activity data
              are kept while needed to operate an active account.
              An account holder can use Delete Account in the app.
              That process deletes the active account and
              associated content from our active systems, including
              videos we identify in Cloudinary, subject to the
              process completing successfully.
            </p>

            <p>
              We may retain limited guardian-permission evidence,
              reports, moderation and child-safety records,
              security logs, deletion audit records and previously
              sent emails where needed for safety, dispute
              resolution or legal obligations. We assess whether
              that information remains necessary and delete or
              de-identify it when it is no longer required. Backup
              copies may remain until the relevant provider's
              backup cycle expires. Copies already received or
              saved by other people are outside our control.
            </p>
          </section>

          <section className="privacy-section">
            <h2>7. Access, correction, deletion and complaints</h2>
            <p>
              You can update available profile information and
              use Delete Account in the app. To request access to
              or correction of other personal information, ask
              about deletion or make a privacy complaint, contact
              our Privacy Officer at{' '}
              <a href="mailto:support@supatalented.com">
                support@supatalented.com
              </a>. We may verify your identity or guardian
              authority before responding.
            </p>

            <p>
              Please explain what happened and allow us a
              reasonable time to investigate. We will explain
              any lawful reason for refusing or limiting a
              request and the complaint options available to you.
            </p>
          </section>

          <section className="privacy-section">
            <h2>8. Changes and contact</h2>
            <p>
              We will update the date above when this policy
              changes and give appropriate notice of material
              changes. For platform safety concerns, use the
              in-app Report function or email{' '}
              <a href="mailto:support@supatalented.com">
                support@supatalented.com
              </a>. For immediate danger, contact local
              emergency services.
            </p>
          </section>
        </article>

        <button
          id="privacy-back"
          className="privacy-back"
          type="button"
          style={{
            border: 0,
            padding: 0,
            color: '#fdfd0e',
            background: 'none',
            cursor: 'pointer',
          }}
        >
          BACK
        </button>
        <Script id="privacy-back-navigation" strategy="afterInteractive">{`
          document.getElementById('privacy-back')?.addEventListener('click', function () {
            if (window.history.length > 1) {
              window.history.back();
            } else {
              window.close();
            }
          });
        `}</Script>
      </div>
    </main>
  )
}