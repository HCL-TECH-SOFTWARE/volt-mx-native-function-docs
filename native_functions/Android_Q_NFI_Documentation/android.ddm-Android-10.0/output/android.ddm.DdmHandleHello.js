Ext.data.JsonP.android_ddm_DdmHandleHello({"tagname":"class","name":"android.ddm.DdmHandleHello","autodetected":{},"files":[{"filename":"DdmHandleHello.js","href":"DdmHandleHello.html#android-ddm-DdmHandleHello"}],"extends":"org.apache.harmony.dalvik.ddmc.ChunkHandler","members":[{"name":"CHUNK_FEAT","tagname":"property","owner":"android.ddm.DdmHandleHello","id":"property-CHUNK_FEAT","meta":{}},{"name":"CHUNK_HELO","tagname":"property","owner":"android.ddm.DdmHandleHello","id":"property-CHUNK_HELO","meta":{}},{"name":"CHUNK_WAIT","tagname":"property","owner":"android.ddm.DdmHandleHello","id":"property-CHUNK_WAIT","meta":{}},{"name":"connected","tagname":"method","owner":"android.ddm.DdmHandleHello","id":"method-connected","meta":{}},{"name":"disconnected","tagname":"method","owner":"android.ddm.DdmHandleHello","id":"method-disconnected","meta":{}},{"name":"handleChunk","tagname":"method","owner":"android.ddm.DdmHandleHello","id":"method-handleChunk","meta":{}},{"name":"register","tagname":"method","owner":"android.ddm.DdmHandleHello","id":"method-register","meta":{}},{"name":"sendWAIT","tagname":"method","owner":"android.ddm.DdmHandleHello","id":"method-sendWAIT","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.ddm.DdmHandleHello","classIcon":"icon-class","superclasses":["org.apache.harmony.dalvik.ddmc.ChunkHandler"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>org.apache.harmony.dalvik.ddmc.ChunkHandler<div class='subclass '><strong>android.ddm.DdmHandleHello</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/DdmHandleHello.html#android-ddm-DdmHandleHello' target='_blank'>DdmHandleHello.js</a></div></pre><div class='doc-contents'><p>Handle \"hello\" messages and feature discovery.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-CHUNK_FEAT' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.ddm.DdmHandleHello'>android.ddm.DdmHandleHello</span><br/><a href='source/DdmHandleHello.html#android-ddm-DdmHandleHello-property-CHUNK_FEAT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.ddm.DdmHandleHello-property-CHUNK_FEAT' class='name expandable'>CHUNK_FEAT</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-CHUNK_HELO' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.ddm.DdmHandleHello'>android.ddm.DdmHandleHello</span><br/><a href='source/DdmHandleHello.html#android-ddm-DdmHandleHello-property-CHUNK_HELO' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.ddm.DdmHandleHello-property-CHUNK_HELO' class='name expandable'>CHUNK_HELO</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-CHUNK_WAIT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.ddm.DdmHandleHello'>android.ddm.DdmHandleHello</span><br/><a href='source/DdmHandleHello.html#android-ddm-DdmHandleHello-property-CHUNK_WAIT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.ddm.DdmHandleHello-property-CHUNK_WAIT' class='name expandable'>CHUNK_WAIT</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-connected' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.ddm.DdmHandleHello'>android.ddm.DdmHandleHello</span><br/><a href='source/DdmHandleHello.html#android-ddm-DdmHandleHello-method-connected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.ddm.DdmHandleHello-method-connected' class='name expandable'>connected</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when the DDM server connects. ...</div><div class='long'><p>Called when the DDM server connects.  The handler is allowed to\n send messages to the server.</p>\n</div></div></div><div id='method-disconnected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.ddm.DdmHandleHello'>android.ddm.DdmHandleHello</span><br/><a href='source/DdmHandleHello.html#android-ddm-DdmHandleHello-method-disconnected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.ddm.DdmHandleHello-method-disconnected' class='name expandable'>disconnected</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when the DDM server disconnects. ...</div><div class='long'><p>Called when the DDM server disconnects.  Can be used to disable\n periodic transmissions or clean up saved state.</p>\n</div></div></div><div id='method-handleChunk' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.ddm.DdmHandleHello'>android.ddm.DdmHandleHello</span><br/><a href='source/DdmHandleHello.html#android-ddm-DdmHandleHello-method-handleChunk' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.ddm.DdmHandleHello-method-handleChunk' class='name expandable'>handleChunk</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handle a chunk of data. ...</div><div class='long'><p>Handle a chunk of data.</p>\n</div></div></div><div id='method-register' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.ddm.DdmHandleHello'>android.ddm.DdmHandleHello</span><br/><a href='source/DdmHandleHello.html#android-ddm-DdmHandleHello-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.ddm.DdmHandleHello-method-register' class='name expandable'>register</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Register for the messages we're interested in. ...</div><div class='long'><p>Register for the messages we're interested in.</p>\n</div></div></div><div id='method-sendWAIT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.ddm.DdmHandleHello'>android.ddm.DdmHandleHello</span><br/><a href='source/DdmHandleHello.html#android-ddm-DdmHandleHello-method-sendWAIT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.ddm.DdmHandleHello-method-sendWAIT' class='name expandable'>sendWAIT</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Send up a WAIT chunk. ...</div><div class='long'><p>Send up a WAIT chunk.  The only currently defined value for \"reason\"\n is zero, which means \"waiting for a debugger\".</p>\n</div></div></div></div></div></div></div>","meta":{}});