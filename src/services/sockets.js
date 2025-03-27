import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: "pusher",
  key: "local",
  cluster: "mt1",
  wsHost: "127.0.0.1",
  wsPort: 6001,
  forceTLS: false,
  disableStats: true,
});

export default echo;
