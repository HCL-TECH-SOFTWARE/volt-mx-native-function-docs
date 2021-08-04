Ext.data.JsonP.android_filterfw_core_FilterGraph({"tagname":"class","name":"android.filterfw.core.FilterGraph","autodetected":{},"files":[{"filename":"FilterGraph.js","href":"FilterGraph.html#android-filterfw-core-FilterGraph"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"AUTOBRANCH_OFF","tagname":"property","owner":"android.filterfw.core.FilterGraph","id":"property-AUTOBRANCH_OFF","meta":{}},{"name":"AUTOBRANCH_SYNCED","tagname":"property","owner":"android.filterfw.core.FilterGraph","id":"property-AUTOBRANCH_SYNCED","meta":{}},{"name":"AUTOBRANCH_UNSYNCED","tagname":"property","owner":"android.filterfw.core.FilterGraph","id":"property-AUTOBRANCH_UNSYNCED","meta":{}},{"name":"TYPECHECK_DYNAMIC","tagname":"property","owner":"android.filterfw.core.FilterGraph","id":"property-TYPECHECK_DYNAMIC","meta":{}},{"name":"TYPECHECK_OFF","tagname":"property","owner":"android.filterfw.core.FilterGraph","id":"property-TYPECHECK_OFF","meta":{}},{"name":"TYPECHECK_STRICT","tagname":"property","owner":"android.filterfw.core.FilterGraph","id":"property-TYPECHECK_STRICT","meta":{}},{"name":"addFilter","tagname":"method","owner":"android.filterfw.core.FilterGraph","id":"method-addFilter","meta":{}},{"name":"beginProcessing","tagname":"method","owner":"android.filterfw.core.FilterGraph","id":"method-beginProcessing","meta":{}},{"name":"closeFilters","tagname":"method","owner":"android.filterfw.core.FilterGraph","id":"method-closeFilters","meta":{}},{"name":"connect","tagname":"method","owner":"android.filterfw.core.FilterGraph","id":"method-connect","meta":{}},{"name":"containsFilter","tagname":"method","owner":"android.filterfw.core.FilterGraph","id":"method-containsFilter","meta":{}},{"name":"flushFrames","tagname":"method","owner":"android.filterfw.core.FilterGraph","id":"method-flushFrames","meta":{}},{"name":"getFilter","tagname":"method","owner":"android.filterfw.core.FilterGraph","id":"method-getFilter","meta":{}},{"name":"getFilters","tagname":"method","owner":"android.filterfw.core.FilterGraph","id":"method-getFilters","meta":{}},{"name":"isReady","tagname":"method","owner":"android.filterfw.core.FilterGraph","id":"method-isReady","meta":{}},{"name":"setAutoBranchMode","tagname":"method","owner":"android.filterfw.core.FilterGraph","id":"method-setAutoBranchMode","meta":{}},{"name":"setDiscardUnconnectedOutputs","tagname":"method","owner":"android.filterfw.core.FilterGraph","id":"method-setDiscardUnconnectedOutputs","meta":{}},{"name":"setTypeCheckMode","tagname":"method","owner":"android.filterfw.core.FilterGraph","id":"method-setTypeCheckMode","meta":{}},{"name":"tearDown","tagname":"method","owner":"android.filterfw.core.FilterGraph","id":"method-tearDown","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.filterfw.core.FilterGraph","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.filterfw.core.FilterGraph</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph' target='_blank'>FilterGraph.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-AUTOBRANCH_OFF' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-property-AUTOBRANCH_OFF' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-property-AUTOBRANCH_OFF' class='name expandable'>AUTOBRANCH_OFF</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;0&quot;</code></p></div></div></div><div id='property-AUTOBRANCH_SYNCED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-property-AUTOBRANCH_SYNCED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-property-AUTOBRANCH_SYNCED' class='name expandable'>AUTOBRANCH_SYNCED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-AUTOBRANCH_UNSYNCED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-property-AUTOBRANCH_UNSYNCED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-property-AUTOBRANCH_UNSYNCED' class='name expandable'>AUTOBRANCH_UNSYNCED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;2&quot;</code></p></div></div></div><div id='property-TYPECHECK_DYNAMIC' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-property-TYPECHECK_DYNAMIC' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-property-TYPECHECK_DYNAMIC' class='name expandable'>TYPECHECK_DYNAMIC</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-TYPECHECK_OFF' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-property-TYPECHECK_OFF' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-property-TYPECHECK_OFF' class='name expandable'>TYPECHECK_OFF</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;0&quot;</code></p></div></div></div><div id='property-TYPECHECK_STRICT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-property-TYPECHECK_STRICT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-property-TYPECHECK_STRICT' class='name expandable'>TYPECHECK_STRICT</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;2&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addFilter' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-method-addFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-method-addFilter' class='name expandable'>addFilter</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-beginProcessing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-method-beginProcessing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-method-beginProcessing' class='name expandable'>beginProcessing</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-closeFilters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-method-closeFilters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-method-closeFilters' class='name expandable'>closeFilters</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-connect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-method-connect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-method-connect' class='name expandable'>connect</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-containsFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-method-containsFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-method-containsFilter' class='name expandable'>containsFilter</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-flushFrames' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-method-flushFrames' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-method-flushFrames' class='name expandable'>flushFrames</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-method-getFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-method-getFilter' class='name expandable'>getFilter</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getFilters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-method-getFilters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-method-getFilters' class='name expandable'>getFilters</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-isReady' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-method-isReady' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-method-isReady' class='name expandable'>isReady</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setAutoBranchMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-method-setAutoBranchMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-method-setAutoBranchMode' class='name expandable'>setAutoBranchMode</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setDiscardUnconnectedOutputs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-method-setDiscardUnconnectedOutputs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-method-setDiscardUnconnectedOutputs' class='name expandable'>setDiscardUnconnectedOutputs</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setTypeCheckMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-method-setTypeCheckMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-method-setTypeCheckMode' class='name expandable'>setTypeCheckMode</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-tearDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.filterfw.core.FilterGraph'>android.filterfw.core.FilterGraph</span><br/><a href='source/FilterGraph.html#android-filterfw-core-FilterGraph-method-tearDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.filterfw.core.FilterGraph-method-tearDown' class='name expandable'>tearDown</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});