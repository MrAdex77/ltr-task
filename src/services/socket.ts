import { SOCKET_URL } from '@env';
import { Socket } from 'phoenix';
import { logError } from '../utils/common';

let socket: Socket | null = null;

export const connectSocket = (token: string) => {
  try {
    socket = new Socket(SOCKET_URL, {
      params: { token },
    });
    socket.onError(error => logError(error));
    socket.connect();
    return socket;
  } catch (error) {
    logError(`Error connecting to socket: ${error}`);
    throw error;
  }
};

export const joinLobbyChannel = (_socket: Socket, onMessage: (msg: any) => void) => {
  const channel = _socket.channel('games:lobby', {});
  channel.join().receive('error', error => logError(`Error joining lobby channel: ${error}`));

  channel.on('announcement', onMessage);
};
