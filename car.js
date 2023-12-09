AFRAME.registerComponent('car', {
    init: function () {
     // Add a car to the scene
      this.el.setAttribute('position', '0 1 -5');
      this.el.setAttribute('rotation', '0 0 0');
  
      
      const carModel = document.createElement('a-box');
      carModel.setAttribute('width', '2');
      carModel.setAttribute('height', '1');
      carModel.setAttribute('depth', '1');
      carModel.setAttribute('color', 'blue');
      this.el.appendChild(carModel);
  
      
      this.el.setAttribute('base', '');
  
      this.el.addEventListener('click', this.changeCarView.bind(this));
    },
  
    changeCarView: function () {
      
      const currentRotation = this.el.getAttribute('rotation');
      const newRotation = {
        x: currentRotation.x,
        y: currentRotation.y + 90, 
        z: currentRotation.z,
      };
      this.el.setAttribute('rotation', newRotation);
    }
  });
  