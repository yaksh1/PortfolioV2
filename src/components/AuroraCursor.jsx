import React from 'react'

const AuroraCursor = ({ mouseX, mouseY }) => {
  return (
    <div
      className='fixed pointer-events-none rounded-full'
      style={{
        left: mouseX,
        top: mouseY,
        transform: 'translate(-50%, -50%)',
        width: '250px',
        height: '250px',
        background:
          'radial-gradient(circle at center, rgba(255,165,0,0.6) 0%, rgba(255,105,180,0.4) 30%, rgba(255,140,0,0.2) 60%, rgba(255,100,0,0) 80%)',
        filter: 'blur(100px)',
        zIndex: 9999,
        transition: 'background 0.5s ease-out, filter 0.5s ease-out'
      }}
    ></div>
  )
}

export default AuroraCursor 