document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#js-repo-pjax-container > .container');
  const baseWidth = container.clientWidth;
  let positionCount = 0;

  const buttonContainer = document.createElement('div');
  const narrowButton = document.createElement('button');
  const broadButton = document.createElement('button');

  buttonContainer.style.position = 'fixed';
  buttonContainer.style.bottom = '0';
  buttonContainer.style.right = '0';
  buttonContainer.style.padding = '5px';

  broadButton.classList.add('btn');
  broadButton.classList.add('btn-sm');
  broadButton.textContent = '< >';
  broadButton.style.fontSize = '16px';

  narrowButton.classList.add('btn');
  narrowButton.classList.add('btn-sm');
  narrowButton.textContent = '><';
  narrowButton.style.fontSize = '16px';

  buttonContainer.appendChild(broadButton);
  buttonContainer.appendChild(narrowButton);

  container.appendChild(buttonContainer);

  const adjust = () => {
    const width = (baseWidth + 100 * positionCount) + 'px';
    if (width < 100) { return; }
    container.style.width = width;
  };

  broadButton.addEventListener('click', () => {
    positionCount++;
    adjust();
  });

  narrowButton.addEventListener('click', () => {
    positionCount--;
    adjust();
  });
});