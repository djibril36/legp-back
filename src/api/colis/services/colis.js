'use strict';

/**
 * colis service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::colis.colis');
