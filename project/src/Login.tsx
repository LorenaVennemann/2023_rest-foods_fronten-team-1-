import { useState } from 'react';
import { UserService } from './components/service/LoginService';

function LoginPage(props: { history: string[]; }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      const user = await UserService.login(username, password);
      console.log('Logged in user:', user);
      props.history.push('/');
    } catch (error) {
      console.error(error);
      setErrorMessage('Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Anmeldeinformationen und versuchen Sie es erneut.');
    }
  };

  return (
    <div>
      <h1>Anmelden</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Benutzername:</label>
          <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Passwort:</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit">Anmelden</button>
      </form>
    </div>
  );
}

export default LoginPage;