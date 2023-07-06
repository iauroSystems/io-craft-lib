import {Meta, Story} from '@storybook/react';
import React, {useState} from 'react';
import {withDesign} from 'storybook-addon-designs';

import Rating, {RatingProps} from './rating';

export default {
  component: Rating,
  title: 'Atoms/Ratings',
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'].sort(),
      control: {type: 'select'},
    },
    onChange: {
      action: 'clicked',
      table: {
        disabled: true,
      },
    },
  },
  decorators: [withDesign],
} as Meta;

const Templete: Story<RatingProps> = (args) => (
  <div style={{height: '90vh', display: 'grid', placeItems: 'center'}}>
    <Rating {...args} />
  </div>
);

export function BasicRating() {
  const [rating, setRating] = useState(3);
  return (
    <div style={{height: '90vh', display: 'grid', placeItems: 'center'}}>
      <Rating
        value={rating}
        size="medium"
        onChange={(rate) => setRating(rate)}
      />
    </div>
  );
}

BasicRating.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=232%3A13645&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export function HoverOnStatusRating() {
  const [rating, setRating] = useState(3);
  return (
    <div style={{height: '90vh', display: 'grid', placeItems: 'center'}}>
      <Rating
        value={rating}
        hoverStatus={true}
        onChange={(rate) => setRating(rate)}
        size="medium"
      />
    </div>
  );
}

HoverOnStatusRating.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=232%3A13645&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export function HalfStarRating() {
  const [rating, setRating] = useState(3);
  return (
    <div style={{height: '90vh', display: 'grid', placeItems: 'center'}}>
      <Rating
        value={rating}
        precision={true}
        onChange={(rate) => setRating(rate)}
      />
    </div>
  );
}

HalfStarRating.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=232%3A13645&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
