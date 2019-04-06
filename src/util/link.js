const url = require('url');

module.exports.convertLink = (userId, link) => {
  let { protocol, host, search } = url.parse(link);
  let wsURI = `${protocol
    .replace('https:', 'wss')
    .replace('http:', 'ws')}://${host}/channel/${userId %
    16}${search}&pass=${userId}`;
  return wsURI.replace('coin.vkforms.ru', 'coin-without-bugs.vkforms.ru');
};
