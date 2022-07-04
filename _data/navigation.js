const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = function() {
  return client.getEntries({ content_type: 'navigation' })
  .then(function(response) {
    const navigation = response.items
    .map(function(navigation) {
      return navigation.fields;
    });
    return navigation;
  })
  .catch(console.error);
};