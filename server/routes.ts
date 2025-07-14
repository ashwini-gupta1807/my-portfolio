import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ashwinigupta8052653693@gmail.com',
      pass: 'fevk kwnk zaqi dvyn'
    }
  });

  // API route to send contact form emails
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
      }
      
      // Configure email options
      const mailOptions = {
        from: 'ashwinigupta8052653693@gmail.com',
        to: 'ashwinigupta8052653693@gmail.com',
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        replyTo: email
      };
      
      // Send email
      await transporter.sendMail(mailOptions);
      
      res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  });

  // put other application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
