import React, { useState } from 'react';

export const BadCode = () => {
  const obj = {
    property: 1,
  };

  const { property } = obj;
  console.log('property: ', property);
  const [randomNumber, setRandomNumber] = useState<number>();

  React.useEffect(() => {
    setRandomNumber(Math.random());
  }, [randomNumber]);

  const weight = 0;
  console.log('weight: ', weight);
  console.log(8 / 2 + 5 - -3 / 2);
  return <div>BadCode</div>;
};

// Что-то странное, но прикольное: https://github.com/azat-io/eslint-plugin-perfectionist
