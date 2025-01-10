export interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailTemplateParams {
  to_name: string;
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  reply_to: string;
  'g-recaptcha-response'?: string;
}