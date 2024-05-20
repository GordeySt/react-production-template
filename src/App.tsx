import { Route, Routes } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync'
import { MainPageAsync } from './pages/MainPage/MainPageAsync'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

export const App = () => {  
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'}  element={<MainPageAsync />}/>
        </Routes>
      </Suspense>
    </div>
  )
}
