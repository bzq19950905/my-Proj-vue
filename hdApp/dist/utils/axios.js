'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('./../npm/axios/index.js');

var _axios2 = _interopRequireDefault(_axios);

var _adapter = require('./../npm/wepy-plugin-axios/dist/adapter.js');

var _adapter2 = _interopRequireDefault(_adapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// adapter 的初始化一定要在任何其它的 axios.create 之前执行
/*!
 * @file axios.js
 * @brief wepy框架中支持axios模块
 * @author hujun
 * @date 2018-8-8
 */
var adapter = (0, _adapter2.default)(_axios2.default);

exports.default = _axios2.default.create({
  adapter: adapter // 此属性为可以在小程序中使用 axios 的关键
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF4aW9zLmpzIl0sIm5hbWVzIjpbImFkYXB0ZXIiLCJheGlvcyIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBTUE7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFUQTs7Ozs7O0FBVUEsSUFBTUEsVUFBVSx1QkFBaUJDLGVBQWpCLENBQWhCOztrQkFFZUEsZ0JBQU1DLE1BQU4sQ0FBYTtBQUMxQkYsV0FBU0EsT0FEaUIsQ0FDVDtBQURTLENBQWIsQyIsImZpbGUiOiJheGlvcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQGZpbGUgYXhpb3MuanNcbiAqIEBicmllZiB3ZXB55qGG5p625Lit5pSv5oyBYXhpb3PmqKHlnZdcbiAqIEBhdXRob3IgaHVqdW5cbiAqIEBkYXRlIDIwMTgtOC04XG4gKi9cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB3ZXB5QXhpb3NBZGFwdGVyIGZyb20gJ3dlcHktcGx1Z2luLWF4aW9zL2Rpc3QvYWRhcHRlcidcblxuLy8gYWRhcHRlciDnmoTliJ3lp4vljJbkuIDlrpropoHlnKjku7vkvZXlhbblroPnmoQgYXhpb3MuY3JlYXRlIOS5i+WJjeaJp+ihjFxuY29uc3QgYWRhcHRlciA9IHdlcHlBeGlvc0FkYXB0ZXIoYXhpb3MpXG5cbmV4cG9ydCBkZWZhdWx0IGF4aW9zLmNyZWF0ZSh7XG4gIGFkYXB0ZXI6IGFkYXB0ZXIgLy8g5q2k5bGe5oCn5Li65Y+v5Lul5Zyo5bCP56iL5bqP5Lit5L2/55SoIGF4aW9zIOeahOWFs+mUrlxufSlcbiJdfQ==