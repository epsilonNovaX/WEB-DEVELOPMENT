import express from "express";
import { fileURLToPath } from "url";
import {dirname} from "path";
import bodyParser from "body-parser";
const __dirname=dirname(fileURLToPath(import.meta.url));
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

