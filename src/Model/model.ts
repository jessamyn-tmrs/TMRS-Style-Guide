import { z } from "zod";
import SectionCard from "../Components/Card";

export const section = z.object({
  id: z.number(),
  name: z.string(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  assetUrl: z.string(),
});

export const sections = z.array(section);

export type Sections = z.infer<typeof sections>;

// export type Survey = z.infer<typeof survey>;
