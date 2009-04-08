/* 
 *
 * This file contains the information for additional social media / bookmarking sites
 * This file can be used in its entirety or piecemeal. 
 * It must be used along with jquery.socialize.js (and the core jQuery file).
 *
 * The following sites are represented here:
 * bebo, blinklist, bloglines, blogmarks, facebook, friendfeed, furl, google, magnolia, 
 * myspace, newsvine, simpy, slashdot, spurl, squidoo, yahoo
 *
 * Feel free to add your own
 */
 
/* To use any of these bookmarks, add their names to the sites option array
 * For example:
 * $('#container').socialize({sites: ['delicious', 'digg', 'facebook', 'myspace']});
 */
$.moreSites = {};

$.moreSites.bebo = {
  url: 'http://bebo.com/c/share?',
  urlKey: 'Url',
  titleKey: 'Title'
};

$.moreSites.blinklist = {
  url: 'http://www.blinklist.com/index.php?Action=Blink/addblink.php&amp;',
  urlKey: 'Url',
  titleKey: 'Title'
};

$.moreSites.bloglines = {
  url: 'http://www.bloglines.com/citations?',
  urlKey: 'url',
  titleKey: 'title'
};

$.moreSites.blogmarks = {
  url: 'http://blogmarks.net/my/new.php?mini=1&amp;simple=1&amp;',
  urlKey: 'url',
  titleKey: 'title'
};

$.moreSites.facebook =   {
  url: 'http://www.facebook.com/sharer.php?',
  urlKey: 'u',
  titleKey: 'title'
};

$.moreSites.friendfeed = {
  url: 'http://friendfeed.com/share?',
  urlKey: 'url',
  titleKey: 'title'
};

$.moreSites.furl = {
  url: 'http://www.furl.net/storeIt.jsp?',
  urlKey: 't',
  titleKey: 'u'
};

$.moreSites.google = {
  url: 'http://www.google.com/bookmarks/mark?op=edit&amp;',
  urlKey: 'bkmk',
  titleKey: 'title'
};

$.moreSites.magnolia = {
  url: 'http://ma.gnolia.com/bookmarklet/add?',
  urlKey: 'url',
  titleKey: 'title'
};

$.moreSites.myspace = {
  url: 'http://www.myspace.com/Modules/PostTo/Pages/?',
  urlKey: 'c',
  titleKey: 't'
};

$.moreSites.newsvine = {
  url: 'http://www.newsvine.com/_wine/save?',
  urlKey: 'u',
  titleKey: 'h'
};

$.moreSites.simpy = {
  url: 'http://www.simpy.com/simpy/LinkAdd.do?',
  urlKey: 'href',
  titleKey: 'title'
};

$.moreSites.slashdot = {
  url: 'http://slashdot.org/bookmark.pl?',
  urlKey: 'url',
  titleKey: 'title'
};

$.moreSites.spurl = {
  url: 'http://www.spurl.net/spurl.php?',
  urlKey: 'url',
  titleKey: 'title'
};

$.moreSites.squidoo = {
  url: '://www.squidoo.com/lensmaster/bookmark?',
  urlKey: '',
  titleKey: 'title'
};

$.moreSites.yahoo = {
  url: 'http://myweb2.search.yahoo.com/myresults/bookmarklet?',
  urlKey: 't',
  titleKey: 'u'
};

/*
bebo, blinklist, bloglines, blogmarks, facebook, friendfeed, furl, google, magnolia, 
 * myspace, newsvine, simpy, slashdot, spurl, squidoo, yahoo
*/ 
