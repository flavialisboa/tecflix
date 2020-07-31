import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

// import Menu from './components/Menu'
// import Footer from './components/Footer';

// import N404 from './assets/img/404.png';
// import Erro from './assets/img/oops.png';

const Pagina404 = () => (<div>Página 404</div>)

// function Pagina404() {
//   return(
//     <div style={{ background: "#3A3A3A" }}>
//       <Menu />
      
//       <>
       
//       <img className="404" src={N404} alt="Erro 404" />
//       <img className="ops" src={Erro} alt="Esta página não existe" />
//       TESTE 
//       </>
      
//       <Footer />
//     </div>
    
//   );
// }

// export default Pagina404;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
