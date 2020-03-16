'use strict';

module.exports = {
  add: async (params) => {
    let value = await Contact.create(params);
    return value;
  }
};
