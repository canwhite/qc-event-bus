(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.unknown = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class QCEventBus {
    constructor() {
      this.handlers = {};
    } //订阅在前，将订阅行为给收集了


    on(eventName, cb) {
      if (!this.handlers[eventName]) {
        this.handlers[eventName] = [];
      } //收集订阅行为


      this.handlers[eventName].push(cb);
    } //发布在后，通知订阅者执行其行为


    emit(eventName, ...args) {
      if (this.handlers[eventName]) {
        const handlers = this.handlers[eventName].slice(); //通知订阅者，起床做事

        handlers.forEach(callback => {
          callback(...args);
        });
      }
    }

    off(eventName, cb) {
      const callbacks = this.handlers[eventName];
      const index = callbacks.indexOf(cb);

      if (index !== -1) {
        callbacks.splice(index, 1);
      }
    }

    once(eventName, cb) {
      const wrapper = (...args) => {
        cb(...args);
        this.off(eventName, wrapper);
      };

      this.on(eventName, wrapper);
    }

  }

  var _default = QCEventBus;
  _exports.default = _default;
});