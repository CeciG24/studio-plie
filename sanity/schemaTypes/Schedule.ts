import { defineField, defineType } from "sanity";

const timeOptions = [
  { title: "07:00 - 08:00", value: "07-08" },
  { title: "08:00 - 09:00", value: "08-09" },
  { title: "09:00 - 10:00", value: "09-10" },
  { title: "10:00 - 11:00", value: "10-11" },
  { title: "11:00 - 12:00", value: "11-12" },
  { title: "12:00 - 13:00", value: "12-13" },
  { title: "13:00 - 14:00", value: "13-14" },
  { title: "14:00 - 15:00", value: "14-15" },
  { title: "15:00 - 16:00", value: "15-16" },
  { title: "16:00 - 17:00", value: "16-17" },
  { title: "17:00 - 18:00", value: "17-18" },
  { title: "18:00 - 19:00", value: "18-19" },
  { title: "19:00 - 20:00", value: "19-20" },
  { title: "20:00 - 21:00", value: "20-21" },
];

export const schedule = defineType({
  name: "schedule",
  title: "Horarios",
  type: "document",
  fields: [
    defineField({
      name: "day",
      title: "Día",
      type: "string",
      options: {
        list: [
          { title: "Lunes", value: "lunes" },
          { title: "Martes", value: "martes" },
          { title: "Miércoles", value: "miercoles" },
          { title: "Jueves", value: "jueves" },
          { title: "Viernes", value: "viernes" },
          { title: "Sábado", value: "sabado" },
        ],
      },
    }),

    defineField({
      name: "slots",
      title: "Clases del día",
      type: "array",
      of: [
        defineField({
          name: "bloqueHorario",
          type: "object",
          fields: [
            defineField({
              name: "time",
              title: "Horario",
              type: "string",
              options: {
                list: timeOptions,
              },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "coach",
              title: "Coach",
              type: "reference",
              to: [{ type: "instructora" }],
            }),

            defineField({
              name: "type",
              title: "Tipo",
              type: "string",
              options: {
                list: [
                  { title: "Clase", value: "class" },
                  { title: "Descanso", value: "break" },
                ],
              },
              initialValue: "class",
            }),
          ],
        }),
      ],
    }),
  ],
});