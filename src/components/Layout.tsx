import Header from "./Header";
import Footer from "./Footer";



interface layoutProps {
  children: React.ReactNode
}

function Layout ({ children }: layoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout;