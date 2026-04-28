import Nav, { Footer } from "../components/Nav";
import { Link } from "react-router-dom";

const css = `
/* Two col layout */
.ab-2c{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid rgba(255,255,255,0.07);align-items:stretch;}
.ab-2c-l{border-right:1px solid rgba(255,255,255,0.07);}

/* v8 portrait video cell
   Desktop: object-fit:contain — shows full video, black bg fills gaps
   Mobile: object-fit:cover — fills the smaller container width */
.ab-vid-cell{
  position:relative;
  overflow:hidden;
  background:#000;
  display:flex;align-items:center;justify-content:center;
}
/* Desktop */
@media(min-width:901px){
  .ab-vid-cell{min-height:560px;max-height:680px;}
  .ab-vid-cell video{
    height:100%;width:auto;max-width:100%;
    object-fit:contain;
    display:block;position:relative;z-index:0;
  }
}
/* Mobile — taller container so portrait video shows properly */
@media(max-width:900px){
  .ab-vid-cell{min-height:420px;max-height:500px;}
  .ab-vid-cell video{
    position:absolute;inset:0;
    width:100%;height:100%;
    object-fit:cover;
    /* center 10% shows the top portion (face/subject) of portrait video */
    object-position:center 10%;
    z-index:0;
  }
}
/* Fade edge on right side (desktop only) */
@media(min-width:901px){
  .ab-vid-cell::after{
    content:'';position:absolute;inset:0;
    background:linear-gradient(to right,transparent 62%,#000 100%);
    z-index:1;pointer-events:none;
  }
}
.ab-txt{padding:88px 52px;display:flex;flex-direction:column;justify-content:center;}

/* v4 landscape featured section */
.ab-feat{position:relative;height:60vh;min-height:400px;overflow:hidden;border-top:1px solid rgba(255,255,255,0.07);display:flex;flex-direction:column;}
.ab-feat video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;}
.ab-feat::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,0.55);z-index:1;}
.ab-feat::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,#000 0%,transparent 60%);z-index:2;}

/* v5 landscape strip */
.ab-v5{position:relative;height:40vh;min-height:250px;overflow:hidden;border-top:1px solid rgba(255,255,255,0.07);display:flex;flex-direction:column;}
.ab-v5 video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;}
.ab-v5::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,0.6);z-index:1;}

/* mission */
.ab-mg{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid rgba(255,255,255,0.07);}
.ab-ml{padding:88px 52px;border-right:1px solid rgba(255,255,255,0.07);}
.ab-mr{padding:88px 52px;}

@media(max-width:900px){
  .ab-2c{grid-template-columns:1fr;}
  .ab-2c-l{border-right:none;border-bottom:1px solid rgba(255,255,255,0.07);}
  .ab-txt{padding:48px 20px;}
  .ab-feat{height:50vh;}
  .ab-mg{grid-template-columns:1fr;}
  .ab-ml{padding:60px 20px;border-right:none;border-bottom:1px solid rgba(255,255,255,0.07);}
  .ab-mr{padding:60px 20px;}
}
`;

