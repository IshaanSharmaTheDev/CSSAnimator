(function(){
  'use strict';
  let styleEl = document.createElement('style');
  document.head.appendChild(styleEl);

  function getKeyframeName(css) {
    const m = css.match(/@keyframes\s+([\w-]+)/);
    return m ? m[1] : 'custom';
  }

  function applyAnimation() {
    const css = document.getElementById('css-editor').value;
    const name = getKeyframeName(css);
    const dur = document.getElementById('dur-input').value || '1';
    const timing = document.getElementById('timing-select').value;
    const iter = document.getElementById('iter-input').value || 'infinite';
    const delay = document.getElementById('delay-input').value || '0';
    const fill = document.getElementById('fill-select').value;
    const dir = document.getElementById('dir-select').value;

    styleEl.textContent = css;
    const box = document.getElementById('preview-box');
    box.style.animation = 'none';
    void box.offsetWidth;
    box.style.animation = `${name} ${dur}s ${timing} ${delay}s ${iter} ${dir} ${fill}`;
    document.getElementById('generated-css').textContent =
      `.animated {\n  animation: ${name} ${dur}s ${timing} ${delay}s ${iter} ${dir} ${fill};\n}\n\n${css}`;
  }

  function loadPreset(name) {
    document.getElementById('css-editor').value = AnimationPresets.get(name);
    applyAnimation();
  }

  function buildPresetList() {
    const list = document.getElementById('preset-list');
    AnimationPresets.getNames().forEach(name => {
      const btn = document.createElement('button');
      btn.className = 'preset-btn';
      btn.textContent = name;
      btn.addEventListener('click', () => { loadPreset(name); document.querySelectorAll('.preset-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); });
      list.appendChild(btn);
    });
  }

  function init() {
    document.getElementById('btn-apply').addEventListener('click', applyAnimation);
    document.getElementById('btn-stop').addEventListener('click', () => { document.getElementById('preview-box').style.animation = 'none'; });
    document.getElementById('btn-copy-css').addEventListener('click', () => navigator.clipboard.writeText(document.getElementById('generated-css').textContent));
    document.getElementById('preview-content').addEventListener('input', function() { document.getElementById('preview-box').textContent = this.value || ''; });
    document.getElementById('box-bg').addEventListener('input', function() { document.getElementById('preview-box').style.background = this.value; });
    document.getElementById('box-color').addEventListener('input', function() { document.getElementById('preview-box').style.color = this.value; });
    buildPresetList();
    loadPreset('Bounce');
  }
  document.addEventListener('DOMContentLoaded', init);
})();
