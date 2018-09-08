'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tabs = require('./../common/tabs.js');

var _tabs2 = _interopRequireDefault(_tabs);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginInit = function (_wepy$component) {
  _inherits(LoginInit, _wepy$component);

  function LoginInit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LoginInit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginInit.__proto__ || Object.getPrototypeOf(LoginInit)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.data = {
      inputVal: '',
      likeArr: _tabs2.default.data,
      selectedLikeItem: []
    }, _this.methods = {
      selectLikeFn: function selectLikeFn(item) {
        this.likeArr[item.id].active = !this.likeArr[item.id].active;
        this.selectedLikeItem.includes(item.title) ? this.selectedLikeItem.splice(this.selectedLikeItem.indexOf(item.title), 1) : this.selectedLikeItem.push(item.title);
      },
      clickSaveFn: function clickSaveFn() {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var reg, result;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  reg = /^[0-9]{1,2}$/;

                  if (!(_this2.selectedLikeItem.length && _this2.inputVal !== '' && reg.test(_this2.inputVal))) {
                    _context.next = 8;
                    break;
                  }

                  _context.next = 4;
                  return _this2.userRegister({ seniority: _this2.inputVal });

                case 4:
                  result = _context.sent;

                  if (result) {
                    _this2.$apply();
                    _this2.$emit('showMain');
                  }
                  _context.next = 9;
                  break;

                case 8:
                  _wepy2.default.showToast({
                    title: '请正确填写信息', // 提示的内容,
                    duration: 1500, // 延迟时间,
                    mask: true // 显示透明蒙层，防止触摸穿透,
                  });

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      changeFn: function changeFn(e) {
        this.inputVal = e.detail.value;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return LoginInit;
}(_wepy2.default.component);

exports.default = LoginInit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxvZ2luSW5pdC5qcyJdLCJuYW1lcyI6WyJMb2dpbkluaXQiLCJtaXhpbnMiLCJiYXNlTWl4aW4iLCJkYXRhIiwiaW5wdXRWYWwiLCJsaWtlQXJyIiwic2VsZWN0ZWRMaWtlSXRlbSIsIm1ldGhvZHMiLCJzZWxlY3RMaWtlRm4iLCJpdGVtIiwiaWQiLCJhY3RpdmUiLCJpbmNsdWRlcyIsInRpdGxlIiwic3BsaWNlIiwiaW5kZXhPZiIsInB1c2giLCJjbGlja1NhdmVGbiIsInJlZyIsImxlbmd0aCIsInRlc3QiLCJ1c2VyUmVnaXN0ZXIiLCJzZW5pb3JpdHkiLCJyZXN1bHQiLCIkYXBwbHkiLCIkZW1pdCIsIndlcHkiLCJzaG93VG9hc3QiLCJkdXJhdGlvbiIsIm1hc2siLCJjaGFuZ2VGbiIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTLENBQUNDLGNBQUQsQyxRQUNUQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxlQUFTRixlQUFLQSxJQUZUO0FBR0xHLHdCQUFrQjtBQUhiLEssUUFLUEMsTyxHQUFVO0FBQ1JDLGtCQURRLHdCQUNLQyxJQURMLEVBQ1c7QUFDakIsYUFBS0osT0FBTCxDQUFhSSxLQUFLQyxFQUFsQixFQUFzQkMsTUFBdEIsR0FBK0IsQ0FBQyxLQUFLTixPQUFMLENBQWFJLEtBQUtDLEVBQWxCLEVBQXNCQyxNQUF0RDtBQUNBLGFBQUtMLGdCQUFMLENBQXNCTSxRQUF0QixDQUErQkgsS0FBS0ksS0FBcEMsSUFBNkMsS0FBS1AsZ0JBQUwsQ0FBc0JRLE1BQXRCLENBQTZCLEtBQUtSLGdCQUFMLENBQXNCUyxPQUF0QixDQUE4Qk4sS0FBS0ksS0FBbkMsQ0FBN0IsRUFBd0UsQ0FBeEUsQ0FBN0MsR0FBMEgsS0FBS1AsZ0JBQUwsQ0FBc0JVLElBQXRCLENBQTJCUCxLQUFLSSxLQUFoQyxDQUExSDtBQUNELE9BSk87QUFLRkksaUJBTEUseUJBS1k7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEMscUJBRGMsR0FDUixjQURROztBQUFBLHdCQUVkLE9BQUtaLGdCQUFMLENBQXNCYSxNQUF0QixJQUFnQyxPQUFLZixRQUFMLEtBQWtCLEVBQWxELElBQXdEYyxJQUFJRSxJQUFKLENBQVMsT0FBS2hCLFFBQWQsQ0FGMUM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5QkFHRyxPQUFLaUIsWUFBTCxDQUFrQixFQUFDQyxXQUFXLE9BQUtsQixRQUFqQixFQUFsQixDQUhIOztBQUFBO0FBR1ptQix3QkFIWTs7QUFJaEIsc0JBQUlBLE1BQUosRUFBWTtBQUNWLDJCQUFLQyxNQUFMO0FBQ0EsMkJBQUtDLEtBQUwsQ0FBVyxVQUFYO0FBQ0Q7QUFQZTtBQUFBOztBQUFBO0FBU2hCQyxpQ0FBS0MsU0FBTCxDQUFlO0FBQ2JkLDJCQUFPLFNBRE0sRUFDSztBQUNsQmUsOEJBQVUsSUFGRyxFQUVHO0FBQ2hCQywwQkFBTSxJQUhPLENBR0Y7QUFIRSxtQkFBZjs7QUFUZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlbkIsT0FwQk87QUFxQlJDLGNBckJRLG9CQXFCQ0MsQ0FyQkQsRUFxQkk7QUFDVixhQUFLM0IsUUFBTCxHQUFnQjJCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBekI7QUFDQSxhQUFLVCxNQUFMO0FBQ0Q7QUF4Qk8sSzs7OztFQVAyQkUsZUFBS1EsUzs7a0JBQXZCbEMsUyIsImZpbGUiOiJMb2dpbkluaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vY29tbW9uL3RhYnMnXHJcbmltcG9ydCBiYXNlTWl4aW4gZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luSW5pdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBtaXhpbnMgPSBbYmFzZU1peGluXVxyXG4gIGRhdGEgPSB7XHJcbiAgICBpbnB1dFZhbDogJycsXHJcbiAgICBsaWtlQXJyOiBkYXRhLmRhdGEsXHJcbiAgICBzZWxlY3RlZExpa2VJdGVtOiBbXVxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgc2VsZWN0TGlrZUZuKGl0ZW0pIHtcclxuICAgICAgdGhpcy5saWtlQXJyW2l0ZW0uaWRdLmFjdGl2ZSA9ICF0aGlzLmxpa2VBcnJbaXRlbS5pZF0uYWN0aXZlXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRMaWtlSXRlbS5pbmNsdWRlcyhpdGVtLnRpdGxlKSA/IHRoaXMuc2VsZWN0ZWRMaWtlSXRlbS5zcGxpY2UodGhpcy5zZWxlY3RlZExpa2VJdGVtLmluZGV4T2YoaXRlbS50aXRsZSksIDEpIDogdGhpcy5zZWxlY3RlZExpa2VJdGVtLnB1c2goaXRlbS50aXRsZSlcclxuICAgIH0sXHJcbiAgICBhc3luYyBjbGlja1NhdmVGbigpIHtcclxuICAgICAgbGV0IHJlZyA9IC9eWzAtOV17MSwyfSQvXHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkTGlrZUl0ZW0ubGVuZ3RoICYmIHRoaXMuaW5wdXRWYWwgIT09ICcnICYmIHJlZy50ZXN0KHRoaXMuaW5wdXRWYWwpKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMudXNlclJlZ2lzdGVyKHtzZW5pb3JpdHk6IHRoaXMuaW5wdXRWYWx9KVxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ3Nob3dNYWluJylcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfor7fmraPnoa7loavlhpnkv6Hmga8nLCAvLyDmj5DnpLrnmoTlhoXlrrksXHJcbiAgICAgICAgICBkdXJhdGlvbjogMTUwMCwgLy8g5bu26L+f5pe26Ze0LFxyXG4gICAgICAgICAgbWFzazogdHJ1ZSAvLyDmmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNoYW5nZUZuKGUpIHtcclxuICAgICAgdGhpcy5pbnB1dFZhbCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19