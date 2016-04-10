"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cycles = function () {
    function cycles(settings) {
        _classCallCheck(this, cycles);

        this.cycles = settings.cycles || 10;
        this.testing = settings.function || null;
        this.name = settings.name || null;
        this.times = [];
    }

    _createClass(cycles, [{
        key: "init",
        value: function init() {

            var i = 0,
                l = this.cycles,
                start,
                end;

            for (i; i < l; i++) {

                start = new Date();

                this.testing();

                end = new Date();

                this.times.push(end - start);
            }
        }
    }, {
        key: "name",
        value: function name() {

            return this.name;
        }
    }, {
        key: "result",
        get: function get() {

            var l = this.times.length,
                sum = 0,
                average = 0;

            this.times.forEach(function (value) {

                sum += value;
            });

            average = sum / l;

            return average;
        }
    }]);

    return cycles;
}();

exports.default = cycles;
module.exports = exports['default'];
