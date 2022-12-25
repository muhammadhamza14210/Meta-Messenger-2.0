import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

export const serverPusher = new Pusher({
    appId: "1529660",
    key: "468680b97c574d51c762",
    secret: "82df7bf0c53d3d5afba2",
    cluster: "us3",
    useTLS:true
});

export const clientPusher = new ClientPusher("468680b97c574d51c762", {
    cluster: 'us3',
    forceTLS: true
  });