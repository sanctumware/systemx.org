import Helmet from 'react-helmet';
import React from 'react';

import Container from '../layout/container';
import coursesData from '../../../resources/data/courses';
import {Margin} from '../../../styles/margin';
import {Primary, Secondary} from '../../../styles/fonts';

import BackNav from '../ui/back-nav';

/**
 * Table of courses.
 *
 * @param {String} name Table name.
 * @param {Array} courses Array of courses, formatted as an object with 'code' and 'title' fields.
 * @constructor
 */
const CoursesTable = ({name, courses}) => (
  <div>
    <Margin size="small" bottom>
      <Primary color="gray70" bold>
        {name.toUpperCase()}
      </Primary>
    </Margin>

    <table>
      {
        courses.map(({code, title}) => (
          <tr key={code}>
            <td style={{minWidth: '95px', verticalAlign: 'top'}}>
              <Margin right>
                <Secondary bold>{code}</Secondary>
              </Margin>
            </td>
            <td>
              <Secondary>{title}</Secondary>
            </td>
          </tr>
        ))
      }
    </table>
  </div>
);

/**
 * Component for a listing of coureswork.
 *
 * @constructor
 */
const Rice = () => (
  <Container>
    <Helmet title="kevin lin - rice university" />

    <BackNav />

    <Margin bottom>
      <Secondary>
        i am pursuing a b.s. in electrical engineering and a b.s. in computer science,
        with expected graduation in may 2018.
      </Secondary>
    </Margin>

    <Margin bottom>
      <CoursesTable name="Electrical engineering" courses={coursesData.ee} />
    </Margin>

    <CoursesTable name="Computer science" courses={coursesData.cs} />
  </Container>
);

export default Rice;
