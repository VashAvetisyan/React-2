import './App.css';
import Layout from './component/Layout/Layout';
import Auth from './containers/Auth/Auth';
import Footer from './containers/Footer/Footer';

import Header from './containers/Header/Header';
import Products from './containers/Products/Products';
  

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
          <Auth />
          <Products />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
