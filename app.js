import express from 'express'
import graphQLHTTP from 'express-graphql'
import mongoose from 'mongoose'

import schema from './graphql'

const app = express()

app.use('/', graphQLHTTP({
	schema: schema,
	pretty: true,
	graphiql: true
}))

mongoose.connect('mongodb://127.0.0.1:27017/administration')

app.listen(3000, (err) => {
	if(err) {
		console.log(err)
	}

	console.log(`Running server on localhost:3000`)
})