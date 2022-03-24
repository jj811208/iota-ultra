import { BOT_JID } from './botJid.mjs';
import { generateMessageId } from './util.mjs';

export function generateMessageCheckIn() {
  //上班打卡 0 ~ 30 分
  const minute = Math.ceil(Math.random() * 30)
    .toString()
    .padStart(2, '0');
  $msg({
    id: generateMessageId(),
    to: BOT_JID.HR,
    from: process.env.USER_JID,
    type: 'chat',
  })
    .c('body')
    .t(
      `iota-render://bot/to/{"button":"CheckInDateInput","TransferType":"checkInConfirm","isConfirmed":true,"Time":"09:${minute}"}`,
    );

  return;
}

export function generateMessageCheckOut() {
  //上班打卡 31 ~ 59 分
  const minute = (60 - Math.ceil(Math.random() * 30)).toString();

  return $msg({
    id: generateMessageId(),
    to: BOT_JID.HR,
    from: process.env.USER_JID,
    type: 'chat',
  })
    .c('body')
    .t(
      `iota-render://bot/to/{"button":"CheckInDateInput","TransferType":"checkInConfirm","isConfirmed":true,"Time":"18:${minute}"}`,
    );
}

export function generateMessageVpn() {
  return $msg({
    id: generateMessageId(),
    to: BOT_JID.MIS,
    from: process.env.USER_JID,
    type: 'chat',
  })
    .c('body')
    .t('vpn');
}
