'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const memberTypes = [
  {
    title: 'Athlete',
    description:
      'A person aged 13 or older who participates in sport and wants to be seen better, discovered easier, stay ready and find opportunity.',
  },
  {
    title: 'Registered Sports Coach',
    description:
      'A qualified or registered coach who provides sports coaching, training or athlete development.',
  },
  {
    title: 'Sports Academy',
    description:
      'A structured academy that provides sports coaching, training or athlete development programs.',
  },
  {
    title: 'Sports Club',
    description:
      'A sporting club representing athletes, teams, members and its local or wider sporting community.',
  },
  {
    title: 'Sports Organisation',
    description:
      'Entities or associations that govern a particular body of sport, such as Basketball, Soccer, Rugby, Cricket, Baseball, Netball, etc.',
  },
  {
    title: 'Sporting Body',
    description:
      'A governing, administrative or representative body responsible for overseeing an entire sports entity, such as NRL, AFL, NFL, NBA, NHL, etc.',
  },
  {
    title: 'Sports Content Creator',
    description:
      'A person or organisation creating sports videos, interviews, podcasts, stories, news or entertainment.',
  },
  {
    title: 'Subscriber',
    description:
      'A registered business entity of any kind seeking 24/7 visibility to the entire sports community within the platform - locally or globally. Subscriptions start from $15 /month.',
  },
    {
    title: 'Spectator / General Public',
    description:
      'Any member of the general public >13 years of age interested in watching, saving and sharing sports videos, connecting with businesses for products and services, or discovering athletes.',
  },
]

const aboutSupatalented = [
  'ATHLETES - Be SEEN. Get FOUND. UPLOAD your sports HIGHLIGHT videos, your GAME, TRAINING or AWESOME MOMENT videos and show the world some COOL stuff!',
  'SPORTS COACHES, CLUBS, ACADEMIES and ORGANISATIONS - POST your sports videos and grow your presence and position in your community.',
  'CONTENT CREATORS and PODCASTERS - Stay relevant and SEEN on a global sports platform, to a WORLDWIDE audience.',
  'SPECTATORS and the GENERAL PUBLIC - WATCH, SAVE and SHARE endless sports videos. Connect with BUSINESSES for products and services.',
  'EVERYONE - STAY READY through your sports journey or your daily routine by connecting with BUSINESSES for products and services - locally or online.',
  'BUSINESSES - SUBSCRIBE from just $15 /month to stay visible 24/7 to EVERYONE on the platform - locally or globally.',  
  'SCOUTS/AGENTS - Finally! A dedicated sports platform for discovering athletes from all around the WORLD - in ONE place.',
]

const badgeInformation =
  'SUPATALENTED is the governed Sports Industry Hub uniting, connecting, presenting and servicing the athletic and global business worlds in one place. It is purposely built for EVERYONE to be SEEN better, to be DISCOVERED easier, and to STAY READY with help from the available BUSINESS community - with youth online safety at its core.'

