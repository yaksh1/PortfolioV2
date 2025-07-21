import React, { useState } from 'react'

const CustomProfileCard = ({ avatarUrl, name, title, handle, status, contactText, showUserInfo, enableTilt, className, behindGradient, innerGradient }) => {
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!enableTilt) return;
    const { currentTarget: el } = e;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    if (!enableTilt) return;
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.3s ease-out',
    });
  };

  return (
    <div
      className={className}
      style={{
        backgroundColor: '#1A1A1A',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        ...tiltStyle
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background gradient for the card, mimicking geometric icon style */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '12px',
          opacity: 0.2,
          background: behindGradient
        }}
      ></div>
      {/* Inner gradient for a subtle effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '12px',
          opacity: 0.1,
          background: innerGradient
        }}
      ></div>

      <img
        src={avatarUrl}
        alt={name}
        style={{
          width: '128px',
          height: '128px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '16px',
          border: '4px solid #4A4A4A',
          zIndex: 10
        }}
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/128x128/6A0DAD/FFFFFF?text=JP'; }}
      />
      {showUserInfo && (
        <div style={{ zIndex: 10 }}>
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#FFFFFF', marginBottom: '4px' }}>{name}</h3>
          <p style={{ color: '#B0B0B0', fontSize: '16px', marginBottom: '4px' }}>{title}</p>
          <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '8px' }}>{handle}</p>
          <p style={{ color: '#4ADE80', fontSize: '14px', marginBottom: '16px' }}>{status}</p>
          <button
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0A0A0A',
              borderRadius: '8px',
              padding: '8px 24px',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'background-color 0.2s ease-in-out',
              cursor: 'pointer',
              border: 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0F0F0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
          >
            {contactText}
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomProfileCard 