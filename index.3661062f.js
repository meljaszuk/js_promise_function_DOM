function n(n,e){return new Promise(function(t,c){n.addEventListener("".concat(e),function(){t("It was ".concat(e," on the element: ").concat(n.nodeName,", id: ").concat(n.id,"."))})})}function e(n){document.body.insertAdjacentHTML("beforeend",'<div class="message">'.concat(n,"</div>"))}var t=document.getElementById("login"),c=document.getElementById("password"),o=document.getElementById("submit");n(t,"click").then(e),n(c,"click").then(e),n(o,"click").then(e),n(t,"input").then(e),n(c,"input").then(e),n(t,"blur").then(e),n(c,"blur").then(e),n(o,"blur").then(e);
//# sourceMappingURL=index.3661062f.js.map
