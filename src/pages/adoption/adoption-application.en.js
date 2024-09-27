import React, { useState } from 'react'; 
import Header from '../../components/header';
import '../../sass/styles.scss';
import Footer from '../../components/footer';
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
            navigate("/en/thank-you/");
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
        .catch((error) => document.querySelector('.error').innerText = 'Something went wrong, pls try again.');
};
  return (
    <main>
      <Header />
      <div className="container">
            <h1>Adoption Application</h1>
            <form className='adoption-application-form' name="adoption-application" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} id="adoption-application-form">
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div className="row clearfix">
                    
                    <div className="form-group">
                        <label for="email" >Email <span className='required'>*</span>
                        <input id="email"  type="email"
                            name="email" value={email} required
                            onChange={({ target }) => setEmail(target.value)} placeholder="Your Email" /></label>
                    </div>
                    <div className=" form-group">
                        <label for="name">Name <span className='required'>*</span>
                        <input  id="name" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setName(target.value)}
                          type="text" required name="name" value={name} minLength="3" placeholder="Your Answer" /></label>
                    </div>
                    <div className=" form-group">
                        <label for="phone" >Contact Phone Number <span className='required'>*</span></label>
                        <input  id="phone" onChange={({ target }) => setPhone(target.value)}
                          type="text" required name="phone" value={phone} minLength="3" placeholder="Your Answer" />
                    </div>
                    <div className=" form-group">
                        <label for="address">Complete Home Address (house number, street name, city, postal code and Province) <span className='required'>*</span></label>
                        <input  id="address" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAddress(target.value)}
                          type="text" required name="address" value={address} minLength="3" placeholder="Your Answer" />
                    </div>
                    <div className=" form-group">
                        <label for="hear" className='col-3 col-sm-2 col-md-5'>How did you hear about us? <span className='required'>*</span></label>
                        <input id="hear" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setHear(target.value)}
                          type="text" required name="hear" value={hear} minLength="3" placeholder="Your Answer" />
                    </div>
                    <div className=" form-group">
                        <label for="cat" className='col-3 col-sm-2 col-md-5'>What cat are you interested in adopting? <span className='required'>*</span></label>
                        <input id="cat" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setCat(target.value)}
                          type="text" required name="cat" value={cat} minLength="3" placeholder="Your Answer" />
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Are you looking for a male or a female cat/kitten? <span className='required'>*</span></div>
                        <label className='radio-label' for="male">Male<input id="male" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setSex(target.value)}
                          type="radio" required name="sex" value={sex} minLength="3" /></label>
                          <label className='radio-label' for="female">Female<input id="female" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setSex(target.value)}
                          type="radio" required name="sex" value={sex} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Does age matter? <span className='required'>*</span></div>
                        <label className='radio-label' for="ageyes">Yes<input id="ageyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAge(target.value)}
                          type="radio" required name="age" value={age} minLength="3" /></label>
                          <label className='radio-label' for="ageno">No<input id="ageno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAge(target.value)}
                          type="radio" required name="age" value={age} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Do you have a veterinarian that you plan on using for the cat? <span className='required'>*</span></div>
                        <label className='radio-label' for="vetyes">Yes<input id="vetyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setVet(target.value)}
                          type="radio" required name="vet" value={vet} minLength="3"  /></label>
                          <label className='radio-label' for="vetno">No<input id="vetno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setVet(target.value)}
                          type="radio" required name="vet" value={vet} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <label for="vetname">What is the name of the veterinarian or the veterinarian clinic that you plan on using? <span className='required'>*</span></label>
                        <input id="vetname" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setVetName(target.value)}
                          type="text" required name="vetname" value={vetname} minLength="3" placeholder="Your Answer" />
                    </div>
                    <div className=" form-group">
                        <label for="declaw">What are your thoughts on declawing cats? <span className='required'>*</span></label>
                        <input id="declaw" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setDeclaw(target.value)}
                          type="text" required name="declaw" value={declaw} minLength="3" placeholder="Your Answer" />
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Are you currently employed? <span className='required'>*</span></div>
                        <label className='radio-label' for="employedyes">Yes<input id="employedyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setEmployed(target.value)}
                          type="radio" required name="employed" value={employed} minLength="3" /></label>
                          <label className='radio-label' for="employedno">No<input id="employedno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setEmployed(target.value)}
                          type="radio" required name="employed" value={employed} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <label for="work">Are you working from home due to covid and will you be returning to your work location? <span className='required'>*</span></label>
                        <input id="work" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setWork(target.value)}
                          type="text" required name="work" value={work} minLength="3" placeholder="Your Answer" />
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Do you rent or own your home? <span className='required'>*</span></div>
                        <label className='radio-label' for="homeyes">Yes<input id="homeyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setHome(target.value)}
                          type="radio" required name="home" value={home} minLength="3" /></label>
                          <label className='radio-label' for="homeno">No<input id="homeno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setHome(target.value)}
                          type="radio" required name="home" value={home} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>If rent, are you allowed to keep pets? <span className='required'>*</span></div>
                        <label className='radio-label' for="homepetsyes">Yes<input id="homepetsyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setHomePets(target.value)}
                          type="radio" required name="homepets" value={homepets} minLength="3"  /></label>
                          <label className='radio-label' for="homepetsno">No<input id="homepetsno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setHomePets(target.value)}
                          type="radio" required name="homepets" value={homepets} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Do you have access to a vehicle and are you willing to travel to Grenville, QC in order to retrieve the cat/kitten? <span className='required'>*</span></div>
                        <label className='radio-label' for="retrieveyes">Yes<input id="retrieveyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setRetrieve(target.value)}
                          type="radio" required name="retrieve" value={retrieve} minLength="3"  /></label>
                          <label className='radio-label' for="retrieveno">No<input id="retrieveno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setRetrieve(target.value)}
                          type="radio" required name="retrieve" value={retrieve} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Do you have someone to care for the cat/kitten when you travel or are away from home for more than 24 hours? <span className='required'>*</span></div>
                        <label className='radio-label' for="awayyes">Yes<input id="awayyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAway(target.value)}
                          type="radio" required name="away" value={away} minLength="3"  /></label>
                          <label className='radio-label' for="awayno">No<input id="awayno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAway(target.value)}
                          type="radio" required name="away" value={away} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <label for="other">Do you have other pets, kids or roommates? Please provide details. <span className='required'>*</span></label>
                        <input id="other" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setOther(target.value)}
                          type="text" required name="other" value={other} minLength="3" placeholder="Your Answer" />
                    </div>
                    <div className=" form-group">
                        <label for="illpet">What do you plan on doing in the event that the cat becomes ill or develops behavioural issues? Please provide details. <span className='required'>*</span></label>
                        <input id="illpet" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setIllPet(target.value)}
                          type="text" required name="illpet" value={illpet} minLength="3" placeholder="Your Answer" />
                    </div>
                    <div className=" form-group">
                        <label for="allergies">Has anyone in your household experienced allergies or asthma?  <span className='required'>*</span></label>
                        <input id="allergies" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAllergies(target.value)}
                          type="text" required name="allergies" value={allergies} minLength="3" placeholder="Your Answer" />
                    </div>
                    <div className=" form-group">
                        <label for="accessories">Do you own a cat carrier, a litter box/system and food dishes? Please provide details. <span className='required'>*</span></label>
                        <input id="accessories" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAccessories(target.value)}
                          type="text" required name="accessories" value={accessories} minLength="3" placeholder="Your Answer" />
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Should your application be approved and an agreement be completed, an adoption fee will be charged. The adoption fee for a kitten is $350, the adoption fee for an adult cat is $200, and the adoption fee for a senior cat or a humanitarian adoption varies (please contact us for details regarding specific cats.) The adoption fee covers the spay or neuter operation, flea treatments, deworming and vaccinations (as well as booster shots when applicable). <span className='required'>*</span></div>
                        <label className="radio-label-cost" for="cost">I understand<input id="cost" onChange={({ target }) => setCost(target.value)}
                          type="radio" required name="cost" value={cost} minLength="3" placeholder="Your Answer" /></label>
                    </div>
                    <div className="form-group">
                        <label for="message">Do you have any questions about adopting a cat or kitten from Bennie's Rescue? <span className='required'>*</span></label>
                        <input id="message" type="text" className='col-9 col-sm-10 col-md-11' name="message" placeholder="Your Answer" required onChange={({ target }) => setMessage(target.value)}
                            value={message}></input>
                    </div>
                    

                    <div className="form-group form-button">
                        <button className="theme-btn btn-style-one" type="submit">SUBMIT</button>
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

export const Head = () => <title>Adoption Application</title>

