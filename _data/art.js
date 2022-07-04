const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = function() {
  return client.getEntries({ content_type: 'art' })
  .then(function(response) {
    const art = response.items
    .map(function(art) {
      return art.fields;
    });
    return art;
  })
  .catch(console.error);
};