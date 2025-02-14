import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'



export const useFormLogic = () => {
  const { register, handleSubmit, formState: { errors }, setValue, reset , watch} = useForm();
  const navigate = useNavigate()

  const [isDragging, setIsDragging] = useState(false);

  

  

  // Add state for preview
  const [imagePreview, setImagePreview] = useState(null);
  
  // Watch the avatarUrl field
  const avatarUrl = watch('avatarUrl');

  // Update preview when avatarUrl changes
  useEffect(() => {
    if (avatarUrl) {
      setImagePreview(avatarUrl);
    }
  }, [avatarUrl]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Show local preview immediately
      const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      // Save preview to localStorage
      localStorage.setItem('imagePreview', reader.result);
    };
    reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'YOUR_UPLOAD_PRESET');

      const response = await fetch(
        'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
    setValue('avatarUrl', data.secure_url);
    // Save Cloudinary URL to localStorage
    localStorage.setItem('avatarUrl', data.secure_url);
    }
  };

  const onSubmit = (data) => {
  if (data.name && data.email) {
    localStorage.setItem('formData', JSON.stringify(data))
    navigate('/TicketReady/Hero')
  }
}

  // Modify handleDrop to include preview
  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      // Show local preview immediately
      const reader = new FileReader();
      reader.onloadend = () => {
        const previewUrl = reader.result;
        setImagePreview(previewUrl);
        localStorage.setItem('imagePreview', previewUrl);
        setValue('avatarUrl', previewUrl);
        localStorage.setItem('avatarUrl', previewUrl);
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'YOUR_UPLOAD_PRESET');

      const response = await fetch(
        'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
      setValue('avatarUrl', data.secure_url);
    }
  };

  // Add this to your useEffect to load the saved image
useEffect(() => {
  const savedImagePreview = localStorage.getItem('imagePreview');
  const savedAvatarUrl = localStorage.getItem('avatarUrl');
  
  if (savedImagePreview) {
    setImagePreview(savedImagePreview);
  }
  if (savedAvatarUrl) {
    setValue('avatarUrl', savedAvatarUrl);
  }
}, [setValue]);

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
  setImagePreview(null);
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
        required: "Image is required",
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
  
    handleDrop,
    isDragging,
    imagePreview

  };
};

