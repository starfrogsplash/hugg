import express from 'express'
import { json } from 'body-parser'
import {huggRouter} from './routes/huggRouter'
import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import expressRateLimit from 'express-rate-limit';
import helmet from "helmet";

const app = express()

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "hugg API with Swagger",
            version: "0.1.0",
            description:
                "This is a hugg API application made with Express and documented with Swagger",
        },
        servers: [
            {
                url: "http://localhost:3000/",
            },
        ],
    },
    apis: ["**/*.ts"]
};

const swaggerSpecs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpecs, { explorer: true })
);

const rateLimit = expressRateLimit({
    windowMs: 60 * 1000, // 1 in minute
    max: 1000,
    message: 'You have exceeded 1000 requests limit in 1 minute!', 
  });

app.use(rateLimit)
app.use(helmet())
app.use(json())
app.use(huggRouter)

export { app }


