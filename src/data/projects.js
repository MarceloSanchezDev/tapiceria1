// Agregá o editá los trabajos desde este archivo.
// Para mostrar fotos, reemplazá image y gallery por rutas como '/trabajos/nombre/foto-1.jpg'.
export const projects = [
  {
    slug: 'living-cortinas-a-medida',
    category: 'Cortinas a medida',
    title: 'Living con cortinas a medida',
    summary: 'Un espacio luminoso resuelto con telas y caída pensadas para el ambiente.',
    description: 'Sumá acá la historia del proyecto: qué necesitaba el cliente, qué se recomendó y cómo fue el resultado final.',
    image: '',
    gallery: [],
    features: ['Tipo de tela', 'Sistema elegido', 'Zona / ambiente'],
  },
  {
    slug: 'dormitorio-roller-blackout',
    category: 'Roller y blackout',
    title: 'Dormitorio con roller blackout',
    summary: 'Control de luz y privacidad con una solución a medida.',
    description: 'Sumá acá las medidas, el modelo, los materiales y cualquier detalle que ayude a contar el trabajo.',
    image: '',
    gallery: [],
    features: ['Modelo de roller', 'Nivel de oscurecimiento', 'Instalación'],
  },
  {
    slug: 'retapizado-sillon',
    category: 'Tapicería',
    title: 'Retapizado de sillón',
    summary: 'Renovación de tapizado, relleno y terminaciones para recuperar una pieza única.',
    description: 'Sumá acá el estado inicial, la tela seleccionada y los detalles del proceso de restauración.',
    image: '',
    gallery: [],
    features: ['Tela elegida', 'Trabajo realizado', 'Terminaciones'],
  },
];

export const getProject = (slug) => projects.find((project) => project.slug === slug);
