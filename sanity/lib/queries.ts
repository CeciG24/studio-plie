export const scheduleQuery = `
  *[_type == "schedule"]{
    day,
    slots[]{
      time,
      type,
      coach->{
        nombre
      }
    }
  }
`;

export const plansQuery = `
  *[_type == "plan"] | order(orden asc){
    _id,
    nombre,
    precio,
    descripcion,
    detalle,
    destacado
  }
`;

export const galleryQuery = `
  *[_type == "gallery"][0]{
    imagenes
  }
`;