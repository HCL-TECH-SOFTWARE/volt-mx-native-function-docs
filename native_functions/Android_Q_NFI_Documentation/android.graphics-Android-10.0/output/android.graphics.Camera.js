Ext.data.JsonP.android_graphics_Camera({"tagname":"class","name":"android.graphics.Camera","autodetected":{},"files":[{"filename":"Camera.js","href":"Camera.html#android-graphics-Camera"}],"extends":"java.lang.Object","members":[{"name":"applyToCanvas","tagname":"method","owner":"android.graphics.Camera","id":"method-applyToCanvas","meta":{}},{"name":"dotWithNormal","tagname":"method","owner":"android.graphics.Camera","id":"method-dotWithNormal","meta":{}},{"name":"getLocationX","tagname":"method","owner":"android.graphics.Camera","id":"method-getLocationX","meta":{}},{"name":"getLocationY","tagname":"method","owner":"android.graphics.Camera","id":"method-getLocationY","meta":{}},{"name":"getLocationZ","tagname":"method","owner":"android.graphics.Camera","id":"method-getLocationZ","meta":{}},{"name":"getMatrix","tagname":"method","owner":"android.graphics.Camera","id":"method-getMatrix","meta":{}},{"name":"restore","tagname":"method","owner":"android.graphics.Camera","id":"method-restore","meta":{}},{"name":"rotate","tagname":"method","owner":"android.graphics.Camera","id":"method-rotate","meta":{}},{"name":"rotateX","tagname":"method","owner":"android.graphics.Camera","id":"method-rotateX","meta":{}},{"name":"rotateY","tagname":"method","owner":"android.graphics.Camera","id":"method-rotateY","meta":{}},{"name":"rotateZ","tagname":"method","owner":"android.graphics.Camera","id":"method-rotateZ","meta":{}},{"name":"save","tagname":"method","owner":"android.graphics.Camera","id":"method-save","meta":{}},{"name":"setLocation","tagname":"method","owner":"android.graphics.Camera","id":"method-setLocation","meta":{}},{"name":"translate","tagname":"method","owner":"android.graphics.Camera","id":"method-translate","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.graphics.Camera","short_doc":"A camera instance can be used to compute 3D transformations and\n generate a matrix that can be applied, for instance,...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.graphics.Camera</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Camera.html#android-graphics-Camera' target='_blank'>Camera.js</a></div></pre><div class='doc-contents'><p>A camera instance can be used to compute 3D transformations and\n generate a matrix that can be applied, for instance, on a\n <a href=\"#!/api/android.graphics.Canvas\" rel=\"android.graphics.Canvas\" class=\"docClass\">android.graphics.Canvas</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-applyToCanvas' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.Camera'>android.graphics.Camera</span><br/><a href='source/Camera.html#android-graphics-Camera-method-applyToCanvas' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.Camera-method-applyToCanvas' class='name expandable'>applyToCanvas</a>( <span class='pre'>canvas</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Computes the matrix corresponding to the current transformation\n and applies it to the specified Canvas. ...</div><div class='long'><p>Computes the matrix corresponding to the current transformation\n and applies it to the specified Canvas.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : Object {Canvas}<div class='sub-desc'><p>The Canvas to set the transform matrix onto</p>\n</div></li></ul></div></div></div><div id='method-dotWithNormal' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.Camera'>android.graphics.Camera</span><br/><a href='source/Camera.html#android-graphics-Camera-method-dotWithNormal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.Camera-method-dotWithNormal' class='name expandable'>dotWithNormal</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getLocationX' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.Camera'>android.graphics.Camera</span><br/><a href='source/Camera.html#android-graphics-Camera-method-getLocationX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.Camera-method-getLocationX' class='name expandable'>getLocationX</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the x location of the camera. ...</div><div class='long'><p>Gets the x location of the camera.\n@see <a href=\"#!/api/android.graphics.Camera-method-setLocation\" rel=\"android.graphics.Camera-method-setLocation\" class=\"docClass\">setLocation</a>(float, float, float)</p>\n</div></div></div><div id='method-getLocationY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.Camera'>android.graphics.Camera</span><br/><a href='source/Camera.html#android-graphics-Camera-method-getLocationY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.Camera-method-getLocationY' class='name expandable'>getLocationY</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the y location of the camera. ...</div><div class='long'><p>Gets the y location of the camera.\n@see <a href=\"#!/api/android.graphics.Camera-method-setLocation\" rel=\"android.graphics.Camera-method-setLocation\" class=\"docClass\">setLocation</a>(float, float, float)</p>\n</div></div></div><div id='method-getLocationZ' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.Camera'>android.graphics.Camera</span><br/><a href='source/Camera.html#android-graphics-Camera-method-getLocationZ' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.Camera-method-getLocationZ' class='name expandable'>getLocationZ</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the z location of the camera. ...</div><div class='long'><p>Gets the z location of the camera.\n@see <a href=\"#!/api/android.graphics.Camera-method-setLocation\" rel=\"android.graphics.Camera-method-setLocation\" class=\"docClass\">setLocation</a>(float, float, float)</p>\n</div></div></div><div id='method-getMatrix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.Camera'>android.graphics.Camera</span><br/><a href='source/Camera.html#android-graphics-Camera-method-getMatrix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.Camera-method-getMatrix' class='name expandable'>getMatrix</a>( <span class='pre'>matrix</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Computes the matrix corresponding to the current transformation\n and copies it to the supplied matrix object. ...</div><div class='long'><p>Computes the matrix corresponding to the current transformation\n and copies it to the supplied matrix object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>matrix</span> : Object {Matrix}<div class='sub-desc'><p>The matrix to copy the current transforms into</p>\n</div></li></ul></div></div></div><div id='method-restore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.Camera'>android.graphics.Camera</span><br/><a href='source/Camera.html#android-graphics-Camera-method-restore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.Camera-method-restore' class='name expandable'>restore</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Restores the saved state, if any. ...</div><div class='long'><p>Restores the saved state, if any.\n@see <a href=\"#!/api/android.graphics.Camera-method-restore\" rel=\"android.graphics.Camera-method-restore\" class=\"docClass\">restore</a>()</p>\n</div></div></div><div id='method-rotate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.Camera'>android.graphics.Camera</span><br/><a href='source/Camera.html#android-graphics-Camera-method-rotate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.Camera-method-rotate' class='name expandable'>rotate</a>( <span class='pre'>x, y, z</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Applies a rotation transform around all three axis. ...</div><div class='long'><p>Applies a rotation transform around all three axis.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>The angle of rotation around the X axis, in degrees</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>The angle of rotation around the Y axis, in degrees</p>\n</div></li><li><span class='pre'>z</span> : Number<div class='sub-desc'><p>The angle of rotation around the Z axis, in degrees\n@see <a href=\"#!/api/android.graphics.Camera-method-rotateX\" rel=\"android.graphics.Camera-method-rotateX\" class=\"docClass\">rotateX</a>(float)\n@see <a href=\"#!/api/android.graphics.Camera-method-rotateY\" rel=\"android.graphics.Camera-method-rotateY\" class=\"docClass\">rotateY</a>(float)\n@see <a href=\"#!/api/android.graphics.Camera-method-rotateZ\" rel=\"android.graphics.Camera-method-rotateZ\" class=\"docClass\">rotateZ</a>(float)</p>\n</div></li></ul></div></div></div><div id='method-rotateX' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.Camera'>android.graphics.Camera</span><br/><a href='source/Camera.html#android-graphics-Camera-method-rotateX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.Camera-method-rotateX' class='name expandable'>rotateX</a>( <span class='pre'>deg</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Applies a rotation transform around the X axis. ...</div><div class='long'><p>Applies a rotation transform around the X axis.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>deg</span> : Number<div class='sub-desc'><p>The angle of rotation around the X axis, in degrees\n@see <a href=\"#!/api/android.graphics.Camera-method-rotateY\" rel=\"android.graphics.Camera-method-rotateY\" class=\"docClass\">rotateY</a>(float)\n@see <a href=\"#!/api/android.graphics.Camera-method-rotateZ\" rel=\"android.graphics.Camera-method-rotateZ\" class=\"docClass\">rotateZ</a>(float)\n@see <a href=\"#!/api/android.graphics.Camera-method-rotate\" rel=\"android.graphics.Camera-method-rotate\" class=\"docClass\">rotate</a>(float, float, float)</p>\n</div></li></ul></div></div></div><div id='method-rotateY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.Camera'>android.graphics.Camera</span><br/><a href='source/Camera.html#android-graphics-Camera-method-rotateY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.Camera-method-rotateY' class='name expandable'>rotateY</a>( <span class='pre'>deg</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Applies a rotation transform around the Y axis. ...</div><div class='long'><p>Applies a rotation transform around the Y axis.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>deg</span> : Number<div class='sub-desc'><p>The angle of rotation around the Y axis, in degrees\n@see <a href=\"#!/api/android.graphics.Camera-method-rotateX\" rel=\"android.graphics.Camera-method-rotateX\" class=\"docClass\">rotateX</a>(float)\n@see <a href=\"#!/api/android.graphics.Camera-method-rotateZ\" rel=\"android.graphics.Camera-method-rotateZ\" class=\"docClass\">rotateZ</a>(float)\n@see <a href=\"#!/api/android.graphics.Camera-method-rotate\" rel=\"android.graphics.Camera-method-rotate\" class=\"docClass\">rotate</a>(float, float, float)</p>\n</div></li></ul></div></div></div><div id='method-rotateZ' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.Camera'>android.graphics.Camera</span><br/><a href='source/Camera.html#android-graphics-Camera-method-rotateZ' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.Camera-method-rotateZ' class='name expandable'>rotateZ</a>( <span class='pre'>deg</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Applies a rotation transform around the Z axis. ...</div><div class='long'><p>Applies a rotation transform around the Z axis.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>deg</span> : Number<div class='sub-desc'><p>The angle of rotation around the Z axis, in degrees\n@see <a href=\"#!/api/android.graphics.Camera-method-rotateX\" rel=\"android.graphics.Camera-method-rotateX\" class=\"docClass\">rotateX</a>(float)\n@see <a href=\"#!/api/android.graphics.Camera-method-rotateY\" rel=\"android.graphics.Camera-method-rotateY\" class=\"docClass\">rotateY</a>(float)\n@see <a href=\"#!/api/android.graphics.Camera-method-rotate\" rel=\"android.graphics.Camera-method-rotate\" class=\"docClass\">rotate</a>(float, float, float)</p>\n</div></li></ul></div></div></div><div id='method-save' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.Camera'>android.graphics.Camera</span><br/><a href='source/Camera.html#android-graphics-Camera-method-save' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.Camera-method-save' class='name expandable'>save</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Saves the camera state. ...</div><div class='long'><p>Saves the camera state. Each save should be balanced\n with a call to <a href=\"#!/api/android.graphics.Camera-method-restore\" rel=\"android.graphics.Camera-method-restore\" class=\"docClass\">restore</a>().\n@see <a href=\"#!/api/android.graphics.Camera-method-save\" rel=\"android.graphics.Camera-method-save\" class=\"docClass\">save</a>()</p>\n</div></div></div><div id='method-setLocation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.Camera'>android.graphics.Camera</span><br/><a href='source/Camera.html#android-graphics-Camera-method-setLocation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.Camera-method-setLocation' class='name expandable'>setLocation</a>( <span class='pre'>x, y, z</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the location of the camera. ...</div><div class='long'><p>Sets the location of the camera. The default location is set at\n 0, 0, -8.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>The x location of the camera</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>The y location of the camera</p>\n</div></li><li><span class='pre'>z</span> : Number<div class='sub-desc'><p>The z location of the camera</p>\n</div></li></ul></div></div></div><div id='method-translate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.Camera'>android.graphics.Camera</span><br/><a href='source/Camera.html#android-graphics-Camera-method-translate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.Camera-method-translate' class='name expandable'>translate</a>( <span class='pre'>x, y, z</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Applies a translation transform on all three axis. ...</div><div class='long'><p>Applies a translation transform on all three axis.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>The distance to translate by on the X axis</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>The distance to translate by on the Y axis</p>\n</div></li><li><span class='pre'>z</span> : Number<div class='sub-desc'><p>The distance to translate by on the Z axis</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});