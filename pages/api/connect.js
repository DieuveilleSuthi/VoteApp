import { executeQuery } from "./database";

export default async function handler(req, res) {

    const userID = req.body.userID;
    const password = req.body.password;

    const response = await executeQuery("SELECT * FROM Users WHERE userID = ? AND password = sha(?)", [userID, password])

    res.json(response)
    
}