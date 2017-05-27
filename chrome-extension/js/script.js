document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#js-repo-pjax-container > .container');
  const baseWidth = container.clientWidth;
  let positionCount = 0;

  const buttonContainer = document.createElement('div');
  const narrowButton = document.createElement('button');
  const broadButton = document.createElement('button');
  const backButton = document.createElement('button');

  buttonContainer.style.position = 'fixed';
  buttonContainer.style.bottom = '0';
  buttonContainer.style.right = '0';
  buttonContainer.style.padding = '10px';

  broadButton.classList.add('btn');
  broadButton.classList.add('btn-sm');
  broadButton.classList.add('BtnGroup-item');
  broadButton.textContent = '< >';
  broadButton.style.fontSize = '12px';

  backButton.classList.add('btn');
  backButton.classList.add('btn-sm');
  backButton.classList.add('BtnGroup-item');
  backButton.textContent = 'Reset';
  backButton.style.fontSize = '12px';

  narrowButton.classList.add('btn');
  narrowButton.classList.add('btn-sm');
  narrowButton.classList.add('BtnGroup-item');
  narrowButton.textContent = '><';
  narrowButton.style.fontSize = '12px';

  buttonContainer.appendChild(broadButton);
  buttonContainer.appendChild(backButton);
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

  backButton.addEventListener('click', () => {
    positionCount = 0;
    adjust();
  });
});