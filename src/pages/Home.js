import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav, { Footer, Marquee } from "../components/Nav";

function TW({ words, speed=78, del=40, pause=2400 }) {
  const [d,setD]=useState(""); const [wi,setWi]=useState(0); const [dl,setDl]=useState(false); const [bl,setBl]=useState(true);
  useEffect(()=>{const t=setInterval(()=>setBl(b=>!b),530);return()=>clearInterval(t);},[]);
  useEffect(()=>{
    const w=words[wi];
    if(!dl&&d===w){const t=setTimeout(()=>setDl(true),pause);return()=>clearTimeout(t);}
    if(dl&&d===""){setDl(false);setWi(i=>(i+1)%words.length);return;}
    const t=setTimeout(()=>setD(dl?w.slice(0,d.length-1):w.slice(0,d.length+1)),dl?del:speed);
    return()=>clearTimeout(t);
  },[d,dl,wi,words,speed,del,pause]);
  return <span>{d}<span style={{opacity:bl?1:0}}>_</span></span>;
}

const TW_WORDS = ["Data to Decision.","Human to Machine.","Raw to Ready.","Source to Insight.","Signal to Action."];

const css = `
.hm-tw-line{
  display:block;
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(2.8rem,7vw,7.5rem);
  color:rgba(255,255,255,0.78);
  line-height:1;
  margin-top:4px;
}
/* Quick nav grid */
.hm-qg{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(255,255,255,0.07);}
.hq-i{padding:42px 34px;border-right:1px solid rgba(255,255,255,0.07);transition:background 0.4s;text-decoration:none;color:inherit;display:block;}
.hq-i:last-child{border-right:none;}
.hq-i:hover{background:rgba(255,255,255,0.025);}
.hq-n{font-family:'Bebas Neue',sans-serif;font-size:2.6rem;color:rgba(255,255,255,0.08);line-height:1;margin-bottom:13px;}
.hq-t{font-family:'Syne',sans-serif;font-weight:700;font-size:0.87rem;letter-spacing:0.04em;color:#fff;margin-bottom:7px;}
.hq-d{font-size:0.75rem;color:rgba(255,255,255,0.25);line-height:1.65;}
.hq-a{display:block;margin-top:15px;font-size:0.64rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.15);transition:color 0.3s;}
.hq-i:hover .hq-a{color:rgba(255,255,255,0.7);}

/* About split — v6 portrait on left */
.hm-sp{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid rgba(255,255,255,0.07);}
.hm-sp-v{position:relative;overflow:hidden;min-height:580px;}
/* Portrait v6: fill container */
.hm-sp-v video{
  position:absolute;top:0;left:50%;
  transform:translateX(-50%);
  height:100%;width:auto;min-width:100%;
  object-fit:cover;object-position:center top;z-index:0;
}
.hm-sp-v::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(to right,transparent 50%,#000 100%);z-index:1;
}
.hm-sp-t{padding:80px 52px;border-left:1px solid rgba(255,255,255,0.07);display:flex;flex-direction:column;justify-content:center;}

/* v5 strip (landscape 1080p) */
.hm-v5{
  position:relative;height:42vh;min-height:260px;overflow:hidden;
  border-top:1px solid rgba(255,255,255,0.07);
  display:flex;flex-direction:column;
}
.hm-v5 video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;}
.hm-v5::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,0.62);z-index:1;}

/* v13 robot talking — only as section, not hero */
.hm-rob{
  position:relative;
  height:80vh;min-height:520px;
  overflow:hidden;
  border-top:1px solid rgba(255,255,255,0.07);
  display:flex;align-items:flex-end;
}
/* Portrait v13: center horizontally, fill height */
.hm-rob video{
  position:absolute;
  top:0;left:50%;
  transform:translateX(-50%);
  height:100%;width:auto;min-width:100%;
  object-fit:cover;object-position:center 10%;
  z-index:0;
}
.hm-rob::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,0.5);z-index:1;}
.hm-rob::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,#000 0%,rgba(0,0,0,0.25) 45%,transparent 100%);z-index:2;}
.hm-rob-in{position:relative;z-index:3;padding:0 48px 72px;max-width:800px;}

@media(max-width:900px){
  .hm-qg{grid-template-columns:1fr 1fr;}
  .hq-i:nth-child(2n){border-right:none;}
  .hq-i:nth-child(n+3){border-top:1px solid rgba(255,255,255,0.07);}
  .hm-sp{grid-template-columns:1fr;}
  .hm-sp-v{min-height:300px;}
  .hm-sp-v::after{background:linear-gradient(to top,#000 0%,transparent 60%);}
  .hm-sp-t{padding:48px 20px;border-left:none;border-top:1px solid rgba(255,255,255,0.07);}
  .hm-rob-in{padding:0 20px 56px;}
}
@media(max-width:480px){
  .hm-qg{grid-template-columns:1fr;}
  .hq-i{border-right:none;border-bottom:1px solid rgba(255,255,255,0.07);}
}
`;

