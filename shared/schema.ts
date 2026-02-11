import { pgTable, text, serial, boolean, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // 'graphic_design' | 'video_editing'
  imageUrl: text("image_url").notNull(),
  videoUrl: text("video_url"),
  technologies: text("technologies").array(),
  isFeatured: boolean("is_featured").default(false),
});

export const insertProjectSchema = createInsertSchema(projects);

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
