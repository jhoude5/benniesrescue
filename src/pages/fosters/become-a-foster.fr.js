import * as React from "react";
import Header from '../../components/fr/header';
import Footer from '../../components/fr/footer';
import '../../sass/styles.scss';
import Adopt from "../../components/fr/adopt";


const BecomeFosters = () => {
  return (
    <main>
      <Header page='/en/fosters/become-a-foster'/>
      <div className="fostering container">
        <div className="row">
            <h1>Comment devenir famille d'accueil</h1>
            <p>Devenir famille d'accueil est un engagement important et gratifiant. Voici les étapes générales et les considérations impliquées dans le processus :</p>

            <p><strong>Étapes pour devenir parent d'accueil</strong></p>

            <ol>
                <li>Recherche et collecte d'informations :
                    <ul>
                        <li>Comprendre ce qu’implique le parrainage, y compris les responsabilités et les défis.</li>
                
                    </ul>
                </li>
                <li>Conditions d'admissibilité :
                    <ul>
                        <li>Assurez-vous de répondre aux exigences de base, ce qui peut inclure le fait d’avoir au moins 18 ans.</li>
            
                    </ul>
                </li>
                <li>Processus de candidature :
                    <ul>
                        <li>Remplissez un formulaire de demande fourni par Sauvetage Bennie's.</li>
                        <li>Fournir la documentation, l’identification et les références nécessaires.</li>
                    </ul>
                </li>
                <li>Approbation:
                    <ul>
                        <li>Si vous remplissez toutes les conditions, vous recevrez l’approbation.</li>
                        <li>Le processus de candidature garantit que vous êtes préparé et équipé pour prendre soin de chatons/chats en famille d'accueil.</li>
                    </ul>
                </li>
        
            </ol>
        
            <p><strong>Considérations</strong></p>

            <ul>
                <li>Préparation émotionnelle : Le rôle de parent d'accueil peut être exigeant sur le plan émotionnel. Il est important d'être mentalement et émotionnellement préparé aux hauts et aux bas.</li>
                <li>Système de soutien : Bénéficiez d'un solide réseau de soutien composé de membres de votre famille, d'amis ou de groupes de soutien pour vous aider tout au long du processus de placement familial..</li>
                <li>Flexibilité et patience : les enfants placés en famille d'accueil peuvent avoir vécu des traumatismes et avoir besoin de temps pour s'adapter. La patience et la flexibilité sont essentielles.</li>
        
            </ul>
            <div className="application-button">
              <a target='_blank' href="https://docs.google.com/forms/d/1gsIpLXUkF5ssE-n6ahmlvf_x4xXqEdYCJiwtf43Hl_4/"className="application-btn btn btn-primary btn-header">Soumettre une demande</a>
            </div>
        </div>
        
      </div>
      <section className="adopt-cta">
        <Adopt />
      </section>
      <Footer />
    </main>
  )
}

export default BecomeFosters

export const Head = () => <title>Comment devenir famille d'accueil</title>