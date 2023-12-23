const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email e Senha são obrigatórios' });
  }

  next();
}

module.exports = validateLogin;