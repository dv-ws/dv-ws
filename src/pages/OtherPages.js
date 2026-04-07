import Nav, { Footer } from "../components/Nav";
import { Link } from "react-router-dom";

/* ════════════════════════════════
   SERVICES — v2 hero, v3 strip
════════════════════════════════ */
const svcs = [
  { num:"01", icon:"🔗", name:"Data Collection & Sourcing", desc:"Automated ingestion from any source — structured, unstructured, real-time or batch." },
  { num:"02", icon:"⚡", name:"Pipeline Engineering", desc:"Robust, fault-tolerant pipelines that move and transform data at scale." },
  { num:"03", icon:"🏗️", name:"Platform Infrastructure", desc:"Cloud-native data platforms. Scalable, secure, built to grow." },
  { num:"04", icon:"🧩", name:"Data Structuring & Modeling", desc:"Transform raw data into clean, queryable, decision-ready formats." },
  { num:"05", icon:"📡", name:"Real-Time Intelligence", desc:"Streaming analytics and live dashboards — act the moment it matters." },
  { num:"06", icon:"🎯", name:"Decision Intelligence", desc:"AI-augmented insights that bridge the gap between data and action." },
];

const svcCss = `
.sv-strip{position:relative;height:38vh;min-height:240px;overflow:hidden;border-top:1px solid rgba(255,255,255,0.07);display:flex;flex-direction:column;}
.sv-strip video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;}
.sv-strip::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,0.62);z-index:1;}
.sv-list{border-top:1px solid rgba(255,255,255,0.07);}
.sv-row{display:flex;align-items:center;justify-content:space-between;padding:25px 0;border-bottom:1px solid rgba(255,255,255,0.06);transition:all 0.3s;gap:18px;cursor:default;}
.sv-row:hover{padding-left:14px;}
.sv-row:hover .sv-n{color:#fff;}
.sv-n{font-family:'Bebas Neue',sans-serif;font-size:1rem;color:rgba(255,255,255,0.14);min-width:46px;transition:color 0.3s;letter-spacing:0.05em;}
.sv-ic{font-size:1rem;opacity:0.26;flex-shrink:0;}
.sv-nm{font-family:'Syne',sans-serif;font-weight:700;font-size:clamp(0.9rem,1.8vw,1.2rem);color:#fff;flex:1;}
.sv-dc{font-size:0.74rem;color:rgba(255,255,255,0.22);max-width:320px;line-height:1.65;text-align:right;}
@media(max-width:768px){.sv-dc{display:none;}.sv-row{padding:20px 0;}}
`;

