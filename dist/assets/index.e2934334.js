import{A as w,C as f,G as u}from"./vendor.8051c3f6.js";const h=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}};h();const p=r=>new Promise(i=>{r.loader.add("assets/hello-world.png").load(()=>{i()})}),g=async()=>{let r=new w;document.body.style.margin="0",r.renderer.view.style.position="absolute",r.renderer.view.style.display="block",r.renderer.resize(window.innerWidth,window.innerHeight),await p(r);let i=new f;r.stage.addChild(i);let d=[8802749,8079799,7291314,6502828,5648806,4795041,3810203,2563222,3810203,4795041,5648806,6502828,7291314,8079799,8802749],n=0,e=screen.width,t=screen.height,o=0,a=0,s=new u;s.beginFill(d[n]),s.drawRect(0,0,e,t),r.stage.addChild(s),n++;let c=!0;for(;c;){if(e<screen.width/50){c=!1;break}t-=10,e-=10,o+=4,a+=4;let l=new u;l.beginFill(d[n]),l.drawRect(o,a,e,t),r.stage.addChild(l),n++,n==d.length&&(n=0)}window.addEventListener("resize",l=>{r.renderer.resize(window.innerWidth,window.innerHeight),i.x=window.innerWidth/2,i.y=window.innerHeight/2}),document.body.appendChild(r.view)};g();
