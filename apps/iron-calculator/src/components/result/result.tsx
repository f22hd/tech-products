import React from 'react';

import './result.scss';
import TextCard from '../text-card/text-card';

interface Data {
  itemsPerBigItem: number;
  bigItemsNeeded: number;
  extraItems: number;
  totalExtraItems: number;
  finalPrice: number;
}
/* eslint-disable-next-line */
export interface ResultProps {
  data: Data;
}

export const Result = ({ data }: ResultProps) => {
  const {
    itemsPerBigItem,
    bigItemsNeeded,
    extraItems,
    totalExtraItems,
    finalPrice,
  } = data;
  return (
    <div>
      <p className="w-full my-3 text-gray-700 text-right">النتيجة النهائية</p>
      <div className="flex flex-wrap bg-white shadow-md rounded p-3 my-3 text-center">
        <div className="mb-4 w-full md:w-1/2">
          <TextCard
            label="عدد القطع الكاملة"
            text={bigItemsNeeded.toFixed(2)}
          />
        </div>
        <div className="mb-4 w-full md:w-1/2">
          <TextCard
            label="عدد القطع المستخرجة من كل قطعة كبيرة"
            text={itemsPerBigItem.toFixed(2)}
          />
        </div>
        <div className="mb-4 w-full md:w-1/2">
          <TextCard
            label="الزيادة من كل قطعة بالمتر"
            text={extraItems.toFixed(2)}
          />
        </div>
        <div className="mb-4 w-full md:w-1/2">
          <TextCard
            label="مجموع عدد الأمتار الزائدة"
            text={totalExtraItems.toFixed(2)}
          />
        </div>
        {/* Final price */}
        <div className="mb-4 w-full">
          <TextCard label="السعر النهائي" text={finalPrice.toFixed(2)} />
        </div>
      </div>
    </div>
  );
};

export default Result;
