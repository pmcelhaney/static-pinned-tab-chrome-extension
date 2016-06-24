chrome.tabs.onActivated.addListener(function(tab) {
  chrome.tabs.get(tab.tabId, function(t) {
    if (t.pinned) {
      chrome.tabs.executeScript({
        code: "document.querySelectorAll('a[href]').forEach(a => a.setAttribute('target', '_blank'));"
      });
    }
  });
});
