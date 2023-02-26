
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Router';

function App() {
  return (
    <div className='px-8'>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
