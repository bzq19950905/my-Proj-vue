'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _module = require('./../common/module.js');

var _ota = require('./../utils/ota.js');

var _utils = require('./../utils/utils.js');

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditMaterial = function (_wepy$page) {
  _inherits(EditMaterial, _wepy$page);

  function EditMaterial() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditMaterial);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditMaterial.__proto__ || Object.getPrototypeOf(EditMaterial)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '编辑资料'
    }, _this.mixins = [_base2.default], _this.data = {
      listData1: {},
      myEditData: {},
      wxUserInfo: '',
      array: (0, _ota.toArray)(20),
      interestArray: [],
      index: 0,
      interestIndex: 0,
      selectedOption: '3年',
      interestSelectedOption: '前端js'
    }, _this.methods = {
      bindPickerChange: function bindPickerChange(e) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var val1;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  val1 = e.detail.value;

                  _this2.interestIndex = val1;
                  _this2.interestSelectedOption = _this2.interestArray[val1];

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      bindPickerChange1: function bindPickerChange1(e) {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var val;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  val = e.detail.value;

                  _this3.index = val;
                  _this3.selectedOption = _this3.array[val];
                  _context2.next = 5;
                  return _this3.editUser({
                    seniority: _this3.array[val]
                  });

                case 5:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3);
        }))();
      },
      chooseLocation: function chooseLocation() {
        _wepy2.default.chooseLocation({
          success: function success(res) {
            console.log(res);
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditMaterial, [{
    key: 'onShow',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var uid, data, wxUser, newData;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _utils.getStorage)('uid');

              case 2:
                uid = _context3.sent;
                _context3.next = 5;
                return this.getRouterUserInfo(uid);

              case 5:
                data = _context3.sent;

                (0, _utils.setStorageSync)('userInfo', data);
                wxUser = _wepy2.default.getStorageSync('WXUserInfo');
                newData = (0, _ota.DeleteObjectKeys)(data, _module.editData);

                this.listData1 = newData;
                data.avatar === '' && (this.listData1.avatar = wxUser.avatarUrl);
                this.myEditData = _module.editData;
                this.selectedOption = data ? data.seniority : '1年';
                this.$apply();

              case 14:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onShow() {
        return _ref2.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return EditMaterial;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(EditMaterial , 'pages/EditMaterial'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVkaXRNYXRlcmlhbC5qcyJdLCJuYW1lcyI6WyJFZGl0TWF0ZXJpYWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibWl4aW5zIiwiYmFzZU1peGluIiwiZGF0YSIsImxpc3REYXRhMSIsIm15RWRpdERhdGEiLCJ3eFVzZXJJbmZvIiwiYXJyYXkiLCJpbnRlcmVzdEFycmF5IiwiaW5kZXgiLCJpbnRlcmVzdEluZGV4Iiwic2VsZWN0ZWRPcHRpb24iLCJpbnRlcmVzdFNlbGVjdGVkT3B0aW9uIiwibWV0aG9kcyIsImJpbmRQaWNrZXJDaGFuZ2UiLCJlIiwidmFsMSIsImRldGFpbCIsInZhbHVlIiwiYmluZFBpY2tlckNoYW5nZTEiLCJ2YWwiLCJlZGl0VXNlciIsInNlbmlvcml0eSIsImNob29zZUxvY2F0aW9uIiwid2VweSIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwidWlkIiwiZ2V0Um91dGVyVXNlckluZm8iLCJ3eFVzZXIiLCJnZXRTdG9yYWdlU3luYyIsIm5ld0RhdGEiLCJlZGl0RGF0YSIsImF2YXRhciIsImF2YXRhclVybCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxNLEdBQVMsQ0FBQ0MsY0FBRCxDLFFBYVRDLEksR0FBTztBQUNMQyxpQkFBVyxFQUROO0FBRUxDLGtCQUFZLEVBRlA7QUFHTEMsa0JBQVksRUFIUDtBQUlMQyxhQUFPLGtCQUFRLEVBQVIsQ0FKRjtBQUtMQyxxQkFBZSxFQUxWO0FBTUxDLGFBQU8sQ0FORjtBQU9MQyxxQkFBZSxDQVBWO0FBUUxDLHNCQUFnQixJQVJYO0FBU0xDLDhCQUF3QjtBQVRuQixLLFFBV1BDLE8sR0FBVTtBQUNGQyxzQkFERSw0QkFDZUMsQ0FEZixFQUNrQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQkMsc0JBRG9CLEdBQ2JELEVBQUVFLE1BQUYsQ0FBU0MsS0FESTs7QUFFeEIseUJBQUtSLGFBQUwsR0FBcUJNLElBQXJCO0FBQ0EseUJBQUtKLHNCQUFMLEdBQThCLE9BQUtKLGFBQUwsQ0FBbUJRLElBQW5CLENBQTlCOztBQUh3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUl6QixPQUxPO0FBTUZHLHVCQU5FLDZCQU1nQkosQ0FOaEIsRUFNbUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckJLLHFCQURxQixHQUNmTCxFQUFFRSxNQUFGLENBQVNDLEtBRE07O0FBRXpCLHlCQUFLVCxLQUFMLEdBQWFXLEdBQWI7QUFDQSx5QkFBS1QsY0FBTCxHQUFzQixPQUFLSixLQUFMLENBQVdhLEdBQVgsQ0FBdEI7QUFIeUI7QUFBQSx5QkFJbkIsT0FBS0MsUUFBTCxDQUFjO0FBQ2xCQywrQkFBVyxPQUFLZixLQUFMLENBQVdhLEdBQVg7QUFETyxtQkFBZCxDQUptQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU8xQixPQWJPO0FBY1JHLG9CQWRRLDRCQWNTO0FBQ2ZDLHVCQUFLRCxjQUFMLENBQW9CO0FBQ2xCRSxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCQyxvQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0Q7QUFIaUIsU0FBcEI7QUFLRDtBQXBCTyxLOzs7Ozs7Ozs7Ozs7O3VCQXRCUSx1QkFBVyxLQUFYLEM7OztBQUFaRyxtQjs7dUJBQ2EsS0FBS0MsaUJBQUwsQ0FBdUJELEdBQXZCLEM7OztBQUFiMUIsb0I7O0FBQ0osMkNBQWUsVUFBZixFQUEyQkEsSUFBM0I7QUFDSTRCLHNCLEdBQVNQLGVBQUtRLGNBQUwsQ0FBb0IsWUFBcEIsQztBQUNUQyx1QixHQUFVLDJCQUFpQjlCLElBQWpCLEVBQXVCK0IsZ0JBQXZCLEM7O0FBQ2QscUJBQUs5QixTQUFMLEdBQWlCNkIsT0FBakI7QUFDQzlCLHFCQUFLZ0MsTUFBTCxLQUFnQixFQUFqQixLQUF5QixLQUFLL0IsU0FBTCxDQUFlK0IsTUFBZixHQUF3QkosT0FBT0ssU0FBeEQ7QUFDQSxxQkFBSy9CLFVBQUwsR0FBa0I2QixnQkFBbEI7QUFDQSxxQkFBS3ZCLGNBQUwsR0FBc0JSLE9BQU9BLEtBQUttQixTQUFaLEdBQXdCLElBQTlDO0FBQ0EscUJBQUtlLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFmc0NiLGVBQUtjLEk7O2tCQUExQnhDLFkiLCJmaWxlIjoiRWRpdE1hdGVyaWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgZWRpdERhdGEgfSBmcm9tICcuLi9jb21tb24vbW9kdWxlJ1xuaW1wb3J0IHsgRGVsZXRlT2JqZWN0S2V5cywgdG9BcnJheSB9IGZyb20gJy4uL3V0aWxzL290YSdcbmltcG9ydCB7IGdldFN0b3JhZ2UsIHNldFN0b3JhZ2VTeW5jIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5pbXBvcnQgYmFzZU1peGluIGZyb20gJy4uL21peGlucy9iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0TWF0ZXJpYWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e8lui+kei1hOaWmSdcbiAgfVxuICBtaXhpbnMgPSBbYmFzZU1peGluXVxuICBhc3luYyBvblNob3coKSB7XG4gICAgbGV0IHVpZCA9IGF3YWl0IGdldFN0b3JhZ2UoJ3VpZCcpXG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLmdldFJvdXRlclVzZXJJbmZvKHVpZClcbiAgICBzZXRTdG9yYWdlU3luYygndXNlckluZm8nLCBkYXRhKVxuICAgIGxldCB3eFVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdXWFVzZXJJbmZvJylcbiAgICBsZXQgbmV3RGF0YSA9IERlbGV0ZU9iamVjdEtleXMoZGF0YSwgZWRpdERhdGEpXG4gICAgdGhpcy5saXN0RGF0YTEgPSBuZXdEYXRhO1xuICAgIChkYXRhLmF2YXRhciA9PT0gJycpICYmICh0aGlzLmxpc3REYXRhMS5hdmF0YXIgPSB3eFVzZXIuYXZhdGFyVXJsKVxuICAgIHRoaXMubXlFZGl0RGF0YSA9IGVkaXREYXRhXG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IGRhdGEgPyBkYXRhLnNlbmlvcml0eSA6ICcx5bm0J1xuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuICBkYXRhID0ge1xuICAgIGxpc3REYXRhMToge30sXG4gICAgbXlFZGl0RGF0YToge30sXG4gICAgd3hVc2VySW5mbzogJycsXG4gICAgYXJyYXk6IHRvQXJyYXkoMjApLFxuICAgIGludGVyZXN0QXJyYXk6IFtdLFxuICAgIGluZGV4OiAwLFxuICAgIGludGVyZXN0SW5kZXg6IDAsXG4gICAgc2VsZWN0ZWRPcHRpb246ICcz5bm0JyxcbiAgICBpbnRlcmVzdFNlbGVjdGVkT3B0aW9uOiAn5YmN56uvanMnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBiaW5kUGlja2VyQ2hhbmdlKGUpIHtcbiAgICAgIGxldCB2YWwxID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMuaW50ZXJlc3RJbmRleCA9IHZhbDFcbiAgICAgIHRoaXMuaW50ZXJlc3RTZWxlY3RlZE9wdGlvbiA9IHRoaXMuaW50ZXJlc3RBcnJheVt2YWwxXVxuICAgIH0sXG4gICAgYXN5bmMgYmluZFBpY2tlckNoYW5nZTEoZSkge1xuICAgICAgbGV0IHZhbCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLmluZGV4ID0gdmFsXG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5hcnJheVt2YWxdXG4gICAgICBhd2FpdCB0aGlzLmVkaXRVc2VyKHtcbiAgICAgICAgc2VuaW9yaXR5OiB0aGlzLmFycmF5W3ZhbF1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBjaG9vc2VMb2NhdGlvbigpIHtcbiAgICAgIHdlcHkuY2hvb3NlTG9jYXRpb24oe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=