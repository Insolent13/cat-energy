!function(){"use strict";const t="header__nav",e="header__menu-toggle",s="--is-opened",o="--is-closed",i=document.querySelector(`.${t}`),c=document.querySelector(`.${e}`);i.classList.add(`${t}${o}`),c.classList.add(`${e}${o}`),c.addEventListener("click",(()=>{c.style.setProperty("--animation-top-strip","top-to-burger"),c.style.setProperty("--animation-bottom-strip","bottom-to-burger")}),{once:!0}),c.addEventListener("click",(()=>{i.classList.toggle(`${t}${s}`),i.classList.toggle(`${t}${o}`),c.classList.toggle(`${e}${s}`),c.classList.toggle(`${e}${o}`)}))}();