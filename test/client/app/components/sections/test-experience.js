import isArray from 'is-array';
import React from 'react';
import test from 'tape';

import experienceData from '../../../../../src/client/resources/data/experience';
import mountWithStyletron from '../../../util/mount-with-styletron';
import Experience from '../../../../../src/client/app/components/sections/experience';

test('Experience data is formatted properly', (t) => {
  experienceData.forEach((experience) => {
    t.ok(experience.title, 'Experience title');
    t.ok(experience.subtitle, 'Experience subtitle');
    t.ok(experience.location, 'Experience location');
    t.ok(isArray(experience.details), 'Experience details');
  });

  t.end();
});

test('Experience items', (t) => {
  const experience = mountWithStyletron(
    <Experience />
  );

  t.ok(experience.find('ExperienceItem').length, experienceData.length,
    'Number of rendered experience items');

  t.end();
});
