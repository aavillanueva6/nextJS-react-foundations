'use client';

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    console.log('someone liked this');
    setLikes(likes + 1);
  }

  return <button onClick={handleClick}>Like ({likes})</button>;
}