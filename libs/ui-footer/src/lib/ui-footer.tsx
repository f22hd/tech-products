import React from 'react';

import './ui-footer.scss';

interface Link {
  url: string;
  text: string;
}

const links: Link[] = [
  {
    url: 'http://allebdi.me/tech-products',
    text: 'منتجات أخرى',
  },
  {
    url: 'http://allebdi.me',
    text: 'المدونة',
  },
  {
    url: 'https://github.com/f22hd/iron-calculator',
    text: 'Github',
  },
];
/* eslint-disable-next-line */
export interface UiFooterProps {}

export const UiFooter = (props: UiFooterProps) => {
  return (
    <div>
      <ul className="text-center mt-4">
        {links.map(({ url, text }, index) => {
          return (
            <li className="inline-block text-gray-700 px-2" key={index}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
                href={url}
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UiFooter;
