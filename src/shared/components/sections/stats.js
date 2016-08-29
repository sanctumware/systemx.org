/* global document */

import dottie from 'dottie';
import humanize from 'humanize';
import Preloader, {ICON_TYPE} from 'react-preloader-icon';
import React from 'react';
import request from 'browser-request';
import Helmet from 'react-helmet';
import xtend from 'xtend';

import DisplayUtil from '../../util/display';
import Nav from '../layout/nav';

export default class Stats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      publicContributions: {
        isLoading: true,
        data: {}
      },
      privateContributions: {
        isLoading: true,
        data: {}
      },
      miscStats: {
        isLoading: true,
        data: {}
      }
    };
  }

  componentDidMount() {
    [
      {
        endpoint: '/api/get-public-contributions',
        key: 'publicContributions'
      },
      {
        endpoint: '/api/get-private-contributions',
        key: 'privateContributions'
      },
      {
        endpoint: '/api/get-misc-stats',
        key: 'miscStats'
      }
    ].forEach((requestMetadata) => this.apiRequest(requestMetadata.endpoint, requestMetadata.key));
  }

  apiRequest(endpoint, key) {
    const csrfToken = document.getElementById('csrf-token').innerHTML;

    request.post({
      url: endpoint,
      headers: {
        'x-csrf-token': csrfToken
      }
    }, (err, resp, body) => {
      if (err) {
        this.setState(xtend(this.state, {
          [key]: {
            isLoading: false
          }
        }));
      }
      this.setState(xtend(this.state, {
        [key]: {
          isLoading: false,
          data: JSON.parse(body)
        }
      }));
    });
  }

  render() {
    const publicContributionsData = dottie.get(this.state, 'publicContributions.data', {});
    const privateContributionsData = dottie.get(this.state, 'privateContributions.data', {});
    const miscData = dottie.get(this.state, 'miscStats.data', {});

    return (
      <div>
        <Helmet title={'stats - kevin lin - rice university'} />
        <Nav selectedNav={'stats'} />
        <div style={{
          maxHeight: '100vh',
          overflow: 'auto'
        }}>
          <div className="monospace iota" style={{
            display: 'table-cell',
            height: '100vh',
            verticalAlign: 'middle',
            padding: '0 76px',
            marginTop: '56px'
          }}>
            <p className="monospace bold margin-small--bottom">
              # public contributions
            </p>
            {
              DisplayUtil.displayIf(dottie.get(this.state, 'publicContributions.isLoading', true), () => (
                <Preloader
                  type={ICON_TYPE.OVAL}
                  size={25}
                  strokeWidth={6}
                  strokeColor="#006064"
                  duration={800}
                  className="margin-tiny-top margin-tiny--bottom"
                />
              ), () => (
                <div className="light-link">
                  <p className="margin-tiny--bottom">
                    +
                    <span className="monospace bold">
                      &nbsp;{publicContributionsData.numRepos || 0}&nbsp;
                    </span>
                    public repositories on <a href="https://github.com/LINKIWI">github</a>
                  </p>
                  <p className="margin-tiny--bottom">
                    + last github activity was
                    <span className="monospace bold">
                      &nbsp;{humanize.relativeTime(publicContributionsData.lastActivity || 0)}&nbsp;
                    </span>
                    about repository&nbsp;
                    <a href={`https://github.com/${publicContributionsData.lastActivityRepo}`}>
                      {publicContributionsData.lastActivityRepo}
                    </a>
                  </p>
                  <p className="margin-tiny--bottom">
                    +
                    <span className="monospace bold">
                      &nbsp;{publicContributionsData.numFollowers || 0}&nbsp;
                    </span>
                    <a href="https://github.com/LINKIWI/followers">followers</a>;
                    <span className="monospace bold">
                      &nbsp;{publicContributionsData.numFollowing || 0}&nbsp;
                    </span>
                    <a href="https://github.com/LINKIWI/following">following</a>
                  </p>
                  <p className="margin-tiny--bottom">
                    +
                    <span className="monospace bold">
                      &nbsp;{publicContributionsData.numStarred || 0}&nbsp;
                    </span>
                    <a href="https://github.com/stars/LINKIWI">starred</a> github repositories (most recently,&nbsp;
                    <a href={`https://github.com/${publicContributionsData.mostRecentStarred}`}>
                      {publicContributionsData.mostRecentStarred}
                    </a>)
                  </p>
                </div>
              ))
            }

            <p className="monospace bold margin--top margin-small--bottom">
              # private contributions
            </p>
            {
              DisplayUtil.displayIf(dottie.get(this.state, 'privateContributions.isLoading', true), () => (
                <Preloader
                  type={ICON_TYPE.OVAL}
                  size={25}
                  strokeWidth={6}
                  strokeColor="#006064"
                  duration={800}
                  className="margin-tiny-top margin-tiny--bottom"
                />
              ), () => (
                <div className="light-link">
                  <p className="margin-tiny--bottom">
                    +
                    <span className="monospace bold">
                      &nbsp;{privateContributionsData.numRepos || 0}&nbsp;
                    </span>
                    private repositories on <a href="https://git.kevinlin.info">git.kevinlin.info</a>
                  </p>
                  <p className="margin-tiny--bottom">
                    + last private commit was
                    <span className="monospace bold">
                      &nbsp;{humanize.relativeTime(privateContributionsData.lastActivity || 0)}&nbsp;
                    </span>
                    to repository
                    <span className="monospace bold">
                      &nbsp;{privateContributionsData.lastActivityRepo || ''}&nbsp;
                    </span>
                  </p>
                  <p className="margin-tiny--bottom">
                    + last continuous integration build on <a href="https://ci.kevinlin.info">ci.kevinlin.info</a> was
                    <span className="monospace bold">
                      &nbsp;{humanize.relativeTime(privateContributionsData.lastBuildTime || 0)}&nbsp;
                    </span>
                    for job
                    <span className="monospace bold">
                      &nbsp;{privateContributionsData.lastBuild || ''}&nbsp;
                    </span>
                  </p>
                </div>
              ))
            }

            <p className="monospace bold margin--top margin-small--bottom">
              # miscellaneous numbers
            </p>
            {
              DisplayUtil.displayIf(dottie.get(this.state, 'miscStats.isLoading', true), () => (
                <Preloader
                  type={ICON_TYPE.OVAL}
                  size={25}
                  strokeWidth={6}
                  strokeColor="#006064"
                  duration={800}
                  className="margin-tiny-top margin-tiny--bottom"
                />
              ), () => (
                <div className="light-link">
                  <p className="margin-tiny--bottom">
                    +
                    <span className="monospace bold">
                      &nbsp;{miscData.numMessagesLastDay || 0}&nbsp;
                    </span>
                    facebook messages sent in the last 24 hours
                  </p>
                  <p className="margin-tiny--bottom">
                    + most recent facebook message was sent
                    <span className="monospace bold">
                      &nbsp;{humanize.relativeTime(miscData.mostRecentMessageTimestamp)}&nbsp;
                    </span>
                  </p>
                  <p className="margin-tiny--bottom">
                    + ...and was tagged with classification
                    <span className="monospace bold">
                      &nbsp;{miscData.mostRecentMessageTag}&nbsp;
                    </span>
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}
