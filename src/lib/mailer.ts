import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'authsmtp.register.it',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE !== 'false', // true per porta 465, false per 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendVerificationEmail = async (email: string, token: string) => {
  const verifyUrl = `${process.env.NEXTAUTH_URL}/auth/verify?token=${token}`;
  
  const mailOptions = {
    from: `"Geniotto AI" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'Verifica la tua email per Geniotto AI',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #3b82f6;">Benvenuto su Geniotto AI! 🚀</h2>
        <p>Grazie per esserti registrato. Per iniziare a usare il tuo account, clicca sul link qui sotto per confermare la tua email:</p>
        <div style="margin: 24px 0;">
          <a href="${verifyUrl}" style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">Conferma Email</a>
        </div>
        <p>Se il bottone non funziona, copia e incolla questo link nel tuo browser:</p>
        <p><a href="${verifyUrl}" style="color: #3b82f6;">${verifyUrl}</a></p>
        <p>A presto,<br>Il team di Geniotto AI</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};
