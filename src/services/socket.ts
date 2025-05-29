import { SOCKET_URL } from '@env';
import { Socket } from 'phoenix';
import { AnnouncementPayload } from '../types/common';
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

export const joinLobbyChannel = (
  _socket: Socket,
  onMessage: (msg: AnnouncementPayload) => void,
) => {
  try {
    const channel = _socket.channel('games:lobby', {});
    channel.join().receive('error', error => logError(`Error joining lobby channel: ${error}`));
    channel.on('announcement', onMessage);
    return channel;
  } catch (error) {
    logError(`Unexpected Error joining lobby channel: ${error}`);
    throw error;
  }
};
