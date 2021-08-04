Ext.data.JsonP.android_hardware_display_DisplayManagerInternal({"tagname":"class","name":"android.hardware.display.DisplayManagerInternal","autodetected":{},"files":[{"filename":"DisplayManagerInternal.js","href":"DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"getDisplayInfo","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-getDisplayInfo","meta":{}},{"name":"getDisplayedContentSample","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-getDisplayedContentSample","meta":{}},{"name":"getDisplayedContentSamplingAttributes","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-getDisplayedContentSamplingAttributes","meta":{}},{"name":"getNonOverrideDisplayInfo","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-getNonOverrideDisplayInfo","meta":{}},{"name":"initPowerManagement","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-initPowerManagement","meta":{}},{"name":"isProximitySensorAvailable","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-isProximitySensorAvailable","meta":{}},{"name":"onOverlayChanged","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-onOverlayChanged","meta":{}},{"name":"performTraversal","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-performTraversal","meta":{}},{"name":"persistBrightnessTrackerState","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-persistBrightnessTrackerState","meta":{}},{"name":"registerDisplayTransactionListener","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-registerDisplayTransactionListener","meta":{}},{"name":"requestPowerState","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-requestPowerState","meta":{}},{"name":"screenshot","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-screenshot","meta":{}},{"name":"setDisplayAccessUIDs","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-setDisplayAccessUIDs","meta":{}},{"name":"setDisplayInfoOverrideFromWindowManager","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-setDisplayInfoOverrideFromWindowManager","meta":{}},{"name":"setDisplayOffsets","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-setDisplayOffsets","meta":{}},{"name":"setDisplayProperties","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-setDisplayProperties","meta":{}},{"name":"setDisplayScalingDisabled","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-setDisplayScalingDisabled","meta":{}},{"name":"setDisplayedContentSamplingEnabled","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-setDisplayedContentSamplingEnabled","meta":{}},{"name":"unregisterDisplayTransactionListener","tagname":"method","owner":"android.hardware.display.DisplayManagerInternal","id":"method-unregisterDisplayTransactionListener","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.hardware.display.DisplayManagerInternal","short_doc":"Display manager local system service interface. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.hardware.display.DisplayManagerInternal</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal' target='_blank'>DisplayManagerInternal.js</a></div></pre><div class='doc-contents'><p>Display manager local system service interface.</p>\n\n<p> Only for use within the system server.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getDisplayInfo' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-getDisplayInfo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-getDisplayInfo' class='name expandable'>getDisplayInfo</a>( <span class='pre'>displayId</span> ) : Object {android.view.DisplayInfo}<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns information about the specified logical display. ...</div><div class='long'><p>Returns information about the specified logical display.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>displayId</span> : Number<div class='sub-desc'><p>The logical display id.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.view.DisplayInfo}</span><div class='sub-desc'><p>The logical display info, or null if the display does not exist.  The\n returned object must be treated as immutable.</p>\n</div></li></ul></div></div></div><div id='method-getDisplayedContentSample' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-getDisplayedContentSample' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-getDisplayedContentSample' class='name expandable'>getDisplayedContentSample</a>( <span class='pre'>displayId, maxFrames, timestamp</span> ) : Object {android.hardware.display.DisplayedContentSample}<span class=\"signature\"></span></div><div class='description'><div class='short'>Accesses the color histogram statistics of displayed frames on devices that support sampling. ...</div><div class='long'><p>Accesses the color histogram statistics of displayed frames on devices that support sampling.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>displayId</span> : Number<div class='sub-desc'><p>id of the display to collect the sample from</p>\n</div></li><li><span class='pre'>maxFrames</span> : Number<div class='sub-desc'><p>limit the statistics to the last maxFrames number of frames.</p>\n</div></li><li><span class='pre'>timestamp</span> : Number<div class='sub-desc'><p>discard statistics that were collected prior to timestamp, where timestamp\n                  is given as CLOCK_MONOTONIC.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.hardware.display.DisplayedContentSample}</span><div class='sub-desc'><p>The statistics representing a histogram of the color distribution of the frames\n         displayed on-screen, or null if sampling is not supported.</p>\n</div></li></ul></div></div></div><div id='method-getDisplayedContentSamplingAttributes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-getDisplayedContentSamplingAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-getDisplayedContentSamplingAttributes' class='name expandable'>getDisplayedContentSamplingAttributes</a>( <span class='pre'>displayId</span> ) : Object {android.hardware.display.DisplayedContentSamplingAttributes}<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the attributes available for display color sampling. ...</div><div class='long'><p>Get the attributes available for display color sampling.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>displayId</span> : Number<div class='sub-desc'><p>id of the display to collect the sample from.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.hardware.display.DisplayedContentSamplingAttributes}</span><div class='sub-desc'><p>The attributes the display supports, or null if sampling is not supported.</p>\n</div></li></ul></div></div></div><div id='method-getNonOverrideDisplayInfo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-getNonOverrideDisplayInfo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-getNonOverrideDisplayInfo' class='name expandable'>getNonOverrideDisplayInfo</a>( <span class='pre'>displayId, outInfo</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get current display info without override from WindowManager. ...</div><div class='long'><p>Get current display info without override from WindowManager.\n Current implementation of LogicalDisplay#getDisplayInfoLocked() always returns display info\n with overrides from WM if set. This method can be used for getting real display size without\n overrides to determine if real changes to display metrics happened.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>displayId</span> : Number<div class='sub-desc'><p>Id of the target display.</p>\n</div></li><li><span class='pre'>outInfo</span> : Object {DisplayInfo}<div class='sub-desc'><p>DisplayInfo to fill.</p>\n</div></li></ul></div></div></div><div id='method-initPowerManagement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-initPowerManagement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-initPowerManagement' class='name expandable'>initPowerManagement</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called by the power manager to initialize power management facilities. ...</div><div class='long'><p>Called by the power manager to initialize power management facilities.</p>\n</div></div></div><div id='method-isProximitySensorAvailable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-isProximitySensorAvailable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-isProximitySensorAvailable' class='name expandable'>isProximitySensorAvailable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns true if the proximity sensor screen-off function is available. ...</div><div class='long'><p>Returns true if the proximity sensor screen-off function is available.</p>\n</div></div></div><div id='method-onOverlayChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-onOverlayChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-onOverlayChanged' class='name expandable'>onOverlayChanged</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Notifies the display manager that resource overlays have changed. ...</div><div class='long'><p>Notifies the display manager that resource overlays have changed.</p>\n</div></div></div><div id='method-performTraversal' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-performTraversal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-performTraversal' class='name expandable'>performTraversal</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called by the window manager to perform traversals while holding a\n surface flinger transaction. ...</div><div class='long'><p>Called by the window manager to perform traversals while holding a\n surface flinger transaction.</p>\n</div></div></div><div id='method-persistBrightnessTrackerState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-persistBrightnessTrackerState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-persistBrightnessTrackerState' class='name expandable'>persistBrightnessTrackerState</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Persist brightness slider events and ambient brightness stats. ...</div><div class='long'><p>Persist brightness slider events and ambient brightness stats.</p>\n</div></div></div><div id='method-registerDisplayTransactionListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-registerDisplayTransactionListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-registerDisplayTransactionListener' class='name expandable'>registerDisplayTransactionListener</a>( <span class='pre'>listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Registers a display transaction listener to provide the client a chance to\n update its surfaces within the same trans...</div><div class='long'><p>Registers a display transaction listener to provide the client a chance to\n update its surfaces within the same transaction as any display layout updates.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listener</span> : Object {DisplayManagerInternal.DisplayTransactionListener}<div class='sub-desc'><p>The listener to register.</p>\n</div></li></ul></div></div></div><div id='method-requestPowerState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-requestPowerState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-requestPowerState' class='name expandable'>requestPowerState</a>( <span class='pre'>request, waitForNegativeProximity</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Called by the power manager to request a new power state. ...</div><div class='long'><p>Called by the power manager to request a new power state.\n <p>\n The display power controller makes a copy of the provided object and then\n begins adjusting the power state to match what was requested.\n </p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : Object {DisplayManagerInternal.DisplayPowerRequest}<div class='sub-desc'><p>The requested power state.</p>\n</div></li><li><span class='pre'>waitForNegativeProximity</span> : Boolean<div class='sub-desc'><p>If true, issues a request to wait for\n negative proximity before turning the screen back on, assuming the screen\n was turned off by the proximity sensor.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if display is ready, false if there are important changes that must\n be made asynchronously (such as turning the screen on), in which case the caller\n should grab a wake lock, watch for DisplayPowerCallbacks.onStateChanged()\n then try the request again later until the state converges.</p>\n</div></li></ul></div></div></div><div id='method-screenshot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-screenshot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-screenshot' class='name expandable'>screenshot</a>( <span class='pre'>displayId</span> ) : Object {android.view.SurfaceControl.ScreenshotGraphicBuffer}<span class=\"signature\"></span></div><div class='description'><div class='short'>Take a screenshot of the specified display and return a buffer. ...</div><div class='long'><p>Take a screenshot of the specified display and return a buffer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>displayId</span> : Number<div class='sub-desc'><p>The display id to take the screenshot of.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.view.SurfaceControl.ScreenshotGraphicBuffer}</span><div class='sub-desc'><p>The buffer or null if we have failed.</p>\n</div></li></ul></div></div></div><div id='method-setDisplayAccessUIDs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-setDisplayAccessUIDs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-setDisplayAccessUIDs' class='name expandable'>setDisplayAccessUIDs</a>( <span class='pre'>displayAccessUIDs</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Provide a list of UIDs that are present on the display and are allowed to access it. ...</div><div class='long'><p>Provide a list of UIDs that are present on the display and are allowed to access it.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>displayAccessUIDs</span> : Object {android.util.SparseArray}<div class='sub-desc'><p>Mapping displayId -> int array of UIDs.</p>\n</div></li></ul></div></div></div><div id='method-setDisplayInfoOverrideFromWindowManager' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-setDisplayInfoOverrideFromWindowManager' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-setDisplayInfoOverrideFromWindowManager' class='name expandable'>setDisplayInfoOverrideFromWindowManager</a>( <span class='pre'>displayId, info</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Overrides the display information of a particular logical display. ...</div><div class='long'><p>Overrides the display information of a particular logical display.\n This is used by the window manager to control the size and characteristics\n of the default display.  It is expected to apply the requested change\n to the display information synchronously so that applications will immediately\n observe the new state.</p>\n\n<p> NOTE: This method must be the only entry point by which the window manager\n influences the logical configuration of displays.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>displayId</span> : Number<div class='sub-desc'><p>The logical display id.</p>\n</div></li><li><span class='pre'>info</span> : Object {DisplayInfo}<div class='sub-desc'><p>The new data to be stored.</p>\n</div></li></ul></div></div></div><div id='method-setDisplayOffsets' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-setDisplayOffsets' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-setDisplayOffsets' class='name expandable'>setDisplayOffsets</a>( <span class='pre'>displayId, x, y</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Applies an offset to the contents of a display, for example to avoid burn-in. ...</div><div class='long'><p>Applies an offset to the contents of a display, for example to avoid burn-in.\n <p>\n TODO: Technically this should be associated with a physical rather than logical\n display but this is good enough for now.\n </p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>displayId</span> : Number<div class='sub-desc'><p>The logical display id to update.</p>\n</div></li><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>The X offset by which to shift the contents of the display.</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>The Y offset by which to shift the contents of the display.</p>\n</div></li></ul></div></div></div><div id='method-setDisplayProperties' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-setDisplayProperties' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-setDisplayProperties' class='name expandable'>setDisplayProperties</a>( <span class='pre'>displayId, hasContent, requestedRefreshRate, requestedModeId, inTraversal</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Tells the display manager about properties of the display that depend on the windows on it. ...</div><div class='long'><p>Tells the display manager about properties of the display that depend on the windows on it.\n This includes whether there is interesting unique content on the specified logical display,\n and whether the one of the windows has a preferred refresh rate.\n <p>\n If the display has unique content, then the display manager arranges for it\n to be presented on a physical display if appropriate.  Otherwise, the display manager\n may choose to make the physical display mirror some other logical display.\n </p></p>\n\n<p> <p>\n If one of the windows on the display has a preferred refresh rate that's supported by the\n display, then the display manager will request its use.\n </p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>displayId</span> : Number<div class='sub-desc'><p>The logical display id to update.</p>\n</div></li><li><span class='pre'>hasContent</span> : Boolean<div class='sub-desc'><p>True if the logical display has content. This is used to control automatic\n mirroring.</p>\n</div></li><li><span class='pre'>requestedRefreshRate</span> : Number<div class='sub-desc'><p>The preferred refresh rate for the top-most visible window that\n has a preference.</p>\n</div></li><li><span class='pre'>requestedModeId</span> : Number<div class='sub-desc'><p>The preferred mode id for the top-most visible window that has a\n preference.</p>\n</div></li><li><span class='pre'>inTraversal</span> : Boolean<div class='sub-desc'><p>True if called from WindowManagerService during a window traversal\n prior to call to performTraversalInTransactionFromWindowManager.</p>\n</div></li></ul></div></div></div><div id='method-setDisplayScalingDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-setDisplayScalingDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-setDisplayScalingDisabled' class='name expandable'>setDisplayScalingDisabled</a>( <span class='pre'>displayId, disableScaling</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Disables scaling for a display. ...</div><div class='long'><p>Disables scaling for a display.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>displayId</span> : Number<div class='sub-desc'><p>The logical display id to disable scaling for.</p>\n</div></li><li><span class='pre'>disableScaling</span> : Boolean<div class='sub-desc'><p>{@code true} to disable scaling,\n {@code false} to use the default scaling behavior of the logical display.</p>\n</div></li></ul></div></div></div><div id='method-setDisplayedContentSamplingEnabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-setDisplayedContentSamplingEnabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-setDisplayedContentSamplingEnabled' class='name expandable'>setDisplayedContentSamplingEnabled</a>( <span class='pre'>displayId, componentMask, maxFrames, enable</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Enable or disable the collection of color samples. ...</div><div class='long'><p>Enable or disable the collection of color samples.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>displayId</span> : Number<div class='sub-desc'><p>id of the display to collect the sample from.</p>\n</div></li><li><span class='pre'>componentMask</span> : Boolean<div class='sub-desc'><p>a bitmask of the color channels to collect samples for, or zero for all\n                      available.</p>\n</div></li><li><span class='pre'>maxFrames</span> : Number<div class='sub-desc'><p>maintain a ringbuffer of the last maxFrames.</p>\n</div></li><li><span class='pre'>enable</span> : Number<div class='sub-desc'><p>True to enable, False to disable.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if sampling was enabled, false if failure.</p>\n</div></li></ul></div></div></div><div id='method-unregisterDisplayTransactionListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.display.DisplayManagerInternal'>android.hardware.display.DisplayManagerInternal</span><br/><a href='source/DisplayManagerInternal.html#android-hardware-display-DisplayManagerInternal-method-unregisterDisplayTransactionListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.display.DisplayManagerInternal-method-unregisterDisplayTransactionListener' class='name expandable'>unregisterDisplayTransactionListener</a>( <span class='pre'>listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Unregisters a display transaction listener to provide the client a chance to\n update its surfaces within the same tra...</div><div class='long'><p>Unregisters a display transaction listener to provide the client a chance to\n update its surfaces within the same transaction as any display layout updates.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listener</span> : Object {DisplayManagerInternal.DisplayTransactionListener}<div class='sub-desc'><p>The listener to unregister.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});