Ext.data.JsonP.android_drm_DrmEvent({"tagname":"class","name":"android.drm.DrmEvent","autodetected":{},"files":[{"filename":"DrmEvent.js","href":"DrmEvent.html#android-drm-DrmEvent"}],"extends":"java.lang.Object","members":[{"name":"DRM_INFO_OBJECT","tagname":"property","owner":"android.drm.DrmEvent","id":"property-DRM_INFO_OBJECT","meta":{}},{"name":"DRM_INFO_STATUS_OBJECT","tagname":"property","owner":"android.drm.DrmEvent","id":"property-DRM_INFO_STATUS_OBJECT","meta":{}},{"name":"TYPE_ALL_RIGHTS_REMOVED","tagname":"property","owner":"android.drm.DrmEvent","id":"property-TYPE_ALL_RIGHTS_REMOVED","meta":{}},{"name":"TYPE_DRM_INFO_PROCESSED","tagname":"property","owner":"android.drm.DrmEvent","id":"property-TYPE_DRM_INFO_PROCESSED","meta":{}},{"name":"getAttribute","tagname":"method","owner":"android.drm.DrmEvent","id":"method-getAttribute","meta":{}},{"name":"getMessage","tagname":"method","owner":"android.drm.DrmEvent","id":"method-getMessage","meta":{}},{"name":"getType","tagname":"method","owner":"android.drm.DrmEvent","id":"method-getType","meta":{}},{"name":"getUniqueId","tagname":"method","owner":"android.drm.DrmEvent","id":"method-getUniqueId","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.drm.DrmEvent","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":["android.drm.DrmErrorEvent","android.drm.DrmInfoEvent"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.drm.DrmEvent</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/android.drm.DrmErrorEvent' rel='android.drm.DrmErrorEvent' class='docClass'>android.drm.DrmErrorEvent</a></div><div class='dependency'><a href='#!/api/android.drm.DrmInfoEvent' rel='android.drm.DrmInfoEvent' class='docClass'>android.drm.DrmInfoEvent</a></div><h4>Files</h4><div class='dependency'><a href='source/DrmEvent.html#android-drm-DrmEvent' target='_blank'>DrmEvent.js</a></div></pre><div class='doc-contents'><p>A base class that is used to send asynchronous event information from the DRM framework.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-DRM_INFO_OBJECT' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmEvent'>android.drm.DrmEvent</span><br/><a href='source/DrmEvent.html#android-drm-DrmEvent-property-DRM_INFO_OBJECT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmEvent-property-DRM_INFO_OBJECT' class='name expandable'>DRM_INFO_OBJECT</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The key that is used in the attributes HashMap to pass the\nandroid.drm.DrmInfo object. ...</div><div class='long'><p>The key that is used in the <code>attributes</code> HashMap to pass the\n<a href=\"#!/api/android.drm.DrmInfo\" rel=\"android.drm.DrmInfo\" class=\"docClass\">android.drm.DrmInfo</a> object.</p>\n<p>Defaults to: <code>&quot;drm_info_object&quot;</code></p></div></div></div><div id='property-DRM_INFO_STATUS_OBJECT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmEvent'>android.drm.DrmEvent</span><br/><a href='source/DrmEvent.html#android-drm-DrmEvent-property-DRM_INFO_STATUS_OBJECT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmEvent-property-DRM_INFO_STATUS_OBJECT' class='name expandable'>DRM_INFO_STATUS_OBJECT</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The key that is used in the attributes HashMap to pass the return status. ...</div><div class='long'><p>The key that is used in the <code>attributes</code> HashMap to pass the return status.</p>\n<p>Defaults to: <code>&quot;drm_info_status_object&quot;</code></p></div></div></div><div id='property-TYPE_ALL_RIGHTS_REMOVED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmEvent'>android.drm.DrmEvent</span><br/><a href='source/DrmEvent.html#android-drm-DrmEvent-property-TYPE_ALL_RIGHTS_REMOVED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmEvent-property-TYPE_ALL_RIGHTS_REMOVED' class='name expandable'>TYPE_ALL_RIGHTS_REMOVED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>All of the rights information associated with all DRM schemes have been successfully removed. ...</div><div class='long'><p>All of the rights information associated with all DRM schemes have been successfully removed.</p>\n<p>Defaults to: <code>&quot;1001&quot;</code></p></div></div></div><div id='property-TYPE_DRM_INFO_PROCESSED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmEvent'>android.drm.DrmEvent</span><br/><a href='source/DrmEvent.html#android-drm-DrmEvent-property-TYPE_DRM_INFO_PROCESSED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmEvent-property-TYPE_DRM_INFO_PROCESSED' class='name expandable'>TYPE_DRM_INFO_PROCESSED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The given DRM information has been successfully processed. ...</div><div class='long'><p>The given DRM information has been successfully processed.</p>\n<p>Defaults to: <code>&quot;1002&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getAttribute' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmEvent'>android.drm.DrmEvent</span><br/><a href='source/DrmEvent.html#android-drm-DrmEvent-method-getAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmEvent-method-getAttribute' class='name expandable'>getAttribute</a>( <span class='pre'></span> ) : Object {java.lang.Object}<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the attribute associated with the specified key. ...</div><div class='long'><p>Retrieves the attribute associated with the specified key.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {java.lang.Object}</span><div class='sub-desc'><p>One of the attributes or null if no mapping for\n the key is found.</p>\n</div></li></ul></div></div></div><div id='method-getMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmEvent'>android.drm.DrmEvent</span><br/><a href='source/DrmEvent.html#android-drm-DrmEvent-method-getMessage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmEvent-method-getMessage' class='name expandable'>getMessage</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the message description associated with this object. ...</div><div class='long'><p>Retrieves the message description associated with this object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The message description.</p>\n</div></li></ul></div></div></div><div id='method-getType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmEvent'>android.drm.DrmEvent</span><br/><a href='source/DrmEvent.html#android-drm-DrmEvent-method-getType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmEvent-method-getType' class='name expandable'>getType</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the type of information that is associated with this object. ...</div><div class='long'><p>Retrieves the type of information that is associated with this object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The type of information.</p>\n</div></li></ul></div></div></div><div id='method-getUniqueId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmEvent'>android.drm.DrmEvent</span><br/><a href='source/DrmEvent.html#android-drm-DrmEvent-method-getUniqueId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmEvent-method-getUniqueId' class='name expandable'>getUniqueId</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the unique session identifier associated with this object. ...</div><div class='long'><p>Retrieves the unique session identifier associated with this object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The unique session identifier.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});