chrome.tabs.onUpdated.addListener(function(tabId) {
  chrome.tabs.get(tabId, function(tab) {
    if (tab.pinned) {
      chrome.tabs.executeScript({
        code: "document.querySelectorAll('a[href]').forEach(a => a.setAttribute('target', '_blank'));"
      });
    }
  });
});
