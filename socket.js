const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    // access to io variable right here.
    const { io } = req;
});

module.exports = router;
