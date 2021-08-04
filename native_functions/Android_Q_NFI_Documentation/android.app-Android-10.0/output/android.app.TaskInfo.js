Ext.data.JsonP.android_app_TaskInfo({"tagname":"class","name":"android.app.TaskInfo","autodetected":{},"files":[{"filename":"TaskInfo.js","href":"TaskInfo.html#android-app-TaskInfo"}],"extends":"java.lang.Object","members":[{"name":"baseActivity","tagname":"property","owner":"android.app.TaskInfo","id":"property-baseActivity","meta":{}},{"name":"baseIntent","tagname":"property","owner":"android.app.TaskInfo","id":"property-baseIntent","meta":{}},{"name":"isRunning","tagname":"property","owner":"android.app.TaskInfo","id":"property-isRunning","meta":{}},{"name":"numActivities","tagname":"property","owner":"android.app.TaskInfo","id":"property-numActivities","meta":{}},{"name":"origActivity","tagname":"property","owner":"android.app.TaskInfo","id":"property-origActivity","meta":{}},{"name":"taskDescription","tagname":"property","owner":"android.app.TaskInfo","id":"property-taskDescription","meta":{}},{"name":"taskId","tagname":"property","owner":"android.app.TaskInfo","id":"property-taskId","meta":{}},{"name":"topActivity","tagname":"property","owner":"android.app.TaskInfo","id":"property-topActivity","meta":{}},{"name":"toString","tagname":"method","owner":"android.app.TaskInfo","id":"method-toString","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.app.TaskInfo","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":["android.app.ActivityManager.RecentTaskInfo","android.app.ActivityManager.RunningTaskInfo"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.app.TaskInfo</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/android.app.ActivityManager.RecentTaskInfo' rel='android.app.ActivityManager.RecentTaskInfo' class='docClass'>android.app.ActivityManager.RecentTaskInfo</a></div><div class='dependency'><a href='#!/api/android.app.ActivityManager.RunningTaskInfo' rel='android.app.ActivityManager.RunningTaskInfo' class='docClass'>android.app.ActivityManager.RunningTaskInfo</a></div><h4>Files</h4><div class='dependency'><a href='source/TaskInfo.html#android-app-TaskInfo' target='_blank'>TaskInfo.js</a></div></pre><div class='doc-contents'><p>Stores information about a particular Task.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-baseActivity' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.TaskInfo'>android.app.TaskInfo</span><br/><a href='source/TaskInfo.html#android-app-TaskInfo-property-baseActivity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.TaskInfo-property-baseActivity' class='name expandable'>baseActivity</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The component of the first activity in the task, can be considered the \"application\" of this\ntask. ...</div><div class='long'><p>The component of the first activity in the task, can be considered the \"application\" of this\ntask.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-baseIntent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.TaskInfo'>android.app.TaskInfo</span><br/><a href='source/TaskInfo.html#android-app-TaskInfo-property-baseIntent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.TaskInfo-property-baseIntent' class='name expandable'>baseIntent</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The base intent of the task (generally the intent that launched the task). ...</div><div class='long'><p>The base intent of the task (generally the intent that launched the task). This intent can\nbe used to relaunch the task (if it is no longer running) or brought to the front if it is.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-isRunning' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.TaskInfo'>android.app.TaskInfo</span><br/><a href='source/TaskInfo.html#android-app-TaskInfo-property-isRunning' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.TaskInfo-property-isRunning' class='name expandable'>isRunning</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Whether or not this task has any running activities. ...</div><div class='long'><p>Whether or not this task has any running activities.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-numActivities' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.TaskInfo'>android.app.TaskInfo</span><br/><a href='source/TaskInfo.html#android-app-TaskInfo-property-numActivities' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.TaskInfo-property-numActivities' class='name expandable'>numActivities</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The number of activities in this task (including running). ...</div><div class='long'><p>The number of activities in this task (including running).</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-origActivity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.TaskInfo'>android.app.TaskInfo</span><br/><a href='source/TaskInfo.html#android-app-TaskInfo-property-origActivity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.TaskInfo-property-origActivity' class='name expandable'>origActivity</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The component of the target activity if this task was started from an activity alias. ...</div><div class='long'><p>The component of the target activity if this task was started from an activity alias.\nOtherwise, this is null.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-taskDescription' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.TaskInfo'>android.app.TaskInfo</span><br/><a href='source/TaskInfo.html#android-app-TaskInfo-property-taskDescription' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.TaskInfo-property-taskDescription' class='name expandable'>taskDescription</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The recent activity values for the highest activity in the stack to have set the values. ...</div><div class='long'><p>The recent activity values for the highest activity in the stack to have set the values.\nActivity.setTaskDescription(android.app.ActivityManager.TaskDescription).</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-taskId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.TaskInfo'>android.app.TaskInfo</span><br/><a href='source/TaskInfo.html#android-app-TaskInfo-property-taskId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.TaskInfo-property-taskId' class='name expandable'>taskId</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The identifier for this task. ...</div><div class='long'><p>The identifier for this task.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-topActivity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.TaskInfo'>android.app.TaskInfo</span><br/><a href='source/TaskInfo.html#android-app-TaskInfo-property-topActivity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.TaskInfo-property-topActivity' class='name expandable'>topActivity</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The component of the top activity in the task, currently showing to the user. ...</div><div class='long'><p>The component of the top activity in the task, currently showing to the user.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-toString' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.TaskInfo'>android.app.TaskInfo</span><br/><a href='source/TaskInfo.html#android-app-TaskInfo-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.TaskInfo-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});