function injectScript() {
    const s = document.createElement("script");
    s.src = chrome.runtime.getURL("injected.js");
    s.type = "module";
    (document.head || document.documentElement).appendChild(s);
    s.remove();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => injectScript());
} else {
    injectScript();
}
