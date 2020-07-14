import React from 'react'
import { useState } from 'react'

export default function Contact() {

    const[data,setData]=useState({
        fullname:'',
        phone:'',
        email:'',
        message:'' 
    })
    const InputEvent=(e)=>{
        const{name,value}=e.target
        setData((oldItems)=>{
            return{
                          ...oldItems,
                          [name]:value
            }
            

        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert(`My name is ${data.fullname} my contact number is ${data.phone} my email is ${data.email} and here is what i want to say ${data.message}`)  
    }
    return (
        <div>
                <div className='my-5'>
                      <h1 className='text-center'>Contact Us</h1>
                </div>

                <div className='container contact_div'>
                       <div className='row'>
                               <div className='col-md-6 col-10 mx-auto'>
                               <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1"> Full Name:</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange={InputEvent} placeholder="Enter Your name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Phone:</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={InputEvent} placeholder="Enter Your number"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                    </div>
 
  
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='message' value={data.message} onChange={InputEvent}></textarea>
                                    </div>

                                    <div className='col-12'>
                                                <button class="btn btn-outline-primary mt-2" type="submit">Submit form</button>
                                    </div>
                                    </form>
                               </div>
                       </div>
                </div>
        </div>
    )
}
