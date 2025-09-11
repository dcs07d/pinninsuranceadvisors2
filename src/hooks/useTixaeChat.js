import { useCallback } from 'react';
import { TIXAE_CONFIG } from '../utils/tixaeConfig';
export function useTixaeChat() {
    const initializeChat = useCallback(() => {
        // Configure TIXAE chat
        window.VG_CONFIG = TIXAE_CONFIG;
        // Load TIXAE script
        const script = document.createElement('script');
        script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
        script.defer = true;
        document.body.appendChild(script);
        // Cleanup function
        return () => {
            document.body.removeChild(script);
            delete window.VG_CONFIG;
        };
    }, []);
    return { initializeChat };
}
//# sourceMappingURL=useTixaeChat.js.map