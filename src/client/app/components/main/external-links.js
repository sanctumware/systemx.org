import Archive from 'react-icons/lib/fa/archive';
import Blocks from 'react-icons/lib/fa/th-large';
import Document from 'react-icons/lib/fa/file-text';
import Github from 'react-icons/lib/fa/github';
import Key from 'react-icons/lib/md/vpn-key';
import React from 'react';
import Twitter from 'react-icons/lib/fa/twitter';

import Link from '../ui/link';
import {Margin, MarginInline} from '../../../styles/margin';
import {SecondaryInline} from '../../../styles/fonts';

/**
 * Single external link with an icon.
 *
 * @param {XML} icon Icon element (instantiated).
 * @param {String} text Text for this link.
 * @param {String} href Outgoing URL for this link.
 * @constructor
 */
export const ExternalLink = ({icon, text, href}) => (
  <Margin size="tiny" bottom>
    <Link href={href}>
      <SecondaryInline color bold>
        {icon} <MarginInline size="tiny" left>{text}</MarginInline>
      </SecondaryInline>
    </Link>
  </Margin>
);

/**
 * List of external links.
 *
 * @constructor
 */
const ExternalLinks = () => (
  <div>
    <ExternalLink icon={<Github />} text="github" href="https://github.com/LINKIWI" />
    <ExternalLink icon={<Twitter />} text="twitter" href="https://twitter.com/LINKIWI_" />
    <ExternalLink icon={<Blocks />} text="blog" href="https://blog.kevinlin.info" />
    <ExternalLink icon={<Archive />} text="npm" href="https://www.npmjs.com/~linkiwi" />
    <ExternalLink icon={<Key />} text="keybase" href="https://keybase.io/linkiwi" />
    <ExternalLink icon={<Document />} text="resume" href="static/pdf/kevin-lin-resume.pdf" />
  </div>
);

export default ExternalLinks;
