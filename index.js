let isSelectorOpen = false;
let isIncludingCommands = false;
let currentGraphType = 'User Monthly Messages'

document.getElementById('js-graph-selector-toggle').addEventListener('click', () => {
  toggleSelectorButtons();
})

document.querySelectorAll('.js-graph-selector-button').forEach(button => {
  button.addEventListener('click', () => {
    toggleSelectorButtons();
    displayGraph(button.dataset.graphId);
  })
})

document.getElementById('js-command-button').addEventListener('click', button => {
  document.getElementById('js-command-button').classList.toggle('activated');
  isIncludingCommands = !isIncludingCommands;
  displayGraph(currentGraphType);
})

function displayGraph(type) {
  document.querySelectorAll('.js-graph-display').forEach(graphDisplay => {
    graphDisplay.style.display = 'none';
  })

  currentGraphType = type
  let finalType = isIncludingCommands ? 'Bot ' + type : type;
  document.getElementById(finalType).style.display = 'initial';
}

function toggleSelectorButtons() {
  if (isSelectorOpen) {
    document.getElementById('js-graph-selector-container').style.display = 'none';
    isSelectorOpen = false;
  }
  else {
    document.getElementById('js-graph-selector-container').style.display = 'flex';
    isSelectorOpen = true;
  }
}