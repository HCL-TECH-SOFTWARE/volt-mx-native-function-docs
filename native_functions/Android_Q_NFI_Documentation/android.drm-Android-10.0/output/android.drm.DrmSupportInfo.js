Ext.data.JsonP.android_drm_DrmSupportInfo({"tagname":"class","name":"android.drm.DrmSupportInfo","autodetected":{},"files":[{"filename":"DrmSupportInfo.js","href":"DrmSupportInfo.html#android-drm-DrmSupportInfo"}],"extends":"java.lang.Object","members":[{"name":"addFileSuffix","tagname":"method","owner":"android.drm.DrmSupportInfo","id":"method-addFileSuffix","meta":{}},{"name":"addMimeType","tagname":"method","owner":"android.drm.DrmSupportInfo","id":"method-addMimeType","meta":{}},{"name":"equals","tagname":"method","owner":"android.drm.DrmSupportInfo","id":"method-equals","meta":{}},{"name":"getDescriprition","tagname":"method","owner":"android.drm.DrmSupportInfo","id":"method-getDescriprition","meta":{"deprecated":{"text":"<p>The method name is mis-spelled, and it is replaced by\n getDescription().</p>\n"}}},{"name":"getDescription","tagname":"method","owner":"android.drm.DrmSupportInfo","id":"method-getDescription","meta":{}},{"name":"getFileSuffixIterator","tagname":"method","owner":"android.drm.DrmSupportInfo","id":"method-getFileSuffixIterator","meta":{}},{"name":"getMimeTypeIterator","tagname":"method","owner":"android.drm.DrmSupportInfo","id":"method-getMimeTypeIterator","meta":{}},{"name":"hashCode","tagname":"method","owner":"android.drm.DrmSupportInfo","id":"method-hashCode","meta":{}},{"name":"setDescription","tagname":"method","owner":"android.drm.DrmSupportInfo","id":"method-setDescription","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.drm.DrmSupportInfo","short_doc":"An entity class that wraps the capability of each DRM plug-in (agent),\n such as the MIME type and file suffix the DRM...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.drm.DrmSupportInfo</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/DrmSupportInfo.html#android-drm-DrmSupportInfo' target='_blank'>DrmSupportInfo.js</a></div></pre><div class='doc-contents'><p>An entity class that wraps the capability of each DRM plug-in (agent),\n such as the MIME type and file suffix the DRM plug-in can handle.</p>\n\n<p><p>\n Plug-in developers can expose the capability of their plug-in by passing an instance of this\n class to an application.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addFileSuffix' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmSupportInfo'>android.drm.DrmSupportInfo</span><br/><a href='source/DrmSupportInfo.html#android-drm-DrmSupportInfo-method-addFileSuffix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmSupportInfo-method-addFileSuffix' class='name expandable'>addFileSuffix</a>( <span class='pre'>fileSuffix</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds the specified file suffix to the list of file suffixes this DRM plug-in supports. ...</div><div class='long'><p>Adds the specified file suffix to the list of file suffixes this DRM plug-in supports.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fileSuffix</span> : String<div class='sub-desc'><p>File suffix that can be handled by this DRM plug-in.\n it could be null but not an empty string. When it is null, it indicates\n that some DRM content comes with no file suffix.</p>\n</div></li></ul></div></div></div><div id='method-addMimeType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmSupportInfo'>android.drm.DrmSupportInfo</span><br/><a href='source/DrmSupportInfo.html#android-drm-DrmSupportInfo-method-addMimeType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmSupportInfo-method-addMimeType' class='name expandable'>addMimeType</a>( <span class='pre'>mimeType</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds the specified MIME type to the list of MIME types this DRM plug-in supports. ...</div><div class='long'><p>Adds the specified MIME type to the list of MIME types this DRM plug-in supports.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mimeType</span> : String<div class='sub-desc'><p>MIME type that can be handles by this DRM plug-in.\n Must not be null or an empty string.</p>\n</div></li></ul></div></div></div><div id='method-equals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmSupportInfo'>android.drm.DrmSupportInfo</span><br/><a href='source/DrmSupportInfo.html#android-drm-DrmSupportInfo-method-equals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmSupportInfo-method-equals' class='name expandable'>equals</a>( <span class='pre'>object</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Overridden equals implementation. ...</div><div class='long'><p>Overridden <code>equals</code> implementation. Two DrmSupportInfo objects\n are considered being equal if they support exactly the same set of mime\n types, file suffixes, and has exactly the same description.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object {Object}<div class='sub-desc'><p>The object to be compared.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if equal; false if not equal.</p>\n</div></li></ul></div></div></div><div id='method-getDescriprition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmSupportInfo'>android.drm.DrmSupportInfo</span><br/><a href='source/DrmSupportInfo.html#android-drm-DrmSupportInfo-method-getDescriprition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmSupportInfo-method-getDescriprition' class='name expandable'>getDescriprition</a>( <span class='pre'></span> ) : String<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'>Retrieves the DRM plug-in (agent) description. ...</div><div class='long'><p>Retrieves the DRM plug-in (agent) description.</p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p>The method name is mis-spelled, and it is replaced by\n getDescription().</p>\n\n        </div>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The plug-in description.</p>\n</div></li></ul></div></div></div><div id='method-getDescription' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmSupportInfo'>android.drm.DrmSupportInfo</span><br/><a href='source/DrmSupportInfo.html#android-drm-DrmSupportInfo-method-getDescription' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmSupportInfo-method-getDescription' class='name expandable'>getDescription</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the DRM plug-in (agent) description. ...</div><div class='long'><p>Retrieves the DRM plug-in (agent) description. Even if null or an empty\n string is not allowed in <a href=\"#!/api/android.drm.DrmSupportInfo-method-setDescription\" rel=\"android.drm.DrmSupportInfo-method-setDescription\" class=\"docClass\">setDescription</a>(String), if\n <a href=\"#!/api/android.drm.DrmSupportInfo-method-setDescription\" rel=\"android.drm.DrmSupportInfo-method-setDescription\" class=\"docClass\">setDescription</a>(String) is not called, description returned\n from this method is an empty string.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The plug-in description.</p>\n</div></li></ul></div></div></div><div id='method-getFileSuffixIterator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmSupportInfo'>android.drm.DrmSupportInfo</span><br/><a href='source/DrmSupportInfo.html#android-drm-DrmSupportInfo-method-getFileSuffixIterator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmSupportInfo-method-getFileSuffixIterator' class='name expandable'>getFileSuffixIterator</a>( <span class='pre'></span> ) : Object {java.util.Iterator}<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves an iterator object that you can use to iterate over the file suffixes that\n this DRM plug-in supports. ...</div><div class='long'><p>Retrieves an iterator object that you can use to iterate over the file suffixes that\n this DRM plug-in supports.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {java.util.Iterator}</span><div class='sub-desc'><p>The iterator object.</p>\n</div></li></ul></div></div></div><div id='method-getMimeTypeIterator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmSupportInfo'>android.drm.DrmSupportInfo</span><br/><a href='source/DrmSupportInfo.html#android-drm-DrmSupportInfo-method-getMimeTypeIterator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmSupportInfo-method-getMimeTypeIterator' class='name expandable'>getMimeTypeIterator</a>( <span class='pre'></span> ) : Object {java.util.Iterator}<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves an iterator object that you can use to iterate over the MIME types that\n this DRM plug-in supports. ...</div><div class='long'><p>Retrieves an iterator object that you can use to iterate over the MIME types that\n this DRM plug-in supports.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {java.util.Iterator}</span><div class='sub-desc'><p>The iterator object</p>\n</div></li></ul></div></div></div><div id='method-hashCode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmSupportInfo'>android.drm.DrmSupportInfo</span><br/><a href='source/DrmSupportInfo.html#android-drm-DrmSupportInfo-method-hashCode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmSupportInfo-method-hashCode' class='name expandable'>hashCode</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Overridden hash code implementation. ...</div><div class='long'><p>Overridden hash code implementation.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The hash code value.</p>\n</div></li></ul></div></div></div><div id='method-setDescription' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmSupportInfo'>android.drm.DrmSupportInfo</span><br/><a href='source/DrmSupportInfo.html#android-drm-DrmSupportInfo-method-setDescription' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmSupportInfo-method-setDescription' class='name expandable'>setDescription</a>( <span class='pre'>description</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets a description for the DRM plug-in (agent). ...</div><div class='long'><p>Sets a description for the DRM plug-in (agent).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>description</span> : String<div class='sub-desc'><p>Unique description of plug-in. Must not be null\n or an empty string.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});