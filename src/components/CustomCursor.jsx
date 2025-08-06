import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [bubbles, setBubbles] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [cleanTrail, setCleanTrail] = useState([]);
  const bubbleId = useRef(0);
  const sparkleId = useRef(0);
  const trailId = useRef(0);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      
      // Create soap bubbles on movement
      if (Math.random() > 0.8) {
        createBubble(e.clientX, e.clientY);
      }
      
      // Create cleaning trail
      if (Math.random() > 0.7) {
        createCleanTrail(e.clientX, e.clientY);
      }
    };

    const click = (e) => {
      // Big sanitizing effect on click
      createSanitizeEffect(e.clientX, e.clientY);
      createSparkles(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", click);
    
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
    };
  }, []);

  const createBubble = (x, y) => {
    const newBubbles = [];
    const bubbleCount = Math.floor(Math.random() * 2) + 1;
    
    for (let i = 0; i < bubbleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 30 + 10;
      const size = Math.random() * 1 + 3;
      
      newBubbles.push({
        id: bubbleId.current++,
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: Math.cos(angle) * velocity * 0.3,
        vy: Math.sin(angle) * velocity * 0.3 - 20,
        size,
        life: 1,
        rotation: Math.random() * 360
      });
    }
    
    setBubbles(prev => [...prev, ...newBubbles]);
    
    setTimeout(() => {
      setBubbles(prev => prev.filter(bubble => 
        !newBubbles.some(newBubble => newBubble.id === bubble.id)
      ));
    }, 2000);
  };

  const createSanitizeEffect = (x, y) => {
    const newBubbles = [];
    const bubbleCount = Math.floor(Math.random() * 6) + 8;
    
    for (let i = 0; i < bubbleCount; i++) {
      const angle = (Math.PI * 2 * i) / bubbleCount + Math.random() * 0.5;
      const velocity = Math.random() * 60 + 30;
      const size = Math.random() * 12 + 6;
      
      newBubbles.push({
        id: bubbleId.current++,
        x,
        y,
        vx: Math.cos(angle) * velocity * 0.4,
        vy: Math.sin(angle) * velocity * 0.4 - 30,
        size,
        life: 1,
        rotation: Math.random() * 360
      });
    }
    
    setBubbles(prev => [...prev, ...newBubbles]);
    
    setTimeout(() => {
      setBubbles(prev => prev.filter(bubble => 
        !newBubbles.some(newBubble => newBubble.id === bubble.id)
      ));
    }, 2500);
  };

  const createSparkles = (x, y) => {
    const newSparkles = [];
    const sparkleCount = Math.floor(Math.random() * 8) + 6;
    
    for (let i = 0; i < sparkleCount; i++) {
      const angle = (Math.PI * 2 * i) / sparkleCount + Math.random() * 0.3;
      const distance = Math.random() * 50 + 20;
      
      newSparkles.push({
        id: sparkleId.current++,
        x: x + Math.cos(angle) * distance,
        y: y + Math.sin(angle) * distance,
        size: Math.random() * 4 + 2,
        life: 1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10
      });
    }
    
    setSparkles(prev => [...prev, ...newSparkles]);
    
    setTimeout(() => {
      setSparkles(prev => prev.filter(sparkle => 
        !newSparkles.some(newSparkle => newSparkle.id === sparkle.id)
      ));
    }, 1200);
  };

  const createCleanTrail = (x, y) => {
    const newTrail = {
      id: trailId.current++,
      x: x + (Math.random() - 0.5) * 30,
      y: y + (Math.random() - 0.5) * 30,
      size: Math.random() * 6 + 3,
      life: 1
    };
    
    setCleanTrail(prev => [...prev, newTrail]);
    
    setTimeout(() => {
      setCleanTrail(prev => prev.filter(trail => trail.id !== newTrail.id));
    }, 800);
  };

  useEffect(() => {
    const elems = document.querySelectorAll("a, button, .cursor-hover");
    elems.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovering(true));
      el.addEventListener("mouseleave", () => setHovering(false));
    });
    return () => {
      elems.forEach((el) => {
        el.removeEventListener("mouseenter", () => setHovering(true));
        el.removeEventListener("mouseleave", () => setHovering(false));
      });
    };
  }, []);

  // Animate all effects
  useEffect(() => {
    const animate = () => {
      setBubbles(prev => prev.map(bubble => ({
        ...bubble,
        x: bubble.x + bubble.vx * 0.016,
        y: bubble.y + bubble.vy * 0.016,
        vy: bubble.vy - 0.5, // Bubbles float up
        life: bubble.life - 0.008,
        rotation: bubble.rotation + 2,
        size: bubble.size * (bubble.life > 0.7 ? 1 : bubble.life / 0.7)
      })).filter(bubble => bubble.life > 0));
      
      setSparkles(prev => prev.map(sparkle => ({
        ...sparkle,
        life: sparkle.life - 0.015,
        rotation: sparkle.rotation + sparkle.rotationSpeed,
        size: sparkle.size * (sparkle.life > 0.5 ? 1 : sparkle.life * 2)
      })).filter(sparkle => sparkle.life > 0));
      
      setCleanTrail(prev => prev.map(trail => ({
        ...trail,
        life: trail.life - 0.02,
        size: trail.size * (trail.life > 0.5 ? 1 : trail.life * 2)
      })).filter(trail => trail.life > 0));
      
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <>
      {/* Main soap cursor */}
      <div
  className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-all duration-200 ease-out
  ${hovering ? "scale-125" : "scale-100"}`}
  style={{
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "radial-gradient(circle at 25% 25%, #cce7f9, #4fc3f7, #039be5, #0288d1)", // 🔁 REPLACE THIS LINE
    transform: `translate3d(${pos.x - 14}px, ${pos.y - 14}px, 0)`,
    boxShadow: `
  0 0 15px rgba(2, 136, 209, 0.5),
  inset 3px 3px 6px rgba(255, 255, 255, 0.7),
  inset -2px -2px 4px rgba(2, 136, 209, 0.3)
`,
    border: "2px solid rgba(255, 255, 255, 0.6)"
  }}
/>


      {/* Sanitizer drop */}
      <div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: "6px",
          height: "10px",
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          background: "linear-gradient(145deg, #e1f5fe, #4fc3f7)",
          transform: `translate3d(${pos.x - 3}px, ${pos.y + 20}px, 0)`,
          opacity: 0.8,
          boxShadow: "0 2px 4px rgba(79, 195, 247, 0.3)"
        }}
      />

      {/* Soap bubbles */}
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="fixed top-0 left-0 z-[9997] pointer-events-none"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            borderRadius: "50%",
            background: `radial-gradient(circle at 30% 30%, 
              rgba(255, 255, 255, ${bubble.life * 0.9}), 
              rgba(225, 245, 254, ${bubble.life * 0.7}),
              rgba(129, 212, 250, ${bubble.life * 0.3}))`,
            transform: `translate3d(${bubble.x - bubble.size/2}px, ${bubble.y - bubble.size/2}px, 0) rotate(${bubble.rotation}deg)`,
            border: `1px solid rgba(255, 255, 255, ${bubble.life * 0.6})`,
            boxShadow: `
              0 0 ${bubble.size/2}px rgba(129, 212, 250, ${bubble.life * 0.2}),
              inset 1px 1px 2px rgba(255, 255, 255, ${bubble.life * 0.8})
            `,
            opacity: bubble.life
          }}
        />
      ))}

      {/* Clean sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="fixed top-0 left-0 z-[9996] pointer-events-none"
          style={{
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            transform: `translate3d(${sparkle.x - sparkle.size/2}px, ${sparkle.y - sparkle.size/2}px, 0) rotate(${sparkle.rotation}deg)`,
            opacity: sparkle.life
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(45deg, 
                rgba(255, 255, 255, ${sparkle.life}), 
                rgba(79, 195, 247, ${sparkle.life * 0.8}))`,
              clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              filter: `drop-shadow(0 0 ${sparkle.size}px rgba(79, 195, 247, ${sparkle.life * 0.6}))`
            }}
          />
        </div>
      ))}

      {/* Clean trail dots */}
      {cleanTrail.map(trail => (
        <div
          key={trail.id}
          className="fixed top-0 left-0 z-[9995] pointer-events-none"
          style={{
            width: `${trail.size}px`,
            height: `${trail.size}px`,
            borderRadius: "50%",
            background: `radial-gradient(circle, 
              rgba(255, 255, 255, ${trail.life}), 
              rgba(225, 245, 254, ${trail.life * 0.6}))`,
            transform: `translate3d(${trail.x - trail.size/2}px, ${trail.y - trail.size/2}px, 0)`,
            boxShadow: `0 0 ${trail.size * 2}px rgba(129, 212, 250, ${trail.life * 0.4})`,
            opacity: trail.life
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;