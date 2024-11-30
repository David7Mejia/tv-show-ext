chrome.runtime.onInstalled.addListener(details => {
  // console.log(details);
  chrome.storage.local.set({
    shows: [],
  });
  // chrome.contextMenus.create({
  //   title: "Search for TV Show",
  //   id: "contextMenu1",
  //   contexts: ["page", "selection"],
  // });

  // * Search on google
  //  Search on google
  // chrome.contextMenus.onClicked.addListener((event, tab) => {
  //   chrome.search.query({
  //     disposition: "NEW_TAB",
  //     text: `imdb ${event.selectionText}`,
  //   });
  // });
  //* __________________________________

  // * Creates tab with specified link
  // chrome.contextMenus.onClicked.addListener(event => {
  //   chrome.tabs.create({
  //     url: `https://www.imdb.com/find?q=${event.selectionText}`,
  //   });
  // });
  // * __________________________________________

  // * Get the tabs that are open
  // chrome.contextMenus.onClicked.addListener(event => {
  //   console.log(event);
  //   chrome.tabs.query(
  //     {
  //       currentWindow: true,
  //     },
  //     tabs => {
  //       console.log(tabs);
  //     }
  //   );
  // });
  // * __________________________________________

  // * Creates Context Menus for the app
  chrome.contextMenus.create({
    title: "Search for TV Show",
    id: "getShow",
    // parentId: "contextMenu1",
    contexts: ["page", "selection"],
  });

  chrome.contextMenus.create({
    title: "Read Text",
    id: "readText",
    contexts: ["page", "selection"],
  });
  // chrome.contextMenus.create({
  //   title: "Search for TV Show",
  //   id: "contextMenu3",
  //   parentId: "contextMenu1",
  //   contexts: ["page", "selection"],
  // });
  //* __________________________________________

  // * Fetch from API
  chrome.contextMenus.onClicked.addListener(event => {
    if (event.menuItemId === "getShow") {
      fetch(`http://api.tvmaze.com/search/shows?q=${event.selectionText}`)
        .then(res => res.json())
        .then(data => {
          chrome.storage.local.set({
            shows: data,
          });
        });
    } else if (event.menuItemId === "readText") {
      chrome.tts.speak(event.selectionText);
    }
  });
});

// * Sets local storage
chrome.storage.local.get("shows", data => {
  console.log("this is the data yo: ", data);
});

// * Sends message to content script
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  sendResponse("yooooooooooooooooooooooo");
  // in order to send message to content script, we need to use the tab id
  chrome.tabs.sendMessage(sender.tab.id, "I got your message");
});
console.log("background script running");
