const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const token = jwt.sign({
    id: user.id,
    email: user.email,
    role: user.role,
  }, process.env.JWT_SECRET, { 
    expiresIn: '7d',
    algorithm: 'HS256',
  });

  return token;
};

module.exports = generateToken;