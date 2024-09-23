declare module 'nodemailer' {
    import { Transporter } from 'nodemailer';
  
    export = nodemailer;
    const nodemailer: {
      createTransport: (options: any) => Transporter;
    };
  }
  