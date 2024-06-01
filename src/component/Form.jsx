import React from 'react';
import '../index.css';

const Form = () => {
  return (
    <div>
      <div className="form-head">
        <div className="form-head-content">FILL THE FORM BELOW TO ENQUIRE</div>
        </div>
      <div className='form1'>
        <form className='form2'>
          <div className='form3 '>
            <label className='block text'>*Enter your name</label>
            <input type="text"  className='box' placeholder='Eg. Aneesha Mehra' />
          </div>

          <div className='form3 '>
            <label className='block text mt-2'>*Enter your Whatsapp Number</label>
            <div className="flex">
              <select className="box2">
                <option value="+91" >+91</option>
              </select>
              <input type="text" placeholder="Eg. 0000000000" className="box" />
            </div>
          </div>

          <div className='form3 '>
           <label className="block text">*Select your profession</label>
            <select className="box1">
              <option value=" Choose" className='choose'>Choose the most relevant option</option>
            </select>
          </div>

          <div className='form3 '>
           <label className="block text">*Select your goal</label>
            <select className="box1">
              <option value=" Choose" className='choose'>Choose the most relevant option</option>
            </select>
          </div>

          <div className='form3 '>
           <label className="block text">*Select your city</label>
            <select className="box1">
              <option value=" Choose" className='choose'>Choose the most relevant option</option>
            </select>
          </div>
          
          <div className="submit">
            <button className='sub'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
