import { defineField, defineType } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Galería",
  type: "document",
  fields: [
    defineField({
  name: "imagenes",
  title: "Imágenes",
  type: "array",
  of: [
    {
      type: "image",
      options: { hotspot: true },
    },
  ],
  validation: (Rule) =>
    Rule.required()
      .min(1)
      .max(5)
      .error("Puedes subir entre 1 y 5 imágenes"),
})
  ],
});