Ext.data.JsonP.android_accessibilityservice_AccessibilityService_SoftKeyboardController({"tagname":"class","name":"android.accessibilityservice.AccessibilityService.SoftKeyboardController","autodetected":{},"files":[{"filename":"SoftKeyboardController.js","href":"SoftKeyboardController.html#android-accessibilityservice-AccessibilityService-SoftKeyboardController"}],"extends":"java.lang.Object","members":[{"name":"addOnShowModeChangedListener","tagname":"method","owner":"android.accessibilityservice.AccessibilityService.SoftKeyboardController","id":"method-addOnShowModeChangedListener","meta":{}},{"name":"getShowMode","tagname":"method","owner":"android.accessibilityservice.AccessibilityService.SoftKeyboardController","id":"method-getShowMode","meta":{}},{"name":"removeOnShowModeChangedListener","tagname":"method","owner":"android.accessibilityservice.AccessibilityService.SoftKeyboardController","id":"method-removeOnShowModeChangedListener","meta":{}},{"name":"setShowMode","tagname":"method","owner":"android.accessibilityservice.AccessibilityService.SoftKeyboardController","id":"method-setShowMode","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.accessibilityservice.AccessibilityService.SoftKeyboardController","short_doc":"Used to control, query, and listen for changes to the soft keyboard show mode. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.accessibilityservice.AccessibilityService.SoftKeyboardController</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/SoftKeyboardController.html#android-accessibilityservice-AccessibilityService-SoftKeyboardController' target='_blank'>SoftKeyboardController.js</a></div></pre><div class='doc-contents'><p>Used to control, query, and listen for changes to the soft keyboard show mode.\n <p>\n Accessibility services may request to override the decisions normally made about whether or\n not the soft keyboard is shown.\n <p>\n If multiple services make conflicting requests, the last request is honored. A service may\n register a listener to find out if the mode has changed under it.\n <p>\n If the user takes action to override the behavior behavior requested by an accessibility\n service, the user's request takes precendence, the show mode will be reset to\n <a href=\"#!/api/android.accessibilityservice.AccessibilityService-property-SHOW_MODE_AUTO\" rel=\"android.accessibilityservice.AccessibilityService-property-SHOW_MODE_AUTO\" class=\"docClass\">android.accessibilityservice.AccessibilityService.SHOW_MODE_AUTO</a>, and services will no longer be able to control\n that aspect of the soft keyboard's behavior.\n <p>\n Note: Because soft keyboards are independent apps, the framework does not have total control\n over their behavior. They may choose to show themselves, or not, without regard to requests\n made here. So the framework will make a best effort to deliver the behavior requested, but\n cannot guarantee success.</p>\n\n<p> @see AccessibilityService#SHOW_MODE_AUTO\n @see AccessibilityService#SHOW_MODE_HIDDEN\n @see AccessibilityService#SHOW_MODE_IGNORE_HARD_KEYBOARD</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addOnShowModeChangedListener' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.accessibilityservice.AccessibilityService.SoftKeyboardController'>android.accessibilityservice.AccessibilityService.SoftKeyboardController</span><br/><a href='source/SoftKeyboardController.html#android-accessibilityservice-AccessibilityService-SoftKeyboardController-method-addOnShowModeChangedListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.accessibilityservice.AccessibilityService.SoftKeyboardController-method-addOnShowModeChangedListener' class='name expandable'>addOnShowModeChangedListener</a>( <span class='pre'>listener, handler</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds the specified change listener to the list of soft keyboard show mode change\n listeners. ...</div><div class='long'><p>Adds the specified change listener to the list of soft keyboard show mode change\n listeners. The callback will occur on the specified Handler's thread, or on the\n services's main thread if the handler is {@code null}.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listener</span> : Object {AccessibilityService.SoftKeyboardController.OnShowModeChangedListener}<div class='sub-desc'><p>the listener to add, must be non-null</p>\n</div></li><li><span class='pre'>handler</span> : Object {Handler}<div class='sub-desc'><p>the handler on which to callback should execute, or {@code null} to\n        execute on the service's main thread</p>\n</div></li></ul></div></div></div><div id='method-getShowMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.accessibilityservice.AccessibilityService.SoftKeyboardController'>android.accessibilityservice.AccessibilityService.SoftKeyboardController</span><br/><a href='source/SoftKeyboardController.html#android-accessibilityservice-AccessibilityService-SoftKeyboardController-method-getShowMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.accessibilityservice.AccessibilityService.SoftKeyboardController-method-getShowMode' class='name expandable'>getShowMode</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the show mode of the soft keyboard. ...</div><div class='long'><p>Returns the show mode of the soft keyboard.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>the current soft keyboard show mode\n@see AccessibilityService#SHOW_MODE_AUTO\n@see AccessibilityService#SHOW_MODE_HIDDEN\n@see AccessibilityService#SHOW_MODE_IGNORE_HARD_KEYBOARD</p>\n</div></li></ul></div></div></div><div id='method-removeOnShowModeChangedListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.accessibilityservice.AccessibilityService.SoftKeyboardController'>android.accessibilityservice.AccessibilityService.SoftKeyboardController</span><br/><a href='source/SoftKeyboardController.html#android-accessibilityservice-AccessibilityService-SoftKeyboardController-method-removeOnShowModeChangedListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.accessibilityservice.AccessibilityService.SoftKeyboardController-method-removeOnShowModeChangedListener' class='name expandable'>removeOnShowModeChangedListener</a>( <span class='pre'>listener</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Removes the specified change listener from the list of keyboard show mode change\n listeners. ...</div><div class='long'><p>Removes the specified change listener from the list of keyboard show mode change\n listeners.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listener</span> : Object {AccessibilityService.SoftKeyboardController.OnShowModeChangedListener}<div class='sub-desc'><p>the listener to remove, must be non-null</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>{@code true} if the listener was removed, {@code false} otherwise</p>\n</div></li></ul></div></div></div><div id='method-setShowMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.accessibilityservice.AccessibilityService.SoftKeyboardController'>android.accessibilityservice.AccessibilityService.SoftKeyboardController</span><br/><a href='source/SoftKeyboardController.html#android-accessibilityservice-AccessibilityService-SoftKeyboardController-method-setShowMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.accessibilityservice.AccessibilityService.SoftKeyboardController-method-setShowMode' class='name expandable'>setShowMode</a>( <span class='pre'>showMode</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the soft keyboard show mode. ...</div><div class='long'><p>Sets the soft keyboard show mode.\n <p>\n <strong>Note:</strong> If the service is not yet connected (e.g.\n android.accessibilityservice.AccessibilityService.onServiceConnected() has not yet been called) or the\n service has been disconnected, this method will have no effect and return {@code false}.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>showMode</span> : Number<div class='sub-desc'><p>the new show mode for the soft keyboard</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>{@code true} on success\n@see AccessibilityService#SHOW_MODE_AUTO\n@see AccessibilityService#SHOW_MODE_HIDDEN\n@see AccessibilityService#SHOW_MODE_IGNORE_HARD_KEYBOARD</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});