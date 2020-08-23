import React, { useState } from 'react';

import './form.scss';

const mobileNumberErrorMessage = "رقم الجوال يجب ان لا يقل ٩ ارقام ولا يزيد عن ١٤ رقم";
/* eslint-disable-next-line */
export interface FormProps {}

export const Form = (props: FormProps) => {
  const [message, setMessage] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const [mobileNumberError,setMobileNumberError] = useState(false);
  /**
   *
   * @param mobileNo
   * Whatsapp Api https://wa.me/<number>/?text=urlencodedtext
   */
  const openChat = () => {
    const text = encodeURI(message);
    const url = `https://wa.me/${mobileNumber}/?text=${text}`;
    // open url with new tab
    window.open(url, '_blank');
  };

  const isNumberValid = (number) => {
    const pattern = /^[0-9]{9,14}$/;
    const isValid = new RegExp(pattern).test(number);
    console.log(isValid)
    if(!isValid){
      return false;
    }
    setMobileNumberError(false);
    return true;
  }
  const submit = () => {
    setError('');
    setMobileNumberError(false);

    if(!isNumberValid(mobileNumber)){
      setMobileNumberError(true);
        return ;
    }else if (!message){
      setError('يجب كتابة نص للرسالة');
      return
    }
      openChat();
  };
  return (
    <div className="text-center shadow rounded bg-white p-4" style={{height:'410px'}}>
      <div className="w-full mb-4">
        <input
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="9665xxxxxxxx"
          type="number"
          name="number"
          value={mobileNumber}
          onChange={(event) => {setMobileNumber(event.target.value); setMobileNumberError(false)}}
        />
        <p className='text-red-500 m-0 p-2' style={{height:'30px'}}>
        {mobileNumberError && mobileNumberErrorMessage}
        </p>
      </div>

      <div className="w-full mb-4">
        <textarea
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="النص هنا"
          name="message"
          value={message}
          onChange={(event) => {setMessage(event.target.value); setError('')}}
          rows={8}
        >
        </textarea>
       <p className='w-full text-red-500 p-2 my-0 text-center' style={{height:'30px'}}>{error && error}</p>
      </div>

      <div className="w-full mb-2">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 mt-3 rounded"
          onClick={() => submit()}
        >
          ارسال
        </button>

      </div>

    </div>
  );
};

export default Form;
