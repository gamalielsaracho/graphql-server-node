import {
	GraphQLList,
  	GraphQLID,
  	GraphQLNonNull
} from 'graphql'

import userOutputType from '../../types/user/user-output'
import UserModel from '../../../models/user'

export default {
	type: userOutputType,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}	
	},
	async resolve(root, params) {
		const user = UserModel.findById(params.id)

		if(!user) {
			throw new Error('Error show user.')
		}

		return user
	}
}