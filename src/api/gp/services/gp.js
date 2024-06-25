'use strict';

/**
 * gp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gp.gp');
