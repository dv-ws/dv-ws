import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const GCSS = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Syne:wght@400;600;700;800&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{background:#000;color:#fff;font-family:'DM Sans',sans-serif;font-weight:300;overflow-x:hidden;cursor:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}

/* CURSOR */
.dvc{position:fixed;top:0;left:0;z-index:9999;pointer-events:none;}
.dvc-dot{width:5px;height:5px;background:#fff;border-radius:50%;transform:translate(-50%,-50%);position:absolute;}
.dvc-ring{width:28px;height:28px;border:1px solid rgba(255,255,255,0.4);border-radius:50%;transform:translate(-50%,-50%);transition:all 0.2s ease;position:absolute;}
.dvc-ring.h{transform:translate(-50%,-50%) scale(2.2);border-color:rgba(255,255,255,0.85);}

/* NAV */
.dv-nav{position:fixed;top:0;left:0;right:0;z-index:500;display:flex;align-items:center;justify-content:space-between;padding:20px 48px;transition:all 0.5s cubic-bezier(0.4,0,0.2,1);}
.dv-nav.solid{background:rgba(0,0,0,0.92);backdrop-filter:blur(28px) saturate(180%);-webkit-backdrop-filter:blur(28px) saturate(180%);padding:13px 48px;border-bottom:1px solid rgba(255,255,255,0.07);}
.dv-logo{display:flex;align-items:center;text-decoration:none;cursor:pointer;flex-shrink:0;}
.dv-logo img{height:72px;width:140px;object-fit:contain;filter:brightness(1.15);transition:all 0.4s ease;display:block;}
.dv-nav.solid .dv-logo img{height:52px;width:105px;}
.dv-nl{display:flex;gap:28px;list-style:none;}
.dv-nl a{color:rgba(255,255,255,0.45);text-decoration:none;font-size:0.73rem;letter-spacing:0.1em;text-transform:uppercase;transition:color 0.3s;cursor:pointer;}
.dv-nl a:hover,.dv-nl a.act{color:#fff;}
.dv-nr{display:flex;align-items:center;gap:12px;}
.dv-cta{background:transparent;border:1px solid rgba(255,255,255,0.2);color:#fff;padding:9px 20px;font-family:'DM Sans',sans-serif;font-size:0.7rem;letter-spacing:0.12em;text-transform:uppercase;cursor:pointer;transition:all 0.3s;text-decoration:none;display:inline-block;}
.dv-cta:hover{background:#fff;color:#000;}

/* BURGER */
.dv-bg{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:8px;background:none;border:none;z-index:600;}
.dv-bg span{display:block;width:20px;height:1px;background:#fff;transition:all 0.35s ease;}
.dv-bg.open span:nth-child(1){transform:translateY(6px) rotate(45deg);}
.dv-bg.open span:nth-child(2){opacity:0;}
.dv-bg.open span:nth-child(3){transform:translateY(-6px) rotate(-45deg);}

/* MOBILE MENU */
.dv-mob{position:fixed;inset:0;z-index:550;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;transform:translateX(100%);transition:transform 0.48s cubic-bezier(0.4,0,0.2,1);}
.dv-mob.open{transform:translateX(0);}
.dv-mob a{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,8vw,3.2rem);color:rgba(255,255,255,0.38);text-decoration:none;letter-spacing:0.06em;transition:color 0.3s;}
.dv-mob a:hover{color:#fff;}
.dv-mob .mob-cta{font-family:'DM Sans',sans-serif;font-size:0.8rem;border:1px solid rgba(255,255,255,0.2);padding:13px 28px;letter-spacing:0.12em;text-transform:uppercase;color:#fff;margin-top:6px;}

/* ══════════════════════════════════════════
   VIDEO SYSTEM
   Landscape: standard object-fit cover
   Portrait: contained or centered-fill depending on context
══════════════════════════════════════════ */
.dv-hero{position:relative;width:100%;height:100vh;min-height:600px;overflow:hidden;display:flex;flex-direction:column;}
.dv-half{position:relative;width:100%;height:60vh;min-height:380px;overflow:hidden;display:flex;flex-direction:column;}
.dv-strip{position:relative;width:100%;height:44vh;min-height:260px;overflow:hidden;display:flex;flex-direction:column;}
.vid-land{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center center;z-index:0;}
.vid-port{position:absolute;top:0;left:50%;transform:translateX(-50%);height:100%;width:auto;min-width:100%;object-fit:cover;object-position:center top;z-index:0;}
.ov-d{position:absolute;inset:0;background:rgba(0,0,0,0.54);z-index:1;}
.ov-b{position:absolute;inset:0;background:linear-gradient(to top,#000 0%,rgba(0,0,0,0.3) 38%,transparent 100%);z-index:2;}
.ov-r{position:absolute;inset:0;background:linear-gradient(to right,rgba(0,0,0,0.82) 0%,rgba(0,0,0,0.35) 55%,transparent 100%);z-index:2;}
.ov-s{position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.055) 3px,rgba(0,0,0,0.055) 4px);pointer-events:none;z-index:3;}

/* ══════════════════════════════════════════
   HERO CONTENT — DEFINITIVE NAVBAR FIX

   The problem: clamp(4rem,11vw,11rem) at 1440px = 158px/line
   Three lines = 474px+ growing UPWARD from bottom, hitting nav.

   Solution:
   1. Cap font at 7rem max (safe for 3 lines at any viewport)
   2. Use max-height:45vh on the text block — if text exceeds
      45% of viewport height it stays contained in lower half
   3. padding-bottom:88px keeps text off the very bottom edge
   
   justify-content:flex-end anchors text to BOTTOM always.
   Text grows UP from bottom — never touches nav at top.
══════════════════════════════════════════ */
.dv-hc{
  position:absolute;inset:0;z-index:10;
  display:flex;flex-direction:column;justify-content:flex-end;
  padding:0 48px 88px 48px;
}
.dv-hc-half{position:absolute;inset:0;z-index:10;display:flex;flex-direction:column;justify-content:flex-end;padding:0 48px 56px 48px;}
.dv-hc-strip{position:absolute;inset:0;z-index:10;display:flex;flex-direction:column;justify-content:center;padding:0 48px;}

/* ══════════════════════════════════════════
   TYPOGRAPHY
   
   dv-h1: capped at 7rem — safe for 3-line hero on any desktop.
   At 1440px: 3 lines × 7rem × 0.9 lineheight = ~378px
   viewport = 900px → text block is 42% of viewport = safe bottom zone
══════════════════════════════════════════ */
.dv-ey{font-size:0.64rem;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.36);margin-bottom:18px;display:flex;align-items:center;gap:12px;}
.dv-ey::before{content:'';width:22px;height:1px;background:rgba(255,255,255,0.28);}
.dv-ey.c{justify-content:center;}
.dv-ey.c::before{display:none;}

.dv-h1{
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(3.2rem,5.5vw,7rem);
  line-height:0.9;letter-spacing:0.01em;color:#fff;
}
.dv-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.6rem,5vw,6.5rem);line-height:0.9;letter-spacing:0.01em;color:#fff;}
.dv-h3{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,3.5vw,4.2rem);line-height:0.92;letter-spacing:0.01em;color:#fff;}
.dv-dim{color:rgba(255,255,255,0.2);}
.dv-sub{font-size:clamp(0.82rem,1.2vw,0.96rem);color:rgba(255,255,255,0.42);max-width:480px;line-height:1.88;margin-top:18px;margin-bottom:26px;}
.dv-body{font-size:clamp(0.82rem,1.2vw,0.96rem);color:rgba(255,255,255,0.4);line-height:1.88;max-width:540px;}
.dv-body strong{color:rgba(255,255,255,0.74);font-weight:400;}

/* BUTTONS — compact Apple pill */
.dv-btns{display:flex;gap:10px;flex-wrap:wrap;margin-top:6px;}
.btn-w{background:#fff;color:#000;font-family:'DM Sans',sans-serif;font-weight:500;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;padding:10px 20px;border:none;cursor:pointer;transition:all 0.32s cubic-bezier(0.4,0,0.2,1);text-decoration:none;display:inline-flex;align-items:center;gap:7px;border-radius:980px;white-space:nowrap;}
.btn-w:hover{background:rgba(255,255,255,0.86);transform:scale(1.02);}
.btn-o{background:rgba(255,255,255,0.08);color:#fff;font-family:'DM Sans',sans-serif;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;padding:10px 20px;border:1px solid rgba(255,255,255,0.2);cursor:pointer;transition:all 0.32s cubic-bezier(0.4,0,0.2,1);text-decoration:none;display:inline-flex;align-items:center;gap:7px;border-radius:980px;white-space:nowrap;}
.btn-o:hover{background:rgba(255,255,255,0.14);border-color:rgba(255,255,255,0.48);}

/* SCROLL INDICATOR */
.dv-sc{position:absolute;bottom:28px;right:48px;z-index:10;display:flex;flex-direction:column;align-items:center;gap:7px;color:rgba(255,255,255,0.22);font-size:0.56rem;letter-spacing:0.18em;text-transform:uppercase;}
.dv-sc-line{width:1px;height:36px;background:linear-gradient(to bottom,rgba(255,255,255,0.28),transparent);animation:scl 2s ease-in-out infinite;}
@keyframes scl{0%{transform:scaleY(0);transform-origin:top;}50%{transform:scaleY(1);transform-origin:top;}51%{transform:scaleY(1);transform-origin:bottom;}100%{transform:scaleY(0);transform-origin:bottom;}}

/* BLACK SECTIONS */
.blk{background:#000;position:relative;z-index:1;}
.dv-in{max-width:1400px;margin:0 auto;padding:0 48px;}

/* MARQUEE */
.dv-mw{overflow:hidden;border-top:1px solid rgba(255,255,255,0.07);border-bottom:1px solid rgba(255,255,255,0.07);padding:15px 0;background:#000;}
.dv-mt{display:flex;width:max-content;animation:mqs 36s linear infinite;}
.dv-mi{padding:0 30px;font-size:0.6rem;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.15);white-space:nowrap;display:flex;align-items:center;gap:30px;}
.dv-mi::after{content:'◆';font-size:0.3rem;color:rgba(255,255,255,0.1);}
@keyframes mqs{from{transform:translateX(0);}to{transform:translateX(-50%);}}

/* STAT ROW */
.dv-sr{display:flex;border-top:1px solid rgba(255,255,255,0.07);}
.dv-st{flex:1;padding:44px 36px;border-right:1px solid rgba(255,255,255,0.07);transition:background 0.4s;}
.dv-st:last-child{border-right:none;}
.dv-st:hover{background:rgba(255,255,255,0.024);}
.dv-sn{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.5rem,5vw,5rem);color:#fff;line-height:1;}
.dv-sl{font-size:0.66rem;color:rgba(255,255,255,0.26);letter-spacing:0.15em;text-transform:uppercase;margin-top:8px;}

/* TWO COLUMN */
.dv-2c{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid rgba(255,255,255,0.07);}
.dv-2c-l{border-right:1px solid rgba(255,255,255,0.07);}

/* REVEAL */
.rv{opacity:0;transform:translateY(22px);transition:opacity 0.9s cubic-bezier(0.25,0.46,0.45,0.94),transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94);}
.rv.in{opacity:1;transform:translateY(0);}
.rv-l{opacity:0;transform:translateX(-22px);transition:opacity 0.9s cubic-bezier(0.25,0.46,0.45,0.94),transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94);}
.rv-l.in{opacity:1;transform:translateX(0);}
.rv-r{opacity:0;transform:translateX(22px);transition:opacity 0.9s cubic-bezier(0.25,0.46,0.45,0.94),transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94);}
.rv-r.in{opacity:1;transform:translateX(0);}
.rv-s{opacity:0;transform:scale(0.97);transition:opacity 1s cubic-bezier(0.25,0.46,0.45,0.94),transform 1s cubic-bezier(0.25,0.46,0.45,0.94);}
.rv-s.in{opacity:1;transform:scale(1);}

/* FOOTER — simplified */
.dv-ft{border-top:1px solid rgba(255,255,255,0.07);padding:52px 48px;background:#000;}
.dv-ft-in{max-width:1400px;margin:0 auto;}
.dv-ft-bot{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px;}
.dv-ft-brand{display:flex;align-items:center;gap:24px;flex-wrap:wrap;}
.dv-ft-brand img{height:68px;width:136px;object-fit:contain;filter:brightness(1.1);display:block;}
.dv-ft-tag{font-size:0.74rem;color:rgba(255,255,255,0.18);line-height:1.6;max-width:280px;}
.dv-ft-right{display:flex;align-items:center;gap:32px;flex-wrap:wrap;}
.dv-ft-copy{font-size:0.68rem;color:rgba(255,255,255,0.16);letter-spacing:0.04em;}
.dv-ft-socs{display:flex;gap:10px;}
.dv-ft-soc{width:34px;height:34px;border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.24);text-decoration:none;transition:all 0.3s;border-radius:50%;}
.dv-ft-soc:hover{border-color:rgba(255,255,255,0.5);color:#fff;}

/* RESPONSIVE */
@media(max-width:900px){
  .dv-nav{padding:14px 20px;}
  .dv-nav.solid{padding:10px 20px;}
  .dv-logo img{height:56px;width:112px;}
  .dv-nav.solid .dv-logo img{height:44px;width:90px;}
  .dv-nl{display:none;}
  .dv-nr .dv-cta{display:none;}
  .dv-bg{display:flex;}
  .dv-hc{padding:0 20px 64px 20px;}
  .dv-hc-half{padding:0 20px 44px 20px;}
  .dv-hc-strip{padding:0 20px;}
  .dv-sc{right:20px;}
  .dv-in{padding:0 20px;}
  .dv-2c{grid-template-columns:1fr;}
  .dv-2c-l{border-right:none;border-bottom:1px solid rgba(255,255,255,0.07);}
  .dv-sr{flex-wrap:wrap;}
  .dv-st{min-width:50%;border-bottom:1px solid rgba(255,255,255,0.07);}
  .dv-ft{padding:36px 20px;}
  .dv-ft-bot{flex-direction:column;align-items:flex-start;gap:20px;}
  .dv-ft-brand{flex-direction:column;align-items:flex-start;gap:12px;}
  .dv-ft-right{gap:20px;}
}
@media(max-width:480px){
  .dv-logo img{height:48px;width:96px;}
  .dv-nav.solid .dv-logo img{height:38px;width:78px;}
  .dv-ft-brand img{height:56px;width:112px;}
  .dv-st{min-width:100%;}
}
`;

const LI = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const IG = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;

const MQ_ITEMS = ["Data Collection","Pipeline Architecture","Real-Time Processing","Intelligent Structuring","Scalable Platforms","Decision Intelligence","Data Reliability","Actionable Insights","AGI Training Data","RLHF Datasets","Human Feedback","Multimodal AI","Benchmark Evals","SFT Datasets","RL Environments","Embodied AI","Robotics Data","Agentic Systems"];

export function Marquee() {
  const all = [...MQ_ITEMS,...MQ_ITEMS];
  return <div className="dv-mw"><div className="dv-mt">{all.map((x,i)=><span key={i} className="dv-mi">{x}</span>)}</div></div>;
}

/* Footer — simplified: just logo + tagline + socials + copyright */
export function Footer() {
  return (
    <footer className="dv-ft">
      <div className="dv-ft-in">
        <div className="dv-ft-bot">
          <div className="dv-ft-brand">
            <img src="/logo.png" alt="DataVale AI"/>
            <p className="dv-ft-tag">From data to decision. Powering the AI economy with human intelligence, at global scale.</p>
          </div>
          <div className="dv-ft-right">
            <div className="dv-ft-copy">© 2026 DataVale AI. All rights reserved.</div>
            <div className="dv-ft-socs">
              <a href="https://www.linkedin.com/company/datavaleai" target="_blank" rel="noreferrer" className="dv-ft-soc"><LI/></a>
              <a href="https://www.instagram.com/datavaleai" target="_blank" rel="noreferrer" className="dv-ft-soc"><IG/></a>
              <a href="mailto:info@datavaleai.com" className="dv-ft-soc">✉</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn); fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { document.body.style.overflow = menu ? "hidden" : ""; }, [menu]);

  useEffect(() => {
    setMenu(false);
    window.scrollTo(0, 0);
  }, [loc.pathname]);

  // Cursor
  useEffect(() => {
    const dot = document.getElementById("dvdot");
    const ring = document.getElementById("dvring");
    if (!dot || !ring) return;
    let mx=0,my=0,rx=0,ry=0,id;
    const mv = e => {
      mx=e.clientX; my=e.clientY;
      const ov = e.target.closest("a,button,.cap-c,.art-c,.jc,.tc,.dv-st,.hq-i");
      ring.classList.toggle("h", !!ov);
    };
    document.addEventListener("mousemove", mv);
    const loop = () => {
      rx+=(mx-rx)*0.13; ry+=(my-ry)*0.13;
      dot.style.left=mx+"px"; dot.style.top=my+"px";
      ring.style.left=rx+"px"; ring.style.top=ry+"px";
      id=requestAnimationFrame(loop);
    };
    loop();
    return () => { document.removeEventListener("mousemove",mv); cancelAnimationFrame(id); };
  }, [loc.pathname]);

  // Scroll reveal
  useEffect(() => {
    const t = setTimeout(() => {
      const els = document.querySelectorAll(".rv,.rv-l,.rv-r,.rv-s");
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const d = parseFloat(e.target.dataset.delay||0)*1000;
            setTimeout(() => e.target.classList.add("in"), d);
          }
        });
      }, { threshold:0.06 });
      els.forEach(el => obs.observe(el));
      return () => obs.disconnect();
    }, 80);
    return () => clearTimeout(t);
  }, [loc.pathname]);

  const a = p => loc.pathname===p?"act":"";
  const close = () => setMenu(false);

  return (
    <>
      <style>{GCSS}</style>
      <div className="dvc"><div className="dvc-ring" id="dvring"></div><div className="dvc-dot" id="dvdot"></div></div>
      <div className={`dv-mob${menu?" open":""}`}>
        <Link to="/" onClick={close}>Home</Link>
        <Link to="/about" onClick={close}>About</Link>
        <Link to="/intelligence" onClick={close}>Intelligence</Link>
        <Link to="/capabilities" onClick={close}>Capabilities</Link>
        <Link to="/services" onClick={close}>Services</Link>
        <Link to="/insights" onClick={close}>Insights</Link>
        <Link to="/join" onClick={close}>Join Us</Link>
        <Link to="/contact" onClick={close} className="mob-cta">Get in Touch</Link>
      </div>
      <nav className={`dv-nav${scrolled?" solid":""}`}>
        <Link to="/" className="dv-logo"><img src="/logo.png" alt="DataVale AI"/></Link>
        <ul className="dv-nl">
          <li><Link to="/" className={a("/")}>Home</Link></li>
          <li><Link to="/about" className={a("/about")}>About</Link></li>
          <li><Link to="/intelligence" className={a("/intelligence")}>Intelligence</Link></li>
          <li><Link to="/capabilities" className={a("/capabilities")}>Capabilities</Link></li>
          <li><Link to="/services" className={a("/services")}>Services</Link></li>
          <li><Link to="/insights" className={a("/insights")}>Insights</Link></li>
          <li><Link to="/join" className={a("/join")}>Join Us</Link></li>
        </ul>
        <div className="dv-nr">
          <Link to="/contact" className="dv-cta">Get in Touch</Link>
          <button className={`dv-bg${menu?" open":""}`} onClick={()=>setMenu(o=>!o)} aria-label="Menu"><span/><span/><span/></button>
        </div>
      </nav>
    </>
  );
}