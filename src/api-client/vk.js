const { convertLink } = require('../util/link.js');
const { VK } = require('vk-io');

/**
 * @param token userToken
 */

module.exports = async token => {
  const vk = new VK({
    token
  });

  const { items } = await vk.api.apps.get({
    app_id: 6915965
  });

  const [{ mobile_iframe_url }] = items;

  const [{ id }] = await vk.api.users.get();

  /**
   * @returns { vk: Vk, userId: String | Number}
   */
  return () => ({
    vk,
    userId: id,
    appUrl: convertLink(id, mobile_iframe_url)
  });
};
