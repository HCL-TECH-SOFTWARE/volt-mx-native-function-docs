Ext.data.JsonP.android_drm_DrmInfoStatus({"tagname":"class","name":"android.drm.DrmInfoStatus","autodetected":{},"files":[{"filename":"DrmInfoStatus.js","href":"DrmInfoStatus.html#android-drm-DrmInfoStatus"}],"extends":"java.lang.Object","members":[{"name":"STATUS_ERROR","tagname":"property","owner":"android.drm.DrmInfoStatus","id":"property-STATUS_ERROR","meta":{}},{"name":"STATUS_OK","tagname":"property","owner":"android.drm.DrmInfoStatus","id":"property-STATUS_OK","meta":{}},{"name":"data","tagname":"property","owner":"android.drm.DrmInfoStatus","id":"property-data","meta":{}},{"name":"infoType","tagname":"property","owner":"android.drm.DrmInfoStatus","id":"property-infoType","meta":{}},{"name":"mimeType","tagname":"property","owner":"android.drm.DrmInfoStatus","id":"property-mimeType","meta":{}},{"name":"statusCode","tagname":"property","owner":"android.drm.DrmInfoStatus","id":"property-statusCode","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.drm.DrmInfoStatus","short_doc":"An entity class that wraps the result of communication between a device\n and an online DRM server. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.drm.DrmInfoStatus</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/DrmInfoStatus.html#android-drm-DrmInfoStatus' target='_blank'>DrmInfoStatus.js</a></div></pre><div class='doc-contents'><p>An entity class that wraps the result of communication between a device\n and an online DRM server. Specifically, when the\n <a href=\"#!/api/android.drm.DrmManagerClient-method-processDrmInfo\" rel=\"android.drm.DrmManagerClient-method-processDrmInfo\" class=\"docClass\">android.drm.DrmManagerClient.processDrmInfo()</a>\n method is called, an instance of <code>DrmInfoStatus</code> is returned.</p>\n\n<p><p>\n This class contains the <a href=\"#!/api/android.drm.ProcessedData\" rel=\"android.drm.ProcessedData\" class=\"docClass\">android.drm.ProcessedData</a> object, which can be used\n to instantiate a <a href=\"#!/api/android.drm.DrmRights\" rel=\"android.drm.DrmRights\" class=\"docClass\">android.drm.DrmRights</a> object during license acquisition.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-STATUS_ERROR' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmInfoStatus'>android.drm.DrmInfoStatus</span><br/><a href='source/DrmInfoStatus.html#android-drm-DrmInfoStatus-property-STATUS_ERROR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmInfoStatus-property-STATUS_ERROR' class='name expandable'>STATUS_ERROR</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Indicate failed communication. ...</div><div class='long'><p>Indicate failed communication.</p>\n<p>Defaults to: <code>&quot;2&quot;</code></p></div></div></div><div id='property-STATUS_OK' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmInfoStatus'>android.drm.DrmInfoStatus</span><br/><a href='source/DrmInfoStatus.html#android-drm-DrmInfoStatus-property-STATUS_OK' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmInfoStatus-property-STATUS_OK' class='name expandable'>STATUS_OK</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Indicate successful communication. ...</div><div class='long'><p>Indicate successful communication.</p>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-data' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmInfoStatus'>android.drm.DrmInfoStatus</span><br/><a href='source/DrmInfoStatus.html#android-drm-DrmInfoStatus-property-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmInfoStatus-property-data' class='name expandable'>data</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The processed data. ...</div><div class='long'><p>The processed data. It is optional and thus could be null. When it\nis null, it indicates that a particular call to\n<a href=\"#!/api/android.drm.DrmManagerClient-method-processDrmInfo\" rel=\"android.drm.DrmManagerClient-method-processDrmInfo\" class=\"docClass\">android.drm.DrmManagerClient.processDrmInfo()</a>\ndoes not return any additional useful information except for the status code.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-infoType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmInfoStatus'>android.drm.DrmInfoStatus</span><br/><a href='source/DrmInfoStatus.html#android-drm-DrmInfoStatus-property-infoType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmInfoStatus-property-infoType' class='name expandable'>infoType</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The type of DRM information processed. ...</div><div class='long'><p>The type of DRM information processed. Must be one of the valid type\nconstants defined in <a href=\"#!/api/android.drm.DrmInfoRequest\" rel=\"android.drm.DrmInfoRequest\" class=\"docClass\">android.drm.DrmInfoRequest</a>.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-mimeType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmInfoStatus'>android.drm.DrmInfoStatus</span><br/><a href='source/DrmInfoStatus.html#android-drm-DrmInfoStatus-property-mimeType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmInfoStatus-property-mimeType' class='name expandable'>mimeType</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The MIME type of the content. ...</div><div class='long'><p>The MIME type of the content. Must not be null or an empty string.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-statusCode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.drm.DrmInfoStatus'>android.drm.DrmInfoStatus</span><br/><a href='source/DrmInfoStatus.html#android-drm-DrmInfoStatus-property-statusCode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.drm.DrmInfoStatus-property-statusCode' class='name expandable'>statusCode</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The status of the communication. ...</div><div class='long'><p>The status of the communication. Must be one of the defined status\nconstants above.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div></div></div></div></div>","meta":{}});