function flipPane(setting) {
  const state = localStorage.getItem('flip-state');
  let flipState = state ? Number(state) : 0;
  const button = document.createElement('button');
  button.textContent = 'Flip Pane';
  const div = document.createElement('div');
  div.insertAdjacentElement('afterbegin', button);
  div.style.marginLeft = 'auto';
  setting.insertAdjacentElement('beforebegin', div);
  setting.style.marginLeft = '16px';
  const flip = (state) => {
    const e = document.querySelector('.editor-preview-container>.SplitPane>.Pane>.SplitPane');
    e.style.flexDirection = (state === 1) ? 'row-reverse' : 'row';
    localStorage.setItem('flip-state', flipState.toString());
  };
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
      flipPane(setting);
    } else {
      setTimeout(loop, 1000)
    }
  }
  loop();
});