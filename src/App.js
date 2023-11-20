import React from "react";
import './index.css'

function App() {
  const handleSubmit = () => {
    alert("Submitted")
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor='fname'>First Name</label> <br/>
        <input type='text' name='fname' required/>
        </div>
        <div>
        <label htmlFor='lname'>Last Name</label> <br/>
        <input type='text' name='lname' required/>
        </div>
        <div>
        <label htmlFor='address'>Address</label> <br/>
        <textarea rows={5} cols={25} name='address' required/>
        </div>
        <div>
        <label htmlFor='mail'>E-Mail ID</label> <br/>
        <input type='email' name='mail'required/>
        </div>
        <div>
        <label htmlFor='pwd'>Password</label> <br/>
        <input type='password' name='pwd' required/>
        </div>
        <div>
        <label htmlFor='age'>Age</label> <br/>
        <input type='number' name='age' min={0} required/>
        </div>
        <div>
        <label>Select Favourite Color</label> <br/>
        <input type='checkbox' name='red'/>
        <label>Red</label>
        <input type='checkbox' name='green'/>
        <label>Green</label>
        <input type='checkbox' name='blue'/>
        <label>Blue</label>
        <input type='checkbox' name='lime'/>
        <label>Lime</label>
        </div>
        <div>
          <label htmlFor="radio_button">Select Gender</label> <br/>
          <input type="radio" name="radio_button"/>Male
          <input type="radio" name="radio_button"/>Female          
        </div>
        <div>
          <label name="country">Select Your Country</label><br/>
          <select name="country" id="country">
            <option value="Spain">Spain</option>
            <option value="India">India</option>
            <option value="US">US</option>
          </select>
        </div>
        <div>
          <label htmlFor="birthdate">Select your Birth Date</label><br/>
          <input type="datetime-local" name="birthdate" required/>
        </div>
        <div>
          <label htmlFor="colorpicker">Select a Color</label><br/>
          <input type="color" name="colorpicker" required/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
