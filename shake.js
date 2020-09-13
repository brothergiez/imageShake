window.addEventListener('DOMContentLoaded', loadShakeJs);

function loadShakeJs() {
  const element = document.querySelector('.shake');
  const elementId = element.id;
  element.setAttribute('onclick', `shake(${elementId})`);
  element.setAttribute('style', 'width: 200px; position: relative;');

  const divWrapperAttr = {
    class: 'wrapper-area',
    id: elementId,
    style: 'position: absolute;'
  };
  const divWrapper = createWrapper('div', divWrapperAttr, element);

  const wrapperAttr = {
    class: 'wrapper',
    style: 'float: left; margin: 5px; position: relative;'
  };
  const wrapper = createWrapper('div', wrapperAttr, divWrapper)

  element.parentNode.insertBefore(wrapper, element);
  element.remove();
}

function createWrapper(tag, attr, target) {
  let wrapper = document.createElement(tag);
  wrapper.innerHTML = target.outerHTML;
  for (var prop in attr) {
    wrapper.setAttribute(prop, `${attr[prop]}Wrapper`);
  }
  return wrapper;
}

function shake(elem) {
  let move = 'forward';
  let pos = 0;
  let maxPos = 3;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos == maxPos && move == 'forward') {
      move = 'backward'
    } else if(pos < maxPos && move == 'forward') {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    } else if(pos <= maxPos && pos > 0 && move == 'backward') {
      pos--; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    } else if(pos == 0 && move=='backward') {
      clearInterval(id);
    }
  }
}
