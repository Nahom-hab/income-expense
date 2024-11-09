const mongoose = require("mongoose")

const createConnection = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://nahomhab:YQAdN7JbgxJkvAHH@cluster0.drelnea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log(`Mongoose connected ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error occured ${error.message}`);
        process.exit(1)
    }
}

module.exports = createConnection;