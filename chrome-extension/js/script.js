document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');

  const buttonContainer = document.createElement('div');
  const narrowButton = document.createElement('button');
  const broadButton = document.createElement('button');
  const wButton = document.createElement('button');

  buttonContainer.style.position = 'fixed';
  buttonContainer.style.bottom = '0';
  buttonContainer.style.right = '0';
  buttonContainer.style.padding = '10px';

  broadButton.classList.add('btn');
  broadButton.classList.add('btn-sm');
  broadButton.classList.add('BtnGroup-item');
  broadButton.textContent = '< >';
  broadButton.style.fontSize = '12px';

  narrowButton.classList.add('btn');
  narrowButton.classList.add('btn-sm');
  narrowButton.classList.add('BtnGroup-item');
  narrowButton.textContent = '><';
  narrowButton.style.fontSize = '12px';

  wButton.classList.add('btn');
  wButton.classList.add('btn-sm');
  wButton.classList.add('BtnGroup-item');
  wButton.textContent = '?w=';
  wButton.style.fontSize = '12px';

  buttonContainer.appendChild(broadButton);
  buttonContainer.appendChild(narrowButton);
  buttonContainer.appendChild(wButton);

  body.appendChild(buttonContainer);

  const adjust = (extend) => {
    const container = document.querySelector('#js-repo-pjax-container > .container');
    if (!container) { return; }

    const baseWidth = container.clientWidth;
    const nextWidth = baseWidth + 100 * (extend ? 1 : -1);
    if (nextWidth < 100) { return; }
    container.style.width = nextWidth + 'px';
  };

  broadButton.addEventListener('click', () => adjust(true));
  narrowButton.addEventListener('click', () => adjust(false));

  const toggleIgnoreSpace = () => {
              const mark = 'w=';
              const queries = location.search.replace(/^\?/, '').split('&');

              if (queries.includes(mark)) {
                const q = queries.filter(a => a !== mark);
                location.search = q.join('&');
              } else {
                location.search ? location.search += `&${mark}` : location.search = `?${mark}`;
              }
  };

  wButton.addEventListener('click', () => toggleIgnoreSpace());
});