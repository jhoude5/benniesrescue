import * as React from "react";
import Header from '../../components/fr/header';
import Footer from '../../components/fr/footer';
import '../../sass/styles.scss';
import Volunteer from "../../components/fr/volunteer";
import imgAllanna from '../../files/allanna.jpg';
import imgDorothy from '../../files/dorothy.jpg';
import imgGeorge from '../../files/george.jpg';


const BoardMembers = () => {
  return (
    <main>
      <Header page='/en/about/board-members'/>
      <div className="board-members container">
        <div className="row">
            <h1>Membres du conseil d'administration</h1>
            <div className="col-md-4">
              <div className="board-img">
                <img src={imgAllanna}  alt='allana courte'/>
              </div>
              
              <h2>Allanna Courte</h2>
              <p>PDG et propriétaire de Sauvetage Bennie's</p>
            </div>
            <div className="col-md-4">
            <div className="board-img">
              <img src={imgDorothy} alt='dorothy young'/>
            </div>
            <h2>Dorothy Young</h2>
            <p>PDG et propriétaire de Sauvetage Bennie's</p>
            </div>
            <div className="col-md-4">
              <div className="board-img">
                <img src={imgGeorge} alt='Goerge Fletcher'/>
              </div>
              <h2>George Fletcher</h2>
              <p>PDG et propriétaire de Sauvetage Bennie's</p>
            </div>
            
        </div>
      </div>
      <section className="volunteers">
        <Volunteer />
      </section>
      <Footer />
    </main>
  )
}

export default BoardMembers

export const Head = () => <title>Membres du conseil d'administration</title>