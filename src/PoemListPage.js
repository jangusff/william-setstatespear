import React from 'react';
import { Link } from 'react-router-dom';
import POEMS from './poems';

/* BEFORE intro of 'Link' element...  (09/30/2021)
<ul className='PoemList'>
         {POEMS.map(poem =>
           <li key={poem.id}>
             <a href={`/poem/${poem.id}`}>
               {poem.title}
             </a>
           </li>
         )}
*/


export default function PoemListPage() {
  return (
    <>
      <p>Choose a poem from the list below.</p>
      <ul className='PoemList'>
        {POEMS.map(poem =>
          <li key={poem.id}>
            <Link to={`/poem/${poem.id}`}>
              {poem.title}
            </Link>
          </li>
        )}
      </ul>
    </>
  )
}
