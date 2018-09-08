'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuestionCon = function (_wepy$component) {
  _inherits(QuestionCon, _wepy$component);

  function QuestionCon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, QuestionCon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = QuestionCon.__proto__ || Object.getPrototypeOf(QuestionCon)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      datas: {
        type: Array,
        default: [],
        twoWay: true
      }
    }, _this.methods = {
      clickFn: function clickFn(val) {
        _wepy2.default.navigateTo({
          url: '../pages/questionDetail?type=question&id=' + val
        });
      }
    }, _this.data = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(QuestionCon, [{
    key: 'onload',
    value: function onload() {
      console.log('112');
      console.log(this.datas);
    }
  }]);

  return QuestionCon;
}(_wepy2.default.component);

exports.default = QuestionCon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uQ29tLmpzIl0sIm5hbWVzIjpbIlF1ZXN0aW9uQ29uIiwicHJvcHMiLCJkYXRhcyIsInR5cGUiLCJBcnJheSIsImRlZmF1bHQiLCJ0d29XYXkiLCJtZXRob2RzIiwiY2xpY2tGbiIsInZhbCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU87QUFDTEMsY0FBTUMsS0FERDtBQUVMQyxpQkFBUyxFQUZKO0FBR0xDLGdCQUFRO0FBSEg7QUFERCxLLFFBT1JDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxHQURBLEVBQ0s7QUFDWEMsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSyw4Q0FBOENIO0FBRHJDLFNBQWhCO0FBR0Q7QUFMTyxLLFFBV1ZJLEksR0FBTyxFOzs7Ozs2QkFKRTtBQUNQQyxjQUFRQyxHQUFSLENBQVksS0FBWjtBQUNBRCxjQUFRQyxHQUFSLENBQVksS0FBS2IsS0FBakI7QUFDRDs7OztFQWxCc0NRLGVBQUtNLFM7O2tCQUF6QmhCLFciLCJmaWxlIjoicXVlc3Rpb25Db20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25Db24gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgcHJvcHMgPSB7XHJcbiAgICBkYXRhczoge1xyXG4gICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgIHR3b1dheTogdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgY2xpY2tGbih2YWwpIHtcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICcuLi9wYWdlcy9xdWVzdGlvbkRldGFpbD90eXBlPXF1ZXN0aW9uJmlkPScgKyB2YWxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgb25sb2FkKCkge1xyXG4gICAgY29uc29sZS5sb2coJzExMicpXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzKVxyXG4gIH1cclxuICBkYXRhID0ge31cclxufVxyXG4iXX0=