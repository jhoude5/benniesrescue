import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/fr/header"
import Footer from "../components/fr/footer"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <Header />
      <h1 style={headingStyles}>Page introuvable</h1>
      <p style={paragraphStyles}>
      Désolé 😔, nous n'avons pas trouvé ce que vous cherchiez.
        
        <br />
        <Link to="/fr">aller à la page d'accueil</Link>.
      </p>
      <Footer/>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Page introuvable</title>
