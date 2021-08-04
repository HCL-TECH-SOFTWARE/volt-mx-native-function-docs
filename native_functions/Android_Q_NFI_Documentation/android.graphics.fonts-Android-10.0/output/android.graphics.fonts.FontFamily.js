Ext.data.JsonP.android_graphics_fonts_FontFamily({"tagname":"class","name":"android.graphics.fonts.FontFamily","autodetected":{},"files":[{"filename":"FontFamily.js","href":"FontFamily.html#android-graphics-fonts-FontFamily"}],"extends":"java.lang.Object","members":[{"name":"getFont","tagname":"method","owner":"android.graphics.fonts.FontFamily","id":"method-getFont","meta":{}},{"name":"getSize","tagname":"method","owner":"android.graphics.fonts.FontFamily","id":"method-getSize","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.graphics.fonts.FontFamily","short_doc":"A font family class can be used for creating Typeface. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.graphics.fonts.FontFamily</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/FontFamily.html#android-graphics-fonts-FontFamily' target='_blank'>FontFamily.js</a></div></pre><div class='doc-contents'><p>A font family class can be used for creating Typeface.</p>\n\n<p> <p>\n A font family is a bundle of fonts for drawing text in various styles.\n For example, you can bundle regular style font and bold style font into a single font family,\n then system will select the correct style font from family for drawing.</p>\n\n<pre>  FontFamily family = new FontFamily.Builder(new Font.Builder(\"regular.ttf\").build())\n      .addFont(new Font.Builder(\"bold.ttf\").build()).build();\n  Typeface typeface = new Typeface.Builder2(family).build();\n\n  SpannableStringBuilder ssb = new SpannableStringBuilder(\"Hello, World.\");\n  ssb.setSpan(new StyleSpan(Typeface.Bold), 6, 12, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);\n\n  textView.setTypeface(typeface);\n  textView.setText(ssb);\n </pre>\n\n\n<p> In this example, \"Hello, \" is drawn with \"regular.ttf\", and \"World.\" is drawn with \"bold.ttf\".</p>\n\n<p> If there is no font exactly matches with the text style, the system will select the closest font.\n </p></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getFont' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.fonts.FontFamily'>android.graphics.fonts.FontFamily</span><br/><a href='source/FontFamily.html#android-graphics-fonts-FontFamily-method-getFont' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.fonts.FontFamily-method-getFont' class='name expandable'>getFont</a>( <span class='pre'>index</span> ) : Object {android.graphics.fonts.Font}<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a font ...</div><div class='long'><p>Returns a font</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>an index of the font</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.graphics.fonts.Font}</span><div class='sub-desc'><p>a registered font</p>\n</div></li></ul></div></div></div><div id='method-getSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.fonts.FontFamily'>android.graphics.fonts.FontFamily</span><br/><a href='source/FontFamily.html#android-graphics-fonts-FontFamily-method-getSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.fonts.FontFamily-method-getSize' class='name expandable'>getSize</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the number of fonts in this FontFamily. ...</div><div class='long'><p>Returns the number of fonts in this FontFamily.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>the number of fonts registered in this family.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});