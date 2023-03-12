


function authorize(roles) {
    return (req, res, next) => {
      const userRole = req.user.role;
  
      // Verificar si el rol del usuario está en la lista de roles autorizados
      if (!roles.includes(userRole)) {
        return res.status(401).json({ message: 'You are not authorized to access this route.' });
      }
  
      // Si el usuario tiene un rol autorizado, pasar al siguiente middleware
      next();
    };
  }
  
module.exports = {
    authorize,
};
  
  
  
  
  
  