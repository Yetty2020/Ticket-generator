import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { MdError } from 'react-icons/md'
import { useFormLogic } from './formLogic'
import { useNavigate } from "react-router-dom"


const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  )
}
InputError.propTypes = {
  message: PropTypes.string.isRequired
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}

const AttendeeForm = () => {
  const { handleSubmit, onSubmit: handleFormSubmit, errors, formRules, handleKeyPress } = useFormLogic();
  const navigate = useNavigate()

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col gap-6 px-[24px] border border-border-color rounded-[24px]'>
      <div className="flex flex-col gap-[8px] text-white">
      <label htmlFor="name">Enter Your Name*:</label>
        <input 
          type="text"
          placeholder="Enter your name"
          {...formRules.name}
          onKeyDown={handleKeyPress}
          className='bg-primary-color rounded-[6px] p-[12px]  border-2 border-border-color'
        />
        {errors.name && <InputError message={errors.name.message} />}
      </div>

      <div className="flex flex-col gap-[8px] text-white">
      <label htmlFor="email">Email*:</label>
        <input 
          type="email"
          placeholder="Enter your email"
          {...formRules.email}
          onKeyDown={handleKeyPress}
          className='bg-primary-color rounded-[6px] p-[12px]  border-2 border-border-color'
          
        />
        {errors.email && <InputError message={errors.email.message} />}
      </div>
      
      <div className="flex flex-col gap-[8px] text-white">
        <label htmlFor="">special Message?</label>
        <textarea
          placeholder="You have a special message? Leave it."
          {...formRules.message}
          onKeyDown={handleKeyPress}
          className='bg-primary-color rounded-[6px] p-[12px]  border-2 border-border-color'
        />
        {errors.message && <InputError message={errors.message.message} />}
      </div>

      <div className="flex flex-col lg:flex-row justify-between flex-1 text-white gap-6">
      <button type="button" onClick={()=>navigate("/")} className="border-2 border-border-color text-border-color rounded-[12px] px-[12px] py-[15px] w-full
     // Hover state
        hover:bg-hover-color
        hover:text-white
        
        // Active state
        active:bg-selected-color active:scale-95 font-bold
        ">Back</button>
      <button type='submit' className="w-full bg-border-color rounded-[12px] px-[12px] py-[15px]
    // Hover state
        hover:bg-hover-color
        hover:text-white
        
        // Active state
        active:bg-selected-color active:scale-95 font-bold">Get Your Free Ticket</button>
      </div>
      

     
    </form>
  );
};

export default AttendeeForm;
