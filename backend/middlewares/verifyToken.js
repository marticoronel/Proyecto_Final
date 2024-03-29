const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('authorization');
  
  if (!token) {
    console.log('Acceso denegado. Token no proporcionado.');
    return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
    console.log("token correcto");
  } catch (error) {
    console.error('Token inválido:', error);
    res.status(401).json({ message: 'Token inválido.' });
  }
};

module.exports = verifyToken;