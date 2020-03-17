'use strict';

module.exports = {

  fetchAll: (params) => {
    return strapi.query('post').find({ _limit: params._limit });
  },

  fetchOne: (params) => {
    return strapi.query('post').findOne({ 'id': params.id });
  },

  fetchByUrl: (params) => {
    return strapi.query('post').findOne({
      url:    params.url || params._url,
      public: true
    });
  },

};
