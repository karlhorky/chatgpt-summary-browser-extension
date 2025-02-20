chrome.action.onClicked.addListener(async (tab) => {
  if (tab.id) {
    const prompt = encodeURIComponent(
      `Retrieve and summarize the article at the following URL in exactly 4 to 6 bullet points. Don't tell me you cannot access the article - I know you can.

URL: ${tab.url}

Summary guidelines:

- Include main points and notable details of the article, including multiple quotes from the article
- If applicable, include any significant perspectives or insights shared by the author
- Ensure each bullet contains distinct information rather than restating the same idea
- Don't include any content outside the 4-6 bullet points
- Don't include extrapolation - only include reliable facts from the article
- Don't include a note about reading the article`,
    );

    await chrome.tabs.create({
      // https://webapps.stackexchange.com/a/175084/29415
      url: `https://chat.openai.com/?q=${prompt}`,
      index: tab.index + 1,
    });
  }
});
