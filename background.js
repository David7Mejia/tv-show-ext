chrome.runtime.onInstalled.addListener(details => {
  console.log(details);

  chrome.contextMenus.create({
    title: "Search for TV Show",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  });

  //  Search on google
  // chrome.contextMenus.onClicked.addListener((event, tab) => {
  //   chrome.search.query({
  //     disposition: "NEW_TAB",
  //     text: `imdb ${event.selectionText}`,
  //   });
  // });
  // __________________________________

  chrome.contextMenus.onClicked.addListener(event => {
    chrome.tabs.create({
      url: `https://www.imdb.com/find?q=${event.selectionText}`,
    });
  });
  // chrome.contextMenus.create({
  //   title: "Search for TV Show",
  //   id: "contextMenu12",
  //   parentId: "contextMenu1",
  //   contexts: ["page", "selection"],
  // });

  // chrome.contextMenus.create({
  //   title: "Search for TV Show",
  //   id: "contextMenu3",
  //   parentId: "contextMenu1",
  //   contexts: ["page", "selection"],
  // });
});

console.log("background script running");
