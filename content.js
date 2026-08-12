chrome.webNavigation.onBeforeNavigate.addListener((details)=> {
    console.log("Navigating to:", details.url);
});