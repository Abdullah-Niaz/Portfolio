import React from 'react'
import { useCallback } from 'react';
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticlesBg(){
  const particlesInit = useCallback(async (engine) => {
  await loadFull(engine);
}, []);
  const options = {
    fpsLimit: 60,
    particles: {
      number: { value: 30, density: { enable: true, area: 800 } },
      color: { value: ['#6EE7B7', '#60A5FA', '#A78BFA'] },
      opacity: { value: 0.7 },
      size: { value: { min: 2, max: 6 } },
      move: { enable: true, speed: 0.8, outModes: { default: 'out' } },
      links: { enable: true, distance: 120, color: '#ffffff', opacity: 0.06 }
    },
    interactivity: { events: { onHover: { enable: true, mode: 'grab' }, onClick: { enable: true, mode: 'push' } }, modes: { grab: { distance: 140 } } },
    detectRetina: true
  }

  return <Particles init={particlesInit} options={options} className="absolute inset-0 -z-20" />
}
