import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import bg from './assets/bg2.jpg';

const App = () => {
  return (
    <>
    <Header
      title='This is title'
      descr='This is description'
    />
    <Layout urlBg={bg}/>
    <Layout />
    <Layout urlBg={bg}/>
    <Footer />
    </>
  )
}

export default App;