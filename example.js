const express = require("express");

const router = express.Router();
const validasi = require("./validation");


router.get("/user",validasi.v_cek_pembayaran, authenticateToken, ppob);
module.exports = router;
