"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pubsub = function () {
	function pubsub() {
		_classCallCheck(this, pubsub);

		// Published events and their subscribed functions
		this.events = {};
	}

	// Add event name to list


	_createClass(pubsub, [{
		key: "unpublish",


		// Remove event name from list
		value: function unpublish(eventName) {

			delete this.events[eventName];
		}

		// Subscribe function to event

	}, {
		key: "subscribe",
		value: function subscribe(eventName, callbackfunction) {

			this.events[eventName].push(callbackfunction);
		}

		// Remove function from event

	}, {
		key: "unsubscribe",
		value: function unsubscribe(eventName, callbackfunction) {

			this.events[eventName].splice(this.events[eventName].indexOf(callbackfunction), 1);
		}

		// Initiate event

	}, {
		key: "emit",
		value: function emit(eventName, data) {

			if (this.events[eventName]) {

				this.events[eventName].forEach(function (fn) {

					fn(data);
				});
			} else {
				console.error("Event \"" + eventName + "\" has not beed published");
			}
		}
	}, {
		key: "publish",
		set: function set(eventName) {

			this.events[eventName] = [];
		}
	}]);

	return pubsub;
}();

exports.default = pubsub;
module.exports = exports['default'];