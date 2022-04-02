const flip = (state) => {
  let style = document.querySelector('[data-p5js-editor-flipper="styles"]');
  if (!style) {
    style = document.createElement('style');
    style.setAttribute('data-p5js-editor-flipper', 'styles');
    document.querySelector('head').insertAdjacentElement('beforeend', style);
  }
  style.textContent = `.editor-preview-container .SplitPane.vertical .SplitPane.vertical {
    flex-direction: ${ (state === 1) ? 'row-reverse' : 'row' } !important;
  }`;
};

function init(setting) {
  const state = localStorage.getItem('flip-state');
  let flipState = state ? Number(state) : 0;
  const button = document.createElement('button');
  button.textContent = 'Flip Pane';
  const div = document.createElement('div');
  div.insertAdjacentElement('afterbegin', button);
  div.style.marginLeft = 'auto';
  setting.insertAdjacentElement('beforebegin', div);
  setting.style.marginLeft = '16px';
  flip(flipState);
  button.addEventListener('click', () => {
    flipState = (flipState === 0) ? 1 : 0;
    flip(flipState);
  })
}

window.addEventListener('load', () => {
  const loop = () => {
    let setting = document.querySelector('.toolbar__preferences-button')
    if (setting) {
      init(setting);
    } else {
      setTimeout(loop, 1000)
    }
  }
  loop();
});