'use strict';

module.exports = {
  find: async (ctx) => {
    let values = strapi.services.post.fetchAll(ctx.query);
    return values;
  },

  findOne: async (ctx) => {
    let values = strapi.services.post.fetchOne(ctx.query);
    return values;
  },

  findByUrl: async (ctx) => {
    let values = strapi.services.post.fetchByUrl(ctx.query);
    return values;
  },
};
