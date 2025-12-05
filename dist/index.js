//@pilet v:2(esbuildpr_myfirstpilet,{})
System.register(["react", "react-router-dom"], function (_export, _context) {
  "use strict";

  var createElement, lazy, Link, MyExtension, MyPage;

  function setup(api) {
    console.log("In the setup", api);
    api.registerTile(function () {
      return /* @__PURE__ */createElement("div", null, "Hello from Piral!");
    }, {
      initialColumns: 2,
      initialRows: 2
    });
    api.registerMenu(function () {
      return /* @__PURE__ */createElement(Link, {
        to: "/page"
      }, "My Page");
    });
    api.registerExtension("my-extension", MyExtension);
    api.registerPage("/page", MyPage);
  }

  _export("setup", setup);

  return {
    setters: [function (_react) {
      createElement = _react.createElement;
      lazy = _react.lazy;
    }, function (_reactRouterDom) {
      Link = _reactRouterDom.Link;
    }],
    execute: function () {
      // src/index.tsx
      MyExtension = lazy(function () {
        return _context["import"]("./MyExtension-FMPRVM75.js");
      });
      MyPage = lazy(function () {
        return _context["import"]("./MyPage-RTD5FUKA.js");
      });

      (function () {
        var d = document;

        var __bundleUrl__ = function () {
          try {
            throw new Error();
          } catch (t) {
            var e = ("" + t.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
            if (e) return e[0].replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/, "$1") + "/";
          }

          return "/";
        }();

        ["index.css"].forEach(function (cf) {
          ;
          var u = __bundleUrl__ + cf;
          var e = d.createElement("link");
          e.setAttribute('data-origin', "my-first-pilet");
          e.type = "text/css";
          e.rel = "stylesheet";
          e.href = u + "?_=" + Math.random();
          d.head.appendChild(e);
        });
      })();
    }
  };
});