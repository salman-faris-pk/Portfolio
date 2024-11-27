declare module 'nodemailer' {
    import { Transporter } from 'nodemailer';
    import SMTPTransport from 'nodemailer/lib/smtp-transport';
  
    export = nodemailer;
    const nodemailer: {
      createTransport: (options: SMTPTransport.Options) => Transporter;
    };
  }
  