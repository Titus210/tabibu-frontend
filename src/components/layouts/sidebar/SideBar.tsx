const SideBar = () => {
  return (
    <>
    
      <div className="sidebar">
        <div className="sidebar__logo">
          <img src="https://via.placeholder.com/150" alt="logo" />
        </div>
        <div className="sidebar__menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SideBar