'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*!
 * @file ota.js
 * @brief 数组 对象等数据的二次过滤
 * @author hujun
 * @date 2018-8-8
 */

var DeleteObjectKeys = exports.DeleteObjectKeys = function DeleteObjectKeys() {
  var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var target = arguments[1];

  var edit = {};
  Object.keys(source).forEach(function (val) {
    if (target[val]) {
      edit[val] = source[val];
    }
  });
  return edit;
};

var toArray = exports.toArray = function toArray(len) {
  return Array.from({ length: len }, function (val, key) {
    return key + 1 + '年';
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90YS5qcyJdLCJuYW1lcyI6WyJEZWxldGVPYmplY3RLZXlzIiwic291cmNlIiwidGFyZ2V0IiwiZWRpdCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwidmFsIiwidG9BcnJheSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImxlbiIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7OztBQU9PLElBQU1BLDhDQUFtQixTQUFuQkEsZ0JBQW1CLEdBQXlCO0FBQUEsTUFBeEJDLE1BQXdCLHVFQUFmLEVBQWU7QUFBQSxNQUFYQyxNQUFXOztBQUN2RCxNQUFJQyxPQUFPLEVBQVg7QUFDQUMsU0FBT0MsSUFBUCxDQUFZSixNQUFaLEVBQW9CSyxPQUFwQixDQUE0QixlQUFPO0FBQ2pDLFFBQUlKLE9BQU9LLEdBQVAsQ0FBSixFQUFpQjtBQUNmSixXQUFLSSxHQUFMLElBQVlOLE9BQU9NLEdBQVAsQ0FBWjtBQUNEO0FBQ0YsR0FKRDtBQUtBLFNBQU9KLElBQVA7QUFDRCxDQVJNOztBQVVBLElBQU1LLDRCQUFVLFNBQVZBLE9BQVUsTUFBTztBQUM1QixTQUFPQyxNQUFNQyxJQUFOLENBQVcsRUFBRUMsUUFBUUMsR0FBVixFQUFYLEVBQTRCLFVBQUNMLEdBQUQsRUFBTU0sR0FBTixFQUFjO0FBQy9DLFdBQU9BLE1BQU0sQ0FBTixHQUFVLEdBQWpCO0FBQ0QsR0FGTSxDQUFQO0FBR0QsQ0FKTSIsImZpbGUiOiJvdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEBmaWxlIG90YS5qc1xuICogQGJyaWVmIOaVsOe7hCDlr7nosaHnrYnmlbDmja7nmoTkuozmrKHov4fmu6RcbiAqIEBhdXRob3IgaHVqdW5cbiAqIEBkYXRlIDIwMTgtOC04XG4gKi9cblxuZXhwb3J0IGNvbnN0IERlbGV0ZU9iamVjdEtleXMgPSAoc291cmNlID0ge30sIHRhcmdldCkgPT4ge1xuICBsZXQgZWRpdCA9IHt9XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCh2YWwgPT4ge1xuICAgIGlmICh0YXJnZXRbdmFsXSkge1xuICAgICAgZWRpdFt2YWxdID0gc291cmNlW3ZhbF1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBlZGl0XG59XG5cbmV4cG9ydCBjb25zdCB0b0FycmF5ID0gbGVuID0+IHtcbiAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IGxlbiB9LCAodmFsLCBrZXkpID0+IHtcbiAgICByZXR1cm4ga2V5ICsgMSArICflubQnXG4gIH0pXG59XG4iXX0=