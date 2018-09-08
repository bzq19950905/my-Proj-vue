'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _action = require('./../action/action.js');

var _utils = require('./../utils/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file base.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @brief 公用的数据逻辑  包块微信登录 接口登录等
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author hujun
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2018-8-8
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BaseMixin = function (_wepy$mixin) {
  _inherits(BaseMixin, _wepy$mixin);

  function BaseMixin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BaseMixin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseMixin.__proto__ || Object.getPrototypeOf(BaseMixin)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BaseMixin, [{
    key: 'getRouterUserInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(uid) {
        var userInfo, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _utils.getStorage)('userInfo');

              case 2:
                userInfo = _context.sent;

                if (!userInfo) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt('return', userInfo);

              case 7:
                _context.next = 9;
                return (0, _action.getUserInfo)(uid);

              case 9:
                data = _context.sent;
                return _context.abrupt('return', data);

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getRouterUserInfo(_x) {
        return _ref2.apply(this, arguments);
      }

      return getRouterUserInfo;
    }()
    // 获取微信用户信息

  }, {
    key: 'getWXUserInfo',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var WXUserInfo;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _utils.getStorage)('WXUserInfo');

              case 2:
                WXUserInfo = _context2.sent;
                return _context2.abrupt('return', WXUserInfo);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWXUserInfo() {
        return _ref3.apply(this, arguments);
      }

      return getWXUserInfo;
    }()
    // 用户注册

  }, {
    key: 'userRegister',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(obj) {
        var wxUserInfo, user;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getWXUserInfo();

              case 2:
                wxUserInfo = _context3.sent;
                _context3.next = 5;
                return (0, _action.userRegister)(_extends({
                  name: wxUserInfo.nickName
                }, obj));

              case 5:
                user = _context3.sent;
                return _context3.abrupt('return', _wepy2.default.setStorage({
                  key: 'uid',
                  data: user.uid
                }).then(function () {
                  return true;
                }));

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function userRegister(_x2) {
        return _ref4.apply(this, arguments);
      }

      return userRegister;
    }()
    // 编辑资料

  }, {
    key: 'editUser',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(obj) {
        var _ref6, data, result;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _wepy2.default.getStorage({
                  key: 'uid'
                });

              case 2:
                _ref6 = _context4.sent;
                data = _ref6.data;
                _context4.next = 6;
                return (0, _action.editMaterial)(_extends({
                  uid: data
                }, obj));

              case 6:
                result = _context4.sent;

                if (result.errcode === 0) {
                  _wepy2.default.removeStorageSync('userInfo');
                }
                return _context4.abrupt('return', result);

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function editUser(_x3) {
        return _ref5.apply(this, arguments);
      }

      return editUser;
    }()
  }]);

  return BaseMixin;
}(_wepy2.default.mixin);

