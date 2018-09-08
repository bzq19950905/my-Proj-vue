'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _StartLeven = require('./../components/StartLeven.js');

var _StartLeven2 = _interopRequireDefault(_StartLeven);

var _btnGroup = require('./../components/btnGroup.js');

var _btnGroup2 = _interopRequireDefault(_btnGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuestionDetail = function (_wepy$page) {
  _inherits(QuestionDetail, _wepy$page);

  function QuestionDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, QuestionDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = QuestionDetail.__proto__ || Object.getPrototypeOf(QuestionDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的提问'
    }, _this.$repeat = {}, _this.$props = { "start-leven": { "xmlns:v-bind": "", "v-bind:propDatas.once": "starLevenData", "xmlns:wx": "" }, "btnGroup-com": {} }, _this.$events = {}, _this.components = {
      'start-leven': _StartLeven2.default,
      'btnGroup-com': _btnGroup2.default
    }, _this.data = {
      ids: null,
      type: null,
      starLevenData: {
        text: '对这个回答满意吗？请匿名打分',
        leven: 0
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(QuestionDetail, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var type = options.type;
      this.type = type;
      if (type === 'question') {
        this.ids = options.id;
      }
    }
  }]);

  return QuestionDetail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(QuestionDetail , 'pages/questionDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uRGV0YWlsLmpzIl0sIm5hbWVzIjpbIlF1ZXN0aW9uRGV0YWlsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlN0YXJ0TGV2ZW4iLCJCdG5Hcm91cCIsImRhdGEiLCJpZHMiLCJ0eXBlIiwic3RhckxldmVuRGF0YSIsInRleHQiLCJsZXZlbiIsIm9wdGlvbnMiLCJpZCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs7Ozs7c01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFVVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHlCQUF3QixlQUEzQyxFQUEyRCxZQUFXLEVBQXRFLEVBQWYsRUFBeUYsZ0JBQWUsRUFBeEcsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVixxQkFBZUMsb0JBREw7QUFFVixzQkFBZ0JDO0FBRk4sSyxRQUlaQyxJLEdBQU87QUFDTEMsV0FBSyxJQURBO0FBRUxDLFlBQU0sSUFGRDtBQUdMQyxxQkFBZTtBQUNiQyxjQUFNLGdCQURPO0FBRWJDLGVBQU87QUFGTTtBQUhWLEs7Ozs7OzJCQWRBQyxPLEVBQVM7QUFDZCxVQUFJSixPQUFPSSxRQUFRSixJQUFuQjtBQUNBLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUlBLFNBQVMsVUFBYixFQUF5QjtBQUN2QixhQUFLRCxHQUFMLEdBQVdLLFFBQVFDLEVBQW5CO0FBQ0Q7QUFDRjs7OztFQVZ5Q0MsZUFBS0MsSTs7a0JBQTVCbEIsYyIsImZpbGUiOiJxdWVzdGlvbkRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgU3RhcnRMZXZlbiBmcm9tICcuLi9jb21wb25lbnRzL1N0YXJ0TGV2ZW4nXHJcbmltcG9ydCBCdG5Hcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2J0bkdyb3VwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25EZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTmj5Dpl64nXHJcbiAgfVxyXG4gIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICBsZXQgdHlwZSA9IG9wdGlvbnMudHlwZVxyXG4gICAgdGhpcy50eXBlID0gdHlwZVxyXG4gICAgaWYgKHR5cGUgPT09ICdxdWVzdGlvbicpIHtcclxuICAgICAgdGhpcy5pZHMgPSBvcHRpb25zLmlkXHJcbiAgICB9XHJcbiAgfVxyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJzdGFydC1sZXZlblwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cHJvcERhdGFzLm9uY2VcIjpcInN0YXJMZXZlbkRhdGFcIixcInhtbG5zOnd4XCI6XCJcIn0sXCJidG5Hcm91cC1jb21cIjp7fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAnc3RhcnQtbGV2ZW4nOiBTdGFydExldmVuLFxyXG4gICAgJ2J0bkdyb3VwLWNvbSc6IEJ0bkdyb3VwXHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBpZHM6IG51bGwsXHJcbiAgICB0eXBlOiBudWxsLFxyXG4gICAgc3RhckxldmVuRGF0YToge1xyXG4gICAgICB0ZXh0OiAn5a+56L+Z5Liq5Zue562U5ruh5oSP5ZCX77yf6K+35Yy/5ZCN5omT5YiGJyxcclxuICAgICAgbGV2ZW46IDBcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19