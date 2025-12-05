System.register(["react"], function (_export, _context) {
  "use strict";

  var createElement, MyPage_default;
  return {
    setters: [function (_react) {
      createElement = _react.createElement;
    }],
    execute: function () {
      _export("default", MyPage_default = function MyPage_default(_ref) {
        var piral = _ref.piral;
        return createElement("div", null, createElement("h1", null, "Title"), createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id cum, laborum, suscipit aliquid qui nemo consequatur perferendis, explicabo possimus aliquam magnam sunt magni? Quo doloremque ullam autem perspiciatis sequi?"), createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aperiam omnis labore beatae consequatur mollitia, sunt unde soluta veritatis aut corporis? Facilis, harum corrupti. Vero laudantium nam unde deserunt quibusdam!"), createElement("p", null, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit nostrum eum deleniti quos accusantium et cumque sit perferendis eligendi facilis velit corrupti totam tenetur ratione, beatae similique eos laudantium soluta."), createElement("div", {
          className: "boxed"
        }, createElement("p", null, "The little counter below is a component exposed by ", createElement("i", null, "some"), " micro frontend. In this example (just one micro frontend) it actually comes from the same micro frontend, but that does not need to be the case. Also, try changing the name - the page will not stop working. This kind of loose coupling is what makes Piral instances ", createElement("i", null, "scale really well"), "."), createElement(piral.Extension, {
          name: "my-extension"
        })), createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi libero quam perferendis consequatur? Inventore porro iure repudiandae veniam quas, incidunt sunt vel eaque delectus ab laudantium, deserunt sit doloribus!"), createElement("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores eligendi praesentium beatae quas nihil nobis accusamus rerum voluptates deserunt. Necessitatibus nam similique harum beatae nostrum eligendi id quaerat blanditiis quidem."), createElement("p", null, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex minus est ullam nulla alias ea praesentium vel qui, dolorum omnis in soluta debitis! Accusantium quaerat ea blanditiis porro cumque eos."));
      });
    }
  };
});