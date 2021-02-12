const refs = {
  controls: document.querySelector('#tabs-1 [data-controls]'),
  panes: document.querySelector('#tabs-1 [data-panes]'),
};

refs.controls.addEventListener('click', onControlsClick);

function onControlsClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'A') {
    return;
  }

  const currentActiveControlItem = refs.controls.querySelector(
    '.controls__item--active',
  );

  if (currentActiveControlItem) {
    currentActiveControlItem.classList.remove('controls__item--active');

    const paneId = getPaneId(currentActiveControlItem);
    const pane = findPaneByID(paneId);
    pane.classList.remove('pane--active');
  }

  const controlItem = event.target;
  controlItem.classList.add('controls__item--active');

  const paneId = getPaneId(controlItem);
  const pane = findPaneByID(paneId);
  pane.classList.add('pane--active');
}

function getPaneId(control) {
  return control.getAttribute('href').slice(1);
}

function findPaneByID(id) {
  return refs.panes.querySelector(`#${id}`);
}
