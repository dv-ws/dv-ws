import Nav, { Footer } from "../components/Nav";
import { Link } from "react-router-dom";

const css = `
/* Network stats */
.int-net{display:flex;border-top:1px solid rgba(255,255,255,0.07);}
.int-ni{flex:1;text-align:center;padding:58px 18px;border-right:1px solid rgba(255,255,255,0.07);transition:background 0.4s;}
.int-ni:last-child{border-right:none;}
.int-ni:hover{background:rgba(255,255,255,0.024);}
.int-nn{font-family:'Bebas Neue',sans-serif;font-size:clamp(4rem,8vw,8rem);line-height:1;color:#fff;}
.int-nl{font-size:0.66rem;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.25);margin-top:10px;}

/* v9 portrait hero
   Desktop: contain — full portrait shown, black bg on sides (no crop)
   Mobile: cover — fills screen */
.int-v9-wrap{position:absolute;inset:0;z-index:0;background:#000;overflow:hidden;}
@media(min-width:901px){
  .int-v9-wrap{display:flex;align-items:center;justify-content:center;}
  .int-v9-wrap video{height:100%;width:auto;max-width:100%;object-fit:contain;display:block;}
}
@media(max-width:900px){
  .int-v9-wrap video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 20%;}
}

/* v11 landscape featured section */
.int-feat{position:relative;height:70vh;min-height:460px;overflow:hidden;border-top:1px solid rgba(255,255,255,0.07);display:flex;flex-direction:column;}
.int-feat video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center center;z-index:0;}
.int-feat::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,0.52);z-index:1;}
.int-feat::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,#000 0%,rgba(0,0,0,0.2) 48%,transparent 100%);z-index:2;}

/* v10 strip */
.int-v10{position:relative;height:38vh;min-height:240px;overflow:hidden;border-top:1px solid rgba(255,255,255,0.07);display:flex;flex-direction:column;}
.int-v10 video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;}
.int-v10::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,0.62);z-index:1;}

/* testimonials */
.int-tg{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(255,255,255,0.07);}
.tc{padding:50px 38px;border-right:1px solid rgba(255,255,255,0.07);transition:background 0.4s;}
.tc:last-child{border-right:none;}
.tc:hover{background:rgba(255,255,255,0.02);}
.tc-q{font-size:0.92rem;line-height:1.82;color:rgba(255,255,255,0.56);margin-bottom:26px;font-style:italic;}
.tc-q::before{content:'"';font-size:1.8rem;color:rgba(255,255,255,0.1);display:block;margin-bottom:7px;font-style:normal;}
.tc-n{font-family:'Syne',sans-serif;font-weight:700;font-size:0.83rem;color:#fff;}
.tc-r{font-size:0.66rem;color:rgba(255,255,255,0.25);letter-spacing:0.1em;text-transform:uppercase;margin-top:5px;}
.int-cta{padding:96px 48px;text-align:center;border-top:1px solid rgba(255,255,255,0.07);}

@media(max-width:900px){
  .int-net{flex-wrap:wrap;}
  .int-ni{min-width:33.33%;border-bottom:1px solid rgba(255,255,255,0.07);}
  .int-tg{grid-template-columns:1fr;}
  .tc{border-right:none;border-bottom:1px solid rgba(255,255,255,0.07);}
  .int-cta{padding:60px 20px;}
}
`;

const testi = [
  { q:"DataVale connects people from everywhere. I'm collaborating with a global network without ever leaving my city.", n:"João P.", r:"Global Contributor Network" },
  { q:"I record speech the way people actually talk — with pauses, overlap, and emotion. It feels like real contribution.", n:"Lina M.", r:"Natural Conversation Audio" },
  { q:"I help review and label data so models learn from real, messy human behavior. This is meaningful work.", n:"Omar Z.", r:"Quality Review & Annotation" },
];

