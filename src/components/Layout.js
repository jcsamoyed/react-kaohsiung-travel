import { NavLink, Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="title">
            <Link to="/">高雄旅遊網</Link>
          </div>
          <ul className='navbar'>
            <li><NavLink to="/">首頁</NavLink></li>
            <li><NavLink to="/tour-list">景點列表</NavLink></li>
          </ul>
        </div>
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