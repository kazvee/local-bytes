import { useEffect } from 'react';

export default function Analytics() {
    useEffect(() => {

        const umamiScript = document.createElement('script');
        umamiScript.src = import.meta.env.VITE_UMAMI_SCRIPT_URL;
        umamiScript.async = true;
        umamiScript.defer = true;
        umamiScript.setAttribute('data-website-id', import.meta.env.VITE_UMAMI_WEBSITE_ID);
        document.body.appendChild(umamiScript);

        const cfScript = document.createElement('script');
        cfScript.src = 'https://static.cloudflareinsights.com/beacon.min.js';
        cfScript.async = true;
        cfScript.setAttribute('data-cf-beacon', `{"token": "${import.meta.env.VITE_CLOUDFLARE_TOKEN}"}`);
        document.body.appendChild(cfScript);

        return () => {
            document.body.removeChild(umamiScript);
            document.body.removeChild(cfScript);
        };
    }, []);

    return null;
}