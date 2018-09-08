'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _mock = require('./../common/mock.js');

var _mock2 = _interopRequireDefault(_mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mine = function (_wepy$page) {
  _inherits(Mine, _wepy$page);

  function Mine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mine.__proto__ || Object.getPrototypeOf(Mine)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '惠答'
    }, _this.data = {
      wxUser: null,
      routerUser: null,
      myAction: _mock2.default.mineStudentAction,
      TmyAction: _mock2.default.mineTeacherAction,
      status: ''
    }, _this.methods = {
      clickTo: function clickTo(url) {
        _wepy2.default.navigateTo({
          url: url
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Mine, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var Mystatus;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Mystatus = this.$parent.globalData.ownUserInfo.status;

                this.status = Mystatus;
                this.wxUser = _wepy2.default.getStorageSync('WXUserInfo');
                this.routerUser = _wepy2.default.getStorageSync('userInfo');
                this.$apply();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Mine;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Mine , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiTWluZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwid3hVc2VyIiwicm91dGVyVXNlciIsIm15QWN0aW9uIiwibW9ja0RhdGEiLCJtaW5lU3R1ZGVudEFjdGlvbiIsIlRteUFjdGlvbiIsIm1pbmVUZWFjaGVyQWN0aW9uIiwic3RhdHVzIiwibWV0aG9kcyIsImNsaWNrVG8iLCJ1cmwiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsIk15c3RhdHVzIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJvd25Vc2VySW5mbyIsImdldFN0b3JhZ2VTeW5jIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBVVRDLEksR0FBTztBQUNMQyxjQUFRLElBREg7QUFFTEMsa0JBQVksSUFGUDtBQUdMQyxnQkFBVUMsZUFBU0MsaUJBSGQ7QUFJTEMsaUJBQVdGLGVBQVNHLGlCQUpmO0FBS0xDLGNBQVE7QUFMSCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxHQURBLEVBQ0s7QUFDWEMsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEYsZUFBS0E7QUFEUyxTQUFoQjtBQUdEO0FBTE8sSzs7Ozs7Ozs7Ozs7O0FBYkpHLHdCLEdBQVcsS0FBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxXQUF4QixDQUFvQ1QsTTs7QUFDbkQscUJBQUtBLE1BQUwsR0FBY00sUUFBZDtBQUNBLHFCQUFLYixNQUFMLEdBQWNXLGVBQUtNLGNBQUwsQ0FBb0IsWUFBcEIsQ0FBZDtBQUNBLHFCQUFLaEIsVUFBTCxHQUFrQlUsZUFBS00sY0FBTCxDQUFvQixVQUFwQixDQUFsQjtBQUNBLHFCQUFLQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBVDhCUCxlQUFLUSxJOztrQkFBbEJ2QixJIiwiZmlsZSI6Im1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgbW9ja0RhdGEgZnJvbSAnLi4vY29tbW9uL21vY2snXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aDoOetlCdcbiAgfVxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgbGV0IE15c3RhdHVzID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3duVXNlckluZm8uc3RhdHVzXG4gICAgdGhpcy5zdGF0dXMgPSBNeXN0YXR1c1xuICAgIHRoaXMud3hVc2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygnV1hVc2VySW5mbycpXG4gICAgdGhpcy5yb3V0ZXJVc2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuICBkYXRhID0ge1xuICAgIHd4VXNlcjogbnVsbCxcbiAgICByb3V0ZXJVc2VyOiBudWxsLFxuICAgIG15QWN0aW9uOiBtb2NrRGF0YS5taW5lU3R1ZGVudEFjdGlvbixcbiAgICBUbXlBY3Rpb246IG1vY2tEYXRhLm1pbmVUZWFjaGVyQWN0aW9uLFxuICAgIHN0YXR1czogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGNsaWNrVG8odXJsKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IHVybFxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==