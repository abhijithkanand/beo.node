import app from "./config/express.js";
import dotenv from 'dotenv'
import healthCheck from "./server/helper/healthCheck.js";
// require and configure dotenv, will load vars in .env in PROCESS.ENV
dotenv.config()

const port = process.env.PORT || 3000
const version = process.env.VERSION || 1.0

app.listen(port, () => {
    console.log(`The application has started : http://localhost:${port}/api/v${version}/`)
    //calling health check in every 5 seconds
    setInterval(healthCheck, 5000);
})

export default app;