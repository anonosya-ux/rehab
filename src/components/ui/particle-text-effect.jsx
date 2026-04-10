import { useEffect, useRef } from "react";

class Particle {
  constructor() {
    this.pos = { x: 0, y: 0 };
    this.vel = { x: 0, y: 0 };
    this.acc = { x: 0, y: 0 };
    this.target = { x: 0, y: 0 };

    this.closeEnoughTarget = 100;
    this.maxSpeed = 1.0;
    this.maxForce = 0.1;
    this.particleSize = 10;
    this.isKilled = false;

    this.startColor = { r: 0, g: 0, b: 0 };
    this.targetColor = { r: 0, g: 0, b: 0 };
    this.colorWeight = 0;
    this.colorBlendRate = 0.01;
  }

  move() {
    let proximityMult = 1;
    const distance = Math.sqrt(
      Math.pow(this.pos.x - this.target.x, 2) + Math.pow(this.pos.y - this.target.y, 2)
    );

    if (distance < this.closeEnoughTarget) {
      proximityMult = distance / this.closeEnoughTarget;
    }

    const towardsTarget = {
      x: this.target.x - this.pos.x,
      y: this.target.y - this.pos.y,
    };

    const magnitude = Math.sqrt(
      towardsTarget.x * towardsTarget.x + towardsTarget.y * towardsTarget.y
    );
    if (magnitude > 0) {
      towardsTarget.x = (towardsTarget.x / magnitude) * this.maxSpeed * proximityMult;
      towardsTarget.y = (towardsTarget.y / magnitude) * this.maxSpeed * proximityMult;
    }

    const steer = {
      x: towardsTarget.x - this.vel.x,
      y: towardsTarget.y - this.vel.y,
    };

    const steerMagnitude = Math.sqrt(steer.x * steer.x + steer.y * steer.y);
    if (steerMagnitude > 0) {
      steer.x = (steer.x / steerMagnitude) * this.maxForce;
      steer.y = (steer.y / steerMagnitude) * this.maxForce;
    }

    this.acc.x += steer.x;
    this.acc.y += steer.y;

    this.vel.x += this.acc.x;
    this.vel.y += this.acc.y;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.acc.x = 0;
    this.acc.y = 0;
  }

