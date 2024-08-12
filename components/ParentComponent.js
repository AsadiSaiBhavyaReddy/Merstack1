import React, { useState } from 'react'; 
import Home from './Home'; 
 
const ParentComponent = () => { 
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '' 
  }); 
 
  const [isSubmitted, setIsSubmitted] = useState(false); 
 
  const handleFormChange = (e) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
  }; 
 
  const handleFormSubmit = (e) => { 
    e.preventDefault(); 
    setIsSubmitted(true); 
  }; 
 
  return ( 
    <div> 
      <form onSubmit={handleFormSubmit}> 
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleFormChange} 
        /> 
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleFormChange} 
        /> 
        {/* ... other form fields ... */} 
        <button type="submit">Submit</button> 
      </form> 
      {isSubmitted && <Home formData={formData} />} 
    </div> 
  ); 
}; 
 
export default ParentComponent;