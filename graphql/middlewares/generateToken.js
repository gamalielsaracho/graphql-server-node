import jwt from 'jsonwebtoken'

export default (tokenData) => {
	return jwt.sign(tokenData, 'superSecretKey', { expiresIn:'1d' })
}