const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },  // Token contains the user's ID and role
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
};

module.exports = generateToken;
