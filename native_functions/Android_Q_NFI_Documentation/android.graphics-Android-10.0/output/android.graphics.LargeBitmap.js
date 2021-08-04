Ext.data.JsonP.android_graphics_LargeBitmap({"tagname":"class","name":"android.graphics.LargeBitmap","autodetected":{},"files":[{"filename":"LargeBitmap.js","href":"LargeBitmap.html#android-graphics-LargeBitmap"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"decodeRegion","tagname":"method","owner":"android.graphics.LargeBitmap","id":"method-decodeRegion","meta":{}},{"name":"getHeight","tagname":"method","owner":"android.graphics.LargeBitmap","id":"method-getHeight","meta":{}},{"name":"getWidth","tagname":"method","owner":"android.graphics.LargeBitmap","id":"method-getWidth","meta":{}},{"name":"isRecycled","tagname":"method","owner":"android.graphics.LargeBitmap","id":"method-isRecycled","meta":{}},{"name":"recycle","tagname":"method","owner":"android.graphics.LargeBitmap","id":"method-recycle","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.graphics.LargeBitmap","short_doc":"LargeBitmap can be used to decode a rectangle region from an image. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.graphics.LargeBitmap</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/LargeBitmap.html#android-graphics-LargeBitmap' target='_blank'>LargeBitmap.js</a></div></pre><div class='doc-contents'><p>LargeBitmap can be used to decode a rectangle region from an image.\n LargeBimap is particularly useful when an original image is large and\n you only need parts of the image.</p>\n\n<p> To create a LargeBitmap, call BitmapFactory.createLargeBitmap().\n Given a LargeBitmap, users can call decodeRegion() repeatedly\n to get a decoded Bitmap of the specified region.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-decodeRegion' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.LargeBitmap'>android.graphics.LargeBitmap</span><br/><a href='source/LargeBitmap.html#android-graphics-LargeBitmap-method-decodeRegion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.LargeBitmap-method-decodeRegion' class='name expandable'>decodeRegion</a>( <span class='pre'>rect, opts</span> ) : Object {android.graphics.Bitmap}<span class=\"signature\"></span></div><div class='description'><div class='short'>Decodes a rectangle region in the image specified by rect. ...</div><div class='long'><p>Decodes a rectangle region in the image specified by rect.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rect</span> : Object {Rect}<div class='sub-desc'><p>The rectangle that specified the region to be decode.</p>\n</div></li><li><span class='pre'>opts</span> : Object {BitmapFactory.Options}<div class='sub-desc'><p>null-ok; Options that control downsampling.\n             inPurgeable is not supported.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.graphics.Bitmap}</span><div class='sub-desc'><p>The decoded bitmap, or null if the image data could not be\n         decoded.</p>\n</div></li></ul></div></div></div><div id='method-getHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.LargeBitmap'>android.graphics.LargeBitmap</span><br/><a href='source/LargeBitmap.html#android-graphics-LargeBitmap-method-getHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.LargeBitmap-method-getHeight' class='name expandable'>getHeight</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the original image's height ...</div><div class='long'><p>Returns the original image's height</p>\n</div></div></div><div id='method-getWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.LargeBitmap'>android.graphics.LargeBitmap</span><br/><a href='source/LargeBitmap.html#android-graphics-LargeBitmap-method-getWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.LargeBitmap-method-getWidth' class='name expandable'>getWidth</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the original image's width ...</div><div class='long'><p>Returns the original image's width</p>\n</div></div></div><div id='method-isRecycled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.LargeBitmap'>android.graphics.LargeBitmap</span><br/><a href='source/LargeBitmap.html#android-graphics-LargeBitmap-method-isRecycled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.LargeBitmap-method-isRecycled' class='name expandable'>isRecycled</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns true if this large bitmap has been recycled. ...</div><div class='long'><p>Returns true if this large bitmap has been recycled.\n If so, then it is an error to try use its method.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the large bitmap has been recycled</p>\n</div></li></ul></div></div></div><div id='method-recycle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.LargeBitmap'>android.graphics.LargeBitmap</span><br/><a href='source/LargeBitmap.html#android-graphics-LargeBitmap-method-recycle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.LargeBitmap-method-recycle' class='name expandable'>recycle</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Frees up the memory associated with this large bitmap, and mark the\n large bitmap as \"dead\", meaning it will throw an...</div><div class='long'><p>Frees up the memory associated with this large bitmap, and mark the\n large bitmap as \"dead\", meaning it will throw an exception if decodeRegion(),\n getWidth() or getHeight() is called.\n This operation cannot be reversed, so it should only be called if you are\n sure there are no further uses for the large bitmap. This is an advanced call,\n and normally need not be called, since the normal GC process will free up this\n memory when there are no more references to this bitmap.</p>\n</div></div></div></div></div></div></div>","meta":{}});