export default function Home() {
  return (
    <>
      <style>{css}</style>
      <Nav/>

      {/* HERO — v1.mp4 landscape 3840×2160 */}
      <div className="dv-hero">
        <video className="vid-land" autoPlay muted loop playsInline preload="auto">
          <source src="https://res.cloudinary.com/dpdergzh2/video/upload/v1775562275/v1_pg8ccf.mp4" type="video/mp4"/>
        </video>
        <div className="ov-d"></div>
        <div className="ov-b"></div>
        <div className="ov-s"></div>
        <div className="dv-hc">
          <div className="dv-ey">Data Infrastructure &amp; Intelligence</div>
          <h1 className="dv-h1">
            Own the Flow.
            <span className="hm-tw-line"><TW words={TW_WORDS}/></span>
          </h1>
          <p className="dv-sub">We provide high-quality data and the infrastructure to power it — enabling organizations to move from raw information to real intelligence, at scale.</p>
          <div className="dv-btns">
            <Link to="/capabilities" className="btn-w">Explore Platform →</Link>
            <Link to="/contact" className="btn-o">Talk to Us</Link>
          </div>
        </div>
        <div className="dv-sc"><div className="dv-sc-line"></div>Scroll</div>
      </div>

      <Marquee/>

      {/* Quick nav */}
      <div className="blk">
        <div className="hm-qg rv">
          <Link to="/about" className="hq-i"><div className="hq-n">01</div><div className="hq-t">About Us</div><div className="hq-d">Raw data. Real intelligence. Your edge.</div><span className="hq-a">Learn More →</span></Link>
          <Link to="/intelligence" className="hq-i"><div className="hq-n">02</div><div className="hq-t">Intelligence</div><div className="hq-d">By everyone, for everyone. Democratizing AI.</div><span className="hq-a">Explore →</span></Link>
          <Link to="/capabilities" className="hq-i"><div className="hq-n">03</div><div className="hq-t">Capabilities</div><div className="hq-d">Evals, benchmarks & post-training datasets.</div><span className="hq-a">See All →</span></Link>
          <Link to="/join" className="hq-i"><div className="hq-n">04</div><div className="hq-t">Join Us</div><div className="hq-d">Contribute and earn. Be part of the AI economy.</div><span className="hq-a">Apply →</span></Link>
        </div>
      </div>

      {/* About split — v6 portrait */}
      <div className="blk">
        <div className="hm-sp">
          <div className="hm-sp-v rv-l">
            <video autoPlay muted loop playsInline preload="auto">
              <source src="https://res.cloudinary.com/dpdergzh2/video/upload/v1775562125/v6_aun1nm.mp4" type="video/mp4"/>
            </video>
          </div>
          <div className="hm-sp-t rv-r">
            <div className="dv-ey">Who We Are</div>
            <h2 className="dv-h2" style={{fontSize:"clamp(2.5rem,5vw,5.5rem)",marginBottom:"26px"}}>Raw Data.<br/><span className="dv-dim">Real Intelligence.</span></h2>
            <p className="dv-body" style={{marginBottom:"16px"}}>We build platforms that <strong>collect, process, and scale data seamlessly</strong> — giving businesses the clarity to act in real time.</p>
            <p className="dv-body">In a data-driven world, <strong>advantage belongs to those who own the flow</strong> — and we make sure you do.</p>
            <div className="dv-btns" style={{marginTop:"34px"}}><Link to="/about" className="btn-w">Our Story →</Link></div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="blk">
        <div className="dv-sr rv">
          <div className="dv-st"><div className="dv-sn">10×</div><div className="dv-sl">Faster pipelines</div></div>
          <div className="dv-st"><div className="dv-sn">99.9%</div><div className="dv-sl">Uptime reliability</div></div>
          <div className="dv-st"><div className="dv-sn">15K+</div><div className="dv-sl">Contributors</div></div>
          <div className="dv-st"><div className="dv-sn">30+</div><div className="dv-sl">Countries</div></div>
        </div>
      </div>

      {/* v5 strip landscape */}
      <div className="hm-v5">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="https://res.cloudinary.com/dpdergzh2/video/upload/v1775562219/v5_gdtr74.mp4" type="video/mp4"/>
        </video>
        <div className="dv-hc-strip rv-s">
          <div className="dv-ey">End-to-End Solutions</div>
          <h2 className="dv-h2" style={{fontSize:"clamp(2rem,4vw,4.5rem)"}}>From Collection<br/><span className="dv-dim">to Decision.</span></h2>
        </div>
      </div>

      {/* v13 robot talking — SECTION only, not hero */}
      <div className="hm-rob">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="https://res.cloudinary.com/dpdergzh2/video/upload/v1775562056/v13_n1nfuy.mp4" type="video/mp4"/>
        </video>
        <div className="hm-rob-in rv">
          <div className="dv-ey">Human Intelligence Powers Machine Intelligence</div>
          <h2 className="dv-h2" style={{marginBottom:"18px"}}>Where Human<br/>Meets Machine.</h2>
          <p className="dv-body" style={{marginBottom:"28px",maxWidth:"420px"}}>We sit at the intersection of human expertise and machine learning — supplying the data that makes AI genuinely capable, safe, and aligned.</p>
          <Link to="/intelligence" className="btn-w">Explore Intelligence →</Link>
        </div>
      </div>

      <Footer/>
    </>
  );
}