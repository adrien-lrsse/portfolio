import NavBar from "../components/Navbar/NavBar";

function Layout ({ children } : { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default Layout;