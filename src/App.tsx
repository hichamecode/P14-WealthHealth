import './App.css'
import Router from './routes/Router'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router />
      <ToastContainer />
    </Provider>
  )
}
