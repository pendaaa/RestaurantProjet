'use strict';

/**
 * Compte.js controller
 *
 * @description: A set of functions called "actions" for managing `Compte`.
 */

module.exports = {

  /**
   * Retrieve compte records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.compte.search(ctx.query);
    } else {
      return strapi.services.compte.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a compte record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.compte.fetch(ctx.params);
  },

  /**
   * Count compte records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.compte.count(ctx.query, populate);
  },

  /**
   * Create a/an compte record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.compte.add(ctx.request.body);
  },

  /**
   * Update a/an compte record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.compte.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an compte record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.compte.remove(ctx.params);
  }
};
