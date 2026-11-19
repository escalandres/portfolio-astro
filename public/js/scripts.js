document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;

  // Theme toggle
  var themeBtn = document.getElementById("th");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var isDark = root.dataset.theme
        ? root.dataset.theme === "dark"
        : matchMedia("(prefers-color-scheme: dark)").matches;
      var next = isDark ? "light" : "dark";
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  }

  // Mobile menu
  var toggle = document.getElementById("nav-menu-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Copy email with toast
  var copy = document.getElementById("cp");
  var toast = document.getElementById("t");
  if (copy && toast) {
    var es = location.pathname.indexOf("/es") === 0;
    toast.textContent = es ? "¡Correo copiado!" : "Email copied!";
    copy.addEventListener("click", function () {
      var mail = "andres.escala.344@gmail.com";
      try {
        navigator.clipboard.writeText(mail);
      } catch (e) {}
      toast.classList.add("on");
      setTimeout(function () {
        toast.classList.remove("on");
      }, 1800);
    });
  }

  // Hero particle canvas — aurora + constelación. Apagado con reduced-motion.
  var canvas = document.querySelector(".d2-page-canvas");
  if (canvas && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var ctx = canvas.getContext("2d");
    var COLORS = ["#38bdf8", "#2563eb", "#7c6fff"];
    var w = 0;
    var h = 0;
    var t = 0;
    var particles = [];

    function resizeCanvas() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seedParticles() {
      particles = [];
      for (var i = 0; i < 36; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 1.5 + Math.random() * 3,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: 0.15 + Math.random() * 0.25
        });
      }
    }

    function drawParticles() {
      t += 1;
      ctx.clearRect(0, 0, w, h);

      var ax = w * 0.3 + Math.sin(t / 200) * 80;
      var ay = h * 0.4 + Math.cos(t / 250) * 60;
      var radius = Math.max(w, h) * 0.7;
      var aurora = ctx.createRadialGradient(ax, ay, 0, ax, ay, radius);
      aurora.addColorStop(0, "rgba(56, 189, 248, 0.18)");
      aurora.addColorStop(0.5, "rgba(37, 99, 235, 0.10)");
      aurora.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = aurora;
      ctx.fillRect(0, 0, w, h);

      particles.forEach(function (p) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      ctx.strokeStyle = "rgba(56, 189, 248, 0.06)";
      ctx.lineWidth = 1;
      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var d = Math.hypot(dx, dy);
          if (d < 140) {
            ctx.globalAlpha = 1 - d / 140;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(drawParticles);
    }

    resizeCanvas();
    seedParticles();
    drawParticles();
    window.addEventListener("resize", function () {
      resizeCanvas();
      particles.forEach(function (p) {
        p.x = Math.min(p.x, w);
        p.y = Math.min(p.y, h);
      });
    });
  }

  // Reveal on scroll
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("on");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".rv").forEach(function (el) {
    io.observe(el);
  });
});
