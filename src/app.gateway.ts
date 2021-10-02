import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import WebSocket from 'ws';

@WebSocketGateway()
export class AppGateway {
  @SubscribeMessage('test')
  handleMessage(
    client: WebSocket,
    payload: unknown,
  ): { event: string; data: unknown } {
    return {
      event: 'success',
      data: payload,
    };
  }
}
