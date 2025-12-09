chrome.commands.onCommand.addListener((command) => {
  if (command === 'duplicate-tab') {
    // Get the currently active tab in the current window
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      const currentTab = tabs[0];
      if (currentTab) {
        // Duplicate the tab
        chrome.tabs.duplicate(currentTab.id);
      }
    });
  }
});