import { Link, NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    // Logged out
    Swal.fire('Logged Out', 'Log Out Success', 'success');
    navigate('/');
  };

  const loginAndLogOutButton = (
    <>
      <li className="font-semibold">
        <NavLink to={'/login'}>Login</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={'/register'}>Sign Up</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div>
        <div className="navbar bg-base-200 fixed z-20 max-w-screen-xl	mx-auto top-0 rounded-lg">
          <div className="navbar-start">
            <Link to={`/dashboard/`} className="hidden lg:block">
              <img className="h-12" src="/logo.png" alt="Logo" />
            </Link>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-2"
                className="btn btn-ghost drawer-button lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="navbar-center lg:hidden">
            <ul className="menu menu-horizontal px-1 font-semibold">
              <img className="h-12" src="/logo.png" alt="Logo" />
            </ul>
          </div>
          <div className="navbar-end">
            <div className="mr-4 lg:mr-5">{/* <DarkWhite></DarkWhite> */}</div>

            {user ? undefined : (
              <ul className="menu menu-sm menu-horizontal font-semibold">
                {loginAndLogOutButton}
              </ul>
            )}
            {user && (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost">
                  <RiMenu2Line size={25}></RiMenu2Line>
                  <div className="w-10 avatar">
                    <img
                      className="rounded-full"
                      src={user?.photoURL}
                      alt="Profile_Image"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60"
                >
                  <li>
                    <Link to={'/profile'} className="justify-between">
                      {user?.displayName} Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/dashboard`}>Dashboard</Link>
                  </li>
                  <li>
                    <Link to={'/settings'}>Settings</Link>
                  </li>
                  <li>
                    {user && <button onClick={handleLogOut}>Log Out</button>}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
