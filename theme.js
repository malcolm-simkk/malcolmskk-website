(() => {
  const key = 'malcolm-theme';
  const device = window.matchMedia('(prefers-color-scheme: dark)');
  const valid = value => ['light', 'dark', 'system'].includes(value);
  let preference = 'system';
  try {
    const saved = localStorage.getItem(key);
    if (valid(saved)) preference = saved;
  } catch {}
  function apply() {
    document.documentElement.dataset.theme = preference === 'system'
      ? (device.matches ? 'dark' : 'light') : preference;
    const control = document.getElementById('theme-choice');
    if (control) control.value = preference;
  }
  apply();
  device.addEventListener('change', apply);
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) {
      preference = valid(event.newValue) ? event.newValue : 'system';
      apply();
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const control = document.getElementById('theme-choice');
    apply();
    control.addEventListener('change', () => {
      preference = valid(control.value) ? control.value : 'system';
      try { localStorage.setItem(key, preference); } catch {}
      apply();
    });
  });
})();
