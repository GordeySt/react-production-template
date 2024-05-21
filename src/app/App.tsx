import { Link } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'

export const App = () => {  
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About Page</Link>
      <AppRouter />
    </div>
  )
}
