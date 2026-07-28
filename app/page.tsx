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
      'An organisation that supports, develops, delivers or promotes sport, athletes or sporting communities.',
  },
  {
    title: 'Sporting Body',
    description:
      'A governing, administrative or representative body responsible for overseeing a sport, competition or region.',
  },
  {
    title: 'Sports Content Creator',
    description:
      'A person or organisation creating sports videos, interviews, podcasts, stories, news or entertainment.',
  },
  {
    title: 'Spectator',
    description:
      'A parent, coach, club representative, business, supporter or other person who wants to watch and explore sport.',
  },
]

export default function HomePage() {
  const router = useRouter()

  const [showPromoVideo, setShowPromoVideo] = useState(false)
  const [showMemberTypes, setShowMemberTypes] = useState(false)

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

        .badge {
          width: 140px;
          height: auto;
          margin-bottom: -36px;
          filter: drop-shadow(1px 0 0 #ffffff);
        }

        .logo-word {
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
        }

        .logo-word .blue {
          color: #0e15db;
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
          margin-top: auto;
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
          text-shadow:
            0 0 12px rgba(14, 21, 219, 0.95),
            0 3px 8px rgba(0, 0, 0, 0.9);
        }

        .early-message {
          max-width: 360px;
          margin: 18px 0 0;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 19px;
          font-weight: 800;
          line-height: 1.25;
          text-shadow: 0 2px 5px rgba(0, 0, 0, 0.95);
        }

        .early-message strong {
          color: #FFFFFF;
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

        .play-wrap {
          width: 62px;
          height: 62px;
          border-radius: 10px;
          border: 3px solid rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
          background: linear-gradient(
            145deg,
            rgba(14, 21, 219, 0.95),
            rgba(3, 8, 80, 0.92)
          );
          cursor: pointer;
          animation: premiumPulse 2.15s ease-in-out infinite;
          box-shadow:
            0 0 0 4px rgba(14, 21, 219, 0.35),
            0 0 18px rgba(10, 18, 251, 0.9),
            inset 0 0 14px rgba(255, 255, 255, 0.22);
        }

        .play-triangle {
          width: 0;
          height: 0;
          border-top: 13px solid transparent;
          border-bottom: 13px solid transparent;
          border-left: 20px solid #ffffff;
          margin-left: 5px;
        }

        @keyframes premiumPulse {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.075);
          }
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

        .promo-overlay {
          position: fixed;
          inset: 0;
          background: #000000;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .promo-video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #000000;
        }

        .promo-close {
          position: fixed;
          top: 22px;
          right: 24px;
          z-index: 100001;
          width: 48px;
          height: 48px;
          border: none;
          background: rgba(0, 0, 0, 0.55);
          color: #ffffff;
          font-size: 44px;
          line-height: 42px;
          cursor: pointer;
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

          .badge {
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

          .badge {
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

          .play-wrap {
            width: 48px;
            height: 48px;
            margin-top: 11px;
          }

          .play-triangle {
            border-top-width: 10px;
            border-bottom-width: 10px;
            border-left-width: 16px;
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
        <img
          src="/badge/logo-badge.png"
          alt="SUPATALENTED badge"
          className="badge"
        />

        <div className="logo-word">
          SUPA<span className="blue">TALENTED</span>
        </div>

        <div className="slogan">
          Be Seen <span className="blue">In Sport</span>
        </div>

        <section className="launch-content">
          <h1 className="coming-soon">COMING SOON</h1>

          <p className="early-message">
            <strong>REGISTER NOW</strong>
            <br />
            <strong>GET YOUR EARLY-BIRD FREEBIES</strong>
          </p>

          <div className="specials">
            <div className="special">FREE MEMBERSHIP</div>
            <div className="special">FREE BADGE</div>
            <div className="special">FREE CAP</div>
            <div className="special">SPECIAL ACCESS</div>
          </div>

          <button
            type="button"
            className="play-wrap"
            aria-label="Watch SUPATALENTED video"
            onClick={() => setShowPromoVideo(true)}
          >
            <span className="play-triangle" />
          </button>
        </section>

        <div className="cta-wrap">
          <button
            type="button"
            className="cta join"
            onClick={() => router.push('/early-access')}
          >
            JOIN EARLY
          </button>

          <button
            type="button"
            className="cta"
            onClick={() => setShowMemberTypes(true)}
          >
            <span className="question-mark">?</span>
            MEMBER TYPES
          </button>
        </div>
      </section>

      {showPromoVideo && (
        <div
          className="promo-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="SUPATALENTED promotional video"
        >
          <button
            type="button"
            className="promo-close"
            onClick={() => setShowPromoVideo(false)}
            aria-label="Close promotional video"
          >
            ×
          </button>

          <video
            className="promo-video"
            autoPlay
            controls
            playsInline
            preload="metadata"
            onEnded={() => setShowPromoVideo(false)}
          >
            <source src="/videos/beseen.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>
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