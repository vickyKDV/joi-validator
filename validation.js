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

const schema = require("./schema");
const utils = require("../../utils/Utils");

/**---------------------------------------
 * [v = validate]
 *---------------------------------------*/

module.exports = class validation {
  static v_user_login(req, res, next) {
    const { error } = schema.schema_user_login().validate(req.body);
    utils.validationCallback(res, error, next);
  }

  static v_paginate(req, res, next) {
    const { error } = schema.schema_paginate().validate(req.body);
    utils.validationCallback(res, error, next);
  }
};
