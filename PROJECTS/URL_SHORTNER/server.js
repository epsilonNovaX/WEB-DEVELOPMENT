// Basic imports
import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import crypto from "crypto";
// To load the .env file
dotenv.config();
// Setting up express
const app=express();
const PORT=process.env.PORT || 3000;
const BASE_URL=process.env.BASE_URL || "http://localhost:3000";
// Setting up the database
const db=mysql.createPool({
    host:process.env.DB_HOST,
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    connectionLimit:10
});
// Additional express setup
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

// Converts to 4 randomBytes and in a format understood by url 
function makeCode()
{
    return crypto.randomBytes(4).toString("base64url").slice(0,6);
}

