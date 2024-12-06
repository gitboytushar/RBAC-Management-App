const mongoose = require('mongoose')
const conn = async () => {
  try {
    // add the project-name at the end of the copied connection string, exactly same name as it is on the Atlas
    const response = await mongoose.connect(`${process.env.MONGO_URI}`)
    if (response) {
      console.log('Database Connected...')
    }
  } catch (error) {
    console.log(error)
  }
}
conn()
