Ext.data.JsonP.android_media_browse_MediaBrowser({"tagname":"class","name":"android.media.browse.MediaBrowser","autodetected":{},"files":[{"filename":"MediaBrowser.js","href":"MediaBrowser.html#android-media-browse-MediaBrowser"}],"extends":"java.lang.Object","members":[{"name":"EXTRA_PAGE","tagname":"property","owner":"android.media.browse.MediaBrowser","id":"property-EXTRA_PAGE","meta":{}},{"name":"EXTRA_PAGE_SIZE","tagname":"property","owner":"android.media.browse.MediaBrowser","id":"property-EXTRA_PAGE_SIZE","meta":{}},{"name":"connect","tagname":"method","owner":"android.media.browse.MediaBrowser","id":"method-connect","meta":{}},{"name":"disconnect","tagname":"method","owner":"android.media.browse.MediaBrowser","id":"method-disconnect","meta":{}},{"name":"getExtras","tagname":"method","owner":"android.media.browse.MediaBrowser","id":"method-getExtras","meta":{}},{"name":"getItem","tagname":"method","owner":"android.media.browse.MediaBrowser","id":"method-getItem","meta":{}},{"name":"getRoot","tagname":"method","owner":"android.media.browse.MediaBrowser","id":"method-getRoot","meta":{}},{"name":"getServiceComponent","tagname":"method","owner":"android.media.browse.MediaBrowser","id":"method-getServiceComponent","meta":{}},{"name":"getSessionToken","tagname":"method","owner":"android.media.browse.MediaBrowser","id":"method-getSessionToken","meta":{}},{"name":"isConnected","tagname":"method","owner":"android.media.browse.MediaBrowser","id":"method-isConnected","meta":{}},{"name":"subscribe","tagname":"method","owner":"android.media.browse.MediaBrowser","id":"method-subscribe","meta":{}},{"name":"unsubscribe","tagname":"method","owner":"android.media.browse.MediaBrowser","id":"method-unsubscribe","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.media.browse.MediaBrowser","short_doc":"Browses media content offered by a link MediaBrowserService. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.media.browse.MediaBrowser</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/MediaBrowser.html#android-media-browse-MediaBrowser' target='_blank'>MediaBrowser.js</a></div></pre><div class='doc-contents'><p>Browses media content offered by a link MediaBrowserService.\n <p>\n This object is not thread-safe. All calls should happen on the thread on which the browser\n was constructed.\n </p>\n <h3>Standard Extra Data</h3></p>\n\n<p> <p>These are the current standard fields that can be used as extra data via\n Bundle, android.media.browse.MediaBrowser.SubscriptionCallback),\n android.media.browse.MediaBrowser.SubscriptionCallback), and\n List, Bundle).</p>\n\n<p> <ul>\n     <li> <a href=\"#!/api/android.media.browse.MediaBrowser-property-EXTRA_PAGE\" rel=\"android.media.browse.MediaBrowser-property-EXTRA_PAGE\" class=\"docClass\">EXTRA_PAGE</a>\n     <li> <a href=\"#!/api/android.media.browse.MediaBrowser-property-EXTRA_PAGE_SIZE\" rel=\"android.media.browse.MediaBrowser-property-EXTRA_PAGE_SIZE\" class=\"docClass\">EXTRA_PAGE_SIZE</a>\n </li></li></ul></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-EXTRA_PAGE' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.browse.MediaBrowser'>android.media.browse.MediaBrowser</span><br/><a href='source/MediaBrowser.html#android-media-browse-MediaBrowser-property-EXTRA_PAGE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.browse.MediaBrowser-property-EXTRA_PAGE' class='name expandable'>EXTRA_PAGE</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Used as an int extra field to denote the page number to subscribe. ...</div><div class='long'><p>Used as an int extra field to denote the page number to subscribe.\nThe value of {@code EXTRA_PAGE} should be greater than or equal to 0.</p>\n\n<p>@see <a href=\"#!/api/android.media.browse.MediaBrowser-property-EXTRA_PAGE_SIZE\" rel=\"android.media.browse.MediaBrowser-property-EXTRA_PAGE_SIZE\" class=\"docClass\">EXTRA_PAGE_SIZE</a></p>\n<p>Defaults to: <code>&quot;android.media.browse.extra.PAGE&quot;</code></p></div></div></div><div id='property-EXTRA_PAGE_SIZE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.browse.MediaBrowser'>android.media.browse.MediaBrowser</span><br/><a href='source/MediaBrowser.html#android-media-browse-MediaBrowser-property-EXTRA_PAGE_SIZE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.browse.MediaBrowser-property-EXTRA_PAGE_SIZE' class='name expandable'>EXTRA_PAGE_SIZE</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Used as an int extra field to denote the number of media items in a page. ...</div><div class='long'><p>Used as an int extra field to denote the number of media items in a page.\nThe value of {@code EXTRA_PAGE_SIZE} should be greater than or equal to 1.</p>\n\n<p>@see <a href=\"#!/api/android.media.browse.MediaBrowser-property-EXTRA_PAGE\" rel=\"android.media.browse.MediaBrowser-property-EXTRA_PAGE\" class=\"docClass\">EXTRA_PAGE</a></p>\n<p>Defaults to: <code>&quot;android.media.browse.extra.PAGE_SIZE&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-connect' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.browse.MediaBrowser'>android.media.browse.MediaBrowser</span><br/><a href='source/MediaBrowser.html#android-media-browse-MediaBrowser-method-connect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.browse.MediaBrowser-method-connect' class='name expandable'>connect</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Connects to the media browser service. ...</div><div class='long'><p>Connects to the media browser service.\n <p>\n The connection callback specified in the constructor will be invoked\n when the connection completes or fails.\n </p></p>\n</div></div></div><div id='method-disconnect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.browse.MediaBrowser'>android.media.browse.MediaBrowser</span><br/><a href='source/MediaBrowser.html#android-media-browse-MediaBrowser-method-disconnect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.browse.MediaBrowser-method-disconnect' class='name expandable'>disconnect</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Disconnects from the media browser service. ...</div><div class='long'><p>Disconnects from the media browser service.\n After this, no more callbacks will be received.</p>\n</div></div></div><div id='method-getExtras' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.browse.MediaBrowser'>android.media.browse.MediaBrowser</span><br/><a href='source/MediaBrowser.html#android-media-browse-MediaBrowser-method-getExtras' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.browse.MediaBrowser-method-getExtras' class='name expandable'>getExtras</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets any extras for the media service. ...</div><div class='long'><p>Gets any extras for the media service.</p>\n<h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalStateException if not connected.</p>\n</div></li></ul></div></div></div><div id='method-getItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.browse.MediaBrowser'>android.media.browse.MediaBrowser</span><br/><a href='source/MediaBrowser.html#android-media-browse-MediaBrowser-method-getItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.browse.MediaBrowser-method-getItem' class='name expandable'>getItem</a>( <span class='pre'>mediaId, cb</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves a specific android.media.browse.MediaBrowser.MediaItem from the connected service. ...</div><div class='long'><p>Retrieves a specific <a href=\"#!/api/android.media.browse.MediaBrowser.MediaItem\" rel=\"android.media.browse.MediaBrowser.MediaItem\" class=\"docClass\">android.media.browse.MediaBrowser.MediaItem</a> from the connected service. Not\n all services may support this, so falling back to subscribing to the\n parent's id should be used when unavailable.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mediaId</span> : String<div class='sub-desc'><p>The id of the item to retrieve.</p>\n</div></li><li><span class='pre'>cb</span> : Object {MediaBrowser.ItemCallback}<div class='sub-desc'><p>The callback to receive the result on.</p>\n</div></li></ul></div></div></div><div id='method-getRoot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.browse.MediaBrowser'>android.media.browse.MediaBrowser</span><br/><a href='source/MediaBrowser.html#android-media-browse-MediaBrowser-method-getRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.browse.MediaBrowser-method-getRoot' class='name expandable'>getRoot</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the root id. ...</div><div class='long'><p>Gets the root id.\n <p>\n Note that the root id may become invalid or change when the\n browser is disconnected.\n </p></p>\n<h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalStateException if not connected.</p>\n</div></li></ul></div></div></div><div id='method-getServiceComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.browse.MediaBrowser'>android.media.browse.MediaBrowser</span><br/><a href='source/MediaBrowser.html#android-media-browse-MediaBrowser-method-getServiceComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.browse.MediaBrowser-method-getServiceComponent' class='name expandable'>getServiceComponent</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the service component that the media browser is connected to. ...</div><div class='long'><p>Gets the service component that the media browser is connected to.</p>\n</div></div></div><div id='method-getSessionToken' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.browse.MediaBrowser'>android.media.browse.MediaBrowser</span><br/><a href='source/MediaBrowser.html#android-media-browse-MediaBrowser-method-getSessionToken' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.browse.MediaBrowser-method-getSessionToken' class='name expandable'>getSessionToken</a>( <span class='pre'></span> ) : Object {android.media.session.MediaSession.Token}<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the media session token associated with the media browser. ...</div><div class='long'><p>Gets the media session token associated with the media browser.\n <p>\n Note that the session token may become invalid or change when the\n browser is disconnected.\n </p></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.media.session.MediaSession.Token}</span><div class='sub-desc'><p>The session token for the browser, never null.</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalStateException if not connected.</p>\n</div></li></ul></div></div></div><div id='method-isConnected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.browse.MediaBrowser'>android.media.browse.MediaBrowser</span><br/><a href='source/MediaBrowser.html#android-media-browse-MediaBrowser-method-isConnected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.browse.MediaBrowser-method-isConnected' class='name expandable'>isConnected</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns whether the browser is connected to the service. ...</div><div class='long'><p>Returns whether the browser is connected to the service.</p>\n</div></div></div><div id='method-subscribe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.browse.MediaBrowser'>android.media.browse.MediaBrowser</span><br/><a href='source/MediaBrowser.html#android-media-browse-MediaBrowser-method-subscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.browse.MediaBrowser-method-subscribe' class='name expandable'>subscribe</a>( <span class='pre'>parentId, options, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Queries with service-specific arguments for information about the media items\n that are contained within the specifie...</div><div class='long'><p>Queries with service-specific arguments for information about the media items\n that are contained within the specified id and subscribes to receive updates\n when they change.\n <p>\n The list of subscriptions is maintained even when not connected and is\n restored after the reconnection. It is ok to subscribe while not connected\n but the results will not be returned until the connection completes.\n </p>\n <p>\n If the id is already subscribed with a different callback then the new\n callback will replace the previous one and the child data will be\n reloaded.\n </p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parentId</span> : String<div class='sub-desc'><p>The id of the parent media item whose list of children\n            will be subscribed.</p>\n</div></li><li><span class='pre'>options</span> : Object {Bundle}<div class='sub-desc'><p>The bundle of service-specific arguments to send to the media\n            browser service. The contents of this bundle may affect the\n            information returned when browsing.</p>\n</div></li><li><span class='pre'>callback</span> : Object {MediaBrowser.SubscriptionCallback}<div class='sub-desc'><p>The callback to receive the list of children.</p>\n</div></li></ul></div></div></div><div id='method-unsubscribe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.browse.MediaBrowser'>android.media.browse.MediaBrowser</span><br/><a href='source/MediaBrowser.html#android-media-browse-MediaBrowser-method-unsubscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.browse.MediaBrowser-method-unsubscribe' class='name expandable'>unsubscribe</a>( <span class='pre'>parentId, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Unsubscribes for changes to the children of the specified media id through a callback. ...</div><div class='long'><p>Unsubscribes for changes to the children of the specified media id through a callback.\n <p>\n The query callback will no longer be invoked for results associated with\n this id once this method returns.\n </p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parentId</span> : String<div class='sub-desc'><p>The id of the parent media item whose list of children\n            will be unsubscribed.</p>\n</div></li><li><span class='pre'>callback</span> : Object {MediaBrowser.SubscriptionCallback}<div class='sub-desc'><p>A callback sent to the media browser service to subscribe.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});