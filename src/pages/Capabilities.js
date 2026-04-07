import Nav, { Footer } from "../components/Nav";

const css = `
/* v12 landscape strip */
.cap-v12{position:relative;height:40vh;min-height:250px;overflow:hidden;border-top:1px solid rgba(255,255,255,0.07);display:flex;flex-direction:column;}
.cap-v12 video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;}
.cap-v12::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,0.62);z-index:1;}
/* Capabilities grid */
.cap-g{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(255,255,255,0.07);}
.cap-c{padding:42px 30px;border-right:1px solid rgba(255,255,255,0.07);border-bottom:1px solid rgba(255,255,255,0.07);transition:background 0.4s;cursor:default;position:relative;overflow:hidden;}
.cap-c:nth-child(4n){border-right:none;}
.cap-c::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1px;background:#fff;transition:width 0.5s ease;}
.cap-c:hover::after{width:100%;}
.cap-c:hover{background:rgba(255,255,255,0.024);}
.cap-ci{font-size:1.5rem;margin-bottom:16px;display:block;}
.cap-cn{font-family:'Syne',sans-serif;font-weight:700;font-size:0.86rem;letter-spacing:0.04em;color:#fff;margin-bottom:8px;}
.cap-cd{font-size:0.76rem;color:rgba(255,255,255,0.28);line-height:1.65;}
.cap-ca{display:block;margin-top:16px;font-size:0.64rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.14);transition:color 0.3s;}
.cap-c:hover .cap-ca{color:rgba(255,255,255,0.7);}
@media(max-width:1000px){.cap-g{grid-template-columns:repeat(2,1fr);}.cap-c:nth-child(2n){border-right:none;}.cap-c:nth-child(4n){border-right:1px solid rgba(255,255,255,0.07);}}
@media(max-width:600px){.cap-g{grid-template-columns:1fr;}.cap-c{border-right:none;}.cap-c:nth-child(4n){border-right:none;}}
`;

const caps = [
  { icon:"💻", name:"Coding", desc:"Agentic code-gen across all languages and frameworks" },
  { icon:"🔁", name:"RL Environments", desc:"Environments, tasks, and verifiers for reinforcement learning" },
  { icon:"🔬", name:"STEM", desc:"Physics, chemistry, mathematics, and biology datasets" },
  { icon:"🏢", name:"Enterprise Domains", desc:"Finance, medical, legal, and healthcare specialized data" },
  { icon:"🎙️", name:"Audio", desc:"ASR, TTS, full duplex audio-to-audio pipelines" },
  { icon:"🖼️", name:"Multimodality", desc:"Understand & generate across image, video, and documents" },
  { icon:"🤖", name:"Robotics & Embodied AI", desc:"VLA annotations, tele-op data, and simulation environments" },
  { icon:"📊", name:"Benchmarks", desc:"Private evals for SWE, Tau, MLE, MMMU, and more" },
];

export default function Capabilities() {
  return (
    <>
      <style>{css}</style>
      <Nav/>
      {/* HERO — v11.mp4 landscape 4096×2160 */}
      <div className="dv-hero">
        <video className="vid-land" autoPlay muted loop playsInline preload="auto">
          <source src="https://res.cloudinary.com/dpdergzh2/video/upload/v1775563034/v11_ldegyc.mp4" type="video/mp4"/>
        </video>
        <div className="ov-d"></div><div className="ov-b"></div><div className="ov-s"></div>
        <div className="dv-hc">
          <div className="dv-ey">What We Build</div>
          <h1 className="dv-h1">Evals, Benchmarks<br/>&amp; Post-Training<br/>Datasets.</h1>
          <p className="dv-sub">We create SFT, RLHF, and RL environment datasets to advance model capabilities across every modality — from code to robotics.</p>
        </div>
        <div className="dv-sc"><div className="dv-sc-line"></div>Scroll</div>
      </div>
      {/* v12 strip (4K landscape) */}
      <div className="cap-v12">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="https://res.cloudinary.com/dpdergzh2/video/upload/v1775562253/v12_bhah6k.mp4" type="video/mp4"/>
        </video>
        <div className="dv-hc-strip rv-s">
          <div className="dv-ey">Powering Next-Gen AI</div>
          <h2 className="dv-h2" style={{fontSize:"clamp(2rem,5vw,5rem)"}}>From Code to<br/><span className="dv-dim">Robotics &amp; Beyond</span></h2>
        </div>
      </div>
      {/* Grid */}
      <div className="blk">
        <div className="dv-in" style={{paddingTop:"0",paddingBottom:"96px"}}>
          <div className="cap-g rv">
            {caps.map((c,i)=>(
              <div key={i} className="cap-c">
                <span className="cap-ci">{c.icon}</span>
                <div className="cap-cn">{c.name}</div>
                <div className="cap-cd">{c.desc}</div>
                <span className="cap-ca">Explore →</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}