import { defineField, defineType } from "sanity";

export const plan = defineType({
  name: "plan",
  title: "Planes",
  type: "document",
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre del plan",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "precio",
      title: "Precio",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "descripcion",
      title: "Descripción",
      type: "string",
    }),

    defineField({
      name: "detalle",
      title: "Detalle (ej: $200/clase)",
      type: "string",
    }),

    defineField({
      name: "destacado",
      title: "¿Destacado?",
      type: "boolean",
      description: "Para resaltar el plan (ej: Membresía)",
      initialValue: false,
    }),

    defineField({
      name: "orden",
      title: "Orden",
      type: "number",
    }),

    defineField({
    name: "whatsappText",
    title: "Mensaje WhatsApp",
    type: "string",
    }),

    ],

  orderings: [
    {
      title: "Orden",
      name: "ordenAsc",
      by: [{ field: "orden", direction: "asc" }],
    },
    ],
  
});