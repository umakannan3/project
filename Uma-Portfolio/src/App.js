import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {Firstpage} from './components/firstpage/firstpage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Home} from './components/home/home'
import {About} from './components/about/about';
import { Certificates } from './components/certificates/certificates';
import {Skills} from './components/skills/skill'
import { Contact } from './components/contact/contact';
import Nav1 from './components/try/nav1'
import { Projects} from './components/projects/projects'
import {Notify} from './components1/task5/notify'
import {Mango} from './components1/task9/mango'
import {Super} from './components1/task3/super'
import {Technology} from './components1/task7/technology'
import {Login} from './components1/task6/login'
import './components1/task7/tech.css'
import './components1/task5/notify.css'
import './components1/task6/login.css'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={[<Nav1/>,<Firstpage/>]}></Route>
       <Route path='/first' element={[<Nav1/>,<Home/>]}></Route>
      <Route path='/about' element={[<Nav1/>,<About/>]}></Route>
      <Route path='/certificate' element={[<Nav1/>,<Certificates/>]}></Route>
      <Route path='/skills' element={[<Nav1/>,<Skills/>]}></Route>
      <Route path='/contact' element={[<Nav1/>,<Contact/>]}></Route>
      <Route path='/projects' element={[<Nav1/>,<Projects/>]}></Route>
      <Route path='/notify' element={<Notify/>}/> 
      <Route path='/mango' element={<Mango/>}/>
      <Route path='/super' element={<Super/>}/>
      <Route path='/tech' element={<Technology/>}/>
      <Route path='/tech' element={<Technology/>}/>
      <Route path='/login' element={<Login/>}/>

      
      </Routes> 
    </BrowserRouter>
    </>
  );
}

 export default App; 
