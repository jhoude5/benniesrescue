import React, { useState } from 'react'; 
import Header from '../../components/fr/header';
import '../../sass/styles.scss';
import Footer from '../../components/fr/footer';
import Volunteer from '../../components/volunteer';
import { navigate } from 'gatsby';


const AdoptionApplication = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [hear, setHear] = useState("");
  const [cat, setCat] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [vet, setVet] = useState("");
  const [vetname, setVetName] = useState("");
  const [declaw, setDeclaw] = useState("");
  const [employed, setEmployed] = useState("");
  const [work, setWork] = useState("");
  const [home, setHome] = useState("");
  const [homepets, setHomePets] = useState("");
  const [retrieve, setRetrieve] = useState("");
  const [away, setAway] = useState("");
  const [other, setOther] = useState("");
  const [illpet, setIllPet] = useState("");
  const [allergies, setAllergies] = useState("");
  const [accessories, setAccessories] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = e => {
    e.preventDefault()
    const myForm = e.target;
    const formData = new FormData(myForm);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => {
            navigate("/fr/thank-you/");
            // Clear form fields
            setName('');
            setEmail('');
            setMessage('');
            setAddress('');
            setPhone('');
            setHear('');
            setCat('');
            setSex('');
            setAge('');
            setVet('');
            setVetName('');
            setDeclaw('');
            setEmployed('');
            setWork('');
            setHome('');
            setHomePets('');
            setRetrieve('');
            setAway('');
            setOther('');
            setIllPet('');
            setAllergies('');
            setAccessories('');
            setCost('');
        })
        .catch((error) => document.querySelector('.error').innerText = 'Merci de nous avoir contactés, nous vous répondrons sous peu.');
};
  return (
    <main>
      <Header />
      <div className="container">
            <h1>Demande D'Adoption</h1>
            <form className='adoption-application-form' name="adoption-applicatoin" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} id="adoption-application-form">
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div className="row clearfix">
                    
                    <div className="form-group">
                        <label for="email" className='col-3 col-sm-2 col-md-5'>Email <span className='required'>*</span></label>
                        <input id="email" className='col-9 col-sm-10 col-md-11' type="email"
                            name="email" value={email} required
                            onChange={({ target }) => setEmail(target.value)} placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <label for="name" className='col-3 col-sm-2 col-md-5'>Nom <span className='required'>*</span></label>
                        <input  id="name" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setName(target.value)}
                          type="text" required name="name" value={name} minLength="3" placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <label for="phone" className='col-3 col-sm-2 col-md-5'>Numéro de téléphone de contact<span className='required'>*</span></label>
                        <input  id="phone" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setPhone(target.value)}
                          type="text" required name="phone" value={phone} minLength="3" placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <label for="address">Adresse complète du domicile (numéro de maison, nom de rue, ville, code postal et province) <span className='required'>*</span></label>
                        <input  id="address" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAddress(target.value)}
                          type="text" required name="address" value={address} minLength="3" placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <label for="hear" className='col-3 col-sm-2 col-md-5'>Comment avez-vous entendu parler de nous?<span className='required'>*</span></label>
                        <input id="hear" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setHear(target.value)}
                          type="text" required name="hear" value={hear} minLength="3" placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <label for="cat" className='col-3 col-sm-2 col-md-5'>Quel chat souhaitez-vous adopter ? <span className='required'>*</span></label>
                        <input id="cat" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setCat(target.value)}
                          type="text" required name="cat" value={cat} minLength="3" placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Vous recherchez un chat/chaton mâle ou femelle ? <span className='required'>*</span></div>
                        <label className='radio-label' for="male">Mâle<input id="male" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setSex(target.value)}
                          type="radio" required name="sex" value={sex} minLength="3" /></label>
                          <label className='radio-label' for="female">Femelle<input id="female" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setSex(target.value)}
                          type="radio" required name="sex" value={sex} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>L’âge a-t-il de l’importance ? <span className='required'>*</span></div>
                        <label className='radio-label' for="ageyes">Oui<input id="ageyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAge(target.value)}
                          type="radio" required name="age" value={age} minLength="3" /></label>
                          <label className='radio-label' for="ageno">Non<input id="ageno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAge(target.value)}
                          type="radio" required name="age" value={age} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Avez-vous un vétérinaire que vous prévoyez de contacter pour le chat ? <span className='required'>*</span></div>
                        <label className='radio-label' for="vetyes">Oui<input id="vetyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setVet(target.value)}
                          type="radio" required name="vet" value={vet} minLength="3"  /></label>
                          <label className='radio-label' for="vetno">Non<input id="vetno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setVet(target.value)}
                          type="radio" required name="vet" value={vet} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <label for="vetname">Quel est le nom du vétérinaire ou de la clinique vétérinaire que vous prévoyez utiliser ? <span className='required'>*</span></label>
                        <input id="vetname" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setVetName(target.value)}
                          type="text" required name="vetname" value={vetname} minLength="3" placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <label for="declaw">Que pensez-vous de l’ablation des griffes des chats ? <span className='required'>*</span></label>
                        <input id="declaw" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setDeclaw(target.value)}
                          type="text" required name="declaw" value={declaw} minLength="3" placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Êtes-vous actuellement employé ? <span className='required'>*</span></div>
                        <label className='radio-label' for="employedyes">Oui<input id="employedyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setEmployed(target.value)}
                          type="radio" required name="employed" value={employed} minLength="3" /></label>
                          <label className='radio-label' for="employedno">Non<input id="employedno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setEmployed(target.value)}
                          type="radio" required name="employed" value={employed} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <label for="work">Vous travaillez à domicile en raison du covid et retournerez-vous sur votre lieu de travail ? <span className='required'>*</span></label>
                        <input id="work" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setWork(target.value)}
                          type="text" required name="work" value={work} minLength="3" placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Êtes-vous locataire ou propriétaire de votre maison? <span className='required'>*</span></div>
                        <label className='radio-label' for="homerent">Louer<input id="homerent" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setHome(target.value)}
                          type="radio" required name="home" value={home} minLength="3" /></label>
                          <label className='radio-label' for="homeown">Propre<input id="homeown" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setHome(target.value)}
                          type="radio" required name="home" value={home} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Si vous louez, êtes-vous autorisé à garder des animaux de compagnie ?<span className='required'>*</span></div>
                        <label className='radio-label' for="homepetsyes">Oui<input id="homepetsyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setHomePets(target.value)}
                          type="radio" required name="homepets" value={homepets} minLength="3"  /></label>
                          <label className='radio-label' for="homepetsno">Non<input id="homepetsno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setHomePets(target.value)}
                          type="radio" required name="homepets" value={homepets} minLength="3"  /></label>
                          <label className='radio-label' for="homepetsna">Non Applicable<input id="homepetsna" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setHomePets(target.value)}
                          type="radio" required name="homepets" value={homepets} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Avez-vous accès à un véhicule et êtes-vous prêt à vous déplacer à Grenville, QC afin de récupérer le chat/chaton ? <span className='required'>*</span></div>
                        <label className='radio-label' for="retrieveyes">Oui<input id="retrieveyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setRetrieve(target.value)}
                          type="radio" required name="retrieve" value={retrieve} minLength="3"/></label>
                          <label className='radio-label' for="retrieveno">Non<input id="retrieveno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setRetrieve(target.value)}
                          type="radio" required name="retrieve" value={retrieve} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Avez-vous quelqu’un pour prendre soin du chat/chaton lorsque vous voyagez ou êtes absent de chez vous pendant plus de 24 heures ? <span className='required'>*</span></div>
                        <label className='radio-label' for="awayyes">Oui<input id="awayyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAway(target.value)}
                          type="radio" required name="away" value={away} minLength="3" /></label>
                          <label className='radio-label' for="awayno">Non<input id="awayno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAway(target.value)}
                          type="radio" required name="away" value={away} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <label for="other">Avez-vous d'autres animaux de compagnie, des enfants ou des colocataires ? Veuillez fournir des détails. <span className='required'>*</span></label>
                        <input id="other" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setOther(target.value)}
                          type="text" required name="other" value={other} minLength="3" placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <label for="illpet">Que comptez-vous faire si le chat tombe malade ou développe des problèmes de comportement ? Veuillez fournir des détails. <span className='required'>*</span></label>
                        <input id="illpet" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setIllPet(target.value)}
                          type="text" required name="illpet" value={illpet} minLength="3" placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <label for="allergies">Quelqu’un dans votre foyer a-t-il souffert d’allergies ou d’asthme ?  <span className='required'>*</span></label>
                        <input id="allergies" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAllergies(target.value)}
                          type="text" required name="allergies" value={allergies} minLength="3" placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <label for="accessories">Possédez-vous une cage de transport pour chat, un bac/système de litière et des gamelles pour la nourriture ? Veuillez fournir des détails. <span className='required'>*</span></label>
                        <input id="accessories" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAccessories(target.value)}
                          type="text" required name="accessories" value={accessories} minLength="3" placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Si votre demande est approuvée et qu'un accord est conclu, des frais d'adoption seront facturés. Les frais d'adoption pour un chaton sont de 350 $, les frais d'adoption pour un chat adulte sont de 200 $ et les frais d'adoption pour un chat âgé ou une adoption humanitaire varient (veuillez nous contacter pour plus de détails concernant des chats spécifiques). Les frais d'adoption couvrent l'opération de stérilisation, les traitements contre les puces, la vermifugation et les vaccinations (ainsi que les rappels, le cas échéant). <span className='required'>*</span></div>
                        <label class="radio-label-cost" for="cost">Je comprends<input id="cost" onChange={({ target }) => setCost(target.value)}
                          type="radio" required name="cost" value={cost} minLength="3" /></label>
                    </div>
                    <div className="form-group">
                        <label for="message">Avez-vous des questions sur l'adoption d'un chat ou d'un chaton chez Sauvetage Bennie's? <span className='required'>*</span></label>
                        <input id="message" type="text" className='col-9 col-sm-10 col-md-11' name="message" required onChange={({ target }) => setMessage(target.value)}
                            value={message} placeholder='Votre Réponse'></input>
                    </div>
                    

                    <div className="form-group form-button">
                        <button className="theme-btn btn-style-one" type="submit">SOUMETTRE</button>
                    </div>
                </div>
            </form>
            <div className="success" id="success"></div>
            <div className="error"></div>
          </div>
          <section className='volunteers'>
            <Volunteer />
          </section>
          <Footer />
    </main>
  )
}

export default AdoptionApplication

export const Head = () => <title>Demande D'Adoption</title>

