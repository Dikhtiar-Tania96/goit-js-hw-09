const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a=null;function d(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(function(n){t.disabled=!0,e.disables=!1,d(),a=setInterval(d,1e3)})),e.addEventListener("click",(function(d){t.disabled=!1,e.disabled=!0,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.3b8123fc.js.map