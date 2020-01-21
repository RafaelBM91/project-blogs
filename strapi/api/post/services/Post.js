'use strict';

const { convertRestQueryParams } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/services.html#core-services)
 * to customize this service
 */

module.exports = {
  findUrl(params) {
    const convertedParams = convertRestQueryParams(params);
    return strapi.query('post').findOne(convertedParams.where);
  }
};
