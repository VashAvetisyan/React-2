import './App.css';
import Layout from './component/Layout/Layout';
import Footer from './containers/Footer/Footer';

import Form from './containers/Form/Form';
import Header from './containers/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
          <Form />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
