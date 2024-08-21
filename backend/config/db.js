// database connection file to MongoDB
import { mongoose } from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log(`mongodb connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`.underline.bold)
    process.exit(1)
  }
}

export default connectDB
