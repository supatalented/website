'use client'

import { useRouter } from 'next/navigation'

export default function ComingSoonPage() {
  const router = useRouter()

  const goBack = () => {
    if (sessionStorage.getItem('supatalented-website-scroll') !== null) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <main className="coming-soon-page">
      <style>{`
        .coming-soon-page,
        .coming-soon-page * { box-sizing: border-box; }
        .coming-soon-page {
          min-height: 100svh;
          padding: max(32px, env(safe-area-inset-top, 0px)) 24px max(32px, env(safe-area-inset-bottom, 0px));
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 50% 20%, #182b72 0%, #071126 58%);
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
        }
        .coming-soon-card {
          width: min(100%, 640px);
          padding: clamp(32px, 7vw, 64px);
          border: 1px solid rgba(111, 158, 255, .55);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(22, 43, 96, .9), rgba(7, 17, 38, .96));
          box-shadow: 0 28px 80px rgba(0, 0, 0, .4), 0 0 60px rgba(14, 21, 219, .15);
          text-align: center;
        }
        .coming-soon-brand {
          margin: 0 0 44px;
          color: #898f90;
          font-family: 'Arial Black', Arial, sans-serif;
          font-size: clamp(25px, 7vw, 44px);
          font-weight: 900;
          letter-spacing: -.055em;
          white-space: nowrap;
        }
        .coming-soon-brand span { color: #0e15db; }
        .coming-soon-eyebrow {
          margin: 0 0 12px;
          color: #0f7dfa;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: .22em;
        }
        .coming-soon-title {
          margin: 0 0 20px;
          color: #fdfd0e;
          font-family: 'Arial Black', Arial, sans-serif;
          font-size: clamp(38px, 9vw, 72px);
          line-height: 1.05;
        }
        .coming-soon-copy {
          max-width: 480px;
          margin: 0 auto 34px;
          color: #e4ecff;
          font-size: clamp(17px, 3vw, 20px);
          line-height: 1.6;
        }
        .coming-soon-back {
          padding: 14px 22px;
          border: 1px solid rgba(255, 255, 255, .35);
          border-radius: 9px;
          background: linear-gradient(135deg, #253eff, #0e15db);
          box-shadow: 0 12px 28px rgba(14, 21, 219, .28);
          color: #fdfd0e;
          font-size: 14px;
          font-weight: 900;
          cursor: pointer;
        }
        .coming-soon-back:focus-visible { outline: 3px solid #fdfd0e; outline-offset: 4px; }
      `}</style>
      <section className="coming-soon-card" aria-labelledby="coming-soon-title">
        <div className="coming-soon-brand" aria-label="SUPATALENTED">
          SUPA<span>TALENTED</span>
        </div>
        <p className="coming-soon-eyebrow">THE APP</p>
        <h1 id="coming-soon-title" className="coming-soon-title">COMING SOON</h1>
        <p className="coming-soon-copy">
          SUPATALENTED is being prepared for release and will be available on the App Store soon.
        </p>
        <button className="coming-soon-back" type="button" onClick={goBack}>
          BACK TO WEBSITE
        </button>
      </section>
    </main>
  )
}
