const argon2 = require("argon2")

const User = require("../models/Utilisateur.model")

exports.login = async (email, password) => {
  const user = await User.findOne({ email });

  if (user && await argon2.verify(user.motDePasseCrypte, password)) {
    return user.toJSON();
  }
  return null;
}