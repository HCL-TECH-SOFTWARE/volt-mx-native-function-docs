Ext.data.JsonP.android_app_LoaderManager({"tagname":"class","name":"android.app.LoaderManager","autodetected":{},"files":[{"filename":"LoaderManager.js","href":"LoaderManager.html#android-app-LoaderManager"}],"extends":"java.lang.Object","deprecated":{"text":"<p>Use the <a href=\"{@docRoot}tools/extras/support-library.html\">Support Library</a>\n      android.support.v4.app.LoaderManager</p>\n"},"members":[{"name":"destroyLoader","tagname":"method","owner":"android.app.LoaderManager","id":"method-destroyLoader","meta":{}},{"name":"dump","tagname":"method","owner":"android.app.LoaderManager","id":"method-dump","meta":{}},{"name":"enableDebugLogging","tagname":"method","owner":"android.app.LoaderManager","id":"method-enableDebugLogging","meta":{}},{"name":"getLoader","tagname":"method","owner":"android.app.LoaderManager","id":"method-getLoader","meta":{}},{"name":"initLoader","tagname":"method","owner":"android.app.LoaderManager","id":"method-initLoader","meta":{}},{"name":"restartLoader","tagname":"method","owner":"android.app.LoaderManager","id":"method-restartLoader","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.app.LoaderManager","short_doc":"Interface associated with an android.app.Activity or android.app.Fragment for managing\n one or more android.content.L...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.app.LoaderManager</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/LoaderManager.html#android-app-LoaderManager' target='_blank'>LoaderManager.js</a></div></pre><div class='doc-contents'><p>Interface associated with an <a href=\"#!/api/android.app.Activity\" rel=\"android.app.Activity\" class=\"docClass\">android.app.Activity</a> or <a href=\"#!/api/android.app.Fragment\" rel=\"android.app.Fragment\" class=\"docClass\">android.app.Fragment</a> for managing\n one or more android.content.Loader instances associated with it.  This\n helps an application manage longer-running operations in conjunction with the\n Activity or Fragment lifecycle; the most common use of this is with a\n android.content.CursorLoader, however applications are free to write\n their own loaders for loading other types of data.</p>\n\n<p> While the LoaderManager API was introduced in\n android.os.Build.VERSION_CODES.HONEYCOMB, a version of the API\n at is also available for use on older platforms through\n android.support.v4.app.FragmentActivity.  See the blog post\n <a href=\"http://android-developers.blogspot.com/2011/03/fragments-for-all.html\">\n Fragments For All</a> for more details.</p>\n\n<p> <p>As an example, here is the full implementation of a <a href=\"#!/api/android.app.Fragment\" rel=\"android.app.Fragment\" class=\"docClass\">android.app.Fragment</a>\n that displays a android.widget.ListView containing the results of\n a query against the contacts content provider.  It uses a\n android.content.CursorLoader to manage the query on the provider.</p>\n\n<p> {@sample development/samples/ApiDemos/src/com/example/android/apis/app/LoaderCursor.java\n      fragment_cursor}</p>\n\n<p> <div class=\"special reference\">\n <h3>Developer Guides</h3>\n <p>For more information about using loaders, read the\n <a href=\"{@docRoot}guide/topics/fundamentals/loaders.html\">Loaders</a> developer guide.</p>\n </div></p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This class has been <strong>deprecated</strong> </p>\n        <p>Use the <a href=\"{@docRoot}tools/extras/support-library.html\">Support Library</a>\n      android.support.v4.app.LoaderManager</p>\n\n        </div>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-destroyLoader' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.LoaderManager'>android.app.LoaderManager</span><br/><a href='source/LoaderManager.html#android-app-LoaderManager-method-destroyLoader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.LoaderManager-method-destroyLoader' class='name expandable'>destroyLoader</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Stops and removes the loader with the given ID. ...</div><div class='long'><p>Stops and removes the loader with the given ID.  If this loader\n had previously reported data to the client through\n Object), a call\n will be made to android.app.LoaderManager.LoaderCallbacks.onLoaderReset(Loader).</p>\n</div></div></div><div id='method-dump' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.LoaderManager'>android.app.LoaderManager</span><br/><a href='source/LoaderManager.html#android-app-LoaderManager-method-dump' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.LoaderManager-method-dump' class='name expandable'>dump</a>( <span class='pre'>prefix, fd, writer, args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Print the LoaderManager's state into the given stream. ...</div><div class='long'><p>Print the LoaderManager's state into the given stream.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prefix</span> : String<div class='sub-desc'><p>Text to print at the front of each line.</p>\n</div></li><li><span class='pre'>fd</span> : Object {FileDescriptor}<div class='sub-desc'><p>The raw file descriptor that the dump is being sent to.</p>\n</div></li><li><span class='pre'>writer</span> : Object {PrintWriter}<div class='sub-desc'><p>A PrintWriter to which the dump is to be set.</p>\n</div></li><li><span class='pre'>args</span> : Object {java.lang.String[]}<div class='sub-desc'><p>Additional arguments to the dump request.</p>\n</div></li></ul></div></div></div><div id='method-enableDebugLogging' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.LoaderManager'>android.app.LoaderManager</span><br/><a href='source/LoaderManager.html#android-app-LoaderManager-method-enableDebugLogging' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.LoaderManager-method-enableDebugLogging' class='name expandable'>enableDebugLogging</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Control whether the framework's internal loader manager debugging\n logs are turned on. ...</div><div class='long'><p>Control whether the framework's internal loader manager debugging\n logs are turned on.  If enabled, you will see output in logcat as\n the framework performs loader operations.</p>\n</div></div></div><div id='method-getLoader' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.LoaderManager'>android.app.LoaderManager</span><br/><a href='source/LoaderManager.html#android-app-LoaderManager-method-getLoader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.LoaderManager-method-getLoader' class='name expandable'>getLoader</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the Loader with the given id or null if no matching Loader\n is found. ...</div><div class='long'><p>Return the Loader with the given id or null if no matching Loader\n is found.</p>\n</div></div></div><div id='method-initLoader' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.LoaderManager'>android.app.LoaderManager</span><br/><a href='source/LoaderManager.html#android-app-LoaderManager-method-initLoader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.LoaderManager-method-initLoader' class='name expandable'>initLoader</a>( <span class='pre'>id, args, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Ensures a loader is initialized and active. ...</div><div class='long'><p>Ensures a loader is initialized and active.  If the loader doesn't\n already exist, one is created and (if the activity/fragment is currently\n started) starts the loader.  Otherwise the last created\n loader is re-used.</p>\n\n<p> <p>In either case, the given callback is associated with the loader, and\n will be called as the loader state changes.  If at the point of call\n the caller is in its started state, and the requested loader\n already exists and has generated its data, then\n callback <a href=\"#!/api/android.app.LoaderManager.LoaderCallbacks-method-onLoadFinished\" rel=\"android.app.LoaderManager.LoaderCallbacks-method-onLoadFinished\" class=\"docClass\">android.app.LoaderManager.LoaderCallbacks.onLoadFinished</a> will\n be called immediately (inside of this function), so you must be prepared\n for this to happen.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Number<div class='sub-desc'><p>A unique identifier for this loader.  Can be whatever you want.\n Identifiers are scoped to a particular LoaderManager instance.</p>\n</div></li><li><span class='pre'>args</span> : Object {Bundle}<div class='sub-desc'><p>Optional arguments to supply to the loader at construction.\n If a loader already exists (a new one does not need to be created), this\n parameter will be ignored and the last arguments continue to be used.</p>\n</div></li><li><span class='pre'>callback</span> : Object {android.app.LoaderManager.LoaderCallbacks}<div class='sub-desc'><p>Interface the LoaderManager will call to report about\n changes in the state of the loader.  Required.</p>\n</div></li></ul></div></div></div><div id='method-restartLoader' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.LoaderManager'>android.app.LoaderManager</span><br/><a href='source/LoaderManager.html#android-app-LoaderManager-method-restartLoader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.LoaderManager-method-restartLoader' class='name expandable'>restartLoader</a>( <span class='pre'>id, args, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Starts a new or restarts an existing android.content.Loader in\n this manager, registers the callbacks to it,\n and (if...</div><div class='long'><p>Starts a new or restarts an existing android.content.Loader in\n this manager, registers the callbacks to it,\n and (if the activity/fragment is currently started) starts loading it.\n If a loader with the same id has previously been\n started it will automatically be destroyed when the new loader completes\n its work. The callback will be delivered before the old loader\n is destroyed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Number<div class='sub-desc'><p>A unique identifier for this loader.  Can be whatever you want.\n Identifiers are scoped to a particular LoaderManager instance.</p>\n</div></li><li><span class='pre'>args</span> : Object {Bundle}<div class='sub-desc'><p>Optional arguments to supply to the loader at construction.</p>\n</div></li><li><span class='pre'>callback</span> : Object {android.app.LoaderManager.LoaderCallbacks}<div class='sub-desc'><p>Interface the LoaderManager will call to report about\n changes in the state of the loader.  Required.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"deprecated":{"text":"<p>Use the <a href=\"{@docRoot}tools/extras/support-library.html\">Support Library</a>\n      android.support.v4.app.LoaderManager</p>\n"}}});