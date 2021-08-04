Ext.data.JsonP.android_content_pm_PackageManagerInternal_ExternalSourcesPolicy({"tagname":"class","name":"android.content.pm.PackageManagerInternal.ExternalSourcesPolicy","autodetected":{},"files":[{"filename":"ExternalSourcesPolicy.js","href":"ExternalSourcesPolicy.html#android-content-pm-PackageManagerInternal-ExternalSourcesPolicy"}],"members":[{"name":"USER_BLOCKED","tagname":"property","owner":"android.content.pm.PackageManagerInternal.ExternalSourcesPolicy","id":"property-USER_BLOCKED","meta":{}},{"name":"USER_DEFAULT","tagname":"property","owner":"android.content.pm.PackageManagerInternal.ExternalSourcesPolicy","id":"property-USER_DEFAULT","meta":{}},{"name":"USER_TRUSTED","tagname":"property","owner":"android.content.pm.PackageManagerInternal.ExternalSourcesPolicy","id":"property-USER_TRUSTED","meta":{}},{"name":"getPackageTrustedToInstallApps","tagname":"method","owner":"android.content.pm.PackageManagerInternal.ExternalSourcesPolicy","id":"method-getPackageTrustedToInstallApps","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.content.pm.PackageManagerInternal.ExternalSourcesPolicy","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ExternalSourcesPolicy.html#android-content-pm-PackageManagerInternal-ExternalSourcesPolicy' target='_blank'>ExternalSourcesPolicy.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-USER_BLOCKED' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.PackageManagerInternal.ExternalSourcesPolicy'>android.content.pm.PackageManagerInternal.ExternalSourcesPolicy</span><br/><a href='source/ExternalSourcesPolicy.html#android-content-pm-PackageManagerInternal-ExternalSourcesPolicy-property-USER_BLOCKED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.PackageManagerInternal.ExternalSourcesPolicy-property-USER_BLOCKED' class='name expandable'>USER_BLOCKED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-USER_DEFAULT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.PackageManagerInternal.ExternalSourcesPolicy'>android.content.pm.PackageManagerInternal.ExternalSourcesPolicy</span><br/><a href='source/ExternalSourcesPolicy.html#android-content-pm-PackageManagerInternal-ExternalSourcesPolicy-property-USER_DEFAULT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.PackageManagerInternal.ExternalSourcesPolicy-property-USER_DEFAULT' class='name expandable'>USER_DEFAULT</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;2&quot;</code></p></div></div></div><div id='property-USER_TRUSTED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.PackageManagerInternal.ExternalSourcesPolicy'>android.content.pm.PackageManagerInternal.ExternalSourcesPolicy</span><br/><a href='source/ExternalSourcesPolicy.html#android-content-pm-PackageManagerInternal-ExternalSourcesPolicy-property-USER_TRUSTED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.PackageManagerInternal.ExternalSourcesPolicy-property-USER_TRUSTED' class='name expandable'>USER_TRUSTED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;0&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getPackageTrustedToInstallApps' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.PackageManagerInternal.ExternalSourcesPolicy'>android.content.pm.PackageManagerInternal.ExternalSourcesPolicy</span><br/><a href='source/ExternalSourcesPolicy.html#android-content-pm-PackageManagerInternal-ExternalSourcesPolicy-method-getPackageTrustedToInstallApps' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.PackageManagerInternal.ExternalSourcesPolicy-method-getPackageTrustedToInstallApps' class='name expandable'>getPackageTrustedToInstallApps</a>( <span class='pre'>packageName, uid</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Checks the user preference for whether a package is trusted to request installs through\n package installer ...</div><div class='long'><p>Checks the user preference for whether a package is trusted to request installs through\n package installer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>packageName</span> : String<div class='sub-desc'><p>The package to check for</p>\n</div></li><li><span class='pre'>uid</span> : Number<div class='sub-desc'><p>the uid in which the package is running</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p><a href=\"#!/api/android.content.pm.PackageManagerInternal.ExternalSourcesPolicy-property-USER_TRUSTED\" rel=\"android.content.pm.PackageManagerInternal.ExternalSourcesPolicy-property-USER_TRUSTED\" class=\"docClass\">USER_TRUSTED</a> if the user has trusted the package, <a href=\"#!/api/android.content.pm.PackageManagerInternal.ExternalSourcesPolicy-property-USER_BLOCKED\" rel=\"android.content.pm.PackageManagerInternal.ExternalSourcesPolicy-property-USER_BLOCKED\" class=\"docClass\">USER_BLOCKED</a>\n if user has blocked requests from the package, <a href=\"#!/api/android.content.pm.PackageManagerInternal.ExternalSourcesPolicy-property-USER_DEFAULT\" rel=\"android.content.pm.PackageManagerInternal.ExternalSourcesPolicy-property-USER_DEFAULT\" class=\"docClass\">USER_DEFAULT</a> if the user response\n is not yet available</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});