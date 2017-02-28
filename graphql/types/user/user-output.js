import {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
} from 'graphql'

export default new GraphQLObjectType({
	name: 'UserOutput',
	fields: {
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		userName: {
			type: GraphQLString
		},
		email: {
			type: GraphQLString
		}
	}
})