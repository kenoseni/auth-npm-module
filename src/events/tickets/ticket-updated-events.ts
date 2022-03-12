import { Channels } from "../channels";

export interface TicketUpdatedEvent {
  channel: Channels.TicketUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
