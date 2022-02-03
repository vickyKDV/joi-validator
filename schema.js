/*
 *
 * ---------------------------------------
 * Copyright (c) Nibiru-Dev 2021
 * ---------------------------------------
 * Created date: 2021/10/2
 * ---------------------------------------
 * Author: vickyKDV
 * ---------------------------------------
 *
 */
const Joi = require("joi");

/**---------------------------------------
 * [ Validate Collection For Middleware Routes | Methode : Body, Param, Query ]
 *---------------------------------------*/
const schema = class Schema {
  static schema_user_login() {
    return Joi.defaults((schema) =>
      schema.options({
        allowUnknown: true,
      })
    ).object({
      email: Joi.string().max(255).required(),
      password: Joi.string().max(255).required(),
    });
  }

  static schema_paginate() {
    return Joi.object({
      size: Joi.number().integer().min(1).required(),
      pageSize: Joi.number().integer().min(1).required(),
    });
  }
};

module.exports = schema;
