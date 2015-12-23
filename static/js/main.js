var COLORS = ['#512DA8', '#303F9F', '#7B1FA2', '#D32F2F', '#388E3C', '#F57C00', '#5D4037'];
var COLOR_TRANSITION_INTERVAL = 60;

/**
 * Changes the header color and all link colors to a random color defined in COLORS.
 */
function setRandomThemeColor() {
    var randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.header.css('background-color', randomColor);
    this.links.css('color', randomColor);
}

/**
 * Cycles the theme color periodically with the given time interval.
 */
function cycleThemeColors(seconds) {
    setTimeout(function() {
        setRandomThemeColor();
        cycleThemeColors(seconds);
    }, seconds*1000);
}

/**
 * Event handler function for nav link clicks.
 *
 * @param newSection The DOM element representing the new section that should be displayed
 * @param newSectionLink The DOM element representing the link of the new section that should be displayed
 * @param pushNewState True to push onto the history stack; false to leave it alone. This is required so that popstate
 *                     events don't lead to pushing and popping the same event over and over again, preventing back-navigation
 */
function handleSectionTransition(newSection, newSectionLink, pushNewState) {
    // Enumerate all sections and links to hide
    var hideSections = [this.about, this.experience, this.projects]
        .filter(function(section) {
            return section !== newSection;
        });
    var hideSectionLinks = [this.aboutLink, this.experienceLink, this.projectsLink]
        .filter(function(sectionLink) {
            return sectionLink !== newSectionLink;
        });

    // Hide the relevant sections
    hideSections.forEach(function(section) {
        if (section.is(':visible')) {
            section.fadeOut(function() {
                newSection.fadeIn();
            });
        }
    }.bind(this));
    // Remove the boldface from the sections to hide
    hideSectionLinks.forEach(function(sectionLink) {
        sectionLink.removeClass('bold');
    });
    // Boldface the new section
    newSectionLink.addClass('bold');

    // Modify history state
    if (pushNewState) {
        history.pushState(
            {
                sectionState: newSection.prop('id'),
                sectionLinkState: newSectionLink.data('section')
            },
            newSection.prop('id'),
            newSection.prop('id')
        );
    }
}

$(window).load(function() {
    // Initialize DOM elements
    this.header = $('#header');
    this.links = $('.link a');
    this.splash = $('#splash');
    this.about = $('#about');
    this.aboutLink = $('#about-link');
    this.experience = $('#experience');
    this.experienceLink = $('#experience-link');
    this.projects = $('#projects');
    this.projectsLink = $('#projects-link');

    // Handle history state, as necessary
    // A little janky, but that's alright
    var state = $('#state').data('state');
    var stateSections = {
        'about': this.about,
        'experience': this.experience,
        'projects': this.projects
    };
    var stateSectionLinks = {
        'about': this.aboutLink,
        'experience': this.experienceLink,
        'projects': this.projectsLink
    };
    if (state !== 'None') {
        // Case for refreshing the page when there is a predefined state
        handleSectionTransition(stateSections[state], stateSectionLinks[state]);
    } else {
        // Case when there isn't; in other words, display the default page and push that onto the history stack
        history.pushState(
        {
            sectionState: 'about',
            sectionLinkState: 'about'
        },
        'about',
        'about'
    );
    }

    // Set the theme color
    setRandomThemeColor();

    // Fade out splash screen on page load
    setTimeout(function() {
        this.splash.fadeOut('fast');
    }.bind(this), 900);

    // Initialize random cycling of theme colors every COLOR_TRANSITION_INTERVAL seconds
    cycleThemeColors(COLOR_TRANSITION_INTERVAL);

    // Initialize event listeners
    this.aboutLink.on('click', handleSectionTransition.bind(this, this.about, this.aboutLink, true));
    this.experienceLink.on('click', handleSectionTransition.bind(this, this.experience, this.experienceLink, true));
    this.projectsLink.on('click', handleSectionTransition.bind(this, this.projects, this.projectsLink, true));
    $(window).on('popstate', function() {
        handleSectionTransition(stateSections[history.state.sectionState], stateSectionLinks[history.state.sectionLinkState], false);
    }.bind(this));
});
