exports.shortLink = (originLink) => {
  let linkId = '';
  let allLinkIds = [];
  let timesGenerated = 0;
  let response = {};
  const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // Generate ID one time, then check if this ID is unique in allLinkIds
  // If it did not find unique ID for 10 times, stop the loop
  do {
      for(let i = 0; i < 6; i++) {
        linkId += string.charAt(Math.round(Math.random() * (string.length - 1)));
      }
      timesGenerated++;
  } while (allLinkIds.includes(linkId) && timesGenerated < 10);

  // Add unique ID to array
  allLinkIds.push(linkId);
  const shortLink = 'http://short.me/' + linkId;
  if (timesGenerated === 9) {

    // Response if generator did not find a unique ID
    response = { err: "Generator tried 10 times to create unique ID, but was unable to" };
  } else {

    // Response if it did
    response = { originLink : originLink, shortenedLink : shortLink };
  }
  return response;
};
