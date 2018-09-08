'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStorageSync = exports.getStorage = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @file util.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @brief 全局公用方法的封装
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @author hujun
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @date 2018-8-8
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

var getStorage = exports.getStorage = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(key) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', _wepy2.default.getStorage({
              key: key
            }).then(function (res) {
              return res.data;
            }).catch(function () {
              return null;
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getStorage(_x) {
    return _ref.apply(this, arguments);
  };
}();

var setStorageSync = exports.setStorageSync = function setStorageSync(key, value) {
  _wepy2.default.setStorageSync(key, value);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbImdldFN0b3JhZ2UiLCJrZXkiLCJ3ZXB5IiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsInNldFN0b3JhZ2VTeW5jIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPQTs7Ozs7OzJjQVBBOzs7Ozs7O0FBUU8sSUFBTUE7QUFBQSxxRUFBYSxpQkFBTUMsR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQ2pCQyxlQUNKRixVQURJLENBQ087QUFDVkMsbUJBQUtBO0FBREssYUFEUCxFQUlKRSxJQUpJLENBSUM7QUFBQSxxQkFBT0MsSUFBSUMsSUFBWDtBQUFBLGFBSkQsRUFLSkMsS0FMSSxDQUtFO0FBQUEscUJBQU0sSUFBTjtBQUFBLGFBTEYsQ0FEaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBYjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQVNBLElBQU1DLDBDQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ04sR0FBRCxFQUFNTyxLQUFOLEVBQWdCO0FBQzVDTixpQkFBS0ssY0FBTCxDQUFvQk4sR0FBcEIsRUFBeUJPLEtBQXpCO0FBQ0QsQ0FGTSIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQGZpbGUgdXRpbC5qc1xuICogQGJyaWVmIOWFqOWxgOWFrOeUqOaWueazleeahOWwgeijhVxuICogQGF1dGhvciBodWp1blxuICogQGRhdGUgMjAxOC04LThcbiAqL1xuXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGNvbnN0IGdldFN0b3JhZ2UgPSBhc3luYyBrZXkgPT4ge1xuICByZXR1cm4gd2VweVxuICAgIC5nZXRTdG9yYWdlKHtcbiAgICAgIGtleToga2V5XG4gICAgfSlcbiAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpXG4gICAgLmNhdGNoKCgpID0+IG51bGwpXG59XG5cbmV4cG9ydCBjb25zdCBzZXRTdG9yYWdlU3luYyA9IChrZXksIHZhbHVlKSA9PiB7XG4gIHdlcHkuc2V0U3RvcmFnZVN5bmMoa2V5LCB2YWx1ZSlcbn1cbiJdfQ==