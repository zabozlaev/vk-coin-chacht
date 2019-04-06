const config = require('config');
const Vkontakte = require('./api-client/vk.js');
const start = async () => {
  const vk = await Vkontakte(config.get('access'));
  console.log(vk());
};
start();
