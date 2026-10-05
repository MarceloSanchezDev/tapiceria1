export const businessData = {
  name: 'Carlos Reyes Decoraciones',
  experience: '50 años de experiencia',
  phone: 'Lorem ipsum',
  whatsapp: '549110000000',
  email: 'lorem@ipsum.com',
  location: 'Lorem ipsum',
  instagram: '@carlosreyesdecoraciones',
  hours: 'Lorem ipsum dolor sit amet',
  services: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
};

export const defaultWhatsappMessage = 'Hola, quiero solicitar un presupuesto para cortinas, roller o tapizados.';
export const whatsappLink = (message = defaultWhatsappMessage) => `https://wa.me/${businessData.whatsapp}?text=${encodeURIComponent(message)}`;
