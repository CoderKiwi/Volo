import axios, {AxiosInstance} from 'axios';
require('dotenv').config();
import express from "express";

function getPlexPin(plexInstance: AxiosInstance) {
    const endpoint = '/pins.xml';

    plexInstance.post(endpoint)
        .then((response) => {
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function signIn(plexInstance: AxiosInstance, username: string, password: string) {
    const endpoint = '/users/sign_in.json';
    const data = {
        user: {
            login: username, // todo not sure if 'login' is the correct param name
            password: password // todo not sure if 'password' is the correct param name
        }
    };
    plexInstance.post(endpoint, data)
        .then((response) => {
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function main() {

    const app = express();
    const port = 8080; // default port to listen

    app.get( "/", ( req, res ) => {
        res.send( "Hello world!" );
    });

    app.listen( port, () => {
        console.log( `Server started at http://localhost:${ port }` );
    });

    const plexInstance: AxiosInstance = axios.create({
        baseURL: 'https://plex.tv',
        timeout: 10000,
        headers: {
            "X-Plex-Device": "Volo",
            'X-Plex-Product': 'Volo',
            "X-Plex-Platform": "Web",
            'X-Plex-Version': 3,
            'X-Plex-Client-Identifier': 1, // todo
        },
    });

    const dummyUsername = process.env.DUMMY_USERNAME as string;
    const dummyPassword = process.env.DUMMY_PASSWORD as string;
    console.log(dummyUsername);

    getPlexPin(plexInstance);
    signIn(plexInstance, dummyUsername, dummyPassword)
}

main();
