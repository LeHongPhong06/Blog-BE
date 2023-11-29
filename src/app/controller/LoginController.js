const AccountModel = require("../models/Account");
class LoginController {
  create(req, res, next) {
    res.render("account/login");
  }
  authorization(req, res, next) {
    AccountModel.findOne({
      username: req.body.username,
      password: req.body.password,
    })
      .then((data) => {
        if (data) {
          res.redirect("/");
        } else {
          console.log("Đăng nhập thất bại");
        }
      })
      .catch(next);
  }
}

module.exports = new LoginController();
