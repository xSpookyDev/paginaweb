document.addEventListener('DOMContentLoaded', function() {
  // Configuración optimizada para AskuWebs
  new Typed('.typed-element', {
    strings: [
      'presencia digital',
      'sitio web profesional', 
      'aplicación personalizada',
      'estrategia de SEO',
      'marca online',
      'experiencia digital'
    ],
    typeSpeed: 60,        // Velocidad de escritura
    backSpeed: 40,        // Velocidad de borrado  
    backDelay: 2500,      // Pausa antes de borrar
    startDelay: 500,      // Retraso inicial
    loop: true,           // Repetir infinitamente
    showCursor: true,     // Mostrar cursor
    cursorChar: '|',      // Carácter del cursor
    autoInsertCss: true,  // CSS automático
    
    // Callbacks para efectos adicionales
    onBegin: function(self) {
      
    },
    onComplete: function(self) {
      // Efecto sutil cuando completa cada string
      self.cursor.style.animation = 'blink 0.7s infinite';
    }
  });
});