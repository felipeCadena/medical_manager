const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const [, token] = authorization.split(' '); // Bearer token

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = authMiddleware;