import { Card } from '@components/SpaceXLaunchCard/SpaceXLaunchCard.styles';
import React from 'react';

export const SpaceXLaunchCard = () => {
  const props = '';
  return (
    <Card>
      <div>
        <h3>Название</h3>
        <span>Хэштег</span>
      </div>
      <p>Какая то информация по теме или подробное описание этого объявления</p>
      <div>
        <span>icon Цена</span>
        <span>icon Время публикации</span>
      </div>
      Some text, {props}
    </Card>
  );
};
