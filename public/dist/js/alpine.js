/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./resources/js/alpine.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
document.addEventListener("alpine:init", function () {
  Alpine.store("search", {
    searchInput: "",
    result: [],
    loading: false,
    page_number: 1,
    value: "",
    controller: null,
    clear: function clear() {
      if (this.searchInput.length === 0) {
        this.get();
      }
    },
    send: function send(id) {
      var formData = new FormData();
      formData.append("key", id);
      formData.append("value", this.value);
      fetch("http://" + location.host + "/api/ajax/language", {
        method: "post",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });
    },
    get: function get() {
      var _this$controller,
        _this = this;
      fetch("http://".concat(location.host, "/api/ajax/language/").concat(encodeURIComponent(this.searchInput.replace(/\//g, "-")), "?page= ").concat(this.page_number), {
        signal: (_this$controller = this.controller) === null || _this$controller === void 0 ? void 0 : _this$controller.signal
      }).then(function (r) {
        return r.json();
      }).then(function (_ref) {
        var data = _ref.data;
        _this.result = data;
        if (_this.controller) {
          _this.controller.abort();
        }
        _this.controller = new AbortController();
      })["catch"](function (e) {
        console.log(e.message);
      })["finally"](function () {
        _this.loading = false;
      });
    },
    "delete": function _delete(id) {
      var _this2 = this;
      fetch(location.protocol + "/api/ajax/language/" + id, {
        method: "delete"
      }).then(function (r) {
        return r.json();
      }).then(function (r) {
        return _this2.result = r.data.data;
      });
    },
    nextPage: function nextPage() {
      this.page_number++;
      if (this.page_number > this.length) this.page_number = this.length;
      this.loading = true;
      this.get();
    },
    prevPage: function prevPage() {
      this.page_number--;
      if (this.page_number < 1) this.page_number = 1;
      this.loading = true;
      this.get();
    }
  });
  Alpine.data("sweetalert", function () {
    return {
      show: function show(obj) {
        Swal.fire({
          title: obj.title,
          text: obj.text,
          icon: obj.icon,
          confirmButtonText: obj.confirmButtonText
        });
      }
    };
  });
  Alpine.store("permission", {
    permissions: [],
    searchInput: "",
    currentPage: 1,
    errors: null,
    role_name_en: "",
    role_name_ar: "",
    paginate: function paginate() {
      var _this3 = this;
      fetch("http://".concat(location.host, "/api/ajax/permissions/").concat(encodeURIComponent(this.searchInput), "?page=").concat(this.currentPage), {
        headers: {
          "Accept": "application/json"
        }
      }).then(function (r) {
        return r.json();
      }).then(function (_ref2) {
        var permissions = _ref2.permissions;
        _this3.permissions = permissions;
      });
    },
    add: function add() {
      var _this4 = this;
      var formData = new FormData(document.getElementById("role-form"));
      fetch("http://".concat(location.host, "/api/ajax/permissions"), {
        method: "post",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      }).then(function (r) {
        return r.json();
      }).then(function (r) {
        if (r.hasOwnProperty("errors")) {
          _this4.errors = r.message;
        } else if (r.hasOwnProperty("redirect_to")) {
          location = r.redirect_to;
        } else {
          console.log(r);
        }
      });
    },
    update: function update() {
      var form = document.getElementById("role-form");
      fetch(form.getAttribute("action"), {
        method: "put",
        body: new FormData(form),
        headers: {
          "Accept": "application/json"
        }
      }).then(function (r) {
        return r.json();
      }).then(function (r) {
        console.log(r);
      });
    }
  });
  Alpine.data("cod", function () {
    return {
      update: function update(id, status, name) {
        fetch("http://".concat(location.host, "/api/ajax/cod/").concat(status, "/").concat(id)).then(function () {
          return location.reload();
        });
      }
    };
  });
  Alpine.data("status", function () {
    return {
      update: function update(id, status, name) {
        var formData = new FormData();
        formData.append("id", id);
        formData.append("status", status);
        formData.append("_method", "put");
        fetch("http://".concat(location.host, "/api/ajax/update/").concat(name, "/status"), {
          method: "post",
          body: formData,
          headers: {
            "Accept": "application/json"
          }
        }).then(function (r) {
          return location.reload();
        });
      }
    };
  });
  Alpine.data("crud", function () {
    return {
      message: null,
      currentPage: 1,
      errors: null,
      send: function send(id) {
        var _this5 = this;
        this.errors = null;
        var form = document.getElementById(id);
        fetch(form.action, {
          method: form.getAttribute("method"),
          body: new FormData(form),
          headers: {
            "Accept": "application/json"
          }
        }).then(function (r) {
          return r.json();
        }).then(function (r) {
          if (r.hasOwnProperty("errors")) {
            _this5.message = r.message;
            _this5.errors = r.errors;
          } else if (r.hasOwnProperty("redirect_to")) {
            Swal.fire(r.message).then(function () {
              location = r.redirect_to;
            });
          }
        });
      }
    };
  });
});
/******/ })()
;