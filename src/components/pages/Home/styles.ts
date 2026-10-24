import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face{font-family:Geist;src:url('/fonts/GeistVF.woff') format('woff');font-style:normal;font-weight:100 900;font-display:swap}
  @font-face{font-family:Geist Mono;src:url('/fonts/GeistMonoVF.woff') format('woff');font-style:normal;font-weight:100 900;font-display:swap}
  :root{color-scheme:dark;--ink:#0b1017;--surface:#111a25;--surface-raised:#162333;--line:#29394b;--paper:#f1f5fa;--muted:#adbac9;--accent:#106ec7;--accent-soft:#4b9ae4;--accent-pale:#9ccafa;--content:1440px}
  *{box-sizing:border-box}
  html{scroll-behavior:smooth;scroll-padding-top:94px;background:var(--ink)}
  body{margin:0;max-width:100vw;overflow-x:hidden;background:var(--ink)!important;color:var(--paper)!important;font-family:Geist,Arial,sans-serif!important;-webkit-font-smoothing:antialiased}
  a{color:inherit;text-decoration:none}
  button{font:inherit}
  ::selection{background:var(--accent);color:#fff}
  :focus-visible{outline:2px solid var(--accent-pale);outline-offset:4px}
  .skip-link{position:fixed;top:10px;left:10px;z-index:30;transform:translateY(-150%);background:var(--paper);color:var(--ink);padding:12px 16px}
  .skip-link:focus{transform:translateY(0)}
  [data-scroll-reveal]{opacity:1;transform:none}
  @keyframes scroll-reveal{from{opacity:0;transform:translate3d(0,24px,0)}to{opacity:1;transform:translate3d(0,0,0)}}
  @supports (animation-timeline:view()){
    [data-scroll-reveal]{animation:scroll-reveal 1s cubic-bezier(.2,.7,.2,1) both;animation-timeline:view(block);animation-range:entry 0% entry 40%}
  }
  @supports not (animation-timeline:view()){
    html.reveal-observer [data-scroll-reveal]{opacity:0;transform:translate3d(0,24px,0);transition:opacity .65s ease,transform .65s cubic-bezier(.2,.7,.2,1);transition-delay:var(--reveal-delay,0ms)}
    html.reveal-observer [data-scroll-reveal].is-visible{opacity:1;transform:translate3d(0,0,0)}
  }
  @media(prefers-reduced-motion:reduce){html,*{scroll-behavior:auto!important}*,*::before,*::after{animation:none!important;transition:none!important}[data-scroll-reveal],html.reveal-observer [data-scroll-reveal]{opacity:1!important;transform:none!important}}
`

export const Page = styled.main`max-width:var(--content);margin:0 auto;padding:0 clamp(22px,7vw,112px);`
export const HeaderBar = styled.header`height:78px;display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:1px solid var(--line);position:sticky;top:0;z-index:10;background:rgba(11,16,23,.9);backdrop-filter:blur(14px);margin:0 calc(clamp(22px,7vw,112px)*-1);padding:0 clamp(22px,7vw,112px);`
export const Brand = styled.a`font-size:15px;font-weight:650;letter-spacing:-.03em;white-space:nowrap;span{color:var(--accent-soft)}`
export const Nav = styled.nav<{ $open:boolean }>`display:flex;align-items:center;gap:clamp(12px,2vw,28px);a{font-size:11px;color:var(--muted);transition:color .2s;white-space:nowrap}a:hover,a[aria-current="location"]{color:var(--paper)}a[aria-current="location"]:after{content:'';display:block;height:1px;background:var(--accent-soft);margin-top:5px}@media(max-width:960px){display:${p=>p.$open?'flex':'none'};position:absolute;top:77px;left:0;right:0;padding:22px clamp(22px,7vw,112px);background:rgba(11,16,23,.98);border-bottom:1px solid var(--line);flex-direction:column;align-items:flex-start;gap:17px}`
export const HeaderActions = styled.div`display:flex;align-items:center;gap:13px;flex-shrink:0;button{border:0;background:none;color:var(--muted);font-size:11px;cursor:pointer;padding:8px 0}button:hover{color:var(--paper)}.active{color:var(--accent-pale)}.menu-toggle{display:none}@media(max-width:960px){.menu-toggle{display:block}}`
export const Hero = styled.section`min-height:calc(100svh - 78px);display:grid;grid-template-columns:1.12fr .88fr;align-items:center;gap:5vw;padding:70px 0 86px;@media(max-width:760px){grid-template-columns:1fr;gap:26px;padding:56px 0 72px;min-height:auto}`
export const Eyebrow = styled.p`font:11px/1.5 'Geist Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:var(--accent-pale);margin:0 0 22px`
export const HeroTitle = styled.h1`font-size:clamp(52px,6.4vw,92px);line-height:.94;letter-spacing:-.075em;font-weight:500;white-space:pre-line;margin:0 0 30px;max-width:900px;animation:hero-arrive .75s both;@keyframes hero-arrive{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`
export const Lead = styled.p`color:#d2dbe6;font-size:clamp(16px,1.45vw,19px);line-height:1.75;max-width:650px;margin:0 0 20px`
export const Muted = styled.p`color:var(--muted);font-size:14px;line-height:1.75;max-width:580px;margin:0`
export const ButtonRow = styled.div`display:flex;gap:24px;align-items:center;margin-top:34px;flex-wrap:wrap`
export const PrimaryLink = styled.a`display:inline-flex;align-items:center;gap:14px;padding:14px 18px;background:var(--accent);color:#fff;font-size:12px;font-weight:650;transition:transform .2s,background .2s;&:hover{transform:translateY(-2px);background:#2181dc}.arrow{font-size:16px}`
export const UnderlineLink = styled.a`font-size:12px;color:var(--paper);border-bottom:1px solid #596b80;padding:8px 0;transition:border-color .2s,color .2s;&:hover{border-color:var(--accent-soft);color:var(--accent-pale)}`
export const PortraitWrap = styled.div`position:relative;max-width:430px;justify-self:end;width:100%;@media(max-width:760px){justify-self:start;max-width:340px;margin-top:26px}`
export const Portrait = styled.div`aspect-ratio:4/5;position:relative;overflow:hidden;background:#1a2938;img{object-fit:cover;opacity:1;transition:transform .8s}.portrait-wrap:hover & img{transform:scale(1.025)}`
export const ImageCaption = styled.div`display:flex;justify-content:space-between;gap:12px;margin-top:12px;color:var(--muted);font:10px 'Geist Mono',monospace;letter-spacing:.04em`
export const Section = styled.section`padding:112px 0;border-top:1px solid var(--line);scroll-margin-top:90px;@media(max-width:760px){padding:76px 0}`
export const SectionHead = styled.div`display:grid;grid-template-columns:.65fr 1.35fr;gap:36px;margin-bottom:54px;@media(max-width:760px){grid-template-columns:1fr;gap:0;margin-bottom:36px}`
export const SectionTitle = styled.h2`font-size:clamp(40px,6vw,74px);line-height:1.01;letter-spacing:-.065em;font-weight:500;white-space:pre-line;margin:0`
export const ProjectGrid = styled.div`display:grid;grid-template-columns:1.12fr .88fr;gap:28px;align-items:start;@media(max-width:760px){grid-template-columns:1fr;gap:48px}`
export const ProjectCard = styled.article<{ $secondary?:boolean }>`min-width:0;${p=>p.$secondary?'margin-top:112px;':''}@media(max-width:760px){margin-top:0}`
export const Visual = styled.div<{ $variant:'treevo'|'vizenda' }>`height:clamp(260px,36vw,440px);position:relative;overflow:hidden;display:grid;place-items:center;border:1px solid ${p=>p.$variant==='treevo'?'#dce4d8':'#29415a'};background:${p=>p.$variant==='treevo'?'#f5f6ed':'#122237'};
  img{object-fit:contain;padding:6%;mix-blend-mode:multiply}.orb{width:42%;aspect-ratio:1;border:1px solid rgba(75,154,228,.7);border-radius:50%;position:absolute;box-shadow:0 0 90px rgba(16,110,199,.14),inset 0 0 60px rgba(75,154,228,.08)}.orb:before,.orb:after{content:'';position:absolute;border:1px solid rgba(75,154,228,.3);inset:14%;border-radius:50%;transform:rotate(45deg) scaleX(.42)}.orb:after{transform:rotate(-45deg) scaleX(.42)}.cross{position:absolute;width:70%;height:1px;background:rgba(75,154,228,.3);transform:rotate(-28deg)}.cross:after{content:'';position:absolute;width:1px;height:240px;background:rgba(75,154,228,.3);left:50%;top:-120px}.word{position:absolute;bottom:18px;left:20px;color:${p=>p.$variant==='treevo'?'#49634e':'rgba(241,245,250,.65)'};font:10px 'Geist Mono',monospace;letter-spacing:.1em;text-transform:uppercase}.index{position:absolute;top:18px;right:20px;color:${p=>p.$variant==='treevo'?'#265b42':'var(--accent-pale)'};font:10px 'Geist Mono',monospace}`
export const ProjectInfo = styled.div`display:flex;justify-content:space-between;align-items:baseline;gap:14px;flex-wrap:wrap;margin:19px 0 10px;h3{font-size:28px;letter-spacing:-.04em;font-weight:500;margin:0}.category{font:10px 'Geist Mono',monospace;color:var(--accent-pale);text-transform:uppercase;letter-spacing:.07em}`
export const Tags = styled.div`display:flex;flex-wrap:wrap;gap:8px;color:#d0d9e3;font:10px 'Geist Mono',monospace;margin-top:14px;span{border:1px solid var(--line);padding:7px 9px}`
export const Timeline = styled.div`border-left:1px solid #42556a;margin-left:8px;padding-left:34px;display:grid;gap:46px`
export const Role = styled.article`position:relative;max-width:820px;&:before{content:'';position:absolute;width:9px;height:9px;border-radius:50%;background:var(--accent-soft);left:-39px;top:7px;box-shadow:0 0 0 5px var(--ink)}.meta{display:flex;justify-content:space-between;gap:12px;align-items:baseline;flex-wrap:wrap}.company{font-size:22px;letter-spacing:-.03em}.role{color:var(--accent-pale);font:11px 'Geist Mono',monospace}.period{color:var(--muted);font:10px 'Geist Mono',monospace}`
export const SkillGrid = styled.div`display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line);@media(min-width:651px){&>[data-scroll-reveal]:nth-child(odd)>article{padding-right:40px}&>[data-scroll-reveal]:nth-child(even)>article{padding-left:40px;border-left:1px solid var(--line)}}@media(max-width:650px){grid-template-columns:1fr}`
export const Skill = styled.article`padding:25px 20px 25px 0;border-bottom:1px solid var(--line);h3{font:11px 'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.1em;color:var(--accent-pale);margin:0 0 13px}p{font-size:14px;color:#d0d9e3;line-height:1.8;margin:0}`
export const PersonalIntro = styled.p`font-size:clamp(17px,2vw,22px);line-height:1.65;color:#d2dbe6;max-width:840px;margin:-20px 0 45px`
export const Body = styled.p`color:var(--muted);font-size:14px;line-height:1.75;max-width:680px;margin:0 0 14px`
export const StoryGrid = styled.div`display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line);@media(max-width:760px){grid-template-columns:1fr}`
export const Story = styled.article`background:var(--ink);min-height:280px;padding:24px;display:flex;flex-direction:column;align-items:flex-start;.marker{font:10px 'Geist Mono',monospace;color:var(--accent-pale);letter-spacing:.08em;text-transform:uppercase;margin-bottom:auto}h3{font-size:22px;font-weight:500;letter-spacing:-.035em;margin:35px 0 12px}p{color:var(--muted);font-size:13px;line-height:1.75;margin:0}`
export const EducationGrid = styled.div`display:grid;grid-template-columns:1fr 1fr;gap:14px;@media(max-width:700px){grid-template-columns:1fr}`
export const EducationItem = styled.article`padding:22px;border:1px solid var(--line);min-height:140px;display:flex;flex-direction:column;justify-content:space-between;gap:20px;.period{font:10px 'Geist Mono',monospace;color:var(--accent-pale)}h3{font-size:17px;font-weight:550;margin:0 0 6px}p{font-size:13px;line-height:1.6;color:var(--muted);margin:0}`
export const ContactSection = styled.section`padding:112px 0 42px;border-top:1px solid var(--line);scroll-margin-top:90px;.contact-layout{display:grid;grid-template-columns:1.2fr .8fr;gap:30px;align-items:end}@media(max-width:760px){padding:76px 0 36px;.contact-layout{grid-template-columns:1fr;gap:28px}}`
export const ContactList = styled.div`display:grid;gap:10px;justify-items:start;a{color:var(--muted);font-size:13px;border-bottom:1px solid var(--line);padding:8px 0;transition:color .2s,border .2s}a:hover{color:var(--accent-pale);border-color:var(--accent-soft)}`
export const Footer = styled.footer`display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;border-top:1px solid var(--line);margin-top:68px;padding-top:18px;color:var(--muted);font:10px 'Geist Mono',monospace;@media(max-width:600px){flex-direction:column}`
