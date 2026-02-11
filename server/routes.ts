import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    // Graphic Design Projects
    const graphics = [
      'WhatsApp Image 2026-02-09 at 10.51.50 PM (1).jpeg',
      'WhatsApp Image 2026-02-09 at 10.51.50 PM.jpeg',
      'WhatsApp Image 2026-02-09 at 10.51.51 PM (1).jpeg',
      'WhatsApp Image 2026-02-09 at 10.51.51 PM.jpeg',
      'WhatsApp Image 2026-02-09 at 10.51.52 PM.jpeg'
    ];

    for (const [index, img] of graphics.entries()) {
      await storage.createProject({
        title: `Brand Identity Design ${index + 1}`,
        description: "A complete visual identity including logo, typography, and brand assets created for a modern client.",
        category: "graphic_design",
        imageUrl: `/uploads/graphics/${img}`,
        technologies: ["Photoshop", "Illustrator"],
        isFeatured: index < 3
      });
    }

    // Video Editing Projects (thumbnails)
    const videos = [
      'WhatsApp Image 2026-02-09 at 10.46.35 PM.jpeg',
      'WhatsApp Image 2026-02-09 at 10.46.36 PM (1).jpeg',
      'WhatsApp Image 2026-02-09 at 10.46.36 PM (2).jpeg',
      'WhatsApp Image 2026-02-09 at 10.46.36 PM.jpeg',
      'WhatsApp Image 2026-02-09 at 10.46.37 PM (1).jpeg',
      'WhatsApp Image 2026-02-09 at 10.46.37 PM.jpeg',
      'WhatsApp Image 2026-02-09 at 10.46.38 PM.jpeg'
    ];

    for (const [index, img] of videos.entries()) {
      await storage.createProject({
        title: `Cinematic Edit ${index + 1}`,
        description: "High-energy video editing with seamless transitions, color grading, and sound design.",
        category: "video_editing",
        imageUrl: `/uploads/videos/${img}`, // Using image as thumbnail
        videoUrl: "#", // Placeholder as no video files were provided
        technologies: ["Premiere Pro", "After Effects"],
        isFeatured: index < 3
      });
    }

    console.log("Database seeded with portfolio items");
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data on startup
  await seedDatabase();

  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.projects.get.path, async (req, res) => {
    const project = await storage.getProject(Number(req.params.id));
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  });

  return httpServer;
}
