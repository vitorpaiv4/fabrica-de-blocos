import emailjs from 'emailjs-com';

export const sendEmail = (formData) => {
  return emailjs.send(
    'service_xjh5dyo', // Substitua pelo seu Service ID
    'template_kzouhfsu', // Substitua pelo seu Template ID
    formData,
    'ZpRWakBx5u8fKJ-9s' // Substitua pelo seu User ID
  );
};
