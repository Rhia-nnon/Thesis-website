const bdark:any = document.querySelector("#bdark");
const body:any = document.querySelector("body");

load();

bdark.addEventListener("click", (e: any) => {
    body.classList.toggle("lightmode");
    store(body.classList.contains("lightmode"));
});

function load() {
    const lightmode = localStorage.getItem("lightmode");

    if (!lightmode) {
        store("false");
    } else if (lightmode == "true") {
        body.classList.add("lightmode");
    }
}

function store(value:string) {
    localStorage.setItem("lightmode", value)
}