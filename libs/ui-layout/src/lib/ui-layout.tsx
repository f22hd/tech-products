import React from 'react';

import './ui-layout.scss';

/* eslint-disable-next-line */
export interface UiLayoutProps {
  content: any;
}

export const UiLayout = ({ content }: UiLayoutProps) => {
  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <main className="lg:container lg:mx-auto  flex flex-wrap justify-center">
        {content}
      </main>
    </div>
  );
};

export default UiLayout;
