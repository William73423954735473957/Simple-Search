function search() {
    let query = document.getElementById("searchInput").value.trim();
    let selectedEngine = document.getElementById("searchEngineDropdown").value;

    if (query) {
        console.log(`Input received: ${query} : On text search`);
        if (query.includes('.') && !query.startsWith('www.') && !query.startsWith('http')) {
            window.location.replace(`https://${query}`, "_blank");
        } else if (query.startsWith('https://') || query.startsWith('http://')) {
            window.location.replace(query, "_blank"); 
        } else if (query.includes('.')) {
            window.location.replace(`https://www.${query}`, "_blank");
        } else {
            if (selectedEngine === "google") {
                window.location.replace(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
            } else if (selectedEngine === "bing") {
                window.location.replace(`https://www.bing.com/search?q=${encodeURIComponent(query)}`, "_blank");
            } else if (selectedEngine === "duckduckgo") {
                window.location.replace(`https://duckduckgo.com/?q=${encodeURIComponent(query)}`, "_blank");
            } else if (selectedEngine === "yahoo") {
                window.location.replace(`https://search.yahoo.com/search?p=${encodeURIComponent(query)}`, "_blank");
            } else if (selectedEngine === "wikipedia") {
                window.location.replace(`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(query)}`, "_blank");
            }
        }
    } 
}

function imageSearch() {
    let query = document.getElementById("searchInput").value.trim();
    let selectedEngine = document.getElementById("searchEngineDropdown").value;
    
    if (query) {
        console.log(`Input received: ${query} : On image search`);
        if (selectedEngine === "google") {
            window.location.replace(`https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`, "_blank");
        } else if (selectedEngine === "bing") {
            window.location.replace(`https://www.bing.com/images/search?q=${encodeURIComponent(query)}`, "_blank");
        } else if (selectedEngine === "duckduckgo") {
            window.location.replace(`https://duckduckgo.com/?q=${encodeURIComponent(query)}&iax=images&ia=images`, "_blank");
        } else if (selectedEngine === "yahoo") {
            window.location.replace(`https://images.search.yahoo.com/search/images?p=${encodeURIComponent(query)}`, "_blank");
        } else if (selectedEngine === "wikipedia") {
            window.location.replace(`https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(query)}`, "_blank");
        }
    }
}