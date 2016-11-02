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
  ]
};
/* eslint-enable max-len */

export default data;
