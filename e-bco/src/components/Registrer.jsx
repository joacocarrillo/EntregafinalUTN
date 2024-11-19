import React, { useState } from 'react';
import { auth, db, createUserWithEmailAndPassword, setDoc, doc } from '../firebase';  // Asegúrate de que esta es la importación correcta de tus funciones de Firebase
import { useNavigate } from 'react-router-dom';  // Importa useNavigate
import './EstilosReg.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');


    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;


      await setDoc(doc(db, 'users', user.uid), {
        username: username,
        email: email,
      });

      console.log('Usuario registrado exitosamente:', user);

      navigate('/');  
    } catch (err) {
      console.error('Error al registrarse:', err.message);
      setError(err.message);  
    }
  };

  return (
    <div className="form-container">
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Register;
