Ext.data.JsonP.android_drm_DrmErrorEvent({"tagname":"class","name":"android.drm.DrmErrorEvent","autodetected":{},"files":[{"filename":"DrmErrorEvent.js","href":"DrmErrorEvent.html#android-drm-DrmErrorEvent"}],"extends":"android.drm.DrmEvent","members":[{"name":"DRM_INFO_OBJECT","tagname":"property","owner":"android.drm.DrmEvent","id":"property-DRM_INFO_OBJECT","meta":{}},{"name":"DRM_INFO_STATUS_OBJECT","tagname":"property","owner":"android.drm.DrmEvent","id":"property-DRM_INFO_STATUS_OBJECT","meta":{}},{"name":"TYPE_ACQUIRE_DRM_INFO_FAILED","tagname":"property","owner":"android.drm.DrmErrorEvent","id":"property-TYPE_ACQUIRE_DRM_INFO_FAILED","meta":{}},{"name":"TYPE_ALL_RIGHTS_REMOVED","tagname":"property","owner":"android.drm.DrmEvent","id":"property-TYPE_ALL_RIGHTS_REMOVED","meta":{}},{"name":"TYPE_DRM_INFO_PROCESSED","tagname":"property","owner":"android.drm.DrmEvent","id":"property-TYPE_DRM_INFO_PROCESSED","meta":{}},{"name":"TYPE_NOT_SUPPORTED","tagname":"property","owner":"android.drm.DrmErrorEvent","id":"property-TYPE_NOT_SUPPORTED","meta":{}},{"name":"TYPE_NO_INTERNET_CONNECTION","tagname":"property","owner":"android.drm.DrmErrorEvent","id":"property-TYPE_NO_INTERNET_CONNECTION","meta":{}},{"name":"TYPE_OUT_OF_MEMORY","tagname":"property","owner":"android.drm.DrmErrorEvent","id":"property-TYPE_OUT_OF_MEMORY","meta":{}},{"name":"TYPE_PROCESS_DRM_INFO_FAILED","tagname":"property","owner":"android.drm.DrmErrorEvent","id":"property-TYPE_PROCESS_DRM_INFO_FAILED","meta":{}},{"name":"TYPE_REMOVE_ALL_RIGHTS_FAILED","tagname":"property","owner":"android.drm.DrmErrorEvent","id":"property-TYPE_REMOVE_ALL_RIGHTS_FAILED","meta":{}},{"name":"TYPE_RIGHTS_NOT_INSTALLED","tagname":"property","owner":"android.drm.DrmErrorEvent","id":"property-TYPE_RIGHTS_NOT_INSTALLED","meta":{}},{"name":"TYPE_RIGHTS_RENEWAL_NOT_ALLOWED","tagname":"property","owner":"android.drm.DrmErrorEvent","id":"property-TYPE_RIGHTS_RENEWAL_NOT_ALLOWED","meta":{}},{"name":"getAttribute","tagname":"method","owner":"android.drm.DrmEvent","id":"method-getAttribute","meta":{}},{"name":"getMessage","tagname":"method","owner":"android.drm.DrmEvent","id":"method-getMessage","meta":{}},{"name":"getType","tagname":"method","owner":"android.drm.DrmEvent","id":"method-getType","meta":{}},{"name":"getUniqueId","tagname":"method","owner":"android.drm.DrmEvent","id":"method-getUniqueId","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.drm.DrmErrorEvent","classIcon":"icon-class","superclasses":["java.lang.Object","android.drm.DrmEvent"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><a href='#!/api/android.drm.DrmEvent' rel='android.drm.DrmEvent' class='docClass'>android.drm.DrmEvent</a><div class='subclass '><strong>android.drm.DrmErrorEvent</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/DrmErrorEvent.html#android-drm-DrmErrorEvent' target='_blank'>DrmErrorEvent.js</a></div></pre><div class='doc-contents'><p>An entity class that is passed to the\n <a href=\"#!/api/android.drm.DrmManagerClient.OnErrorListener-method-onError\" rel=\"android.drm.DrmManagerClient.OnErrorListener-method-onError\" class=\"docClass\">onError()</a> callback.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-DRM_INFO_OBJECT' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.drm.DrmEvent' rel='android.drm.DrmEvent' class='defined-in docClass'>android.drm.DrmEvent</a><br/><a href='source/DrmEvent.html#android-drm-DrmEvent-property-DRM_INFO_OBJECT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmEvent-property-DRM_INFO_OBJECT' class='name expandable'>DRM_INFO_OBJECT</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The key that is used in the attributes HashMap to pass the\nandroid.drm.DrmInfo object. ...</div><div class='long'><p>The key that is used in the <code>attributes</code> HashMap to pass the\n<a href=\"#!/api/android.drm.DrmInfo\" rel=\"android.drm.DrmInfo\" class=\"docClass\">android.drm.DrmInfo</a> object.</p>\n<p>Defaults to: <code>&quot;drm_info_object&quot;</code></p></div></div></div><div id='property-DRM_INFO_STATUS_OBJECT' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.drm.DrmEvent' rel='android.drm.DrmEvent' class='defined-in docClass'>android.drm.DrmEvent</a><br/><a href='source/DrmEvent.html#android-drm-DrmEvent-property-DRM_INFO_STATUS_OBJECT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmEvent-property-DRM_INFO_STATUS_OBJECT' class='name expandable'>DRM_INFO_STATUS_OBJECT</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The key that is used in the attributes HashMap to pass the return status. ...</div><div class='long'><p>The key that is used in the <code>attributes</code> HashMap to pass the return status.</p>\n<p>Defaults to: <code>&quot;drm_info_status_object&quot;</code></p></div></div></div><div id='property-TYPE_ACQUIRE_DRM_INFO_FAILED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmErrorEvent'>android.drm.DrmErrorEvent</span><br/><a href='source/DrmErrorEvent.html#android-drm-DrmErrorEvent-property-TYPE_ACQUIRE_DRM_INFO_FAILED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmErrorEvent-property-TYPE_ACQUIRE_DRM_INFO_FAILED' class='name expandable'>TYPE_ACQUIRE_DRM_INFO_FAILED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Failed to acquire android.drm.DrmInfo. ...</div><div class='long'><p>Failed to acquire <a href=\"#!/api/android.drm.DrmInfo\" rel=\"android.drm.DrmInfo\" class=\"docClass\">android.drm.DrmInfo</a>. This error event is sent when an\n<a href=\"#!/api/android.drm.DrmManagerClient-method-acquireDrmInfo\" rel=\"android.drm.DrmManagerClient-method-acquireDrmInfo\" class=\"docClass\">acquireDrmInfo()</a> call fails.</p>\n<p>Defaults to: <code>&quot;2008&quot;</code></p></div></div></div><div id='property-TYPE_ALL_RIGHTS_REMOVED' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.drm.DrmEvent' rel='android.drm.DrmEvent' class='defined-in docClass'>android.drm.DrmEvent</a><br/><a href='source/DrmEvent.html#android-drm-DrmEvent-property-TYPE_ALL_RIGHTS_REMOVED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmEvent-property-TYPE_ALL_RIGHTS_REMOVED' class='name expandable'>TYPE_ALL_RIGHTS_REMOVED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>All of the rights information associated with all DRM schemes have been successfully removed. ...</div><div class='long'><p>All of the rights information associated with all DRM schemes have been successfully removed.</p>\n<p>Defaults to: <code>&quot;1001&quot;</code></p></div></div></div><div id='property-TYPE_DRM_INFO_PROCESSED' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.drm.DrmEvent' rel='android.drm.DrmEvent' class='defined-in docClass'>android.drm.DrmEvent</a><br/><a href='source/DrmEvent.html#android-drm-DrmEvent-property-TYPE_DRM_INFO_PROCESSED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmEvent-property-TYPE_DRM_INFO_PROCESSED' class='name expandable'>TYPE_DRM_INFO_PROCESSED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The given DRM information has been successfully processed. ...</div><div class='long'><p>The given DRM information has been successfully processed.</p>\n<p>Defaults to: <code>&quot;1002&quot;</code></p></div></div></div><div id='property-TYPE_NOT_SUPPORTED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmErrorEvent'>android.drm.DrmErrorEvent</span><br/><a href='source/DrmErrorEvent.html#android-drm-DrmErrorEvent-property-TYPE_NOT_SUPPORTED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmErrorEvent-property-TYPE_NOT_SUPPORTED' class='name expandable'>TYPE_NOT_SUPPORTED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Response from the server cannot be handled by the DRM plug-in (agent). ...</div><div class='long'><p>Response from the server cannot be handled by the DRM plug-in (agent).</p>\n<p>Defaults to: <code>&quot;2003&quot;</code></p></div></div></div><div id='property-TYPE_NO_INTERNET_CONNECTION' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmErrorEvent'>android.drm.DrmErrorEvent</span><br/><a href='source/DrmErrorEvent.html#android-drm-DrmErrorEvent-property-TYPE_NO_INTERNET_CONNECTION' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmErrorEvent-property-TYPE_NO_INTERNET_CONNECTION' class='name expandable'>TYPE_NO_INTERNET_CONNECTION</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>An Internet connection is not available and no attempt can be made to renew rights. ...</div><div class='long'><p>An Internet connection is not available and no attempt can be made to renew rights.</p>\n<p>Defaults to: <code>&quot;2005&quot;</code></p></div></div></div><div id='property-TYPE_OUT_OF_MEMORY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmErrorEvent'>android.drm.DrmErrorEvent</span><br/><a href='source/DrmErrorEvent.html#android-drm-DrmErrorEvent-property-TYPE_OUT_OF_MEMORY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmErrorEvent-property-TYPE_OUT_OF_MEMORY' class='name expandable'>TYPE_OUT_OF_MEMORY</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Memory allocation failed during renewal. ...</div><div class='long'><p>Memory allocation failed during renewal. Can in the future perhaps be used to trigger\ngarbage collector.</p>\n<p>Defaults to: <code>&quot;2004&quot;</code></p></div></div></div><div id='property-TYPE_PROCESS_DRM_INFO_FAILED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmErrorEvent'>android.drm.DrmErrorEvent</span><br/><a href='source/DrmErrorEvent.html#android-drm-DrmErrorEvent-property-TYPE_PROCESS_DRM_INFO_FAILED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmErrorEvent-property-TYPE_PROCESS_DRM_INFO_FAILED' class='name expandable'>TYPE_PROCESS_DRM_INFO_FAILED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Failed to process android.drm.DrmInfo. ...</div><div class='long'><p>Failed to process <a href=\"#!/api/android.drm.DrmInfo\" rel=\"android.drm.DrmInfo\" class=\"docClass\">android.drm.DrmInfo</a>. This error event is sent when a\n<a href=\"#!/api/android.drm.DrmManagerClient-method-processDrmInfo\" rel=\"android.drm.DrmManagerClient-method-processDrmInfo\" class=\"docClass\">processDrmInfo()</a> call fails.</p>\n<p>Defaults to: <code>&quot;2006&quot;</code></p></div></div></div><div id='property-TYPE_REMOVE_ALL_RIGHTS_FAILED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmErrorEvent'>android.drm.DrmErrorEvent</span><br/><a href='source/DrmErrorEvent.html#android-drm-DrmErrorEvent-property-TYPE_REMOVE_ALL_RIGHTS_FAILED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmErrorEvent-property-TYPE_REMOVE_ALL_RIGHTS_FAILED' class='name expandable'>TYPE_REMOVE_ALL_RIGHTS_FAILED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Failed to remove all the rights objects associated with all DRM schemes. ...</div><div class='long'><p>Failed to remove all the rights objects associated with all DRM schemes.</p>\n<p>Defaults to: <code>&quot;2007&quot;</code></p></div></div></div><div id='property-TYPE_RIGHTS_NOT_INSTALLED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmErrorEvent'>android.drm.DrmErrorEvent</span><br/><a href='source/DrmErrorEvent.html#android-drm-DrmErrorEvent-property-TYPE_RIGHTS_NOT_INSTALLED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmErrorEvent-property-TYPE_RIGHTS_NOT_INSTALLED' class='name expandable'>TYPE_RIGHTS_NOT_INSTALLED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Something went wrong installing the rights. ...</div><div class='long'><p>Something went wrong installing the rights.</p>\n<p>Defaults to: <code>&quot;2001&quot;</code></p></div></div></div><div id='property-TYPE_RIGHTS_RENEWAL_NOT_ALLOWED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmErrorEvent'>android.drm.DrmErrorEvent</span><br/><a href='source/DrmErrorEvent.html#android-drm-DrmErrorEvent-property-TYPE_RIGHTS_RENEWAL_NOT_ALLOWED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmErrorEvent-property-TYPE_RIGHTS_RENEWAL_NOT_ALLOWED' class='name expandable'>TYPE_RIGHTS_RENEWAL_NOT_ALLOWED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The server rejected the renewal of rights. ...</div><div class='long'><p>The server rejected the renewal of rights.</p>\n<p>Defaults to: <code>&quot;2002&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getAttribute' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.drm.DrmEvent' rel='android.drm.DrmEvent' class='defined-in docClass'>android.drm.DrmEvent</a><br/><a href='source/DrmEvent.html#android-drm-DrmEvent-method-getAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmEvent-method-getAttribute' class='name expandable'>getAttribute</a>( <span class='pre'></span> ) : Object {java.lang.Object}<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the attribute associated with the specified key. ...</div><div class='long'><p>Retrieves the attribute associated with the specified key.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {java.lang.Object}</span><div class='sub-desc'><p>One of the attributes or null if no mapping for\n the key is found.</p>\n</div></li></ul></div></div></div><div id='method-getMessage' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.drm.DrmEvent' rel='android.drm.DrmEvent' class='defined-in docClass'>android.drm.DrmEvent</a><br/><a href='source/DrmEvent.html#android-drm-DrmEvent-method-getMessage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmEvent-method-getMessage' class='name expandable'>getMessage</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the message description associated with this object. ...</div><div class='long'><p>Retrieves the message description associated with this object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The message description.</p>\n</div></li></ul></div></div></div><div id='method-getType' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.drm.DrmEvent' rel='android.drm.DrmEvent' class='defined-in docClass'>android.drm.DrmEvent</a><br/><a href='source/DrmEvent.html#android-drm-DrmEvent-method-getType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmEvent-method-getType' class='name expandable'>getType</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the type of information that is associated with this object. ...</div><div class='long'><p>Retrieves the type of information that is associated with this object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The type of information.</p>\n</div></li></ul></div></div></div><div id='method-getUniqueId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.drm.DrmEvent' rel='android.drm.DrmEvent' class='defined-in docClass'>android.drm.DrmEvent</a><br/><a href='source/DrmEvent.html#android-drm-DrmEvent-method-getUniqueId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmEvent-method-getUniqueId' class='name expandable'>getUniqueId</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the unique session identifier associated with this object. ...</div><div class='long'><p>Retrieves the unique session identifier associated with this object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The unique session identifier.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});