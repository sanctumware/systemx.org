/* eslint-disable max-len */
const data = {
  about: [
    'i\'m a third year undergraduate studying electrical and computer engineering + computer science at rice university, houston. i\'m a native of the west coast; i grew up in los angeles.',
    'i do web. i work at all levels of the stack, from maintaining linux servers to architecting backend systems to designing and building user interfaces.',
    'excited to join <a href="https://engineering.pinterest.com">pinterest</a> in san francisco next summer as an engineering intern on a core infrastructure team. most recently an engineering intern at <a href="https://uber.com">uber</a>, where i worked on building internal tooling and infrastructure to support web development within the engineering org.',
    'find me on <a href="https://github.com/LINKIWI">github</a>, <a href="https://stackoverflow.com/users/5224313/linkiwi">stackoverflow</a>, <a href="https://twitter.com/LINKIWI_">twitter</a>, or my <a href="https://blog.kevinlin.info">blog</a>.'
  ],
  experience: [
    {
      title: 'pinterest | software engineering intern',
      subtitle: 'summer 2017 | san francisco, ca',
      comment: 'expected to join a backend core infrastructure team',
      'description': [
        'starting summer 2017'
      ]
    },
    {
      title: 'uber | software engineering intern',
      subtitle: 'summer 2016 | web platform team | san francisco, ca',
      comment: 'the web platform team owns internal tooling and infrastructure surrounding node.js-based react-redux applications to support other product-facing web engineers at uber.',
      description: [
        'scaled the backend infrastructure of uber\'s internal npm registry by backing it with a fast, persistent, and searchable elasticsearch index',
        'built a frontend interface for the private registry similar to <a href="https://npmjs.org">npmjs.org</a> that was tightly integrated into uber\'s other internal tools',
        'rearchitected components of the private registry and internal package ecosystem to support open sourcing react components used internally as part of uber\'s web ui library',
        'designed and implemented a statistics aggregator for internal and external web applications, along with a frontend interface that served as a team health dashboard'
      ]
    },
    {
      title: 'yelp | software engineering intern',
      subtitle: 'summer 2015 | consumer web team | san francisco, ca',
      comment: 'the consumer web team builds consumer-facing products and features on the main site, yelp.com.',
      description: [
        'designed and built an email campaign system to increase reviews from users who order off yelp platform, yelp\'s online service to allow customers to place orders and bookings at resturants and hotels directly through yelp.com',
        'as a side project, developed an <a href="https://twitter.com/yelpengineering/status/614498877589196800">internal command line interface</a> for developers to order coffee from the yelp cafe',
        'redesigned and implemented a new, experimental user interface for yelp\'s business photos uploader'
      ]
    }
  ],
  projects: [
    {
      title: 'Modern Paste',
      subtitle: '2016 | web | python, flask, mysql, jinja2, javascript, sass',
      description: 'A powerful, open-source Pastebin alternative intended for self-hosted deployments. Modern Paste is a contemporary, Python-powered web application featuring functionality standard for a code/text sharing application, including user account integration, syntax highlighting, security restrictions and visibility control, and a RESTful API for programmatic integration into existing applications.',
      links: [
        {
          text: 'website',
          url: 'https://www.modernpaste.com/'
        },
        {
          text: 'demo',
          url: 'https://demo.modernpaste.com/'
        },
        {
          text: 'github',
          url: 'https://github.com/LINKIWI/modern-paste'
        }
      ]
    },
    {
      title: 'Apache Auth',
      subtitle: '2016 | web | node, express, react, apache2',
      description: 'Frontend for a flexible, transparent, and application/stack-agnostic single sign-on (SSO) implementation for arbitrary Apache virtual hosts. apache-auth sits transparently between the client and the underlying application, serving as an intermediary authentication layer that distributes and validates HTTP session cookies.',
      links: [
        {
          text: 'demo',
          url: 'https://auth.kevinlin.info'
        },
        {
          text: 'github',
          url: 'https://github.com/LINKIWI/apache-auth'
        },
        {
          text: 'blog post',
          url: 'https://blog.kevinlin.info/transparent-application-agnostic-sso-using-apache-mod_auth_form'
        }
      ]
    },
    {
      title: 'Allu',
      subtitle: '2016 | web | node, express, facebook messenger platform',
      description: 'Allu is a Facebook Messenger-based notifications dispatcher built with Node.js on top of the Messenger Platform API for chat bots. Allu is intended to be an API platform for devices and backend systems to emit notifications, esp. for continuous integration/deployment build failures, uncaught exceptions in applications running in production environments, or service health check failures.',
      links: [
        {
          text: 'live service',
          url: 'https://allu.internal.kevinlin.info'
        },
        {
          text: 'github / server',
          url: 'https://github.com/LINKIWI/allu'
        },
        {
          text: 'github / node and cli client',
          url: 'https://github.com/LINKIWI/allu-client'
        }
      ]
    },
    {
      title: 'brick pop solver',
      subtitle: '2016 | android | python, opencv, adb',
      description: 'An automated solver for the Brick Pop Facebook Messenger game. The solver parses a screenshot of the board, generates a step-by-step game solution by simulating gameplay, and replays the solution on a physical android device with ADB touch events. The solver makes use of a parallelized depth-first search algorithm.',
      links: [
        {
          text: 'github',
          url: 'https://github.com/LINKIWI/brick-pop-solver'
        },
        {
          text: 'blog post',
          url: 'https://blog.kevinlin.info/building-an-automated-solver-for-facebook-messengers-brick-pop/'
        },
        {
          text: 'video demo',
          url: 'https://www.youtube.com/watch?v=DVQx-ObS9I0'
        },
        {
          text: 'projects by others inspired by brick-pop-solver',
          url: 'https://github.com/search?utf8=%E2%9C%93&q=brick+pop'
        }
      ]
    },
    {
      title: 'react-loading-hoc',
      subtitle: '2016 | web | javascript/es6, react',
      description: 'React higher-order component used for abstracting out the loading state of a component to a prop. Used for wrapping logic to set an internal in-progress state for frontends that have a dedicated UI for an intermediate, loading state.',
      links: [
        {
          text: 'npmjs.org',
          url: 'https://www.npmjs.com/package/react-loading-hoc'
        },
        {
          text: 'github',
          url: 'https://github.com/LINKIWI/react-loading-hoc'
        }
      ]
    },
    {
      title: 'pkg-deps',
      subtitle: '2016 | command line | node',
      description: 'A small command line utility for pretty-printing current package.json dependencies for Node projects',
      links: [
        {
          text: 'npmjs.org',
          url: 'https://www.npmjs.com/package/pkg-deps'
        },
        {
          text: 'github',
          url: 'https://github.com/LINKIWI/pkg-deps'
        }
      ]
    },
    {
      title: 'Detrail',
      subtitle: '2016 | command line | node',
      description: 'A flexible command line utility for fixing trailing whitespace in source files',
      links: [
        {
          text: 'npmjs.org',
          url: 'https://www.npmjs.com/package/detrail'
        },
        {
          text: 'github',
          url: 'https://github.com/LINKIWI/detrail'
        }
      ]
    },
    {
      title: 'GPU Acceleration of Edge-Based Motion Detection and Machine Learning-Aided Facial Recognition with NVIDIA CUDA',
      subtitle: '2015 | two-dimensional signal processing | c, opencv, nvidia cuda',
      description: 'An exploration of GPU-CPU speedup achieved with parallelized edge detection, motion detection, and facial recognition algorithms with the NVIDIA CUDA framework.',
      links: [
        {
          text: 'full paper',
          url: '../static/pdf/cuda-computer-vision.pdf'
        },
        {
          text: 'poster',
          url: '../static/pdf/cuda-computer-vision-poster.pdf'
        },
        {
          text: 'github',
          url: 'https://github.com/LINKIWI/cuda-computer-vision'
        }
      ]
    },
    {
      title: 'SignAuth',
      subtitle: '2015 | web, sensel | python, flask',
      description: 'SignAuth adds an additional layer of security to web applications with two-factor authentication in the form of a precise, touch-based signature from the user, in addition to a standard username and password. Its security depends on a configurable-threshold match of speed, drawing path, and pressure, all of which are validated with custom algorithms.',
      links: [
        {
          text: 'github',
          url: 'https://github.com/LINKIWI/sign-auth'
        },
        {
          text: 'featured on the sensel developer website',
          url: 'http://www.sensel.com/developers/'
        },
        {
          text: 'video demo',
          url: 'https://vimeo.com/140278654'
        }
      ]
    },
    {
      title: 'Mind Versus Might',
      subtitle: '2015 | android, arduino, muse headband | java, processing',
      description: 'Designed and built a robotic arm-wrestling game controlled by the player\'s brain waves, as read by a Muse headband. Raw EEG data is sent via Bluetooth to an Android app, which processes the information and remotely sends data to an Arduino controlling a motor on a custom-built arm-wrestling mechanism.',
      links: [
        {
          text: 'github',
          url: 'https://github.com/Abhipray/MindVsMuscle'
        }
      ]
    },
    {
      title: 'SecureTap',
      subtitle: '2015 | android, web, arduino | java, python, processing',
      description: 'HackRice 2015 winner: best hardware hack\nAndroid, Arduino, and Flask web API application for securely and automatically authenticating online accounts with a tap of an RFID card on an Arduino-controlled sensor, communicating with a windows PC via USB.',
      links: [
        {
          text: 'github',
          url: 'https://github.com/LINKIWI/SecureTap'
        },
        {
          text: 'video demo',
          url: 'https://www.youtube.com/watch?v=_zQl5AL21Q8'
        }
      ]
    },
    {
      title: 'Around the World in 80 Days',
      subtitle: '2015 | web | python, flask, google maps api',
      description: 'The traveling salesman problem on a literally global scale with the world\'s most popular travel destinations. Flask web application implementing a visualization of a modified A* traversal algorithm (using the Google Maps JS API) on a graph representing flights to and from the world\'s most popular tourist cities, using live flight data from Sabre\'s flight API. Built at HackDFW 2015 in less than 24 hours.',
      links: [
        {
          text: 'github',
          url: 'https://github.com/LINKIWI/AroundTheWorldIn80Days'
        },
        {
          text: 'web app link',
          url: 'http://aroundtheworldin80days.us/'
        }
      ]
    },
    {
      title: 'Mobile Manager for CloudFlare',
      subtitle: '2014 | android | java, cloudflare api',
      description: 'Developed and actively improving a native Android mobile application providing website administrators an interface for configuring CloudFlare\'s content delivery network options for their domains. 3000+ downloads.',
      links: [
        {
          text: 'github',
          url: 'https://github.com/LINKIWI/MobileManagerforCloudFlare'
        },
        {
          text: 'information website',
          url: 'https://www.cloudflaremanager.com'
        },
        {
          text: 'play store link',
          url: 'https://play.google.com/store/apps/details?id=info.kevinlin.cloudflaremanager'
        }
      ]
    }
  ],
  contact: {
    pgpKey: [
      '-----BEGIN PGP PUBLIC KEY BLOCK-----',
      'Version: GnuPG v1',
      '',
      'mQINBFhtwWUBEACpsWr/AtCG8n1ohGuik2NhiYNRzLx1pZmSq84DztBkrTAAmMNZ',
      'zpBatcLKu9TGQ/zpidvY7y0tG3+cTVbL8nrRKIu33pPrXm85kWB4GbFeSBHpluFe',
      'tSl2CQsmsBdwGd0FDkBxmVCdShvvzaPzOEcantXY2DIw4rYcVAKg6VWY6LkCxjul',
      'zwko3Yx7pdmdoBjdGeWSFgwVUsLy5hamyAwCWIKPJ+q9s39YEUf28yP0KwalNGVq',
      'VyeUdSFmiwUJ6Xc2dZOevDslsShpFg50npaO1QM7eM2tx+k0jL9bqf6gt3UhQzzs',
      'nTqOqi+yuXKT15zpw8K55q8ESjGTNBwZPpRbbiLRZ0ZQkMAmd8uBV3tZhQU6XW7J',
      'SLM+peeuY8Km7AHw8u5A95oQsycJSgJ/rjc3AbFWULGqQnPe80JWPKnVWw9JWhQ6',
      'ObJFDZlIDXRFey+r0NW7ECOrX1jsVskGNizFT1ZpEEkXwKrTLpfiBOl0r+YjiRE9',
      '0KkbHr6faMel6eXSkOSda4jSgF01LG8qhwwkUPDJYmWTtiN4xqViLv1qu/nf/JvF',
      'IbIDzftohhR/F8BoQxY5y5auNpzmi0YhLL2WTiyptM+zKE98u78gp+O/K4ixJTBY',
      '7E/ry7ogunzSS/ZIsuZ5g1DRfNnqH2RPnVXQj6Dkjv/ErFrPLnEOie9l9wARAQAB',
      'tCtLZXZpbiBMaW4gKExJTktJV0kpIDxjb250YWN0QGtldmlubGluLmluZm8+iQI4',
      'BBMBAgAiBQJYbcFlAhsDBgsJCAcDAgYVCAIJCgsEFgIDAQIeAQIXgAAKCRAFSX7P',
      'L8MfGfMVD/4+ZpXqWLqmiN1vJz62/y/NS2UK37/tzWjH7fOIDSbTfozaKbGuUrkR',
      'OVYeFgi9PtyDp8P0QZ8bebaH1+DeQqMKH1xiTw68VyI9aLLRwN1fjVHzYHqe/q6a',
      's9/SNPScbgbi1YhvINX3b2qdXOY66JKFP/smIlxP6hvbaUhg7lZRuK/XHqi0BaPY',
      'Ql/tdnaN+gX1cD+tVDE1hPTj/M2DAttm7jIz5O1BzrvDufilbq/0qk+gHRxmUgVA',
      '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',
      'rIfEGE6xdmaVeQ==',
      '=cNtD',
      '-----END PGP PUBLIC KEY BLOCK-----'
    ].join('\n')
  }
};
/* eslint-enable max-len */

export default data;
