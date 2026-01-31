/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_FIREBASE_PROJECT_ID: string
    readonly VITE_FORMSPREE_FORM_ID: string
    readonly VITE_EMAILJS_SERVICE_ID: string
    readonly VITE_EMAILJS_PUBLIC_KEY: string
    readonly VITE_EMAILJS_TEMPLATE_ID_USER_NOTIFY: string
    readonly VITE_EMAILJS_TEMPLATE_ID_AUTO_REPLY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