  draw(ctx, drawAsPoints) {
    if (this.colorWeight < 1.0) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0);
    }

    const currentColor = {
      r: Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight),
      g: Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight),
      b: Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight),
    };

    if (drawAsPoints) {
      ctx.fillStyle = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`;
      ctx.fillRect(this.pos.x, this.pos.y, 2, 2);
    } else {
      ctx.fillStyle = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.particleSize / 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  kill(width, height) {
    if (!this.isKilled) {
      const randomPos = this.generateRandomPos(width / 2, height / 2, (width + height) / 2);
      this.target.x = randomPos.x;
      this.target.y = randomPos.y;

      this.startColor = {
        r: this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight,
        g: this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight,
        b: this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight,
      };
      this.targetColor = { r: 30, g: 58, b: 138 };
      this.colorWeight = 0;

      this.isKilled = true;
    }
  }

  generateRandomPos(x, y, mag) {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    const direction = {
      x: randomX - x,
      y: randomY - y,
    };

    const magnitude = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
    if (magnitude > 0) {
      direction.x = (direction.x / magnitude) * mag;
      direction.y = (direction.y / magnitude) * mag;
    }

    return {
      x: x + direction.x,
      y: y + direction.y,
    };
  }
}

const DEFAULT_WORDS = ["LOGO", "АНОНИМНО", "БЕЗОПАСНО", "ЦЕЛЬ", "РЕАБИЛИТАЦИЯ"];

export function ParticleTextEffect({ words = DEFAULT_WORDS }) {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const particlesRef = useRef([]);
  const frameCountRef = useRef(0);
  const wordIndexRef = useRef(0);

  const pixelSteps = 6;
  const drawAsPoints = false;

  const generateRandomPos = (x, y, mag) => {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    const direction = { x: randomX - x, y: randomY - y };
    const magnitude = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
    
    if (magnitude > 0) {
      direction.x = (direction.x / magnitude) * mag;
      direction.y = (direction.y / magnitude) * mag;
    }
    return { x: x + direction.x, y: y + direction.y };
  };

  const processImageData = (offscreenCtx, canvas) => {
    const imageData = offscreenCtx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    // Dark Theme Compatible Colors for Medical
    const themeColors = [
      { r: 255, g: 255, b: 255 },  // White
      { r: 147, g: 197, b: 253 },  // Light blue (primary-300)
      { r: 239, g: 68, b: 68 }     // Accent Red
    ];
    const newColor = themeColors[Math.floor(Math.random() * themeColors.length)];

    const particles = particlesRef.current;
    let particleIndex = 0;

    const coordsIndexes = [];
    for (let y = 0; y < canvas.height; y += pixelSteps) {
      for (let x = 0; x < canvas.width; x += pixelSteps) {
        const i = (y * canvas.width + x) * 4;
        const alpha = pixels[i + 3];
        if (alpha > 10) {
            coordsIndexes.push(i);
        }
      }
    }

    for (let i = coordsIndexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [coordsIndexes[i], coordsIndexes[j]] = [coordsIndexes[j], coordsIndexes[i]];
    }

    // Limit particles so it doesn't drop frames
    const maxParticles = Math.min(coordsIndexes.length, 4500);

    for (let i = 0; i < maxParticles; i++) {
        const coordIndex = coordsIndexes[i];
        const x = (coordIndex / 4) % canvas.width;
        const y = Math.floor(coordIndex / 4 / canvas.width);

        let particle;
        if (particleIndex < particles.length) {
          particle = particles[particleIndex];
          particle.isKilled = false;
          particleIndex++;
        } else {
          particle = new Particle();
          const randomPos = generateRandomPos(canvas.width / 2, canvas.height / 2, (canvas.width + canvas.height) / 2);
          particle.pos.x = randomPos.x;
          particle.pos.y = randomPos.y;

          particle.maxSpeed = Math.random() * 25 + 20;
          particle.maxForce = particle.maxSpeed * 0.1;
          particle.particleSize = Math.random() * 2.5 + 1.5;
          particle.colorBlendRate = Math.random() * 0.05 + 0.01;

          particles.push(particle);
        }

        particle.startColor = {
          r: particle.startColor.r + (particle.targetColor.r - particle.startColor.r) * particle.colorWeight,
          g: particle.startColor.g + (particle.targetColor.g - particle.startColor.g) * particle.colorWeight,
          b: particle.startColor.b + (particle.targetColor.b - particle.startColor.b) * particle.colorWeight,
        };
        particle.targetColor = newColor;
        // Make particles a bit larger when forming the logo
        if (words[wordIndexRef.current] === "LOGO") {
          particle.particleSize = Math.random() * 3 + 2;
        }

        particle.colorWeight = 0;
        particle.target.x = x;
        particle.target.y = y;
    }

    for (let i = particleIndex; i < particles.length; i++) {
      particles[i].kill(canvas.width, canvas.height);
    }
  };

  const nextWord = (word, canvas) => {
    const offscreenCanvas = document.createElement("canvas");
    offscreenCanvas.width = canvas.width;
    offscreenCanvas.height = canvas.height;
    const offscreenCtx = offscreenCanvas.getContext("2d");

    const isDesktop = window.innerWidth > 1024;
    const centerX = isDesktop ? offscreenCanvas.width * 0.75 : offscreenCanvas.width / 2;
    const centerY = offscreenCanvas.height / 2;

    if (word === "LOGO") {
       offscreenCtx.lineWidth = 15 * window.devicePixelRatio;
       offscreenCtx.strokeStyle = "white";
       
       offscreenCtx.beginPath();
       offscreenCtx.arc(centerX, centerY, 80 * window.devicePixelRatio, 0, Math.PI * 2);
       offscreenCtx.stroke();
       
       offscreenCtx.beginPath();
       offscreenCtx.arc(centerX, centerY, 30 * window.devicePixelRatio, 0, Math.PI * 2);
       offscreenCtx.stroke();
       
       offscreenCtx.beginPath();
       offscreenCtx.arc(centerX, centerY, 8 * window.devicePixelRatio, 0, Math.PI * 2);
       offscreenCtx.fillStyle = "white";
       offscreenCtx.fill();
       
       processImageData(offscreenCtx, canvas);
    } else {
       offscreenCtx.fillStyle = "white";
       const fontSize = Math.min(100 * window.devicePixelRatio, canvas.width / 12);
       offscreenCtx.font = `900 ${fontSize}px "Inter", "Arial", sans-serif`;
       offscreenCtx.textAlign = "center";
       offscreenCtx.textBaseline = "middle";
       offscreenCtx.fillText(word, centerX, centerY);
       processImageData(offscreenCtx, canvas);
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const particles = particlesRef.current;

    ctx.fillStyle = "rgba(30, 58, 138, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      particle.move();
      particle.draw(ctx, drawAsPoints);

      if (particle.isKilled) {
        if (
          particle.pos.x < -100 ||
          particle.pos.x > canvas.width + 100 ||
          particle.pos.y < -100 ||
          particle.pos.y > canvas.height + 100
        ) {
          particles.splice(i, 1);
        }
      }
    }

    frameCountRef.current++;
    if (frameCountRef.current % 240 === 0) { // Change word slightly slower to appreciate the logo
      wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
      nextWord(words[wordIndexRef.current], canvas);
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        
        const ctx = canvas.getContext("2d");
        ctx.scale(dpr, dpr);
        
        nextWord(words[wordIndexRef.current], canvas);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-primary-900 pointer-events-none">
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%' }}
        className="opacity-70 mix-blend-screen"
      />
    </div>
  );
}
