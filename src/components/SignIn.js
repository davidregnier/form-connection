import React, { useState } from 'react';
import Home from './Home';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      setErrors({ email: 'L\'adresse mail doit avoir le bon format.' });
    } else {
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    
    <div>
      <div className="card">
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}

          <input type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} />
          
          <button type="submit">Se connecter</button>
        </form>
        <a href="/signup">Pas encore de compte ? Inscrivez-vous.</a>
      </div>
    </div>
  );
};

export default Signin;
