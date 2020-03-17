'use strict';

module.exports = {
  create: async (ctx) => {
    let values = await strapi.services.contact.create(ctx.request.body);
    // if (values.id) {
    //   await strapi.plugins['email'].services.email.send({
    //     to: 'test_sheldon_strapi@yopmail.com',
    //     from: 'rafael@imsheldon.com',
    //     replyTo: 'rafael@imsheldon.com',
    //     subject: 'Example Blog Contact',
    //     text: 'You received a contacts message.'
    //   });
    // }
    return values;
  }
};
