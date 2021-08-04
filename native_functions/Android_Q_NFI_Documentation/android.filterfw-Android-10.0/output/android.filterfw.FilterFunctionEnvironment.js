Ext.data.JsonP.android_filterfw_FilterFunctionEnvironment({"tagname":"class","name":"android.filterfw.FilterFunctionEnvironment","autodetected":{},"files":[{"filename":"FilterFunctionEnvironment.js","href":"FilterFunctionEnvironment.html#android-filterfw-FilterFunctionEnvironment"}],"extends":"android.filterfw.MffEnvironment","hide":true,"members":[{"name":"activateGLEnvironment","tagname":"method","owner":"android.filterfw.MffEnvironment","id":"method-activateGLEnvironment","meta":{}},{"name":"createFunction","tagname":"method","owner":"android.filterfw.FilterFunctionEnvironment","id":"method-createFunction","meta":{}},{"name":"createGLEnvironment","tagname":"method","owner":"android.filterfw.MffEnvironment","id":"method-createGLEnvironment","meta":{}},{"name":"deactivateGLEnvironment","tagname":"method","owner":"android.filterfw.MffEnvironment","id":"method-deactivateGLEnvironment","meta":{}},{"name":"getContext","tagname":"method","owner":"android.filterfw.MffEnvironment","id":"method-getContext","meta":{}},{"name":"setGLEnvironment","tagname":"method","owner":"android.filterfw.MffEnvironment","id":"method-setGLEnvironment","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.filterfw.FilterFunctionEnvironment","short_doc":"A FilterFunctionEnvironment provides a simple functional front-end to manually executing\n filters. ...","classIcon":"icon-class","superclasses":["java.lang.Object","android.filterfw.MffEnvironment"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><a href='#!/api/android.filterfw.MffEnvironment' rel='android.filterfw.MffEnvironment' class='docClass'>android.filterfw.MffEnvironment</a><div class='subclass '><strong>android.filterfw.FilterFunctionEnvironment</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/FilterFunctionEnvironment.html#android-filterfw-FilterFunctionEnvironment' target='_blank'>FilterFunctionEnvironment.js</a></div></pre><div class='doc-contents'><p>A FilterFunctionEnvironment provides a simple functional front-end to manually executing\n filters. Use this environment if a graph-based approach is not convenient for your case.\n Typically, a FilterFunctionEnvironment is used as follows:\n   1. Instantiate a new FilterFunctionEnvironment instance.\n   2. Perform any configuration, such as setting a GL environment.\n   3. Wrap Filters into FilterFunctions by calling createFunction().\n   4. Execute FilterFunctions individually and use the results for further processing.\n Additionally, there is a convenience method to execute a number of filters in sequence.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-activateGLEnvironment' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.filterfw.MffEnvironment' rel='android.filterfw.MffEnvironment' class='defined-in docClass'>android.filterfw.MffEnvironment</a><br/><a href='source/MffEnvironment.html#android-filterfw-MffEnvironment-method-activateGLEnvironment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.MffEnvironment-method-activateGLEnvironment' class='name expandable'>activateGLEnvironment</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Activate the GL environment for use in the current thread. ...</div><div class='long'><p>Activate the GL environment for use in the current thread. A GL environment must have been\n previously set or created using setGLEnvironment() or createGLEnvironment()! Call this after\n having switched to a new thread for GL filter execution.</p>\n</div></div></div><div id='method-createFunction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.FilterFunctionEnvironment'>android.filterfw.FilterFunctionEnvironment</span><br/><a href='source/FilterFunctionEnvironment.html#android-filterfw-FilterFunctionEnvironment-method-createFunction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.FilterFunctionEnvironment-method-createFunction' class='name expandable'>createFunction</a>( <span class='pre'>filterClass, parameters</span> ) : Object {android.filterfw.core.FilterFunction}<span class=\"signature\"></span></div><div class='description'><div class='short'>Create a new FilterFunction from a specific filter class. ...</div><div class='long'><p>Create a new FilterFunction from a specific filter class. The function is initialized with\n the given key-value list of parameters. Note, that this function uses the default shared\n FilterFactory to create the filter instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filterClass</span> : Object {java.lang.Class}<div class='sub-desc'><p>The class of the filter to wrap. This must be a Filter subclass.</p>\n</div></li><li><span class='pre'>parameters</span> : Object {java.lang.Object[]}<div class='sub-desc'><p>An argument list of alternating key-value filter parameters.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.filterfw.core.FilterFunction}</span><div class='sub-desc'><p>A new FilterFunction instance.</p>\n</div></li></ul></div></div></div><div id='method-createGLEnvironment' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.filterfw.MffEnvironment' rel='android.filterfw.MffEnvironment' class='defined-in docClass'>android.filterfw.MffEnvironment</a><br/><a href='source/MffEnvironment.html#android-filterfw-MffEnvironment-method-createGLEnvironment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.MffEnvironment-method-createGLEnvironment' class='name expandable'>createGLEnvironment</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Create and activate a new GL environment for use in this filter context. ...</div><div class='long'><p>Create and activate a new GL environment for use in this filter context.</p>\n</div></div></div><div id='method-deactivateGLEnvironment' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.filterfw.MffEnvironment' rel='android.filterfw.MffEnvironment' class='defined-in docClass'>android.filterfw.MffEnvironment</a><br/><a href='source/MffEnvironment.html#android-filterfw-MffEnvironment-method-deactivateGLEnvironment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.MffEnvironment-method-deactivateGLEnvironment' class='name expandable'>deactivateGLEnvironment</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Deactivate the GL environment from use in the current thread. ...</div><div class='long'><p>Deactivate the GL environment from use in the current thread. A GL environment must have been\n previously set or created using setGLEnvironment() or createGLEnvironment()! Call this before\n running GL filters in another thread.</p>\n</div></div></div><div id='method-getContext' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.filterfw.MffEnvironment' rel='android.filterfw.MffEnvironment' class='defined-in docClass'>android.filterfw.MffEnvironment</a><br/><a href='source/MffEnvironment.html#android-filterfw-MffEnvironment-method-getContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.MffEnvironment-method-getContext' class='name expandable'>getContext</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the environment's filter-context. ...</div><div class='long'><p>Returns the environment's filter-context.</p>\n</div></div></div><div id='method-setGLEnvironment' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.filterfw.MffEnvironment' rel='android.filterfw.MffEnvironment' class='defined-in docClass'>android.filterfw.MffEnvironment</a><br/><a href='source/MffEnvironment.html#android-filterfw-MffEnvironment-method-setGLEnvironment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.MffEnvironment-method-setGLEnvironment' class='name expandable'>setGLEnvironment</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the environment's GL environment to the specified environment. ...</div><div class='long'><p>Set the environment's GL environment to the specified environment. This does not activate\n the environment.</p>\n</div></div></div></div></div></div></div>","meta":{}});