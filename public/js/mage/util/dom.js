/**
 * Maho
 *
 * @copyright   Copyright (c) 2024 Maho (https://mahocommerce.com)
 * @license     https://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */

/** @namespace Mage */
var Mage = Mage ?? {};

/** @namespace Mage.Util */
Mage.Util ??= {};

/** @namespace Mage.Util.Dom */
Mage.Util.Dom ??= {};

/**
 * Set a message in <div id="messages"></div>
 *
 * @param {string} message - text value of the message to display
 * @param {string} type - one of `success|error|notice`
 */
Mage.Util.Dom.setMessagesDiv = function (message, type = 'success') {
    console.log('Called Mage.Util.Dom.setMessagesDiv()');
}


Mage.Util.Dom.popWin = function () {
    console.log('Called Mage.Util.Dom.popWin()');
}
