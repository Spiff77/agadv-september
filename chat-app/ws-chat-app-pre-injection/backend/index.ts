import express, { Express, Request, Response } from "express";
import expressWs from 'express-ws';
import  WebSocket  from 'ws';
import {Message} from '../shared/model/user.message';

type MessageWs =  {uuid:string, username: string; channel:string; ws: WebSocket};

const expressServer = express();
const wsServer = expressWs(expressServer);
const app = wsServer.app;

const clients: MessageWs[] = [];


app.ws('/ws', (ws: WebSocket, req: Request) => {
    ws.on('message', (msg: string) => {
        const obj = JSON.parse(msg);
        const {type, channel, username, text, uuid} = obj;

        if (type === 'connect') {
            if (!clients.some(c => c.uuid === uuid && c.channel === channel)) {
                clients.filter(client => client.channel === channel)
                    .forEach(client => {
                        if (client.ws.readyState === WebSocket.OPEN) {
                            client.ws.send(JSON.stringify({text: `User ${username} has entered the channel`}))
                        }
                    });
                clients.push({ws,uuid, channel, username});
            }
        } else if (type === 'send') {
            //clients.forEach(console.log)
            clients.filter(client => client.channel === channel)
                .forEach(client => {
                    if (client.ws.readyState === WebSocket.OPEN) {
                        client.ws.send(JSON.stringify({username, text}));
                    }
                });
            console.log(`Message sent to channel: ${channel} by ${username}`);
        }
    });
    ws.on('close', () => {
        console.log('Client disconnected from send route');
        const index = clients.findIndex(client => client.ws === ws);
        if (index !== -1) {
            clients.splice(index, 1); // Remove the client from the array
        }
    });
});

// Start the server on port 3001
app.listen(3001, () => {
    console.log('WebSocket server running on ws://localhost:3001/ws');
});
