"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    // const {type:t} = babel
    return {
        visitor: {
            BinaryExpression: function BinaryExpression(path) {
                if (path.node.operator !== "===") {
                    return;
                }
                var tmp = {};
                tmp = path.node.right;
                path.node.right = path.node.left;
                path.node.left = tmp;
                path.node.left = t.identifier("sebmck");
            }
        }
    };
};

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
