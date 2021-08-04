Ext.data.JsonP.android_media_tv_TvInputService({"tagname":"class","name":"android.media.tv.TvInputService","autodetected":{},"files":[{"filename":"TvInputService.js","href":"TvInputService.html#android-media-tv-TvInputService"}],"extends":"android.app.Service","members":[{"name":"SERVICE_INTERFACE","tagname":"property","owner":"android.media.tv.TvInputService","id":"property-SERVICE_INTERFACE","meta":{}},{"name":"SERVICE_META_DATA","tagname":"property","owner":"android.media.tv.TvInputService","id":"property-SERVICE_META_DATA","meta":{}},{"name":"onBind","tagname":"method","owner":"android.media.tv.TvInputService","id":"method-onBind","meta":{}},{"name":"onCreateRecordingSession","tagname":"method","owner":"android.media.tv.TvInputService","id":"method-onCreateRecordingSession","meta":{}},{"name":"onCreateSession","tagname":"method","owner":"android.media.tv.TvInputService","id":"method-onCreateSession","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.media.tv.TvInputService","short_doc":"The TvInputService class represents a TV input or source such as HDMI or built-in tuner which\n provides pass-through ...","classIcon":"icon-class","superclasses":["android.app.Service"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>android.app.Service<div class='subclass '><strong>android.media.tv.TvInputService</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/TvInputService.html#android-media-tv-TvInputService' target='_blank'>TvInputService.js</a></div></pre><div class='doc-contents'><p>The TvInputService class represents a TV input or source such as HDMI or built-in tuner which\n provides pass-through video or broadcast TV programs.</p>\n\n<p> <p>Applications will not normally use this service themselves, instead relying on the standard\n interaction provided by <a href=\"#!/api/android.media.tv.TvView\" rel=\"android.media.tv.TvView\" class=\"docClass\">android.media.tv.TvView</a>. Those implementing TV input services should normally do\n so by deriving from this class and providing their own session implementation based on\n android.media.tv.TvInputService.Session. All TV input services must require that clients hold the\n android.Manifest.permission.BIND_TV_INPUT in order to interact with the service; if this\n permission is not specified in the manifest, the system will refuse to bind to that TV input\n service.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-SERVICE_INTERFACE' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.tv.TvInputService'>android.media.tv.TvInputService</span><br/><a href='source/TvInputService.html#android-media-tv-TvInputService-property-SERVICE_INTERFACE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.tv.TvInputService-property-SERVICE_INTERFACE' class='name expandable'>SERVICE_INTERFACE</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>This is the interface name that a service implementing a TV input should say that it support\n-- that is, this is the ...</div><div class='long'><p>This is the interface name that a service implementing a TV input should say that it support\n-- that is, this is the action it uses for its intent filter. To be supported, the service\nmust also require the android.Manifest.permission.BIND_TV_INPUT permission so that\nother applications cannot abuse it.</p>\n<p>Defaults to: <code>&quot;android.media.tv.TvInputService&quot;</code></p></div></div></div><div id='property-SERVICE_META_DATA' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.tv.TvInputService'>android.media.tv.TvInputService</span><br/><a href='source/TvInputService.html#android-media-tv-TvInputService-property-SERVICE_META_DATA' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.tv.TvInputService-property-SERVICE_META_DATA' class='name expandable'>SERVICE_META_DATA</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Name under which a TvInputService component publishes information about itself. ...</div><div class='long'><p>Name under which a TvInputService component publishes information about itself.\nThis meta-data must reference an XML resource containing an\n<code>&lt;tv-input&gt;</code>\ntag.</p>\n<p>Defaults to: <code>&quot;android.media.tv.input&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-onBind' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.tv.TvInputService'>android.media.tv.TvInputService</span><br/><a href='source/TvInputService.html#android-media-tv-TvInputService-method-onBind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.tv.TvInputService-method-onBind' class='name expandable'>onBind</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onCreateRecordingSession' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.tv.TvInputService'>android.media.tv.TvInputService</span><br/><a href='source/TvInputService.html#android-media-tv-TvInputService-method-onCreateRecordingSession' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.tv.TvInputService-method-onCreateRecordingSession' class='name expandable'>onCreateRecordingSession</a>( <span class='pre'>inputId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a concrete implementation of android.media.tv.TvInputService.RecordingSession. ...</div><div class='long'><p>Returns a concrete implementation of <a href=\"#!/api/android.media.tv.TvInputService.RecordingSession\" rel=\"android.media.tv.TvInputService.RecordingSession\" class=\"docClass\">android.media.tv.TvInputService.RecordingSession</a>.</p>\n\n<p> <p>May return {@code null} if this TV input service fails to create a recording session for\n some reason.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>inputId</span> : String<div class='sub-desc'><p>The ID of the TV input associated with the recording session.</p>\n</div></li></ul></div></div></div><div id='method-onCreateSession' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.tv.TvInputService'>android.media.tv.TvInputService</span><br/><a href='source/TvInputService.html#android-media-tv-TvInputService-method-onCreateSession' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.tv.TvInputService-method-onCreateSession' class='name expandable'>onCreateSession</a>( <span class='pre'>inputId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a concrete implementation of android.media.tv.TvInputManager.Session. ...</div><div class='long'><p>Returns a concrete implementation of <a href=\"#!/api/android.media.tv.TvInputManager.Session\" rel=\"android.media.tv.TvInputManager.Session\" class=\"docClass\">android.media.tv.TvInputManager.Session</a>.</p>\n\n<p> <p>May return {@code null} if this TV input service fails to create a session for some\n reason. If TV input represents an external device connected to a hardware TV input,\n <a href=\"#!/api/android.media.tv.TvInputService.HardwareSession\" rel=\"android.media.tv.TvInputService.HardwareSession\" class=\"docClass\">android.media.tv.TvInputService.HardwareSession</a> should be returned.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>inputId</span> : String<div class='sub-desc'><p>The ID of the TV input associated with the session.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});