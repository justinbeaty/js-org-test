/**
 * Maho
 *
 * @copyright   Copyright (c) 2024 Maho (https://mahocommerce.com)
 * @license     https://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */

/** @namespace */
Mage ??= {};

/** @namespace */
Mage.Adminhtml ??= {};

/** @namespace */
Mage.Adminhtml.Catalog ??= {};

/**
 * Class to control the "Manage Categories" page
 */
Mage.Adminhtml.Catalog.Category = class {
    /**
     * @param {Object} config
     * @param {string} config.treeDiv - DOM ID of div to build tree
     * @param {string} config.containerEl - DOM ID of main page container
     * @param {string} config.loadTreeUrl - URL to load tree nodes
     * @param {string} config.editUrl - URL for edit page action
     * @param {string} config.moveUrl - URL for category move action
     * @param {string} [config.switchTreeUrl] - URL for AJAX store switch
     * @param {string} [config.addRootCategoryBtn] - DOM ID of "Add Root Category" button
     * @param {string} [config.addSubCategoryBtn] - DOM ID of "Add Subcategory" button
     * @param {string} [config.categoryProductsEl] - DOM ID of "Category Products" grid container
     * @param {boolean} [config.useAjax] - Whether to load the main content via AJAX
     * @param {string} [config.tabsJsObjectName] - varien tabs JS variable name
     */
    constructor(config) {
        console.log('Called new Mage.Adminhtml.Catalog.Category()');
    }
};
