import './App.css'
import Router from './routes/Router'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './store/store'

export default function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router />
    </Provider>
  )
}
