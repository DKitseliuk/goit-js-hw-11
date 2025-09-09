import{a as d,S as u,i as m}from"./assets/vendor-BK_rxH-O.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();function p(t){return d.get("https://pixabay.com/api/",{params:{key:"52124620-04c3728bcdfdd891621e81587",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:36}}).then(s=>s.data.hits).catch(s=>[])}const n=document.querySelector(".gallery"),i=document.querySelector(".span-loader"),y=new u(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:1});function g(t){let s="";for(const r of t)s+=`<li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
            <img
                class="gallery-img"
                src="${r.webformatURL}"
                alt="${r.tags}"
            />
            <ul class="gallery-desc">
                <li class="gallery-desc-item">
                    <span class="gallery-desc-item-name">Likes</span>
                    <span class="gallery-desc-item-value">${r.likes}</span>
                </li>
                <li class="gallery-desc-item">
                    <span class="gallery-desc-item-name">Views</span>
                    <span class="gallery-desc-item-value">${r.views}</span>
                </li>
                <li class="gallery-desc-item">
                    <span class="gallery-desc-item-name">Comments</span>
                    <span class="gallery-desc-item-value">${r.comments}</span>
                </li>
                <li class="gallery-desc-item">
                    <span class="gallery-desc-item-name">Downloads</span>
                    <span class="gallery-desc-item-value">${r.downloads}</span>
                </li>
            </ul>
            </a>
        </li>`;n.insertAdjacentHTML("beforeend",s),y.refresh()}function f(){n.innerHTML=""}function h(){i.classList.add("loader")}function L(){i.classList.remove("loader")}const c=document.querySelector(".form"),v=t=>{t.preventDefault();const s=t.target.elements["search-text"].value;c.reset(),s&&(f(),h(),p(s).then(r=>{if(L(),r.length===0)throw new Error("Invalid search query");g(r)}).catch(r=>{m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}))};c.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
