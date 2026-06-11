const AnimationPresets = (() => {
  const PRESETS = {
    'Bounce': `@keyframes bounce {
  0%, 100% { transform: translateY(0); animation-timing-function: cubic-bezier(.8,0,1,1); }
  50% { transform: translateY(-30px); animation-timing-function: cubic-bezier(0,0,.2,1); }
}`,
    'Spin': `@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`,
    'Pulse': `@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.15); opacity: 0.7; }
}`,
    'Shake': `@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 50%, 90% { transform: translateX(-8px); }
  30%, 70% { transform: translateX(8px); }
}`,
    'Fade In': `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
    'Slide In Left': `@keyframes slideInLeft {
  from { transform: translateX(-60px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`,
    'Flip': `@keyframes flip {
  0% { transform: perspective(400px) rotateY(0); }
  100% { transform: perspective(400px) rotateY(360deg); }
}`,
    'Rubber Band': `@keyframes rubberBand {
  0% { transform: scaleX(1); }
  30% { transform: scaleX(1.25) scaleY(0.75); }
  40% { transform: scaleX(0.75) scaleY(1.25); }
  60% { transform: scaleX(1.15) scaleY(0.85); }
  80% { transform: scaleX(0.95) scaleY(1.05); }
  100% { transform: scaleX(1); }
}`,
    'Tada': `@keyframes tada {
  0% { transform: scale(1); }
  10% { transform: scale(0.9) rotate(-3deg); }
  30% { transform: scale(1.1) rotate(3deg); }
  50% { transform: scale(1.1) rotate(-3deg); }
  70% { transform: scale(1.1) rotate(3deg); }
  100% { transform: scale(1) rotate(0); }
}`,
    'Heartbeat': `@keyframes heartbeat {
  0% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
}`,
  };
  function getAll() { return PRESETS; }
  function getNames() { return Object.keys(PRESETS); }
  function get(name) { return PRESETS[name] || ''; }
  return { getAll, getNames, get };
})();
