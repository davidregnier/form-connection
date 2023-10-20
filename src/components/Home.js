import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav>
      <h1>Page d'accueil</h1>
      <ul>
        <li>
          <Link to="/entreprise">Entreprise</Link>
        </li>
        <li>
          <Link to="/signin">Se connecter</Link>
        </li>
        <li>
          <Link to="/signup">S'inscrire</Link>
        </li>
        <li>
          <Link to="/a-propos">À propos</Link>
        </li>
      </ul>
      </nav>
    </div>
  );
}

export default Home;
