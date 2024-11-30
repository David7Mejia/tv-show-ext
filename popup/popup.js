chrome.storage.local.get(["shows"], data => {
  //   console.log("this is the data yo: ", data);
  for (const show of data.shows) {
    renderShow(show);
  }
});

const renderShow = show => {
  const showDiv = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = show.show.name;

  const image = document.createElement("img");
  image.src = show?.show?.image?.medium;

  showDiv.appendChild(title);
  showDiv.appendChild(image);

  document.body.appendChild(showDiv);
};
