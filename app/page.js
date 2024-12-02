'use client';
import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Matt Painter', 'Gene Keady', 'George King'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    console.log('someone liked this');
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Let's go Purdue Basketball!!!" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
