Ext.data.JsonP.android_graphics_pdf_PdfDocument_Page({"tagname":"class","name":"android.graphics.pdf.PdfDocument.Page","autodetected":{},"files":[{"filename":"Page.js","href":"Page.html#android-graphics-pdf-PdfDocument-Page"}],"extends":"java.lang.Object","members":[{"name":"getCanvas","tagname":"method","owner":"android.graphics.pdf.PdfDocument.Page","id":"method-getCanvas","meta":{}},{"name":"getInfo","tagname":"method","owner":"android.graphics.pdf.PdfDocument.Page","id":"method-getInfo","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.graphics.pdf.PdfDocument.Page","short_doc":"This class represents a PDF document page. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.graphics.pdf.PdfDocument.Page</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Page.html#android-graphics-pdf-PdfDocument-Page' target='_blank'>Page.js</a></div></pre><div class='doc-contents'><p>This class represents a PDF document page. It has associated\n a canvas on which you can draw content and is acquired by a\n call to <a href=\"#!/api/android.graphics.pdf.PdfDocument.Page-method-getCanvas\" rel=\"android.graphics.pdf.PdfDocument.Page-method-getCanvas\" class=\"docClass\">getCanvas</a>(). It also has associated a\n <a href=\"#!/api/android.graphics.pdf.PdfDocument.PageInfo\" rel=\"android.graphics.pdf.PdfDocument.PageInfo\" class=\"docClass\">android.graphics.pdf.PdfDocument.PageInfo</a> instance that describes its attributes. Also\n a page has</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getCanvas' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.pdf.PdfDocument.Page'>android.graphics.pdf.PdfDocument.Page</span><br/><a href='source/Page.html#android-graphics-pdf-PdfDocument-Page-method-getCanvas' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.pdf.PdfDocument.Page-method-getCanvas' class='name expandable'>getCanvas</a>( <span class='pre'></span> ) : Object {android.graphics.Canvas}<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the Canvas of the page. ...</div><div class='long'><p>Gets the Canvas of the page.</p>\n\n<p> <p>\n <strong>Note: </strong> There are some draw operations that are not yet\n supported by the canvas returned by this method. More specifically:\n <ul>\n <li>Inverse path clipping performed via android.graphics.Region.Op) Canvas.clipPath(android.graphics.Path,\n     android.graphics.Region.Op) for Region.Op#REVERSE_DIFFERENCE operations.</li>\n <li>int,\n     float[], int, float[], int, int[], int, short[], int, int,\n     android.graphics.Paint) Canvas.drawVertices(\n     android.graphics.Canvas.VertexMode, int, float[], int, float[],\n     int, int[], int, short[], int, int, android.graphics.Paint)</li>\n <li>Color filters set via android.graphics.ColorFilter)</li>\n <li>Mask filters set via android.graphics.MaskFilter)</li>\n <li>Some XFER modes such as\n     PorterDuff.Mode SRC,\n     PorterDuff.DST_ATOP,\n     PorterDuff.XOR,\n     PorterDuff.ADD</li>\n </ul></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.graphics.Canvas}</span><div class='sub-desc'><p>The canvas if the page is not finished, null otherwise.\n@see PdfDocument#finishPage(Page)</p>\n</div></li></ul></div></div></div><div id='method-getInfo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.pdf.PdfDocument.Page'>android.graphics.pdf.PdfDocument.Page</span><br/><a href='source/Page.html#android-graphics-pdf-PdfDocument-Page-method-getInfo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.pdf.PdfDocument.Page-method-getInfo' class='name expandable'>getInfo</a>( <span class='pre'></span> ) : Object {android.graphics.pdf.PdfDocument.PageInfo}<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the android.graphics.pdf.PdfDocument.PageInfo with meta-data for the page. ...</div><div class='long'><p>Gets the <a href=\"#!/api/android.graphics.pdf.PdfDocument.PageInfo\" rel=\"android.graphics.pdf.PdfDocument.PageInfo\" class=\"docClass\">android.graphics.pdf.PdfDocument.PageInfo</a> with meta-data for the page.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.graphics.pdf.PdfDocument.PageInfo}</span><div class='sub-desc'><p>The page info.\n@see PdfDocument#finishPage(Page)</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});