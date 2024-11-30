// confirm("hello world")
const text = [];
const aTags = document.getElementsByTagName("a");
for (const tag of aTags) {
  //   tag.textContent = "I'm a link";
  text.push(tag.textContent);
}

//PASS DATA TO BACKGROUND SCRIPT
chrome.storage.local.set({
  text,
});

chrome.runtime.sendMessage(null, text, res => {
  console.log("tihs is the response contentScript", res);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("message from background", message);
  sendResponse("I got your message");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("message from background", message);
  console.log("sender from background", sender);
  sendResponse("I got your message");
});
