var COLORS = ['#512DA8', '#303F9F', '#7B1FA2', '#D32F2F', '#388E3C', '#F57C00', '#5D4037'];

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
 */
function handleSectionTransition(newSection, newSectionLink) {
    var removeSections = [this.about, this.experience, this.projects]
        .filter(function(section) {
            return section !== newSection;
        });
    var removeSectionLinks = [this.aboutLink, this.experienceLink, this.projectsLink]
        .filter(function(sectionLink) {
            return sectionLink !== newSectionLink;
        });
    removeSections.forEach(function(section) {
        if (section.is(':visible')) {
            section.fadeOut(function() {
                newSection.fadeIn();
            });
        }
    }.bind(this));
    removeSectionLinks.forEach(function(sectionLink) {
        sectionLink.removeClass('bold');
    });
    newSectionLink.addClass('bold');
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

    // Set the theme color
    setRandomThemeColor();

    // Fade out splash screen on page load
    setTimeout(function() {
        this.splash.fadeOut('fast');
    }.bind(this), 900);

    // Initialize random cycling of theme colors every 30 seconds
    cycleThemeColors(30);

    // Initialize event listeners
    this.aboutLink.on('click', handleSectionTransition.bind(this, this.about, this.aboutLink));
    this.experienceLink.on('click', handleSectionTransition.bind(this, this.experience, this.experienceLink));
    this.projectsLink.on('click', handleSectionTransition.bind(this, this.projects, this.projectsLink));
});
