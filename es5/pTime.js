"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pTime = function () {
	function pTime(value) {
		_classCallCheck(this, pTime);

		this.start = value || 0;
		this.end = null;
		this.pauses = {};
	}

	_createClass(pTime, [{
		key: "pause",
		value: function pause(label, value) {

			if (label && value) {

				this.pauses[label] = {
					start: value,
					end: null
				};
			}
		}
	}, {
		key: "resume",
		value: function resume(label, value) {

			if (this.pauses[label] && value) {
				this.pauses[label].end = value;
			}
		}
	}, {
		key: "init",
		set: function set(value) {

			if (value) {
				this.start = value;
			}
		}
	}, {
		key: "finish",
		set: function set(value) {

			if (value) {
				this.end = value;
			}
		}
	}, {
		key: "result",
		get: function get() {

			var time = this.end - this.start,
			    pausesSum = 0,
			    finalTime = void 0;

			for (var key in this.pauses) {

				if (this.pauses.hasOwnProperty(key)) {
					pausesSum += this.pauses[key].end - this.pauses[key].start;
				}
			}

			finalTime = time - pausesSum;

			return finalTime;
		}
	}]);

	return pTime;
}();

exports.default = pTime;
module.exports = exports['default'];