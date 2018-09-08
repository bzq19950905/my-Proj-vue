'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _upLoadImg = require('./../components/upLoadImg.js');

var _upLoadImg2 = _interopRequireDefault(_upLoadImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditMaterialDetail = function (_wepy$page) {
  _inherits(EditMaterialDetail, _wepy$page);

  function EditMaterialDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditMaterialDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditMaterialDetail.__proto__ || Object.getPrototypeOf(EditMaterialDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '编辑'
    }, _this.mixins = [_base2.default], _this.data = {
      id: null,
      userInfo: {},
      flag: false,
      editOption: {}
    }, _this.methods = {
      formSubmit: function formSubmit(e) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var val, type, resultData;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  val = e.detail.value;
                  type = e.target.dataset.type;

                  val = type === 'summary' ? val.textarea : val.input;

                  if (!(val === '' || val === '')) {
                    _context.next = 6;
                    break;
                  }

                  _wepy2.default.showToast({
                    title: '不能为空',
                    icon: 'error',
                    duration: 1000
                  });
                  return _context.abrupt('return', false);

                case 6:
                  if (!(type === 'name')) {
                    _context.next = 10;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '用户名不可更改',
                    confirmText: '确定',
                    confirmColor: '#3CC51F'
                  });
                  _context.next = 14;
                  break;

                case 10:
                  _context.next = 12;
                  return _this2.editUser(_defineProperty({}, type, val));

                case 12:
                  resultData = _context.sent;

                  if (resultData && resultData.errcode === 0) {
                    _wepy2.default.removeStorageSync('userInfo');
                    _wepy2.default.navigateBack({
                      url: '../pages/EditMaterial'
                    });
                  }

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      }
    }, _this.components = {
      'upload-img': _upLoadImg2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditMaterialDetail, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
        var id, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = options.id;

                this.id = id;
                _context2.next = 4;
                return this.getRouterUserInfo();

              case 4:
                data = _context2.sent;

                this.editOption = data;
                this.$apply();

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return EditMaterialDetail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(EditMaterialDetail , 'pages/EditMaterialDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVkaXRNYXRlcmlhbERldGFpbC5qcyJdLCJuYW1lcyI6WyJFZGl0TWF0ZXJpYWxEZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibWl4aW5zIiwiYmFzZU1peGluIiwiZGF0YSIsImlkIiwidXNlckluZm8iLCJmbGFnIiwiZWRpdE9wdGlvbiIsIm1ldGhvZHMiLCJmb3JtU3VibWl0IiwiZSIsInZhbCIsImRldGFpbCIsInZhbHVlIiwidHlwZSIsInRhcmdldCIsImRhdGFzZXQiLCJ0ZXh0YXJlYSIsImlucHV0Iiwid2VweSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwic2hvd01vZGFsIiwiY29udGVudCIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwiZWRpdFVzZXIiLCJyZXN1bHREYXRhIiwiZXJyY29kZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwibmF2aWdhdGVCYWNrIiwidXJsIiwiY29tcG9uZW50cyIsIlVwTG9hZEltZyIsIm9wdGlvbnMiLCJnZXRSb3V0ZXJVc2VySW5mbyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsa0I7Ozs7Ozs7Ozs7Ozs7OzhNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLE0sR0FBUyxDQUFDQyxjQUFELEMsUUFRVEMsSSxHQUFPO0FBQ0xDLFVBQUksSUFEQztBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLFlBQU0sS0FIRDtBQUlMQyxrQkFBWTtBQUpQLEssUUFNUEMsTyxHQUFVO0FBQ0ZDLGdCQURFLHNCQUNTQyxDQURULEVBQ1k7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEMscUJBRGMsR0FDUkQsRUFBRUUsTUFBRixDQUFTQyxLQUREO0FBRWRDLHNCQUZjLEdBRVBKLEVBQUVLLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkYsSUFGVjs7QUFHbEJILHdCQUFNRyxTQUFTLFNBQVQsR0FBcUJILElBQUlNLFFBQXpCLEdBQW9DTixJQUFJTyxLQUE5Qzs7QUFIa0Isd0JBSWRQLFFBQVEsRUFBUixJQUFjQSxRQUFRLEVBSlI7QUFBQTtBQUFBO0FBQUE7O0FBS2hCUSxpQ0FBS0MsU0FBTCxDQUFlO0FBQ2JDLDJCQUFPLE1BRE07QUFFYkMsMEJBQU0sT0FGTztBQUdiQyw4QkFBVTtBQUhHLG1CQUFmO0FBTGdCLG1EQVVULEtBVlM7O0FBQUE7QUFBQSx3QkFZZFQsU0FBUyxNQVpLO0FBQUE7QUFBQTtBQUFBOztBQWFoQkssaUNBQUtLLFNBQUwsQ0FBZTtBQUNiSCwyQkFBTyxJQURNO0FBRWJJLDZCQUFTLFNBRkk7QUFHYkMsaUNBQWEsSUFIQTtBQUliQyxrQ0FBYztBQUpELG1CQUFmO0FBYmdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHlCQW9CTyxPQUFLQyxRQUFMLHFCQUNwQmQsSUFEb0IsRUFDYkgsR0FEYSxFQXBCUDs7QUFBQTtBQW9CWmtCLDRCQXBCWTs7QUF1QmhCLHNCQUFJQSxjQUFjQSxXQUFXQyxPQUFYLEtBQXVCLENBQXpDLEVBQTRDO0FBQzFDWCxtQ0FBS1ksaUJBQUwsQ0FBdUIsVUFBdkI7QUFDQVosbUNBQUthLFlBQUwsQ0FBa0I7QUFDaEJDLDJCQUFLO0FBRFcscUJBQWxCO0FBR0Q7O0FBNUJlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOEJuQjtBQS9CTyxLLFFBaUNWQyxVLEdBQWE7QUFDWCxvQkFBY0M7QUFESCxLOzs7Ozs7NEZBOUNBQyxPOzs7Ozs7QUFDUGhDLGtCLEdBQUtnQyxRQUFRaEMsRTs7QUFDakIscUJBQUtBLEVBQUwsR0FBVUEsRUFBVjs7dUJBQ2lCLEtBQUtpQyxpQkFBTCxFOzs7QUFBYmxDLG9COztBQUNKLHFCQUFLSSxVQUFMLEdBQWtCSixJQUFsQjtBQUNBLHFCQUFLbUMsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVY0Q25CLGVBQUtvQixJOztrQkFBaEN6QyxrQiIsImZpbGUiOiJFZGl0TWF0ZXJpYWxEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGJhc2VNaXhpbiBmcm9tICcuLi9taXhpbnMvYmFzZSdcclxuaW1wb3J0IFVwTG9hZEltZyBmcm9tICcuLi9jb21wb25lbnRzL3VwTG9hZEltZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRNYXRlcmlhbERldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e8lui+kSdcclxuICB9XHJcbiAgbWl4aW5zID0gW2Jhc2VNaXhpbl1cclxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgbGV0IGlkID0gb3B0aW9ucy5pZFxyXG4gICAgdGhpcy5pZCA9IGlkXHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuZ2V0Um91dGVyVXNlckluZm8oKVxyXG4gICAgdGhpcy5lZGl0T3B0aW9uID0gZGF0YVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgaWQ6IG51bGwsXHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICBmbGFnOiBmYWxzZSxcclxuICAgIGVkaXRPcHRpb246IHt9XHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBhc3luYyBmb3JtU3VibWl0KGUpIHtcclxuICAgICAgbGV0IHZhbCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIGxldCB0eXBlID0gZS50YXJnZXQuZGF0YXNldC50eXBlXHJcbiAgICAgIHZhbCA9IHR5cGUgPT09ICdzdW1tYXJ5JyA/IHZhbC50ZXh0YXJlYSA6IHZhbC5pbnB1dFxyXG4gICAgICBpZiAodmFsID09PSAnJyB8fCB2YWwgPT09ICcnKSB7XHJcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfkuI3og73kuLrnqbonLFxyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZSA9PT0gJ25hbWUnKSB7XHJcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDogJ+eUqOaIt+WQjeS4jeWPr+abtOaUuScsXHJcbiAgICAgICAgICBjb25maXJtVGV4dDogJ+ehruWumicsXHJcbiAgICAgICAgICBjb25maXJtQ29sb3I6ICcjM0NDNTFGJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdERhdGEgPSBhd2FpdCB0aGlzLmVkaXRVc2VyKHtcclxuICAgICAgICAgIFt0eXBlXTogdmFsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAocmVzdWx0RGF0YSAmJiByZXN1bHREYXRhLmVycmNvZGUgPT09IDApIHtcclxuICAgICAgICAgIHdlcHkucmVtb3ZlU3RvcmFnZVN5bmMoJ3VzZXJJbmZvJylcclxuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgdXJsOiAnLi4vcGFnZXMvRWRpdE1hdGVyaWFsJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29tcG9uZW50cyA9IHtcclxuICAgICd1cGxvYWQtaW1nJzogVXBMb2FkSW1nXHJcbiAgfVxyXG59XHJcbiJdfQ==