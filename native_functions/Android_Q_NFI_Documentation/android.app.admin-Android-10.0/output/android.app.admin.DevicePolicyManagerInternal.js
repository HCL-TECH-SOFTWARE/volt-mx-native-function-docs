Ext.data.JsonP.android_app_admin_DevicePolicyManagerInternal({"tagname":"class","name":"android.app.admin.DevicePolicyManagerInternal","autodetected":{},"files":[{"filename":"DevicePolicyManagerInternal.js","href":"DevicePolicyManagerInternal.html#android-app-admin-DevicePolicyManagerInternal"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"addOnCrossProfileWidgetProvidersChangeListener","tagname":"method","owner":"android.app.admin.DevicePolicyManagerInternal","id":"method-addOnCrossProfileWidgetProvidersChangeListener","meta":{}},{"name":"canSilentlyInstallPackage","tagname":"method","owner":"android.app.admin.DevicePolicyManagerInternal","id":"method-canSilentlyInstallPackage","meta":{}},{"name":"canUserHaveUntrustedCredentialReset","tagname":"method","owner":"android.app.admin.DevicePolicyManagerInternal","id":"method-canUserHaveUntrustedCredentialReset","meta":{}},{"name":"createShowAdminSupportIntent","tagname":"method","owner":"android.app.admin.DevicePolicyManagerInternal","id":"method-createShowAdminSupportIntent","meta":{}},{"name":"createUserRestrictionSupportIntent","tagname":"method","owner":"android.app.admin.DevicePolicyManagerInternal","id":"method-createUserRestrictionSupportIntent","meta":{}},{"name":"getCrossProfileWidgetProviders","tagname":"method","owner":"android.app.admin.DevicePolicyManagerInternal","id":"method-getCrossProfileWidgetProviders","meta":{}},{"name":"getPrintingDisabledReasonForUser","tagname":"method","owner":"android.app.admin.DevicePolicyManagerInternal","id":"method-getPrintingDisabledReasonForUser","meta":{}},{"name":"isActiveAdminWithPolicy","tagname":"method","owner":"android.app.admin.DevicePolicyManagerInternal","id":"method-isActiveAdminWithPolicy","meta":{}},{"name":"isUserAffiliatedWithDevice","tagname":"method","owner":"android.app.admin.DevicePolicyManagerInternal","id":"method-isUserAffiliatedWithDevice","meta":{}},{"name":"reportSeparateProfileChallengeChanged","tagname":"method","owner":"android.app.admin.DevicePolicyManagerInternal","id":"method-reportSeparateProfileChallengeChanged","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.app.admin.DevicePolicyManagerInternal","short_doc":"Device policy manager local system service interface. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.app.admin.DevicePolicyManagerInternal</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/DevicePolicyManagerInternal.html#android-app-admin-DevicePolicyManagerInternal' target='_blank'>DevicePolicyManagerInternal.js</a></div></pre><div class='doc-contents'><p>Device policy manager local system service interface.</p>\n\n<p> Only for use within the system server.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addOnCrossProfileWidgetProvidersChangeListener' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.admin.DevicePolicyManagerInternal'>android.app.admin.DevicePolicyManagerInternal</span><br/><a href='source/DevicePolicyManagerInternal.html#android-app-admin-DevicePolicyManagerInternal-method-addOnCrossProfileWidgetProvidersChangeListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.admin.DevicePolicyManagerInternal-method-addOnCrossProfileWidgetProvidersChangeListener' class='name expandable'>addOnCrossProfileWidgetProvidersChangeListener</a>( <span class='pre'>listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a listener for changes in the white-listed packages to show\n cross-profile app widgets. ...</div><div class='long'><p>Adds a listener for changes in the white-listed packages to show\n cross-profile app widgets.</p>\n\n<p> <p>This takes the DPMS lock.  DO NOT call from PM/UM/AM with their lock held.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listener</span> : Object {DevicePolicyManagerInternal.OnCrossProfileWidgetProvidersChangeListener}<div class='sub-desc'><p>The listener to add.</p>\n</div></li></ul></div></div></div><div id='method-canSilentlyInstallPackage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.admin.DevicePolicyManagerInternal'>android.app.admin.DevicePolicyManagerInternal</span><br/><a href='source/DevicePolicyManagerInternal.html#android-app-admin-DevicePolicyManagerInternal-method-canSilentlyInstallPackage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.admin.DevicePolicyManagerInternal-method-canSilentlyInstallPackage' class='name expandable'>canSilentlyInstallPackage</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns whether the calling package can install or uninstall packages without user\n interaction. ...</div><div class='long'><p>Returns whether the calling package can install or uninstall packages without user\n interaction.</p>\n</div></div></div><div id='method-canUserHaveUntrustedCredentialReset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.admin.DevicePolicyManagerInternal'>android.app.admin.DevicePolicyManagerInternal</span><br/><a href='source/DevicePolicyManagerInternal.html#android-app-admin-DevicePolicyManagerInternal-method-canUserHaveUntrustedCredentialReset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.admin.DevicePolicyManagerInternal-method-canUserHaveUntrustedCredentialReset' class='name expandable'>canUserHaveUntrustedCredentialReset</a>( <span class='pre'>userId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Check whether the user could have their password reset in an untrusted manor due to there\n being an admin which can c...</div><div class='long'><p>Check whether the user could have their password reset in an untrusted manor due to there\n being an admin which can call resetPassword to reset the password without knowledge\n of the previous password.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>userId</span> : Number<div class='sub-desc'><p>The user in question</p>\n</div></li></ul></div></div></div><div id='method-createShowAdminSupportIntent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.admin.DevicePolicyManagerInternal'>android.app.admin.DevicePolicyManagerInternal</span><br/><a href='source/DevicePolicyManagerInternal.html#android-app-admin-DevicePolicyManagerInternal-method-createShowAdminSupportIntent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.admin.DevicePolicyManagerInternal-method-createShowAdminSupportIntent' class='name expandable'>createShowAdminSupportIntent</a>( <span class='pre'>userId, useDefaultIfNoAdmin</span> ) : Object {android.content.Intent}<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates an intent to show the admin support dialog to say that an action is disallowed by\n the device/profile owner. ...</div><div class='long'><p>Creates an intent to show the admin support dialog to say that an action is disallowed by\n the device/profile owner.</p>\n\n<p> <p>This method does not take the DPMS lock.  Safe to be called from anywhere.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>userId</span> : Number<div class='sub-desc'><p>The user where the action is disallowed.</p>\n</div></li><li><span class='pre'>useDefaultIfNoAdmin</span> : Boolean<div class='sub-desc'><p>If true, a non-null intent will be returned, even if we couldn't\n find a profile/device owner.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.content.Intent}</span><div class='sub-desc'><p>The intent to trigger the admin support dialog.</p>\n</div></li></ul></div></div></div><div id='method-createUserRestrictionSupportIntent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.admin.DevicePolicyManagerInternal'>android.app.admin.DevicePolicyManagerInternal</span><br/><a href='source/DevicePolicyManagerInternal.html#android-app-admin-DevicePolicyManagerInternal-method-createUserRestrictionSupportIntent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.admin.DevicePolicyManagerInternal-method-createUserRestrictionSupportIntent' class='name expandable'>createUserRestrictionSupportIntent</a>( <span class='pre'>userId</span> ) : Object {android.content.Intent}<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates an intent to show the admin support dialog showing the admin who has set a user\n restriction. ...</div><div class='long'><p>Creates an intent to show the admin support dialog showing the admin who has set a user\n restriction.</p>\n\n<p> <p>This method does not take the DPMS lock. Safe to be called from anywhere.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>userId</span> : Number<div class='sub-desc'><p>The user where the user restriction is set.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.content.Intent}</span><div class='sub-desc'><p>The intent to trigger the admin support dialog, or null if the user restriction is\n not enforced by the profile/device owner.</p>\n</div></li></ul></div></div></div><div id='method-getCrossProfileWidgetProviders' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.admin.DevicePolicyManagerInternal'>android.app.admin.DevicePolicyManagerInternal</span><br/><a href='source/DevicePolicyManagerInternal.html#android-app-admin-DevicePolicyManagerInternal-method-getCrossProfileWidgetProviders' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.admin.DevicePolicyManagerInternal-method-getCrossProfileWidgetProviders' class='name expandable'>getCrossProfileWidgetProviders</a>( <span class='pre'>profileId</span> ) : Object {java.util.List}<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the packages whose widget providers are white-listed to be\n available in the parent user. ...</div><div class='long'><p>Gets the packages whose widget providers are white-listed to be\n available in the parent user.</p>\n\n<p> <p>This takes the DPMS lock.  DO NOT call from PM/UM/AM with their lock held.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>profileId</span> : Number<div class='sub-desc'><p>The profile id.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {java.util.List}</span><div class='sub-desc'><p>The list of packages if such or empty list if there are\n    no white-listed packages or the profile id is not a managed\n    profile.</p>\n</div></li></ul></div></div></div><div id='method-getPrintingDisabledReasonForUser' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.admin.DevicePolicyManagerInternal'>android.app.admin.DevicePolicyManagerInternal</span><br/><a href='source/DevicePolicyManagerInternal.html#android-app-admin-DevicePolicyManagerInternal-method-getPrintingDisabledReasonForUser' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.admin.DevicePolicyManagerInternal-method-getPrintingDisabledReasonForUser' class='name expandable'>getPrintingDisabledReasonForUser</a>( <span class='pre'>userId</span> ) : Object {java.lang.CharSequence}<span class=\"signature\"></span></div><div class='description'><div class='short'>Return text of error message if printing is disabled. ...</div><div class='long'><p>Return text of error message if printing is disabled.\n Called by Print Service when printing is disabled by PO or DO when printing is attempted.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>userId</span> : Number<div class='sub-desc'><p>The user in question</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {java.lang.CharSequence}</span><div class='sub-desc'><p>localized error message</p>\n</div></li></ul></div></div></div><div id='method-isActiveAdminWithPolicy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.admin.DevicePolicyManagerInternal'>android.app.admin.DevicePolicyManagerInternal</span><br/><a href='source/DevicePolicyManagerInternal.html#android-app-admin-DevicePolicyManagerInternal-method-isActiveAdminWithPolicy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.admin.DevicePolicyManagerInternal-method-isActiveAdminWithPolicy' class='name expandable'>isActiveAdminWithPolicy</a>( <span class='pre'>uid, reqPolicy</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Checks if an app with given uid is an active device admin of its user and has the policy\n specified. ...</div><div class='long'><p>Checks if an app with given uid is an active device admin of its user and has the policy\n specified.</p>\n\n<p> <p>This takes the DPMS lock.  DO NOT call from PM/UM/AM with their lock held.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>uid</span> : Number<div class='sub-desc'><p>App uid.</p>\n</div></li><li><span class='pre'>reqPolicy</span> : Number<div class='sub-desc'><p>Required policy, for policies see DevicePolicyManager.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the uid is an active admin with the given policy.</p>\n</div></li></ul></div></div></div><div id='method-isUserAffiliatedWithDevice' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.admin.DevicePolicyManagerInternal'>android.app.admin.DevicePolicyManagerInternal</span><br/><a href='source/DevicePolicyManagerInternal.html#android-app-admin-DevicePolicyManagerInternal-method-isUserAffiliatedWithDevice' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.admin.DevicePolicyManagerInternal-method-isUserAffiliatedWithDevice' class='name expandable'>isUserAffiliatedWithDevice</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns whether this user/profile is affiliated with the device. ...</div><div class='long'><p>Returns whether this user/profile is affiliated with the device.</p>\n\n<p> <p>\n By definition, the user that the device owner runs on is always affiliated with the device.\n Any other user/profile is considered affiliated with the device if the set specified by its\n profile owner via <a href=\"#!/api/android.app.admin.DevicePolicyManager-method-setAffiliationIds\" rel=\"android.app.admin.DevicePolicyManager-method-setAffiliationIds\" class=\"docClass\">android.app.admin.DevicePolicyManager.setAffiliationIds</a> intersects with the device\n owner's.\n <p>\n Profile owner on the primary user will never be considered as affiliated as there is no\n device owner to be affiliated with.</p>\n</div></div></div><div id='method-reportSeparateProfileChallengeChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.admin.DevicePolicyManagerInternal'>android.app.admin.DevicePolicyManagerInternal</span><br/><a href='source/DevicePolicyManagerInternal.html#android-app-admin-DevicePolicyManagerInternal-method-reportSeparateProfileChallengeChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.admin.DevicePolicyManagerInternal-method-reportSeparateProfileChallengeChanged' class='name expandable'>reportSeparateProfileChallengeChanged</a>( <span class='pre'>userId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Reports that a profile has changed to use a unified or separate credential. ...</div><div class='long'><p>Reports that a profile has changed to use a unified or separate credential.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>userId</span> : Number<div class='sub-desc'><p>User ID of the profile.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});