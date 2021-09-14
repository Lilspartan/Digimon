import React from 'react';
import socketio from "socket.io-client";
const SOCKET_URL = "https://streaming.gabirmotors.com"

export const socket = socketio.connect(SOCKET_URL);
export const SocketContext = React.createContext();