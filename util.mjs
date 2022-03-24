function generateMessageId() {
  return 'iota' + generateGuid();
}

function generateGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (e) {
      const t = (16 * Math.random()) | 0;
      return ('x' === e ? t : (3 & t) | 8).toString(16);
    },
  );
}

function getAppInfo() {
  return {
    os: 'macOS',
    uuid: 'C68A8EF0-1CD2-11E9-82D2-2BEED522FC6A',
    debug: false,
    version: '1.15.1',
    xmppVersion: '1.15.0',
  };
}

function getFullJid(jid) {
  const n = getAppInfo();
  const o = `iota-${n.os}-${n.uuid}`;
  return `${jid}/${o}`;
}

function getStatusMean(statusCode) {
  return [
    'Status.ERROR	An error has occurred',
    'Status.CONNECTING	The connection is currently being made',
    'Status.CONNFAIL	The connection attempt failed',
    'Status.AUTHENTICATING	The connection is authenticating',
    'Status.AUTHFAIL	The authentication attempt failed',
    'Status.CONNECTED	The connection has succeeded',
    'Status.DISCONNECTED	The connection has been terminated',
    'Status.DISCONNECTING	The connection is currently being terminated',
    'Status.ATTACHED	The connection has been attached',
    'Status.REDIRECT	The connection has been redirected',
    'Status.CONNTIMEOUT	The connection has timed out',
  ][statusCode];
}
export { generateMessageId, getFullJid, getStatusMean };
