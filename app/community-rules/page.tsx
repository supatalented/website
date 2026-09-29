import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Community Rules',
  description: 'The SUPATALENTED Community Rules.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function CommunityRulesPage() {
  return (
    <main className="rules-page">
      <style>{`
        .rules-page,
        .rules-page * {
          box-sizing: border-box;
        }

        .rules-page {
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

        .rules-wrap {
          width: min(100%, 900px);
          margin: 0 auto;
        }

        .rules-brand {
          margin: 0 0 28px;
          color: #fff;
          font-family: "Arial Black", Arial, sans-serif;
          font-size: clamp(26px, 7vw, 42px);
          font-weight: 900;
          text-align: center;
          overflow-wrap: anywhere;
        }

        .rules-panel {
          padding: clamp(20px, 5vw, 44px);
          border: 1px solid rgba(90, 157, 255, .55);
          background: #0a1731;
        }

        .rules-title {
          margin: 0 0 14px;
          color: #fdfd0e;
          font-size: clamp(25px, 6vw, 38px);
          font-weight: 900;
          text-align: center;
        }

        .rules-intro {
          padding: 18px;
          border: 1px solid rgba(90, 157, 255, .35);
          background: rgba(0, 0, 0, .18);
        }

        .rules-page p,
        .rules-page li {
          font-size: 15px;
          line-height: 1.75;
        }

        .rules-intro p {
          margin: 0 0 12px;
        }

        .rules-intro p:last-child {
          margin-bottom: 0;
        }

        .rules-section {
          margin-top: 32px;
        }

        .rules-section h2 {
          margin: 0 0 14px;
          color: #0f7dfa;
          font-size: clamp(19px, 4vw, 24px);
          line-height: 1.3;
        }

        .rules-section ul {
          display: grid;
          gap: 14px;
          margin: 0;
          padding-left: 24px;
        }

        .rules-section li {
          padding-left: 3px;
        }

        .rules-section li::marker {
          color: #fdfd0e;
        }

        .rules-section p {
          margin: 0 0 16px;
        }

        .rules-section p:last-child {
          margin-bottom: 0;
        }

        .rules-page a {
          color: #fdfd0e;
          text-underline-offset: 3px;
        }

        .rules-page a:focus-visible {
          outline: 3px solid #0f7dfa;
          outline-offset: 4px;
        }

        .rules-back {
          display: inline-block;
          margin: 28px 0 0;
          font-size: 24px;
          font-weight: 900;
          text-decoration: none;
        }
      `}</style>

      <div className="rules-wrap">
        <p className="rules-brand">SUPATALENTED</p>

        <article className="rules-panel">
          <h1 className="rules-title">COMMUNITY RULES</h1>

          <div className="rules-intro">
            <p>
              These Rules apply to videos, profiles, Friends, Chat,
              TEEM and all other interactions on SUPATALENTED,
              operated by Supatalented Pty Ltd.
            </p>

            <p>
              SUPATALENTED is a global stage for local sport. Our
              standard is <strong>Fun · Easy · Safe</strong>.
              Show all sport from a user perspective, have things accessible and 
              simple to use, and help everyone participate safely. The Terms of Use 
              and Privacy Policy also apply.
            </p>
          </div>

          <section className="rules-section">
            <h2>1. Keep children safe</h2>

            <ul>
              <li>
                Never sexualise a child, request intimate content,
                groom, exploit, threaten or coerce a child, or
                arrange secret contact. Any child sexual abuse
                material or suspected exploitation is prohibited
                and may be referred to authorities.
              </li>

              <li>
                Do not ask a child to move to private messaging
                elsewhere, conceal a conversation from a guardian,
                share contact details, send money, meet alone, or
                keep a relationship secret. Do not use Friends,
                Chat or TEEM to evade age, guardian or contact
                controls.
              </li>

              <li>
                Do not reveal a child’s surname, address, school,
                precise location, travel plans, routine, personal
                contact details or identifying records in public
                posts or messages where doing so may put them at
                risk.
              </li>

              <li>
                Adults involved in sport must follow their club’s
                safeguarding policies and applicable law. A badge,
                claimed coaching role, friendship, guardian
                permission or TEEM membership does not create an
                exception.
              </li>

              <li>
                If a child is in immediate danger, contact local
                emergency services. Report a child-safety concern
                in the app or email{' '}
                <a href="mailto:support@supatalented.com">
                  support@supatalented.com
                </a>. Do not
                distribute suspected abusive material while
                reporting it.
              </li>
            </ul>
          </section>

          <section className="rules-section">
            <h2>2. Post sport responsibly</h2>

            <ul>
              <li>
                Post real sport-related Game, Highlight, Training
                or Moment videos under the right sport, lane,
                position and category. Do not misrepresent a video,
                another person’s achievement, identity, age, team,
                affiliation or credentials.
              </li>

              <li>
                Get permission to record and publish where needed,
                especially for other people’s children. Respect
                venue, event, broadcast, music, privacy and
                intellectual-property rights. Remove content
                promptly if you learn that you lack the required
                permission.
              </li>

              <li>
                No sexual content, nudity, sexual solicitation,
                graphic injury or violence, hateful material,
                threats, self-harm encouragement, illegal activity,
                scams, dangerous challenges, deliberate humiliation
                or spam. Ordinary sporting contact is allowed; do
                not post gratuitous injury footage or expose someone
                in a vulnerable moment.
              </li>

              <li>
                Do not post medical details, allegations, private
                conversations or documents about another person
                without an appropriate basis and permission. Never
                reveal someone’s private identifying details to
                enable harassment or unwanted contact.
              </li>

              <li>
                Select visibility and external-sharing settings
                with care. Even when external sharing is off,
                another viewer may capture a screen. A public
                upload can reach a worldwide audience.
              </li>
            </ul>
          </section>

          <section className="rules-section">
            <h2>3. Treat people fairly</h2>

            <ul>
              <li>
                No bullying, harassment, discriminatory abuse,
                intimidation, stalking, impersonation or repeated
                unwanted contact. Do not target people based on
                disability, race, sex, gender, sexuality, religion,
                age, nationality or another protected characteristic.
              </li>

              <li>
                Cool, Save, Share and views are engagement signals,
                not a ranking of a person’s value or permission to
                objectify, pressure or contact them. Do not
                coordinate abuse or manipulate signals.
              </li>

              <li>
                Respect a rejected or unanswered Friend request,
                a disabled Chat setting, a block and any request
                to stop. Do not use another account or person to
                get around a restriction.
              </li>

              <li>
                Keep TEEM spaces relevant to their purpose. Admins,
                club representatives and captains must use their
                powers fairly and must not share a member’s private
                information or material outside its intended
                audience without permission.
              </li>
            </ul>
          </section>

          <section className="rules-section">
            <h2>4. Report and respond</h2>

            <p>
              Use the in-app <strong>Report Video</strong> or
              <strong>Report User</strong> action when available,
              or email{' '}
              <a href="mailto:support@supatalented.com">
                support@supatalented.com
              </a>{' '}with the relevant time and a short explanation. Block a user to stop
              unwanted interaction where the feature applies. If
              you cannot access your account, report by email. Do
              not make knowingly false reports or repost harmful
              content to call attention to it.
            </p>

            <p>
              We may review reports and available evidence, remove
              or restrict content, warn, limit features, suspend
              or delete accounts, preserve evidence, and contact
              authorities when lawful and appropriate. Serious
              child-safety concerns receive priority. A report is
              not a promise of a particular outcome or a guaranteed
              response time. We may not share another person’s
              private investigation details with you. To ask us to
              review an action on your account, write to{' '}
              <a href="mailto:support@supatalented.com">
                support@supatalented.com
              </a>{' '}and include your account email and any report reference.
            </p>
          </section>

          <section className="rules-section">
            <h2>5. A note to young athletes and guardians</h2>

            <p>
              Do not share information that lets a stranger find
              you offline. Tell a trusted adult if contact feels
              uncomfortable. Guardians should discuss what a public
              video can reveal, review permissions and use the
              safety channels; any guardian notifications do not
              replace supervision. Accounts for children under 13
              are not permitted. Users aged 13–17 are subject to
              guardian approval and access controls. A higher
              minimum age may apply under the law where you live;
              guardian permission cannot override that restriction.
              See the Terms of Use and Privacy Policy.
            </p>
          </section>
        </article>

        <button
          id="rules-back"
          className="rules-back"
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
        <Script id="rules-back-navigation" strategy="afterInteractive">{`
          document.getElementById('rules-back')?.addEventListener('click', function () {
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