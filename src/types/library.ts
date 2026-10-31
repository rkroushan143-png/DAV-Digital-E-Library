import {z} from "zod";
export const resourceTypes=["textbook","notes","worksheet","assignment","sample-paper","question-paper","video","quiz","external"] as const;
export type ResourceType=(typeof resourceTypes)[number];
export type Language="English"|"Hindi"|"Bilingual";
export const resourceSchema=z.object({id:z.string().min(2),titleEn:z.string().min(2),descriptionEn:z.string().min(5),classLevel:z.number().int().min(1).max(12),subject:z.string().min(2),resourceType:z.enum(resourceTypes),language:z.enum(["English","Hindi","Bilingual"]),academicYear:z.string(),chapter:z.string(),sourceName:z.string().min(2),sourceUrl:z.string().url(),thumbnail:z.string(),tags:z.array(z.string()),dateAdded:z.string(),isOfficial:z.boolean(),verifiedAt:z.string().nullable(),downloadAllowed:z.boolean(),demo:z.boolean().default(true)});
export type LibraryResource=z.infer<typeof resourceSchema>;
export interface Subject{slug:string;en:string;proposed?:boolean}
