const express = require('express')
const router = express.Router()

router.get("/", async (req, res) => {
    console.log(req.body);
    res.send({
        data: {
            code: 0,
            msg: "请求成功"
        }
    })
})

module.exports = router