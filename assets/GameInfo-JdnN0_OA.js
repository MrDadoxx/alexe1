import{r as u,i as p,j as s,L as g,g as f,H as b}from"./index-CHhIB4uj.js";function y({name:r}){const[e,i]=u.useState(0),t=u.useRef(null),o=p[r].images;u.useEffect(()=>{o.forEach(h=>{const l=new Image;l.src=h})},[o]);const n=()=>{const l=e===o.length-1?0:e+1;i(l),m()},d=()=>{const l=e===0?o.length-1:e-1;i(l),m()},m=()=>{t.current&&(t.current.classList.add("image-changed"),setTimeout(()=>{t.current&&t.current.classList.remove("image-changed")},500))};return s.jsxs("div",{className:"image-slider",children:[s.jsx("button",{className:"image-slider__button-left",onClick:d,children:"❮"}),s.jsx("div",{className:"image-slider__image",ref:t,style:{backgroundImage:`url(${o[e]})`}}),s.jsx("button",{className:"image-slider__button-right",onClick:n,children:"❯"})]})}function c({type:r,link:e}){const i=`game-link ${r}`,t=r!="privacy"?p[r]:"";return r==="privacy"?s.jsx(g,{target:"_blank",className:i,to:e,style:{backgroundImage:`url(${t})`},children:"Privacy Policy"}):s.jsx("a",{className:i,href:e,target:"_blank",style:{backgroundImage:`url(${t})`}})}class a extends HTMLElement{constructor(){super(),this.isIframeLoaded=!1,this.setupDom()}static get observedAttributes(){return["videoid","playlistid"]}connectedCallback(){this.addEventListener("pointerover",a.warmConnections,{once:!0}),this.addEventListener("click",()=>this.addIframe())}get videoId(){return encodeURIComponent(this.getAttribute("videoid")||"")}set videoId(e){this.setAttribute("videoid",e)}get playlistId(){return encodeURIComponent(this.getAttribute("playlistid")||"")}set playlistId(e){this.setAttribute("playlistid",e)}get videoTitle(){return this.getAttribute("videotitle")||"Video"}set videoTitle(e){this.setAttribute("videotitle",e)}get videoPlay(){return this.getAttribute("videoPlay")||"Play"}set videoPlay(e){this.setAttribute("videoPlay",e)}get videoStartAt(){return this.getAttribute("videoStartAt")||"0"}get autoLoad(){return this.hasAttribute("autoload")}get noCookie(){return this.hasAttribute("nocookie")}get posterQuality(){return this.getAttribute("posterquality")||"hqdefault"}get posterLoading(){return this.getAttribute("posterloading")||"lazy"}get params(){return`start=${this.videoStartAt}&${this.getAttribute("params")}`}set params(e){this.setAttribute("params",e)}setupDom(){const e=this.attachShadow({mode:"open"});let i="";window.liteYouTubeNonce&&(i=`nonce="${window.liteYouTubeNonce}"`),e.innerHTML=`
      <style ${i}>
        :host {
          contain: content;
          display: block;
          position: relative;
          width: 100%;
          padding-bottom: calc(100% / (16 / 9));
        }

        @media (max-width: 40em) {
          :host([short]) {
            padding-bottom: calc(100% / (9 / 16));
          }
        }

        #frame, #fallbackPlaceholder, iframe {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
        }

        #frame {
          cursor: pointer;
        }

        #fallbackPlaceholder {
          object-fit: cover;
        }

        #frame::before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          background-image: linear-gradient(180deg, #111 -20%, transparent 90%);
          height: 60px;
          width: 100%;
          z-index: 1;
        }

        #playButton {
          width: 68px;
          height: 48px;
          background-color: transparent;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');
          z-index: 1;
          border: 0;
          border-radius: inherit;
        }

        #playButton:before {
          content: '';
          border-style: solid;
          border-width: 11px 0 11px 19px;
          border-color: transparent transparent transparent #fff;
        }

        #playButton,
        #playButton:before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          cursor: inherit;
        }

        /* Post-click styles */
        .activated {
          cursor: unset;
        }

        #frame.activated::before,
        #frame.activated > #playButton {
          display: none;
        }
      </style>
      <div id="frame">
        <picture>
          <source id="webpPlaceholder" type="image/webp">
          <source id="jpegPlaceholder" type="image/jpeg">
          <img id="fallbackPlaceholder" referrerpolicy="origin" loading="lazy">
        </picture>
        <button id="playButton"></button>
      </div>
    `,this.domRefFrame=e.querySelector("#frame"),this.domRefImg={fallback:e.querySelector("#fallbackPlaceholder"),webp:e.querySelector("#webpPlaceholder"),jpeg:e.querySelector("#jpegPlaceholder")},this.domRefPlayButton=e.querySelector("#playButton")}setupComponent(){this.initImagePlaceholder(),this.domRefPlayButton.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),this.setAttribute("title",`${this.videoPlay}: ${this.videoTitle}`),(this.autoLoad||this.isYouTubeShort())&&this.initIntersectionObserver()}attributeChangedCallback(e,i,t){switch(e){case"videoid":case"playlistid":case"videoTitle":case"videoPlay":{i!==t&&(this.setupComponent(),this.domRefFrame.classList.contains("activated")&&(this.domRefFrame.classList.remove("activated"),this.shadowRoot.querySelector("iframe").remove(),this.isIframeLoaded=!1));break}}}addIframe(e=!1){if(!this.isIframeLoaded){let i=e?0:1;const t=this.noCookie?"-nocookie":"";let o;this.playlistId?o=`?listType=playlist&list=${this.playlistId}&`:o=`${this.videoId}?`,this.isYouTubeShort()&&(this.params=`loop=1&mute=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${this.videoId}`,i=1);const n=`
<iframe frameborder="0" title="${this.videoTitle}"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
  src="https://www.youtube${t}.com/embed/${o}autoplay=${i}&${this.params}"
></iframe>`;this.domRefFrame.insertAdjacentHTML("beforeend",n),this.domRefFrame.classList.add("activated"),this.isIframeLoaded=!0,this.attemptShortAutoPlay(),this.dispatchEvent(new CustomEvent("liteYoutubeIframeLoaded",{detail:{videoId:this.videoId},bubbles:!0,cancelable:!0}))}}initImagePlaceholder(){var t,o;const e=`https://i.ytimg.com/vi_webp/${this.videoId}/${this.posterQuality}.webp`,i=`https://i.ytimg.com/vi/${this.videoId}/${this.posterQuality}.jpg`;this.domRefImg.fallback.loading=this.posterLoading,this.domRefImg.webp.srcset=e,this.domRefImg.jpeg.srcset=i,this.domRefImg.fallback.src=i,this.domRefImg.fallback.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),(o=(t=this.domRefImg)==null?void 0:t.fallback)==null||o.setAttribute("alt",`${this.videoPlay}: ${this.videoTitle}`)}initIntersectionObserver(){const e={root:null,rootMargin:"0px",threshold:0};new IntersectionObserver((t,o)=>{t.forEach(n=>{n.isIntersecting&&!this.isIframeLoaded&&(a.warmConnections(),this.addIframe(!0),o.unobserve(this))})},e).observe(this)}attemptShortAutoPlay(){this.isYouTubeShort()&&setTimeout(()=>{var e,i;(i=(e=this.shadowRoot.querySelector("iframe"))==null?void 0:e.contentWindow)==null||i.postMessage('{"event":"command","func":"playVideo","args":""}',"*")},2e3)}isYouTubeShort(){return this.getAttribute("short")===""&&window.matchMedia("(max-width: 40em)").matches}static addPrefetch(e,i){const t=document.createElement("link");t.rel=e,t.href=i,t.crossOrigin="true",document.head.append(t)}static warmConnections(){a.isPreconnected||window.liteYouTubeIsPreconnected||(a.addPrefetch("preconnect","https://i.ytimg.com/"),a.addPrefetch("preconnect","https://s.ytimg.com"),a.addPrefetch("preconnect","https://www.youtube.com"),a.addPrefetch("preconnect","https://www.google.com"),a.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),a.addPrefetch("preconnect","https://static.doubleclick.net"),a.isPreconnected=!0,window.liteYouTubeIsPreconnected=!0)}}a.isPreconnected=!1;customElements.define("lite-youtube",a);function w({name:r}){const e=f[r.toLowerCase()];if(!e)return s.jsx("p",{children:"Game not found"});const{description:i,playstore:t,itchio:o,gamejolt:n,privacy:d}=e;return s.jsx("div",{className:"game-info-wrapper",children:s.jsxs("div",{className:"game-info",children:[s.jsx(b,{}),s.jsx("h2",{children:e.name}),s.jsx("p",{children:i}),s.jsx(y,{name:r.toLowerCase()}),s.jsxs("div",{className:"game-links",children:[t&&s.jsx(c,{type:"playstore",link:t}),o&&s.jsx(c,{type:"itchio",link:o}),n&&s.jsx(c,{type:"gamejolt",link:n}),d&&s.jsx(c,{type:"privacy",link:d})]})]})})}export{w as default};
