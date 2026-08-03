import "dotenv/config";
import { connectDB } from "./config/db.js";
import app from "./app.js";

connectDB().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor rodando");
  });
});