async function loadComponent(id, file) {
    const container = document.getElementById(id);

    if (!container) return;

    const response = await fetch(file);

    if (!response.ok) {
        throw new Error("Could not load " + file);
    }

    container.innerHTML = await response.text();
}

async function loadSite() {
    try {
        await Promise.all([
            loadComponent("site-header", "components/header.html"),
            loadComponent("site-footer", "components/footer.html")
        ]);

        // Load config first, then the main script
        await loadScript("js/config.js");
        await loadScript("js/script.js");

        document.dispatchEvent(new Event("siteComponentsLoaded"));

    } catch (error) {
        console.error("Site loading error:", error);
    }
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src + "?v=" + Date.now();
        script.onload = resolve;
        script.onerror = () => reject(
            new Error("Could not load " + src)
        );
        document.body.appendChild(script);
    });
}

loadSite();