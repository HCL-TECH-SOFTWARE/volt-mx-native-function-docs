Ext.data.JsonP.android_appwidget_AppWidgetProvider({"tagname":"class","name":"android.appwidget.AppWidgetProvider","autodetected":{},"files":[{"filename":"AppWidgetProvider.js","href":"AppWidgetProvider.html#android-appwidget-AppWidgetProvider"}],"extends":"android.content.BroadcastReceiver","members":[{"name":"onAppWidgetOptionsChanged","tagname":"method","owner":"android.appwidget.AppWidgetProvider","id":"method-onAppWidgetOptionsChanged","meta":{}},{"name":"onDeleted","tagname":"method","owner":"android.appwidget.AppWidgetProvider","id":"method-onDeleted","meta":{}},{"name":"onDisabled","tagname":"method","owner":"android.appwidget.AppWidgetProvider","id":"method-onDisabled","meta":{}},{"name":"onEnabled","tagname":"method","owner":"android.appwidget.AppWidgetProvider","id":"method-onEnabled","meta":{}},{"name":"onReceive","tagname":"method","owner":"android.appwidget.AppWidgetProvider","id":"method-onReceive","meta":{}},{"name":"onRestored","tagname":"method","owner":"android.appwidget.AppWidgetProvider","id":"method-onRestored","meta":{}},{"name":"onUpdate","tagname":"method","owner":"android.appwidget.AppWidgetProvider","id":"method-onUpdate","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.appwidget.AppWidgetProvider","short_doc":"A convenience class to aid in implementing an AppWidget provider. ...","classIcon":"icon-class","superclasses":["android.content.BroadcastReceiver"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>android.content.BroadcastReceiver<div class='subclass '><strong>android.appwidget.AppWidgetProvider</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/AppWidgetProvider.html#android-appwidget-AppWidgetProvider' target='_blank'>AppWidgetProvider.js</a></div></pre><div class='doc-contents'><p>A convenience class to aid in implementing an AppWidget provider.\n Everything you can do with AppWidgetProvider, you can do with a regular BroadcastReceiver.\n AppWidgetProvider merely parses the relevant fields out of the Intent that is received in\n onReceive(Context,Intent), and calls hook methods\n with the received extras.</p>\n\n<p> <p>Extend this class and override one or more of the <a href=\"#!/api/android.appwidget.AppWidgetProvider-method-onUpdate\" rel=\"android.appwidget.AppWidgetProvider-method-onUpdate\" class=\"docClass\">onUpdate</a>, <a href=\"#!/api/android.appwidget.AppWidgetProvider-method-onDeleted\" rel=\"android.appwidget.AppWidgetProvider-method-onDeleted\" class=\"docClass\">onDeleted</a>,\n <a href=\"#!/api/android.appwidget.AppWidgetProvider-method-onEnabled\" rel=\"android.appwidget.AppWidgetProvider-method-onEnabled\" class=\"docClass\">onEnabled</a> or <a href=\"#!/api/android.appwidget.AppWidgetProvider-method-onDisabled\" rel=\"android.appwidget.AppWidgetProvider-method-onDisabled\" class=\"docClass\">onDisabled</a> methods to implement your own AppWidget functionality.\n </p></p>\n\n<p> <div class=\"special reference\">\n <h3>Developer Guides</h3>\n <p>For more information about how to write an app widget provider, read the\n <a href=\"{@docRoot}guide/topics/appwidgets/index.html#AppWidgetProvider\">App Widgets</a>\n developer guide.</p>\n </div></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-onAppWidgetOptionsChanged' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.appwidget.AppWidgetProvider'>android.appwidget.AppWidgetProvider</span><br/><a href='source/AppWidgetProvider.html#android-appwidget-AppWidgetProvider-method-onAppWidgetOptionsChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.appwidget.AppWidgetProvider-method-onAppWidgetOptionsChanged' class='name expandable'>onAppWidgetOptionsChanged</a>( <span class='pre'>context, appWidgetManager, appWidgetId, newOptions</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called in response to the android.appwidget.AppWidgetManager.ACTION_APPWIDGET_OPTIONS_CHANGED\n broadcast when this wi...</div><div class='long'><p>Called in response to the <a href=\"#!/api/android.appwidget.AppWidgetManager-property-ACTION_APPWIDGET_OPTIONS_CHANGED\" rel=\"android.appwidget.AppWidgetManager-property-ACTION_APPWIDGET_OPTIONS_CHANGED\" class=\"docClass\">android.appwidget.AppWidgetManager.ACTION_APPWIDGET_OPTIONS_CHANGED</a>\n broadcast when this widget has been layed out at a new size.</p>\n\n<p> {@more}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : Object {Context}<div class='sub-desc'><p>The Context in which this receiver is\n                  running.</p>\n</div></li><li><span class='pre'>appWidgetManager</span> : Object {AppWidgetManager}<div class='sub-desc'><p>A AppWidgetManager object you can call AppWidgetManager.updateAppWidget on.</p>\n</div></li><li><span class='pre'>appWidgetId</span> : Number<div class='sub-desc'><p>The appWidgetId of the widget whose size changed.</p>\n</div></li><li><span class='pre'>newOptions</span> : Object {Bundle}<div class='sub-desc'><p>The appWidgetId of the widget whose size changed.\n@see AppWidgetManager#ACTION_APPWIDGET_OPTIONS_CHANGED</p>\n</div></li></ul></div></div></div><div id='method-onDeleted' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.appwidget.AppWidgetProvider'>android.appwidget.AppWidgetProvider</span><br/><a href='source/AppWidgetProvider.html#android-appwidget-AppWidgetProvider-method-onDeleted' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.appwidget.AppWidgetProvider-method-onDeleted' class='name expandable'>onDeleted</a>( <span class='pre'>context, appWidgetIds</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called in response to the android.appwidget.AppWidgetManager.ACTION_APPWIDGET_DELETED broadcast when\n one or more App...</div><div class='long'><p>Called in response to the <a href=\"#!/api/android.appwidget.AppWidgetManager-property-ACTION_APPWIDGET_DELETED\" rel=\"android.appwidget.AppWidgetManager-property-ACTION_APPWIDGET_DELETED\" class=\"docClass\">android.appwidget.AppWidgetManager.ACTION_APPWIDGET_DELETED</a> broadcast when\n one or more AppWidget instances have been deleted.  Override this method to implement\n your own AppWidget functionality.</p>\n\n<p> {@more}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : Object {Context}<div class='sub-desc'><p>The Context in which this receiver is\n                  running.</p>\n</div></li><li><span class='pre'>appWidgetIds</span> : Object {int[]}<div class='sub-desc'><p>The appWidgetIds that have been deleted from their host.\n@see AppWidgetManager#ACTION_APPWIDGET_DELETED</p>\n</div></li></ul></div></div></div><div id='method-onDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.appwidget.AppWidgetProvider'>android.appwidget.AppWidgetProvider</span><br/><a href='source/AppWidgetProvider.html#android-appwidget-AppWidgetProvider-method-onDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.appwidget.AppWidgetProvider-method-onDisabled' class='name expandable'>onDisabled</a>( <span class='pre'>context</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called in response to the android.appwidget.AppWidgetManager.ACTION_APPWIDGET_DISABLED broadcast, which\n is sent when...</div><div class='long'><p>Called in response to the <a href=\"#!/api/android.appwidget.AppWidgetManager-property-ACTION_APPWIDGET_DISABLED\" rel=\"android.appwidget.AppWidgetManager-property-ACTION_APPWIDGET_DISABLED\" class=\"docClass\">android.appwidget.AppWidgetManager.ACTION_APPWIDGET_DISABLED</a> broadcast, which\n is sent when the last AppWidget instance for this provider is deleted.  Override this method\n to implement your own AppWidget functionality.</p>\n\n<p> {@more}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : Object {Context}<div class='sub-desc'><p>The Context in which this receiver is\n                  running.\n@see AppWidgetManager#ACTION_APPWIDGET_DISABLED</p>\n</div></li></ul></div></div></div><div id='method-onEnabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.appwidget.AppWidgetProvider'>android.appwidget.AppWidgetProvider</span><br/><a href='source/AppWidgetProvider.html#android-appwidget-AppWidgetProvider-method-onEnabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.appwidget.AppWidgetProvider-method-onEnabled' class='name expandable'>onEnabled</a>( <span class='pre'>context</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called in response to the android.appwidget.AppWidgetManager.ACTION_APPWIDGET_ENABLED broadcast when\n the a AppWidget...</div><div class='long'><p>Called in response to the <a href=\"#!/api/android.appwidget.AppWidgetManager-property-ACTION_APPWIDGET_ENABLED\" rel=\"android.appwidget.AppWidgetManager-property-ACTION_APPWIDGET_ENABLED\" class=\"docClass\">android.appwidget.AppWidgetManager.ACTION_APPWIDGET_ENABLED</a> broadcast when\n the a AppWidget for this provider is instantiated.  Override this method to implement your\n own AppWidget functionality.</p>\n\n<p> {@more}\n When the last AppWidget for this provider is deleted,\n <a href=\"#!/api/android.appwidget.AppWidgetManager-property-ACTION_APPWIDGET_DISABLED\" rel=\"android.appwidget.AppWidgetManager-property-ACTION_APPWIDGET_DISABLED\" class=\"docClass\">android.appwidget.AppWidgetManager.ACTION_APPWIDGET_DISABLED</a> is sent by the AppWidget manager, and\n <a href=\"#!/api/android.appwidget.AppWidgetProvider-method-onDisabled\" rel=\"android.appwidget.AppWidgetProvider-method-onDisabled\" class=\"docClass\">onDisabled</a> is called.  If after that, an AppWidget for this provider is created\n again, onEnabled() will be called again.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : Object {Context}<div class='sub-desc'><p>The Context in which this receiver is\n                  running.\n@see AppWidgetManager#ACTION_APPWIDGET_ENABLED</p>\n</div></li></ul></div></div></div><div id='method-onReceive' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.appwidget.AppWidgetProvider'>android.appwidget.AppWidgetProvider</span><br/><a href='source/AppWidgetProvider.html#android-appwidget-AppWidgetProvider-method-onReceive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.appwidget.AppWidgetProvider-method-onReceive' class='name expandable'>onReceive</a>( <span class='pre'>context, intent</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Implements BroadcastReceiver.onReceive to dispatch calls to the various\n other methods on AppWidgetProvider. ...</div><div class='long'><p>Implements BroadcastReceiver.onReceive to dispatch calls to the various\n other methods on AppWidgetProvider.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : Object {Context}<div class='sub-desc'><p>The Context in which the receiver is running.</p>\n</div></li><li><span class='pre'>intent</span> : Object {Intent}<div class='sub-desc'><p>The Intent being received.</p>\n</div></li></ul></div></div></div><div id='method-onRestored' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.appwidget.AppWidgetProvider'>android.appwidget.AppWidgetProvider</span><br/><a href='source/AppWidgetProvider.html#android-appwidget-AppWidgetProvider-method-onRestored' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.appwidget.AppWidgetProvider-method-onRestored' class='name expandable'>onRestored</a>( <span class='pre'>context, oldWidgetIds, newWidgetIds</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called in response to the android.appwidget.AppWidgetManager.ACTION_APPWIDGET_RESTORED broadcast\n when instances of t...</div><div class='long'><p>Called in response to the <a href=\"#!/api/android.appwidget.AppWidgetManager-property-ACTION_APPWIDGET_RESTORED\" rel=\"android.appwidget.AppWidgetManager-property-ACTION_APPWIDGET_RESTORED\" class=\"docClass\">android.appwidget.AppWidgetManager.ACTION_APPWIDGET_RESTORED</a> broadcast\n when instances of this AppWidget provider have been restored from backup.  If your\n provider maintains any persistent data about its widget instances, override this method\n to remap the old AppWidgetIds to the new values and update any other app state that may\n be relevant.</p>\n\n<p> <p>This callback will be followed immediately by a call to <a href=\"#!/api/android.appwidget.AppWidgetProvider-method-onUpdate\" rel=\"android.appwidget.AppWidgetProvider-method-onUpdate\" class=\"docClass\">onUpdate</a> so your\n provider can immediately generate new RemoteViews suitable for its newly-restored set\n of instances.</p>\n\n<p> {@more}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : Object {Context}<div class='sub-desc'>\n</div></li><li><span class='pre'>oldWidgetIds</span> : Object {int[]}<div class='sub-desc'>\n</div></li><li><span class='pre'>newWidgetIds</span> : Object {int[]}<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.appwidget.AppWidgetProvider'>android.appwidget.AppWidgetProvider</span><br/><a href='source/AppWidgetProvider.html#android-appwidget-AppWidgetProvider-method-onUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.appwidget.AppWidgetProvider-method-onUpdate' class='name expandable'>onUpdate</a>( <span class='pre'>context, appWidgetManager, appWidgetIds</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called in response to the android.appwidget.AppWidgetManager.ACTION_APPWIDGET_UPDATE and\n android.appwidget.AppWidget...</div><div class='long'><p>Called in response to the <a href=\"#!/api/android.appwidget.AppWidgetManager-property-ACTION_APPWIDGET_UPDATE\" rel=\"android.appwidget.AppWidgetManager-property-ACTION_APPWIDGET_UPDATE\" class=\"docClass\">android.appwidget.AppWidgetManager.ACTION_APPWIDGET_UPDATE</a> and\n <a href=\"#!/api/android.appwidget.AppWidgetManager-property-ACTION_APPWIDGET_RESTORED\" rel=\"android.appwidget.AppWidgetManager-property-ACTION_APPWIDGET_RESTORED\" class=\"docClass\">android.appwidget.AppWidgetManager.ACTION_APPWIDGET_RESTORED</a> broadcasts when this AppWidget\n provider is being asked to provide RemoteViews\n for a set of AppWidgets.  Override this method to implement your own AppWidget functionality.</p>\n\n<p> {@more}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : Object {Context}<div class='sub-desc'><p>The Context in which this receiver is\n                  running.</p>\n</div></li><li><span class='pre'>appWidgetManager</span> : Object {AppWidgetManager}<div class='sub-desc'><p>A AppWidgetManager object you can call AppWidgetManager.updateAppWidget on.</p>\n</div></li><li><span class='pre'>appWidgetIds</span> : Object {int[]}<div class='sub-desc'><p>The appWidgetIds for which an update is needed.  Note that this\n                  may be all of the AppWidget instances for this provider, or just\n                  a subset of them.\n@see AppWidgetManager#ACTION_APPWIDGET_UPDATE</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});