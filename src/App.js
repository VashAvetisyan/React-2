import './App.css';
import Layout from './component/Layout/Layout';
import Auth from './containers/Auth/Auth';
import Footer from './containers/Footer/Footer';

import Header from './containers/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
          <Auth />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
