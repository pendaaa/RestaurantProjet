'use strict';

/**
 * Plats.js controller
 *
 * @description: A set of functions called "actions" for managing `Plats`.
 */

module.exports = {

  /**
   * Retrieve plats records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.plats.search(ctx.query);
    } else {
      return strapi.services.plats.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a plats record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.plats.fetch(ctx.params);
  },

  /**
   * Count plats records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.plats.count(ctx.query, populate);
  },

  /**
   * Create a/an plats record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.plats.add(ctx.request.body);
  },

  /**
   * Update a/an plats record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.plats.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an plats record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.plats.remove(ctx.params);
  }
};
