import{u as x,j as e,L as f,i as m,r as l,g as j,H as h}from"./index-DmABRPLS.js";function g({type:s,link:n}){const i=`game-link ${s}`,a=s!="privacy"?m[s]:"",{traductions:t}=x();return s==="privacy"?e.jsx(f,{className:i,to:n,style:{backgroundImage:`url(${a})`},children:t.privacy}):e.jsx("a",{className:i,href:n,target:"_blank",style:{backgroundImage:`url(${a})`}})}function p({name:s}){const[n,i]=l.useState(0),a=l.useRef(null),t=l.useMemo(()=>m[s]&&typeof m[s]!="string"?m[s].images:[],[s]);l.useEffect(()=>{t.forEach(d=>{const r=new Image;r.src=d})},[t]);const c=()=>{const r=n===t.length-1?0:n+1;i(r),u()},o=()=>{const r=n===0?t.length-1:n-1;i(r),u()},u=()=>{a.current&&(a.current.classList.add("image-changed"),setTimeout(()=>{a.current&&a.current.classList.remove("image-changed")},500))};return e.jsxs("div",{className:"image-slider",children:[e.jsx("button",{className:"image-slider__button-left",onClick:o,children:"❮"}),e.jsx("div",{className:"image-slider__image",ref:a,style:{backgroundImage:`url(${t[n]})`}}),e.jsx("button",{className:"image-slider__button-right",onClick:c,children:"❯"})]})}function v({name:s,description:n}){const i=j[s.toLowerCase()];if(!i)return e.jsx("p",{children:"Game not found"});const{playstore:a,itchio:t,gamejolt:c,privacy:o}=i;return e.jsx("div",{className:"game-info-wrapper",children:e.jsxs("div",{className:"game-info",children:[e.jsx(h,{}),e.jsx("h2",{children:i.name}),e.jsx("p",{children:n}),e.jsx(p,{name:s.toLowerCase()}),e.jsxs("div",{className:"game-links",children:[a&&e.jsx(g,{type:"playstore",link:a}),t&&e.jsx(g,{type:"itchio",link:t}),c&&e.jsx(g,{type:"gamejolt",link:c}),o&&e.jsx(g,{type:"privacy",link:o})]})]})})}export{v as default};
