import emailjs from '@emailjs/browser';

// EmailJS Configuration
// These values MUST be set in your environment variables
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Personal Information Configuration
export const PERSONAL_CONFIG = {
  YOUR_NAME: import.meta.env.VITE_YOUR_NAME,
  YOUR_EMAIL: import.meta.env.VITE_YOUR_EMAIL,
};

// Validate that all required environment variables are set
if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
  console.error('Missing EmailJS configuration. Please set the following environment variables:');
  console.error('- VITE_EMAILJS_SERVICE_ID');
  console.error('- VITE_EMAILJS_TEMPLATE_ID');
  console.error('- VITE_EMAILJS_PUBLIC_KEY');
}

if (!PERSONAL_CONFIG.YOUR_NAME || !PERSONAL_CONFIG.YOUR_EMAIL) {
  console.error('Missing personal information. Please set the following environment variables:');
  console.error('- VITE_YOUR_NAME');
  console.error('- VITE_YOUR_EMAIL');
}

// Initialize EmailJS only if PUBLIC_KEY is available
if (EMAILJS_CONFIG.PUBLIC_KEY) {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  // Check if EmailJS is properly configured
  if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
    throw new Error('EmailJS is not properly configured. Please check your environment variables.');
  }

  // Check if personal information is configured
  if (!PERSONAL_CONFIG.YOUR_NAME || !PERSONAL_CONFIG.YOUR_EMAIL) {
    throw new Error('Personal information is not configured. Please check your environment variables.');
  }

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: PERSONAL_CONFIG.YOUR_NAME,
      to_email: PERSONAL_CONFIG.YOUR_EMAIL,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send email. Please try again or contact me directly.');
  }
};
