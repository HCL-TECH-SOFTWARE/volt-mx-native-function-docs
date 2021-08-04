Ext.data.JsonP.android_content_pm_LauncherApps_Callback({"tagname":"class","name":"android.content.pm.LauncherApps.Callback","autodetected":{},"files":[{"filename":"Callback.js","href":"Callback.html#android-content-pm-LauncherApps-Callback"}],"extends":"java.lang.Object","members":[{"name":"onPackageAdded","tagname":"method","owner":"android.content.pm.LauncherApps.Callback","id":"method-onPackageAdded","meta":{}},{"name":"onPackageChanged","tagname":"method","owner":"android.content.pm.LauncherApps.Callback","id":"method-onPackageChanged","meta":{}},{"name":"onPackageRemoved","tagname":"method","owner":"android.content.pm.LauncherApps.Callback","id":"method-onPackageRemoved","meta":{}},{"name":"onPackagesAvailable","tagname":"method","owner":"android.content.pm.LauncherApps.Callback","id":"method-onPackagesAvailable","meta":{}},{"name":"onPackagesSuspended","tagname":"method","owner":"android.content.pm.LauncherApps.Callback","id":"method-onPackagesSuspended","meta":{}},{"name":"onPackagesUnavailable","tagname":"method","owner":"android.content.pm.LauncherApps.Callback","id":"method-onPackagesUnavailable","meta":{}},{"name":"onPackagesUnsuspended","tagname":"method","owner":"android.content.pm.LauncherApps.Callback","id":"method-onPackagesUnsuspended","meta":{}},{"name":"onShortcutsChanged","tagname":"method","owner":"android.content.pm.LauncherApps.Callback","id":"method-onShortcutsChanged","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.content.pm.LauncherApps.Callback","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.content.pm.LauncherApps.Callback</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Callback.html#android-content-pm-LauncherApps-Callback' target='_blank'>Callback.js</a></div></pre><div class='doc-contents'><p>Callbacks for package changes to this and related managed profiles.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-onPackageAdded' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.LauncherApps.Callback'>android.content.pm.LauncherApps.Callback</span><br/><a href='source/Callback.html#android-content-pm-LauncherApps-Callback-method-onPackageAdded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.LauncherApps.Callback-method-onPackageAdded' class='name expandable'>onPackageAdded</a>( <span class='pre'>packageName, user</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Indicates that a package was added to the specified profile. ...</div><div class='long'><p>Indicates that a package was added to the specified profile.</p>\n\n<p> If a package is added while being updated then onPackageChanged will be\n called instead.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>packageName</span> : String<div class='sub-desc'><p>The name of the package that was added.</p>\n</div></li><li><span class='pre'>user</span> : Object {UserHandle}<div class='sub-desc'><p>The UserHandle of the profile that generated the change.</p>\n</div></li></ul></div></div></div><div id='method-onPackageChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.LauncherApps.Callback'>android.content.pm.LauncherApps.Callback</span><br/><a href='source/Callback.html#android-content-pm-LauncherApps-Callback-method-onPackageChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.LauncherApps.Callback-method-onPackageChanged' class='name expandable'>onPackageChanged</a>( <span class='pre'>packageName, user</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Indicates that a package was modified in the specified profile. ...</div><div class='long'><p>Indicates that a package was modified in the specified profile.\n This can happen, for example, when the package is updated or when\n one or more components are enabled or disabled.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>packageName</span> : String<div class='sub-desc'><p>The name of the package that has changed.</p>\n</div></li><li><span class='pre'>user</span> : Object {UserHandle}<div class='sub-desc'><p>The UserHandle of the profile that generated the change.</p>\n</div></li></ul></div></div></div><div id='method-onPackageRemoved' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.LauncherApps.Callback'>android.content.pm.LauncherApps.Callback</span><br/><a href='source/Callback.html#android-content-pm-LauncherApps-Callback-method-onPackageRemoved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.LauncherApps.Callback-method-onPackageRemoved' class='name expandable'>onPackageRemoved</a>( <span class='pre'>packageName, user</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Indicates that a package was removed from the specified profile. ...</div><div class='long'><p>Indicates that a package was removed from the specified profile.</p>\n\n<p> If a package is removed while being updated onPackageChanged will be\n called instead.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>packageName</span> : String<div class='sub-desc'><p>The name of the package that was removed.</p>\n</div></li><li><span class='pre'>user</span> : Object {UserHandle}<div class='sub-desc'><p>The UserHandle of the profile that generated the change.</p>\n</div></li></ul></div></div></div><div id='method-onPackagesAvailable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.LauncherApps.Callback'>android.content.pm.LauncherApps.Callback</span><br/><a href='source/Callback.html#android-content-pm-LauncherApps-Callback-method-onPackagesAvailable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.LauncherApps.Callback-method-onPackagesAvailable' class='name expandable'>onPackagesAvailable</a>( <span class='pre'>packageNames, user, replacing</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Indicates that one or more packages have become available. ...</div><div class='long'><p>Indicates that one or more packages have become available. For\n example, this can happen when a removable storage card has\n reappeared.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>packageNames</span> : Object {java.lang.String[]}<div class='sub-desc'><p>The names of the packages that have become\n            available.</p>\n</div></li><li><span class='pre'>user</span> : Object {UserHandle}<div class='sub-desc'><p>The UserHandle of the profile that generated the change.</p>\n</div></li><li><span class='pre'>replacing</span> : Boolean<div class='sub-desc'><p>Indicates whether these packages are replacing\n            existing ones.</p>\n</div></li></ul></div></div></div><div id='method-onPackagesSuspended' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.LauncherApps.Callback'>android.content.pm.LauncherApps.Callback</span><br/><a href='source/Callback.html#android-content-pm-LauncherApps-Callback-method-onPackagesSuspended' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.LauncherApps.Callback-method-onPackagesSuspended' class='name expandable'>onPackagesSuspended</a>( <span class='pre'>packageNames, user, launcherExtras</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Indicates that one or more packages have been suspended. ...</div><div class='long'><p>Indicates that one or more packages have been suspended. A device administrator or an app\n with {@code android.permission.SUSPEND_APPS} can do this.</p>\n\n<p> <p>A suspending app with the permission {@code android.permission.SUSPEND_APPS} can\n optionally provide a Bundle of extra information that it deems helpful for the\n launcher to handle the suspended state of these packages. The contents of this\n Bundle are supposed to be a contract between the suspending app and the launcher.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>packageNames</span> : Object {java.lang.String[]}<div class='sub-desc'><p>The names of the packages that have just been suspended.</p>\n</div></li><li><span class='pre'>user</span> : Object {UserHandle}<div class='sub-desc'><p>the user for which the given packages were suspended.</p>\n</div></li><li><span class='pre'>launcherExtras</span> : Object {Bundle}<div class='sub-desc'><p>A Bundle of extras for the launcher, if provided to the\n                      system, {@code null} otherwise.\n@see PackageManager#isPackageSuspended()\n@see #getSuspendedPackageLauncherExtras(String, UserHandle)</p>\n</div></li></ul></div></div></div><div id='method-onPackagesUnavailable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.LauncherApps.Callback'>android.content.pm.LauncherApps.Callback</span><br/><a href='source/Callback.html#android-content-pm-LauncherApps-Callback-method-onPackagesUnavailable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.LauncherApps.Callback-method-onPackagesUnavailable' class='name expandable'>onPackagesUnavailable</a>( <span class='pre'>packageNames, user, replacing</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Indicates that one or more packages have become unavailable. ...</div><div class='long'><p>Indicates that one or more packages have become unavailable. For\n example, this can happen when a removable storage card has been\n removed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>packageNames</span> : Object {java.lang.String[]}<div class='sub-desc'><p>The names of the packages that have become\n            unavailable.</p>\n</div></li><li><span class='pre'>user</span> : Object {UserHandle}<div class='sub-desc'><p>The UserHandle of the profile that generated the change.</p>\n</div></li><li><span class='pre'>replacing</span> : Boolean<div class='sub-desc'><p>Indicates whether the packages are about to be\n            replaced with new versions.</p>\n</div></li></ul></div></div></div><div id='method-onPackagesUnsuspended' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.LauncherApps.Callback'>android.content.pm.LauncherApps.Callback</span><br/><a href='source/Callback.html#android-content-pm-LauncherApps-Callback-method-onPackagesUnsuspended' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.LauncherApps.Callback-method-onPackagesUnsuspended' class='name expandable'>onPackagesUnsuspended</a>( <span class='pre'>packageNames, user</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Indicates that one or more packages have been unsuspended. ...</div><div class='long'><p>Indicates that one or more packages have been unsuspended. For\n example, this can happen when a Device Administrator unsuspends\n an applicaton.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>packageNames</span> : Object {java.lang.String[]}<div class='sub-desc'><p>The names of the packages that have just been\n            unsuspended.</p>\n</div></li><li><span class='pre'>user</span> : Object {UserHandle}<div class='sub-desc'><p>The UserHandle of the profile that generated the change.</p>\n</div></li></ul></div></div></div><div id='method-onShortcutsChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.LauncherApps.Callback'>android.content.pm.LauncherApps.Callback</span><br/><a href='source/Callback.html#android-content-pm-LauncherApps-Callback-method-onShortcutsChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.LauncherApps.Callback-method-onShortcutsChanged' class='name expandable'>onShortcutsChanged</a>( <span class='pre'>packageName, shortcuts, user</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Indicates that one or more shortcuts of any kind (dynamic, pinned, or manifest)\n have been added, updated or removed. ...</div><div class='long'><p>Indicates that one or more shortcuts of any kind (dynamic, pinned, or manifest)\n have been added, updated or removed.</p>\n\n<p> <p>Only the applications that are allowed to access the shortcut information,\n as defined in hasShortcutHostPermission(), will receive it.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>packageName</span> : String<div class='sub-desc'><p>The name of the package that has the shortcuts.</p>\n</div></li><li><span class='pre'>shortcuts</span> : Object {java.util.List}<div class='sub-desc'><p>All shortcuts from the package (dynamic, manifest and/or pinned).\n    Only \"key\" information will be provided, as defined in\n    ShortcutInfo.hasKeyFieldsOnly().</p>\n</div></li><li><span class='pre'>user</span> : Object {UserHandle}<div class='sub-desc'><p>The UserHandle of the profile that generated the change.\n@see ShortcutManager</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});