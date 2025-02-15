import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'





export const useFormLogic = () => {
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
  const navigate = useNavigate()





const handleImageUpload = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'your_preset');

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  );
  
  const data = await response.json();
  return data.secure_url;
};



 

  const onSubmit = (data) => {
  if (data.name && data.email) {
    localStorage.setItem('formData', JSON.stringify(data))
    navigate('/TicketReady/Hero')
  }
}

  

 

  // Load saved form data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach(key => {
        setValue(key, parsedData[key]);
      });
    }
  }, [setValue]);

  

  //Edit local storage for pictture upload
  

  // Save form data on input change
  const handleInputChange = (e) => {
    const formData = JSON.parse(localStorage.getItem('formData') || '{}');
    formData[e.target.name] = e.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  const handleBookAnother = () => {
    // Clear localStorage
    localStorage.removeItem('formData');
  localStorage.removeItem('imagePreview');
  localStorage.removeItem('avatarUrl');
  reset();
  // setImagePreview(null);
  window.location.reload();
  };


  const formRules = {
    name: {
      ...register("name", {
        required: "Name is required",
        minLength: {
          value: 2,
          message: "Name must be at least 2 characters"
        },
        onChange: handleInputChange,
        tabIndex: 0,
        "aria-requireed": "true",
        "aria-describedby": "name-error name-hint"
      })
    },
    email: {
      ...register("email", {
        required: "Email is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address"
        },
        onChange: handleInputChange,
        tabIndex: 0,
        "aria-requireed": "true",
        "aria-describedby": "email-error email-hint"

      })
    },
    message: {
      ...register("message", {
        
        maxLength: {
          value: 200,
          message: "Maximum Length is 200 characters"
        },
        onChange: handleInputChange,
        tabIndex: 0,
        
        "aria-describedby": "message-error message-hint"
      }) 

      
    },
    avatarUrl: {
      ...register("avatarUrl", {
        
        onChange: handleInputChange,
        tabIndex: 0
      })
    }
  };

  const handleKeyPress = (e) =>{
    if(e.key === "Enter"){
      
      handleSubmit(onSubmit)(e);
    }
  }

 
  

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    formRules,
    handleBookAnother,
    handleKeyPress,
    handleImageUpload,
  
   

  };
};

