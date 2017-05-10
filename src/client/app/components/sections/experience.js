/* global window */

import Helmet from 'react-helmet';
import React from 'react';

import {BackgroundColor, colors} from '../../../styles/colors';
import Container from '../layout/container';
import experienceData from '../../../resources/data/experience';
import {Margin} from '../../../styles/margin';
import {Primary, PrimaryInline, Secondary} from '../../../styles/fonts';

import BackNav from '../ui/back-nav';

/**
 * A single experience item block.
 *
 * @param {String} title Item title.
 * @param {String} subtitle Item subtitle.
 * @param {String} location Experience location.
 * @param {Array} details Array of strings describing the experience item.
 * @constructor
 */
const ExperienceItem = ({title, subtitle, location, details}) => (
  <Margin size="large" bottom>
    <Margin size="small" bottom>
      <Margin size="tiny" bottom>
        <BackgroundColor
          color={
            window.location.hash.toLowerCase() === `#${title.toLowerCase()}` && colors.primaryLight
          }
        >
          <PrimaryInline size="epsilon" bold>{title.toLowerCase()}</PrimaryInline>
          &nbsp;
          <PrimaryInline size="epsilon">/ {subtitle.toLowerCase()}</PrimaryInline>
        </BackgroundColor>
      </Margin>

      <Primary color="gray30" size="kilo" bold>{location.toUpperCase()}</Primary>
    </Margin>

    {
      details.map((detail) => (
        <Margin size="tiny" bottom>
          <Secondary key={detail} color="gray70">
            * {detail}
          </Secondary>
        </Margin>
      ))
    }
  </Margin>
);

/**
 * Component describing current and past work experience.
 *
 * @constructor
 */
const Experience = () => (
  <Container>
    <Helmet title="kevin lin - experience" />

    <BackNav />

    {experienceData.map((item) => <ExperienceItem key={item.title} {...item} />)}
  </Container>
);

export default Experience;
