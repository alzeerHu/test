/**
 * Add your config changes here.
 * @module config
 * @example
 * export default function applyConfig(config) {
 *   config.settings = {
 *     ...config.settings,
 *     port: 4300,
 *     listBlockTypes: {
 *       ...config.settings.listBlockTypes,
 *       'my-list-item',
 *    }
 * }
 */

// All your imports required for the config here BEFORE this line
import '@plone/volto/config';

import heroSVG from "@plone/volto/icons/hero.svg";
import { MainBlockEdit } from 'components';
import { MainBlockView } from 'components';

export default function applyConfig(config) {
  // Add here your project's configuration here by modifying `config` accordingly ss

  config.blocks.requiredBlocks = [];

  config.blocks.blocksConfig.highlight = {
    id: "highlight",
    title: "Highlight",
    icon: heroSVG,
    group: "common",
    view: MainBlockView,
    edit: MainBlockEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };
  return config;
}
