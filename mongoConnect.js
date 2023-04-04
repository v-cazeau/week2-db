import {MongoClient} from 'mongodb'
import {MONGOURI} from "./credentials.js"

export const client = new MongoClient(MONGOURI); //use the URI path
const database = client.db('products')

export const productsCollection = database.collection('ice-cream-parlor')
