Ext.data.JsonP.android_media_MediaCas_Session({"tagname":"class","name":"android.media.MediaCas.Session","autodetected":{},"files":[{"filename":"Session.js","href":"Session.html#android-media-MediaCas-Session"}],"extends":"java.lang.Object","members":[{"name":"close","tagname":"method","owner":"android.media.MediaCas.Session","id":"method-close","meta":{}},{"name":"equals","tagname":"method","owner":"android.media.MediaCas.Session","id":"method-equals","meta":{}},{"name":"processEcm","tagname":"method","owner":"android.media.MediaCas.Session","id":"method-processEcm","meta":{}},{"name":"sendSessionEvent","tagname":"method","owner":"android.media.MediaCas.Session","id":"method-sendSessionEvent","meta":{}},{"name":"setPrivateData","tagname":"method","owner":"android.media.MediaCas.Session","id":"method-setPrivateData","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.media.MediaCas.Session","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.media.MediaCas.Session</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Session.html#android-media-MediaCas-Session' target='_blank'>Session.js</a></div></pre><div class='doc-contents'><p>implements java.lang.AutoCloseable</p>\n\n<p>Class for an open session with the CA system.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-close' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.MediaCas.Session'>android.media.MediaCas.Session</span><br/><a href='source/Session.html#android-media-MediaCas-Session-method-close' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.MediaCas.Session-method-close' class='name expandable'>close</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Close the session. ...</div><div class='long'><p>Close the session.</p>\n<h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalStateException if the MediaCas instance is not valid.</p>\n</div></li><li><span class='pre'>Object</span><div class='sub-desc'><p>MediaCasStateException for CAS-specific state exceptions.</p>\n</div></li></ul></div></div></div><div id='method-equals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.MediaCas.Session'>android.media.MediaCas.Session</span><br/><a href='source/Session.html#android-media-MediaCas-Session-method-equals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.MediaCas.Session-method-equals' class='name expandable'>equals</a>( <span class='pre'>obj</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Query if an object equal current Session object. ...</div><div class='long'><p>Query if an object equal current Session object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object {Object}<div class='sub-desc'><p>an object to compare to current Session object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether input object equal current Session object.</p>\n</div></li></ul></div></div></div><div id='method-processEcm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.MediaCas.Session'>android.media.MediaCas.Session</span><br/><a href='source/Session.html#android-media-MediaCas-Session-method-processEcm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.MediaCas.Session-method-processEcm' class='name expandable'>processEcm</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Send a received ECM packet to the specified session of the CA system. ...</div><div class='long'><p>Send a received ECM packet to the specified session of the CA system.\n This is similar to int, int)\n except that the entire byte array is sent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object {byte[]}<div class='sub-desc'><p>byte array of the ECM data.</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalStateException if the MediaCas instance is not valid.</p>\n</div></li><li><span class='pre'>Object</span><div class='sub-desc'><p>MediaCasException for CAS-specific errors.</p>\n</div></li><li><span class='pre'>Object</span><div class='sub-desc'><p>MediaCasStateException for CAS-specific state exceptions.</p>\n</div></li></ul></div></div></div><div id='method-sendSessionEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.MediaCas.Session'>android.media.MediaCas.Session</span><br/><a href='source/Session.html#android-media-MediaCas-Session-method-sendSessionEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.MediaCas.Session-method-sendSessionEvent' class='name expandable'>sendSessionEvent</a>( <span class='pre'>event, arg, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Send a session event to a CA system. ...</div><div class='long'><p>Send a session event to a CA system. The format of the event is\n scheme-specific and is opaque to the framework.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Number<div class='sub-desc'><p>an integer denoting a scheme-specific event to be sent.</p>\n</div></li><li><span class='pre'>arg</span> : Number<div class='sub-desc'><p>a scheme-specific integer argument for the event.</p>\n</div></li><li><span class='pre'>data</span> : Object {byte[]}<div class='sub-desc'><p>a byte array containing scheme-specific data for the event.</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalStateException if the MediaCas instance is not valid.</p>\n</div></li><li><span class='pre'>Object</span><div class='sub-desc'><p>MediaCasException for CAS-specific errors.</p>\n</div></li><li><span class='pre'>Object</span><div class='sub-desc'><p>MediaCasStateException for CAS-specific state exceptions.</p>\n</div></li></ul></div></div></div><div id='method-setPrivateData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.MediaCas.Session'>android.media.MediaCas.Session</span><br/><a href='source/Session.html#android-media-MediaCas-Session-method-setPrivateData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.MediaCas.Session-method-setPrivateData' class='name expandable'>setPrivateData</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the private data for a session. ...</div><div class='long'><p>Set the private data for a session.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object {byte[]}<div class='sub-desc'><p>byte array of the private data.</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalStateException if the MediaCas instance is not valid.</p>\n</div></li><li><span class='pre'>Object</span><div class='sub-desc'><p>MediaCasException for CAS-specific errors.</p>\n</div></li><li><span class='pre'>Object</span><div class='sub-desc'><p>MediaCasStateException for CAS-specific state exceptions.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});