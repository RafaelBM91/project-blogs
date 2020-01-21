'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findUrl: async (ctx) => {
    let post = await strapi.services.post.findUrl(ctx.params);
    ctx.send(post);
  },
};
