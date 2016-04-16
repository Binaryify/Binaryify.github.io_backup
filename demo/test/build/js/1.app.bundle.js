webpackJsonp([1],{

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Detail = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _ionicAngular = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Detail = exports.Detail = (_dec = (0, _ionicAngular.Page)({
	  templateUrl: 'build/pages/detail2/detail2.html'
	}), _dec(_class = function () {
	  _createClass(Detail, null, [{
	    key: 'parameters',
	    get: function get() {
	      return [[_ionicAngular.NavController], [_ionicAngular.NavParams]];
	    }
	  }]);

	  function Detail(nav, params) {
	    _classCallCheck(this, Detail);

	    this.nav = nav;
	    this.params = params;
	    console.log(this.params.data);
	    console.log(this.params.data.paramsData);
	    this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
	    this.init();
	  }

	  _createClass(Detail, [{
	    key: 'init',
	    value: function init() {
	      console.log('init...');
	    }
	  }, {
	    key: 'onPageWillEnter',
	    value: function onPageWillEnter() {
	      this.tabBarElement.style.display = 'none';
	    }
	  }, {
	    key: 'onPageWillLeave',
	    value: function onPageWillLeave() {
	      this.tabBarElement.style.display = 'block';
	    }
	  }]);

	  return Detail;
	}()) || _class);

/***/ }

});