import React from 'react';
import test from 'tape';

import coursesData from '../../../../../src/client/resources/data/courses';
import mountWithStyletron from '../../../util/mount-with-styletron';
import Rice from '../../../../../src/client/app/components/sections/rice';

test('Courses data is formatted properly', (t) => {
  ['ee', 'cs'].forEach((major) => {
    coursesData[major].forEach((course) => {
      t.ok(/\w{4} \d{3}/.test(course.code), 'Course code is formatted correctly');
      t.ok(course.title, 'Course title is present');
    });
  });

  t.end();
});

test('Table rendering', (t) => {
  const rice = mountWithStyletron(
    <Rice />
  );

  t.equal(rice.find('CoursesTable').length, 2, 'Two courses tables');

  t.end();
});
