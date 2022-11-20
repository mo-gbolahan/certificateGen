
import './Style/App.css';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import { AboutUs, BulkPreview, BulkStep, Choice,ComingSoon, Dashboard, EditBulk, Error, FAQ, Layout, Modify, SinglePreview, Team, Templates, Terms } from './pages';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/comingsoon' element={<ComingSoon />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/templates' element={<Templates />} />
  <Route path="choice" element={<Choice />}></Route>
					<Route path="modify" element={<Modify />} />
          <Route path='/team' element={<Team />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/single_preview' element={<SinglePreview />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/bulk_preview' element={<BulkPreview />} />
          <Route path='/bulk_step' element={<BulkStep />} />
          <Route path='/edit_bulk' element={<EditBulk />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
  );

}

export default App;
