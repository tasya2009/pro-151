AFRAME.registerComponent("base", {
  schema: {
    radius: {type: "number", default: 150},
    height: {type: "number", default: 130},
  },

 init: function () {
  this.el.setAttribute("geomerty", {
    primitive: "cyclinder",
    radius: "this.data.radius",
    height: "this.data.height"
  });
  this.el.setAttribute("material", {color: '#1769aa'});
 }

  });
  