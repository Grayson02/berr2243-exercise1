const { MongoClient } = require('mongodb');

async function main() {
    const uri = 'mongodb://localhost:27017'; 
    // Replace with your MongoDB connection string
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        console.log('Connected to MongoDB!');

        //Insert a document
        const db = client.db('testDB'); // Replace with your database name
        const collection = db.collection('users'); // Replace with your collection name

        //Insert the documents
        await collection.insertOne({ name: 'Grayson Gan', age: 23-24 });
        console.log('User inserted!');

        //Query the documents
        const result = await collection.findOne({name: 'Grayson Gan'});
        console.log('Query result:', result);

        // Perform database operations here
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        await client.close();
    }
}

main();