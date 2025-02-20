chrome.action.onClicked.addListener(async (tab) => {
  if (tab.id) {
    const prompt = encodeURIComponent(
      `Summarize the following URL in 3-5 bullet points, even if you retrieve it from the web

- ${tab.url}`,
    );

    await chrome.tabs.create({
      // https://webapps.stackexchange.com/a/175084/29415
      url: `https://chat.openai.com/?q=${prompt}`,
      index: tab.index + 1,
    });
  }
});
