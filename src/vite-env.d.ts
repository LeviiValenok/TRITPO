/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_AUTH_API_DOMAIN: string;
    readonly VITE_API_DOMAIN: string;
    readonly VITE_ENV_FILE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
