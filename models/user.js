import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
	userName: {
		type: String
	},
	email: {
		type: String
	},
	password: {
		type: String
	}
})

export default mongoose.model('User', UserSchema)