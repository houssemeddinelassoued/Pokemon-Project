import { I18nProvider } from './i18n';
import { Home } from './pages/Home';
import './App.css';

function App() {
  return (
    <I18nProvider>
      <Home />
    </I18nProvider>
  );
}

export default App;
