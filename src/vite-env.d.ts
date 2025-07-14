/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_YOUR_NAME: string
  readonly VITE_YOUR_EMAIL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
