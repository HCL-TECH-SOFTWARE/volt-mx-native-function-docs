Ext.data.JsonP.android_graphics_ImageDecoder({"tagname":"class","name":"android.graphics.ImageDecoder","autodetected":{},"files":[{"filename":"ImageDecoder.js","href":"ImageDecoder.html#android-graphics-ImageDecoder"}],"extends":"java.lang.Object","members":[{"name":"ALLOCATOR_DEFAULT","tagname":"property","owner":"android.graphics.ImageDecoder","id":"property-ALLOCATOR_DEFAULT","meta":{}},{"name":"ALLOCATOR_HARDWARE","tagname":"property","owner":"android.graphics.ImageDecoder","id":"property-ALLOCATOR_HARDWARE","meta":{}},{"name":"ALLOCATOR_SHARED_MEMORY","tagname":"property","owner":"android.graphics.ImageDecoder","id":"property-ALLOCATOR_SHARED_MEMORY","meta":{}},{"name":"ALLOCATOR_SOFTWARE","tagname":"property","owner":"android.graphics.ImageDecoder","id":"property-ALLOCATOR_SOFTWARE","meta":{}},{"name":"ERROR_SOURCE_ERROR","tagname":"property","owner":"android.graphics.ImageDecoder","id":"property-ERROR_SOURCE_ERROR","meta":{}},{"name":"ERROR_SOURCE_EXCEPTION","tagname":"property","owner":"android.graphics.ImageDecoder","id":"property-ERROR_SOURCE_EXCEPTION","meta":{}},{"name":"ERROR_SOURCE_INCOMPLETE","tagname":"property","owner":"android.graphics.ImageDecoder","id":"property-ERROR_SOURCE_INCOMPLETE","meta":{}},{"name":"close","tagname":"method","owner":"android.graphics.ImageDecoder","id":"method-close","meta":{}},{"name":"createSource","tagname":"method","owner":"android.graphics.ImageDecoder","id":"method-createSource","meta":{}},{"name":"decodeBitmap","tagname":"method","owner":"android.graphics.ImageDecoder","id":"method-decodeBitmap","meta":{}},{"name":"decodeDrawable","tagname":"method","owner":"android.graphics.ImageDecoder","id":"method-decodeDrawable","meta":{}},{"name":"getSampledSize","tagname":"method","owner":"android.graphics.ImageDecoder","id":"method-getSampledSize","meta":{}},{"name":"setAllocator","tagname":"method","owner":"android.graphics.ImageDecoder","id":"method-setAllocator","meta":{}},{"name":"setAsAlphaMask","tagname":"method","owner":"android.graphics.ImageDecoder","id":"method-setAsAlphaMask","meta":{}},{"name":"setCrop","tagname":"method","owner":"android.graphics.ImageDecoder","id":"method-setCrop","meta":{}},{"name":"setMutable","tagname":"method","owner":"android.graphics.ImageDecoder","id":"method-setMutable","meta":{}},{"name":"setOnPartialImageListener","tagname":"method","owner":"android.graphics.ImageDecoder","id":"method-setOnPartialImageListener","meta":{}},{"name":"setPostProcessor","tagname":"method","owner":"android.graphics.ImageDecoder","id":"method-setPostProcessor","meta":{}},{"name":"setPreferRamOverQuality","tagname":"method","owner":"android.graphics.ImageDecoder","id":"method-setPreferRamOverQuality","meta":{}},{"name":"setRequireUnpremultiplied","tagname":"method","owner":"android.graphics.ImageDecoder","id":"method-setRequireUnpremultiplied","meta":{}},{"name":"setResize","tagname":"method","owner":"android.graphics.ImageDecoder","id":"method-setResize","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.graphics.ImageDecoder","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.graphics.ImageDecoder</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ImageDecoder.html#android-graphics-ImageDecoder' target='_blank'>ImageDecoder.js</a></div></pre><div class='doc-contents'><p>implements java.lang.AutoCloseable</p>\n\n<p>Class for decoding images as <a href=\"#!/api/android.graphics.Bitmap\" rel=\"android.graphics.Bitmap\" class=\"docClass\">android.graphics.Bitmap</a>s or Drawables.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-ALLOCATOR_DEFAULT' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-property-ALLOCATOR_DEFAULT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-property-ALLOCATOR_DEFAULT' class='name expandable'>ALLOCATOR_DEFAULT</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Use the default allocation for the pixel memory. ...</div><div class='long'><p>Use the default allocation for the pixel memory.</p>\n\n<p>Will typically result in a <a href=\"#!/api/android.graphics.Bitmap.Config-property-HARDWARE\" rel=\"android.graphics.Bitmap.Config-property-HARDWARE\" class=\"docClass\">android.graphics.Bitmap.Config.HARDWARE</a>\nallocation, but may be software for small images. In addition, this will\nswitch to software when HARDWARE is incompatible, e.g.\n<a href=\"#!/api/android.graphics.ImageDecoder-method-setMutable\" rel=\"android.graphics.ImageDecoder-method-setMutable\" class=\"docClass\">setMutable</a>, <a href=\"#!/api/android.graphics.ImageDecoder-method-setAsAlphaMask\" rel=\"android.graphics.ImageDecoder-method-setAsAlphaMask\" class=\"docClass\">setAsAlphaMask</a>.</p>\n<p>Defaults to: <code>&quot;0&quot;</code></p></div></div></div><div id='property-ALLOCATOR_HARDWARE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-property-ALLOCATOR_HARDWARE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-property-ALLOCATOR_HARDWARE' class='name expandable'>ALLOCATOR_HARDWARE</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Require a android.graphics.Bitmap.Config.HARDWARE android.graphics.Bitmap. ...</div><div class='long'><p>Require a <a href=\"#!/api/android.graphics.Bitmap.Config-property-HARDWARE\" rel=\"android.graphics.Bitmap.Config-property-HARDWARE\" class=\"docClass\">android.graphics.Bitmap.Config.HARDWARE</a> <a href=\"#!/api/android.graphics.Bitmap\" rel=\"android.graphics.Bitmap\" class=\"docClass\">android.graphics.Bitmap</a>.</p>\n\n<p>When this is combined with incompatible options, like\n<a href=\"#!/api/android.graphics.ImageDecoder-method-setMutable\" rel=\"android.graphics.ImageDecoder-method-setMutable\" class=\"docClass\">setMutable</a> or <a href=\"#!/api/android.graphics.ImageDecoder-method-setAsAlphaMask\" rel=\"android.graphics.ImageDecoder-method-setAsAlphaMask\" class=\"docClass\">setAsAlphaMask</a>, <a href=\"#!/api/android.graphics.ImageDecoder-method-decodeDrawable\" rel=\"android.graphics.ImageDecoder-method-decodeDrawable\" class=\"docClass\">decodeDrawable</a>\n/ <a href=\"#!/api/android.graphics.ImageDecoder-method-decodeBitmap\" rel=\"android.graphics.ImageDecoder-method-decodeBitmap\" class=\"docClass\">decodeBitmap</a> will throw an\njava.lang.IllegalStateException.</p>\n<p>Defaults to: <code>&quot;3&quot;</code></p></div></div></div><div id='property-ALLOCATOR_SHARED_MEMORY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-property-ALLOCATOR_SHARED_MEMORY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-property-ALLOCATOR_SHARED_MEMORY' class='name expandable'>ALLOCATOR_SHARED_MEMORY</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Use shared memory for the pixel memory. ...</div><div class='long'><p>Use shared memory for the pixel memory.</p>\n\n<p>Useful for sharing across processes.</p>\n<p>Defaults to: <code>&quot;2&quot;</code></p></div></div></div><div id='property-ALLOCATOR_SOFTWARE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-property-ALLOCATOR_SOFTWARE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-property-ALLOCATOR_SOFTWARE' class='name expandable'>ALLOCATOR_SOFTWARE</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Use a software allocation for the pixel memory. ...</div><div class='long'><p>Use a software allocation for the pixel memory.</p>\n\n<p>Useful for drawing to a software <a href=\"#!/api/android.graphics.Canvas\" rel=\"android.graphics.Canvas\" class=\"docClass\">android.graphics.Canvas</a> or for\naccessing the pixels on the final output.</p>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-ERROR_SOURCE_ERROR' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-property-ERROR_SOURCE_ERROR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-property-ERROR_SOURCE_ERROR' class='name expandable'>ERROR_SOURCE_ERROR</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The encoded data contained an error. ...</div><div class='long'><p>The encoded data contained an error.</p>\n<p>Defaults to: <code>&quot;3&quot;</code></p></div></div></div><div id='property-ERROR_SOURCE_EXCEPTION' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-property-ERROR_SOURCE_EXCEPTION' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-property-ERROR_SOURCE_EXCEPTION' class='name expandable'>ERROR_SOURCE_EXCEPTION</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>An Exception was thrown reading the android.graphics.ImageDecoder.Source. ...</div><div class='long'><p>An Exception was thrown reading the <a href=\"#!/api/android.graphics.ImageDecoder.Source\" rel=\"android.graphics.ImageDecoder.Source\" class=\"docClass\">android.graphics.ImageDecoder.Source</a>.</p>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-ERROR_SOURCE_INCOMPLETE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-property-ERROR_SOURCE_INCOMPLETE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-property-ERROR_SOURCE_INCOMPLETE' class='name expandable'>ERROR_SOURCE_INCOMPLETE</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The encoded data was incomplete. ...</div><div class='long'><p>The encoded data was incomplete.</p>\n<p>Defaults to: <code>&quot;2&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-close' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-method-close' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-method-close' class='name expandable'>close</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-createSource' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-method-createSource' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-method-createSource' class='name expandable'>createSource</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Create a new android.graphics.ImageDecoder.Source from a java.io.File. ...</div><div class='long'><p>Create a new <a href=\"#!/api/android.graphics.ImageDecoder.Source\" rel=\"android.graphics.ImageDecoder.Source\" class=\"docClass\">android.graphics.ImageDecoder.Source</a> from a java.io.File.</p>\n</div></div></div><div id='method-decodeBitmap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-method-decodeBitmap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-method-decodeBitmap' class='name expandable'>decodeBitmap</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>See android.graphics.ImageDecoder.OnHeaderDecodedListener). ...</div><div class='long'><p>See android.graphics.ImageDecoder.OnHeaderDecodedListener).</p>\n</div></div></div><div id='method-decodeDrawable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-method-decodeDrawable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-method-decodeDrawable' class='name expandable'>decodeDrawable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>See android.graphics.ImageDecoder.OnHeaderDecodedListener). ...</div><div class='long'><p>See android.graphics.ImageDecoder.OnHeaderDecodedListener).</p>\n</div></div></div><div id='method-getSampledSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-method-getSampledSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-method-getSampledSize' class='name expandable'>getSampledSize</a>( <span class='pre'>sampleSize</span> ) : Object {android.util.Size}<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the width and height of a given sample size. ...</div><div class='long'><p>Return the width and height of a given sample size.</p>\n\n<p>  <p>This takes an input that functions like\n  <a href=\"#!/api/android.graphics.BitmapFactory.Options-property-inSampleSize\" rel=\"android.graphics.BitmapFactory.Options-property-inSampleSize\" class=\"docClass\">android.graphics.BitmapFactory.Options.inSampleSize</a>. It returns a width and\n  height that can be acheived by sampling the encoded image. Other widths\n  and heights may be supported, but will require an additional (internal)\n  scaling step. Such internal scaling is <em>not</em> supported with\n  <a href=\"#!/api/android.graphics.ImageDecoder-method-setRequireUnpremultiplied\" rel=\"android.graphics.ImageDecoder-method-setRequireUnpremultiplied\" class=\"docClass\">setRequireUnpremultiplied</a> set to {@code true}.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sampleSize</span> : Number<div class='sub-desc'><p>Sampling rate of the encoded image.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.util.Size}</span><div class='sub-desc'><p>android.util.Size of the width and height after\n      sampling.</p>\n</div></li></ul></div></div></div><div id='method-setAllocator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-method-setAllocator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-method-setAllocator' class='name expandable'>setAllocator</a>( <span class='pre'>allocator</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Choose the backing for the pixel memory. ...</div><div class='long'><p>Choose the backing for the pixel memory.</p>\n\n<p>  This is ignored for animated drawables.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>allocator</span> : Number<div class='sub-desc'><p>Type of allocator to use.</p>\n</div></li></ul></div></div></div><div id='method-setAsAlphaMask' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-method-setAsAlphaMask' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-method-setAsAlphaMask' class='name expandable'>setAsAlphaMask</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Specify whether to potentially treat the output as an alpha mask. ...</div><div class='long'><p>Specify whether to potentially treat the output as an alpha mask.</p>\n\n<p>  <p>If this is set to {@code true} and the image is encoded in a format\n  with only one channel, treat that channel as alpha. Otherwise this call has\n  no effect.</p></p>\n\n<p>  <p>setAsAlphaMask is incompatible with <a href=\"#!/api/android.graphics.ImageDecoder-property-ALLOCATOR_HARDWARE\" rel=\"android.graphics.ImageDecoder-property-ALLOCATOR_HARDWARE\" class=\"docClass\">ALLOCATOR_HARDWARE</a>. Trying to\n  combine them will result in <a href=\"#!/api/android.graphics.ImageDecoder-method-decodeDrawable\" rel=\"android.graphics.ImageDecoder-method-decodeDrawable\" class=\"docClass\">decodeDrawable</a>/\n  <a href=\"#!/api/android.graphics.ImageDecoder-method-decodeBitmap\" rel=\"android.graphics.ImageDecoder-method-decodeBitmap\" class=\"docClass\">decodeBitmap</a> throwing an\n  java.lang.IllegalStateException.</p></p>\n</div></div></div><div id='method-setCrop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-method-setCrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-method-setCrop' class='name expandable'>setCrop</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Crop the output to {@code subset} of the (possibly) scaled image. ...</div><div class='long'><p>Crop the output to {@code subset} of the (possibly) scaled image.</p>\n\n<p>  <p>{@code subset} must be contained within the size set by\n  <a href=\"#!/api/android.graphics.ImageDecoder-method-setResize\" rel=\"android.graphics.ImageDecoder-method-setResize\" class=\"docClass\">setResize</a> or the bounds of the image if setResize was not\n  called. Otherwise an IllegalStateException will be thrown by\n  <a href=\"#!/api/android.graphics.ImageDecoder-method-decodeDrawable\" rel=\"android.graphics.ImageDecoder-method-decodeDrawable\" class=\"docClass\">decodeDrawable</a>/<a href=\"#!/api/android.graphics.ImageDecoder-method-decodeBitmap\" rel=\"android.graphics.ImageDecoder-method-decodeBitmap\" class=\"docClass\">decodeBitmap</a>.</p></p>\n\n<p>  <p>NOT intended as a replacement for\n  <a href=\"#!/api/android.graphics.BitmapRegionDecoder-method-decodeRegion\" rel=\"android.graphics.BitmapRegionDecoder-method-decodeRegion\" class=\"docClass\">android.graphics.BitmapRegionDecoder.decodeRegion</a>. This supports all formats,\n  but merely crops the output.</p></p>\n</div></div></div><div id='method-setMutable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-method-setMutable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-method-setMutable' class='name expandable'>setMutable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Specify whether the android.graphics.Bitmap should be mutable. ...</div><div class='long'><p>Specify whether the <a href=\"#!/api/android.graphics.Bitmap\" rel=\"android.graphics.Bitmap\" class=\"docClass\">android.graphics.Bitmap</a> should be mutable.</p>\n\n<p>  <p>By default, a <a href=\"#!/api/android.graphics.Bitmap\" rel=\"android.graphics.Bitmap\" class=\"docClass\">android.graphics.Bitmap</a> created will be immutable, but that can\n  be changed with this call.</p></p>\n\n<p>  <p>Mutable Bitmaps are incompatible with <a href=\"#!/api/android.graphics.ImageDecoder-property-ALLOCATOR_HARDWARE\" rel=\"android.graphics.ImageDecoder-property-ALLOCATOR_HARDWARE\" class=\"docClass\">ALLOCATOR_HARDWARE</a>,\n  because <a href=\"#!/api/android.graphics.Bitmap.Config-property-HARDWARE\" rel=\"android.graphics.Bitmap.Config-property-HARDWARE\" class=\"docClass\">android.graphics.Bitmap.Config.HARDWARE</a> Bitmaps cannot be mutable.\n  Attempting to combine them will throw an\n  java.lang.IllegalStateException.</p></p>\n\n<p>  <p>Mutable Bitmaps are also incompatible with <a href=\"#!/api/android.graphics.ImageDecoder-method-decodeDrawable\" rel=\"android.graphics.ImageDecoder-method-decodeDrawable\" class=\"docClass\">decodeDrawable</a>,\n  which would require retrieving the Bitmap from the returned Drawable in\n  order to modify. Attempting to decode a mutable Drawable will\n  throw an java.lang.IllegalStateException.</p></p>\n</div></div></div><div id='method-setOnPartialImageListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-method-setOnPartialImageListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-method-setOnPartialImageListener' class='name expandable'>setOnPartialImageListener</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set (replace) the android.graphics.ImageDecoder.OnPartialImageListener on this object. ...</div><div class='long'><p>Set (replace) the <a href=\"#!/api/android.graphics.ImageDecoder.OnPartialImageListener\" rel=\"android.graphics.ImageDecoder.OnPartialImageListener\" class=\"docClass\">android.graphics.ImageDecoder.OnPartialImageListener</a> on this object.</p>\n\n<p>  Will be called if there is an error in the input. Without one, a\n  partial <a href=\"#!/api/android.graphics.Bitmap\" rel=\"android.graphics.Bitmap\" class=\"docClass\">android.graphics.Bitmap</a> will be created.</p>\n</div></div></div><div id='method-setPostProcessor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-method-setPostProcessor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-method-setPostProcessor' class='name expandable'>setPostProcessor</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Modify the image after decoding and scaling. ...</div><div class='long'><p>Modify the image after decoding and scaling.</p>\n\n<p>  <p>This allows adding effects prior to returning a Drawable or\n  <a href=\"#!/api/android.graphics.Bitmap\" rel=\"android.graphics.Bitmap\" class=\"docClass\">android.graphics.Bitmap</a>. For a {@code Drawable} or an immutable {@code Bitmap},\n  this is the only way to process the image after decoding.</p></p>\n\n<p>  <p>If set on a nine-patch image, the nine-patch data is ignored.</p></p>\n\n<p>  <p>For an animated image, the drawing commands drawn on the\n  <a href=\"#!/api/android.graphics.Canvas\" rel=\"android.graphics.Canvas\" class=\"docClass\">android.graphics.Canvas</a> will be recorded immediately and then applied to each\n  frame.</p></p>\n</div></div></div><div id='method-setPreferRamOverQuality' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-method-setPreferRamOverQuality' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-method-setPreferRamOverQuality' class='name expandable'>setPreferRamOverQuality</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Specify whether to potentially save RAM at the expense of quality. ...</div><div class='long'><p>Specify whether to potentially save RAM at the expense of quality.</p>\n\n<p>  Setting this to {@code true} may result in a <a href=\"#!/api/android.graphics.Bitmap\" rel=\"android.graphics.Bitmap\" class=\"docClass\">android.graphics.Bitmap</a> with a\n  denser <a href=\"#!/api/android.graphics.Bitmap.Config\" rel=\"android.graphics.Bitmap.Config\" class=\"docClass\">android.graphics.Bitmap.Config</a>, depending on the image. For example, for\n  an opaque <a href=\"#!/api/android.graphics.Bitmap\" rel=\"android.graphics.Bitmap\" class=\"docClass\">android.graphics.Bitmap</a>, this may result in a <a href=\"#!/api/android.graphics.Bitmap.Config\" rel=\"android.graphics.Bitmap.Config\" class=\"docClass\">android.graphics.Bitmap.Config</a>\n  with no alpha information.</p>\n</div></div></div><div id='method-setRequireUnpremultiplied' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-method-setRequireUnpremultiplied' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-method-setRequireUnpremultiplied' class='name expandable'>setRequireUnpremultiplied</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Specify whether the android.graphics.Bitmap should have unpremultiplied pixels. ...</div><div class='long'><p>Specify whether the <a href=\"#!/api/android.graphics.Bitmap\" rel=\"android.graphics.Bitmap\" class=\"docClass\">android.graphics.Bitmap</a> should have unpremultiplied pixels.</p>\n\n<p>  By default, ImageDecoder will create a <a href=\"#!/api/android.graphics.Bitmap\" rel=\"android.graphics.Bitmap\" class=\"docClass\">android.graphics.Bitmap</a> with\n  premultiplied pixels, which is required for drawing with the\n  android.view.View system (i.e. to a <a href=\"#!/api/android.graphics.Canvas\" rel=\"android.graphics.Canvas\" class=\"docClass\">android.graphics.Canvas</a>). Calling\n  this method with a value of {@code true} will result in\n  <a href=\"#!/api/android.graphics.ImageDecoder-method-decodeBitmap\" rel=\"android.graphics.ImageDecoder-method-decodeBitmap\" class=\"docClass\">decodeBitmap</a> returning a <a href=\"#!/api/android.graphics.Bitmap\" rel=\"android.graphics.Bitmap\" class=\"docClass\">android.graphics.Bitmap</a> with unpremultiplied\n  pixels. See <a href=\"#!/api/android.graphics.Bitmap-method-isPremultiplied\" rel=\"android.graphics.Bitmap-method-isPremultiplied\" class=\"docClass\">android.graphics.Bitmap.isPremultiplied</a>. This is incompatible with\n  <a href=\"#!/api/android.graphics.ImageDecoder-method-decodeDrawable\" rel=\"android.graphics.ImageDecoder-method-decodeDrawable\" class=\"docClass\">decodeDrawable</a>; attempting to decode an unpremultiplied\n  Drawable will throw an java.lang.IllegalStateException.</p>\n</div></div></div><div id='method-setResize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.ImageDecoder'>android.graphics.ImageDecoder</span><br/><a href='source/ImageDecoder.html#android-graphics-ImageDecoder-method-setResize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.ImageDecoder-method-setResize' class='name expandable'>setResize</a>( <span class='pre'>sampleSize</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Resize based on a sample size. ...</div><div class='long'><p>Resize based on a sample size.</p>\n\n<p>  <p>This has the same effect as passing the result of\n  <a href=\"#!/api/android.graphics.ImageDecoder-method-getSampledSize\" rel=\"android.graphics.ImageDecoder-method-getSampledSize\" class=\"docClass\">getSampledSize</a> to int).</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sampleSize</span> : Number<div class='sub-desc'><p>Sampling rate of the encoded image.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});