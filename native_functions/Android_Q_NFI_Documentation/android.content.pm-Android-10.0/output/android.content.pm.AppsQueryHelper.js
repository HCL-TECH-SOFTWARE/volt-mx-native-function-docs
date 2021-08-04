Ext.data.JsonP.android_content_pm_AppsQueryHelper({"tagname":"class","name":"android.content.pm.AppsQueryHelper","autodetected":{},"files":[{"filename":"AppsQueryHelper.js","href":"AppsQueryHelper.html#android-content-pm-AppsQueryHelper"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"GET_APPS_WITH_INTERACT_ACROSS_USERS_PERM","tagname":"property","owner":"android.content.pm.AppsQueryHelper","id":"property-GET_APPS_WITH_INTERACT_ACROSS_USERS_PERM","meta":{}},{"name":"GET_IMES","tagname":"property","owner":"android.content.pm.AppsQueryHelper","id":"property-GET_IMES","meta":{}},{"name":"GET_NON_LAUNCHABLE_APPS","tagname":"property","owner":"android.content.pm.AppsQueryHelper","id":"property-GET_NON_LAUNCHABLE_APPS","meta":{}},{"name":"GET_REQUIRED_FOR_SYSTEM_USER","tagname":"property","owner":"android.content.pm.AppsQueryHelper","id":"property-GET_REQUIRED_FOR_SYSTEM_USER","meta":{}},{"name":"queryApps","tagname":"method","owner":"android.content.pm.AppsQueryHelper","id":"method-queryApps","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.content.pm.AppsQueryHelper","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.content.pm.AppsQueryHelper</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/AppsQueryHelper.html#android-content-pm-AppsQueryHelper' target='_blank'>AppsQueryHelper.js</a></div></pre><div class='doc-contents'><p>Helper class for querying installed applications using multiple criteria.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-GET_APPS_WITH_INTERACT_ACROSS_USERS_PERM' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.AppsQueryHelper'>android.content.pm.AppsQueryHelper</span><br/><a href='source/AppsQueryHelper.html#android-content-pm-AppsQueryHelper-property-GET_APPS_WITH_INTERACT_ACROSS_USERS_PERM' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.AppsQueryHelper-property-GET_APPS_WITH_INTERACT_ACROSS_USERS_PERM' class='name expandable'>GET_APPS_WITH_INTERACT_ACROSS_USERS_PERM</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Return apps with Manifest.permission.INTERACT_ACROSS_USERS permission ...</div><div class='long'><p>Return apps with Manifest.permission.INTERACT_ACROSS_USERS permission</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-GET_IMES' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.AppsQueryHelper'>android.content.pm.AppsQueryHelper</span><br/><a href='source/AppsQueryHelper.html#android-content-pm-AppsQueryHelper-property-GET_IMES' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.AppsQueryHelper-property-GET_IMES' class='name expandable'>GET_IMES</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Return all input methods available for the current user. ...</div><div class='long'><p>Return all input methods available for the current user.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-GET_NON_LAUNCHABLE_APPS' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.AppsQueryHelper'>android.content.pm.AppsQueryHelper</span><br/><a href='source/AppsQueryHelper.html#android-content-pm-AppsQueryHelper-property-GET_NON_LAUNCHABLE_APPS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.AppsQueryHelper-property-GET_NON_LAUNCHABLE_APPS' class='name expandable'>GET_NON_LAUNCHABLE_APPS</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Return apps without launcher icon ...</div><div class='long'><p>Return apps without launcher icon</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-GET_REQUIRED_FOR_SYSTEM_USER' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.AppsQueryHelper'>android.content.pm.AppsQueryHelper</span><br/><a href='source/AppsQueryHelper.html#android-content-pm-AppsQueryHelper-property-GET_REQUIRED_FOR_SYSTEM_USER' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.AppsQueryHelper-property-GET_REQUIRED_FOR_SYSTEM_USER' class='name expandable'>GET_REQUIRED_FOR_SYSTEM_USER</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Return all apps that are flagged as required for the system user. ...</div><div class='long'><p>Return all apps that are flagged as required for the system user.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-queryApps' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.AppsQueryHelper'>android.content.pm.AppsQueryHelper</span><br/><a href='source/AppsQueryHelper.html#android-content-pm-AppsQueryHelper-method-queryApps' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.AppsQueryHelper-method-queryApps' class='name expandable'>queryApps</a>( <span class='pre'>flags, systemAppsOnly, user</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return a List of all packages that satisfy a specified criteria. ...</div><div class='long'><p>Return a List of all packages that satisfy a specified criteria.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>flags</span> : Number<div class='sub-desc'><p>search flags. Use any combination of <a href=\"#!/api/android.content.pm.AppsQueryHelper-property-GET_NON_LAUNCHABLE_APPS\" rel=\"android.content.pm.AppsQueryHelper-property-GET_NON_LAUNCHABLE_APPS\" class=\"docClass\">GET_NON_LAUNCHABLE_APPS</a>,\n <a href=\"#!/api/android.content.pm.AppsQueryHelper-property-GET_APPS_WITH_INTERACT_ACROSS_USERS_PERM\" rel=\"android.content.pm.AppsQueryHelper-property-GET_APPS_WITH_INTERACT_ACROSS_USERS_PERM\" class=\"docClass\">GET_APPS_WITH_INTERACT_ACROSS_USERS_PERM</a> or <a href=\"#!/api/android.content.pm.AppsQueryHelper-property-GET_IMES\" rel=\"android.content.pm.AppsQueryHelper-property-GET_IMES\" class=\"docClass\">GET_IMES</a>.</p>\n</div></li><li><span class='pre'>systemAppsOnly</span> : Boolean<div class='sub-desc'><p>if true, only system apps will be returned</p>\n</div></li><li><span class='pre'>user</span> : Object {UserHandle}<div class='sub-desc'><p>user, whose apps are queried</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});