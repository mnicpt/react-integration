import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import loadScript from './ScriptLoader';

function Script(_ref) {
  var _ref$url = _ref.url,
      url = _ref$url === void 0 ? '' : _ref$url,
      props = _objectWithoutPropertiesLoose(_ref, ["url"]);

  return /*#__PURE__*/React.createElement(React.Fragment, null);
}

export default loadScript(Script);