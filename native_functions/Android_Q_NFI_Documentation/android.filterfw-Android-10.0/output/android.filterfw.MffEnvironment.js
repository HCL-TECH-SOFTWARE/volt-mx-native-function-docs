Ext.data.JsonP.android_filterfw_MffEnvironment({"tagname":"class","name":"android.filterfw.MffEnvironment","autodetected":{},"files":[{"filename":"MffEnvironment.js","href":"MffEnvironment.html#android-filterfw-MffEnvironment"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"activateGLEnvironment","tagname":"method","owner":"android.filterfw.MffEnvironment","id":"method-activateGLEnvironment","meta":{}},{"name":"createGLEnvironment","tagname":"method","owner":"android.filterfw.MffEnvironment","id":"method-createGLEnvironment","meta":{}},{"name":"deactivateGLEnvironment","tagname":"method","owner":"android.filterfw.MffEnvironment","id":"method-deactivateGLEnvironment","meta":{}},{"name":"getContext","tagname":"method","owner":"android.filterfw.MffEnvironment","id":"method-getContext","meta":{}},{"name":"setGLEnvironment","tagname":"method","owner":"android.filterfw.MffEnvironment","id":"method-setGLEnvironment","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.filterfw.MffEnvironment","short_doc":"Base class for mobile filter framework (MFF) frontend environments. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":["android.filterfw.FilterFunctionEnvironment","android.filterfw.GraphEnvironment"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.filterfw.MffEnvironment</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/android.filterfw.FilterFunctionEnvironment' rel='android.filterfw.FilterFunctionEnvironment' class='docClass'>android.filterfw.FilterFunctionEnvironment</a></div><div class='dependency'><a href='#!/api/android.filterfw.GraphEnvironment' rel='android.filterfw.GraphEnvironment' class='docClass'>android.filterfw.GraphEnvironment</a></div><h4>Files</h4><div class='dependency'><a href='source/MffEnvironment.html#android-filterfw-MffEnvironment' target='_blank'>MffEnvironment.js</a></div></pre><div class='doc-contents'><p>Base class for mobile filter framework (MFF) frontend environments. These convenience classes\n allow using the filter framework without the requirement of performing manual setup of its\n required components.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-activateGLEnvironment' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.MffEnvironment'>android.filterfw.MffEnvironment</span><br/><a href='source/MffEnvironment.html#android-filterfw-MffEnvironment-method-activateGLEnvironment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.MffEnvironment-method-activateGLEnvironment' class='name expandable'>activateGLEnvironment</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Activate the GL environment for use in the current thread. ...</div><div class='long'><p>Activate the GL environment for use in the current thread. A GL environment must have been\n previously set or created using setGLEnvironment() or createGLEnvironment()! Call this after\n having switched to a new thread for GL filter execution.</p>\n</div></div></div><div id='method-createGLEnvironment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.MffEnvironment'>android.filterfw.MffEnvironment</span><br/><a href='source/MffEnvironment.html#android-filterfw-MffEnvironment-method-createGLEnvironment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.MffEnvironment-method-createGLEnvironment' class='name expandable'>createGLEnvironment</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Create and activate a new GL environment for use in this filter context. ...</div><div class='long'><p>Create and activate a new GL environment for use in this filter context.</p>\n</div></div></div><div id='method-deactivateGLEnvironment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.MffEnvironment'>android.filterfw.MffEnvironment</span><br/><a href='source/MffEnvironment.html#android-filterfw-MffEnvironment-method-deactivateGLEnvironment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.MffEnvironment-method-deactivateGLEnvironment' class='name expandable'>deactivateGLEnvironment</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Deactivate the GL environment from use in the current thread. ...</div><div class='long'><p>Deactivate the GL environment from use in the current thread. A GL environment must have been\n previously set or created using setGLEnvironment() or createGLEnvironment()! Call this before\n running GL filters in another thread.</p>\n</div></div></div><div id='method-getContext' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.MffEnvironment'>android.filterfw.MffEnvironment</span><br/><a href='source/MffEnvironment.html#android-filterfw-MffEnvironment-method-getContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.MffEnvironment-method-getContext' class='name expandable'>getContext</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the environment's filter-context. ...</div><div class='long'><p>Returns the environment's filter-context.</p>\n</div></div></div><div id='method-setGLEnvironment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.MffEnvironment'>android.filterfw.MffEnvironment</span><br/><a href='source/MffEnvironment.html#android-filterfw-MffEnvironment-method-setGLEnvironment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.MffEnvironment-method-setGLEnvironment' class='name expandable'>setGLEnvironment</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the environment's GL environment to the specified environment. ...</div><div class='long'><p>Set the environment's GL environment to the specified environment. This does not activate\n the environment.</p>\n</div></div></div></div></div></div></div>","meta":{}});