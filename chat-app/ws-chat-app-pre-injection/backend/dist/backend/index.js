"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_ws_1 = __importDefault(require("express-ws"));
const ws_1 = __importDefault(require("ws"));
const expressServer = (0, express_1.default)();
const wsServer = (0, express_ws_1.default)(expressServer);
const app = wsServer.app;
const clients = [];
app.ws('/ws', (ws, req) => {
    console.log('Client connected');
    ws.on('message', (msg) => {
        const obj = JSON.parse(msg);
        const { type, channel, username, text, uuid } = obj;
        if (type === 'connect') {
            if (!clients.some(c => c.uuid === uuid && c.channel === channel)) {
                clients.filter(client => client.channel === channel)
                    .forEach(client => {
                    if (client.ws.readyState === ws_1.default.OPEN) {
                        console.log(`Sending message to ${client.username}`);
                        client.ws.send(JSON.stringify({ text: `User ${username} has entered the channel` }));
                    }
                });
                clients.push({ ws, uuid, channel, username });
            }
        }
        else if (type === 'send') {
            //clients.forEach(console.log)
            clients.filter(client => client.channel === channel)
                .forEach(client => {
                if (client.ws.readyState === ws_1.default.OPEN) {
                    console.log(`Sending message to ${client.username}`);
                    client.ws.send(JSON.stringify({ username, text }));
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
