Ext.data.JsonP.android_graphics_BitmapFactory({"tagname":"class","name":"android.graphics.BitmapFactory","autodetected":{},"files":[{"filename":"BitmapFactory.js","href":"BitmapFactory.html#android-graphics-BitmapFactory"}],"extends":"java.lang.Object","members":[{"name":"decodeByteArray","tagname":"method","owner":"android.graphics.BitmapFactory","id":"method-decodeByteArray","meta":{}},{"name":"decodeFile","tagname":"method","owner":"android.graphics.BitmapFactory","id":"method-decodeFile","meta":{}},{"name":"decodeFileDescriptor","tagname":"method","owner":"android.graphics.BitmapFactory","id":"method-decodeFileDescriptor","meta":{}},{"name":"decodeResource","tagname":"method","owner":"android.graphics.BitmapFactory","id":"method-decodeResource","meta":{}},{"name":"decodeResourceStream","tagname":"method","owner":"android.graphics.BitmapFactory","id":"method-decodeResourceStream","meta":{}},{"name":"decodeStream","tagname":"method","owner":"android.graphics.BitmapFactory","id":"method-decodeStream","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.graphics.BitmapFactory","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.graphics.BitmapFactory</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/BitmapFactory.html#android-graphics-BitmapFactory' target='_blank'>BitmapFactory.js</a></div></pre><div class='doc-contents'><p>Creates Bitmap objects from various sources, including files, streams,\n and byte-arrays.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-decodeByteArray' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.BitmapFactory'>android.graphics.BitmapFactory</span><br/><a href='source/BitmapFactory.html#android-graphics-BitmapFactory-method-decodeByteArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.BitmapFactory-method-decodeByteArray' class='name expandable'>decodeByteArray</a>( <span class='pre'>data, offset, length</span> ) : Object {android.graphics.Bitmap}<span class=\"signature\"></span></div><div class='description'><div class='short'>Decode an immutable bitmap from the specified byte array. ...</div><div class='long'><p>Decode an immutable bitmap from the specified byte array.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object {byte[]}<div class='sub-desc'><p>byte array of compressed image data</p>\n</div></li><li><span class='pre'>offset</span> : Number<div class='sub-desc'><p>offset into imageData for where the decoder should begin\n               parsing.</p>\n</div></li><li><span class='pre'>length</span> : Number<div class='sub-desc'><p>the number of bytes, beginning at offset, to parse</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.graphics.Bitmap}</span><div class='sub-desc'><p>The decoded bitmap, or null if the image could not be decoded.</p>\n</div></li></ul></div></div></div><div id='method-decodeFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.BitmapFactory'>android.graphics.BitmapFactory</span><br/><a href='source/BitmapFactory.html#android-graphics-BitmapFactory-method-decodeFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.BitmapFactory-method-decodeFile' class='name expandable'>decodeFile</a>( <span class='pre'>pathName</span> ) : Object {android.graphics.Bitmap}<span class=\"signature\"></span></div><div class='description'><div class='short'>Decode a file path into a bitmap. ...</div><div class='long'><p>Decode a file path into a bitmap. If the specified file name is null,\n or cannot be decoded into a bitmap, the function returns null.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pathName</span> : String<div class='sub-desc'><p>complete path name for the file to be decoded.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.graphics.Bitmap}</span><div class='sub-desc'><p>the resulting decoded bitmap, or null if it could not be decoded.</p>\n</div></li></ul></div></div></div><div id='method-decodeFileDescriptor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.BitmapFactory'>android.graphics.BitmapFactory</span><br/><a href='source/BitmapFactory.html#android-graphics-BitmapFactory-method-decodeFileDescriptor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.BitmapFactory-method-decodeFileDescriptor' class='name expandable'>decodeFileDescriptor</a>( <span class='pre'>fd</span> ) : Object {android.graphics.Bitmap}<span class=\"signature\"></span></div><div class='description'><div class='short'>Decode a bitmap from the file descriptor. ...</div><div class='long'><p>Decode a bitmap from the file descriptor. If the bitmap cannot be decoded\n return null. The position within the descriptor will not be changed when\n this returns, so the descriptor can be used again as is.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fd</span> : Object {FileDescriptor}<div class='sub-desc'><p>The file descriptor containing the bitmap data to decode</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.graphics.Bitmap}</span><div class='sub-desc'><p>the decoded bitmap, or null</p>\n</div></li></ul></div></div></div><div id='method-decodeResource' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.BitmapFactory'>android.graphics.BitmapFactory</span><br/><a href='source/BitmapFactory.html#android-graphics-BitmapFactory-method-decodeResource' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.BitmapFactory-method-decodeResource' class='name expandable'>decodeResource</a>( <span class='pre'>res, id</span> ) : Object {android.graphics.Bitmap}<span class=\"signature\"></span></div><div class='description'><div class='short'>Synonym for int, android.graphics.BitmapFactory.Options)\n with null Options. ...</div><div class='long'><p>Synonym for int, android.graphics.BitmapFactory.Options)\n with null Options.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>res</span> : Object {Resources}<div class='sub-desc'><p>The resources object containing the image data</p>\n</div></li><li><span class='pre'>id</span> : Number<div class='sub-desc'><p>The resource id of the image data</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.graphics.Bitmap}</span><div class='sub-desc'><p>The decoded bitmap, or null if the image could not be decoded.</p>\n</div></li></ul></div></div></div><div id='method-decodeResourceStream' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.BitmapFactory'>android.graphics.BitmapFactory</span><br/><a href='source/BitmapFactory.html#android-graphics-BitmapFactory-method-decodeResourceStream' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.BitmapFactory-method-decodeResourceStream' class='name expandable'>decodeResourceStream</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Decode a new Bitmap from an InputStream. ...</div><div class='long'><p>Decode a new Bitmap from an InputStream. This InputStream was obtained from\n resources, which we pass to be able to scale the bitmap accordingly.</p>\n<h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalArgumentException if BitmapFactory.Options.inPreferredConfig\n         is <a href=\"#!/api/android.graphics.Bitmap.Config-property-HARDWARE\" rel=\"android.graphics.Bitmap.Config-property-HARDWARE\" class=\"docClass\">android.graphics.Bitmap.Config.HARDWARE</a>\n         and BitmapFactory.Options.inMutable is set, if the specified color space\n         is not RGB, or if the specified color space's transfer\n         function is not an ICC parametric curve</p>\n</div></li></ul></div></div></div><div id='method-decodeStream' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.BitmapFactory'>android.graphics.BitmapFactory</span><br/><a href='source/BitmapFactory.html#android-graphics-BitmapFactory-method-decodeStream' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.BitmapFactory-method-decodeStream' class='name expandable'>decodeStream</a>( <span class='pre'>is</span> ) : Object {android.graphics.Bitmap}<span class=\"signature\"></span></div><div class='description'><div class='short'>Decode an input stream into a bitmap. ...</div><div class='long'><p>Decode an input stream into a bitmap. If the input stream is null, or\n cannot be used to decode a bitmap, the function returns null.\n The stream's position will be where ever it was after the encoded data\n was read.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>is</span> : Object {InputStream}<div class='sub-desc'><p>The input stream that holds the raw data to be decoded into a\n           bitmap.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.graphics.Bitmap}</span><div class='sub-desc'><p>The decoded bitmap, or null if the image data could not be decoded.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});