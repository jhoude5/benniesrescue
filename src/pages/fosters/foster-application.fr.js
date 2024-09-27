import React, { useState } from 'react'; 
import Header from '../../components/fr/header';
import '../../sass/styles.scss';
import Footer from '../../components/fr/footer';
import Volunteer from '../../components/fr/volunteer';
import { navigate } from 'gatsby';


const FosterApplication = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [why, setWhy] = useState("")
  const [home, setHome] = useState("");
  const [allow, setAllow] = useState("");
  const [smoke, setSmoke] = useState("");
  const [otherpets, setOtherPets] = useState("");
  const [quarantine, setQuarantine] = useState("");
  const [vaccinations, setVaccination] = useState("");
  const [children, setChildren] = useState("");
  const [otheradults, setAdults] = useState("");
  const [otheradultsaware, setAdultsAware] = useState("");
  const [allergic, setAllergic] = useState("");
  const [accessories, setAccessories] = useState("");
  const [type, setType] = useState("");
  const [lengthtype, setLengthType] = useState("");
  const [shortlong, setShortLong] = useState("");
  const [crating, setCrating] = useState("");
  const [socialize, setSocialize] = useState("");
  const [medical, setMedical] = useState("");
  const [medicalassist, setMedicalAssist] = useState("");
  const [scale, setScale] = useState("");
  const [otherfoster, setOtherFoster] = useState("");
  const [welfare, setWelfare] = useState("");
  const [shortnotice, setShortNotice] = useState("");
  const [date, setDate] = useState("");
  const [acknowledge, setAcknowledge] = useState("");
  const [transport, setTranport] = useState("");
  
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
            setAge('');
            setPhone('');
            setAddress('');
            setWhy('');
            setHome('');
            setAllow('');
            setSmoke('');
            setOtherPets('');
            setQuarantine('');
            setVaccination('');
            setChildren('');
            setAdults('');
            setAdultsAware('');
            setAllergic('');
            setAccessories('');
            setType('');
            setLengthType('');
            setShortLong('');
            setCrating('');
            setSocialize('');
            setMedical('');
            setMedicalAssist('');
            setScale('');
            setOtherFoster('');
            setWelfare('');
            setShortNotice('');
            setDate('');
            setAcknowledge('');
            setTranport('');
        })
        .catch((error) => document.querySelector('.error').innerText = 'Something went wrong, pls try again.');
};
  return (
    <main>
      <Header page='en/fosters/foster-application'/>
      <div className="container">
            <h1>Damille D'Accueil Application</h1>
            <form className='foster-application-form' name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} id="contact-form">
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div className="row clearfix">
                    <div className="form-group">
                        <label for="email">Email <span className='required'>*</span></label>
                        <input id="email" className='col-9 col-sm-10 col-md-11' type="email"
                            name="email" value={email} required
                            onChange={({ target }) => setEmail(target.value)} placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <label for="name">Nom et prénom <span className='required'>*</span></label>
                        <input id="name" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setName(target.value)}
                          type="text" required name="name" value={name} minLength="3" placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Avez-vous 18 ans ou plus?<span className='required'>*</span></div>
                        <label className='radio-label' for="ageyes">Oui<input id="ageyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAge(target.value)}
                          type="radio" required name="age" value={age} minLength="3"  /></label>
                          <label  className='radio-label' for="ageno">Non<input id='ageno' className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAge(target.value)}
                          type="radio" required name="age" value={age} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <label for="phone">Numéro de téléphone<span className='required'>*</span></label>
                        <input id="phone" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setPhone(target.value)}
                          type="text" required name="phone" value={phone} minLength="3" placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <label for="address">Adresse complète (adresse postale, municipalité/ville, province, code postal) <span className='required'>*</span></label>
                        <input id="address" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAddress(target.value)}
                          type="text" required name="address" value={address} minLength="3" placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <label for="why">Pourquoi voulez-vous accueillir des chats ? <span className='required'>*</span></label>
                        <input id="why" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setWhy(target.value)}
                          type="text" required name="why" value={why} minLength="3" placeholder="Votre Réponse" />
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Êtes-vous propriétaire ou locataire de votre maison? <span className='required'>*</span></div>
                        <label for="homerent" className='radio-label'>Louer<input id="homerent" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setHome(target.value)}
                          type="radio" required name="home" value={home} minLength="3" /></label>
                          <label for="homeown" className='radio-label'>Propre<input id="homeown" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setHome(target.value)}
                          type="radio" required name="home" value={home} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Si vous louez votre logement, le propriétaire du bien autorise-t-il l'accueil d'animaux ? <span className='required'>*</span></div>
                        <label className='radio-label' for="allowyes">Oui<input id="allowyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAllow(target.value)}
                          type="radio" required name="allow" value={allow} minLength="3" /></label>
                          <label className='radio-label' for="allowno">Non<input id="allowno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAllow(target.value)}
                          type="radio" required name="allow" value={allow} minLength="3" /></label>
                          <label className='radio-label' for="allowna">Non Applicable<input id="allowna" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAllow(target.value)}
                          type="radio" required name="allow" value={allow} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Est-ce que vous ou d’autres personnes fumez à l’intérieur de la maison ? <span className='required'>*</span></div>
                        <label className='radio-label' for="smokeyes">Oui<input id="smokeyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setSmoke(target.value)}
                          type="radio" required name="smoke" value={smoke} minLength="3" /></label>
                          <label className='radio-label' for="smokeno">Non<input id="smokeno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setSmoke(target.value)}
                          type="radio" required name="smoke" value={smoke} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Possédez-vous actuellement des animaux de compagnie ?<span className='required'>*</span></div>
                        <label className='radio-label' for="yescats">Oui, chat(s)<input id="yescats" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setOtherPets(target.value)}
                          type="radio" required name="otherpets" value={otherpets} minLength="3"  /></label>
                          <label className='radio-label' for="yesdogs">Oui, chien(s)<input id="yesdogs" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setOtherPets(target.value)}
                          type="radio" required name="otherpets" value={otherpets} minLength="3"  /></label>
                          <label className='radio-label' for="both">Les chats et les chiens<input id="both" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setOtherPets(target.value)}
                          type="radio" required name="otherpets" value={otherpets} minLength="3"  /></label>
                          <label className='radio-label' for="nopets">Je n'ai pas d'animaux de compagnie<input id="nopets" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setOtherPets(target.value)}
                          type="radio" required name="otherpets" value={otherpets} minLength="3"  /></label>
                          <label className='radio-label' for="other">Autre<input id="other" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setOtherPets(target.value)}
                          type="radio" required name="otherpets" value={otherpets} minLength="3"  /></label>
                    </div>


                    <div className=" form-group">
                        <div className='radio-option'>Si vous possédez actuellement des animaux de compagnie, êtes-vous en mesure et disposé à isoler les animaux d'accueil des animaux de compagnie de la famille au sein du foyer, comme requis ? Cela comprend une période de quarantaine obligatoire de 7 jours pour les nouveaux animaux d'accueil.</div>
                        <div>Pendant la période de quarantaine initiale, le parent d'accueil doit informer Sauvetage Bennie's de tout signe de parasite, d'infection ou de maladie.</div>
                        <label className='radio-label' for="quarantineyes">Yes<input id="quarantineyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setQuarantine(target.value)}
                          type="radio" required name="quarantine" value={quarantine} minLength="3"  /></label>
                          <label className='radio-label' for="quarantineno">No<input id="quarantineno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setQuarantine(target.value)}
                          type="radio" required name="quarantine" value={quarantine} minLength="3"  /></label>
                          <label className='radio-label' for="quarantinena">Not Applicable<input id="quarantinena" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setQuarantine(target.value)}
                          type="radio" required name="quarantine" value={quarantine} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Pouvez-vous garantir que les animaux présents dans le foyer d'accueil sont stérilisés, à jour de tous leurs vaccins et exempts de tout parasite ou maladie connu ?<span className='required'>*</span></div>
                        <label className='radio-label' for="vaccinationsyes">Oui<input id="vaccinationsyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setVaccination(target.value)}
                          type="radio" required name="vaccinations" value={vaccinations} minLength="3"  /></label>
                          <label className='radio-label' for="vaccinationsno">Non<input id="vaccinationsno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setVaccination(target.value)}
                          type="radio" required name="vaccinations" value={vaccinations} minLength="3"  /></label>
                          <label className='radio-label' for="vaccinationsna">Non Applicable<input id="vaccinationsna" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setVaccination(target.value)}
                          type="radio" required name="vaccinations" value={vaccinations} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Avez-vous accès à un moyen de transport ou êtes-vous en mesure d'informer Sauvetage Bennie's de toute assistance en matière de transport requise dès qu'elle est connue ?<span className='required'>*</span></div>
                        <label className='radio-label' for="transportyes">J'ai accès à un véhicule<input id="transportyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setTranport(target.value)}
                          type="radio" required name="transport" value={transport} minLength="3" /></label>
                          <label className='radio-label' for="transportno">Je n'ai pas accès à un véhicule, mais j'informerai Sauvetage Bennie's de toute assistance de transport requise dès que je le saurai.<input id="transportno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setTranport(target.value)}
                          type="radio" required name="transport" value={transport} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='checkbox-option'>Partagez-vous actuellement un logement avec des personnes de moins de 18 ans ?<span className='required'>*</span></div>
                        <label className='checkbox-label' for="childrenunderfive">Oui, je partage un logement avec une ou plusieurs personnes de moins de 5 ans<input id="childrenyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setChildren(target.value)}
                          type="checkbox"  name="children" value={children} minLength="3" /></label>
                          <label className='checkbox-label' for="childrenbetweenfiveandten">Oui, je partage un logement avec des personnes âgées de 5 à 10 ans<input id="childrenbetweenfiveandten" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setChildren(target.value)}
                          type="checkbox"  name="children" value={children} minLength="3" /></label>
                          <label className='checkbox-label' for="childrenbetweentenandeighteen">Oui, je partage un logement avec des personnes âgées de 10 à 18 ans<input id="childrenbetweentenandeighteen" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setChildren(target.value)}
                          type="checkbox"  name="children" value={children} minLength="3" /></label>
                          <label className='checkbox-label' for="childrenno">Non<input id="childrenno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setChildren(target.value)}
                          type="checkbox"  name="children" value={children} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Partagez-vous actuellement un logement avec d’autres adultes ?<span className='required'>*</span></div>
                        <label className='radio-label' for="otheradultsyes">Oui<input id="otheradultsyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAdults(target.value)}
                          type="radio" required name="otheradults" value={otheradults} minLength="3" /></label>
                          <label className='radio-label' for="otheradultsno">Non<input id="otheradultsno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAdults(target.value)}
                          type="radio" required name="otheradults" value={otheradults} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Les autres membres du foyer sont-ils conscients et acceptent-ils l’engagement qu’implique le fait d’être parent d’accueil ?<span className='required'>*</span></div>
                        <label className='radio-label' for="otheradultsawareyes">Oui<input id="otheradultsawareyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAdultsAware(target.value)}
                          type="radio" required name="otheradultsaware" value={otheradultsaware} minLength="3" /></label>
                          <label className='radio-label' for="otheradultsawareno">Non<input id="otheradultsawareno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAdultsAware(target.value)}
                          type="radio" required name="otheradultsaware" value={otheradultsaware} minLength="3" /></label>
                          <label className='radio-label' for="otheradultsawarena">Non Applicable<input id="otheradultsawarena" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAdultsAware(target.value)}
                          type="radio" required name="otheradultsaware" value={otheradultsaware} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Y a-t-il des membres de la famille allergiques aux chats ?<span className='required'>*</span></div>
                        <label className='radio-label' for="allergicyes">Oui<input id="allergicyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAllergic(target.value)}
                          type="radio" required name="allergic" value={allergic} minLength="3" /></label>
                          <label className='radio-label' for="allergicno">Non<input id="allergicno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAllergic(target.value)}
                          type="radio" required name="allergic" value={allergic} minLength="3" /></label>
                          <label className='radio-label' for="allergicna">Non Applicable<input id="allergicna" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAllergic(target.value)}
                          type="radio" required name="allergic" value={allergic} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Avez-vous ou prévoyez-vous acquérir un bac à litière, des bols de nourriture, une balance qui mesure les grammes et les onces/livres (comme une balance de cuisine) et un sac de transport pour animaux ?<span className='required'>*</span></div>
                        <div>(Sauvetage Bennie's peut fournir des fournitures de soins aux animaux si disponibles.)</div>
                        <label className='radio-label' for="accessoriesyes">Oui<input id="accessoriesyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAccessories(target.value)}
                          type="radio" required name="accessories" value={accessories} minLength="3"  /></label>
                          <label className='radio-label' for="accessoriesno">Non<input id="accessoriesno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAccessories(target.value)}
                          type="radio" required name="accessories" value={accessories} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <div className='checkbox-option'>Vous souhaitez accueillir des chats adultes, des chats seniors, des chattes avec des chatons, des chatons qui ne sont plus avec leur mère, ou un ou plusieurs chats nécessitant des soins particuliers (socialisation ou soins médicaux) ?<span className='required'>*</span></div>
                        <label className='checkbox-label' for="typeadult">Chats adultes<input id="typeadult" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setType(target.value)}
                          type="checkbox"  name="type" value={type} minLength="3" /></label>
                          <label className='checkbox-label' for="typesenior">Chats âgés<input id="typeseniot" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setType(target.value)}
                          type="checkbox"  name="type" value={type} minLength="3" /></label>
                          <label className='checkbox-label' for="typemotherkitten">Mère chatte avec ses chatons<input id="typemotherkitten" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setType(target.value)}
                          type="checkbox"  name="type" value={type} minLength="3" /></label>
                          <label className='checkbox-label' for="kitten">Chaton(s) qui n'est(ent) plus avec sa mère<input id="kitten" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setType(target.value)}
                          type="checkbox"  name="type" value={type} minLength="3" /></label>
                          <label className='checkbox-label' for="catspecialcare">Chat(s) nécessitant des soins particuliers<input id="catspecialcare" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setType(target.value)}
                          type="checkbox"  name="type" value={type} minLength="3" /></label>
                          <label className='checkbox-label' for="any">L'un des éléments ci-dessus<input id="any" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setType(target.value)}
                          type="checkbox"  name="type" value={type} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Souhaitez-vous accueillir des animaux de façon indéfinie, pendant la « saison des chatons » ou seulement jusqu'à ce que vous trouviez un animal à adopter ?<span className='required'>*</span></div>
                        <label className='radio-label' for="longterm">À long terme<input id="longterm" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setLengthType(target.value)}
                          type="radio" required name="lengthtype" value={lengthtype} minLength="3"/></label>
                          <label className='radio-label' for="kittenseason">Pendant la « saison des chatons » (de mai à octobre)<input id="kittenseason" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setLengthType(target.value)}
                          type="radio" required name="lengthtype" value={lengthtype} minLength="3"/></label>
                          <label className='radio-label' for="untiladopt">En attendant de trouver un animal à adopter<input id="untiladopt" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setLengthType(target.value)}
                          type="radio" required name="lengthtype" value={lengthtype} minLength="3"/></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Êtes-vous intéressé à accueillir des animaux à court terme (animaux nécessitant des traitements médicaux à court terme nécessitant une quarantaine, dans des situations d'urgence ou de nouveaux animaux admis nécessitant une quarantaine - normalement 2 à 3 semaines) ou êtes-vous intéressé à accueillir des animaux à long terme (de l'admission jusqu'à l'adoption - normalement 12 à 16 semaines) ?<span className='required'>*</span></div>
                        <label className='radio-label' for="short">Court terme (2-3 semaines)<input id="short" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setShortLong(target.value)}
                          type="radio" required name="shortlong" value={shortlong} minLength="3"  /></label>
                          <label className='radio-label' for="long">Long terme (12-16 semaines)<input id="long" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setShortLong(target.value)}
                          type="radio" required name="shortlong" value={shortlong} minLength="3"  /></label>
                          <label className='radio-label' for="both">Les deux<input id="both" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setShortLong(target.value)}
                          type="radio" required name="shortlong" value={shortlong} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Prévoyez-vous de créer les animaux) ou de les laisser se déplacer librement dans l'espace qui leur est désigné ?<span className='required'>*</span></div>
                        <label className='radio-label' for="fulltime">Mise en caisse à temps plein<input id="fulltime" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setCrating(target.value)}
                          type="radio" required name="crating" value={crating} minLength="3" /></label>
                          <label className='radio-label' for="nighttime">Mise en cage la nuit uniquement et libre circulation pendant la journée<input id="nighttime" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setCrating(target.value)}
                          type="radio" required name="crating" value={crating} minLength="3" /></label>
                          <label className='radio-label' for="roamfree">Permettre aux animaux de se déplacer librement à tout moment (dans l'espace qui leur est attribué dans le foyer d'accueil)<input id="roamfree" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setCrating(target.value)}
                          type="radio" required name="crating" value={crating} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Êtes-vous disposé et capable de socialiser et de dresser l'animal et d'informer Sauvetage Bennie's de tout problème de socialisation ou de comportement ?<span className='required'>*</span></div>
                        <div>(Cela peut inclure l’apprentissage de la litière, l’accoutumance de l’animal à l’interaction humaine, etc.)</div>
                        <label className='radio-label' for="socialyes">Oui<input id="socialyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setSocialize(target.value)}
                          type="radio" required name="socialize" value={socialize} minLength="3" /></label>
                          <label className='radio-label' for="socialno">Non<input id="socialno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setSocialize(target.value)}
                          type="radio" required name="socialize" value={socialize} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Êtes-vous disposé et capable de fournir des soins médicaux de base à l’animal si celui-ci nécessite l’administration de médicaments ou d’autres soins médicaux particuliers recommandés par un vétérinaire ?<span className='required'>*</span></div>
                        <div>Cela peut inclure des médicaments par voie orale, des gouttes/nettoyages pour les yeux/oreilles, des médicaments contre les puces ou d'autres traitements médicaux. Cela n'inclut pas les visites chez le vétérinaire, qui sont coordonnées, gérées et payées par Sauvetage Bennie's.</div>
                        <label className='radio-label' for="medicalyes">Oui<input id="medicalyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setMedical(target.value)}
                          type="radio" required name="medical" value={medical} minLength="3"  /></label>
                          <label className='radio-label' for="medicalno">Non<input id="medicalno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setMedical(target.value)}
                          type="radio" required name="medical" value={medical} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Êtes-vous disposé et capable de voir comment fournir des liquides sous-cutanés à l'animal ?<span className='required'>*</span></div>
                        <div>Cela comprend une injection à l'aiguille sous la peau de l'animal. (Si vous n'êtes pas à l'aise avec cette méthode, nous vous fournirons un animal d'accueil qui n'a pas besoin de fluides sous-cutanés.)</div>
                        <label className='radio-label' for="medicalassistyes">Oui<input id="medicalassistyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setMedicalAssist(target.value)}
                          type="radio" required name="medicalassist" value={medicalassist} minLength="3"  /></label>
                          <label className='radio-label' for="medicalassistno">Non<input id="medicalassistno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setMedicalAssist(target.value)}
                          type="radio" required name="medicalassist" value={medicalassist} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Êtes-vous disposé et capable de peser l'animal à l'aide d'une balance telle qu'une balance de cuisine) si Sauvetage Bennie's le demande ?<span className='required'>*</span></div>
                        <div>Si vous accueillez des chatons, le parent d'accueil doit les peser à l'aide d'une petite balance pour animaux ou d'une balance de cuisine et doit enregistrer le poids de chaque chaton quotidiennement pendant les 4 premières semaines de vie, puis chaque semaine par la suite. Le parent d'accueil doit fournir le poids de tous les chatons ou chats dont il a la garde au Sauvetage Bennie's sur demande.</div>
                        <label className='radio-label' for="scaleyes">Oui<input id="scaleyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setScale(target.value)}
                          type="radio" required name="scale" value={scale} minLength="3" /></label>
                          <label className='radio-label' for="scaleno">Non<input id="scaleno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setScale(target.value)}
                          type="radio" required name="scale" value={scale} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Accueillez-vous actuellement des animaux pour une autre organisation de sauvetage ou prévoyez-vous de le faire pendant la période où vous accueilleriez des animaux pour Sauvetage Bennie's?<span className='required'>*</span></div>
                        <label className='radio-label' for="otherfosteryes">Oui<input id="otherfosteryes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setOtherFoster(target.value)}
                          type="radio" required name="otherfoster" value={otherfoster} minLength="3" /></label>
                          <label className='radio-label' for="otherfosterno">Non<input id="otherfosterno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setOtherFoster(target.value)}
                          type="radio" required name="otherfoster" value={otherfoster} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Un membre du ménage a-t-il été reconnu coupable d’une violation de la loi sur le bien-être animal, comme la négligence, la cruauté ou l’abandon, ou de toute autre accusation liée au bien-être animal ?<span className='required'>*</span></div>
                        <label className='radio-label' for="welfareyes">Oui<input id="welfareyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setWelfare(target.value)}
                          type="radio" required name="welfare" value={welfare} minLength="3"/></label>
                          <label className='radio-label' for="welfareno">Non<input id="welfareno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setWelfare(target.value)}
                          type="radio" required name="welfare" value={welfare} minLength="3"/></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Êtes-vous prêt et capable d'accueillir un animal en famille d'accueil chez vous avec un préavis de 48 heures ?<span className='required'>*</span></div>
                        <label className='radio-label' for="shortnoticeyes">Oui<input id="shortnoticeyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setShortNotice(target.value)}
                          type="radio" required name="shortnotice" value={shortnotice} minLength="3" /></label>
                          <label className='radio-label' for="shortnoticeno">Non<input id="shortnoticeno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setShortNotice(target.value)}
                          type="radio" required name="shortnotice" value={shortnotice} minLength="3" /></label>
                          <label className='radio-label' for="shortnoticebut">Non, mais je serai prêt à accueillir un animal en famille d'accueil à une date précise.<input id="shortnoticebut" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setShortNotice(target.value)}
                          type="radio" required name="shortnotice" value={shortnotice} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <label>Si vous n'êtes pas disposé ou en mesure d'accueillir un animal en famille d'accueil dans votre foyer dans les 48 heures, quel est le délai dont vous avez besoin pour accueillir un animal en famille d'accueil ?<span className='required'>*</span></label>
                        <input  className='col-9 col-sm-10 col-md-3' onChange={({ target }) => setDate(target.value)}
                          type="date" required name="date" value={date} minLength="3"  />
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Comprenez-vous et reconnaissez-vous que Bennie's Rescue ne peut pas et ne donne aucune garantie quant à la santé, au tempérament, à la disposition mentale et à la formation des animaux sauvés, et que l'accueil d'animaux se fait à vos propres risques ?<span className='required'>*</span></div>
                        <label className='radio-label' for="acknowledgeyes">Oui<input id="acknowledgeyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAcknowledge(target.value)}
                          type="radio" required name="acknowledge" value={acknowledge} minLength="3"  /></label>
                          <label className='radio-label' for="acknowledgeno">Non<input id="acknowledgeno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAcknowledge(target.value)}
                          type="radio" required name="acknowledge" value={acknowledge} minLength="3"  /></label>
                    </div>
                    <div className="form-group">
                        <label>Do you have any questions about fostering for Bennie's Rescue? <span className='required'>*</span></label>
                        <input type="text"  className='col-9 col-sm-10 col-md-11' name="message" placeholder="Votre Réponse" required onChange={({ target }) => setMessage(target.value)}
                            value={message}></input>
                    </div>

                    <div className="form-group form-button">
                        <button className="theme-btn btn-style-one" type="submit">SUBMIT</button>
                    </div>
                </div>
            </form>
          </div>
          <section className='volunteers'>
            <Volunteer />
          </section>
          <Footer />
    </main>
  )
}

export default FosterApplication
export const Head = () => <title>Damille D'Accueil Application</title>

