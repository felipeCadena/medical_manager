const authNewUsers = (req, res, next) => {
  const { role } = req.user;

  if (role !== 'admin') {
    return res.status(403).json({ 
      message: 'Apeans administradores pode cadastrar novos usuários', 
    });
  }

  next();
};

module.exports = authNewUsers;