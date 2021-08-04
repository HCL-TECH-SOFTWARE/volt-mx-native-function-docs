Ext.data.JsonP.android_app_Instrumentation_ActivityMonitor({"tagname":"class","name":"android.app.Instrumentation.ActivityMonitor","autodetected":{},"files":[{"filename":"ActivityMonitor.js","href":"ActivityMonitor.html#android-app-Instrumentation-ActivityMonitor"}],"extends":"java.lang.Object","members":[{"name":"getFilter","tagname":"method","owner":"android.app.Instrumentation.ActivityMonitor","id":"method-getFilter","meta":{}},{"name":"getHits","tagname":"method","owner":"android.app.Instrumentation.ActivityMonitor","id":"method-getHits","meta":{}},{"name":"getLastActivity","tagname":"method","owner":"android.app.Instrumentation.ActivityMonitor","id":"method-getLastActivity","meta":{}},{"name":"getResult","tagname":"method","owner":"android.app.Instrumentation.ActivityMonitor","id":"method-getResult","meta":{}},{"name":"isBlocking","tagname":"method","owner":"android.app.Instrumentation.ActivityMonitor","id":"method-isBlocking","meta":{}},{"name":"onStartActivity","tagname":"method","owner":"android.app.Instrumentation.ActivityMonitor","id":"method-onStartActivity","meta":{}},{"name":"waitForActivity","tagname":"method","owner":"android.app.Instrumentation.ActivityMonitor","id":"method-waitForActivity","meta":{}},{"name":"waitForActivityWithTimeout","tagname":"method","owner":"android.app.Instrumentation.ActivityMonitor","id":"method-waitForActivityWithTimeout","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.app.Instrumentation.ActivityMonitor","short_doc":"Information about a particular kind of Intent that is being monitored. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.app.Instrumentation.ActivityMonitor</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ActivityMonitor.html#android-app-Instrumentation-ActivityMonitor' target='_blank'>ActivityMonitor.js</a></div></pre><div class='doc-contents'><p>Information about a particular kind of Intent that is being monitored.\n An instance of this class is added to the\n current instrumentation through addMonitor; after being added,\n when a new activity is being started the monitor will be checked and, if\n matching, its hit count updated and (optionally) the call stopped and a\n canned result returned.</p>\n\n<p> <p>An ActivityMonitor can also be used to look for the creation of an\n activity, through the <a href=\"#!/api/android.app.Instrumentation.ActivityMonitor-method-waitForActivity\" rel=\"android.app.Instrumentation.ActivityMonitor-method-waitForActivity\" class=\"docClass\">waitForActivity</a> method.  This will return\n after a matching activity has been created with that activity object.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getFilter' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Instrumentation.ActivityMonitor'>android.app.Instrumentation.ActivityMonitor</span><br/><a href='source/ActivityMonitor.html#android-app-Instrumentation-ActivityMonitor-method-getFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Instrumentation.ActivityMonitor-method-getFilter' class='name expandable'>getFilter</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieve the filter associated with this ActivityMonitor. ...</div><div class='long'><p>Retrieve the filter associated with this ActivityMonitor.</p>\n</div></div></div><div id='method-getHits' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Instrumentation.ActivityMonitor'>android.app.Instrumentation.ActivityMonitor</span><br/><a href='source/ActivityMonitor.html#android-app-Instrumentation-ActivityMonitor-method-getHits' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Instrumentation.ActivityMonitor-method-getHits' class='name expandable'>getHits</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieve the number of times the monitor has been hit so far. ...</div><div class='long'><p>Retrieve the number of times the monitor has been hit so far.</p>\n</div></div></div><div id='method-getLastActivity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Instrumentation.ActivityMonitor'>android.app.Instrumentation.ActivityMonitor</span><br/><a href='source/ActivityMonitor.html#android-app-Instrumentation-ActivityMonitor-method-getLastActivity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Instrumentation.ActivityMonitor-method-getLastActivity' class='name expandable'>getLastActivity</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieve the most recent activity class that was seen by this\n monitor. ...</div><div class='long'><p>Retrieve the most recent activity class that was seen by this\n monitor.</p>\n</div></div></div><div id='method-getResult' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Instrumentation.ActivityMonitor'>android.app.Instrumentation.ActivityMonitor</span><br/><a href='source/ActivityMonitor.html#android-app-Instrumentation-ActivityMonitor-method-getResult' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Instrumentation.ActivityMonitor-method-getResult' class='name expandable'>getResult</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieve the result associated with this ActivityMonitor, or null if\n none. ...</div><div class='long'><p>Retrieve the result associated with this ActivityMonitor, or null if\n none.</p>\n</div></div></div><div id='method-isBlocking' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Instrumentation.ActivityMonitor'>android.app.Instrumentation.ActivityMonitor</span><br/><a href='source/ActivityMonitor.html#android-app-Instrumentation-ActivityMonitor-method-isBlocking' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Instrumentation.ActivityMonitor-method-isBlocking' class='name expandable'>isBlocking</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Check whether this monitor blocks activity starts (not allowing the\n actual activity to run) or allows them to execut...</div><div class='long'><p>Check whether this monitor blocks activity starts (not allowing the\n actual activity to run) or allows them to execute normally.</p>\n</div></div></div><div id='method-onStartActivity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Instrumentation.ActivityMonitor'>android.app.Instrumentation.ActivityMonitor</span><br/><a href='source/ActivityMonitor.html#android-app-Instrumentation-ActivityMonitor-method-onStartActivity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Instrumentation.ActivityMonitor-method-onStartActivity' class='name expandable'>onStartActivity</a>( <span class='pre'>intent</span> ) : Object {android.app.Instrumentation.ActivityResult}<span class=\"signature\"></span></div><div class='description'><div class='short'>Used for intercepting any started activity. ...</div><div class='long'><p>Used for intercepting any started activity.</p>\n\n<p> <p> A non-null return value here will be considered a hit for this monitor.\n By default this will return {@code null} and subclasses can override this to return\n a non-null value if the intent needs to be intercepted.</p>\n\n<p> <p> Whenever a new activity is started, this method will be called on instances created\n using Instrumentation.ActivityMonitor() to check if there is a match. In case\n of a match, the activity start will be blocked and the returned result will be used.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>intent</span> : Object {Intent}<div class='sub-desc'><p>The intent used for starting the activity.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.app.Instrumentation.ActivityResult}</span><div class='sub-desc'><p>The ActivityResult that needs to be used in case of a match.</p>\n</div></li></ul></div></div></div><div id='method-waitForActivity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Instrumentation.ActivityMonitor'>android.app.Instrumentation.ActivityMonitor</span><br/><a href='source/ActivityMonitor.html#android-app-Instrumentation-ActivityMonitor-method-waitForActivity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Instrumentation.ActivityMonitor-method-waitForActivity' class='name expandable'>waitForActivity</a>( <span class='pre'></span> ) : Object {android.app.Activity}<span class=\"signature\"></span></div><div class='description'><div class='short'>Block until an Activity is created that matches this monitor,\n returning the resulting activity. ...</div><div class='long'><p>Block until an Activity is created that matches this monitor,\n returning the resulting activity.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.app.Activity}</span><div class='sub-desc'><p>Activity</p>\n</div></li></ul></div></div></div><div id='method-waitForActivityWithTimeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Instrumentation.ActivityMonitor'>android.app.Instrumentation.ActivityMonitor</span><br/><a href='source/ActivityMonitor.html#android-app-Instrumentation-ActivityMonitor-method-waitForActivityWithTimeout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Instrumentation.ActivityMonitor-method-waitForActivityWithTimeout' class='name expandable'>waitForActivityWithTimeout</a>( <span class='pre'>timeOut</span> ) : Object {android.app.Activity}<span class=\"signature\"></span></div><div class='description'><div class='short'>Block until an Activity is created that matches this monitor,\n returning the resulting activity or till the timeOut p...</div><div class='long'><p>Block until an Activity is created that matches this monitor,\n returning the resulting activity or till the timeOut period expires.\n If the timeOut expires before the activity is started, return null.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>timeOut</span> : Number<div class='sub-desc'><p>Time to wait in milliseconds before the activity is created.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.app.Activity}</span><div class='sub-desc'><p>Activity</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});