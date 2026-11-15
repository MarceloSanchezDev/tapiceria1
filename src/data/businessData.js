export const businessData = {
  name: 'Carlos Decoraciones',
  experience: '50 años de experiencia',
  phone: '541150996105',
  whatsapp: '5491150996105',
  email: 'lorem@ipsum.com',
  location: 'San Isidro, Buenos Aires, Argentina',
  instagram: '@carlosdecoraciones',
  hours: 'Lunes a Viernes: 9:00 - 18:00',
  services: ['Tapicería', 'Cortinas', 'Roller', 'Tapizados'],
};

export const defaultWhatsappMessage = 'Hola, quiero solicitar un presupuesto para cortinas, roller o tapizados.';
export const whatsappLink = (message = defaultWhatsappMessage) => `https://wa.me/${businessData.whatsapp}?text=${encodeURIComponent(message)}`;
