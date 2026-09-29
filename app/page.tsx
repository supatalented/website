'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
export default function HomePage() {
  const router = useRouter()
  const [showPromoVideo, setShowPromoVideo] = useState(false)
  const [showAboutPopup, setShowAboutPopup] = useState(false)
  const [selectedRole, setSelectedRole] = useState<number | null>(null)
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)
  const aboutCloseButtonRef = useRef<HTMLButtonElement>(null)
  const videoCloseButtonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (showAboutPopup) {
      aboutCloseButtonRef.current?.focus()
    }
  }, [showAboutPopup])
  useEffect(() => {
    if (showPromoVideo) {
      videoCloseButtonRef.current?.focus()
    }
  }, [showPromoVideo])
  useEffect(() => {
    if (!showAboutPopup && !showPromoVideo) {
      return
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return
      }
      if (showPromoVideo) {
        setShowPromoVideo(false)
        return
      }
      setShowAboutPopup(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [showAboutPopup, showPromoVideo])
  const openPromoVideo = () => {
    setShowAboutPopup(false)
    setShowPromoVideo(true)
  }
  useEffect(() => {
    const savedPosition = sessionStorage.getItem('supatalented-website-scroll')
    if (savedPosition === null) return
    sessionStorage.removeItem('supatalented-website-scroll')
    const position = Number(savedPosition)
    if (Number.isFinite(position)) {
      requestAnimationFrame(() => window.scrollTo(0, position))
    }
  }, [])
  const openPolicy = (path: string) => {
    sessionStorage.setItem('supatalented-website-scroll', String(window.scrollY))
    router.push(path)
  }
  const roles = [
    { name: 'Athlete', line: 'Show your sport to the world.', detail: 'Put your sporting moments on the Stage and make it easier for people in sport to watch and find you.' },
    { name: 'Sports Coach', line: 'Be found by your sporting community.', detail: 'Share your work and connect within the wider sports community - locally or globally.' },
    { name: 'Sports Academy', line: 'Put your academy on the Stage.', detail: 'Give your academy greater local or global visibility and grow your presence to the wider sports community.' },
    { name: 'Sports Club', line: 'Bring your club into view.', detail: 'Showcase your sporting teams, programs or activities and strengthen your community presence and position.' },
    { name: 'Sports Organisation', line: 'Connect across sport.', detail: 'Grow your presence, your organisation and your sport in local and global communities.' },
    { name: 'Sporting Body', line: 'Be part of the bigger picture.', detail: 'Be present to expand your visibility in the sports industry.' },
    { name: 'Content Creator – Sports', line: 'Create for the sports community.', detail: 'Share sports content and be discovered alongside the people and places you cover.' },
    { name: 'Spectator', line: 'The action is for you too.', detail: 'Discover sporting moments, save what matters and follow the people you care about.' },
  ]
  const features = [
    { number: '01', name: 'Post', line: 'Put your sporting moments on the Stage.', detail: 'Share a sports video so the moments that matter can be seen.' },
    { number: '02', name: 'Watch', line: 'Discover sport from everywhere.', detail: 'Watch, save and share sports videos from your community and beyond.' },
    { number: '03', name: 'Connect', line: 'Find your people in sport.', detail: 'Make friends and connect with the sporting community.' },
    { number: '04', name: 'TEEM', line: 'Bring your group together.', detail: 'Create a private sports group for your people.' },
  ]
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
          background: #ffffff;
          overflow-x: hidden;
        }
        button,
        input,
        textarea,
        select {
          font-family: inherit;
        }
        .home-root {
          width: 100%;
          overflow-x: hidden;
          color: #071126;
          font-family: Arial, Helvetica, sans-serif;
        }
        .home-hero {
          min-height: 100svh;
          display: flex;
          justify-content: center;
          background-color: #071126;
          background-image: url('/home/stadium-home.jpg');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          color: #ffffff;
          font-family: Arial Black, Arial, Helvetica, sans-serif;
        }
        .website-header {
          position: absolute;
          z-index: 20;
          inset: 0 0 auto;
          min-height: 76px;
          padding: 12px clamp(22px, 4vw, 68px);
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 24px;
          background: linear-gradient(180deg, rgba(4, 11, 29, .95), rgba(4, 11, 29, .76));
          border-bottom: 1px solid rgba(138, 179, 255, .33);
          box-shadow: 0 12px 35px rgba(0, 0, 0, .22);
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
        }
        .website-header-brand {
          display: inline-block;
          width: fit-content;
          font-family: 'Arial Black', Arial, sans-serif;
          font-size: clamp(17px, 1.75vw, 23px);
          font-weight: 900;
          letter-spacing: -.055em;
          white-space: nowrap;
          color: #898f90;
        }
        .website-header-brand span { color: #0e15db; }
        .website-nav { display: flex; align-items: center; flex-wrap: wrap; justify-content: flex-end; }
        .website-nav a {
          padding: 8px 16px;
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .11em;
          transition: color .2s, transform .2s;
        }
        .website-nav a + a { border-left: 1px solid rgba(181, 201, 240, .42); }
        .website-nav a:hover { color: #fdfd0e; transform: translateY(-2px); }
        .website-nav .nav-app {
          margin-left: 12px;
          border: 1px solid rgba(255,255,255,.33);
          border-radius: 8px;
          background: linear-gradient(135deg, #2338f7, #0e15db 70%);
          box-shadow: 0 8px 22px rgba(14, 21, 219, .32);
          color: #fdfd0e;
        }
        .website-header a:focus-visible,
        .website-footer button:focus-visible,
        .website-section button:focus-visible,
        .website-section a:focus-visible {
          outline: 3px solid #fdfd0e;
          outline-offset: 4px;
        }
        .home-shell {
          width: 100%;
          max-width: 430px;
          min-height: 100vh;
          padding: 90px 28px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: none;
        }
        .badge {
          width: 160px;
          height: auto;
          margin-bottom: -40px;
          filter: drop-shadow(1px 0 0 #ffffff);
        }
        .logo {
          margin: 0 0 34px;
          color: #898f90;
          text-align: center;
          user-select: none;
        }
        .logo-word {
          display: block;
          color: #898f90;
          font-family: Arial Black, Arial, Helvetica, sans-serif;
          font-size: clamp(48px, 9vw, 58px);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.05em;
          white-space: nowrap;
          -webkit-text-stroke: 0.35px currentColor;
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
        }
        .logo-word .blue {
          color: #0e15db;

        .logo {
            position: relative;
            isolation: isolate;
          }

          .logo::before {
            content: '';
            position: absolute;
            z-index: -1;
            left: 50%;
            top: 50%;
            width: 115%;
            height: 125%;
            transform: translate(-50%, -50%);
            background: radial-gradient(
              ellipse at center,
              rgba(255, 255, 255, 0.88) 0%,
              rgba(255, 255, 255, 0.52) 38%,
              rgba(255, 255, 255, 0) 72%
            );
            filter: blur(12px);
            pointer-events: none;
          }

          .logo-word {
            position: relative;
            filter:
              drop-shadow(0 0 4px rgba(255, 255, 255, 1))
              drop-shadow(0 0 14px rgba(255, 255, 255, 0.95))
              drop-shadow(0 0 30px rgba(255, 255, 255, 0.75));
          }

        }
        .headline-button {
          margin: 0 0 38px;
          padding: 0;
          border: 0;
          background: transparent;
          color: inherit;
          text-align: center;
          cursor: pointer;
          user-select: none;
        }
        .headline-button:active {
          transform: scale(0.99);
        }
        .headline-top {
          display: block;
          color: #ffffff;
          font-size: 46px;
          font-weight: 900;
          line-height: 1;
        }
        .headline-bottom {
          display: block;
          margin-top: 1px;
          color: #0f7dfa;
          font-size: 44px;
          font-weight: 900;
          line-height: 1;
        }
        .play-button {
          width: 82px;
          height: 82px;
          margin-top: 6px;
          margin-bottom: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid rgba(255, 255, 255, 0.9);
          border-radius: 10px;
          background:
            linear-gradient(
              145deg,
              rgba(14, 21, 219, 0.95),
              rgba(3, 8, 80, 0.92)
            );
          box-shadow:
            0 0 0 5px rgba(14, 21, 219, 0.35),
            0 0 22px rgba(10, 18, 251, 0.9),
            inset 0 0 18px rgba(255, 255, 255, 0.22);
          cursor: pointer;
          animation: premiumPulse 2.15s ease-in-out infinite;
        }
        .play-triangle {
          width: 0;
          height: 0;
          margin-left: 7px;
          border-top: 17px solid transparent;
          border-bottom: 17px solid transparent;
          border-left: 25px solid #ffffff;
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
          margin-top: auto;
          margin-bottom: 10px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .cta {
          position: relative;
          width: 100%;
          min-height: 56px;
          padding: 7px 18px;
          overflow: hidden;
          border: 1px solid rgba(47, 118, 255, 0.45);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.13),
              rgba(255, 255, 255, 0.04)
            );
          color: #ffffff;
          backdrop-filter: blur(14px);
          cursor: pointer;
        }
        .cta::before {
          position: absolute;
          top: 50%;
          left: 15px;
          width: 5px;
          height: 24px;
          border-radius: 4px;
          background: #2f76ff;
          box-shadow: 0 0 12px rgba(47, 118, 255, 0.95);
          content: '';
          transform: translateY(-50%);
        }
        .cta.join {
          border-color: #2858ff;
          background:
            linear-gradient(
              180deg,
              rgba(33, 92, 255, 0.95),
              rgba(8, 20, 170, 0.96)
            );
        }
        .cta-title {
          display: block;
          color: #fdfd0e;
          font-size: 21px;
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: 0.05em;
        }
        .about-overlay {
          position: fixed;
          inset: 0;
          z-index: 99998;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: rgba(0, 0, 0, 0.78);
          backdrop-filter: blur(7px);
        }
        .about-popup {
          position: relative;
          width: min(100%, 390px);
          padding: 48px 24px 36px;
          border: 1px solid rgba(100, 165, 255, 0.72);
          background: #071126;
          color: #ffffff;
          text-align: center;
          box-shadow:
            0 28px 80px rgba(0, 0, 0, 0.72),
            0 0 42px rgba(14, 21, 219, 0.34);
        }
        .about-lines {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .about-line {
          display: block;
          margin: 0;
          color: #ffffff;
          font-family: Arial Black, Arial, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 900;
          line-height: 1.45;
          text-align: center;
        }
        .about-line-primary {
          color: #0f7dfa;
          font-size: 20px;
        }
        .about-line-gap {
          margin-top: 12px;
        }
        .about-video-cta {
          margin: 16px 0 0;
          padding: 4px 6px;
          border: 0;
          background: transparent;
          color: #fdfd0e;
          font-family: Arial Black, Arial, Helvetica, sans-serif;
          font-size: 20px;
          font-weight: 900;
          line-height: 1.2;
          text-align: center;
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-underline-offset: 5px;
          cursor: pointer;
        }
        .about-video-cta:active {
          transform: scale(0.98);
        }
        .about-close {
          position: absolute;
          top: 8px;
          right: 10px;
          width: 38px;
          height: 38px;
          padding: 0;
          border: none;
          background: transparent;
          color: #ffffff;
          font-size: 34px;
          line-height: 34px;
          cursor: pointer;
        }
        .promo-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000000;
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
          padding: 0;
          border: none;
          background: rgba(0, 0, 0, 0.55);
          color: #ffffff;
          font-size: 44px;
          line-height: 42px;
          cursor: pointer;
        }
        @media (max-width: 767px) {
          .logo-word {
            -webkit-text-stroke: 0.65px currentColor;
            text-shadow:
              0.35px 0 currentColor,
              -0.35px 0 currentColor;
          }
          .about-popup {
            padding-right: 18px;
            padding-left: 18px;
          }
          .about-line {
            font-size: 16px;
          }
          .about-line-primary,
          .about-video-cta {
            font-size: 18px;
          }
        }
        @media (min-width: 768px) {
          .home-shell {
            max-width: 520px;
            padding-top: 4.5vh;
          }
          .play-button {
            width: 86px;
            height: 86px;
          }
          .cta-wrap {
            margin-top: 70px;
          }
        }
        @media (max-height: 720px) {
          .home-shell {
            padding-top: 2vh;
            padding-bottom: 40px;
          }
          .badge {
            width: 120px;
          }
          .logo {
            margin-bottom: 20px;
          }
          .cta {
            min-height: 50px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .play-button {
            animation: none;
          }
        }
        .website-section {
          position: relative;
          overflow: hidden;
          min-height: 90svh;
          padding: clamp(86px, 10vw, 150px) clamp(24px, 5vw, 80px);
          display: flex;
          align-items: center;
          font-family: Arial, Helvetica, sans-serif;
        }
        .website-section .section-inner { position: relative; z-index: 1; width: min(1180px, 100%); margin: 0 auto; }
        .section-eyebrow { margin: 0 0 20px; color: #0e15db; text-transform: uppercase; letter-spacing: .28em; font-size: 12px; font-weight: 900; }
        .website-section h2 { max-width: 950px; margin: 0 0 24px; font-family: 'Arial Black', Arial, sans-serif; font-size: clamp(38px, 6vw, 82px); line-height: 1.02; letter-spacing: -.055em; }
        .website-section p { max-width: 710px; font-size: clamp(17px, 1.8vw, 22px); line-height: 1.55; }
        .website-section h2 span { color: #0e15db; }
        .website-section-two { background: radial-gradient(circle at 89% 10%, #e2eaff, transparent 42%), #f9fbff; color: #071126; }
        .website-section-two::after { content: 'STAGE'; position: absolute; right: -2vw; bottom: 1vw; font-family: 'Arial Black', Arial, sans-serif; font-size: clamp(100px, 22vw, 340px); line-height: 1; letter-spacing: -.09em; color: rgba(14,21,219,.045); pointer-events: none; }
        .stage-layout { display: grid; grid-template-columns: 1.2fr .8fr; align-items: center; gap: clamp(30px, 6vw, 100px); }
        .stage-graphic { position: relative; min-height: 440px; border: 1px solid rgba(100,144,226,.36); border-radius: 32px; background: radial-gradient(circle at 50% 45%, #2039a1, #071126 63%); box-shadow: 0 32px 80px rgba(7,17,38,.24); overflow: hidden; display: grid; place-items: center; }
        .stage-graphic::before, .stage-graphic::after { content: ''; position: absolute; inset: 16%; border: 1px solid rgba(136,179,255,.36); border-radius: 50%; transform: rotate(-22deg) scaleX(1.6); }
        .stage-graphic::after { inset: 27%; transform: rotate(28deg) scaleX(1.8); }
        .stage-core { position: relative; z-index: 1; width: 190px; height: 190px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 2px solid #779cff; background: radial-gradient(circle at 35% 30%, #2663fa, #0e15db 60%, #071126); box-shadow: 0 0 0 20px rgba(58,103,255,.1), 0 0 65px rgba(59,113,255,.7); color: #898f90; font-family: 'Arial Black', Arial, sans-serif; font-size: 19px; letter-spacing: -.05em; }
        .stage-core .brand-blue { color: #0e15db; }
        .stage-core {
          background:
            radial-gradient(
              ellipse 72% 30% at center,
              rgba(255, 255, 255, 0.98) 0%,
              rgba(255, 255, 255, 0.92) 55%,
              rgba(255, 255, 255, 0) 100%
            ),
            radial-gradient(
              circle at 35% 30%,
              #2663fa,
              #0e15db 60%,
              #071126
            );
        }
        .stage-point { position: absolute; z-index: 2; padding: 10px 14px; border: 1px solid rgba(168,200,255,.5); border-radius: 999px; background: rgba(8,21,54,.92); color: #fdfd0e; font-size: 12px; font-weight: 800; box-shadow: 0 10px 25px rgba(0,0,0,.25); }
        .stage-point.one { top: 14%; left: 7%; } .stage-point.two { top: 25%; right: 6%; } .stage-point.three { bottom: 16%; left: 12%; } .stage-point.four { bottom: 12%; right: 10%; }
        .stage-caption { margin-top: 18px; color: #3f4a64; font-size: 13px; line-height: 1.5; }
        .website-section-three { background: linear-gradient(145deg, #0b1736, #071126 64%, #11155b); color: #fff; }
        .website-section-three .section-eyebrow { color: #72b3ff; }
        .website-section-three h2 span { color: #0f7dfa; }
        .website-section-three h2 .brand-grey { color: #898f90; }
        .website-section-three h2 .brand-blue { color: #0e15db; }
        .website-section-three::before { content: ''; position: absolute; width: 550px; height: 550px; right: -160px; top: -210px; border-radius: 50%; border: 1px solid rgba(95,149,255,.3); box-shadow: 0 0 0 70px rgba(53,97,255,.035), 0 0 0 140px rgba(53,97,255,.025); }
        .role-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 14px; margin-top: 48px; }
        .role-card { width: 100%; min-height: 144px; padding: 22px; border: 1px solid rgba(119,166,255,.35); border-radius: 17px; background: linear-gradient(150deg, rgba(33,57,108,.95), rgba(10,24,56,.9)); color: #fff; text-align: left; cursor: pointer; box-shadow: 0 16px 30px rgba(0,0,0,.18); transition: transform .2s, border-color .2s, box-shadow .2s; }
        .role-card:hover, .role-card.active { transform: translateY(-5px); border-color: #69a6ff; box-shadow: 0 22px 38px rgba(0,0,0,.32), inset 0 0 25px rgba(45,88,245,.14); }
        .role-index { display: block; margin-bottom: 18px; color: #68aaff; font-size: 12px; font-weight: 900; letter-spacing: .12em; }
        .role-name { display: block; font-size: clamp(15px,1.4vw,19px); font-weight: 900; line-height: 1.2; }
        .role-more { display: block; margin-top: 13px; color: #b9cef9; font-size: 12px; }
        .detail-panel { margin-top: 18px; padding: 22px 26px; border-left: 4px solid #fdfd0e; border-radius: 0 14px 14px 0; background: rgba(81,122,240,.16); color: #fff; line-height: 1.5; }
        .detail-panel strong { display: block; margin-bottom: 5px; color: #fdfd0e; font-size: 18px; }
        .website-section-four { background: radial-gradient(circle at 0 100%, #dce8ff, transparent 48%), #f4f7fd; color: #071126; }
        .feature-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 16px; margin-top: 46px; }
        .feature-card { width: 100%; min-height: 240px; padding: 24px; border: 1px solid #c6d6f1; border-radius: 20px; background: linear-gradient(155deg,#fff,#eaf1ff); color: #071126; text-align: left; cursor: pointer; box-shadow: 0 18px 42px rgba(11,37,89,.1); transition: transform .2s, box-shadow .2s; }
        .feature-card:hover, .feature-card.active { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(14,21,219,.18); }
        .feature-number { display: block; margin-bottom: 38px; color: #0e15db; font-family: 'Arial Black', Arial, sans-serif; font-size: 36px; }
        .feature-name { display: block; margin-bottom: 10px; font-size: 23px; font-weight: 900; }
        .feature-line { display: block; color: #46516a; font-size: 15px; line-height: 1.45; }
        .website-section-four .detail-panel { background: #e3edff; color: #071126; border-color: #0e15db; }
        .website-section-four .detail-panel strong { color: #0e15db; }
        .website-action { display: inline-flex; align-items: center; justify-content: center; margin-top: 36px; padding: 16px 24px; border-radius: 9px; background: linear-gradient(135deg,#253eff,#0e15db); box-shadow: 0 14px 28px rgba(14,21,219,.25); color: #fdfd0e; font-weight: 900; letter-spacing: .04em; text-decoration: none; }
        .website-action:hover { transform: translateY(-2px); }
        .website-footer { padding: 42px clamp(24px,5vw,80px); background: #071126; border-top: 3px solid #0e15db; color: #fff; font-family: Arial, Helvetica, sans-serif; }
        .footer-inner { width: min(1180px,100%); margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; }
        .footer-company { font-size: 14px; font-weight: 800; line-height: 1.6; }
        .footer-company strong { display: block; color: #898f90; font-family: 'Arial Black',Arial,sans-serif; font-size: 19px; }
        .footer-company strong .brand-blue { color: #0e15db; }
        .footer-links { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; }
        .website-footer button { padding: 9px 12px; border: 0; border-radius: 5px; background: transparent; color: #d6e4ff; font-size: 13px; font-weight: 800; cursor: pointer; }
        .website-footer button:hover { color: #fdfd0e; background: rgba(255,255,255,.08); }
        .back-top { display: inline-flex; align-items: center; gap: 9px; }
        .back-top svg { width: 16px; height: 16px; }
        @media (max-width: 900px) {
          .stage-layout { grid-template-columns: 1fr; }
          .stage-graphic { min-height: 360px; }
          .role-grid, .feature-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
        }
        @media (max-width: 760px) {
          .website-header { grid-template-columns: 1fr; justify-items: center; gap: 6px; padding: 12px 14px; }
          .website-nav { justify-content: center; }
          .website-nav a { padding: 6px 8px; font-size: 10px; }
          .website-nav .nav-app { margin-left: 5px; }
          .stage-graphic { min-height: 310px; }
          .stage-core { width: 140px; height: 140px; font-size: 16px; }
          .stage-point { font-size: 10px; padding: 8px; }
        }
        @media (max-width: 520px) {
          .website-nav a { font-size: 9px; padding: 6px 5px; letter-spacing: .025em; }
          .role-grid, .feature-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
          .role-card { min-height: 125px; padding: 15px; }
          .feature-card { min-height: 205px; padding: 16px; }
          .feature-number { margin-bottom: 28px; font-size: 28px; }
          .feature-name { font-size: 19px; }
          .footer-inner { align-items: flex-start; }
        }
        .home-hero .home-shell { padding-top: 100px; }
        @media (max-width: 760px) { .home-hero .home-shell { padding-top: 138px; } }
      `}</style>
      <header className="website-header">
        <div className="website-header-brand" aria-label="SUPATALENTED">SUPA<span>TALENTED</span></div>
        <nav className="website-nav" aria-label="Website navigation">
          <a href="#home">HOME</a>
          <a href="#global-stage">THE STAGE</a>
          <a href="#everyone">EVERYONE</a>
          <a href="#be-seen">BE SEEN</a>
          <a className="nav-app" href="https://supatalented-gamma.vercel.app">GET THE APP</a>
        </nav>
      </header>
      <div className="home-hero" id="home">
      <section className="home-shell">
        <img
          src="/badge/logo-badge.png"
          alt="Supatalented diamond badge"
          className="badge"
        />
        <div className="logo" aria-label="SUPATALENTED">
          <span className="logo-word">
            SUPA<span className="blue">TALENTED</span>
          </span>
        </div>
        <button
          type="button"
          className="headline-button"
          aria-label="About SUPATALENTED"
          aria-haspopup="dialog"
          onClick={() => setShowAboutPopup(true)}
        >
          <span className="headline-top">BE SEEN</span>
          <span className="headline-bottom">IN SPORT</span>
        </button>
        <button
          type="button"
          className="play-button"
          aria-label="Watch the SUPATALENTED video"
          onClick={() => setShowPromoVideo(true)}
        >
          <span className="play-triangle" aria-hidden="true" />
        </button>
        <div className="cta-wrap">
          <button
            type="button"
            className="cta"
            onClick={() => window.location.assign('https://supatalented-gamma.vercel.app')}
          >
            <span className="cta-title">GET THE APP</span>
          </button>
        </div>
      </section>
      </div>
      <section className="website-section website-section-two" id="global-stage">
        <div className="section-inner stage-layout">
          <div>
            <div className="section-eyebrow">02 / OUR STAGE</div>
            <h2>THE GLOBAL STAGE<br />FOR <span>LOCAL SPORT.</span></h2>
            <p>Every sporting journey starts somewhere. SUPATALENTED gives people in and around sport a place to be seen, found and connected.</p>
            <a className="website-action" href="#everyone">WHO IT'S FOR... <span aria-hidden="true">&nbsp;→</span></a>
          </div>
          <div>
            <div className="stage-graphic" aria-label="Local sport connected on a global stage">
              <span className="stage-point one">LOCAL SPORT</span>
              <span className="stage-point two">BE SEEN</span>
              <span className="stage-point three">BE FOUND</span>
              <span className="stage-point four">CONNECT</span>
              <div className="stage-core">SUPA<span className="brand-blue">TALENTED</span></div>
            </div>
            <div className="stage-caption">From a local moment to a global sporting community.</div>
          </div>
        </div>
      </section>

      <section className="website-section website-section-three" id="everyone">
        <div className="section-inner">
          <div className="section-eyebrow">03 / YOUR PLACE IN SPORT</div>
          <h2><span className="brand-grey">SUPA</span><span className="brand-blue">TALENTED</span> is for <span>EVERYONE.</span></h2>
          <p>Whatever your place in sport is, there is a place for you here. Select a role to see more.</p>
          <div className="role-grid">
            {roles.map((role, index) => (
              <button
                className={`role-card${selectedRole === index ? ' active' : ''}`}
                key={role.name}
                type="button"
                aria-expanded={selectedRole === index}
                onClick={() => setSelectedRole(selectedRole === index ? null : index)}
              >
                <span className="role-index">{String(index + 1).padStart(2, '0')} / 08</span>
                <span className="role-name">{role.name}</span>
                <span className="role-more">{selectedRole === index ? 'CLOSE −' : 'EXPLORE +'}</span>
              </button>
            ))}
          </div>
          {selectedRole !== null && (
            <div className="detail-panel" role="status">
              <strong>{roles[selectedRole].line}</strong>
              {roles[selectedRole].detail}
            </div>
          )}
        </div>
      </section>

      <section className="website-section website-section-four" id="be-seen">
        <div className="section-inner">
          <div className="section-eyebrow">04 / ALL IN ONE PLACE</div>
          <h2>BE SEEN IN SPORT.<br /><span>FIND YOUR PEOPLE.</span></h2>
          <p>Share the action. Discover sporting moments. Connect with the people who make sport what it is.</p>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <button
                className={`feature-card${selectedFeature === index ? ' active' : ''}`}
                key={feature.name}
                type="button"
                aria-expanded={selectedFeature === index}
                onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
              >
                <span className="feature-number">{feature.number}</span>
                <span className="feature-name">{feature.name}</span>
                <span className="feature-line">{feature.line}</span>
              </button>
            ))}
          </div>
          {selectedFeature !== null && (
            <div className="detail-panel" role="status">
              <strong>{features[selectedFeature].name}</strong>
              {features[selectedFeature].detail}
            </div>
          )}
          <a className="website-action" href="https://supatalented-gamma.vercel.app">GET THE APP <span aria-hidden="true">&nbsp;↗</span></a>
        </div>
      </section>

      <footer className="website-footer">
        <div className="footer-inner">
          <div className="footer-company"><strong>SUPA<span className="brand-blue">TALENTED</span></strong>Supatalented Pty Ltd</div>
          <nav className="footer-links" aria-label="Policies and page navigation">
            <button type="button" onClick={() => openPolicy('/terms')}>Terms</button>
            <button type="button" onClick={() => openPolicy('/privacy')}>Privacy</button>
            <button type="button" onClick={() => openPolicy('/community-rules')}>Community Rules</button>
            <button className="back-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 14 7-7 7 7M12 7v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              BACK TO TOP
            </button>
          </nav>
        </div>
      </footer>
      {showAboutPopup && (
        <div
          className="about-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowAboutPopup(false)
            }
          }}
        >
          <section
            className="about-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="home-about-title"
          >
            <button
              ref={aboutCloseButtonRef}
              type="button"
              className="about-close"
              aria-label="Close"
              onClick={() => setShowAboutPopup(false)}
            >
              ×
            </button>
            <div className="about-lines">
              <span
                id="home-about-title"
                className="about-line about-line-primary"
              >
                SUPATALENTED is for EVERYONE.
              </span>
              <span className="about-line">
                Your Sports Industry HUB.
              </span>
              <span className="about-line about-line-gap">
                Post Sports Videos.
              </span>
              <span className="about-line">
                Watch, Save &amp; Share them.
              </span>
              <span className="about-line">
                Make Friends In Sport.
              </span>
              <span className="about-line">
                Create Private Sports Groups.
              </span>
              <span className="about-line">
                Fun. Easy. Safe. FREE.
              </span>
              <button
                type="button"
                className="about-video-cta"
                onClick={openPromoVideo}
              >
                ALL IN ONE PLACE
              </button>
            </div>
          </section>
        </div>
      )}
      {showPromoVideo && (
        <div className="promo-overlay" role="dialog" aria-modal="true">
          <button
            ref={videoCloseButtonRef}
            type="button"
            className="promo-close"
            aria-label="Close video"
            onClick={() => setShowPromoVideo(false)}
          >
            ×
          </button>
          <video
            className="promo-video"
            controls
            autoPlay
            playsInline
            preload="metadata"
          >
            <source src="/videos/beseen.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>
      )}
    </main>
  )
}
