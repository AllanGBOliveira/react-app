// import Navbar from './navbar'
// import Footer from './footer'

import Header from './header'

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar />
      <main>{children}</main>
      <Footer /> */}
      <Header/>
      <main>{children}</main>

    </>
  )
}