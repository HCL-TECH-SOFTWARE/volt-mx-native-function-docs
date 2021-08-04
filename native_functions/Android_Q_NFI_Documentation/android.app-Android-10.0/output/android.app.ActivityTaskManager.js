Ext.data.JsonP.android_app_ActivityTaskManager({"tagname":"class","name":"android.app.ActivityTaskManager","autodetected":{},"files":[{"filename":"ActivityTaskManager.js","href":"ActivityTaskManager.html#android-app-ActivityTaskManager"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"INVALID_STACK_ID","tagname":"property","owner":"android.app.ActivityTaskManager","id":"property-INVALID_STACK_ID","meta":{}},{"name":"SPLIT_SCREEN_CREATE_MODE_BOTTOM_OR_RIGHT","tagname":"property","owner":"android.app.ActivityTaskManager","id":"property-SPLIT_SCREEN_CREATE_MODE_BOTTOM_OR_RIGHT","meta":{}},{"name":"SPLIT_SCREEN_CREATE_MODE_TOP_OR_LEFT","tagname":"property","owner":"android.app.ActivityTaskManager","id":"property-SPLIT_SCREEN_CREATE_MODE_TOP_OR_LEFT","meta":{}},{"name":"clearLaunchParamsForPackages","tagname":"method","owner":"android.app.ActivityTaskManager","id":"method-clearLaunchParamsForPackages","meta":{}},{"name":"listAllStacks","tagname":"method","owner":"android.app.ActivityTaskManager","id":"method-listAllStacks","meta":{}},{"name":"moveTaskToStack","tagname":"method","owner":"android.app.ActivityTaskManager","id":"method-moveTaskToStack","meta":{}},{"name":"moveTopActivityToPinnedStack","tagname":"method","owner":"android.app.ActivityTaskManager","id":"method-moveTopActivityToPinnedStack","meta":{}},{"name":"removeStacksInWindowingModes","tagname":"method","owner":"android.app.ActivityTaskManager","id":"method-removeStacksInWindowingModes","meta":{}},{"name":"removeStacksWithActivityTypes","tagname":"method","owner":"android.app.ActivityTaskManager","id":"method-removeStacksWithActivityTypes","meta":{}},{"name":"resizeDockedStack","tagname":"method","owner":"android.app.ActivityTaskManager","id":"method-resizeDockedStack","meta":{}},{"name":"resizeStack","tagname":"method","owner":"android.app.ActivityTaskManager","id":"method-resizeStack","meta":{}},{"name":"resizeTask","tagname":"method","owner":"android.app.ActivityTaskManager","id":"method-resizeTask","meta":{}},{"name":"setDisplayToSingleTaskInstance","tagname":"method","owner":"android.app.ActivityTaskManager","id":"method-setDisplayToSingleTaskInstance","meta":{}},{"name":"setTaskWindowingMode","tagname":"method","owner":"android.app.ActivityTaskManager","id":"method-setTaskWindowingMode","meta":{}},{"name":"setTaskWindowingModeSplitScreenPrimary","tagname":"method","owner":"android.app.ActivityTaskManager","id":"method-setTaskWindowingModeSplitScreenPrimary","meta":{}},{"name":"startSystemLockTaskMode","tagname":"method","owner":"android.app.ActivityTaskManager","id":"method-startSystemLockTaskMode","meta":{}},{"name":"stopSystemLockTaskMode","tagname":"method","owner":"android.app.ActivityTaskManager","id":"method-stopSystemLockTaskMode","meta":{}},{"name":"supportsMultiWindow","tagname":"method","owner":"android.app.ActivityTaskManager","id":"method-supportsMultiWindow","meta":{}},{"name":"supportsSplitScreenMultiWindow","tagname":"method","owner":"android.app.ActivityTaskManager","id":"method-supportsSplitScreenMultiWindow","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.app.ActivityTaskManager","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.app.ActivityTaskManager</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager' target='_blank'>ActivityTaskManager.js</a></div></pre><div class='doc-contents'><p>This class gives information about, and interacts with activities and their containers like task,\n stacks, and displays.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-INVALID_STACK_ID' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-property-INVALID_STACK_ID' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-property-INVALID_STACK_ID' class='name expandable'>INVALID_STACK_ID</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Invalid stack ID. ...</div><div class='long'><p>Invalid stack ID.</p>\n<p>Defaults to: <code>&quot;-1&quot;</code></p></div></div></div><div id='property-SPLIT_SCREEN_CREATE_MODE_BOTTOM_OR_RIGHT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-property-SPLIT_SCREEN_CREATE_MODE_BOTTOM_OR_RIGHT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-property-SPLIT_SCREEN_CREATE_MODE_BOTTOM_OR_RIGHT' class='name expandable'>SPLIT_SCREEN_CREATE_MODE_BOTTOM_OR_RIGHT</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Parameter to IActivityTaskManager.setTaskWindowingModeSplitScreenPrimary which\nspecifies the position of the created ...</div><div class='long'><p>Parameter to IActivityTaskManager.setTaskWindowingModeSplitScreenPrimary which\nspecifies the position of the created docked stack at the bottom half of the screen if\nin portrait mode or at the right half of the screen if in landscape mode.</p>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-SPLIT_SCREEN_CREATE_MODE_TOP_OR_LEFT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-property-SPLIT_SCREEN_CREATE_MODE_TOP_OR_LEFT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-property-SPLIT_SCREEN_CREATE_MODE_TOP_OR_LEFT' class='name expandable'>SPLIT_SCREEN_CREATE_MODE_TOP_OR_LEFT</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Parameter to IActivityTaskManager.setTaskWindowingModeSplitScreenPrimary which\nspecifies the position of the created ...</div><div class='long'><p>Parameter to IActivityTaskManager.setTaskWindowingModeSplitScreenPrimary which\nspecifies the position of the created docked stack at the top half of the screen if\nin portrait mode or at the left half of the screen if in landscape mode.</p>\n<p>Defaults to: <code>&quot;0&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clearLaunchParamsForPackages' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-method-clearLaunchParamsForPackages' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-method-clearLaunchParamsForPackages' class='name expandable'>clearLaunchParamsForPackages</a>( <span class='pre'>packageNames</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Clears launch params for the given package. ...</div><div class='long'><p>Clears launch params for the given package.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>packageNames</span> : Object {java.util.List}<div class='sub-desc'><p>the names of the packages of which the launch params are to be cleared</p>\n</div></li></ul></div></div></div><div id='method-listAllStacks' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-method-listAllStacks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-method-listAllStacks' class='name expandable'>listAllStacks</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>List all activity stacks information. ...</div><div class='long'><p>List all activity stacks information.</p>\n</div></div></div><div id='method-moveTaskToStack' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-method-moveTaskToStack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-method-moveTaskToStack' class='name expandable'>moveTaskToStack</a>( <span class='pre'>taskId, stackId, toTop</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Move task to stack with given id. ...</div><div class='long'><p>Move task to stack with given id.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>taskId</span> : Number<div class='sub-desc'><p>Id of the task to move.</p>\n</div></li><li><span class='pre'>stackId</span> : Number<div class='sub-desc'><p>Id of the stack for task moving.</p>\n</div></li><li><span class='pre'>toTop</span> : Boolean<div class='sub-desc'><p>Whether the given task should shown to top of stack.</p>\n</div></li></ul></div></div></div><div id='method-moveTopActivityToPinnedStack' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-method-moveTopActivityToPinnedStack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-method-moveTopActivityToPinnedStack' class='name expandable'>moveTopActivityToPinnedStack</a>( <span class='pre'>stackId, bounds</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Moves the top activity in the input stackId to the pinned stack. ...</div><div class='long'><p>Moves the top activity in the input stackId to the pinned stack.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>stackId</span> : Number<div class='sub-desc'><p>Id of stack to move the top activity to pinned stack.</p>\n</div></li><li><span class='pre'>bounds</span> : Object {Rect}<div class='sub-desc'><p>Bounds to use for pinned stack.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the top activity of stack was successfully moved to the pinned stack.</p>\n</div></li></ul></div></div></div><div id='method-removeStacksInWindowingModes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-method-removeStacksInWindowingModes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-method-removeStacksInWindowingModes' class='name expandable'>removeStacksInWindowingModes</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Removes stacks in the windowing modes from the system if they are of activity type\n ACTIVITY_TYPE_STANDARD or ACTIVIT...</div><div class='long'><p>Removes stacks in the windowing modes from the system if they are of activity type\n ACTIVITY_TYPE_STANDARD or ACTIVITY_TYPE_UNDEFINED</p>\n</div></div></div><div id='method-removeStacksWithActivityTypes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-method-removeStacksWithActivityTypes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-method-removeStacksWithActivityTypes' class='name expandable'>removeStacksWithActivityTypes</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Removes stack of the activity types from the system. ...</div><div class='long'><p>Removes stack of the activity types from the system.</p>\n</div></div></div><div id='method-resizeDockedStack' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-method-resizeDockedStack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-method-resizeDockedStack' class='name expandable'>resizeDockedStack</a>( <span class='pre'>stackBounds, taskBounds</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Resize docked stack &amp; its task to given stack &amp; task bounds. ...</div><div class='long'><p>Resize docked stack &amp; its task to given stack &amp; task bounds.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>stackBounds</span> : Object {Rect}<div class='sub-desc'><p>Bounds to resize stack.</p>\n</div></li><li><span class='pre'>taskBounds</span> : Object {Rect}<div class='sub-desc'><p>Bounds to resize task.</p>\n</div></li></ul></div></div></div><div id='method-resizeStack' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-method-resizeStack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-method-resizeStack' class='name expandable'>resizeStack</a>( <span class='pre'>stackId, bounds, animate</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Resize the input stack id to the given bounds with animate setting. ...</div><div class='long'><p>Resize the input stack id to the given bounds with animate setting.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>stackId</span> : Number<div class='sub-desc'><p>Id of the stack to resize.</p>\n</div></li><li><span class='pre'>bounds</span> : Object {Rect}<div class='sub-desc'><p>Bounds to resize the stack to or {@code null} for fullscreen.</p>\n</div></li><li><span class='pre'>animate</span> : Boolean<div class='sub-desc'><p>Whether we should play an animation for resizing stack.</p>\n</div></li></ul></div></div></div><div id='method-resizeTask' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-method-resizeTask' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-method-resizeTask' class='name expandable'>resizeTask</a>( <span class='pre'>taskId, bounds</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Resize task to given bounds. ...</div><div class='long'><p>Resize task to given bounds.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>taskId</span> : Number<div class='sub-desc'><p>Id of task to resize.</p>\n</div></li><li><span class='pre'>bounds</span> : Object {Rect}<div class='sub-desc'><p>Bounds to resize task.</p>\n</div></li></ul></div></div></div><div id='method-setDisplayToSingleTaskInstance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-method-setDisplayToSingleTaskInstance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-method-setDisplayToSingleTaskInstance' class='name expandable'>setDisplayToSingleTaskInstance</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Makes the display with the given id a single task instance display. ...</div><div class='long'><p>Makes the display with the given id a single task instance display. I.e the display can only\n contain one task.</p>\n</div></div></div><div id='method-setTaskWindowingMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-method-setTaskWindowingMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-method-setTaskWindowingMode' class='name expandable'>setTaskWindowingMode</a>( <span class='pre'>taskId, windowingMode, toTop</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the windowing mode for a specific task. ...</div><div class='long'><p>Sets the windowing mode for a specific task. Only works on tasks of type\n android.app.WindowConfiguration.WindowConfiguration.ACTIVITY_TYPE_STANDARD</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>taskId</span> : Number<div class='sub-desc'><p>The id of the task to set the windowing mode for.</p>\n</div></li><li><span class='pre'>windowingMode</span> : Number<div class='sub-desc'><p>The windowing mode to set for the task.</p>\n</div></li><li><span class='pre'>toTop</span> : Boolean<div class='sub-desc'><p>If the task should be moved to the top once the windowing mode changes.</p>\n</div></li></ul></div></div></div><div id='method-setTaskWindowingModeSplitScreenPrimary' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-method-setTaskWindowingModeSplitScreenPrimary' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-method-setTaskWindowingModeSplitScreenPrimary' class='name expandable'>setTaskWindowingModeSplitScreenPrimary</a>( <span class='pre'>taskId, createMode, toTop, animate, initialBounds, showRecents</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Moves the input task to the primary-split-screen stack. ...</div><div class='long'><p>Moves the input task to the primary-split-screen stack.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>taskId</span> : Number<div class='sub-desc'><p>Id of task to move.</p>\n</div></li><li><span class='pre'>createMode</span> : Number<div class='sub-desc'><p>The mode the primary split screen stack should be created in if it doesn't\n                   exist already. See\n                   ActivityTaskManager.SPLIT_SCREEN_CREATE_MODE_TOP_OR_LEFT\n                   and\n                   <a href=\"#!/api/android.app.ActivityManager\" rel=\"android.app.ActivityManager\" class=\"docClass\">#SPLIT_SCREEN_CREATE_MODE_BOTTOM_OR_RIGHT</a></p>\n</div></li><li><span class='pre'>toTop</span> : Boolean<div class='sub-desc'><p>If the task and stack should be moved to the top.</p>\n</div></li><li><span class='pre'>animate</span> : Boolean<div class='sub-desc'><p>Whether we should play an animation for the moving the task</p>\n</div></li><li><span class='pre'>initialBounds</span> : Object {Rect}<div class='sub-desc'><p>If the primary stack gets created, it will use these bounds for the\n                      docked stack. Pass {@code null} to use default bounds.</p>\n</div></li><li><span class='pre'>showRecents</span> : Boolean<div class='sub-desc'><p>If the recents activity should be shown on the other side of the task\n                    going into split-screen mode.</p>\n</div></li></ul></div></div></div><div id='method-startSystemLockTaskMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-method-startSystemLockTaskMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-method-startSystemLockTaskMode' class='name expandable'>startSystemLockTaskMode</a>( <span class='pre'>taskId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Start to enter lock task mode for given task by system(UI). ...</div><div class='long'><p>Start to enter lock task mode for given task by system(UI).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>taskId</span> : Number<div class='sub-desc'><p>Id of task to lock.</p>\n</div></li></ul></div></div></div><div id='method-stopSystemLockTaskMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-method-stopSystemLockTaskMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-method-stopSystemLockTaskMode' class='name expandable'>stopSystemLockTaskMode</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Stop lock task mode by system(UI). ...</div><div class='long'><p>Stop lock task mode by system(UI).</p>\n</div></div></div><div id='method-supportsMultiWindow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-method-supportsMultiWindow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-method-supportsMultiWindow' class='name expandable'>supportsMultiWindow</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns true if the system supports at least one form of multi-window. ...</div><div class='long'><p>Returns true if the system supports at least one form of multi-window.\n E.g. freeform, split-screen, picture-in-picture.</p>\n</div></div></div><div id='method-supportsSplitScreenMultiWindow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.ActivityTaskManager'>android.app.ActivityTaskManager</span><br/><a href='source/ActivityTaskManager.html#android-app-ActivityTaskManager-method-supportsSplitScreenMultiWindow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.ActivityTaskManager-method-supportsSplitScreenMultiWindow' class='name expandable'>supportsSplitScreenMultiWindow</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns true if the system supports split screen multi-window. ...</div><div class='long'><p>Returns true if the system supports split screen multi-window.</p>\n</div></div></div></div></div></div></div>","meta":{}});