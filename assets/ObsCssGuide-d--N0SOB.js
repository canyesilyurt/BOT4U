import{d as S,c as l,b as o,e as C,u as c,t,k as f,g as k,q as p,i as h,s as d,o as a,_ as z}from"./index-CzuIShLa.js";import{c as w}from"./createLucideIcon-DrMzS2ha.js";import{C as _}from"./check-6ooFzXvq.js";import{C as j}from"./copy-B1qVTaWr.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=w("CodeIcon",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]),I={key:0,class:"card section-card obs-css-guide"},E={class:"obs-css-title"},N={tabindex:"0"},V={key:0,role:"status"},T={class:"obs-css-note"},A={key:0,class:"obs-css-note"},G=`html, body {
  background: transparent !important;
  margin: 0 !important;
}

`,m=`.tool-goal {
  padding: 24px !important;
  background: rgba(10, 22, 16, .9) !important;
  border: 2px solid #49cb81 !important;
  border-radius: 20px !important;
}
.tool-goal-heading { color: #ffffff !important; }
.tool-goal-track { height: 18px !important; border-radius: 12px !important; }
.tool-goal-track > div { background: #49cb81 !important; }`,K=S({__name:"ObsCssGuide",props:{type:{}},setup(u){const x=u,r=h(!1),i=h(!1),y={alerts:{selectors:".alert-host, .alert-view, .alert-media img, .alert-text",css:`.alert-view {
  padding: 28px !important;
  background: rgba(10, 22, 16, .9) !important;
  border: 2px solid #49cb81 !important;
  border-radius: 24px !important;
  box-shadow: 0 0 25px #49cb8155 !important;
}
.alert-text {
  color: #ffffff !important;
  font-size: 42px !important;
  text-shadow: 0 2px 8px #000 !important;
}
.alert-media img { max-height: 240px !important; }`},"subscriber-goal":{selectors:".tool-goal, .tool-goal-heading, .tool-goal-track, .tool-goal-track > div",css:m},"follower-goal":{selectors:".tool-goal, .tool-goal-heading, .tool-goal-track, .tool-goal-track > div",css:m},"kicks-goal":{selectors:".tool-goal, .tool-goal-heading, .tool-goal-track, .tool-goal-track > div",css:m},"chat-overlay":{selectors:".tool-chat-lines, .tool-chat-line, .tool-chat-line > strong, .chat-message-content, .tool-chat-badges, .kick-emote-image",css:`.tool-chat-line {
  padding: 12px 16px !important;
  background: rgba(10, 22, 16, .85) !important;
  border-left: 3px solid #49cb81 !important;
  border-radius: 12px !important;
  font-size: 22px !important;
}
.tool-chat-line > strong { color: #49cb81 !important; }
.chat-message-content { color: #ffffff !important; }
.tool-chat-badges { gap: 5px !important; }
.kick-emote-image { height: 1.4em !important; }`},"emoji-combo":{selectors:".emoji-combos, .emoji-combo, .emoji-combo strong, .kick-emote-image",css:`.emoji-combo {
  padding: 16px !important;
  background: rgba(10, 22, 16, .85) !important;
  border-radius: 20px !important;
  font-size: 70px !important;
}
.emoji-combo strong { color: #49cb81 !important; font-size: 36px !important; }`},"screen-emojis":{selectors:".effect-screen-emojis, .floating-emoji, .floating-emoji .kick-emote-image",css:`.floating-emoji {
  filter: drop-shadow(0 0 12px #49cb81) !important;
}
.floating-emoji .kick-emote-image {
  border-radius: 12px !important;
}`},"event-labels":{selectors:".effect-event-labels, .event-label-text",css:`.event-label-text {
  padding: 16px 24px !important;
  background: rgba(10, 22, 16, .85) !important;
  color: #ffffff !important;
  font-family: Arial, sans-serif !important;
  font-size: 32px !important;
  border-left: 4px solid #49cb81 !important;
  border-radius: 10px !important;
}`},"viewer-count":{selectors:".viewer-counter, .counter-icon, .viewer-counter strong",css:`.viewer-counter {
  background: rgba(10, 22, 16, .9) !important;
  padding: 14px 24px !important;
  border: 2px solid #49cb81 !important;
  border-radius: 20px !important;
  color: #ffffff !important;
}
.counter-icon { color: #49cb81 !important; }
.viewer-counter strong { font-size: 36px !important; }`},subathon:{selectors:".subathon-widget, .subathon-time, .subathon-info",css:`.subathon-widget {
  padding: 24px !important;
  background: rgba(10, 22, 16, .9) !important;
  border: 2px solid #49cb81 !important;
  border-radius: 24px !important;
}
.subathon-time { color: #49cb81 !important; font-size: 72px !important; }
.subathon-info { color: #ffffff !important; font-size: 18px !important; }`}},n=d(()=>y[x.type]),g=d(()=>{var s;return G+(((s=n.value)==null?void 0:s.css)||"")}),e=d(()=>z.value==="en"?{title:"Style this widget in OBS",intro:"Available on every plan. In OBS, open the browser source properties and paste this template into Custom CSS. Edit its colors, sizes and borders to suit your stream.",selectors:"CSS selectors",example:"Example template",copy:"Copy CSS",copied:"CSS copied",failed:"Could not copy. Select the code and copy it manually.",note:"CSS applies only to this OBS source. It does not change saved panel settings or unlock plan features. !important overrides inline appearance settings.",physics:"For screen emojis, keep transform, position, width and height unchanged so the bounce animation remains consistent."}:{title:"Bu widget’ı OBS’de özelleştir",intro:"Tüm planlarda kullanılabilir. OBS’de tarayıcı kaynağının özelliklerini açıp bu şablonu Özel CSS alanına yapıştır. Renkleri, boyutları ve kenarlıkları yayın tarzına göre düzenle.",selectors:"CSS seçicileri",example:"Örnek şablon",copy:"CSS’i kopyala",copied:"CSS kopyalandı",failed:"Kopyalanamadı. Kodu seçerek elle kopyalayabilirsin.",note:"CSS yalnızca bu OBS kaynağında uygulanır. Paneldeki kayıtlı ayarları değiştirmez ve plan özelliklerini açmaz. !important, satır içi görünüm ayarlarını geçersiz kılar.",physics:"Ekranda emojiler için transform, position, width ve height değerlerini değiştirme; sekme animasyonunun hesapları bu değerlere bağlıdır."});async function v(){try{await navigator.clipboard.writeText(g.value),r.value=!0,i.value=!1}catch{i.value=!0,r.value=!1}}return(s,b)=>n.value?(a(),l("section",I,[o("div",E,[C(c(O),{size:22}),o("h2",null,t(e.value.title),1)]),o("p",null,t(e.value.intro),1),o("p",null,[o("strong",null,t(e.value.selectors)+":",1),b[0]||(b[0]=f()),o("code",null,t(n.value.selectors),1)]),o("details",null,[o("summary",null,t(e.value.example),1),o("pre",N,[o("code",null,t(g.value),1)]),o("button",{class:"button secondary",type:"button",onClick:v},[r.value?(a(),k(c(_),{key:0,size:16})):(a(),k(c(j),{key:1,size:16})),f(t(r.value?e.value.copied:e.value.copy),1)]),i.value?(a(),l("p",V,t(e.value.failed),1)):p("",!0)]),o("p",T,t(e.value.note),1),u.type==="screen-emojis"?(a(),l("p",A,t(e.value.physics),1)):p("",!0)])):p("",!0)}}),R=B(K,[["__scopeId","data-v-9dd1d098"]]);export{R as O};
