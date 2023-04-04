import {client, productsCollection} from './mongoConnect.js'


const database = client.db('products')


const addIceCream = async () => {
    const myIceCream = {
        singleScoop: 4.99, 
        doubleScoop: 5.99,
        waffleCone: 6.99,
        sundae: 7.99, 
        bananaSplit: 8.99
    }; 

    try {
        await client.connect(); 
        const addIceCream = await productsCollection.insertOne(myIceCream); 
        console.log(addIceCream);
    } catch (error) {
        console.log(error);
    } finally { 
        await client.close(); 
    }
};

// addIceCream()

const editIceCream = async () => {
    const updatedIceCream = await productsCollection.findOneAndUpdate(
        { waffleCone: 6.99 }, 
        { $set: { waffleCone: 5.99, special: true}}
    )
    console.log(updatedIceCream); 
}; 

// editIceCream()

const deleteIceCream = async () => {
    try {
        const itemDeleted = await productsCollection.deleteOne({ doubleScoop: 5.99 })
        console.log(itemDeleted); 
    } catch (error){
        console.log (error); 
    } finally {
        await client.close
    }
}; 

// deleteIceCream()

const getAllIceCream = async () => {
    try {
        await client.connect()
        const allIceCream
    }
}