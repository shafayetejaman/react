import { log } from "console";
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

// Replace this URI with your actual MongoDB connection string
const uri = `mongodb+srv://admin:${process.env.PASS}@cluster0.sgzbq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
log(process.env.PASS)
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }   
});

async function run()
{
    try
    {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // Perform a sample operation - Listing Databases
        const collection = client.db("bank").collection("account");
        const result = await collection.find({ name: "Lorene Newman" }).limit(3).toArray();
        console.log(result)

    } catch (error)
    {
        console.error("An error occurred while connecting to MongoDB:", error);
    } finally
    {
        // Ensures that the client will close when you finish/error
        await client.close();
        console.log("MongoDB connection closed.");
    }
}

// Run the function
run().catch(console.error);