export default function HomePage() {
  const router = useRouter()

  const [showAbout, setShowAbout] = useState(false)
  const [showMemberTypes, setShowMemberTypes] = useState(false)
  const [showBadgeInfo, setShowBadgeInfo] = useState(false)

  return (
    <main className="home-root">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: #020713;
          overflow-x: hidden;
        }

        button,
        input,
        textarea,
        select {
          font-family: inherit;
        }

        button {
          -webkit-tap-highlight-color: transparent;
        }

        .home-root {
          min-height: 100svh;
          width: 100%;
          background: url('/home/stadium-home.jpg');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          color: #ffffff;
          font-family: Arial Black, Arial, Helvetica, sans-serif;
        }

        .home-shell {
          width: 100%;
          max-width: 430px;
          min-height: 100svh;
          padding:
            0
            22px
            max(24px, env(safe-area-inset-bottom));
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: translateY(-18px);
        }

        .badge-button {
          width: 140px;
          padding: 0;
          margin: 0 0 -36px;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .badge-button:active {
          transform: scale(0.97);
        }

        .badge {
          display: block;
          width: 100%;
          height: auto;
          filter: drop-shadow(1px 0 0 #ffffff);
        }

        .logo-word {
          padding: 0;
          border: none;
          background: transparent;
          font-family: Arial Black, Arial, Helvetica, sans-serif;
          font-weight: 900;
          -webkit-text-stroke: 0.35px currentColor;
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
          font-size: clamp(42px, 11vw, 54px);
          line-height: 1;
          letter-spacing: -0.05em;
          margin: 0;
          white-space: nowrap;
          color: #898f90;
          cursor: pointer;
          animation: logoPulse 2.2s ease-in-out infinite;
        }

        .logo-word:active {
          transform: scale(0.99);
        }

        .logo-word .blue {
          color: #0e15db;
        }

        @keyframes logoPulse {
          0%,
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(14, 21, 219, 0));
          }

          50% {
            transform: scale(1.045);
            filter: drop-shadow(0 0 10px rgba(14, 21, 219, 0.9));
          }
        }

        .slogan {
          margin-top: 14px;
          color: #ffffff;
          font-size: clamp(21px, 6.5vw, 28px);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.025em;
          text-align: center;
          white-space: nowrap;
        }

        .slogan .blue {
          color: #0f7dfa;
        }

        .launch-content {
          width: 100%;
          margin-top: 16px;
          margin-bottom: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .coming-soon {
          margin: 0;
          color: #f3fc01;
          font-size: clamp(40px, 11.5vw, 54px);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.045em;
          padding: 0;
          border: none;
          background: transparent;
          cursor: pointer;
          text-shadow:
            0 0 12px rgba(14, 21, 219, 0.95),
            0 3px 8px rgba(0, 0, 0, 0.9);
        }

        .early-message {
          max-width: 360px;
          margin: 18px 0 0;
          color: #f3fc01;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 19px;
          font-weight: 800;
          line-height: 1.25;
          text-shadow: 0 2px 5px rgba(0, 0, 0, 0.95);
        }

        .early-message strong {
          color: #f3fc01;
          font-family: Arial Black, Arial, Helvetica, sans-serif;
          font-weight: 900;
        }

        .specials {
          width: 100%;
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
        }

        .special {
          min-height: 42px;
          padding: 8px 5px;
          border: 1px solid rgba(73, 145, 255, 0.7);
          background: rgba(2, 7, 19, 0.68);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3fccfb;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 12px;
          font-weight: 900;
          line-height: 1.15;
          text-align: center;
          backdrop-filter: blur(8px);
        }

        .video-space {
          width: 62px;
          height: 62px;
          margin-top: 20px;
          flex-shrink: 0;
        }

        .cta-wrap {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cta {
          width: 100%;
          min-height: 48px;
          padding: 9px 14px;
          border: 1px solid rgba(47, 118, 255, 0.5);
          color: #ffffff;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.13),
            rgba(255, 255, 255, 0.04)
          );
          font-size: 17px;
          font-weight: 800;
          letter-spacing: 0.03em;
          cursor: pointer;
          backdrop-filter: blur(14px);
        }

        .cta.join {
          color: #f3fc01;
          border-color: #2858ff;
          background: linear-gradient(
            180deg,
            rgba(33, 92, 255, 0.98),
            rgba(8, 20, 170, 0.98)
          );
          font-size: 20px;
          font-weight: 900;
          box-shadow: 0 0 18px rgba(14, 21, 219, 0.45);
        }

        .question-mark {
          display: inline-flex;
          width: 24px;
          height: 24px;
          margin-right: 7px;
          border: 2px solid #ffffff;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          font-family: Arial Black, Arial, Helvetica, sans-serif;
          font-size: 14px;
          line-height: 1;
          vertical-align: middle;
        }

        .info-overlay {
          position: fixed;
          inset: 0;
          z-index: 100010;
          padding: 18px;
          background: rgba(0, 0, 0, 0.88);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .info-modal {
          position: relative;
          width: 100%;
          max-width: 520px;
          max-height: calc(100svh - 36px);
          padding: 25px 17px 20px;
          border: 1px solid rgba(64, 126, 255, 0.8);
          background: linear-gradient(180deg, #07142b, #020713);
          overflow-y: auto;
          box-shadow: 0 0 32px rgba(14, 21, 219, 0.55);
        }

        .info-close {
          position: absolute;
          top: 8px;
          right: 9px;
          width: 40px;
          height: 40px;
          border: none;
          background: transparent;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 36px;
          line-height: 36px;
          cursor: pointer;
        }

        .info-title {
          margin: 0 44px 20px 0;
          color: #ffffff;
          font-size: 25px;
          line-height: 1;
        }

        .about-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .about-item {
          margin: 0;
          padding: 14px 13px;
          border-left: 4px solid #0f7dfa;
          background: rgba(255, 255, 255, 0.07);
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.4;
        }

        .member-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .member-item {
          padding: 12px;
          border-left: 4px solid #0f7dfa;
          background: rgba(255, 255, 255, 0.07);
        }

        .member-item h3 {
          margin: 0 0 5px;
          color: #ffffff;
          font-size: 15px;
          line-height: 1.15;
        }

        .member-item p {
          margin: 0;
          color: #dbe7ff;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.35;
        }

        @media (max-width: 767px) {
          .logo-word {
            -webkit-text-stroke: 0.65px currentColor;
            text-shadow:
              0.35px 0 currentColor,
              -0.35px 0 currentColor;
          }
        }

        @media (min-width: 768px) {
          .home-shell {
            max-width: 520px;
            padding-top: 4vh;
            padding-bottom: 38px;
          }

          .badge-button {
            width: 155px;
          }

          .specials {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .special {
            min-height: 52px;
          }
        }

        @media (max-height: 720px) {
          .home-shell {
            padding-bottom: 14px;
            transform: translateY(-14px);
          }

          .badge-button {
            width: 105px;
            margin-bottom: -29px;
          }

          .logo-word {
            font-size: 38px;
          }

          .slogan {
            margin-top: 8px;
            font-size: 19px;
          }

          .coming-soon {
            font-size: 36px;
          }

          .early-message {
            margin-top: 10px;
            font-size: 15px;
          }

          .specials {
            margin-top: 10px;
            gap: 6px;
          }

          .special {
            min-height: 33px;
            padding: 5px 3px;
            font-size: 10px;
          }

          .video-space {
            width: 48px;
            height: 48px;
            margin-top: 11px;
          }

          .cta {
            min-height: 40px;
            font-size: 14px;
          }

          .cta.join {
            font-size: 17px;
          }
        }
      `}</style>

      <section className="home-shell">
        <button
          type="button"
          className="badge-button"
          onClick={() => setShowBadgeInfo(true)}
          aria-label="What does the SUPATALENTED badge represent?"
        >
          <img
            src="/badge/logo-badge.png"
            alt="SUPATALENTED badge"
            className="badge"
          />
        </button>

        <button
          type="button"
          className="logo-word"
          onClick={() => setShowAbout(true)}
          aria-label="What is SUPATALENTED?"
        >
          SUPA<span className="blue">TALENTED</span>
        </button>

        <div className="slogan">
          Be Seen <span className="blue">In Sport</span>
        </div>

        <section className="launch-content">
          <button
            type="button"
            className="coming-soon"
            onClick={() => router.push('/early-access')}
            aria-label="Join the SUPATALENTED waitlist"
          >
            LAUNCHING SOON
          </button>

          <p className="early-message">
            <strong>JOIN THE WAITLIST</strong>
            <br />
            <strong>BEFORE LAUNCH</strong>
            <br />
            <strong>AND BE IN TO WIN PRIZES</strong>
          </p>

          <div className="specials">
            <div className="special">MEMBERSHIP</div>
            <div className="special">MERCHANDISE</div>
            <div className="special">ACCESSORIES</div>
            <div className="special">SUBSCRIPTION</div>
          </div>

          <div className="video-space" aria-hidden="true" />
        </section>

        <div className="cta-wrap">
          <button
            type="button"
            className="cta join"
            onClick={() => router.push('/early-access')}
          >
            JOIN THE WAITLIST HERE
          </button>

          <button
            type="button"
            className="cta member-types"
            onClick={() => setShowMemberTypes(true)}
          >
            <span className="question-mark">?</span>
            MEMBER TYPES
          </button>
        </div>
      </section>

        {showBadgeInfo && (
          <div
            className="info-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="badge-information-title"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setShowBadgeInfo(false)
              }
            }}
          >
            <section className="info-modal">
              <button
                type="button"
                className="info-close"
                onClick={() => setShowBadgeInfo(false)}
                aria-label="Close SUPATALENTED badge information"
              >
                ×
              </button>

              <h2 id="badge-information-title" className="info-title">
                SUPATALENTED
              </h2>

              <p className="about-item">{badgeInformation}</p>
            </section>
          </div>
        )}

      {showAbout && (
        <div
          className="info-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="about-supatalented-title"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowAbout(false)
            }
          }}
        >
          <section className="info-modal">
            <button
              type="button"
              className="info-close"
              onClick={() => setShowAbout(false)}
              aria-label="Close SUPATALENTED information"
            >
              ×
            </button>

            <h2 id="about-supatalented-title" className="info-title">
              WHAT IS SUPATALENTED?
            </h2>

            <div className="about-list">
              {aboutSupatalented.map((sentence) => (
                <p className="about-item" key={sentence}>
                  {sentence}
                </p>
              ))}
            </div>
          </section>
        </div>
      )}

      {showMemberTypes && (
        <div
          className="info-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="member-types-title"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowMemberTypes(false)
            }
          }}
        >
          <section className="info-modal">
            <button
              type="button"
              className="info-close"
              onClick={() => setShowMemberTypes(false)}
              aria-label="Close member types"
            >
              ×
            </button>

            <h2 id="member-types-title" className="info-title">
              MEMBER TYPES
            </h2>

            <div className="member-list">
              {memberTypes.map((member) => (
                <article className="member-item" key={member.title}>
                  <h3>{member.title}</h3>
                  <p>{member.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      )}
    </main>
  )
}