export function Services() {
  return (
    <>
      <style>{svcCss}</style>
      <Nav/>
      {/* HERO — v2.mp4 landscape 3840×2160 */}
      <div className="dv-hero">
        <video className="vid-land" autoPlay muted loop playsInline preload="auto">
          <source src="https://res.cloudinary.com/dpdergzh2/video/upload/v1775562269/v2_ucuew9.mp4" type="video/mp4"/>
        </video>
        <div className="ov-d"></div><div className="ov-b"></div><div className="ov-s"></div>
        <div className="dv-hc">
          <div className="dv-ey">Infrastructure</div>
          <h1 className="dv-h1">Infrastructure<br/>That Thinks<br/>for You.</h1>
          <p className="dv-sub">End-to-end data solutions engineered for scale, speed, and reliability — from collection to decision.</p>
        </div>
        <div className="dv-sc"><div className="dv-sc-line"></div>Scroll</div>
      </div>
      {/* v10 strip — short landscape loop, perfect for strip */}
      <div className="sv-strip">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="https://res.cloudinary.com/dpdergzh2/video/upload/v1775562162/v10_ybkcsx.mp4" type="video/mp4"/>
        </video>
        <div className="dv-hc-strip rv-s">
          <div className="dv-ey">End-to-End Solutions</div>
          <h2 className="dv-h2" style={{fontSize:"clamp(2rem,4vw,4.5rem)"}}>Six Pillars of<br/><span className="dv-dim">Data Excellence</span></h2>
        </div>
      </div>
      <div className="blk">
        <div className="dv-in" style={{paddingTop:"0",paddingBottom:"96px"}}>
          <div className="sv-list rv">
            {svcs.map((s,i)=>(
              <div key={i} className="sv-row">
                <div className="sv-n">{s.num}</div>
                <div className="sv-ic">{s.icon}</div>
                <div className="sv-nm">{s.name}</div>
                <div className="sv-dc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

/* ════════════════════════════════
   INSIGHTS — v12 hero
════════════════════════════════ */
const arts = [
  { tag:"AGI", date:"Mar 2025", title:"The Road to AGI: Why Human Data Remains the Most Valuable Asset", ex:"As AI approaches general intelligence, the bottleneck isn't compute — it's quality human-generated training data.", t:"6 min", url:"https://www.anthropic.com/research" },
  { tag:"GenAI", date:"Feb 2025", title:"Beyond Text: How Multimodal Data is Reshaping Foundation Models", ex:"The next generation of AI doesn't just read — it sees, hears, and understands the world.", t:"5 min", url:"https://openai.com/research" },
  { tag:"Data", date:"Jan 2025", title:"RLHF at Scale: Building the Feedback Loops that Train Smarter Models", ex:"Reinforcement learning from human feedback is the cornerstone of modern AI alignment.", t:"7 min", url:"https://huggingface.co/blog" },
  { tag:"Infrastructure", date:"Dec 2024", title:"Democratizing AI: How Global Contributor Networks Change Everything", ex:"Training data from 30+ countries gives AI something no single-source dataset can offer.", t:"4 min", url:"https://scale.com/blog" },
  { tag:"GenAI", date:"Nov 2024", title:"The Hidden Cost of Bad Training Data in Enterprise AI", ex:"Garbage in, garbage out has never been more consequential at LLM scale.", t:"8 min", url:"https://www.mckinsey.com/capabilities/quantumblack/our-insights" },
  { tag:"Research", date:"Oct 2024", title:"Benchmarks Are Broken — Here's What We're Doing About It", ex:"Standard evals no longer capture what modern models can and can't do.", t:"6 min", url:"https://paperswithcode.com" },
];

const artCss = `
.art-g{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(255,255,255,0.07);}
.art-c{padding:42px 34px;border-right:1px solid rgba(255,255,255,0.07);border-bottom:1px solid rgba(255,255,255,0.07);text-decoration:none;color:inherit;display:flex;flex-direction:column;transition:background 0.4s;}
.art-c:nth-child(3n){border-right:none;}
.art-c:hover{background:rgba(255,255,255,0.024);}
.art-tag{font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.24);margin-bottom:16px;border:1px solid rgba(255,255,255,0.1);display:inline-block;padding:4px 10px;width:fit-content;}
.art-dt{font-size:0.66rem;color:rgba(255,255,255,0.16);margin-bottom:11px;}
.art-tt{font-family:'Syne',sans-serif;font-weight:700;font-size:0.94rem;line-height:1.4;color:#fff;margin-bottom:11px;flex:1;}
.art-ex{font-size:0.74rem;color:rgba(255,255,255,0.26);line-height:1.7;margin-bottom:20px;}
.art-mt{display:flex;align-items:center;justify-content:space-between;}
.art-tm{font-size:0.64rem;color:rgba(255,255,255,0.16);letter-spacing:0.08em;}
.art-rd{font-size:0.66rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.26);transition:color 0.3s;}
.art-c:hover .art-rd{color:#fff;}
@media(max-width:900px){.art-g{grid-template-columns:1fr 1fr;}.art-c:nth-child(2n){border-right:none;}}
@media(max-width:560px){.art-g{grid-template-columns:1fr;}.art-c{border-right:none;}}
`;

export function Insights() {
  return (
    <>
      <style>{artCss}</style>
      <Nav/>
      {/* HERO — v12.mp4 landscape 3840×2160 */}
      <div className="dv-hero">
        <video className="vid-land" autoPlay muted loop playsInline preload="auto">
          <source src="https://res.cloudinary.com/dpdergzh2/video/upload/v1775562253/v12_bhah6k.mp4" type="video/mp4"/>
        </video>
        <div className="ov-d"></div><div className="ov-b"></div><div className="ov-s"></div>
        <div className="dv-hc">
          <div className="dv-ey">Insights &amp; Research</div>
          <h1 className="dv-h1">Thinking at<br/>the Frontier<br/>of AI &amp; Data.</h1>
        </div>
      </div>
      <div className="blk">
        <div className="dv-in" style={{paddingTop:"0",paddingBottom:"96px"}}>
          <div className="art-g rv">
            {arts.map((a,i)=>(
              <a key={i} className="art-c" href={a.url} target="_blank" rel="noreferrer">
                <div className="art-tag">{a.tag}</div>
                <div className="art-dt">{a.date}</div>
                <div className="art-tt">{a.title}</div>
                <div className="art-ex">{a.ex}</div>
                <div className="art-mt">
                  <span className="art-tm">{a.t} read</span>
                  <span className="art-rd">Read →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

/* ════════════════════════════════
   JOIN — v4 hero landscape, v5 section strip
   NO v13 (portrait, zooms on desktop)
════════════════════════════════ */
const joinCss = `
/* v5 landscape strip between hero and cards */
.jn-strip{
  position:relative;height:42vh;min-height:280px;
  overflow:hidden;border-top:1px solid rgba(255,255,255,0.07);
  display:flex;flex-direction:column;
}
.jn-strip video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;}
.jn-strip::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,0.58);z-index:1;}

.jn-g{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid rgba(255,255,255,0.07);}
.jc{padding:76px 52px;border-right:1px solid rgba(255,255,255,0.07);transition:background 0.4s;}
.jc:last-child{border-right:none;}
.jc:hover{background:rgba(255,255,255,0.018);}
.jc-ic{font-size:2.2rem;margin-bottom:22px;display:block;}
.jc-tt{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4vw,3.5rem);letter-spacing:0.02em;color:#fff;margin-bottom:13px;}
.jc-ds{font-size:0.86rem;color:rgba(255,255,255,0.34);line-height:1.82;margin-bottom:24px;}
.jc-ht{font-size:0.74rem;color:rgba(255,255,255,0.2);margin-bottom:24px;padding:13px 15px;border:1px solid rgba(255,255,255,0.07);line-height:1.72;}
.jc-ht strong{color:rgba(255,255,255,0.48);}
.jc-btn{display:inline-flex;align-items:center;gap:12px;padding:15px 24px;font-family:'DM Sans',sans-serif;font-size:0.74rem;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;transition:all 0.32s;width:100%;border:none;cursor:pointer;border-radius:980px;}
.jc-btn.jw{background:#fff;color:#000;}
.jc-btn.jw:hover{background:rgba(255,255,255,0.86);transform:scale(1.01);}
.jc-btn.jg{background:rgba(255,255,255,0.07);color:#fff;border:1px solid rgba(255,255,255,0.14)!important;}
.jc-btn.jg:hover{background:rgba(255,255,255,0.13);}
.jbl{display:flex;flex-direction:column;text-align:left;flex:1;}
.jbl span:first-child{font-size:0.58rem;opacity:0.4;text-transform:uppercase;letter-spacing:0.08em;}
.jbl span:last-child{font-size:0.82rem;font-weight:600;margin-top:2px;}
@media(max-width:768px){
  .jn-g{grid-template-columns:1fr;}
  .jc{border-right:none;border-bottom:1px solid rgba(255,255,255,0.07);padding:52px 20px;}
}
`;

export function Join() {
  return (
    <>
      <style>{joinCss}</style>
      <Nav/>
      {/* HERO — v4.mp4 landscape 1920×1080 */}
      <div className="dv-hero">
        <video className="vid-land" autoPlay muted loop playsInline preload="auto">
          <source src="https://res.cloudinary.com/dpdergzh2/video/upload/v1775562128/v4_micslr.mp4" type="video/mp4"/>
        </video>
        <div className="ov-d"></div><div className="ov-b"></div><div className="ov-s"></div>
        <div className="dv-hc">
          <div className="dv-ey">Opportunities</div>
          <h1 className="dv-h1">Be Part of<br/>the AI Economy.</h1>
          <p className="dv-sub">Whether you're a professional looking to join our team or an individual ready to contribute — there's a place for you at DataVale AI.</p>
        </div>
        <div className="dv-sc"><div className="dv-sc-line"></div>Scroll</div>
      </div>

      {/* v5 landscape strip — replaces v13 portrait */}
      <div className="jn-strip">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="https://res.cloudinary.com/dpdergzh2/video/upload/v1775562219/v5_gdtr74.mp4" type="video/mp4"/>
        </video>
        <div className="dv-hc-strip rv-s">
          <div className="dv-ey c">Your Intelligence. Our Platform.</div>
          <h2 className="dv-h2" style={{fontSize:"clamp(2rem,4vw,4.5rem)",textAlign:"center"}}>Contribute. Earn.<br/><span className="dv-dim">Shape AI's Future.</span></h2>
        </div>
      </div>

      <div className="blk">
        <div className="dv-in" style={{paddingTop:"0",paddingBottom:"96px"}}>
          <div className="jn-g rv">
            <div className="jc">
              <span className="jc-ic">🚀</span>
              <div className="jc-tt">Join Our Team</div>
              <p className="jc-ds">We're building the infrastructure of the AI economy. Passionate about data, AI, and systems that matter? We want to hear from you.</p>
              <div className="jc-ht"><strong>To:</strong> info@datavaleai.com<br/><strong>Subject:</strong> "Join the Team – [Your Role]"<br/>Attach your CV.</div>
              <a href="mailto:info@datavaleai.com?subject=Join%20the%20Team%20%E2%80%93%20%5BYour%20Role%5D&body=Hi%20DataVale%20AI%20Team%2C%0A%0AI%27d%20love%20to%20join.%0A%0AAbout%20me%3A%20%5BIntro%5D%0A%0ACV%20attached.%0A%0ABest%2C" className="jc-btn jw">
                <span>✉</span><div className="jbl"><span>Opens email app</span><span>Send CV — Join the Team</span></div><span>→</span>
              </a>
            </div>
            <div className="jc">
              <span className="jc-ic">🌍</span>
              <div className="jc-tt">Join as Contributor</div>
              <p className="jc-ds">You don't need to be an expert — just human. Join our global network building datasets that train the world's most advanced AI. Contribute and earn.</p>
              <div className="jc-ht"><strong>To:</strong> info@datavaleai.com<br/><strong>Subject:</strong> "Contributor Application – [Your Skill]"<br/>Attach your CV.</div>
              <a href="mailto:info@datavaleai.com?subject=Contributor%20Application%20%E2%80%93%20%5BYour%20Skill%5D&body=Hi%20DataVale%20AI%20Team%2C%0A%0AI%27d%20like%20to%20contribute.%0A%0ASkills%3A%20%5BList%5D%0A%0ACV%20attached.%0A%0ABest%2C" className="jc-btn jg">
                <span>✉</span><div className="jbl"><span>Opens email app</span><span>Send CV — Contributor Application</span></div><span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

/* ════════════════════════════════
   CONTACT — v1 hero landscape
════════════════════════════════ */
const cntCss = `
.cnt-w{padding:96px 48px;text-align:center;border-top:1px solid rgba(255,255,255,0.07);}
.cnt-big{font-family:'Bebas Neue',sans-serif;font-size:clamp(3rem,8vw,8rem);line-height:0.9;color:#fff;margin-bottom:22px;}
.cnt-sub{font-size:0.96rem;color:rgba(255,255,255,0.3);max-width:400px;margin:0 auto 44px;line-height:1.78;}
.cnt-ls{display:flex;justify-content:center;gap:0;flex-wrap:wrap;border:1px solid rgba(255,255,255,0.08);margin-bottom:30px;max-width:640px;margin-left:auto;margin-right:auto;}
.cnt-l{display:flex;align-items:center;gap:9px;padding:16px 26px;font-size:0.74rem;color:rgba(255,255,255,0.38);text-decoration:none;letter-spacing:0.05em;transition:all 0.3s;border-right:1px solid rgba(255,255,255,0.08);}
.cnt-l:last-child{border-right:none;}
.cnt-l:hover{color:#fff;background:rgba(255,255,255,0.04);}
.cnt-bs{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;}
@media(max-width:580px){.cnt-w{padding:56px 20px;}.cnt-ls{flex-direction:column;border:none;}.cnt-l{border:1px solid rgba(255,255,255,0.07);border-bottom:none;}.cnt-l:last-child{border-bottom:1px solid rgba(255,255,255,0.07);border-right:none;}}
`;

export function Contact() {
  return (
    <>
      <style>{cntCss}</style>
      <Nav/>
      {/* HERO — v5.mp4 landscape 1920×1080 */}
      <div className="dv-hero">
        <video className="vid-land" autoPlay muted loop playsInline preload="auto">
          <source src="https://res.cloudinary.com/dpdergzh2/video/upload/v1775562219/v5_gdtr74.mp4" type="video/mp4"/>
        </video>
        <div className="ov-d"></div><div className="ov-b"></div><div className="ov-s"></div>
        <div className="dv-hc">
          <div className="dv-ey">Get in Touch</div>
          <h1 className="dv-h1">Let's Build<br/>the Future<br/>Together.</h1>
          <p className="dv-sub">Have a project, a question, or just want to explore what's possible? We're one message away.</p>
        </div>
        <div className="dv-sc"><div className="dv-sc-line"></div>Scroll</div>
      </div>
      <div className="blk">
        <div className="cnt-w rv">
          <h2 className="cnt-big">We're One<br/>Message Away.</h2>
          <p className="cnt-sub">Reach out — whether it's a project, a partnership, or just a conversation. We'd love to hear from you.</p>
          <div className="cnt-ls">
            <a href="mailto:info@datavaleai.com" className="cnt-l">✉ info@datavaleai.com</a>
            <a href="https://www.instagram.com/datavaleai" target="_blank" rel="noreferrer" className="cnt-l">📸 @datavaleai</a>
            <a href="https://www.linkedin.com/company/datavaleai" target="_blank" rel="noreferrer" className="cnt-l">in DataVale AI</a>
          </div>
          <div className="cnt-bs">
            <a href="https://www.linkedin.com/company/datavaleai" target="_blank" rel="noreferrer" className="btn-w">Connect on LinkedIn</a>
            <a href="mailto:info@datavaleai.com" className="btn-o">Send an Email</a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}