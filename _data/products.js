const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = function() {
  return client.getEntries({ content_type: 'product' })
  .then(function(response) {
    const product = response.items
    .map(function(product) {
      return product.fields;
    });
    return product;
  })
  .catch(console.error);
};