import {
	GraphQLNonNull,
	GraphQLString
} from 'graphql'

import generateToken from '../../middlewares/generateToken'

import userInputType from '../../types/user/user-input'
import UserModel from '../../../models/user'

export default {
	type: GraphQLString,
	args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(userInputType)
		}
	},
	async resolve(root, params) {

		// Validations.
		if(!params.data.userName || params.data.userName.trim() == '') {
			throw new Error('You must enter a username.')
		}

		if(!params.data.email || params.data.email.trim() == '') {
			throw new Error('You must enter an email.')
		}

		if(!params.data.password || params.data.password.trim() == '') {
			throw new Error('You must enter a password.')
		}

		const userExisting = await UserModel.findOne({ email: params.data.email })

		// console.log(userExisting)

		if(userExisting) {
			throw new Error('This email is already in use')
		}

		const userModel = new UserModel(params.data)
		const newUser = await userModel.save()

		const tokenData = {
			userName: newUser.userName,
			email: newUser.email
		}

		let token = generateToken(tokenData)

		if(!newUser) {
			throw new Error('Error registering user.')
		}

		return token
	}
}