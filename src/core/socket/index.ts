const SOCKET_URL = 'ws://localhost:8080';

const throwError = (error: unknown) => {
  throw new Error(JSON.stringify(error));
}

export const subscribe = <T>(
  url: string,
  onMessage: (msg: T) => unknown
): WebSocket => {
  const webSocket = new WebSocket(`${SOCKET_URL}${url}`);

  webSocket.onmessage = event => {
    const msg = event.data
      ? JSON.parse(event.data)
      : null;
    if (msg) onMessage(msg);
  };

  webSocket.onerror = throwError;

  return webSocket;
}

export const unsubscribe = (webSocket: WebSocket) => {
  webSocket.close();
}