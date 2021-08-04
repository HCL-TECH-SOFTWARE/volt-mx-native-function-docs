Ext.data.JsonP.android_graphics_fonts_Font({"tagname":"class","name":"android.graphics.fonts.Font","autodetected":{},"files":[{"filename":"Font.js","href":"Font.html#android-graphics-fonts-Font"}],"extends":"java.lang.Object","members":[{"name":"equals","tagname":"method","owner":"android.graphics.fonts.Font","id":"method-equals","meta":{}},{"name":"getAxes","tagname":"method","owner":"android.graphics.fonts.Font","id":"method-getAxes","meta":{}},{"name":"getBuffer","tagname":"method","owner":"android.graphics.fonts.Font","id":"method-getBuffer","meta":{}},{"name":"getFile","tagname":"method","owner":"android.graphics.fonts.Font","id":"method-getFile","meta":{}},{"name":"getLocaleList","tagname":"method","owner":"android.graphics.fonts.Font","id":"method-getLocaleList","meta":{}},{"name":"getStyle","tagname":"method","owner":"android.graphics.fonts.Font","id":"method-getStyle","meta":{}},{"name":"getTtcIndex","tagname":"method","owner":"android.graphics.fonts.Font","id":"method-getTtcIndex","meta":{}},{"name":"hashCode","tagname":"method","owner":"android.graphics.fonts.Font","id":"method-hashCode","meta":{}},{"name":"toString","tagname":"method","owner":"android.graphics.fonts.Font","id":"method-toString","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.graphics.fonts.Font","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.graphics.fonts.Font</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Font.html#android-graphics-fonts-Font' target='_blank'>Font.js</a></div></pre><div class='doc-contents'><p>A font class can be used for creating FontFamily.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-equals' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.fonts.Font'>android.graphics.fonts.Font</span><br/><a href='source/Font.html#android-graphics-fonts-Font-method-equals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.fonts.Font-method-equals' class='name expandable'>equals</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getAxes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.fonts.Font'>android.graphics.fonts.Font</span><br/><a href='source/Font.html#android-graphics-fonts-Font-method-getAxes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.fonts.Font-method-getAxes' class='name expandable'>getAxes</a>( <span class='pre'></span> ) : Object {android.graphics.fonts.FontVariationAxis}<span class=\"signature\"></span></div><div class='description'><div class='short'>Get a font variation settings associated with this font\n@see Builder#setFontVariationSettings(String)\n@see Builder#se...</div><div class='long'><p>Get a font variation settings associated with this font\n@see Builder#setFontVariationSettings(String)\n@see Builder#setFontVariationSettings(FontVariationAxis[])</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.graphics.fonts.FontVariationAxis}</span><div class='sub-desc'><p>font variation settings</p>\n</div></li></ul></div></div></div><div id='method-getBuffer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.fonts.Font'>android.graphics.fonts.Font</span><br/><a href='source/Font.html#android-graphics-fonts-Font-method-getBuffer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.fonts.Font-method-getBuffer' class='name expandable'>getBuffer</a>( <span class='pre'></span> ) : Object {java.nio.ByteBuffer}<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a font file buffer. ...</div><div class='long'><p>Returns a font file buffer.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {java.nio.ByteBuffer}</span><div class='sub-desc'><p>a font buffer</p>\n</div></li></ul></div></div></div><div id='method-getFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.fonts.Font'>android.graphics.fonts.Font</span><br/><a href='source/Font.html#android-graphics-fonts-Font-method-getFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.fonts.Font-method-getFile' class='name expandable'>getFile</a>( <span class='pre'></span> ) : Object {java.io.File}<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a file path of this font. ...</div><div class='long'><p>Returns a file path of this font.</p>\n\n<p> This returns null if this font is not created from regular file.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {java.io.File}</span><div class='sub-desc'><p>a file path of the font</p>\n</div></li></ul></div></div></div><div id='method-getLocaleList' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.fonts.Font'>android.graphics.fonts.Font</span><br/><a href='source/Font.html#android-graphics-fonts-Font-method-getLocaleList' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.fonts.Font-method-getLocaleList' class='name expandable'>getLocaleList</a>( <span class='pre'></span> ) : Object {android.os.LocaleList}<span class=\"signature\"></span></div><div class='description'><div class='short'>Get a locale list of this font. ...</div><div class='long'><p>Get a locale list of this font.</p>\n\n<p> This is always empty if this font is not a system font.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.os.LocaleList}</span><div class='sub-desc'><p>a locale list</p>\n</div></li></ul></div></div></div><div id='method-getStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.fonts.Font'>android.graphics.fonts.Font</span><br/><a href='source/Font.html#android-graphics-fonts-Font-method-getStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.fonts.Font-method-getStyle' class='name expandable'>getStyle</a>( <span class='pre'></span> ) : Object {android.graphics.fonts.FontStyle}<span class=\"signature\"></span></div><div class='description'><div class='short'>Get a style associated with this font. ...</div><div class='long'><p>Get a style associated with this font.\n@see Builder#setWeight(int)\n@see Builder#setSlant(int)</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.graphics.fonts.FontStyle}</span><div class='sub-desc'><p>a font style</p>\n</div></li></ul></div></div></div><div id='method-getTtcIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.fonts.Font'>android.graphics.fonts.Font</span><br/><a href='source/Font.html#android-graphics-fonts-Font-method-getTtcIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.fonts.Font-method-getTtcIndex' class='name expandable'>getTtcIndex</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Get a TTC index value associated with this font. ...</div><div class='long'><p>Get a TTC index value associated with this font.</p>\n\n<p> If TTF/OTF file is provided, this value is always 0.\n@see Builder#setTtcIndex(int)</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>a TTC index value</p>\n</div></li></ul></div></div></div><div id='method-hashCode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.fonts.Font'>android.graphics.fonts.Font</span><br/><a href='source/Font.html#android-graphics-fonts-Font-method-hashCode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.fonts.Font-method-hashCode' class='name expandable'>hashCode</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.fonts.Font'>android.graphics.fonts.Font</span><br/><a href='source/Font.html#android-graphics-fonts-Font-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.fonts.Font-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});