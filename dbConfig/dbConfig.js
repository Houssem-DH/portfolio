import mongoose from "mongoose";

export async function connect() {
    try {

        
        mongoose.connect(process.env.MONGODB_URI);
        const connection = mongoose.connection;

      
        connection.on('connected', () => {
            console.log('Connected to MongoDB');
            
            
        });
        connection.on('error', (error) => {
            console.error('MongoDB Connection Error:', error);
            process.exit();
        });

    }
    catch (error) {
        console.log("somthing went wrong");
        console.log("error");


    }
}