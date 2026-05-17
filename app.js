import './config/dotenv.js'
import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { indexRouter } from './routes/userRoutes.js'
import { itemsRouter } from './routes/itemRoutes.js'
import { brandRouter } from './routes/brandRoutes.js'
import { categoryRouter } from './routes/categoryRoutes.js'
import { stockRouter } from './routes/stockRoutes.js'
const app = express();

//setting up dir
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//path
const viewPath = path.join(__dirname, "views");
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.use(express.urlencoded({extended: true}));
app.set("views", viewPath);
app.set("view engine", "ejs");

app.use('/', indexRouter);
app.use('/items', itemsRouter);
app.use('/brands', brandRouter);
app.use('/categories', categoryRouter);
app.use('/stock', stockRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if(error){
        throw error
    }
    console.log(`Express App is listening on PORT: ${PORT}`);
})