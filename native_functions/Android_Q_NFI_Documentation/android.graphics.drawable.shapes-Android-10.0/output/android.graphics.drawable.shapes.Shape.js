Ext.data.JsonP.android_graphics_drawable_shapes_Shape({"tagname":"class","name":"android.graphics.drawable.shapes.Shape","autodetected":{},"files":[{"filename":"Shape.js","href":"Shape.html#android-graphics-drawable-shapes-Shape"}],"extends":"java.lang.Object","members":[{"name":"clone","tagname":"method","owner":"android.graphics.drawable.shapes.Shape","id":"method-clone","meta":{}},{"name":"draw","tagname":"method","owner":"android.graphics.drawable.shapes.Shape","id":"method-draw","meta":{}},{"name":"equals","tagname":"method","owner":"android.graphics.drawable.shapes.Shape","id":"method-equals","meta":{}},{"name":"getHeight","tagname":"method","owner":"android.graphics.drawable.shapes.Shape","id":"method-getHeight","meta":{}},{"name":"getOutline","tagname":"method","owner":"android.graphics.drawable.shapes.Shape","id":"method-getOutline","meta":{}},{"name":"getWidth","tagname":"method","owner":"android.graphics.drawable.shapes.Shape","id":"method-getWidth","meta":{}},{"name":"hasAlpha","tagname":"method","owner":"android.graphics.drawable.shapes.Shape","id":"method-hasAlpha","meta":{}},{"name":"hashCode","tagname":"method","owner":"android.graphics.drawable.shapes.Shape","id":"method-hashCode","meta":{}},{"name":"resize","tagname":"method","owner":"android.graphics.drawable.shapes.Shape","id":"method-resize","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.graphics.drawable.shapes.Shape","short_doc":"implements java.lang.Cloneable\n\nDefines a generic graphical \"shape.\"\n \n Any Shape can be drawn to a Canvas with its o...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":["android.graphics.drawable.shapes.PathShape","android.graphics.drawable.shapes.RectShape"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.graphics.drawable.shapes.Shape</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/android.graphics.drawable.shapes.PathShape' rel='android.graphics.drawable.shapes.PathShape' class='docClass'>android.graphics.drawable.shapes.PathShape</a></div><div class='dependency'><a href='#!/api/android.graphics.drawable.shapes.RectShape' rel='android.graphics.drawable.shapes.RectShape' class='docClass'>android.graphics.drawable.shapes.RectShape</a></div><h4>Files</h4><div class='dependency'><a href='source/Shape.html#android-graphics-drawable-shapes-Shape' target='_blank'>Shape.js</a></div></pre><div class='doc-contents'><p>implements java.lang.Cloneable</p>\n\n<p>Defines a generic graphical \"shape.\"\n <p>\n Any Shape can be drawn to a Canvas with its own draw() method, but more\n graphical control is available if you instead pass it to a\n android.graphics.drawable.ShapeDrawable.\n <p>\n Custom Shape classes must implement <a href=\"#!/api/android.graphics.drawable.shapes.Shape-method-clone\" rel=\"android.graphics.drawable.shapes.Shape-method-clone\" class=\"docClass\">clone</a>() and return an instance\n of the custom Shape class.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clone' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.drawable.shapes.Shape'>android.graphics.drawable.shapes.Shape</span><br/><a href='source/Shape.html#android-graphics-drawable-shapes-Shape-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.drawable.shapes.Shape-method-clone' class='name expandable'>clone</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-draw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.drawable.shapes.Shape'>android.graphics.drawable.shapes.Shape</span><br/><a href='source/Shape.html#android-graphics-drawable-shapes-Shape-method-draw' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.drawable.shapes.Shape-method-draw' class='name expandable'>draw</a>( <span class='pre'>canvas, paint</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Draws this shape into the provided Canvas, with the provided Paint. ...</div><div class='long'><p>Draws this shape into the provided Canvas, with the provided Paint.\n <p>\n Before calling this, you must call resize(float,float).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : Object {Canvas}<div class='sub-desc'><p>the Canvas within which this shape should be drawn</p>\n</div></li><li><span class='pre'>paint</span> : Object {Paint}<div class='sub-desc'><p>the Paint object that defines this shape's characteristics</p>\n</div></li></ul></div></div></div><div id='method-equals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.drawable.shapes.Shape'>android.graphics.drawable.shapes.Shape</span><br/><a href='source/Shape.html#android-graphics-drawable-shapes-Shape-method-equals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.drawable.shapes.Shape-method-equals' class='name expandable'>equals</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.drawable.shapes.Shape'>android.graphics.drawable.shapes.Shape</span><br/><a href='source/Shape.html#android-graphics-drawable-shapes-Shape-method-getHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.drawable.shapes.Shape-method-getHeight' class='name expandable'>getHeight</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the height of the Shape. ...</div><div class='long'><p>Returns the height of the Shape.</p>\n</div></div></div><div id='method-getOutline' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.drawable.shapes.Shape'>android.graphics.drawable.shapes.Shape</span><br/><a href='source/Shape.html#android-graphics-drawable-shapes-Shape-method-getOutline' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.drawable.shapes.Shape-method-getOutline' class='name expandable'>getOutline</a>( <span class='pre'>outline</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Computes the Outline of the shape and return it in the supplied Outline\n parameter. ...</div><div class='long'><p>Computes the Outline of the shape and return it in the supplied Outline\n parameter. The default implementation does nothing and {@code outline}\n is not changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>outline</span> : Object {Outline}<div class='sub-desc'><p>the Outline to be populated with the result. Must be\n                non-{@code null}.</p>\n</div></li></ul></div></div></div><div id='method-getWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.drawable.shapes.Shape'>android.graphics.drawable.shapes.Shape</span><br/><a href='source/Shape.html#android-graphics-drawable-shapes-Shape-method-getWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.drawable.shapes.Shape-method-getWidth' class='name expandable'>getWidth</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the width of the Shape. ...</div><div class='long'><p>Returns the width of the Shape.</p>\n</div></div></div><div id='method-hasAlpha' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.drawable.shapes.Shape'>android.graphics.drawable.shapes.Shape</span><br/><a href='source/Shape.html#android-graphics-drawable-shapes-Shape-method-hasAlpha' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.drawable.shapes.Shape-method-hasAlpha' class='name expandable'>hasAlpha</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Checks whether the Shape is opaque. ...</div><div class='long'><p>Checks whether the Shape is opaque.\n <p>\n Default impl returns {@code true}. Override if your subclass can be\n opaque.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if any part of the drawable is <em>not</em> opaque.</p>\n</div></li></ul></div></div></div><div id='method-hashCode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.drawable.shapes.Shape'>android.graphics.drawable.shapes.Shape</span><br/><a href='source/Shape.html#android-graphics-drawable-shapes-Shape-method-hashCode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.drawable.shapes.Shape-method-hashCode' class='name expandable'>hashCode</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-resize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.drawable.shapes.Shape'>android.graphics.drawable.shapes.Shape</span><br/><a href='source/Shape.html#android-graphics-drawable-shapes-Shape-method-resize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.drawable.shapes.Shape-method-resize' class='name expandable'>resize</a>( <span class='pre'>width, height</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Resizes the dimensions of this shape. ...</div><div class='long'><p>Resizes the dimensions of this shape.\n <p>\n Must be called before draw(Canvas,Paint).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>width</span> : Number<div class='sub-desc'><p>the width of the shape (in pixels)</p>\n</div></li><li><span class='pre'>height</span> : Number<div class='sub-desc'><p>the height of the shape (in pixels)</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});