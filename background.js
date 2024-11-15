chrome.runtime.onInstalled.addListener(details => {
  console.log(details);

  chrome.contextMenus.create({
    title: "Search for TV Show",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  });

  chrome.contextMenus.onClicked.addListener((event, tab) => {
    console.log(event);
  });

  chrome.contextMenus.create({
    title: "Search for TV Show",
    id: "contextMenu12",
    parentId: "contextMenu1",
    contexts: ["page", "selection"],
  });

  chrome.contextMenus.create({
    title: "Search for TV Show",
    id: "contextMenu3",
    parentId: "contextMenu1",
    contexts: ["page", "selection"],
  });
});

console.log("background script running");