export default function Intelligence() {
  return (
    <>
      <style>{css}</style>
      <Nav/>

      {/* HERO — v9 portrait, contained on desktop */}
      <div className="dv-hero">
        <div className="int-v9-wrap">
          <video autoPlay muted loop playsInline preload="auto">
            <source src="https://bqnvtqcqnbtolanmvpfd.supabase.co/storage/v1/object/public/DV/v9.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className="ov-d"></div><div className="ov-b"></div><div className="ov-s"></div>
        <div className="dv-hc">
          <div className="dv-ey">The AI Economy</div>
          <h1 className="dv-h1">Intelligence<br/>by Everyone,<br/>for Everyone.</h1>
          <p className="dv-sub">DataVale AI exists to make the AI economy work for all — not just experts. We bridge everyday people with the world's leading AI labs, supplying the essential human data that powers the path to AGI.</p>
          <div className="dv-btns"><Link to="/join" className="btn-w">Start Earning →</Link></div>
        </div>
        <div className="dv-sc"><div className="dv-sc-line"></div>Scroll</div>
      </div>

      {/* Network stats */}
      <div className="blk">
        <div className="int-net rv">
          <div className="int-ni"><div className="int-nn">15K+</div><div className="int-nl">Contributors</div></div>
          <div className="int-ni"><div className="int-nn">50+</div><div className="int-nl">Languages</div></div>
          <div className="int-ni"><div className="int-nn">30+</div><div className="int-nl">Countries</div></div>
        </div>
      </div>

      {/* v11 landscape featured */}
      <div className="int-feat">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="https://bqnvtqcqnbtolanmvpfd.supabase.co/storage/v1/object/public/DV/v11.mp4" type="video/mp4"/>
        </video>
        <div className="dv-hc-half rv">
          <div className="dv-ey">The Human Behind the Machine</div>
          <h2 className="dv-h2" style={{fontSize:"clamp(2.8rem,5vw,6rem)",marginBottom:"18px"}}>Every Model<br/>Learns from<br/>Someone Like You.</h2>
          <p className="dv-body" style={{marginBottom:"28px",maxWidth:"440px"}}>We're not just collecting data — we're capturing human intelligence in all its diversity, nuance, and depth. That's what makes AI genuinely capable.</p>
          <Link to="/join" className="btn-w">Join as Contributor →</Link>
        </div>
      </div>

      {/* v10 strip */}
      <div className="int-v10">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="https://bqnvtqcqnbtolanmvpfd.supabase.co/storage/v1/object/public/DV/v10.mp4" type="video/mp4"/>
        </video>
        <div className="dv-hc-strip rv">
          <div className="dv-ey">Global Reach</div>
          <h2 className="dv-h2" style={{fontSize:"clamp(2rem,4vw,4.2rem)"}}>50+ Languages.<br/><span className="dv-dim">One Mission.</span></h2>
        </div>
      </div>

      {/* Testimonials */}
      <div className="blk">
        <div className="dv-in" style={{paddingTop:"72px",paddingBottom:"0"}}><div className="dv-ey rv">From Our Contributors</div></div>
        <div className="dv-in" style={{paddingTop:"36px",paddingBottom:"0"}}>
          <div className="int-tg rv">
            {testi.map((t,i)=>(
              <div key={i} className="tc">
                <p className="tc-q">{t.q}</p>
                <div className="tc-n">{t.n}</div>
                <div className="tc-r">{t.r}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="blk">
        <div className="int-cta rv">
          <h2 className="dv-h2" style={{marginBottom:"18px"}}>Be Part of the<br/><span className="dv-dim">Growing AI Economy</span></h2>
          <p className="dv-body" style={{margin:"0 auto 32px",textAlign:"center",maxWidth:"380px"}}>You don't need to be an expert — just human. Start contributing and start earning.</p>
          <Link to="/join" className="btn-w">Join as Contributor →</Link>
        </div>
      </div>

      <Footer/>
    </>
  );
}