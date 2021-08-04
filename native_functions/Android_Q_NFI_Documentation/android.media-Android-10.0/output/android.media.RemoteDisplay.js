Ext.data.JsonP.android_media_RemoteDisplay({"tagname":"class","name":"android.media.RemoteDisplay","autodetected":{},"files":[{"filename":"RemoteDisplay.js","href":"RemoteDisplay.html#android-media-RemoteDisplay"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"DISPLAY_ERROR_CONNECTION_DROPPED","tagname":"property","owner":"android.media.RemoteDisplay","id":"property-DISPLAY_ERROR_CONNECTION_DROPPED","meta":{}},{"name":"DISPLAY_ERROR_UNKOWN","tagname":"property","owner":"android.media.RemoteDisplay","id":"property-DISPLAY_ERROR_UNKOWN","meta":{}},{"name":"DISPLAY_FLAG_SECURE","tagname":"property","owner":"android.media.RemoteDisplay","id":"property-DISPLAY_FLAG_SECURE","meta":{}},{"name":"dispose","tagname":"method","owner":"android.media.RemoteDisplay","id":"method-dispose","meta":{}},{"name":"listen","tagname":"method","owner":"android.media.RemoteDisplay","id":"method-listen","meta":{}},{"name":"pause","tagname":"method","owner":"android.media.RemoteDisplay","id":"method-pause","meta":{}},{"name":"resume","tagname":"method","owner":"android.media.RemoteDisplay","id":"method-resume","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.media.RemoteDisplay","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.media.RemoteDisplay</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/RemoteDisplay.html#android-media-RemoteDisplay' target='_blank'>RemoteDisplay.js</a></div></pre><div class='doc-contents'><p>Listens for Wifi remote display connections managed by the media server.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-DISPLAY_ERROR_CONNECTION_DROPPED' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.RemoteDisplay'>android.media.RemoteDisplay</span><br/><a href='source/RemoteDisplay.html#android-media-RemoteDisplay-property-DISPLAY_ERROR_CONNECTION_DROPPED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.RemoteDisplay-property-DISPLAY_ERROR_CONNECTION_DROPPED' class='name expandable'>DISPLAY_ERROR_CONNECTION_DROPPED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;2&quot;</code></p></div></div></div><div id='property-DISPLAY_ERROR_UNKOWN' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.RemoteDisplay'>android.media.RemoteDisplay</span><br/><a href='source/RemoteDisplay.html#android-media-RemoteDisplay-property-DISPLAY_ERROR_UNKOWN' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.RemoteDisplay-property-DISPLAY_ERROR_UNKOWN' class='name expandable'>DISPLAY_ERROR_UNKOWN</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-DISPLAY_FLAG_SECURE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.RemoteDisplay'>android.media.RemoteDisplay</span><br/><a href='source/RemoteDisplay.html#android-media-RemoteDisplay-property-DISPLAY_FLAG_SECURE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.RemoteDisplay-property-DISPLAY_FLAG_SECURE' class='name expandable'>DISPLAY_FLAG_SECURE</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-dispose' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.RemoteDisplay'>android.media.RemoteDisplay</span><br/><a href='source/RemoteDisplay.html#android-media-RemoteDisplay-method-dispose' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.RemoteDisplay-method-dispose' class='name expandable'>dispose</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Disconnects the remote display and stops listening for new connections. ...</div><div class='long'><p>Disconnects the remote display and stops listening for new connections.</p>\n</div></div></div><div id='method-listen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.RemoteDisplay'>android.media.RemoteDisplay</span><br/><a href='source/RemoteDisplay.html#android-media-RemoteDisplay-method-listen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.RemoteDisplay-method-listen' class='name expandable'>listen</a>( <span class='pre'>iface, listener, handler</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Starts listening for displays to be connected on the specified interface. ...</div><div class='long'><p>Starts listening for displays to be connected on the specified interface.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>iface</span> : String<div class='sub-desc'><p>The interface address and port in the form \"x.x.x.x:y\".</p>\n</div></li><li><span class='pre'>listener</span> : Object {RemoteDisplay.Listener}<div class='sub-desc'><p>The listener to invoke when displays are connected or disconnected.</p>\n</div></li><li><span class='pre'>handler</span> : Object {Handler}<div class='sub-desc'><p>The handler on which to invoke the listener.</p>\n</div></li></ul></div></div></div><div id='method-pause' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.RemoteDisplay'>android.media.RemoteDisplay</span><br/><a href='source/RemoteDisplay.html#android-media-RemoteDisplay-method-pause' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.RemoteDisplay-method-pause' class='name expandable'>pause</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-resume' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.RemoteDisplay'>android.media.RemoteDisplay</span><br/><a href='source/RemoteDisplay.html#android-media-RemoteDisplay-method-resume' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.RemoteDisplay-method-resume' class='name expandable'>resume</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});