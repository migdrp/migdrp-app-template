/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./src/frontend/custom-element.ts ***!
  \****************************************/
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CustomElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(CustomElement, _HTMLElement);

  var _super = _createSuper(CustomElement);

  function CustomElement() {
    var _this;

    _classCallCheck(this, CustomElement);

    _this = _super.call(this);

    _this.renderTemplate();

    console.log('Custom element started');
    return _this;
  }

  _createClass(CustomElement, [{
    key: "html",
    value: function html() {
      return (
        /*html*/
        "\n\t\t<style>\n\t\t\t.rojo{\n\t\t\t\tcolor:red;\n\t\t\t}\n\t\t</style>\n\t\t<p class='rojo'>ESTE ES UN WEB COMPONENT PERSONALIZADO</p>\n\t\t"
      );
    }
  }, {
    key: "renderTemplate",
    value: function renderTemplate() {
      this.attachShadow({
        mode: 'open'
      });
      var template = this.html();
      this.shadowRoot.innerHTML += template;
    }
  }]);

  return CustomElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('custom-element', CustomElement);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxhOzs7OztBQXFCSiwyQkFBYztBQUFBOztBQUFBOztBQUNkOztBQUNBLFVBQUtDLGNBQUw7O0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBSGM7QUFJZDs7OztXQXZCRCxnQkFBc0I7QUFDckI7QUFBUTtBQUFSO0FBQUE7QUFRQTs7O1dBR0QsMEJBQTZCO0FBQzVCLFdBQUtDLFlBQUwsQ0FBa0I7QUFBQ0MsUUFBQUEsSUFBSSxFQUFDO0FBQU4sT0FBbEI7QUFDQSxVQUFNQyxRQUFRLEdBQUcsS0FBS0MsSUFBTCxFQUFqQjtBQUNBLFdBQUtDLFVBQUwsQ0FBZ0JDLFNBQWhCLElBQTZCSCxRQUE3QjtBQUNBOzs7O2lDQWxCMEJJLFc7O0FBNEI1QkMsY0FBYyxDQUFDQyxNQUFmLENBQXNCLGdCQUF0QixFQUF3Q1osYUFBeEMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21pZ2RycC1hcHAtdGVtcGxhdGUvLi9zcmMvZnJvbnRlbmQvY3VzdG9tLWVsZW1lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ3VzdG9tRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHRcclxuXHRwcml2YXRlIGh0bWwoKTpzdHJpbmcge1xyXG5cdFx0cmV0dXJuICAvKmh0bWwqLyBgXHJcblx0XHQ8c3R5bGU+XHJcblx0XHRcdC5yb2pve1xyXG5cdFx0XHRcdGNvbG9yOnJlZDtcclxuXHRcdFx0fVxyXG5cdFx0PC9zdHlsZT5cclxuXHRcdDxwIGNsYXNzPSdyb2pvJz5FU1RFIEVTIFVOIFdFQiBDT01QT05FTlQgUEVSU09OQUxJWkFETzwvcD5cclxuXHRcdGA7XHJcblx0fVxyXG5cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJUZW1wbGF0ZSgpOnZvaWR7XHJcblx0XHR0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTonb3Blbid9KTtcclxuXHRcdGNvbnN0IHRlbXBsYXRlID0gdGhpcy5odG1sKCk7XHJcblx0XHR0aGlzLnNoYWRvd1Jvb3QuaW5uZXJIVE1MICs9IHRlbXBsYXRlO1xyXG5cdH1cclxuXHRcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5yZW5kZXJUZW1wbGF0ZSgpO1xyXG5cdFx0Y29uc29sZS5sb2coJ0N1c3RvbSBlbGVtZW50IHN0YXJ0ZWQnKTtcclxuXHR9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY3VzdG9tLWVsZW1lbnQnLCBDdXN0b21FbGVtZW50KTtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiQ3VzdG9tRWxlbWVudCIsInJlbmRlclRlbXBsYXRlIiwiY29uc29sZSIsImxvZyIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJ0ZW1wbGF0ZSIsImh0bWwiLCJzaGFkb3dSb290IiwiaW5uZXJIVE1MIiwiSFRNTEVsZW1lbnQiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSJdLCJzb3VyY2VSb290IjoiIn0=