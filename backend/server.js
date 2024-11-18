import express from 'express'
import { connectDB } from './config/db.js'
import router from './router/product.route.js'
import path from 'path';
import { fileURLToPath } from 'url';



import dotenv from 'dotenv'
dotenv.config()
// Define __filename and __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 5554

const app = express()
app.use(express.json())

app.use('/api/products',router)
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend2/dist')))
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, '../frontend2','dist','index.html'))
    })

}
 app.listen(PORT,()=>{
    connectDB()
    console.log(`server is running at http://localhost:${PORT}`)})