require('dotenv').config()
const app = require('./src/app')

// console.log(process.env); // Debugging environment variables


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})