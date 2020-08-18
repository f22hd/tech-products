import React, { useState, useEffect } from 'react';
import Unit from '../unit/unit';
import Result from '../result/result';
import './calc-form.scss';

const initialFinalResult = {
  itemsPerBigItem: 0,
  bigItemsNeeded: 0,
  extraItems: 0,
  totalExtraItems: 0,
  finalPrice: 0,
};
/* eslint-disable-next-line */
export interface CalcFormProps {}

export const CalcForm = (props: CalcFormProps) => {
  /**
 * آلة حاسبة للحديد 
طول الحبة الواحدة = ١٢ م
كم سعر الحبة الكاملة = 270 ريال
كم طول الحبة اللي تحتاجها = 3.65
كم حبة كاملة تحتاجها : طول الحبة الكاملة / طول الحبة اللي احتاجها ... بشرط ان لا تتجاوز طول الحبة الكاملة   
 * 
 */
  const [bigItemLength, setBigItemLength] = useState(12); // how long one item in meter = 12
  const [bigItemPrice, setBigItemPrice] = useState(270); // cost of single big item in SAR
  const [itemsNeededLength, setItemsNeededLength] = useState(3.65); // how long the customer needs per item in meter
  const [itemsNeeded, setItemsNeeded] = useState(16);
  const [result, setResult] = useState(initialFinalResult);
  const [message, setMessage] = useState('');

  const isValid = (input) => {
    return input && input > 0;
  };

  useEffect(() => {
    // validate numbers
    const inputs = [
      bigItemLength,
      bigItemPrice,
      itemsNeededLength,
      itemsNeeded,
    ];
    if (!inputs.every(isValid)) {
      setMessage('الرجاء التأكد من قيم الحقول');
      return;
    } else {
      setMessage('');
    }
    // how many items in big item.
    const itemsPerBigItem = Number(
      Math.floor(bigItemLength / Number(itemsNeededLength)).toFixed(0)
    );

    // extra meters in one big Item after cutting what we need.
    const extraItems = (itemsNeededLength * itemsPerBigItem) / bigItemLength;
    // how many big item needs
    const bigItemsNeeded = itemsNeeded / itemsPerBigItem;
    // total extra items
    const totalExtraItems = extraItems * bigItemsNeeded;
    // final price
    const finalPrice = bigItemsNeeded * bigItemPrice;
    setResult({
      itemsPerBigItem: isNaN(itemsPerBigItem) ? 0 : itemsPerBigItem,
      bigItemsNeeded: isNaN(bigItemsNeeded) ? 0 : bigItemsNeeded,
      extraItems: isNaN(extraItems) ? 0 : extraItems,
      totalExtraItems: isNaN(totalExtraItems) ? 0 : totalExtraItems,
      finalPrice: isNaN(finalPrice) ? 0 : finalPrice,
    });
  }, [bigItemLength, itemsNeededLength, itemsNeeded, bigItemPrice]);

  return (
    <div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* user Inputs */}
        <div className="flex flex-wrap">
          <div className="mb-4 w-full md:w-1/2 md:pl-3 sm:px-0">
            <label className="block text-gray-700 text-sm  mb-2">
              طول القطعة كاملة
              <Unit text="متر" />
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="bigItemLength"
              value={bigItemLength}
              onChange={(event: any) => setBigItemLength(event.target.value)}
            />
          </div>
          <div className="mb-4 w-full md:w-1/2   sm:px-0">
            <label className="block text-gray-700 text-sm  mb-2">
              سعر الحبة الكاملة
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="bigItemLength"
              value={bigItemPrice}
              onChange={(event: any) => setBigItemPrice(event.target.value)}
            />
          </div>

          <div className="mb-4 w-full md:w-1/2 md:pl-3 sm:px-0">
            <label className="block text-gray-700 text-sm  mb-2">
              الطول المطلوب لكل قطعة
              <Unit text="متر" />
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="bigItemLength"
              value={itemsNeededLength}
              onChange={(event: any) =>
                setItemsNeededLength(event.target.value)
              }
            />
          </div>
          <div className="mb-4 w-full md:w-1/2 sm:px-0">
            <label className="block text-gray-700 text-sm  mb-2">
              عدد القطع المطلوبة
              <Unit text="متر" />
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="bigItemLength"
              value={itemsNeeded}
              onChange={(event: any) => setItemsNeeded(event.target.value)}
            />
          </div>

          <div className="w-full text-sm text-red-700">
            <p>{message}</p>
          </div>
        </div>
      </form>

      {/* Result */}
      <Result data={result} />
    </div>
  );
};

export default CalcForm;
