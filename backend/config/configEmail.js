const user = process.env.USER_EMAIL || 'storebeinspired@gmail.com';
const clientId = process.env.CLIENT_ID_EMAIL || '1024191265831-8a8p5v3hmorc4h7dub9b7vgone3bs5sf.apps.googleusercontent.com'
const clientSecret = process.env.CLIENT_SECRET_EMAIL || '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'
const refreshToken = process.env.REFRESH_TOKEN_EMAIL ||  "1//04WpSVRkfMcN8CgYIARAAGAQSNwF-L9IrZVwYtH-ir2gRuIwcPh8stJUtYZQoVATjhuYGlOuYE_GP0Pz4MAwXe1i-y5qAAOml5SM"

module.exports = {user,clientId,clientSecret,refreshToken}