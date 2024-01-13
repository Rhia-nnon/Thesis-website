"use strict";
const bdark = document.querySelector("#bdark");
const body = document.querySelector("body");
load();
bdark.addEventListener("click", (e) => {
    body.classList.toggle("lightmode");
    store(body.classList.contains("lightmode"));
});
function load() {
    const lightmode = localStorage.getItem("lightmode");
    if (!lightmode) {
        store("false");
    }
    else if (lightmode == "true") {
        body.classList.add("lightmode");
    }
}
function store(value) {
    localStorage.setItem("lightmode", value);
}
//# sourceMappingURL=index.js.map