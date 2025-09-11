import React, { useEffect } from 'react';
import { TIXAE_CONFIG } from '../../utils/tixaeConfig';
import { initializeTixaeChat } from '../../utils/chat';

export default function TixaeChat() {
  useEffect(() => {
    // Create container if it doesn't exist
    let container = document.getElementById('VG_OVERLAY_CONTAINER');
    if (!container) {
      container = document.createElement('div');
      container.id = 'VG_OVERLAY_CONTAINER';
      container.style.width = '0';
      container.style.height = '0';
      document.body.appendChild(container);
    }

    // Configure TIXAE chat
    window.VG_CONFIG = TIXAE_CONFIG;

    // Load TIXAE script
    const script = document.createElement('script');
    script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    script.async = true;
    document.body.appendChild(script);

    // Wait for chat to initialize
    initializeTixaeChat().then(success => {
      if (!success) {
        console.error('Failed to initialize Tixae chat');
      }
    });

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
      delete window.VG_CONFIG;
    };
  }, []);

  return null;
}