exports.default = BaseMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOlsiQmFzZU1peGluIiwiZGF0YSIsInVpZCIsInVzZXJJbmZvIiwiV1hVc2VySW5mbyIsIm9iaiIsImdldFdYVXNlckluZm8iLCJ3eFVzZXJJbmZvIiwibmFtZSIsIm5pY2tOYW1lIiwidXNlciIsIndlcHkiLCJzZXRTdG9yYWdlIiwia2V5IiwidGhlbiIsImdldFN0b3JhZ2UiLCJyZXN1bHQiLCJlcnJjb2RlIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJtaXhpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFPQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7OytlQVZBOzs7Ozs7O0lBWXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEksR0FBTyxFOzs7Ozs7MkZBQ2lCQyxHOzs7Ozs7O3VCQUNELHVCQUFXLFVBQVgsQzs7O0FBQWpCQyx3Qjs7cUJBQ0FBLFE7Ozs7O2lEQUNLQSxROzs7O3VCQUVZLHlCQUFZRCxHQUFaLEM7OztBQUFiRCxvQjtpREFDQ0EsSTs7Ozs7Ozs7Ozs7Ozs7OztBQUdYOzs7Ozs7Ozs7Ozs7dUJBRXlCLHVCQUFXLFlBQVgsQzs7O0FBQW5CRywwQjtrREFDR0EsVTs7Ozs7Ozs7Ozs7Ozs7OztBQUVUOzs7Ozs0RkFDbUJDLEc7Ozs7Ozs7dUJBQ00sS0FBS0MsYUFBTCxFOzs7QUFBbkJDLDBCOzt1QkFDYTtBQUNmQyx3QkFBTUQsV0FBV0U7QUFERixtQkFFWkosR0FGWSxFOzs7QUFBYkssb0I7a0RBSUdDLGVBQ0pDLFVBREksQ0FDTztBQUNWQyx1QkFBSyxLQURLO0FBRVZaLHdCQUFNUyxLQUFLUjtBQUZELGlCQURQLEVBS0pZLElBTEksQ0FLQztBQUFBLHlCQUFNLElBQU47QUFBQSxpQkFMRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FBT1Q7Ozs7OzRGQUNlVCxHOzs7Ozs7Ozt1QkFDUU0sZUFBS0ksVUFBTCxDQUFnQjtBQUNuQ0YsdUJBQUs7QUFEOEIsaUJBQWhCLEM7Ozs7QUFBZlosb0IsU0FBQUEsSTs7dUJBR2E7QUFDakJDLHVCQUFLRDtBQURZLG1CQUVkSSxHQUZjLEU7OztBQUFmVyxzQjs7QUFJSixvQkFBSUEsT0FBT0MsT0FBUCxLQUFtQixDQUF2QixFQUEwQjtBQUN4Qk4saUNBQUtPLGlCQUFMLENBQXVCLFVBQXZCO0FBQ0Q7a0RBQ01GLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUExQzRCTCxlQUFLUSxLOztrQkFBdkJuQixTIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEBmaWxlIGJhc2UuanNcbiAqIEBicmllZiDlhaznlKjnmoTmlbDmja7pgLvovpEgIOWMheWdl+W+ruS/oeeZu+W9lSDmjqXlj6PnmbvlvZXnrYlcbiAqIEBhdXRob3IgaHVqdW5cbiAqIEBkYXRlIDIwMTgtOC04XG4gKi9cblxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuaW1wb3J0IHsgZ2V0VXNlckluZm8sIHVzZXJSZWdpc3RlciwgZWRpdE1hdGVyaWFsIH0gZnJvbSAnLi4vYWN0aW9uL2FjdGlvbidcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tICcuLi91dGlscy91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1peGluIGV4dGVuZHMgd2VweS5taXhpbiB7XG4gIGRhdGEgPSB7fVxuICBhc3luYyBnZXRSb3V0ZXJVc2VySW5mbyh1aWQpIHtcbiAgICBsZXQgdXNlckluZm8gPSBhd2FpdCBnZXRTdG9yYWdlKCd1c2VySW5mbycpXG4gICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICByZXR1cm4gdXNlckluZm9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFVzZXJJbmZvKHVpZClcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuICB9XG4gIC8vIOiOt+WPluW+ruS/oeeUqOaIt+S/oeaBr1xuICBhc3luYyBnZXRXWFVzZXJJbmZvKCkge1xuICAgIGxldCBXWFVzZXJJbmZvID0gYXdhaXQgZ2V0U3RvcmFnZSgnV1hVc2VySW5mbycpXG4gICAgcmV0dXJuIFdYVXNlckluZm9cbiAgfVxuICAvLyDnlKjmiLfms6jlhoxcbiAgYXN5bmMgdXNlclJlZ2lzdGVyKG9iaikge1xuICAgIGxldCB3eFVzZXJJbmZvID0gYXdhaXQgdGhpcy5nZXRXWFVzZXJJbmZvKClcbiAgICBsZXQgdXNlciA9IGF3YWl0IHVzZXJSZWdpc3Rlcih7XG4gICAgICBuYW1lOiB3eFVzZXJJbmZvLm5pY2tOYW1lLFxuICAgICAgLi4ub2JqXG4gICAgfSlcbiAgICByZXR1cm4gd2VweVxuICAgICAgLnNldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICd1aWQnLFxuICAgICAgICBkYXRhOiB1c2VyLnVpZFxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHRydWUpXG4gIH1cbiAgLy8g57yW6L6R6LWE5paZXG4gIGFzeW5jIGVkaXRVc2VyKG9iaikge1xuICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICd1aWQnXG4gICAgfSlcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZWRpdE1hdGVyaWFsKHtcbiAgICAgIHVpZDogZGF0YSxcbiAgICAgIC4uLm9ialxuICAgIH0pXG4gICAgaWYgKHJlc3VsdC5lcnJjb2RlID09PSAwKSB7XG4gICAgICB3ZXB5LnJlbW92ZVN0b3JhZ2VTeW5jKCd1c2VySW5mbycpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuIl19