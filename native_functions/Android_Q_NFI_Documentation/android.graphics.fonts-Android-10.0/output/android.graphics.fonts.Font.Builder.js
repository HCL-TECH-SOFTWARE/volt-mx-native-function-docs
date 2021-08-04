Ext.data.JsonP.android_graphics_fonts_Font_Builder({"tagname":"class","name":"android.graphics.fonts.Font.Builder","autodetected":{},"files":[{"filename":"Builder.js","href":"Builder.html#android-graphics-fonts-Font-Builder"}],"extends":"java.lang.Object","members":[{"name":"build","tagname":"method","owner":"android.graphics.fonts.Font.Builder","id":"method-build","meta":{}},{"name":"setFontVariationSettings","tagname":"method","owner":"android.graphics.fonts.Font.Builder","id":"method-setFontVariationSettings","meta":{}},{"name":"setSlant","tagname":"method","owner":"android.graphics.fonts.Font.Builder","id":"method-setSlant","meta":{}},{"name":"setTtcIndex","tagname":"method","owner":"android.graphics.fonts.Font.Builder","id":"method-setTtcIndex","meta":{}},{"name":"setWeight","tagname":"method","owner":"android.graphics.fonts.Font.Builder","id":"method-setWeight","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.graphics.fonts.Font.Builder","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.graphics.fonts.Font.Builder</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Builder.html#android-graphics-fonts-Font-Builder' target='_blank'>Builder.js</a></div></pre><div class='doc-contents'><p>A builder class for creating new Font.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-build' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.fonts.Font.Builder'>android.graphics.fonts.Font.Builder</span><br/><a href='source/Builder.html#android-graphics-fonts-Font-Builder-method-build' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.fonts.Font.Builder-method-build' class='name expandable'>build</a>( <span class='pre'></span> ) : Object {android.graphics.fonts.Font}<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates the font based on the configured values. ...</div><div class='long'><p>Creates the font based on the configured values.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.graphics.fonts.Font}</span><div class='sub-desc'><p>the Font object</p>\n</div></li></ul></div></div></div><div id='method-setFontVariationSettings' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.fonts.Font.Builder'>android.graphics.fonts.Font.Builder</span><br/><a href='source/Builder.html#android-graphics-fonts-Font-Builder-method-setFontVariationSettings' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.fonts.Font.Builder-method-setFontVariationSettings' class='name expandable'>setFontVariationSettings</a>( <span class='pre'>axes</span> ) : Object {android.graphics.fonts.Font.Builder}<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the font variation settings. ...</div><div class='long'><p>Sets the font variation settings.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>axes</span> : Object {android.graphics.fonts.FontVariationAxis[]}<div class='sub-desc'><p>an array of font variation axis tag-value pairs</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.graphics.fonts.Font.Builder}</span><div class='sub-desc'><p>this builder</p>\n</div></li></ul></div></div></div><div id='method-setSlant' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.fonts.Font.Builder'>android.graphics.fonts.Font.Builder</span><br/><a href='source/Builder.html#android-graphics-fonts-Font-Builder-method-setSlant' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.fonts.Font.Builder-method-setSlant' class='name expandable'>setSlant</a>( <span class='pre'></span> ) : Object {android.graphics.fonts.Font.Builder}<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets italic information of the font. ...</div><div class='long'><p>Sets italic information of the font.</p>\n\n<p> Tells the system the style of the given font. If this function is not called, the system\n will resolve the style by reading font tables.</p>\n\n<p> For example, if you want to use italic font as upright font, call {@code\n setSlant(FontStyle.FONT_SLANT_UPRIGHT)} explicitly.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.graphics.fonts.Font.Builder}</span><div class='sub-desc'><p>this builder</p>\n</div></li></ul></div></div></div><div id='method-setTtcIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.fonts.Font.Builder'>android.graphics.fonts.Font.Builder</span><br/><a href='source/Builder.html#android-graphics-fonts-Font-Builder-method-setTtcIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.fonts.Font.Builder-method-setTtcIndex' class='name expandable'>setTtcIndex</a>( <span class='pre'>ttcIndex</span> ) : Object {android.graphics.fonts.Font.Builder}<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets an index of the font collection. ...</div><div class='long'><p>Sets an index of the font collection. See android.R.attr.ttcIndex.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ttcIndex</span> : Number<div class='sub-desc'><p>An index of the font collection. If the font source is not font\n                 collection, do not call this method or specify 0.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.graphics.fonts.Font.Builder}</span><div class='sub-desc'><p>this builder</p>\n</div></li></ul></div></div></div><div id='method-setWeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.fonts.Font.Builder'>android.graphics.fonts.Font.Builder</span><br/><a href='source/Builder.html#android-graphics-fonts-Font-Builder-method-setWeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.fonts.Font.Builder-method-setWeight' class='name expandable'>setWeight</a>( <span class='pre'>weight, weight</span> ) : Object {android.graphics.fonts.Font.Builder}<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets weight of the font. ...</div><div class='long'><p>Sets weight of the font.</p>\n\n<p> Tells the system the weight of the given font. If this function is not called, the system\n will resolve the weight value by reading font tables.</p>\n\n<p> Here are pairs of the common names and their values.\n <p>\n  <table>\n  <thead>\n  <tr>\n  <th align=\"center\">Value</th>\n  <th align=\"center\">Name</th>\n  <th align=\"center\">Android Definition</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n  <td align=\"center\">100</td>\n  <td align=\"center\">Thin</td>\n  <td align=\"center\"><a href=\"#!/api/android.graphics.fonts.FontStyle-property-FONT_WEIGHT_THIN\" rel=\"android.graphics.fonts.FontStyle-property-FONT_WEIGHT_THIN\" class=\"docClass\">android.graphics.fonts.FontStyle.FONT_WEIGHT_THIN</a></td>\n  </tr>\n  <tr>\n  <td align=\"center\">200</td>\n  <td align=\"center\">Extra Light (Ultra Light)</td>\n  <td align=\"center\"><a href=\"#!/api/android.graphics.fonts.FontStyle-property-FONT_WEIGHT_EXTRA_LIGHT\" rel=\"android.graphics.fonts.FontStyle-property-FONT_WEIGHT_EXTRA_LIGHT\" class=\"docClass\">android.graphics.fonts.FontStyle.FONT_WEIGHT_EXTRA_LIGHT</a></td>\n  </tr>\n  <tr>\n  <td align=\"center\">300</td>\n  <td align=\"center\">Light</td>\n  <td align=\"center\"><a href=\"#!/api/android.graphics.fonts.FontStyle-property-FONT_WEIGHT_LIGHT\" rel=\"android.graphics.fonts.FontStyle-property-FONT_WEIGHT_LIGHT\" class=\"docClass\">android.graphics.fonts.FontStyle.FONT_WEIGHT_LIGHT</a></td>\n  </tr>\n  <tr>\n  <td align=\"center\">400</td>\n  <td align=\"center\">Normal (Regular)</td>\n  <td align=\"center\"><a href=\"#!/api/android.graphics.fonts.FontStyle-property-FONT_WEIGHT_NORMAL\" rel=\"android.graphics.fonts.FontStyle-property-FONT_WEIGHT_NORMAL\" class=\"docClass\">android.graphics.fonts.FontStyle.FONT_WEIGHT_NORMAL</a></td>\n  </tr>\n  <tr>\n  <td align=\"center\">500</td>\n  <td align=\"center\">Medium</td>\n  <td align=\"center\"><a href=\"#!/api/android.graphics.fonts.FontStyle-property-FONT_WEIGHT_MEDIUM\" rel=\"android.graphics.fonts.FontStyle-property-FONT_WEIGHT_MEDIUM\" class=\"docClass\">android.graphics.fonts.FontStyle.FONT_WEIGHT_MEDIUM</a></td>\n  </tr>\n  <tr>\n  <td align=\"center\">600</td>\n  <td align=\"center\">Semi Bold (Demi Bold)</td>\n  <td align=\"center\"><a href=\"#!/api/android.graphics.fonts.FontStyle-property-FONT_WEIGHT_SEMI_BOLD\" rel=\"android.graphics.fonts.FontStyle-property-FONT_WEIGHT_SEMI_BOLD\" class=\"docClass\">android.graphics.fonts.FontStyle.FONT_WEIGHT_SEMI_BOLD</a></td>\n  </tr>\n  <tr>\n  <td align=\"center\">700</td>\n  <td align=\"center\">Bold</td>\n  <td align=\"center\"><a href=\"#!/api/android.graphics.fonts.FontStyle-property-FONT_WEIGHT_BOLD\" rel=\"android.graphics.fonts.FontStyle-property-FONT_WEIGHT_BOLD\" class=\"docClass\">android.graphics.fonts.FontStyle.FONT_WEIGHT_BOLD</a></td>\n  </tr>\n  <tr>\n  <td align=\"center\">800</td>\n  <td align=\"center\">Extra Bold (Ultra Bold)</td>\n  <td align=\"center\"><a href=\"#!/api/android.graphics.fonts.FontStyle-property-FONT_WEIGHT_EXTRA_BOLD\" rel=\"android.graphics.fonts.FontStyle-property-FONT_WEIGHT_EXTRA_BOLD\" class=\"docClass\">android.graphics.fonts.FontStyle.FONT_WEIGHT_EXTRA_BOLD</a></td>\n  </tr>\n  <tr>\n  <td align=\"center\">900</td>\n  <td align=\"center\">Black (Heavy)</td>\n  <td align=\"center\"><a href=\"#!/api/android.graphics.fonts.FontStyle-property-FONT_WEIGHT_BLACK\" rel=\"android.graphics.fonts.FontStyle-property-FONT_WEIGHT_BLACK\" class=\"docClass\">android.graphics.fonts.FontStyle.FONT_WEIGHT_BLACK</a></td>\n  </tr>\n  </tbody>\n </table></p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>weight</span> : Number<div class='sub-desc'><p>a weight value\n@see FontStyle#FONT_WEIGHT_EXTRA_LIGHT\n@see FontStyle#FONT_WEIGHT_LIGHT\n@see FontStyle#FONT_WEIGHT_NORMAL\n@see FontStyle#FONT_WEIGHT_MEDIUM\n@see FontStyle#FONT_WEIGHT_SEMI_BOLD\n@see FontStyle#FONT_WEIGHT_BOLD\n@see FontStyle#FONT_WEIGHT_EXTRA_BOLD\n@see FontStyle#FONT_WEIGHT_BLACK</p>\n</div></li><li><span class='pre'>weight</span> : Object<div class='sub-desc'><p>a weight value</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.graphics.fonts.Font.Builder}</span><div class='sub-desc'><p>this builder</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});