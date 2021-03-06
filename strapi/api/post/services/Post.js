'use strict';

module.exports = {

  fetchAll: (params) => {
    const convertedParams = strapi.utils.models.convertParams('post', params);
    return Post
      .find()
      // .where(convertedParams.where)
      // .sort(convertedParams.sort)
      // .skip(convertedParams.start)
      .limit(convertedParams.limit)
      // .populate(_.keys(_.groupBy(_.reject(strapi.models.post.associations, {autoPopulate: false}), 'alias')).join(' '));
  },

  fetchOne: (params) => {
    return Post
      .findOne({ '_id': params.id });
  }

};