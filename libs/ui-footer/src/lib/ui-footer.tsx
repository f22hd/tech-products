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
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UiFooter;
