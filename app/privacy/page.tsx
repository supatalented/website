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

        .privacy-draft {
          margin: 0 0 26px;
          padding: 14px 16px;
          border: 1px solid #fdfd0e;
          color: #fdfd0e;
          background: rgba(253, 253, 14, .07);
          font-size: 14px;
          font-weight: 800;
          line-height: 1.55;
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
              <strong>Operator:</strong> SUPATALENTED
            </p>
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
              name, date of birth, email, password handled through
              authentication, role, profile photo, age category,
              gender choice, country, region, sport, position and
              other profile details supplied. Public display may
              use a first name and age band for minors; internal
              records can contain more precise data. We collect
              guardian name, relationship, email, permission
              requests, responses, timestamps and related evidence
              for under-18 accounts.
            </p>

            <p>
              <strong>Content and activity:</strong> uploaded videos,
              thumbnails, descriptions, sport and visibility
              settings; Friends requests and connections; available
              Chat and TEEM messages, membership and comments; Cool,
              Save, Share and view signals; reports, blocks, appeals
              and moderation decisions. A video or message can
              itself reveal a person’s image, voice, location,
              health, disability or other sensitive facts. Please
              avoid placing sensitive information in content unless
              it is necessary and you have permission to share it.
            </p>

            <p>
              <strong>Technical and safety information:</strong>{' '}
              authentication and session data, request and device
              information such as IP address, browser or app details,
              timestamps, security logs, upload metadata, error
              information and evidence needed to prevent abuse,
              enforce restrictions, investigate reports or handle
              account deletion. Some of these may be generated by
              hosting and service providers.
            </p>

            <p>
              <strong>Confirm before publication:</strong> [Whether
              analytics, crash reporting, cookies beyond
              authentication, advertising identifiers or push
              notification tokens are used; add each actual purpose
              and provider.]
            </p>

            <p>
              We usually collect information directly from you; a
              guardian supplies their own permission information.
              We may receive reports and associated evidence from
              other users, service providers or lawful authorities.
            </p>
          </section>

          <section className="privacy-section">
            <h2>2. Why we use it</h2>

            <p>
              We use information to create and authenticate accounts;
              verify eligibility and guardian permissions; complete
              profiles; publish and deliver videos according to
              selected settings; provide search, Friends, Chat and
              TEEM; show activity signals; send account, permission,
              safety and guardian courtesy emails; handle reports,
              blocking, moderation and appeals; secure the service,
              enforce rules and comply with law.
            </p>

            <p>
              We may use aggregated or de-identified information to
              understand and improve service performance.{' '}
              <strong>Confirm before publication:</strong> [Whether
              promotional email is sent; if yes, describe consent
              and opt-out separately.] We do not state that content
              is reviewed before publication or that guardian
              notices cover every activity.
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
              Vercel for application hosting, and Resend for
              transactional emails, subject to current
              configuration. Providers may process information in
              countries outside Australia, and public users may
              view content globally.
            </p>

            <p>
              <strong>Before publication:</strong> Check contracts
              and deployed settings and name the countries where
              overseas recipients are likely to be located, where
              practicable: [countries for Supabase project region,
              Cloudinary account, CDN and processing, Vercel,
              Resend and any other providers].
            </p>

            <p>
              We take reasonable steps appropriate to the
              information and applicable law when disclosing
              information overseas. We may also disclose information
              to advisers or to law enforcement and child-safety
              authorities when required or permitted by law. This
              policy does not claim that data stays in Australia.
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. Children and guardian information</h2>

            <p>
              Accounts for children under 13 are not permitted.
              Users under 18 must complete the applicable guardian
              process before platform access. FRIENDS and CHAT are
              separate guardian permissions. The current app allows
              eligible users aged 13–17 to upload after platform
              approval, subject to role and safety controls.
            </p>

            <p>
              <strong>
                The availability of accounts for Australians aged
                13–15 must be determined under Australia’s social
                media minimum age law before publishing this as a
                final promise.
              </strong>{' '}
              Guardian approval is not a legal exemption from that
              law.
            </p>

            <p>
              We use a minor’s date of birth for eligibility and age
              display rules and use guardian contact details to
              request and record permissions and send qualifying
              notices. We do not ask users to place a child’s full
              name, contact details, school, exact location or
              routine in public content. A guardian who wants to
              ask about a child’s data or permissions can contact
              [privacy email]; we will verify authority before
              disclosing private information.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Security and retention</h2>

            <p>
              We use access controls, authentication, role and
              database restrictions, protected server functions
              and administrative controls intended to reduce
              unauthorised access. No service is completely secure.
              Report a suspected security incident to [security
              email].
            </p>

            <p>
              We keep information while an account is active and as
              reasonably needed to deliver the service, investigate
              safety issues, resolve disputes and meet legal
              obligations. Deleting an account removes associated
              active account data and videos through the deletion
              process, but safety, reporting, moderation, security
              and deletion records may be retained where necessary;
              external copies and previously delivered emails may
              remain.
            </p>

            <p>
              <strong>Before publication:</strong> Adopt and insert
              a retention schedule covering [inactive accounts],
              [original videos and backups], [Chat and TEEM
              messages], [guardian evidence and email logs],
              [reports, moderation and child-safety records],
              [technical logs], and [deletion audit records].
              Do not promise immediate erasure from every backup
              or recipient.
            </p>
          </section>

          <section className="privacy-section">
            <h2>7. Access, correction, deletion and complaints</h2>

            <p>
              You can view or update available profile information
              in the service and use Delete Account to request
              deletion. For access to, correction of, or questions
              about other personal information, email a report
              to support@supatalented.com. We may verify
              identity and guardian authority before acting, and
              may refuse or limit a request where law permits or
              requires, explaining why and available complaint
              options.
            </p>

            <p>
              If you believe we mishandled personal information,
              contact our Privacy Officer at those details, tell
              us what happened at support@supatalented.com, 
              and allow a reasonable time to investigate and respond.
            </p>
          </section>

          <section className="privacy-section">
            <h2>8. Changes and contact</h2>

            <p>
              We will update the effective date when this policy
              changes and give appropriate notice of material
              changes.
              For immediate danger, contact local emergency services;
              use the in-app Report function or support@supatalented.com 
              for platform safety concerns.
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