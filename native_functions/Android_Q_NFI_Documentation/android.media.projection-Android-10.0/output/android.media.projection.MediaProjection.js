Ext.data.JsonP.android_media_projection_MediaProjection({"tagname":"class","name":"android.media.projection.MediaProjection","autodetected":{},"files":[{"filename":"MediaProjection.js","href":"MediaProjection.html#android-media-projection-MediaProjection"}],"extends":"java.lang.Object","members":[{"name":"createVirtualDisplay","tagname":"method","owner":"android.media.projection.MediaProjection","id":"method-createVirtualDisplay","meta":{}},{"name":"registerCallback","tagname":"method","owner":"android.media.projection.MediaProjection","id":"method-registerCallback","meta":{}},{"name":"stop","tagname":"method","owner":"android.media.projection.MediaProjection","id":"method-stop","meta":{}},{"name":"unregisterCallback","tagname":"method","owner":"android.media.projection.MediaProjection","id":"method-unregisterCallback","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.media.projection.MediaProjection","short_doc":"A token granting applications the ability to capture screen contents and/or\n record system audio. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.media.projection.MediaProjection</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/MediaProjection.html#android-media-projection-MediaProjection' target='_blank'>MediaProjection.js</a></div></pre><div class='doc-contents'><p>A token granting applications the ability to capture screen contents and/or\n record system audio. The exact capabilities granted depend on the type of\n MediaProjection.</p>\n\n<p> <p>\n A screen capture session can be started through <a href=\"#!/api/android.media.projection.MediaProjectionManager-method-createScreenCaptureIntent\" rel=\"android.media.projection.MediaProjectionManager-method-createScreenCaptureIntent\" class=\"docClass\">android.media.projection.MediaProjectionManager.createScreenCaptureIntent</a>. This grants the ability to\n capture screen contents, but not system audio.\n </p></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createVirtualDisplay' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.projection.MediaProjection'>android.media.projection.MediaProjection</span><br/><a href='source/MediaProjection.html#android-media-projection-MediaProjection-method-createVirtualDisplay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.projection.MediaProjection-method-createVirtualDisplay' class='name expandable'>createVirtualDisplay</a>( <span class='pre'>name, width, height, dpi, surface, flags, callback, handler</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a android.hardware.display.VirtualDisplay to capture the\n contents of the screen. ...</div><div class='long'><p>Creates a android.hardware.display.VirtualDisplay to capture the\n contents of the screen.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the virtual display, must be non-empty.</p>\n</div></li><li><span class='pre'>width</span> : Number<div class='sub-desc'><p>The width of the virtual display in pixels. Must be\n greater than 0.</p>\n</div></li><li><span class='pre'>height</span> : Number<div class='sub-desc'><p>The height of the virtual display in pixels. Must be\n greater than 0.</p>\n</div></li><li><span class='pre'>dpi</span> : Number<div class='sub-desc'><p>The density of the virtual display in dpi. Must be greater\n than 0.</p>\n</div></li><li><span class='pre'>surface</span> : Number<div class='sub-desc'><p>The surface to which the content of the virtual display\n should be rendered, or null if there is none initially.</p>\n</div></li><li><span class='pre'>flags</span> : Object {Surface}<div class='sub-desc'><p>A combination of virtual display flags. See DisplayManager for the full\n list of flags.</p>\n</div></li><li><span class='pre'>callback</span> : Object {VirtualDisplay.Callback}<div class='sub-desc'><p>Callback to call when the virtual display's state\n changes, or null if none.</p>\n</div></li><li><span class='pre'>handler</span> : Object {Handler}<div class='sub-desc'><p>The android.os.Handler on which the callback should be\n invoked, or null if the callback should be invoked on the calling\n thread's main android.os.Looper.\n@see android.hardware.display.VirtualDisplay</p>\n</div></li></ul></div></div></div><div id='method-registerCallback' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.projection.MediaProjection'>android.media.projection.MediaProjection</span><br/><a href='source/MediaProjection.html#android-media-projection-MediaProjection-method-registerCallback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.projection.MediaProjection-method-registerCallback' class='name expandable'>registerCallback</a>( <span class='pre'>callback, handler</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Register a listener to receive notifications about when the android.media.projection.MediaProjection changes state. ...</div><div class='long'><p>Register a listener to receive notifications about when the <a href=\"#!/api/android.media.projection.MediaProjection\" rel=\"android.media.projection.MediaProjection\" class=\"docClass\">android.media.projection.MediaProjection</a> changes state.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Object {MediaProjection.Callback}<div class='sub-desc'><p>The callback to call.</p>\n</div></li><li><span class='pre'>handler</span> : Object {Handler}<div class='sub-desc'><p>The handler on which the callback should be invoked, or\n null if the callback should be invoked on the calling thread's looper.\n@see <a href=\"#!/api/android.media.projection.MediaProjection-method-unregisterCallback\" rel=\"android.media.projection.MediaProjection-method-unregisterCallback\" class=\"docClass\">unregisterCallback</a></p>\n</div></li></ul></div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.projection.MediaProjection'>android.media.projection.MediaProjection</span><br/><a href='source/MediaProjection.html#android-media-projection-MediaProjection-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.projection.MediaProjection-method-stop' class='name expandable'>stop</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Stops projection. ...</div><div class='long'><p>Stops projection.</p>\n</div></div></div><div id='method-unregisterCallback' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.projection.MediaProjection'>android.media.projection.MediaProjection</span><br/><a href='source/MediaProjection.html#android-media-projection-MediaProjection-method-unregisterCallback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.projection.MediaProjection-method-unregisterCallback' class='name expandable'>unregisterCallback</a>( <span class='pre'>callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Unregister a MediaProjection listener. ...</div><div class='long'><p>Unregister a MediaProjection listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Object {MediaProjection.Callback}<div class='sub-desc'><p>The callback to unregister.\n@see <a href=\"#!/api/android.media.projection.MediaProjection-method-registerCallback\" rel=\"android.media.projection.MediaProjection-method-registerCallback\" class=\"docClass\">registerCallback</a></p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});