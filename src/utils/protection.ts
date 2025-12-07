// Protection utilities to prevent easy code inspection
export const initializeProtection = () => {
  // Disable right-click context menu
  const disableRightClick = (e: MouseEvent) => {
    e.preventDefault();
    return false;
  };

  // Disable common developer tools keyboard shortcuts
  const disableDevToolsShortcuts = (e: KeyboardEvent) => {
    // F12
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }

    // Ctrl + Shift + I (Inspector)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      return false;
    }

    // Ctrl + Shift + J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      return false;
    }

    // Ctrl + Shift + C (Element selector)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      return false;
    }

    // Ctrl + U (View source)
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      return false;
    }

    // Additional shortcuts for extra protection
    // Ctrl + Shift + K (Console in Firefox)
    if (e.ctrlKey && e.shiftKey && e.key === 'K') {
      e.preventDefault();
      return false;
    }

    // Ctrl + Shift + E (Network tab)
    if (e.ctrlKey && e.shiftKey && e.key === 'E') {
      e.preventDefault();
      return false;
    }

    return true;
  };

  // Add event listeners
  document.addEventListener('contextmenu', disableRightClick);
  document.addEventListener('keydown', disableDevToolsShortcuts);

  // Additional protection: disable text selection on sensitive elements
  const disableSelection = () => {
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
  };

  // Apply selection protection
  disableSelection();

  // Console warning message (less aggressive)
  console.clear();
  console.log(
    '%c🚫 ACESSO RESTRITO',
    'color: #ff0000; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);'
  );
  console.log(
    '%cEste site é protegido contra inspeção. O acesso ao código fonte não é permitido.',
    'color: #ff6b6b; font-size: 14px; font-weight: bold;'
  );
  console.log(
    '%c© 2024 Digital Kings - Todos os direitos reservados',
    'color: #2F9EEC; font-size: 12px;'
  );

  // More sophisticated DevTools detection (less prone to false positives)
  let devToolsOpen = false;
  let consoleElement = document.createElement('div');
  
  // Method 1: Console detection
  Object.defineProperty(consoleElement, 'id', {
    get: function() {
      if (!devToolsOpen) {
        devToolsOpen = true;
        showDevToolsWarning();
      }
      return 'devtools-detector';
    }
  });

  // Method 2: Performance-based detection (more reliable)
  const detectDevTools = () => {
    const start = performance.now();
    debugger; // This will pause if DevTools is open
    const end = performance.now();
    
    // If DevTools is open, debugger will cause a significant delay
    if (end - start > 100) {
      if (!devToolsOpen) {
        devToolsOpen = true;
        showDevToolsWarning();
      }
    }
  };

  // Show warning only when DevTools is actually detected
  const showDevToolsWarning = () => {
    console.clear();
    document.body.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #1a1a1a, #000);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 999999;
        font-family: Arial, sans-serif;
        color: white;
        text-align: center;
      ">
        <div style="
          background: rgba(255, 0, 0, 0.1);
          border: 2px solid #ff0000;
          border-radius: 15px;
          padding: 40px;
          max-width: 500px;
          backdrop-filter: blur(10px);
        ">
          <h1 style="
            color: #ff0000;
            font-size: 2.5em;
            margin-bottom: 20px;
            text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
          ">🚫 ACESSO NEGADO</h1>
          <p style="
            font-size: 1.2em;
            margin-bottom: 20px;
            line-height: 1.6;
          ">
            Ferramentas de desenvolvedor detectadas!<br>
            Este conteúdo é protegido.
          </p>
          <p style="
            color: #2F9EEC;
            font-size: 1em;
            margin-top: 30px;
          ">
            © 2024 Digital Kings<br>
            Todos os direitos reservados
          </p>
          <button onclick="window.location.reload()" style="
            background: linear-gradient(45deg, #2F9EEC, #60A5FA);
            border: none;
            color: white;
            padding: 15px 30px;
            font-size: 1em;
            border-radius: 25px;
            cursor: pointer;
            margin-top: 20px;
            transition: transform 0.3s ease;
          " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            Recarregar Página
          </button>
        </div>
      </div>
    `;
  };

  // Periodic detection (less frequent to avoid performance issues)
  const detectionInterval = setInterval(() => {
    if (!devToolsOpen) {
      // Only trigger console detection occasionally
      console.log(consoleElement);
      
      // Performance-based detection
      detectDevTools();
    }
  }, 3000); // Check every 3 seconds instead of 500ms

  // Clear console periodically but less aggressively
  const consoleInterval = setInterval(() => {
    if (!devToolsOpen) {
      console.clear();
      console.log(
        '%c🚫 ACESSO RESTRITO',
        'color: #ff0000; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);'
      );
    }
  }, 5000); // Every 5 seconds instead of 3

  // Return cleanup function
  return () => {
    document.removeEventListener('contextmenu', disableRightClick);
    document.removeEventListener('keydown', disableDevToolsShortcuts);
    clearInterval(detectionInterval);
    clearInterval(consoleInterval);
  };
};