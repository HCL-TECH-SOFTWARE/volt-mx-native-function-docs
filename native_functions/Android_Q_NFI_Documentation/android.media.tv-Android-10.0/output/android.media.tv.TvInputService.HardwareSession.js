Ext.data.JsonP.android_media_tv_TvInputService_HardwareSession({"tagname":"class","name":"android.media.tv.TvInputService.HardwareSession","autodetected":{},"files":[{"filename":"HardwareSession.js","href":"HardwareSession.html#android-media-tv-TvInputService-HardwareSession"}],"extends":"android.media.tv.TvInputService.Session","members":[{"name":"getHardwareInputId","tagname":"method","owner":"android.media.tv.TvInputService.HardwareSession","id":"method-getHardwareInputId","meta":{}},{"name":"onHardwareVideoAvailable","tagname":"method","owner":"android.media.tv.TvInputService.HardwareSession","id":"method-onHardwareVideoAvailable","meta":{}},{"name":"onHardwareVideoUnavailable","tagname":"method","owner":"android.media.tv.TvInputService.HardwareSession","id":"method-onHardwareVideoUnavailable","meta":{}},{"name":"onSetSurface","tagname":"method","owner":"android.media.tv.TvInputService.HardwareSession","id":"method-onSetSurface","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.media.tv.TvInputService.HardwareSession","short_doc":"Base class for a TV input session which represents an external device connected to a\n hardware TV input. ...","classIcon":"icon-class","superclasses":["android.media.tv.TvInputService.Session"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>android.media.tv.TvInputService.Session<div class='subclass '><strong>android.media.tv.TvInputService.HardwareSession</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/HardwareSession.html#android-media-tv-TvInputService-HardwareSession' target='_blank'>HardwareSession.js</a></div></pre><div class='doc-contents'><p>Base class for a TV input session which represents an external device connected to a\n hardware TV input.</p>\n\n<p> <p>This class is for an input which provides channels for the external set-top box to the\n application. Once a TV input returns an implementation of this class on\n onCreateSession(String), the framework will create a separate session for\n a hardware TV Input (e.g. HDMI 1) and forward the application's surface to the session so\n that the user can see the screen of the hardware TV Input when she tunes to a channel from\n this TV input. The implementation of this class is expected to change the channel of the\n external set-top box via a proprietary protocol when onTune is\n requested by the application.</p>\n\n<p> <p>Note that this class is not for inputs for internal hardware like built-in tuner and HDMI\n 1.</p>\n\n<p> @see #onCreateSession(String)</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getHardwareInputId' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.tv.TvInputService.HardwareSession'>android.media.tv.TvInputService.HardwareSession</span><br/><a href='source/HardwareSession.html#android-media-tv-TvInputService-HardwareSession-method-getHardwareInputId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.tv.TvInputService.HardwareSession-method-getHardwareInputId' class='name expandable'>getHardwareInputId</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the hardware TV input ID the external device is connected to. ...</div><div class='long'><p>Returns the hardware TV input ID the external device is connected to.</p>\n\n<p> <p>TV input is expected to provide android.R.attr.setupActivity so that\n the application can launch it before using this TV input. The setup activity may let\n the user select the hardware TV input to which the external device is connected. The ID\n of the selected one should be stored in the TV input so that it can be returned here.</p>\n</div></div></div><div id='method-onHardwareVideoAvailable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.tv.TvInputService.HardwareSession'>android.media.tv.TvInputService.HardwareSession</span><br/><a href='source/HardwareSession.html#android-media-tv-TvInputService-HardwareSession-method-onHardwareVideoAvailable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.tv.TvInputService.HardwareSession-method-onHardwareVideoAvailable' class='name expandable'>onHardwareVideoAvailable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when the underlying hardware TV input session calls\n android.media.tv.TvInputService.Session.notifyVideoAvaila...</div><div class='long'><p>Called when the underlying hardware TV input session calls\n android.media.tv.TvInputService.Session.notifyVideoAvailable().</p>\n</div></div></div><div id='method-onHardwareVideoUnavailable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.tv.TvInputService.HardwareSession'>android.media.tv.TvInputService.HardwareSession</span><br/><a href='source/HardwareSession.html#android-media-tv-TvInputService-HardwareSession-method-onHardwareVideoUnavailable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.tv.TvInputService.HardwareSession-method-onHardwareVideoUnavailable' class='name expandable'>onHardwareVideoUnavailable</a>( <span class='pre'>reason</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when the underlying hardware TV input session calls\n android.media.tv.TvInputService.Session.notifyVideoUnavai...</div><div class='long'><p>Called when the underlying hardware TV input session calls\n android.media.tv.TvInputService.Session.notifyVideoUnavailable(int).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>reason</span> : Number<div class='sub-desc'><p>The reason that the hardware TV input stopped the playback:\n <ul>\n <li>TvInputManager.VIDEO_UNAVAILABLE_REASON_UNKNOWN\n <li>TvInputManager.VIDEO_UNAVAILABLE_REASON_TUNING\n <li>TvInputManager.VIDEO_UNAVAILABLE_REASON_WEAK_SIGNAL\n <li>TvInputManager.VIDEO_UNAVAILABLE_REASON_BUFFERING\n <li>TvInputManager.VIDEO_UNAVAILABLE_REASON_AUDIO_ONLY\n </li></li></li></li></li></ul></p>\n</div></li></ul></div></div></div><div id='method-onSetSurface' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.tv.TvInputService.HardwareSession'>android.media.tv.TvInputService.HardwareSession</span><br/><a href='source/HardwareSession.html#android-media-tv-TvInputService-HardwareSession-method-onSetSurface' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.tv.TvInputService.HardwareSession-method-onSetSurface' class='name expandable'>onSetSurface</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method will not be called in android.media.tv.TvInputService.HardwareSession. ...</div><div class='long'><p>This method will not be called in <a href=\"#!/api/android.media.tv.TvInputService.HardwareSession\" rel=\"android.media.tv.TvInputService.HardwareSession\" class=\"docClass\">android.media.tv.TvInputService.HardwareSession</a>. Framework will\n forward the application's surface to the hardware TV input.</p>\n</div></div></div></div></div></div></div>","meta":{}});