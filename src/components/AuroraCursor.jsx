import React, { useEffect, useRef, useState } from 'react'

const BLOB_CONFIGS = [
{ size: 420, blur: 120, color: 'rgba(168,85,247,0.45)', x: 0, y: 0 },
  { size: 180, blur: 60, color: 'rgba(168,85,247,0.45)', x: 80, y: -60 },
  { size: 140, blur: 50, color: 'rgba(168,85,247,0.45)', x: -90, y: 90 },
  { size: 110, blur: 40, color: 'rgba(168,85,247,0.45)', x: 120, y: 120 },

]

const lerp = (a, b, n) => a + (b - a) * n

const AuroraCursor = ({ mouseX, mouseY }) => {
  const [blobs, setBlobs] = useState(
    BLOB_CONFIGS.map(() => ({ x: mouseX, y: mouseY }))
  )
  const animationRef = useRef()

  useEffect(() => {
    let running = true
    const animate = () => {
      setBlobs(prev =>
        prev.map((blob, i) => {
          const speed = 0.18 - i * 0.025
          return {
            x: lerp(blob.x, mouseX + BLOB_CONFIGS[i].x, speed),
            y: lerp(blob.y, mouseY + BLOB_CONFIGS[i].y, speed),
          }
        })
      )
      if (running) animationRef.current = requestAnimationFrame(animate)
    }
    animate()
    return () => {
      running = false
      cancelAnimationFrame(animationRef.current)
    }
  }, [mouseX, mouseY])

  return (
    <div style={{ position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 9999 }}>
      {blobs.map((blob, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: blob.x,
            top: blob.y,
            width: BLOB_CONFIGS[i].size,
            height: BLOB_CONFIGS[i].size,
            borderRadius: '50%',
            background: BLOB_CONFIGS[i].color,
            filter: `blur(${BLOB_CONFIGS[i].blur}px)`,
            transform: 'translate(-50%, -50%)',
            transition: 'background 0.5s',
            pointerEvents: 'none',
            mixBlendMode: 'lighter',
          }}
        />
      ))}
    </div>
  )
}

export default AuroraCursor 