'use strict';

module.exports = {
  create: (params) => {
    let value = strapi.query('contact').create(params);
    return value;
  }
};
