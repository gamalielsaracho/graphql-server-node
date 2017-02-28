import {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLID
} from 'graphql'

export default new GraphQLInputObjectType({
	name: 'UserInput',
	fields: {
		_id: { type: GraphQLID },
		userName: { type: GraphQLString },
		email: { type: GraphQLString },
		password: { type: GraphQLString }
	}
})