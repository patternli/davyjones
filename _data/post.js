const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = function() {
  return client.getEntries({ content_type: 'post' })
  .then(function(response) {
    const post = response.items
    .map(function(post) {
      return post.fields;
    });
    return post;
  })
  .catch(console.error);
};