import express from "express";
import ViteExpress from "vite-express";
import bodyParser from 'body-parser'
import cors from 'cors'
// import {fileURLToPath} from 'path'

const app = express()
const port = process.env.PORT || 5000
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// dotenv.config()

//middlewares
app.use(bodyParser.json())
app.use(cors({origin:"*"})) 

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

console.log("first")
console.log("first")
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);