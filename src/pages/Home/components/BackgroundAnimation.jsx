import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function BackgroundAnimation() {
  // Canvas animation for performance-friendly complex animations
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [stars, setStars] = useState([]);
  const [constellations, setConstellations] = useState([]);
  
  // Set up canvas dimensions
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  
  // Generate stars and constellations
  useEffect(() => {
    if (dimensions.width === 0) return;
    
    // Random background stars
    const starCount = Math.min(120, Math.floor(dimensions.width / 10));
    const newStars = [];
    
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: `star-${i}`,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height * 0.8, // Keep stars in upper 80% of screen
        size: Math.random() * 4 + 2, // Even bigger stars (2-6px)
        opacity: Math.random() * 0.5 + 0.5, // Brighter
        blinkDuration: Math.random() * 3 + 2,
        blinkDelay: Math.random() * 5,
        // Add star points to make them more recognizable as stars
        points: Math.random() > 0.7 ? 4 : 0 // 30% of stars have points
      });
    }
    
    setStars(newStars);
    
    // Create multiple Big Dipper constellations
    const allConstellations = [];
    
    // Relative positions of Big Dipper stars (normalized)
    const dipperPositions = [
      { x: 0, y: 0 }, // Alkaid
      { x: -0.4, y: 0.1 }, // Mizar
      { x: -0.6, y: 0.2 }, // Alioth
      { x: -0.9, y: 0.3 }, // Megrez
      { x: -1.1, y: 0.1 }, // Phecda
      { x: -1.3, y: 0.3 }, // Merak
      { x: -1.5, y: 0.1 }, // Dubhe
    ];
    
    // North Star (Polaris) - positioned relative to the Big Dipper
    const polarisPosition = { x: -1.1, y: -1.2 };
    
    // Create 3 Big Dippers at different positions
    const dipperPositionsOnScreen = [
      { x: dimensions.width * 0.3, y: dimensions.height * 0.25, scale: Math.min(dimensions.width, dimensions.height) * 0.15 },
      { x: dimensions.width * 0.7, y: dimensions.height * 0.2, scale: Math.min(dimensions.width, dimensions.height) * 0.12 },
      { x: dimensions.width * 0.5, y: dimensions.height * 0.6, scale: Math.min(dimensions.width, dimensions.height) * 0.1 }
    ];
    
    // Create each constellation
    dipperPositionsOnScreen.forEach((position, constellationIndex) => {
      const { x: centerX, y: centerY, scale } = position;
      const constellationId = `constellation-${constellationIndex}`;
      const constellationStars = [];
      
      // Create Big Dipper stars
      dipperPositions.forEach((pos, starIndex) => {
        constellationStars.push({
          id: `${constellationId}-star-${starIndex}`,
          x: centerX + pos.x * scale,
          y: centerY + pos.y * scale,
          size: 5, // All constellation stars same size for clarity
          opacity: 1,
          blinkDuration: 4 + Math.random(),
          blinkDelay: Math.random() * 2,
          isConstellation: true,
          constellationId,
          starIndex
        });
      });
      
      // Add Polaris (North Star)
      constellationStars.push({
        id: `${constellationId}-polaris`,
        x: centerX + polarisPosition.x * scale,
        y: centerY + polarisPosition.y * scale,
        size: 7, // Larger than other stars
        opacity: 1,
        blinkDuration: 5,
        blinkDelay: 1,
        isConstellation: true,
        isPolaris: true,
        constellationId,
        starIndex: 7
      });
      
      allConstellations.push({
        id: constellationId,
        stars: constellationStars
      });
    });
    
    // Add additional Polaris stars
    const additionalPolaris = [
      { x: dimensions.width * 0.15, y: dimensions.height * 0.4 },
      { x: dimensions.width * 0.85, y: dimensions.height * 0.5 }
    ];
    
    additionalPolaris.forEach((pos, index) => {
      allConstellations.push({
        id: `solo-polaris-${index}`,
        stars: [{
          id: `solo-polaris-${index}`,
          x: pos.x,
          y: pos.y,
          size: 7,
          opacity: 1,
          blinkDuration: 5,
          blinkDelay: 1,
          isConstellation: true,
          isPolaris: true
        }]
      });
    });
    
    setConstellations(allConstellations);
  }, [dimensions]);
  
  // Canvas animation
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    // Animation parameters
    const particleCount = Math.min(100, Math.floor(dimensions.width / 20));
    const particles = [];
    const connectionDistance = dimensions.width * 0.15;
    const colors = {
      purple: { r: 139, g: 92, b: 246 },
      pink: { r: 236, g: 72, b: 153 }
    };
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 4 + 2;
      const colorChoice = Math.random() > 0.5 ? colors.purple : colors.pink;
      
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: size,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        color: colorChoice,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Bounce off edges
        if (p.x < 0 || p.x > dimensions.width) p.speedX *= -1;
        if (p.y < 0 || p.y > dimensions.height) p.speedY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.opacity})`;
        ctx.fill();
        
        // Connect particles with lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.3 * p.opacity * p2.opacity;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    const animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [dimensions]);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Night sky background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #0f172a, #1e293b)'
        }}
      />
      
      {/* Canvas-based particle network */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full">
        {constellations.map(constellation => {
          const stars = constellation.stars;
          if (stars.length < 2) return null;
          
          // Only draw lines if this is a Big Dipper constellation (8 stars)
          if (stars.length === 8) {
            return (
              <g key={constellation.id}>
                {/* Connect Big Dipper stars with straight lines */}
                <path
                  d={`M${stars[0].x},${stars[0].y} L${stars[1].x},${stars[1].y} L${stars[2].x},${stars[2].y} L${stars[3].x},${stars[3].y} L${stars[4].x},${stars[4].y} L${stars[5].x},${stars[5].y} L${stars[6].x},${stars[6].y}`}
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="1.5"
                  fill="none"
                />
                
                {/* Line from Big Dipper to Polaris */}
                <path
                  d={`M${stars[5].x},${stars[5].y} L${stars[6].x},${stars[6].y} L${stars[7].x},${stars[7].y}`}
                  stroke="rgba(255, 255, 255, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                  fill="none"
                />
              </g>
            );
          }
          return null;
        })}
      </svg>
      
      {/* Twinkling stars with star shape for some */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: star.points ? '0' : '50%',
            clipPath: star.points ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : 'none',
            boxShadow: `0 0 ${star.size * 3}px ${star.size}px rgba(255, 255, 255, 0.8)`
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.4, star.opacity]
          }}
          transition={{
            duration: star.blinkDuration,
            ease: "easeInOut",
            repeat: Infinity,
            delay: star.blinkDelay
          }}
        />
      ))}
      
      {/* Constellation stars and Polaris */}
      {constellations.flatMap(constellation => 
        constellation.stars.map(star => (
          <motion.div
            key={star.id}
            className="absolute bg-white"
            style={{
              left: `${star.x}px`,
              top: `${star.y}px`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: '50%',
              boxShadow: star.isPolaris 
                ? `0 0 ${star.size * 4}px ${star.size * 1.5}px rgba(255, 255, 255, 0.9), 0 0 ${star.size * 8}px ${star.size * 3}px rgba(255, 255, 255, 0.5)`
                : `0 0 ${star.size * 3}px ${star.size}px rgba(255, 255, 255, 0.8)`
            }}
            animate={{
              opacity: star.isPolaris 
                ? [1, 0.9, 1] // North Star pulses less
                : [star.opacity, star.opacity * 0.7, star.opacity]
            }}
            transition={{
              duration: star.blinkDuration,
              ease: "easeInOut",
              repeat: Infinity,
              delay: star.blinkDelay
            }}
          />
        ))
      )}
      
      {/* Add star rays to Polaris stars for extra visibility */}
      {constellations.flatMap(constellation => 
        constellation.stars
          .filter(star => star.isPolaris)
          .map(star => (
            <motion.div
              key={`ray-${star.id}`}
              className="absolute"
              style={{
                left: `${star.x - star.size * 2}px`,
                top: `${star.y - star.size * 2}px`,
                width: `${star.size * 4}px`,
                height: `${star.size * 4}px`,
                background: 'radial-gradient(circle at center, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
                backgroundSize: '100% 100%'
              }}
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity
              }}
            />
          ))
      )}
      
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.6) 0%, transparent 60%),
            radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.6) 0%, transparent 60%)
          `
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 3, 0, -3, 0]
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />
      
      {/* Animated wave effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute w-[200%] h-[50px] left-[-50%]"
            style={{
              top: `${15 * i + 10}%`,
              background: `linear-gradient(90deg, 
                transparent 0%, 
                rgba(139, 92, 246, ${0.03 * i}) 20%, 
                rgba(236, 72, 153, ${0.03 * i}) 80%, 
                transparent 100%
              )`,
              borderRadius: '50%',
              filter: `blur(${8 * i}px)`
            }}
            animate={{
              x: ['-20%', '20%', '-20%'],
              scaleY: [1, 1.2, 0.8, 1.2, 1]
            }}
            transition={{
              duration: 20 - i * 2,
              ease: "easeInOut",
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0">
        {/* Large triangle */}
        <motion.div
          className="absolute top-[15%] left-[10%] w-40 h-40 opacity-20"
          style={{
            background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8))',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />
        
        {/* Large circle */}
        <motion.div
          className="absolute top-[60%] left-[75%] w-64 h-64 rounded-full opacity-20"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8))'
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0, -50, 0],
            y: [0, -50, 0, 50, 0]
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />
        
        {/* Large square */}
        <motion.div
          className="absolute top-[40%] left-[60%] w-32 h-32 opacity-20"
          style={{
            background: 'linear-gradient(225deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8))'
          }}
          animate={{
            rotate: [0, 45, 0, -45, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />
      </div>
      
      {/* Animated glow spots */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/20 filter blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-pink-500/20 filter blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2
        }}
      />
      
      {/* Pulsing light effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 70%)'
          ]
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />
      
    </div>
  );
}
