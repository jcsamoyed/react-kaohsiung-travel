import { NavLink, Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">高雄旅遊網</Link>
        <NavLink to="/">首頁</NavLink>
        <NavLink to="/tour">景點列表</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Link to="/">回首頁</Link>
        <p>JC 2022 © 六角學院 React 讀書會</p>
      </footer>
    </>
  )
}

export default Layout;