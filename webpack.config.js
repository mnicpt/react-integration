/* @flow */

import { getWebpackConfig } from 'grumbler-scripts/config/webpack.config';

const FILE_NAME = 'react-integration';
const MODULE_NAME = 'react-integration';

export let WEBPACK_CONFIG = getWebpackConfig({
    filename:   `${ FILE_NAME }.min.js`,
    modulename: MODULE_NAME,
    minify:     true
});

export default [ WEBPACK_CONFIG ];