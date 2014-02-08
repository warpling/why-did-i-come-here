
//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	// chrome.pageAction.show(sender.tab.id);
    // sendResponse();
    chrome.tabs.executeScript({
        code: 'document.body.style.color="purple"'
    });

    chrome.tabs.executeScript(null, {file: "src/bg/overlay.js"});
  });