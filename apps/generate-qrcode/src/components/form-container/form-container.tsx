import React, { useState } from 'react';
import QRContainer from '../qr-container/qr-container';

import './form-container.scss';

/* eslint-disable-next-line */
export interface FormContainerProps {}

export const FormContainer = (props: FormContainerProps) => {
  const [text, setText] = useState('');

  return (
    <div className="flex flex-wrap space-y-3 flex-auto text-center shadow rounded bg-white p-4">
      <div className="w-full mb-4">
        <input
          dir="rtl"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="ادخل النص لتحويله الى باركود"
          type="text"
          name="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>

      <QRContainer text={text} clearText={() => setText('')} />
    </div>
  );
};

export default FormContainer;
