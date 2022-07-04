const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = function() {
  return client.getEntries({ content_type: 'categories' })
  .then(function(response) {
    const categories = response.items
    .map(function(categories) {
      return categories.fields;
    });
    return categories;
  })
  .catch(console.error);
};