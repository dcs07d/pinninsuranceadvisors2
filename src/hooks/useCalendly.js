import { useEffect } from 'react';
export function useCalendly() {
    useEffect(() => {
        // Check if Calendly is already loaded
        if (window.Calendly) {
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        // Add script to document
        document.head.appendChild(script);
        return () => {
            // Only remove if it's the script we added
            const calendlyScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
            if (calendlyScript) {
                document.head.removeChild(calendlyScript);
            }
        };
    }, []);
}
//# sourceMappingURL=useCalendly.js.map