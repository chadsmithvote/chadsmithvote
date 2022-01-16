import React from 'react';
import { useForm } from '@formspree/react';
import Title from '../Title/Title';


function ContactForm() {
  const [state, handleSubmit] = useForm("xjvlgvzq");

   if (state.succeeded) {
    return window.location.href = 'https://www.paypal.com/donate/?hosted_button_id=R8E4XUAHHXV42'
  }


  return (
      <form onSubmit={handleSubmit}>
      <fieldset id="fs-frm-inputs">
      <section id="form-group">
<div className="contact-form">

 <div className="project-wrapper">
          <Title title="Donate" />
</div>
<p> Checks can be mailed to the candidate's campaign committee: </p> <p><b> Friends of Chad Smith at PO Box 735 Dunedin, FL  34697</b>. </p> <p> Contributions cannot exceed $1,000 per election for individuals and businesses.</p>  

    <div className = "dname">
    <label htmlFor="first-name"></label>
     <input type="text" name="fname" id="first-name" placeholder="First Name" required={true}/>

    
    <label htmlFor="last-name"></label>
     <input type="text" name="lname" id="last-name" placeholder="Last Name" required={true}/>
    

    < div className = "demail"> 
     <label htmlFor="email-address"></label>
      <input type="email" name="_replyto" id="email-address" placeholder="Email Address" required={true}/>
   
</div>
    <div className= "daddress">
    <label htmlFor="street-address"></label>
      <input type="text" name="street" id="street-address" placeholder="Street Address" required={true}/>
      
        <label htmlFor="street-address2"></label>
      <input type="text" name="street" id="street-address2" placeholder="Street Address 2" required=""/>
      
</div>
<div className="locale">
    <label htmlFor="city"></label>

    <div className= "dcity" >
      <input type="text" name="city" placeholder="City" required={true}/>
     
</div>
  <label htmlFor="state"></label>
    <div classname = "dstate">
        <select name="state" required={true} >
          <option value="" selected="" disabled="">State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
      </select>
</div>
  <label htmlFor="zip"></label>
<div className= "dzip" >
        <input type="text" name="postal-code" placeholder="12345" required={true} />
     
</div>

</div>
<input type="hidden" name="_gotcha"/>
  <label htmlFor="occupation"></label>
    <div className = "djob" >
        <input type="text" name="occupation" id="occupation" placeholder="Occupation" required={true} />
</div>
</div>
          </div>
            <label htmlFor="submit"></label>
    <span className= "cta-btn--donate">

     <button type="submit" disabled={state.submitting}>
         Donate
        </button>

     </span>

          </section>
     </fieldset>


</form>
  );
};

function App() {
  return (
    <ContactForm />
  );
}
export default App;


