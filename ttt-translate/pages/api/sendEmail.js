import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        // Créez un transporteur pour l'envoi d'e-mails en utilisant les informations de votre serveur SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user:
                pass
            },
        });

        try {
            // Envoie d'un e-mail
            const info = await transporter.sendMail({
                from: name,
                to: email,
                subject: subject,
                text: `${email}` + message,
            });

            console.log('Message sent: %s', info.messageId);

            // Réponse à la demande indiquant que l'e-mail a été envoyé
            res.status(200).json({ message: 'E-mail sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            // Réponse à la demande indiquant qu'il y a eu une erreur lors de l'envoi de l'e-mail
            res.status(500).json({ message: 'An error occurred while sending the email' });
        }
    } else {
        // Si la méthode HTTP n'est pas POST, retournez une erreur
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
