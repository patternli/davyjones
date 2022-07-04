const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = function() {
  return client.getEntries({ content_type: 'productType' })
  .then(function(response) {
    const productType = response.items
    .map(function(productType) {
      return productType.fields;
    });
    return productType;
  })
  .catch(console.error);
};