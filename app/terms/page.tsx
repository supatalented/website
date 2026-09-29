import type { Metadata } from 'next'

import Script from 'next/script'



export const metadata: Metadata = {

  title: 'Terms of Use',

  description: 'SUPATALENTED Terms of Use.',

  robots: {

    index: false,

    follow: false,

  },

}



export default function TermsPage() {

  return (

    <main className="terms-page">

      <style>{`

        .terms-page,

        .terms-page * {

          box-sizing: border-box;

        }



        .terms-page {

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



        .terms-wrap {

          width: min(100%, 900px);

          margin: 0 auto;

        }



        .terms-brand {

          margin: 0 0 28px;

          color: #fff;

          font-family: "Arial Black", Arial, sans-serif;

          font-size: clamp(26px, 7vw, 42px);

          font-weight: 900;

          text-align: center;

          overflow-wrap: anywhere;

        }



        .terms-panel {

          padding: clamp(20px, 5vw, 44px);

          border: 1px solid rgba(90, 157, 255, .55);

          background: #0a1731;

        }



        .terms-title {

          margin: 0 0 14px;

          color: #fdfd0e;

          font-size: clamp(25px, 6vw, 38px);

          font-weight: 900;

          text-align: center;

        }



        .terms-draft {

          margin: 0 0 26px;

          padding: 14px 16px;

          border: 1px solid #fdfd0e;

          color: #fdfd0e;

          background: rgba(253, 253, 14, .07);

          font-size: 14px;

          font-weight: 800;

          line-height: 1.55;

        }



        .terms-details {

          margin: 0 0 30px;

          padding: 18px;

          border: 1px solid rgba(90, 157, 255, .35);

          background: rgba(0, 0, 0, .18);

        }



        .terms-details p {

          margin: 0 0 10px;

        }



        .terms-details p:last-child {

          margin-bottom: 0;

        }



        .terms-section {

          margin-top: 32px;

        }



        .terms-section h2 {

          margin: 0 0 14px;

          color: #0f7dfa;

          font-size: clamp(19px, 4vw, 24px);

          line-height: 1.3;

        }



        .terms-page p {

          font-size: 15px;

          line-height: 1.75;

        }



        .terms-section p {

          margin: 0 0 16px;

        }



        .terms-section p:last-child {

          margin-bottom: 0;

        }



        .terms-page a {

          color: #fdfd0e;

          text-underline-offset: 3px;

        }



        .terms-page a:focus-visible {

          outline: 3px solid #0f7dfa;

          outline-offset: 4px;

        }



        .terms-back {

          display: inline-block;

          margin: 28px 0 0;

          font-size: 24px;

          font-weight: 900;

          text-decoration: none;

        }

      `}</style>



      <div className="terms-wrap">

        <p className="terms-brand">SUPATALENTED</p>



        <article className="terms-panel">

          <h1 className="terms-title">TERMS OF USE</h1>



          <div className="terms-details">

            <p>

              <strong>Operator:</strong> SUPATALENTED

            </p>

          </div>



          <section className="terms-section">

            <h2>1. Agreement and the service</h2>



            <p>

              These Terms govern access to SUPATALENTED’s website and

              any mobile app. By creating an account or using the

              service, you agree to these Terms and the Community

              Rules and acknowledge the Privacy Policy. If you act

              for a club, academy, organisation or sporting body, you

              confirm that you have authority to act for it; you

              remain responsible for actions through your account.

              SUPATALENTED lets eligible users create profiles, post

              sports videos, view and share content, connect with

              others, and use available Friends, Chat and TEEM

              features. Features may vary by role and age and may

              change over time.

            </p>



            <p>

              SUPATALENTED is a place to show and discover sport. We

              do not guarantee scouting, selection, recruitment,

              employment, scholarships, representation, training

              outcomes, exposure, earnings or a particular audience.

              A profile, role label, view count, Cool, Save or Share

              is not a credential or endorsement by us.

            </p>

          </section>



          <section className="terms-section">

            <h2>2. Eligibility and accounts</h2>



            <p>

              You must give a genuine date of birth and accurate

              account information, keep your credentials secure, and

              use only accounts you are entitled to operate. Accounts

              for children under 13 are not permitted. Users aged

              13–17 are subject to the guardian approval and access

              controls we operate. For people physically in Australia

              aged 13–15, account availability is subject to a

              separate determination under Australia’s social media

              minimum age rules; parental permission alone cannot

              override an applicable legal age restriction. We may

              refuse, restrict or close an account to comply with law

              or protect users.

            </p>



            <p>

              For users under 18, a parent or guardian must complete

              the applicable permission process before platform

              access. The service records separate Friends and Chat

              permissions. Those permissions do not make every

              interaction safe and do not authorise another person to

              ignore the Community Rules. A guardian must provide

              their own accurate details and must not impersonate

              another person. If you suspect a minor’s age or

              permission details are inaccurate, report it promptly.

            </p>



            <p>

              You may not sell, transfer, share or automate an

              account, evade a suspension, or use someone else’s

              identity or role. Tell us promptly at [security email]

              if you believe your account has been compromised.

            </p>

          </section>



          <section className="terms-section">

            <h2>3. Your content and permissions</h2>



            <p>

              “Your Content” includes videos, profile information,

              images, messages, comments within TEEM, descriptors

              and other material you submit. You retain your rights

              in Your Content. You give SUPATALENTED a worldwide,

              non-exclusive, royalty-free licence, for as long as

              reasonably needed to operate the service, to host,

              store, reproduce, transcode, display, distribute

              within the service and otherwise use Your Content to

              provide, secure and improve the features you choose.

              This licence ends when the content is deleted, subject

              to reasonable technical processing, copies already

              shared by others, and lawful retention of safety or

              audit records. We do not acquire ownership of your

              videos.

            </p>



            <p>

              You promise you have the rights and permissions needed

              to upload and share Your Content, including permission

              from the videographer, venue, club or event where

              needed, and appropriate consent for identifiable

              people, especially children. Do not assume that being

              present at a match gives you the right to publish

              everyone’s image, voice, name, location, uniform or

              personal information. You are responsible for

              complying with applicable copyright, privacy,

              safeguarding and event rules. Do not post music,

              broadcasts or footage you do not have rights to use.

            </p>



            <p>

              Choose the available visibility and external-sharing

              settings carefully. Material posted publicly may be

              seen internationally and may be captured or reshared

              by others. An in-app restriction on external sharing

              cannot stop screenshots, recordings, copying outside

              the service, or another person’s unlawful behaviour.

              Do not upload content you cannot safely make available

              to its selected audience.

            </p>

          </section>



          <section className="terms-section">

            <h2>4. Contact and conduct</h2>



            <p>

              Use Friends, Chat and TEEM only for legitimate

              sport-related connection and in accordance with the

              Community Rules. Do not pressure someone to connect or

              move a conversation to another platform; do not

              solicit private contact details from a child. A

              guardian courtesy email about some activity is an

              additional notice, not live monitoring or a substitute

              for safeguarding. Blocking and reporting tools are

              available, but you should also contact emergency

              services or the relevant safeguarding authority when

              anyone is in immediate danger.

            </p>



            <p>

              You may not collect or scrape profiles, harvest contact

              details, run unsolicited promotions, manipulate

              signals, upload malware, bypass controls, or use

              SUPATALENTED to assess or exploit children. Do not

              claim that SUPATALENTED has verified a user, coach,

              club or opportunity unless we expressly say so.

            </p>

          </section>



          <section className="terms-section">

            <h2>5. Moderation and enforcement</h2>



            <p>

              Uploads may appear promptly on the Stage. Appearance

              does not mean that we have reviewed, approved or

              certified the content. We may investigate reports,

              restrict reach or access, remove material, suspend or

              close accounts, preserve evidence, and refer serious

              concerns to appropriate authorities where lawful. We

              may act without prior notice where safety, legal

              obligations or evidence preservation require it. We

              aim to act proportionately, but cannot promise that

              all prohibited content will be detected before it is

              seen. To report content or a user, use the in-app

              Report function or [safety email]. If you disagree

              with a decision, contact [appeals email] and provide

              the report reference if available.

            </p>

          </section>



          <section className="terms-section">

            <h2>6. Other users and third-party services</h2>



            <p>

              Users’ statements, qualifications and offers are their

              own. Check identities and arrangements independently

              before agreeing to meet, travel, train, pay or share

              information. For an in-person meeting involving a

              child, follow your club’s safeguarding rules and

              obtain appropriate parent or guardian involvement.

              Third-party websites and sharing destinations have

              their own terms and privacy practices. SUPATALENTED

              uses service providers to deliver authentication,

              hosting, email and video; see the Privacy Policy.

            </p>

          </section>



          <section className="terms-section">

            <h2>7. Availability, changes and ending an account</h2>



            <p>

              We may maintain, update, suspend or discontinue

              features when necessary for operations, security,

              safety or law. We may update these Terms; material

              changes will be communicated by a reasonable method

              before they take effect where practicable. Continued

              use after the effective date constitutes acceptance

              where permitted by law. If you do not agree, stop

              using the service and delete your account.

            </p>



            <p>

              You may request permanent deletion through the in-app

              Delete Account flow. Some safety, reporting, security

              or legal records may be retained as explained in the

              Privacy Policy. We may terminate or limit access for

              breaches, credible risk or legal necessity. Sections

              that by nature should continue, including rights in

              earlier lawful use, safety records, dispute provisions

              and limits of liability, survive termination.

            </p>

          </section>



          <section className="terms-section">

            <h2>8. Liability and consumer rights</h2>



            <p>

              We take reasonable care in operating the service, but

              cannot guarantee uninterrupted access, that every

              user is who they claim to be, or that any video or

              interaction will be safe or suitable. To the extent

              the law permits, we are not responsible for

              independent arrangements or conduct between users or

              for losses caused by unauthorised use outside our

              reasonable control. Nothing in these Terms excludes,

              restricts or modifies any right, guarantee or remedy

              that cannot lawfully be excluded, including rights

              under the Australian Consumer Law. If a law permits a

              limitation for a particular non-consumer service, our

              liability is limited only to the extent that

              limitation is lawful and reasonable. These Terms do

              not require a user to indemnify SUPATALENTED for our

              own negligence or unlawful conduct.

            </p>

          </section>



          <section className="terms-section">

            <h2>9. Governing law and contact</h2>



            <p>

              Queensland law governs these Terms, subject to any

              mandatory law applying where you live. Courts with

              jurisdiction in Queensland may hear disputes, without

              taking away non-excludable rights to bring a claim

              elsewhere. Contact [support email] first so we can

              try to resolve a problem. For privacy questions, see

              the Privacy Policy; for safety concerns, use Report

              or [safety email].

            </p>

          </section>

        </article>

<button
  id="terms-back"
  className="terms-back"
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
        <Script id="terms-back-navigation" strategy="afterInteractive">{`
          document.getElementById('terms-back')?.addEventListener('click', function () {
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