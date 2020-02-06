'use strict';

// const { convertRestQueryParams } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/services.html#core-services)
 * to customize this service
 */

module.exports = {
  findUrl(params) {
    return strapi.query('post').findOne({
      url:    params.url || params._url,
      public: true
    });
  }
};
