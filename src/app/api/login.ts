import type { NextApiRequest, NextApiResponse } from "next";

const users = require("../../../data/users.json");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        res.status(405).json({ "op": -1, message: "Method not allowed" });
        return;
    }

    const payloadJSON: Map<string, any> = JSON.parse(req.body);

    if (!payloadJSON.has("username") || !payloadJSON.has("password")) {
        res.status(400).json({ "op": -1, message: "Bad request (missing required keys)" });
        return;
    }

    const username: String = payloadJSON.get("username");
    const password: String = payloadJSON.get("password");

    if (username === "" || password === "") {
        res.status(400).json({ "op": -1, message: "Bad request (empty values)" });
        return;
    } else if (!(username instanceof String) || !(password instanceof String)) {
        res.status(400).json({ "op": -1, message: "Bad request (invalid types)" });
        return;
    }
}