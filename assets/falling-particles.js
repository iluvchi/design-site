(function () {
  var IMAGES = ['assets/falling-particle-transparent.png'];
  var COUNT = 28;
  var MIN_SIZE = 20, MAX_SIZE = 46;
  var MIN_SPEED = 0.2, MAX_SPEED = 0.5;
  var SWAY = 15;

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  var container = document.createElement('div');
  container.id = 'falling-particles';
  container.style.cssText = 'position:fixed;inset:0;overflow:hidden;pointer-events:none;z-index:-1;';
  document.body.appendChild(container);

  function createParticle() {
    var img = document.createElement('img');
    img.src = IMAGES[Math.floor(Math.random() * IMAGES.length)];
    var size = rand(MIN_SIZE, MAX_SIZE);
    var startOp = rand(0.35, 0.9);
    img.style.cssText = 'position:absolute;top:0;left:0;width:' + size + 'px;height:auto;opacity:' + startOp.toFixed(2) + ';';
    container.appendChild(img);
    return {
      el: img,
      size: size,
      x: rand(0, window.innerWidth),
      y: rand(-window.innerHeight, window.innerHeight),
      speed: rand(MIN_SPEED, MAX_SPEED),
      swayAmp: rand(SWAY * 0.5, SWAY),
      swaySpeed: rand(0.0004, 0.001),
      swayOffset: rand(0, Math.PI * 2),
      op: startOp,
      opTarget: rand(0.15, 0.95),
      opRate: rand(0.002, 0.012)
    };
  }

  var particles = [];
  for (var i = 0; i < COUNT; i++) particles.push(createParticle());

  function tick(t) {
    for (var j = 0; j < particles.length; j++) {
      var p = particles[j];
      p.y += p.speed;
      var x = p.x + Math.sin(t * p.swaySpeed + p.swayOffset) * p.swayAmp;
      p.el.style.transform = 'translate(' + x + 'px, ' + p.y + 'px)';
      if (p.op < p.opTarget) {
        p.op = Math.min(p.op + p.opRate, p.opTarget);
      } else {
        p.op = Math.max(p.op - p.opRate, p.opTarget);
      }
      if (Math.abs(p.op - p.opTarget) < 0.001) {
        p.opTarget = rand(0.15, 0.95);
        p.opRate = rand(0.002, 0.012);
      }
      p.el.style.opacity = p.op.toFixed(3);
      if (p.y > window.innerHeight + p.size) {
        p.y = -p.size;
        p.x = rand(0, window.innerWidth);
      }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
