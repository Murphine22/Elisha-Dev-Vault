import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/email';
import type { EmailFormData, EmailTemplateParams } from '../types/email';

// Initialize EmailJS
emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

export const sendEmail = async (formData: EmailFormData & { recaptchaToken: string }) => {
  try {
    const templateParams: EmailTemplateParams = {
      to_name: EMAIL_CONFIG.RECIPIENT_NAME,
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
      'g-recaptcha-response': formData.recaptchaToken
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }
    
    return response;
  } catch (error) {
    console.error('Email send error:', error);
    throw error;
  }
};