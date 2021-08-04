Ext.data.JsonP.android_graphics_BitmapShader({"tagname":"class","name":"android.graphics.BitmapShader","autodetected":{},"files":[{"filename":"BitmapShader.js","href":"BitmapShader.html#android-graphics-BitmapShader"}],"extends":"android.graphics.Shader","members":[{"name":"getLocalMatrix","tagname":"method","owner":"android.graphics.Shader","id":"method-getLocalMatrix","meta":{}},{"name":"setLocalMatrix","tagname":"method","owner":"android.graphics.Shader","id":"method-setLocalMatrix","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.graphics.BitmapShader","short_doc":"Shader used to draw a bitmap as a texture. ...","classIcon":"icon-class","superclasses":["java.lang.Object","android.graphics.Shader"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><a href='#!/api/android.graphics.Shader' rel='android.graphics.Shader' class='docClass'>android.graphics.Shader</a><div class='subclass '><strong>android.graphics.BitmapShader</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/BitmapShader.html#android-graphics-BitmapShader' target='_blank'>BitmapShader.js</a></div></pre><div class='doc-contents'><p>Shader used to draw a bitmap as a texture. The bitmap can be repeated or\n mirrored by setting the tiling mode.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getLocalMatrix' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.graphics.Shader' rel='android.graphics.Shader' class='defined-in docClass'>android.graphics.Shader</a><br/><a href='source/Shader.html#android-graphics-Shader-method-getLocalMatrix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.Shader-method-getLocalMatrix' class='name expandable'>getLocalMatrix</a>( <span class='pre'>localM</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Return true if the shader has a non-identity local matrix. ...</div><div class='long'><p>Return true if the shader has a non-identity local matrix.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>localM</span> : Object {Matrix}<div class='sub-desc'><p>Set to the local matrix of the shader, if the shader's matrix is non-null.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the shader has a non-identity local matrix</p>\n</div></li></ul></div></div></div><div id='method-setLocalMatrix' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.graphics.Shader' rel='android.graphics.Shader' class='defined-in docClass'>android.graphics.Shader</a><br/><a href='source/Shader.html#android-graphics-Shader-method-setLocalMatrix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.Shader-method-setLocalMatrix' class='name expandable'>setLocalMatrix</a>( <span class='pre'>localM</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the shader's local matrix. ...</div><div class='long'><p>Set the shader's local matrix. Passing null will reset the shader's\n matrix to identity. If the matrix has scale value as 0, the drawing\n result is undefined.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>localM</span> : Object {Matrix}<div class='sub-desc'><p>The shader's new local matrix, or null to specify identity</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});