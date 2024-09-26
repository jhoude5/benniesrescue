import React, { useState } from 'react'; 
import Header from '../../components/header';
import '../../sass/styles.scss';
import Footer from '../../components/footer';
import Volunteer from '../../components/volunteer';


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
  const [transport, setTransport] = useState("");
  


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
            document.querySelector('.success').innerText =
                "Thank you for reaching out to us, we'd get back to you shortly.";
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
            setTransport('');
        })
        .catch((error) => document.querySelector('.error').innerText = 'Something went wrong, pls try again.');
};
  return (
    <main>
      <Header />
      <div className="container">
            <h1>Foster Application</h1>
            <form className='foster-application-form' name="foster-application" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} id="contact-form">
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div className="row clearfix">
                    <div className="form-group">
                        <label for="email">Email <span className='required'>*</span></label>
                        <input id="email" className='col-9 col-sm-10 col-md-11' type="email"
                            name="email" value={email} required
                            onChange={({ target }) => setEmail(target.value)} placeholder="Your Answer" />
                    </div>
                    <div className=" form-group">
                        <label for="name">First and Last Name <span className='required'>*</span></label>
                        <input id="name" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setName(target.value)}
                          type="text" required name="name" value={name} minLength="3" placeholder="Your Answer" />
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Are you 18 years of age or older? <span className='required'>*</span></div>
                        <label className='radio-label' for="ageyes">Yes<input id="ageyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAge(target.value)}
                          type="radio" required name="age" value={age} minLength="3"  /></label>
                          <label  className='radio-label' for="ageno">No<input id='ageno' className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAge(target.value)}
                          type="radio" required name="age" value={age} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <label for="phone">Phone Number <span className='required'>*</span></label>
                        <input id="phone" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setPhone(target.value)}
                          type="text" required name="phone" value={phone} minLength="3" placeholder="Your Answer" />
                    </div>
                    <div className=" form-group">
                        <label for="address">Full Address (street address, municipality/city, province, postal code) <span className='required'>*</span></label>
                        <input id="address" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAddress(target.value)}
                          type="text" required name="address" value={address} minLength="3" placeholder="Your Answer" />
                    </div>
                    <div className=" form-group">
                        <label for="why">Why do you want to foster cats? <span className='required'>*</span></label>
                        <input id="why" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setWhy(target.value)}
                          type="text" required name="why" value={why} minLength="3" placeholder="Your Answer" />
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Do you own or rent your home? <span className='required'>*</span></div>
                        <label for="homerent" className='radio-label'>Rent<input id="homerent" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setHome(target.value)}
                          type="radio" required name="home" value={home} minLength="3" /></label>
                          <label for="homeown" className='radio-label'>Own<input id="homeown" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setHome(target.value)}
                          type="radio" required name="home" value={home} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>If you rent your home, does the owner of the property allow animal fostering? <span className='required'>*</span></div>
                        <label className='radio-label' for="allowyes">Yes<input id="allowyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAllow(target.value)}
                          type="radio" required name="allow" value={allow} minLength="3" /></label>
                          <label className='radio-label' for="allowno">No<input id="allowno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAllow(target.value)}
                          type="radio" required name="allow" value={allow} minLength="3" /></label>
                          <label className='radio-label' for="allowna">Not Applicable<input id="allowna" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAllow(target.value)}
                          type="radio" required name="allow" value={allow} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Do you or any other individuals smoke inside the home? <span className='required'>*</span></div>
                        <label className='radio-label' for="smokeyes">Yes<input id="smokeyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setSmoke(target.value)}
                          type="radio" required name="smoke" value={smoke} minLength="3" /></label>
                          <label className='radio-label' for="smokeno">No<input id="smokeno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setSmoke(target.value)}
                          type="radio" required name="smoke" value={smoke} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Do you currently own any pets?<span className='required'>*</span></div>
                        <label className='radio-label' for="yescats">Yes, cat(s)<input id="yescats" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setOtherPets(target.value)}
                          type="radio" required name="otherpets" value={otherpets} minLength="3"  /></label>
                          <label className='radio-label' for="yesdogs">Yes, dog(s)<input id="yesdogs" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setOtherPets(target.value)}
                          type="radio" required name="otherpets" value={otherpets} minLength="3"  /></label>
                          <label className='radio-label' for="ownboth">Both cat(s) and dog(s)<input id="both" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setOtherPets(target.value)}
                          type="radio" required name="otherpets" value={otherpets} minLength="3"  /></label>
                          <label className='radio-label' for="nopets">I do not own any pets<input id="nopets" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setOtherPets(target.value)}
                          type="radio" required name="otherpets" value={otherpets} minLength="3"  /></label>
                          <label className='radio-label' for="other">Other<input id="other" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setOtherPets(target.value)}
                          type="radio" required name="otherpets" value={otherpets} minLength="3"  /></label>
                    </div>


                    <div className=" form-group">
                        <div className='radio-option'>If you currently own pets, are you able and willing to isolate foster animals from family pets within the home, as required? This includes a mandatory 7 day quarantine period for new fosters.</div>
                        <div>During the initial quarantine period, the fosterer must notify Bennie's Rescue of any sign of parasite, infection or disease.</div>
                        <label className='radio-label' for="quarantineyes">Yes<input id="quarantineyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setQuarantine(target.value)}
                          type="radio" required name="quarantine" value={quarantine} minLength="3"  /></label>
                          <label className='radio-label' for="quarantineno">No<input id="quarantineno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setQuarantine(target.value)}
                          type="radio" required name="quarantine" value={quarantine} minLength="3"  /></label>
                          <label className='radio-label' for="quarantinena">Not Applicable<input id="quarantinena" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setQuarantine(target.value)}
                          type="radio" required name="quarantine" value={quarantine} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Can you ensure that existing animals in the foster home are spayed or neutered, are up to date on all vaccinations and are free of any known parasites or diseases?<span className='required'>*</span></div>
                        <label className='radio-label' for="vaccinationsyes">Yes<input id="vaccinationsyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setVaccination(target.value)}
                          type="radio" required name="vaccinations" value={vaccinations} minLength="3"  /></label>
                          <label className='radio-label' for="vaccinationsno">No<input id="vaccinationsno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setVaccination(target.value)}
                          type="radio" required name="vaccinations" value={vaccinations} minLength="3"  /></label>
                          <label className='radio-label' for="vaccinationsna">Not Applicable<input id="vaccinationsna" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setVaccination(target.value)}
                          type="radio" required name="vaccinations" value={vaccinations} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Do you have access to transportation or are you able to advise Bennie's Rescue of any required transportation assistance as soon as it is known?<span className='required'>*</span></div>
                        <label className='radio-label' for="transportyes">I have access to a vehicle<input id="transportyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setTransport(target.value)}
                          type="radio" required name="transport" value={transport} minLength="3" /></label>
                          <label className='radio-label' for="transportno">I do not have access to a vehicle, but I will advise Bennie's Rescue of any required transportation assistance as soon as it is know.<input id="transportno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setTransport(target.value)}
                          type="radio" required name="transport" value={transport} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='checkbox-option'>Do you currently share a home with individuals under the age of 18?<span className='required'>*</span></div>
                        <label className='checkbox-label' for="childrenunderfive">Yes, I share a home with individual(s) under 5 years of age<input id="childrenunderfive" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setChildren(target.value)}
                          type="checkbox" required name="children" value={children} minLength="3" /></label>
                          <label className='checkbox-label' for="childrenbetweenfiveandten">Yes, I share a home with indivudual(s) between the ages of 5 and 10<input id="childrenbetweenfiveandten" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setChildren(target.value)}
                          type="checkbox" required name="children" value={children} minLength="3" /></label>
                          <label className='checkbox-label' for="childrenbetweentenandeighteen">Yes, I share a home with individual(s) between the ages of 10 and 18<input id="childrenbetweentenandeighteen" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setChildren(target.value)}
                          type="checkbox" required name="children" value={children} minLength="3" /></label>
                          <label className='checkbox-label' for="childrenno">No<input id="childrenno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setChildren(target.value)}
                          type="checkbox" required name="children" value={children} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Do you currently share a home with any other adults?<span className='required'>*</span></div>
                        <label className='radio-label' for="otheradultsyes">Yes<input id="otheradultsyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAdults(target.value)}
                          type="radio" required name="otheradults" value={otheradults} minLength="3" /></label>
                          <label className='radio-label' for="otheradultsno">No<input id="otheradultsno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAdults(target.value)}
                          type="radio" required name="otheradults" value={otheradults} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Are the other members of the household aware of and do they agree to the commitment involved with fostering?<span className='required'>*</span></div>
                        <label className='radio-label' for="otheradultsawareyes">Yes<input id="otheradultsawareyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAdultsAware(target.value)}
                          type="radio" required name="otheradultsaware" value={otheradultsaware} minLength="3" /></label>
                          <label className='radio-label' for="otheradultsawareno">No<input id="otheradultsawareno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAdultsAware(target.value)}
                          type="radio" required name="otheradultsaware" value={otheradultsaware} minLength="3" /></label>
                          <label className='radio-label' for="otheradultsawarena">Not Applicable<input id="otheradultsawarena" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAdultsAware(target.value)}
                          type="radio" required name="otheradultsaware" value={otheradultsaware} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Are any members of the household allergic to cats?<span className='required'>*</span></div>
                        <label className='radio-label' for="allergicyes">Yes<input id="allergicyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAllergic(target.value)}
                          type="radio" required name="allergic" value={allergic} minLength="3" /></label>
                          <label className='radio-label' for="allergicno">No<input id="allergicno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAllergic(target.value)}
                          type="radio" required name="allergic" value={allergic} minLength="3" /></label>
                          <label className='radio-label' for="allergicna">Not Applicable<input id="allergicna" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAllergic(target.value)}
                          type="radio" required name="allergic" value={allergic} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Do you have or do you plan on acquiring a litter box, food bowls, a scale that measures grams and ounces/pounds (such as a kitchen scale) and an animal carrier?<span className='required'>*</span></div>
                        <div>(Bennie's Rescue may provide animal care supplies if available.)</div>
                        <label className='radio-label' for="accessoriesyes">Yes<input id="accessoriesyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAccessories(target.value)}
                          type="radio" required name="accessories" value={accessories} minLength="3"  /></label>
                          <label className='radio-label' for="accessoriesno">No<input id="accessoriesno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAccessories(target.value)}
                          type="radio" required name="accessories" value={accessories} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <div className='checkbox-option'>Do you want to foster adult cats, senior cats, mother cats with kittens, kittens no longer with their mother, or cat(s) requiring special care (socialising or medical care)?<span className='required'>*</span></div>
                        <label className='checkbox-label' for="typeadult">Adult cats<input id="typeadult" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setType(target.value)}
                          type="checkbox" required name="type" value={type} minLength="3" /></label>
                          <label className='checkbox-label' for="typesenior">Senior cats<input id="typesenior" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setType(target.value)}
                          type="checkbox" required name="type" value={type} minLength="3" /></label>
                          <label className='checkbox-label' for="typemotherkitten">Mother cat with their kitten(s)<input id="typemotherkitten" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setType(target.value)}
                          type="checkbox" required name="type" value={type} minLength="3" /></label>
                          <label className='checkbox-label' for="kitten">Kitten(s) no longer with their mother<input id="kitten" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setType(target.value)}
                          type="checkbox" required name="type" value={type} minLength="3" /></label>
                          <label className='checkbox-label' for="catspecialcare">Cat(s) requiring special care<input id="catspecialcare" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setType(target.value)}
                          type="checkbox" required name="type" value={type} minLength="3" /></label>
                          <label className='checkbox-label' for="any">Any of the above<input id="any" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setType(target.value)}
                          type="checkbox" required name="type" value={type} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Do you want to foster animals indefinitely, during "kitten season" or only until you find an animal to adopt?<span className='required'>*</span></div>
                        <label className='radio-label' for="longterm">Long-Term<input id="longterm" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setLengthType(target.value)}
                          type="radio" required name="lengthtype" value={lengthtype} minLength="3"/></label>
                          <label className='radio-label' for="kittenseason">During "kitten season" (May to October)<input id="kittenseason" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setLengthType(target.value)}
                          type="radio" required name="lengthtype" value={lengthtype} minLength="3"/></label>
                          <label className='radio-label' for="untiladopt">Until I find an animal to adopt<input id="untiladopt" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setLengthType(target.value)}
                          type="radio" required name="lengthtype" value={lengthtype} minLength="3"/></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Are you interested in fostering animals short term (animals necessitating short-term medical treatments requiring quarantine, in emergency situations or new intake animals requiring quarantine - normally 2-3 weeks) or are you interested in fostering animals long term (from intake until adoption - normally 12-16 weeks)?</div>
                        <label className='radio-label' for="short">Short Term (2-3 weeks)<input id="short" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setShortLong(target.value)}
                          type="radio"  name="shortlong" value={shortlong} minLength="3"  /></label>
                          <label className='radio-label' for="long">Long Term (12-16 weeks)<input id="long" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setShortLong(target.value)}
                          type="radio"  name="shortlong" value={shortlong} minLength="3"  /></label>
                          <label className='radio-label' for="both">Both<input id="both" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setShortLong(target.value)}
                          type="radio"  name="shortlong" value={shortlong} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Do you plan on crating the animal(s) or allowing them to free roam in their designated space?<span className='required'>*</span></div>
                        <label className='radio-label' for="fulltime">Crating full time<input id="fulltime" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setCrating(target.value)}
                          type="radio" required name="crating" value={crating} minLength="3" /></label>
                          <label className='radio-label' for="nighttime">Crating at night only and allowing free roam during the day<input id="nighttime" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setCrating(target.value)}
                          type="radio" required name="crating" value={crating} minLength="3" /></label>
                          <label className='radio-label' for="roamfree">Allowing free roam at all times (within their designated space in the foster home)<input id="roamfree" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setCrating(target.value)}
                          type="radio" required name="crating" value={crating} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Are you willing and able to socialize and train the animal and advise Bennie's Rescue of any socialization or behavioral issues?<span className='required'>*</span></div>
                        <div>(This may include litter training, accustomizing the animal to human interaction, etc.)</div>
                        <label className='radio-label' for="socialyes">Yes<input id="socialyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setSocialize(target.value)}
                          type="radio" required name="socialize" value={socialize} minLength="3" /></label>
                          <label className='radio-label' for="socialno">No<input id="socialno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setSocialize(target.value)}
                          type="radio" required name="socialize" value={socialize} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Are you willing and able to provide basic medical attention to the animal if the animal requires the administration of medications or other special medical attention as recommended by a veterinarian?<span className='required'>*</span></div>
                        <div>This may include oral medications, eye/ear drops/cleaning, flea medications, or other medical treatments. This does not include veterenarian visits, which are coordinated, handled and paid for by Bennie's Rescue.</div>
                        <label className='radio-label' for="medicalyes">Yes<input id="medicalyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setMedical(target.value)}
                          type="radio" required name="medical" value={medical} minLength="3"  /></label>
                          <label className='radio-label' for="medicalno">No<input id="medicalno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setMedical(target.value)}
                          type="radio" required name="medical" value={medical} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Are you willing and able to be shown how to provide sub cutaneous fluids to the animal?<span className='required'>*</span></div>
                        <div>This includes a needle injection under the animal's skin. (If you are not comfortable with this, we will provide you with a foster animal who does not require sub cutaneous fluids.)</div>
                        <label className='radio-label' for="medicalassistyes">Yes<input id="medicalassistyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setMedicalAssist(target.value)}
                          type="radio" required name="medicalassist" value={medicalassist} minLength="3"  /></label>
                          <label className='radio-label' for="medicalassistno">No<input id="medicalassistno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setMedicalAssist(target.value)}
                          type="radio" required name="medicalassist" value={medicalassist} minLength="3"  /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Are you willing and able to weigh the animal using a scale such as a kitchen scale) if requested by Bennie's Rescue?<span className='required'>*</span></div>
                        <div> If fostering kittens, the fosterer must weigh the kittens using a small animal or kitchen scale and must record each kitten’s weight on a daily basis for the first 4 weeks of life, and then on a weekly basis thereafter. The fosterer must provide weights for all kittens or cats in their care to Bennie's Rescue upon request.</div>
                        <label className='radio-label' for="scaleyes">Yes<input id="scaleyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setScale(target.value)}
                          type="radio" required name="scale" value={scale} minLength="3" /></label>
                          <label className='radio-label' for="scaleno">No<input id="scaleno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setScale(target.value)}
                          type="radio" required name="scale" value={scale} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Do you currently foster animals for any other rescue organisation or do you plan to during the time period you would be fostering for Bennie's Rescue?<span className='required'>*</span></div>
                        <label className='radio-label' for="otherfosteryes">Yes<input id="otherfosteryes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setOtherFoster(target.value)}
                          type="radio" required name="otherfoster" value={otherfoster} minLength="3" /></label>
                          <label className='radio-label' for="otherfosterno">No<input id="otherfosterno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setOtherFoster(target.value)}
                          type="radio" required name="otherfoster" value={otherfoster} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Has any member of the household been convicted of an animal welfare law violation such as neglect, cruelty or abandonment, or any other charge related to animal welfare?<span className='required'>*</span></div>
                        <label className='radio-label' for="welfareyes">Yes<input id="welfareyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setWelfare(target.value)}
                          type="radio" required name="welfare" value={welfare} minLength="3"/></label>
                          <label className='radio-label' for="welfareno">No<input id="welfareno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setWelfare(target.value)}
                          type="radio" required name="welfare" value={welfare} minLength="3"/></label>
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Are you willing and able to take a foster animal into your home with 48 hours notice?<span className='required'>*</span></div>
                        <label className='radio-label' for="shortnoticeyes">Yes<input id="shortnoticeyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setShortNotice(target.value)}
                          type="radio" required name="shortnotice" value={shortnotice} minLength="3" /></label>
                          <label className='radio-label' for="shortnoticeno">No<input id="shortnoticeno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setShortNotice(target.value)}
                          type="radio" required name="shortnotice" value={shortnotice} minLength="3" /></label>
                          <label className='radio-label' for="shortnoticebut">No, but I will be ready to take a foster animal on a specific date.<input id="shortnoticebut" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setShortNotice(target.value)}
                          type="radio" required name="shortnotice" value={shortnotice} minLength="3" /></label>
                    </div>
                    <div className=" form-group">
                        <label for="date">If you are not willing or able to take a foster animal into your home within 48 hours, what is the delay you need to take in a foster animal?</label>
                        <input id="date" className='col-9 col-sm-10 col-md-3' onChange={({ target }) => setDate(target.value)}
                          type="date"  name="date" value={date} minLength="3"  />
                    </div>
                    <div className=" form-group">
                        <div className='radio-option'>Do you understand and acknowledge that Bennie's Rescue cannot and does not make any guarantees as to the health, temperament, mental disposition, and training of rescued animals, and that fostering animal(s) is at your own risk?<span className='required'>*</span></div>
                        <label className='radio-label' for="acknowledgeyes">Yes<input id="acknowledgeyes" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAcknowledge(target.value)}
                          type="radio" required name="acknowledge" value={acknowledge} minLength="3"  /></label>
                          <label className='radio-label' for="acknowledgeno">No<input id="acknowledgeno" className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setAcknowledge(target.value)}
                          type="radio" required name="acknowledge" value={acknowledge} minLength="3"  /></label>
                    </div>
                    <div className="form-group">
                        <label for="message">Do you have any questions about fostering for Bennie's Rescue? </label>
                        <input id="message" type="text"  className='col-9 col-sm-10 col-md-11' name="message" placeholder="Your Answer"  onChange={({ target }) => setMessage(target.value)}
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
export const Head = () => <title>Foster Application</title>

