const jwt = require('jsonwebtoken');

const generateTokenAndVerify = (user, tokenVerify = undefined) => {
  if (tokenVerify) {
    const claims = jwt.verify(tokenVerify, process.env.JWT_SECRET);
    if (claims.id !== user.id) {
      throw new Error('Invalid token');
    }
    return claims;
  }

  const token = jwt.sign({
      id: user.id,
      email: user.email,
      role: user.role,
    }, process.env.JWT_SECRET, { 
      expiresIn: '7d',
      algorithm: 'HS256',
    }
  );

  return token;
}

module.exports = generateTokenAndVerify;