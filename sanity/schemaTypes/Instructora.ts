import { defineField, defineType } from "sanity";

export const instructora = defineType({
  name: "instructora",
  title: "Instructora",
  type: "document",
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre completo",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "especialidad",
      title: "Especialidad",
      type: "string",
      description: "Ej: Pilates Reformer, Pilates Mat, etc.",
    }),
    defineField({
      name: "bio",
      title: "Biografía",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "orden",
      title: "Orden de aparición",
      type: "number",
      description: "Número para controlar el orden en la página",
    }),
  ],
  orderings: [
    {
      title: "Orden de aparición",
      name: "ordenAsc",
      by: [{ field: "orden", direction: "asc" }],
    },
  ],
});