import { Strophe } from 'strophe.js';
import { getFullJid } from './util.mjs';
import dotenv from 'dotenv';
import { generateMessageVpn } from './message.mjs';
dotenv.config();

const domain = `wss://im.gss.com.tw/ws`;
const connection = new Strophe.Connection(domain);
const vpnMessage = generateMessageVpn();
const FullUserJid = getFullJid(process.env.USER_JID);

connection.connect(
  FullUserJid,
  process.env.PASSWORD_TOKEN,
  (statusCode, err) => {
    // console.log(getStatusMean(statusCode), err);
    if (statusCode === Strophe.Status.CONNECTED) {
      connection.send(vpnMessage);

      // XXX: 12 秒後終止程序，如果可以在上面的回調函數中終止程序，就不用這個
      setTimeout(() => {
        process.exit(1);
      }, 12000);
    }
  },
);
