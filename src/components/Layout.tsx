import Header from "./Header";
import Footer from "./Footer";
import './Layout.scss'


interface layoutProps {
  children: React.ReactNode
}

function Layout ({ children }: layoutProps) {
  return (
    <main className="layout">
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout;