Ext.data.JsonP.android_app_Application({"tagname":"class","name":"android.app.Application","autodetected":{},"files":[{"filename":"Application.js","href":"Application.html#android-app-Application"}],"extends":"android.content.ContextWrapper","members":[{"name":"getProcessName","tagname":"method","owner":"android.app.Application","id":"method-getProcessName","meta":{}},{"name":"onConfigurationChanged","tagname":"method","owner":"android.app.Application","id":"method-onConfigurationChanged","meta":{}},{"name":"onCreate","tagname":"method","owner":"android.app.Application","id":"method-onCreate","meta":{}},{"name":"onLowMemory","tagname":"method","owner":"android.app.Application","id":"method-onLowMemory","meta":{}},{"name":"onTerminate","tagname":"method","owner":"android.app.Application","id":"method-onTerminate","meta":{}},{"name":"onTrimMemory","tagname":"method","owner":"android.app.Application","id":"method-onTrimMemory","meta":{}},{"name":"registerActivityLifecycleCallbacks","tagname":"method","owner":"android.app.Application","id":"method-registerActivityLifecycleCallbacks","meta":{}},{"name":"registerComponentCallbacks","tagname":"method","owner":"android.app.Application","id":"method-registerComponentCallbacks","meta":{}},{"name":"registerOnProvideAssistDataListener","tagname":"method","owner":"android.app.Application","id":"method-registerOnProvideAssistDataListener","meta":{}},{"name":"unregisterActivityLifecycleCallbacks","tagname":"method","owner":"android.app.Application","id":"method-unregisterActivityLifecycleCallbacks","meta":{}},{"name":"unregisterComponentCallbacks","tagname":"method","owner":"android.app.Application","id":"method-unregisterComponentCallbacks","meta":{}},{"name":"unregisterOnProvideAssistDataListener","tagname":"method","owner":"android.app.Application","id":"method-unregisterOnProvideAssistDataListener","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.app.Application","short_doc":"implements android.content.ComponentCallbacks2\n\nBase class for maintaining global application state. ...","classIcon":"icon-class","superclasses":["android.content.ContextWrapper"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>android.content.ContextWrapper<div class='subclass '><strong>android.app.Application</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Application.html#android-app-Application' target='_blank'>Application.js</a></div></pre><div class='doc-contents'><p>implements android.content.ComponentCallbacks2</p>\n\n<p>Base class for maintaining global application state. You can provide your own\n implementation by creating a subclass and specifying the fully-qualified name\n of this subclass as the <code>\"android:name\"</code> attribute in your\n AndroidManifest.xml's <code>&lt;application&gt;</code> tag. The Application\n class, or your subclass of the Application class, is instantiated before any\n other class when the process for your application/package is created.</p>\n\n<p> <p class=\"note\"><strong>Note: </strong>There is normally no need to subclass\n Application.  In most situations, static singletons can provide the same\n functionality in a more modular way.  If your singleton needs a global\n context (for example to register broadcast receivers), include\n Context.getApplicationContext()\n as a android.content.Context argument when invoking your singleton's\n <code>getInstance()</code> method.\n </p></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getProcessName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Application'>android.app.Application</span><br/><a href='source/Application.html#android-app-Application-method-getProcessName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Application-method-getProcessName' class='name expandable'>getProcessName</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the name of the current process. ...</div><div class='long'><p>Returns the name of the current process. A package's default process name\n is the same as its package name. Non-default processes will look like\n \"$PACKAGE_NAME:$NAME\", where $NAME corresponds to an android:process\n attribute within AndroidManifest.xml.</p>\n</div></div></div><div id='method-onConfigurationChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Application'>android.app.Application</span><br/><a href='source/Application.html#android-app-Application-method-onConfigurationChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Application-method-onConfigurationChanged' class='name expandable'>onConfigurationChanged</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onCreate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Application'>android.app.Application</span><br/><a href='source/Application.html#android-app-Application-method-onCreate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Application-method-onCreate' class='name expandable'>onCreate</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when the application is starting, before any activity, service,\n or receiver objects (excluding content provid...</div><div class='long'><p>Called when the application is starting, before any activity, service,\n or receiver objects (excluding content providers) have been created.</p>\n\n<p> <p>Implementations should be as quick as possible (for example using\n lazy initialization of state) since the time spent in this function\n directly impacts the performance of starting the first activity,\n service, or receiver in a process.</p></p>\n\n<p> <p>If you override this method, be sure to call {@code super.onCreate()}.</p></p>\n\n<p> <p class=\"note\">Be aware that direct boot may also affect callback order on\n Android android.os.Build.VERSION_CODES.N and later devices.\n Until the user unlocks the device, only direct boot aware components are\n allowed to run. You should consider that all direct boot unaware\n components, including such android.content.ContentProvider, are\n disabled until user unlock happens, especially when component callback\n order matters.</p></p>\n</div></div></div><div id='method-onLowMemory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Application'>android.app.Application</span><br/><a href='source/Application.html#android-app-Application-method-onLowMemory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Application-method-onLowMemory' class='name expandable'>onLowMemory</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onTerminate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Application'>android.app.Application</span><br/><a href='source/Application.html#android-app-Application-method-onTerminate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Application-method-onTerminate' class='name expandable'>onTerminate</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method is for use in emulated process environments. ...</div><div class='long'><p>This method is for use in emulated process environments.  It will\n never be called on a production Android device, where processes are\n removed by simply killing them; no user code (including this callback)\n is executed when doing so.</p>\n</div></div></div><div id='method-onTrimMemory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Application'>android.app.Application</span><br/><a href='source/Application.html#android-app-Application-method-onTrimMemory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Application-method-onTrimMemory' class='name expandable'>onTrimMemory</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-registerActivityLifecycleCallbacks' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Application'>android.app.Application</span><br/><a href='source/Application.html#android-app-Application-method-registerActivityLifecycleCallbacks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Application-method-registerActivityLifecycleCallbacks' class='name expandable'>registerActivityLifecycleCallbacks</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-registerComponentCallbacks' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Application'>android.app.Application</span><br/><a href='source/Application.html#android-app-Application-method-registerComponentCallbacks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Application-method-registerComponentCallbacks' class='name expandable'>registerComponentCallbacks</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-registerOnProvideAssistDataListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Application'>android.app.Application</span><br/><a href='source/Application.html#android-app-Application-method-registerOnProvideAssistDataListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Application-method-registerOnProvideAssistDataListener' class='name expandable'>registerOnProvideAssistDataListener</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-unregisterActivityLifecycleCallbacks' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Application'>android.app.Application</span><br/><a href='source/Application.html#android-app-Application-method-unregisterActivityLifecycleCallbacks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Application-method-unregisterActivityLifecycleCallbacks' class='name expandable'>unregisterActivityLifecycleCallbacks</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-unregisterComponentCallbacks' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Application'>android.app.Application</span><br/><a href='source/Application.html#android-app-Application-method-unregisterComponentCallbacks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Application-method-unregisterComponentCallbacks' class='name expandable'>unregisterComponentCallbacks</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-unregisterOnProvideAssistDataListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Application'>android.app.Application</span><br/><a href='source/Application.html#android-app-Application-method-unregisterOnProvideAssistDataListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Application-method-unregisterOnProvideAssistDataListener' class='name expandable'>unregisterOnProvideAssistDataListener</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});