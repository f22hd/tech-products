import React, { useState } from 'react';
import { makeRequest } from '../../services/service';
import './form.scss';

/* eslint-disable-next-line */
export interface FormProps {}

export const Form = (props: FormProps) => {
  const [file, setFile] = useState(null);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setFile(file);
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(file);
    makeRequest(file);
  };

  return (
    <div className="bg-white rounded shadow p-5">
      <form onSubmit={submit}>
        <div className="my-4">
          <label className="block text-gray-700 text-sm  mb-2">
            Enter your file
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            name="file"
            accept="video/*"
            onChange={onFileChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 mt-3 rounded"
        >
          Convert
        </button>
      </form>
    </div>
  );
};

export default Form;
