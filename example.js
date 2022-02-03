const express = require("express");

const router = express.Router();
const validasi = require("./validation");

router.get("/login", validasi.v_user_login, authenticateToken, ppob);
module.exports = router;
