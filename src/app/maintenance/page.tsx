import React from 'react';

const MaintenancePage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      color: '#ffffff',
      fontFamily: 'sans-serif',
      textAlign: 'center',
    }}>
      {/* Video de fondo */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: '-1',
          filter: 'brightness(0.5)' // Oscurecer el video para mejor legibilidad
        }}
      >
        <source src="/videos/videoHD.mp4" type="video/mp4" />
        Your browser does not support HTML5 videos.
      </video>
      
      {/* Tarjeta principal */}
      <div style={{
        maxWidth: '600px',
        width: '90%', // Usar porcentaje para ser responsive
        padding: '40px',
        paddingTop: '30px',
        paddingBottom: '30px',
        marginRight: '20px',
        marginLeft: '20px',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        color: '#1e293b',
        // Media query para dispositivos móviles
        '@media (max-width: 768px)': {
          padding: '20px',
          maxWidth: '85%',
        }
      } as React.CSSProperties}>
        {/* Logo HD */}
        <div style={{ 
          margin: '0 auto', 
          width: '250px', 
          marginBottom: '1.5rem',
          // Media query para dispositivos móviles
          '@media (max-width: 768px)': {
            width: '180px',
            marginBottom: '1rem',
          }
        } as React.CSSProperties}>
          <img 
            src="/images/logoHD.png" 
            alt="Pool Quality Solutions" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1.5rem',
          color: '#0087c1',
          // Media query para dispositivos móviles
          '@media (max-width: 768px)': {
            fontSize: '2rem',
            marginBottom: '1rem',
          }
        } as React.CSSProperties}>
          Website Under Maintenance
        </h1>
        
        <div style={{
          padding: '0.8rem',
          backgroundColor: '#edf6fb',
          borderRadius: '12px',
          marginBottom: '1.5rem',
          // Media query para dispositivos móviles
          '@media (max-width: 768px)': {
            padding: '0.6rem',
            marginBottom: '1rem',
          }
        } as React.CSSProperties}>
          <p style={{ 
            fontSize: '1rem',
            color: '#0087c1',
            // Media query para dispositivos móviles
            '@media (max-width: 768px)': {
              fontSize: '0.9rem',
            }
          } as React.CSSProperties}>
            Thank you for your patience. We are working on improving our website. 
          </p>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1rem',
        }}>
          <p style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#0087c1',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            // No más estilos que lo hagan parecer un botón
          }}>
            Coming Back Soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage; 