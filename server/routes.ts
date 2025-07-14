import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to provide EmailJS configuration
  app.get('/api/emailjs-config', (req, res) => {
    try {
      res.json({
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        serviceId: process.env.EMAILJS_TEMPLATE_ID,
        templateId: process.env.EMAILJS_SERVICE_ID
      });
    } catch (error) {
      console.error('Error fetching EmailJS config:', error);
      res.status(500).json({ error: 'Failed to fetch EmailJS configuration' });
    }
  });

  // put other application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
