/*
 * jQuery Socialize plugin
 * Version 1.0  (12/09/2008)
 * @requires jQuery v1.1.1+
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/*
 * Thanks to the following plugin authors for some ideas and especially the URLs:
 *
 * Keith Wood, Sharing bookmarks
 * David Zhou, jQuery ShareHelper
 *
 */

;(function($) {
// adds social bookmarks to a blog entry
var idCounter = 0;
$.fn.socialize = function(options) {
  var opts = $.extend({}, $.fn.socialize.defaults, options),
      siteInfo = $.extend($.socialSites, $.moreSites),
      sites = opts.sites;
      if (typeof sites == 'string') {
        sites = sites.replace(/,\s+/g,',').split(',');
      }
      var sitesLength = sites.length;
  return this.each(function(index) {
    var siteLinks = [];
    for (var i=0; i < sitesLength; i++) {
      var site = siteInfo[sites[i]];
      if (site === undefined) continue;
      var urlKey = site.urlKey ? site.urlKey + '=': '';
      var siteLink = '<a title="post to ' + sites[i] + '" ';     
      siteLink += 'href="' + site.url + urlKey + encodeURIComponent(window.location.href) + '&amp;' + site.titleKey + '=' + encodeURIComponent(document.title) + '" ';
      siteLink += 'class="' + opts.linkClass + ' ' + sites[i] + '">';
      siteLink += sites[i];
      siteLink += '</a>';
      siteLinks[i] = siteLink;
    }
    
    var cid = opts.containerId + '-' + (++idCounter) + '-' + index,
        cclass = opts.containerClass;
    $('<div id="' + cid + '" class="' + cclass + '">' + siteLinks.join('') + '</div>')[opts.insertion](this);
    $.each(opts.events, function(key, func) {
      var handler = key + '.socialize';
      if (typeof func == 'function') {
        $('a', '#'+cid).bind(handler, function(evt) {
          func.call(this, evt);
          evt.preventDefault();
        });
      }
    });
  });

};

// default options
$.fn.socialize.defaults = {
  // default set of sites; more can be found in jquery.socialize.moresites.js
  sites: ['delicious', 'digg', 'dzone', 'reddit', 'stumbleupon'],
  containerId: 'social-icons',
  containerClass: 'group social-icons',
  linkClass: 'social-icon',
  insertion: 'appendTo',
  events: {
    /*
    click: function(event) { },
    mouseover: function(event) { }
    */
  }
};

// social media/bookmarking sites
$.socialSites = {
  delicious: {
    url: 'http://del.icio.us/post?v=2&amp;',
    urlKey: 'url',
    titleKey: 'title'
  },
  digg: {
    url: 'http://digg.com/submit?',
    urlKey: 'url',
    titleKey: 'title'    
  },
  dzone: {
    url: 'http://www.dzone.com/links/add.html?',
    urlKey: 'url',
    titleKey: 'description'
  },
  reddit: {
    url: 'http://reddit.com/submit?',
    urlKey: 'url',
    titleKey: 'title'
  },
  stumbleupon: {
    url: 'http://www.stumbleupon.com/refer.php?',
    urlKey: 'url',
    titleKey: 'title'
  }
};
$.moreSites = $.moreSites || {};
})(jQuery);
