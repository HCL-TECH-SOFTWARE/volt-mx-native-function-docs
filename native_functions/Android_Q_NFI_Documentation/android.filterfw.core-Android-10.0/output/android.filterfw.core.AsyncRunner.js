Ext.data.JsonP.android_filterfw_core_AsyncRunner({"tagname":"class","name":"android.filterfw.core.AsyncRunner","autodetected":{},"files":[{"filename":"AsyncRunner.js","href":"AsyncRunner.html#android-filterfw-core-AsyncRunner"}],"extends":"android.filterfw.core.GraphRunner","hide":true,"members":[{"name":"RESULT_BLOCKED","tagname":"property","owner":"android.filterfw.core.GraphRunner","id":"property-RESULT_BLOCKED","meta":{}},{"name":"RESULT_ERROR","tagname":"property","owner":"android.filterfw.core.GraphRunner","id":"property-RESULT_ERROR","meta":{}},{"name":"RESULT_FINISHED","tagname":"property","owner":"android.filterfw.core.GraphRunner","id":"property-RESULT_FINISHED","meta":{}},{"name":"RESULT_RUNNING","tagname":"property","owner":"android.filterfw.core.GraphRunner","id":"property-RESULT_RUNNING","meta":{}},{"name":"RESULT_SLEEPING","tagname":"property","owner":"android.filterfw.core.GraphRunner","id":"property-RESULT_SLEEPING","meta":{}},{"name":"RESULT_STOPPED","tagname":"property","owner":"android.filterfw.core.GraphRunner","id":"property-RESULT_STOPPED","meta":{}},{"name":"RESULT_UNKNOWN","tagname":"property","owner":"android.filterfw.core.GraphRunner","id":"property-RESULT_UNKNOWN","meta":{}},{"name":"close","tagname":"method","owner":"android.filterfw.core.AsyncRunner","id":"method-close","meta":{}},{"name":"getContext","tagname":"method","owner":"android.filterfw.core.GraphRunner","id":"method-getContext","meta":{}},{"name":"getError","tagname":"method","owner":"android.filterfw.core.AsyncRunner","id":"method-getError","meta":{}},{"name":"getGraph","tagname":"method","owner":"android.filterfw.core.AsyncRunner","id":"method-getGraph","meta":{}},{"name":"isRunning","tagname":"method","owner":"android.filterfw.core.AsyncRunner","id":"method-isRunning","meta":{}},{"name":"run","tagname":"method","owner":"android.filterfw.core.AsyncRunner","id":"method-run","meta":{}},{"name":"setDoneCallback","tagname":"method","owner":"android.filterfw.core.AsyncRunner","id":"method-setDoneCallback","meta":{}},{"name":"setGraph","tagname":"method","owner":"android.filterfw.core.AsyncRunner","id":"method-setGraph","meta":{}},{"name":"stop","tagname":"method","owner":"android.filterfw.core.AsyncRunner","id":"method-stop","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.filterfw.core.AsyncRunner","classIcon":"icon-class","superclasses":["java.lang.Object","android.filterfw.core.GraphRunner"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><a href='#!/api/android.filterfw.core.GraphRunner' rel='android.filterfw.core.GraphRunner' class='docClass'>android.filterfw.core.GraphRunner</a><div class='subclass '><strong>android.filterfw.core.AsyncRunner</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/AsyncRunner.html#android-filterfw-core-AsyncRunner' target='_blank'>AsyncRunner.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-RESULT_BLOCKED' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.filterfw.core.GraphRunner' rel='android.filterfw.core.GraphRunner' class='defined-in docClass'>android.filterfw.core.GraphRunner</a><br/><a href='source/GraphRunner.html#android-filterfw-core-GraphRunner-property-RESULT_BLOCKED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.GraphRunner-property-RESULT_BLOCKED' class='name expandable'>RESULT_BLOCKED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;4&quot;</code></p></div></div></div><div id='property-RESULT_ERROR' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.filterfw.core.GraphRunner' rel='android.filterfw.core.GraphRunner' class='defined-in docClass'>android.filterfw.core.GraphRunner</a><br/><a href='source/GraphRunner.html#android-filterfw-core-GraphRunner-property-RESULT_ERROR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.GraphRunner-property-RESULT_ERROR' class='name expandable'>RESULT_ERROR</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;6&quot;</code></p></div></div></div><div id='property-RESULT_FINISHED' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.filterfw.core.GraphRunner' rel='android.filterfw.core.GraphRunner' class='defined-in docClass'>android.filterfw.core.GraphRunner</a><br/><a href='source/GraphRunner.html#android-filterfw-core-GraphRunner-property-RESULT_FINISHED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.GraphRunner-property-RESULT_FINISHED' class='name expandable'>RESULT_FINISHED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;2&quot;</code></p></div></div></div><div id='property-RESULT_RUNNING' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.filterfw.core.GraphRunner' rel='android.filterfw.core.GraphRunner' class='defined-in docClass'>android.filterfw.core.GraphRunner</a><br/><a href='source/GraphRunner.html#android-filterfw-core-GraphRunner-property-RESULT_RUNNING' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.GraphRunner-property-RESULT_RUNNING' class='name expandable'>RESULT_RUNNING</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-RESULT_SLEEPING' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.filterfw.core.GraphRunner' rel='android.filterfw.core.GraphRunner' class='defined-in docClass'>android.filterfw.core.GraphRunner</a><br/><a href='source/GraphRunner.html#android-filterfw-core-GraphRunner-property-RESULT_SLEEPING' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.GraphRunner-property-RESULT_SLEEPING' class='name expandable'>RESULT_SLEEPING</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;3&quot;</code></p></div></div></div><div id='property-RESULT_STOPPED' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.filterfw.core.GraphRunner' rel='android.filterfw.core.GraphRunner' class='defined-in docClass'>android.filterfw.core.GraphRunner</a><br/><a href='source/GraphRunner.html#android-filterfw-core-GraphRunner-property-RESULT_STOPPED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.GraphRunner-property-RESULT_STOPPED' class='name expandable'>RESULT_STOPPED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;5&quot;</code></p></div></div></div><div id='property-RESULT_UNKNOWN' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.filterfw.core.GraphRunner' rel='android.filterfw.core.GraphRunner' class='defined-in docClass'>android.filterfw.core.GraphRunner</a><br/><a href='source/GraphRunner.html#android-filterfw-core-GraphRunner-property-RESULT_UNKNOWN' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.GraphRunner-property-RESULT_UNKNOWN' class='name expandable'>RESULT_UNKNOWN</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;0&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-close' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.AsyncRunner'>android.filterfw.core.AsyncRunner</span><br/><a href='source/AsyncRunner.html#android-filterfw-core-AsyncRunner-method-close' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.AsyncRunner-method-close' class='name expandable'>close</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/android.filterfw.core.GraphRunner-method-close\" rel=\"android.filterfw.core.GraphRunner-method-close\" class=\"docClass\">android.filterfw.core.GraphRunner.close</a></p></div></div></div><div id='method-getContext' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.filterfw.core.GraphRunner' rel='android.filterfw.core.GraphRunner' class='defined-in docClass'>android.filterfw.core.GraphRunner</a><br/><a href='source/GraphRunner.html#android-filterfw-core-GraphRunner-method-getContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.GraphRunner-method-getContext' class='name expandable'>getContext</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.AsyncRunner'>android.filterfw.core.AsyncRunner</span><br/><a href='source/AsyncRunner.html#android-filterfw-core-AsyncRunner-method-getError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.AsyncRunner-method-getError' class='name expandable'>getError</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/android.filterfw.core.GraphRunner-method-getError\" rel=\"android.filterfw.core.GraphRunner-method-getError\" class=\"docClass\">android.filterfw.core.GraphRunner.getError</a></p></div></div></div><div id='method-getGraph' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.AsyncRunner'>android.filterfw.core.AsyncRunner</span><br/><a href='source/AsyncRunner.html#android-filterfw-core-AsyncRunner-method-getGraph' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.AsyncRunner-method-getGraph' class='name expandable'>getGraph</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/android.filterfw.core.GraphRunner-method-getGraph\" rel=\"android.filterfw.core.GraphRunner-method-getGraph\" class=\"docClass\">android.filterfw.core.GraphRunner.getGraph</a></p></div></div></div><div id='method-isRunning' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.AsyncRunner'>android.filterfw.core.AsyncRunner</span><br/><a href='source/AsyncRunner.html#android-filterfw-core-AsyncRunner-method-isRunning' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.AsyncRunner-method-isRunning' class='name expandable'>isRunning</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Check if background processing is happening ...</div><div class='long'><p>Check if background processing is happening</p>\n<p>Overrides: <a href=\"#!/api/android.filterfw.core.GraphRunner-method-isRunning\" rel=\"android.filterfw.core.GraphRunner-method-isRunning\" class=\"docClass\">android.filterfw.core.GraphRunner.isRunning</a></p></div></div></div><div id='method-run' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.AsyncRunner'>android.filterfw.core.AsyncRunner</span><br/><a href='source/AsyncRunner.html#android-filterfw-core-AsyncRunner-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.AsyncRunner-method-run' class='name expandable'>run</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Execute the graph in a background thread. ...</div><div class='long'><p>Execute the graph in a background thread.</p>\n<p>Overrides: <a href=\"#!/api/android.filterfw.core.GraphRunner-method-run\" rel=\"android.filterfw.core.GraphRunner-method-run\" class=\"docClass\">android.filterfw.core.GraphRunner.run</a></p></div></div></div><div id='method-setDoneCallback' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.AsyncRunner'>android.filterfw.core.AsyncRunner</span><br/><a href='source/AsyncRunner.html#android-filterfw-core-AsyncRunner-method-setDoneCallback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.AsyncRunner-method-setDoneCallback' class='name expandable'>setDoneCallback</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set a callback to be called in the UI thread once the AsyncRunner\n completes running a graph, whether the completion ...</div><div class='long'><p>Set a callback to be called in the UI thread once the AsyncRunner\n completes running a graph, whether the completion is due to a stop() call\n or the filters running out of data to process.</p>\n<p>Overrides: <a href=\"#!/api/android.filterfw.core.GraphRunner-method-setDoneCallback\" rel=\"android.filterfw.core.GraphRunner-method-setDoneCallback\" class=\"docClass\">android.filterfw.core.GraphRunner.setDoneCallback</a></p></div></div></div><div id='method-setGraph' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.AsyncRunner'>android.filterfw.core.AsyncRunner</span><br/><a href='source/AsyncRunner.html#android-filterfw-core-AsyncRunner-method-setGraph' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.AsyncRunner-method-setGraph' class='name expandable'>setGraph</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the graph to be run. ...</div><div class='long'><p>Sets the graph to be run. Will call prepare() on graph. Cannot be called\n when a graph is already running.</p>\n</div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.AsyncRunner'>android.filterfw.core.AsyncRunner</span><br/><a href='source/AsyncRunner.html#android-filterfw-core-AsyncRunner-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.AsyncRunner-method-stop' class='name expandable'>stop</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Stop graph execution. ...</div><div class='long'><p>Stop graph execution. This is an asynchronous call; register a callback\n with setDoneCallback to be notified of when the background processing has\n been completed. Calling stop will close the filter graph.</p>\n<p>Overrides: <a href=\"#!/api/android.filterfw.core.GraphRunner-method-stop\" rel=\"android.filterfw.core.GraphRunner-method-stop\" class=\"docClass\">android.filterfw.core.GraphRunner.stop</a></p></div></div></div></div></div></div></div>","meta":{}});