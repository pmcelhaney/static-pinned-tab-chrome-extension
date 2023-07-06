chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.pinned) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: modifyLinks,
    });
  }
});

function modifyLinks() {
  document.querySelectorAll('a[href]').forEach(a => a.setAttribute('target', '_blank'));
}
