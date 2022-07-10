const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = function() {
  return client.getEntries({ content_type: 'category' })
  .then(function(response) {
    const category = response.items
    .map(function(category) {
      return category.fields;
    });
    return category;
  })
  .catch(console.error);
};