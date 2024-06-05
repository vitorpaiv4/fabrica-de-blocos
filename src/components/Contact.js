import React, { useState } from 'react';
import { sendEmail } from './EmailService';

function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoProjeto: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (value.trim() !== '') {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = 'Você deixou em branco';
    if (!formData.email.trim()) newErrors.email = 'Você deixou em branco';
    if (!formData.telefone.trim()) newErrors.telefone = 'Você deixou em branco';
    if (!formData.tipoProjeto.trim()) newErrors.tipoProjeto = 'Você deixou em branco';
    if (!formData.mensagem.trim()) newErrors.mensagem = 'Você deixou em branco';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const result = await sendEmail(formData);
      console.log(result.text);
      alert('Mensagem enviada com sucesso!');
    } catch (error) {
      console.log(error.text);
      alert('Ocorreu um erro ao enviar a mensagem.');
    } finally {
      setLoading(false);
    }

    setFormData({
      nome: '',
      email: '',
      telefone: '',
      tipoProjeto: '',
      mensagem: ''
    });
  };

  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold mb-6 sm:text-4xl md:text-5xl">Entre em Contato</h2>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Nome"
              className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base md:text-lg"
              required
            />
            {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base md:text-lg"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="Telefone"
              className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base md:text-lg"
              required
            />
            {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>}
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="tipoProjeto"
              value={formData.tipoProjeto}
              onChange={handleChange}
              placeholder="Tipo de Projeto"
              className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base md:text-lg"
              required
            />
            {errors.tipoProjeto && <p className="text-red-500 text-sm mt-1">{errors.tipoProjeto}</p>}
          </div>
          <div className="mb-4">
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Mensagem"
              className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base md:text-lg"
              rows="4"
              required
            ></textarea>
            {errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem}</p>}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
