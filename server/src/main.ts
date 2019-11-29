require('dotenv').config();
import express from "express";
import PlexApi from './services/impl/PlexApi';


async function main() {

    const app = express();
    const port = 8080; // default port to listen

    app.get("/", (req, res) => {
        res.send("Hello world!");
    });

    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });

    const dummyUsername = process.env.DUMMY_USERNAME as string;
    const dummyPassword = process.env.DUMMY_PASSWORD as string;

    const pinCode = await PlexApi.instance.getPlexPin();
    console.log(`pinCode from Plex: ${pinCode}`);
    const authToken = await PlexApi.instance.signIn(dummyUsername, dummyPassword);
    console.log(`authToken from Plex: ${authToken}`);
}

main().then();
