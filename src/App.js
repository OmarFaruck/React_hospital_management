 
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './Componant/Footer/Footer';
import Header from './Componant/Header/Header';
import HomePage from './Componant/MainHomePage/HomePage/HomePage';
import Topbar from './Componant/Topbar/Topbar';
// import AboutUsPage from './Componant/MainAboutUsPage/AboutUsPage';
import AboutTeam from './Componant/MAinAboutTeamPage/AboutTeam/AboutTeam'; 
import Education from './Componant/MainEducationPage/Education/Education';
// import Ambulances from './Componant/MainAmbulancePage/Ambulance/Ambulances.jsx';
import MRI_SCAN from './Componant/MainMRI_SCANSPage/MRI_SCAN/MRI_SCAN'; 
import Mainpackeg from './Componant/MainpackegePage/Mainpackege/Mainpackeg';
import OurDoctor from './Componant/MAinOurDoctorsPages/OurDoctor/OurDoctor';
import MainSpecialitie from './Componant/MainSpecialitiesPage/MainSpecialitie/MainSpecialitie';
import MainHospital from './Componant/MainHospitalpages/MainHospital/MainHospital';
import InternationalMainPages from './Componant/MainInternationalPage/InternationalPages/InternationalMainPages.jsx'
import MAinBookAppointment from './Componant/MAin_Book_Appointment/MAinBookAppointment';
import AmbulancePage from './Componant/MainAmbulancePage/AmbulancePage/AmbulancePage';
import AboutUsPages from './Componant/MainAboutUsPage/AboutUsPages/AboutUsPages';
import SINGIN from './Componant/SINGIN/SINGIN';
import Signup from './Componant/Signup/Signup';
import RequireAuth from './Componant/RequireAuth/RequireAuth';
import ErrorPage from './Componant/ErrorPage/ErrorPage';
 
function App() {
  return (
    <div className="App">
      <Topbar/>
      <Header/>

      <Routes>
        <Route path='/' element={ <HomePage/> }/> 

        <Route path='/about_us' target='_blank' element={

        <RequireAuth>
            <AboutUsPages/>
        </RequireAuth>
      

        }/> 
        <Route path='/Our_Team' element={
        <RequireAuth>
           <AboutTeam/>
        </RequireAuth>
       

        }/>  
        <Route path='/Education' element={<Education/> }/>  

        <Route path='/Ambulance' element={
         <RequireAuth>
          <AmbulancePage/>
         </RequireAuth>
        

        }/>  
        <Route path='/MRI_SCANS' element={
         <RequireAuth>
           <MRI_SCAN/>
         </RequireAuth> 
        }/>  

        <Route path='/Book_Appointment' element={ <MAinBookAppointment/>}/>  

        <Route path='/Packeges' element={
        <RequireAuth>
           <Mainpackeg/>
        </RequireAuth> 
        }/>  

        <Route path='/Our_Doctors' element={ <OurDoctor/>}/>  
 
        <Route path='/Specialities' element={ <MainSpecialitie/> }/>  

  
        <Route path='/Our_Hospital' element={ <MainHospital/>}/>  
        
        <Route path='/International' element={ 

         <RequireAuth>
              <InternationalMainPages/>
         </RequireAuth>
       

        }/>  
        <Route path='/SINGIN' element={ <SINGIN/>}/>  
        <Route path='/Signup' element={ <Signup/>}/>  
        <Route path='*' element={ <ErrorPage/>}/>  
      </Routes>
     
      <Footer/>

    </div>
  );
}

export default App;
