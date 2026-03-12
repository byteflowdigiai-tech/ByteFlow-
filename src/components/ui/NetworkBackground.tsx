import { useEffect, useRef } from 'react';

interface NetworkBackgroundProps {
  className?: string;
  theme?: 'blue' | 'green' | 'mixed';
}

export default function NetworkBackground({ className = '', theme = 'mixed' }: NetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        let colorType = theme;
        if (theme === 'mixed') {
          colorType = (this.x + this.y) % 2 > 1 ? 'blue' : 'green';
        }
        
        if (colorType === 'blue') {
          ctx.fillStyle = 'rgba(0, 195, 255, 0.7)';
        } else {
          ctx.fillStyle = 'rgba(16, 185, 129, 0.7)';
        }
        
        ctx.fill();
        
        // draw inner circle like in the image
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius + 3, 0, Math.PI * 2);
        ctx.strokeStyle = colorType === 'blue' ? 'rgba(0, 195, 255, 0.3)' : 'rgba(16, 185, 129, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = 40;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            const opacity = 1 - distance / 120;
            let colorType = theme;
            if (theme === 'mixed') {
              colorType = i % 2 === 0 ? 'blue' : 'green';
            }

            if (colorType === 'blue') {
              ctx.strokeStyle = `rgba(0, 195, 255, ${opacity * 0.5})`;
            } else {
              ctx.strokeStyle = `rgba(16, 185, 129, ${opacity * 0.5})`;
            }
            
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(Particle => {
        Particle.update();
        Particle.draw();
      });
      
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  // Use opacity for visual fading in
  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 pointer-events-none ${className}`} 
      style={{ opacity: 0.6 }}
    />
  );
}
