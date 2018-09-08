'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _action = require('./../action/action.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpLoadImg = function (_wepy$component) {
  _inherits(UpLoadImg, _wepy$component);

  function UpLoadImg() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UpLoadImg);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UpLoadImg.__proto__ || Object.getPrototypeOf(UpLoadImg)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      files: [],
      chooseImgpath: '',
      imgLen: 1,
      flag: true,
      editOption: {}
    }, _this.mixins = [_base2.default], _this.methods = {
      chooseImage: function chooseImage(e) {
        var _this2 = this;

        _wepy2.default.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera']
        }).then(function (res) {
          _this2.files = _this2.data.files.concat(res.tempFilePaths);
          _this2.chooseImgpath = res.tempFilePaths[0];
          _this2.$apply();
        });
      },

      // 上传文件
      upLoadFile: function upLoadFile() {
        var _this3 = this;

        _wepy2.default.showModal({
          content: '修改成功',
          confirmText: '保存返回',
          cancelText: '取消保存'
        }).then(function (res) {
          (0, _action.upLoadFileAction)({
            filePath: _this3.chooseImgpath,
            name: 'avatar'
          }, function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
              var data, paths;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      data = JSON.parse(res.data);
                      paths = data.data.avatar;
                      _context.next = 4;
                      return _this3.editUser({
                        avatar: paths
                      });

                    case 4:
                      _wepy2.default.navigateBack({
                        url: '../pages/EditMaterial'
                      });

                    case 5:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, _this3);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());
        });
      },

      // 点击预览图片
      previewImage: function previewImage(e) {
        _wepy2.default.previewImage({
          current: e.currentTarget.id,
          urls: this.data.files
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UpLoadImg, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getRouterUserInfo();

              case 2:
                data = _context2.sent;

                this.editOption = data;

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad() {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return UpLoadImg;
}(_wepy2.default.component);

exports.default = UpLoadImg;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwTG9hZEltZy5qcyJdLCJuYW1lcyI6WyJVcExvYWRJbWciLCJkYXRhIiwiZmlsZXMiLCJjaG9vc2VJbWdwYXRoIiwiaW1nTGVuIiwiZmxhZyIsImVkaXRPcHRpb24iLCJtaXhpbnMiLCJiYXNlTWl4aW4iLCJtZXRob2RzIiwiY2hvb3NlSW1hZ2UiLCJlIiwid2VweSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwidGhlbiIsImNvbmNhdCIsInJlcyIsInRlbXBGaWxlUGF0aHMiLCIkYXBwbHkiLCJ1cExvYWRGaWxlIiwic2hvd01vZGFsIiwiY29udGVudCIsImNvbmZpcm1UZXh0IiwiY2FuY2VsVGV4dCIsImZpbGVQYXRoIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInBhdGhzIiwiYXZhdGFyIiwiZWRpdFVzZXIiLCJuYXZpZ2F0ZUJhY2siLCJ1cmwiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwiY3VycmVudFRhcmdldCIsImlkIiwidXJscyIsImdldFJvdXRlclVzZXJJbmZvIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLHFCQUFlLEVBRlY7QUFHTEMsY0FBUSxDQUhIO0FBSUxDLFlBQU0sSUFKRDtBQUtMQyxrQkFBWTtBQUxQLEssUUFPUEMsTSxHQUFTLENBQUNDLGNBQUQsQyxRQUtUQyxPLEdBQVU7QUFDUkMsaUJBRFEsdUJBQ0lDLENBREosRUFDTztBQUFBOztBQUNiQyx1QkFBS0YsV0FBTCxDQUFpQjtBQUNmRyxpQkFBTyxDQURRO0FBRWZDLG9CQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FGSztBQUdmQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWO0FBSEcsU0FBakIsRUFJR0MsSUFKSCxDQUlRLGVBQU87QUFDYixpQkFBS2QsS0FBTCxHQUFhLE9BQUtELElBQUwsQ0FBVUMsS0FBVixDQUFnQmUsTUFBaEIsQ0FBdUJDLElBQUlDLGFBQTNCLENBQWI7QUFDQSxpQkFBS2hCLGFBQUwsR0FBcUJlLElBQUlDLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBckI7QUFDQSxpQkFBS0MsTUFBTDtBQUNELFNBUkQ7QUFTRCxPQVhPOztBQVlSO0FBQ0FDLGdCQWJRLHdCQWFLO0FBQUE7O0FBQ1hULHVCQUFLVSxTQUFMLENBQWU7QUFDYkMsbUJBQVMsTUFESTtBQUViQyx1QkFBYSxNQUZBO0FBR2JDLHNCQUFZO0FBSEMsU0FBZixFQUlHVCxJQUpILENBSVEsVUFBQ0UsR0FBRCxFQUFTO0FBQ2Ysd0NBQWlCO0FBQ2ZRLHNCQUFVLE9BQUt2QixhQURBO0FBRWZ3QixrQkFBTTtBQUZTLFdBQWpCO0FBQUEsZ0ZBR0csaUJBQU9ULEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0dqQiwwQkFESCxHQUNVMkIsS0FBS0MsS0FBTCxDQUFXWCxJQUFJakIsSUFBZixDQURWO0FBRUc2QiwyQkFGSCxHQUVXN0IsS0FBS0EsSUFBTCxDQUFVOEIsTUFGckI7QUFBQTtBQUFBLDZCQUdLLE9BQUtDLFFBQUwsQ0FBYztBQUNsQkQsZ0NBQVFEO0FBRFUsdUJBQWQsQ0FITDs7QUFBQTtBQU1EbEIscUNBQUtxQixZQUFMLENBQWtCO0FBQ2hCQyw2QkFBSztBQURXLHVCQUFsQjs7QUFOQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUQsU0FsQkQ7QUFtQkQsT0FqQ087O0FBa0NSO0FBQ0FDLGtCQW5DUSx3QkFtQ0t4QixDQW5DTCxFQW1DUTtBQUNkQyx1QkFBS3VCLFlBQUwsQ0FBa0I7QUFDaEJDLG1CQUFTekIsRUFBRTBCLGFBQUYsQ0FBZ0JDLEVBRFQ7QUFFaEJDLGdCQUFNLEtBQUt0QyxJQUFMLENBQVVDO0FBRkEsU0FBbEI7QUFJRDtBQXhDTyxLOzs7Ozs7Ozs7Ozs7O3VCQUhTLEtBQUtzQyxpQkFBTCxFOzs7QUFBYnZDLG9COztBQUNKLHFCQUFLSyxVQUFMLEdBQWtCTCxJQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVhtQ1csZUFBSzZCLFM7O2tCQUF2QnpDLFMiLCJmaWxlIjoidXBMb2FkSW1nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBiYXNlTWl4aW4gZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXHJcbmltcG9ydCB7IHVwTG9hZEZpbGVBY3Rpb24gfSBmcm9tICcuLi9hY3Rpb24vYWN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBMb2FkSW1nIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBmaWxlczogW10sXHJcbiAgICBjaG9vc2VJbWdwYXRoOiAnJyxcclxuICAgIGltZ0xlbjogMSxcclxuICAgIGZsYWc6IHRydWUsXHJcbiAgICBlZGl0T3B0aW9uOiB7fVxyXG4gIH1cclxuICBtaXhpbnMgPSBbYmFzZU1peGluXVxyXG4gIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5nZXRSb3V0ZXJVc2VySW5mbygpXHJcbiAgICB0aGlzLmVkaXRPcHRpb24gPSBkYXRhXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBjaG9vc2VJbWFnZShlKSB7XHJcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgIGNvdW50OiAxLFxyXG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcclxuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddXHJcbiAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICB0aGlzLmZpbGVzID0gdGhpcy5kYXRhLmZpbGVzLmNvbmNhdChyZXMudGVtcEZpbGVQYXRocylcclxuICAgICAgICB0aGlzLmNob29zZUltZ3BhdGggPSByZXMudGVtcEZpbGVQYXRoc1swXVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvLyDkuIrkvKDmlofku7ZcclxuICAgIHVwTG9hZEZpbGUoKSB7XHJcbiAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICBjb250ZW50OiAn5L+u5pS55oiQ5YqfJyxcclxuICAgICAgICBjb25maXJtVGV4dDogJ+S/neWtmOi/lOWbnicsXHJcbiAgICAgICAgY2FuY2VsVGV4dDogJ+WPlua2iOS/neWtmCdcclxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdXBMb2FkRmlsZUFjdGlvbih7XHJcbiAgICAgICAgICBmaWxlUGF0aDogdGhpcy5jaG9vc2VJbWdwYXRoLFxyXG4gICAgICAgICAgbmFtZTogJ2F2YXRhcidcclxuICAgICAgICB9LCBhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpXHJcbiAgICAgICAgICBsZXQgcGF0aHMgPSBkYXRhLmRhdGEuYXZhdGFyXHJcbiAgICAgICAgICBhd2FpdCB0aGlzLmVkaXRVc2VyKHtcclxuICAgICAgICAgICAgYXZhdGFyOiBwYXRoc1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgdXJsOiAnLi4vcGFnZXMvRWRpdE1hdGVyaWFsJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8vIOeCueWHu+mihOiniOWbvueJh1xyXG4gICAgcHJldmlld0ltYWdlKGUpIHtcclxuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgIGN1cnJlbnQ6IGUuY3VycmVudFRhcmdldC5pZCxcclxuICAgICAgICB1cmxzOiB0aGlzLmRhdGEuZmlsZXNcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19