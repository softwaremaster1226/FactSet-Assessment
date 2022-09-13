import express from "express";
import cors from "cors";
import logger from "morgan";
import bodyparser from "body-parser";
import api from "./routes/index";

import swaggerUi from 'swagger-ui-express'
import { swagger_base } from "./docs/index.js";

const app = express();

app.use(cors({origin : "*"}));
app.use(logger("dev"));
app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb' , extended : false}));
// app.use(express.static(path.join(__dirname , "../public")));

api(app)

app.use('/apidocs', function(req, res, next){
    swagger_base.host = req.get('host');
    req.swaggerDoc = swagger_base;
    next();
}, swaggerUi.serve, swaggerUi.setup());

module.exports = app;