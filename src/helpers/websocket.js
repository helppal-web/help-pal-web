let _instance = null;

class WebSocketApi {

    constructor(callbackHandler) {
        this.callbackHandler = callbackHandler;
        //this.connect();
    }

    connect() {
        try {
            const ws = new WebSocket();
            this.ws = ws;
            ws.onopen = () => {
                console.info('web socket is open');
            }

            ws.onmessage = (event) => {
                this.callbackHandler(event);
            }

            ws.onclose = (e) => {
                console.log('web sokcet close check console for error, will try to reconnect...')
                setTimeout(this.reConnect(), 3000);
            }

            ws.onerror = (err) => {
                console.error(err);
                ws.close();
            }
        } catch (err) {
            console.error(err);
        }
    }

    reConnect() {
        if (!this.ws || this.ws.readyState == WebSocket.CLOSED) this.connect();
    }
}

export default WebSocketApi;