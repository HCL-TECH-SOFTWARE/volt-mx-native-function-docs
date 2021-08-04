Ext.data.JsonP.android_content_ComponentCallbacks2({"tagname":"class","name":"android.content.ComponentCallbacks2","autodetected":{},"files":[{"filename":"ComponentCallbacks2.js","href":"ComponentCallbacks2.html#android-content-ComponentCallbacks2"}],"members":[{"name":"TRIM_MEMORY_BACKGROUND","tagname":"property","owner":"android.content.ComponentCallbacks2","id":"property-TRIM_MEMORY_BACKGROUND","meta":{}},{"name":"TRIM_MEMORY_COMPLETE","tagname":"property","owner":"android.content.ComponentCallbacks2","id":"property-TRIM_MEMORY_COMPLETE","meta":{}},{"name":"TRIM_MEMORY_MODERATE","tagname":"property","owner":"android.content.ComponentCallbacks2","id":"property-TRIM_MEMORY_MODERATE","meta":{}},{"name":"TRIM_MEMORY_RUNNING_CRITICAL","tagname":"property","owner":"android.content.ComponentCallbacks2","id":"property-TRIM_MEMORY_RUNNING_CRITICAL","meta":{}},{"name":"TRIM_MEMORY_RUNNING_LOW","tagname":"property","owner":"android.content.ComponentCallbacks2","id":"property-TRIM_MEMORY_RUNNING_LOW","meta":{}},{"name":"TRIM_MEMORY_RUNNING_MODERATE","tagname":"property","owner":"android.content.ComponentCallbacks2","id":"property-TRIM_MEMORY_RUNNING_MODERATE","meta":{}},{"name":"TRIM_MEMORY_UI_HIDDEN","tagname":"property","owner":"android.content.ComponentCallbacks2","id":"property-TRIM_MEMORY_UI_HIDDEN","meta":{}},{"name":"onTrimMemory","tagname":"method","owner":"android.content.ComponentCallbacks2","id":"method-onTrimMemory","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.content.ComponentCallbacks2","short_doc":"implements android.content.ComponentCallbacks\n\n Extended android.content.ComponentCallbacks interface with a new call...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ComponentCallbacks2.html#android-content-ComponentCallbacks2' target='_blank'>ComponentCallbacks2.js</a></div></pre><div class='doc-contents'><p>implements <a href=\"#!/api/android.content.ComponentCallbacks\" rel=\"android.content.ComponentCallbacks\" class=\"docClass\">android.content.ComponentCallbacks</a></p>\n\n<p> Extended <a href=\"#!/api/android.content.ComponentCallbacks\" rel=\"android.content.ComponentCallbacks\" class=\"docClass\">android.content.ComponentCallbacks</a> interface with a new callback for\n finer-grained memory management. This interface is available in all application components\n (android.app.Activity, android.app.Service,\n <a href=\"#!/api/android.content.ContentProvider\" rel=\"android.content.ContentProvider\" class=\"docClass\">android.content.ContentProvider</a>, and android.app.Application).</p>\n\n<p> <p>You should implement <a href=\"#!/api/android.content.ComponentCallbacks2-method-onTrimMemory\" rel=\"android.content.ComponentCallbacks2-method-onTrimMemory\" class=\"docClass\">onTrimMemory</a> to incrementally release memory based on current\n system constraints. Using this callback to release your resources helps provide a more\n responsive system overall, but also directly benefits the user experience for\n your app by allowing the system to keep your process alive longer. That is,\n if you <em>don't</em> trim your resources based on memory levels defined by this callback,\n the system is more likely to kill your process while it is cached in the least-recently used\n (LRU) list, thus requiring your app to restart and restore all state when the user returns to it.</p>\n\n<p> <p>The values provided by <a href=\"#!/api/android.content.ComponentCallbacks2-method-onTrimMemory\" rel=\"android.content.ComponentCallbacks2-method-onTrimMemory\" class=\"docClass\">onTrimMemory</a> do not represent a single linear progression of\n memory limits, but provide you different types of clues about memory availability:</p>\n <ul>\n <li>When your app is running:\n  <ol>\n  <li><a href=\"#!/api/android.content.ComponentCallbacks2-property-TRIM_MEMORY_RUNNING_MODERATE\" rel=\"android.content.ComponentCallbacks2-property-TRIM_MEMORY_RUNNING_MODERATE\" class=\"docClass\">TRIM_MEMORY_RUNNING_MODERATE</a> <br>The device is beginning to run low on memory.\n Your app is running and not killable.\n  <li><a href=\"#!/api/android.content.ComponentCallbacks2-property-TRIM_MEMORY_RUNNING_LOW\" rel=\"android.content.ComponentCallbacks2-property-TRIM_MEMORY_RUNNING_LOW\" class=\"docClass\">TRIM_MEMORY_RUNNING_LOW</a> <br>The device is running much lower on memory.\n Your app is running and not killable, but please release unused resources to improve system\n performance (which directly impacts your app's performance).\n  <li><a href=\"#!/api/android.content.ComponentCallbacks2-property-TRIM_MEMORY_RUNNING_CRITICAL\" rel=\"android.content.ComponentCallbacks2-property-TRIM_MEMORY_RUNNING_CRITICAL\" class=\"docClass\">TRIM_MEMORY_RUNNING_CRITICAL</a> <br>The device is running extremely low on memory.\n Your app is not yet considered a killable process, but the system will begin killing\n background processes if apps do not release resources, so you should release non-critical\n resources now to prevent performance degradation.\n  </li></li></li></ol>\n </li>\n <li>When your app's visibility changes:\n  <ol>\n  <li><a href=\"#!/api/android.content.ComponentCallbacks2-property-TRIM_MEMORY_UI_HIDDEN\" rel=\"android.content.ComponentCallbacks2-property-TRIM_MEMORY_UI_HIDDEN\" class=\"docClass\">TRIM_MEMORY_UI_HIDDEN</a> <br>Your app's UI is no longer visible, so this is a good\n time to release large resources that are used only by your UI.\n  </li></ol>\n </li>\n <li>When your app's process resides in the background LRU list:\n  <ol>\n  <li><a href=\"#!/api/android.content.ComponentCallbacks2-property-TRIM_MEMORY_BACKGROUND\" rel=\"android.content.ComponentCallbacks2-property-TRIM_MEMORY_BACKGROUND\" class=\"docClass\">TRIM_MEMORY_BACKGROUND</a> <br>The system is running low on memory and your process is\n near the beginning of the LRU list. Although your app process is not at a high risk of being\n killed, the system may already be killing processes in the LRU list, so you should release\n resources that are easy to recover so your process will remain in the list and resume\n quickly when the user returns to your app.\n  <li><a href=\"#!/api/android.content.ComponentCallbacks2-property-TRIM_MEMORY_MODERATE\" rel=\"android.content.ComponentCallbacks2-property-TRIM_MEMORY_MODERATE\" class=\"docClass\">TRIM_MEMORY_MODERATE</a> <br>The system is running low on memory and your process is\n near the middle of the LRU list. If the system becomes further constrained for memory, there's a\n chance your process will be killed.\n  <li><a href=\"#!/api/android.content.ComponentCallbacks2-property-TRIM_MEMORY_COMPLETE\" rel=\"android.content.ComponentCallbacks2-property-TRIM_MEMORY_COMPLETE\" class=\"docClass\">TRIM_MEMORY_COMPLETE</a> <br>The system is running low on memory and your process is\n one of the first to be killed if the system does not recover memory now. You should release\n absolutely everything that's not critical to resuming your app state.\n   <p>To support API levels lower than 14, you can use the onLowMemory method as a\n fallback that's roughly equivalent to the <a href=\"#!/api/android.content.ComponentCallbacks2-property-TRIM_MEMORY_COMPLETE\" rel=\"android.content.ComponentCallbacks2-property-TRIM_MEMORY_COMPLETE\" class=\"docClass\">TRIM_MEMORY_COMPLETE</a> level.\n  </p></li>\n  </li></li></ol>\n <p class=\"note\"><strong>Note:</strong> When the system begins\n killing processes in the LRU list, although it primarily works bottom-up, it does give some\n consideration to which processes are consuming more memory and will thus provide more gains in\n memory if killed. So the less memory you consume while in the LRU list overall, the better\n your chances are to remain in the list and be able to quickly resume.</p>\n </li>\n </ul>\n <p>More information about the different stages of a process lifecycle (such as what it means\n to be placed in the background LRU list) is provided in the <a\n href=\"{@docRoot}guide/components/processes-and-threads.html#Lifecycle\">Processes and Threads</a>\n document.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-TRIM_MEMORY_BACKGROUND' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.ComponentCallbacks2'>android.content.ComponentCallbacks2</span><br/><a href='source/ComponentCallbacks2.html#android-content-ComponentCallbacks2-property-TRIM_MEMORY_BACKGROUND' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.ComponentCallbacks2-property-TRIM_MEMORY_BACKGROUND' class='name expandable'>TRIM_MEMORY_BACKGROUND</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Level for onTrimMemory(int): the process has gone on to the\nLRU list. ...</div><div class='long'><p>Level for <a href=\"#!/api/android.content.ComponentCallbacks2-method-onTrimMemory\" rel=\"android.content.ComponentCallbacks2-method-onTrimMemory\" class=\"docClass\">onTrimMemory</a>(int): the process has gone on to the\nLRU list.  This is a good opportunity to clean up resources that can\nefficiently and quickly be re-built if the user returns to the app.</p>\n<p>Defaults to: <code>&quot;40&quot;</code></p></div></div></div><div id='property-TRIM_MEMORY_COMPLETE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.ComponentCallbacks2'>android.content.ComponentCallbacks2</span><br/><a href='source/ComponentCallbacks2.html#android-content-ComponentCallbacks2-property-TRIM_MEMORY_COMPLETE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.ComponentCallbacks2-property-TRIM_MEMORY_COMPLETE' class='name expandable'>TRIM_MEMORY_COMPLETE</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Level for onTrimMemory(int): the process is nearing the end\nof the background LRU list, and if more memory isn't foun...</div><div class='long'><p>Level for <a href=\"#!/api/android.content.ComponentCallbacks2-method-onTrimMemory\" rel=\"android.content.ComponentCallbacks2-method-onTrimMemory\" class=\"docClass\">onTrimMemory</a>(int): the process is nearing the end\nof the background LRU list, and if more memory isn't found soon it will\nbe killed.</p>\n<p>Defaults to: <code>&quot;80&quot;</code></p></div></div></div><div id='property-TRIM_MEMORY_MODERATE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.ComponentCallbacks2'>android.content.ComponentCallbacks2</span><br/><a href='source/ComponentCallbacks2.html#android-content-ComponentCallbacks2-property-TRIM_MEMORY_MODERATE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.ComponentCallbacks2-property-TRIM_MEMORY_MODERATE' class='name expandable'>TRIM_MEMORY_MODERATE</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Level for onTrimMemory(int): the process is around the middle\nof the background LRU list; freeing memory can help the...</div><div class='long'><p>Level for <a href=\"#!/api/android.content.ComponentCallbacks2-method-onTrimMemory\" rel=\"android.content.ComponentCallbacks2-method-onTrimMemory\" class=\"docClass\">onTrimMemory</a>(int): the process is around the middle\nof the background LRU list; freeing memory can help the system keep\nother processes running later in the list for better overall performance.</p>\n<p>Defaults to: <code>&quot;60&quot;</code></p></div></div></div><div id='property-TRIM_MEMORY_RUNNING_CRITICAL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.ComponentCallbacks2'>android.content.ComponentCallbacks2</span><br/><a href='source/ComponentCallbacks2.html#android-content-ComponentCallbacks2-property-TRIM_MEMORY_RUNNING_CRITICAL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.ComponentCallbacks2-property-TRIM_MEMORY_RUNNING_CRITICAL' class='name expandable'>TRIM_MEMORY_RUNNING_CRITICAL</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Level for onTrimMemory(int): the process is not an expendable\nbackground process, but the device is running extremely...</div><div class='long'><p>Level for <a href=\"#!/api/android.content.ComponentCallbacks2-method-onTrimMemory\" rel=\"android.content.ComponentCallbacks2-method-onTrimMemory\" class=\"docClass\">onTrimMemory</a>(int): the process is not an expendable\nbackground process, but the device is running extremely low on memory\nand is about to not be able to keep any background processes running.\nYour running process should free up as many non-critical resources as it\ncan to allow that memory to be used elsewhere.  The next thing that\nwill happen after this is onLowMemory() called to report that\nnothing at all can be kept in the background, a situation that can start\nto notably impact the user.</p>\n<p>Defaults to: <code>&quot;15&quot;</code></p></div></div></div><div id='property-TRIM_MEMORY_RUNNING_LOW' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.ComponentCallbacks2'>android.content.ComponentCallbacks2</span><br/><a href='source/ComponentCallbacks2.html#android-content-ComponentCallbacks2-property-TRIM_MEMORY_RUNNING_LOW' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.ComponentCallbacks2-property-TRIM_MEMORY_RUNNING_LOW' class='name expandable'>TRIM_MEMORY_RUNNING_LOW</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Level for onTrimMemory(int): the process is not an expendable\nbackground process, but the device is running low on me...</div><div class='long'><p>Level for <a href=\"#!/api/android.content.ComponentCallbacks2-method-onTrimMemory\" rel=\"android.content.ComponentCallbacks2-method-onTrimMemory\" class=\"docClass\">onTrimMemory</a>(int): the process is not an expendable\nbackground process, but the device is running low on memory.\nYour running process should free up unneeded resources to allow that\nmemory to be used elsewhere.</p>\n<p>Defaults to: <code>&quot;10&quot;</code></p></div></div></div><div id='property-TRIM_MEMORY_RUNNING_MODERATE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.ComponentCallbacks2'>android.content.ComponentCallbacks2</span><br/><a href='source/ComponentCallbacks2.html#android-content-ComponentCallbacks2-property-TRIM_MEMORY_RUNNING_MODERATE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.ComponentCallbacks2-property-TRIM_MEMORY_RUNNING_MODERATE' class='name expandable'>TRIM_MEMORY_RUNNING_MODERATE</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Level for onTrimMemory(int): the process is not an expendable\nbackground process, but the device is running moderatel...</div><div class='long'><p>Level for <a href=\"#!/api/android.content.ComponentCallbacks2-method-onTrimMemory\" rel=\"android.content.ComponentCallbacks2-method-onTrimMemory\" class=\"docClass\">onTrimMemory</a>(int): the process is not an expendable\nbackground process, but the device is running moderately low on memory.\nYour running process may want to release some unneeded resources for\nuse elsewhere.</p>\n<p>Defaults to: <code>&quot;5&quot;</code></p></div></div></div><div id='property-TRIM_MEMORY_UI_HIDDEN' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.ComponentCallbacks2'>android.content.ComponentCallbacks2</span><br/><a href='source/ComponentCallbacks2.html#android-content-ComponentCallbacks2-property-TRIM_MEMORY_UI_HIDDEN' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.ComponentCallbacks2-property-TRIM_MEMORY_UI_HIDDEN' class='name expandable'>TRIM_MEMORY_UI_HIDDEN</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Level for onTrimMemory(int): the process had been showing\na user interface, and is no longer doing so. ...</div><div class='long'><p>Level for <a href=\"#!/api/android.content.ComponentCallbacks2-method-onTrimMemory\" rel=\"android.content.ComponentCallbacks2-method-onTrimMemory\" class=\"docClass\">onTrimMemory</a>(int): the process had been showing\na user interface, and is no longer doing so.  Large allocations with\nthe UI should be released at this point to allow memory to be better\nmanaged.</p>\n<p>Defaults to: <code>&quot;20&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-onTrimMemory' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.ComponentCallbacks2'>android.content.ComponentCallbacks2</span><br/><a href='source/ComponentCallbacks2.html#android-content-ComponentCallbacks2-method-onTrimMemory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.ComponentCallbacks2-method-onTrimMemory' class='name expandable'>onTrimMemory</a>( <span class='pre'>level</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when the operating system has determined that it is a good\n time for a process to trim unneeded memory from it...</div><div class='long'><p>Called when the operating system has determined that it is a good\n time for a process to trim unneeded memory from its process.  This will\n happen for example when it goes in the background and there is not enough\n memory to keep as many background processes running as desired.  You\n should never compare to exact values of the level, since new intermediate\n values may be added -- you will typically want to compare if the value\n is greater or equal to a level you are interested in.</p>\n\n<p> <p>To retrieve the processes current trim level at any point, you can\n use ActivityManager.getMyMemoryState(RunningAppProcessInfo).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>level</span> : Number<div class='sub-desc'><p>The context of the trim, giving a hint of the amount of\n trimming the application may like to perform.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});