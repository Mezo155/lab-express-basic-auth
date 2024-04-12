const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.post("/", (req, res, next) => {
  User.create(req.body)
  .then((user) => {
    res.redirect("/");
  })
  .catch((err) => {
res.render("/", {errors: err.erros, user: req.body});
  })
})

module.exports = router;