export default function About() {
  return (
    <>
      <style>{css}</style>
      <Nav/>

      {/* HERO — v7 landscape 3840×2160 */}
      <div className="dv-hero">
        <video className="vid-land" autoPlay muted loop playsInline preload="auto">
          <source src="https://bqnvtqcqnbtolanmvpfd.supabase.co/storage/v1/object/public/DV/v7.mp4" type="video/mp4"/>
        </video>
        <div className="ov-d"></div><div className="ov-b"></div><div className="ov-s"></div>
        <div className="dv-hc">
          <div className="dv-ey">Who We Are</div>
          <h1 className="dv-h1">Raw Data.<br/>Real Intelligence.<br/>Your Edge.</h1>
          <p className="dv-sub">We build the infrastructure that turns data into competitive advantage — for organizations that refuse to be left behind.</p>
        </div>
        <div className="dv-sc"><div className="dv-sc-line"></div>Scroll</div>
      </div>

      {/* v8 portrait — contain desktop, cover mobile */}
      <div className="blk">
        <div className="ab-2c">
          <div className="ab-2c-l ab-vid-cell rv-l">
            <video autoPlay muted loop playsInline preload="auto">
              <source src="https://bqnvtqcqnbtolanmvpfd.supabase.co/storage/v1/object/public/DV/v8.mp4" type="video/mp4"/>
            </video>
          </div>
          <div className="ab-txt rv-r">
            <div className="dv-ey">Our Mission</div>
            <h2 className="dv-h2" style={{fontSize:"clamp(2.4rem,5vw,5.2rem)",marginBottom:"24px"}}>Own the<br/><span className="dv-dim">Flow.</span></h2>
            <p className="dv-body" style={{marginBottom:"16px"}}>We build platforms that <strong>collect, process, and scale data seamlessly</strong> — giving businesses the clarity and confidence to act in real time.</p>
            <p className="dv-body" style={{marginBottom:"16px"}}>From sourcing to structuring — we ensure your data is <strong>not just available, but usable, reliable, and ready</strong> to drive impact.</p>
            <p className="dv-body">In a data-driven world, <strong>advantage belongs to those who own the flow.</strong></p>
            <div className="dv-btns" style={{marginTop:"34px"}}><Link to="/contact" className="btn-w">Work With Us →</Link></div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="blk">
        <div className="dv-sr rv">
          <div className="dv-st"><div className="dv-sn">10×</div><div className="dv-sl">Faster pipelines</div></div>
          <div className="dv-st"><div className="dv-sn">99.9%</div><div className="dv-sl">Uptime reliability</div></div>
          <div className="dv-st"><div className="dv-sn">∞</div><div className="dv-sl">Scalable infra</div></div>
          <div className="dv-st"><div className="dv-sn">0→1</div><div className="dv-sl">Raw to ready</div></div>
        </div>
      </div>

      {/* v4 landscape featured */}
      <div className="ab-feat">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="https://bqnvtqcqnbtolanmvpfd.supabase.co/storage/v1/object/public/DV/v3.mp4" type="video/mp4"/>
        </video>
        <div className="dv-hc-half rv">
          <div className="dv-ey">Built for the Age of Machines</div>
          <h2 className="dv-h2" style={{fontSize:"clamp(2.4rem,5vw,5rem)",marginBottom:"18px"}}>Powered by<br/>Human Intelligence.</h2>
          <p className="dv-body" style={{marginBottom:"28px",maxWidth:"400px"}}>Every model trained on our data learns from the best source — genuine human intelligence, captured at scale across 30+ countries.</p>
          <Link to="/capabilities" className="btn-w">See Our Capabilities →</Link>
        </div>
      </div>

      {/* v5 landscape strip */}
      <div className="ab-v5">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="https://bqnvtqcqnbtolanmvpfd.supabase.co/storage/v1/object/public/DV/v5.mp4" type="video/mp4"/>
        </video>
        <div className="dv-hc-strip rv">
          <div className="dv-ey">Our Approach</div>
          <h2 className="dv-h2" style={{fontSize:"clamp(2rem,4vw,4.2rem)"}}>Scale Without Limits.</h2>
        </div>
      </div>

      {/* Mission */}
      <div className="blk">
        <div className="ab-mg">
          <div className="ab-ml rv-l">
            <div className="dv-ey">What We Stand For</div>
            <h2 className="dv-h3" style={{marginBottom:"22px"}}>Data<br/>Reliability</h2>
            <p className="dv-body">Every dataset we touch is built to be trusted. We obsess over quality, consistency, and completeness — because the decisions your models make depend entirely on the data they were trained on.</p>
          </div>
          <div className="ab-mr rv-r">
            <div className="dv-ey">Our Infrastructure</div>
            <h2 className="dv-h3" style={{marginBottom:"22px"}}>Scale Without<br/>Limits</h2>
            <p className="dv-body">From a single pipeline to a global infrastructure — we architect for the long term. Our platforms grow with you, handling millions of data points without compromising speed or accuracy.</p>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}