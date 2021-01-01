var express = require("express");
var router = express.Router();
var cors = require("cors");
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

// router.get('/api/sample', cors(corsOptions), function(req, res, next) {
//   res.json('success');
// });

/* GET users listing. */
router.get("/", cors(corsOptions), function (req, res, next) {
  (todo = {
    kind: "aaa",
    totalItems: 3026,
    items: [
      {
        id: 1,
        status: {
          title: "スリーコード",
          url:
            "https://search.dartslive.com/jp/shop/674ed91d86ef74ab0d9b047a20a7ba1e",
        },
      },
      {
        id: 2,
        status: {
          title: "zenon",
          url:
            "https://search.dartslive.com/jp/shop/3d92d05c396c51860d9b047a20a7ba1e",
        },
      },
      {
        id: 3,
        status: {
          title: "中野UP",
          url:
            "https://search.dartslive.com/jp/shop/837e77cc45ca3c785f9f3321c1147265",
        },
      },
    ],
  }),
    res.json(todo);
});

module.exports = router;
