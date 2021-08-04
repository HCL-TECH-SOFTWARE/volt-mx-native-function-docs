Ext.data.JsonP.android_graphics_PathMeasure({"tagname":"class","name":"android.graphics.PathMeasure","autodetected":{},"files":[{"filename":"PathMeasure.js","href":"PathMeasure.html#android-graphics-PathMeasure"}],"extends":"java.lang.Object","members":[{"name":"POSITION_MATRIX_FLAG","tagname":"property","owner":"android.graphics.PathMeasure","id":"property-POSITION_MATRIX_FLAG","meta":{}},{"name":"TANGENT_MATRIX_FLAG","tagname":"property","owner":"android.graphics.PathMeasure","id":"property-TANGENT_MATRIX_FLAG","meta":{}},{"name":"getLength","tagname":"method","owner":"android.graphics.PathMeasure","id":"method-getLength","meta":{}},{"name":"getMatrix","tagname":"method","owner":"android.graphics.PathMeasure","id":"method-getMatrix","meta":{}},{"name":"getPosTan","tagname":"method","owner":"android.graphics.PathMeasure","id":"method-getPosTan","meta":{}},{"name":"getSegment","tagname":"method","owner":"android.graphics.PathMeasure","id":"method-getSegment","meta":{}},{"name":"isClosed","tagname":"method","owner":"android.graphics.PathMeasure","id":"method-isClosed","meta":{}},{"name":"nextContour","tagname":"method","owner":"android.graphics.PathMeasure","id":"method-nextContour","meta":{}},{"name":"setPath","tagname":"method","owner":"android.graphics.PathMeasure","id":"method-setPath","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.graphics.PathMeasure","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.graphics.PathMeasure</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/PathMeasure.html#android-graphics-PathMeasure' target='_blank'>PathMeasure.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-POSITION_MATRIX_FLAG' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.PathMeasure'>android.graphics.PathMeasure</span><br/><a href='source/PathMeasure.html#android-graphics-PathMeasure-property-POSITION_MATRIX_FLAG' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.PathMeasure-property-POSITION_MATRIX_FLAG' class='name expandable'>POSITION_MATRIX_FLAG</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-TANGENT_MATRIX_FLAG' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.PathMeasure'>android.graphics.PathMeasure</span><br/><a href='source/PathMeasure.html#android-graphics-PathMeasure-property-TANGENT_MATRIX_FLAG' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.PathMeasure-property-TANGENT_MATRIX_FLAG' class='name expandable'>TANGENT_MATRIX_FLAG</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;2&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getLength' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.PathMeasure'>android.graphics.PathMeasure</span><br/><a href='source/PathMeasure.html#android-graphics-PathMeasure-method-getLength' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.PathMeasure-method-getLength' class='name expandable'>getLength</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the total length of the current contour, or 0 if no path is\n associated with this measure object. ...</div><div class='long'><p>Return the total length of the current contour, or 0 if no path is\n associated with this measure object.</p>\n</div></div></div><div id='method-getMatrix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.PathMeasure'>android.graphics.PathMeasure</span><br/><a href='source/PathMeasure.html#android-graphics-PathMeasure-method-getMatrix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.PathMeasure-method-getMatrix' class='name expandable'>getMatrix</a>( <span class='pre'>distance, matrix, flags</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Pins distance to 0 &lt;= distance &lt;= getLength(), and then computes the\n corresponding matrix. ...</div><div class='long'><p>Pins distance to 0 &lt;= distance &lt;= getLength(), and then computes the\n corresponding matrix. Returns false if there is no path, or a zero-length\n path was specified, in which case matrix is unchanged.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>distance</span> : Number<div class='sub-desc'><p>The distance along the associated path</p>\n</div></li><li><span class='pre'>matrix</span> : Object {Matrix}<div class='sub-desc'><p>Allocated by the caller, this is set to the transformation\n        associated with the position and tangent at the specified distance</p>\n</div></li><li><span class='pre'>flags</span> : Number<div class='sub-desc'><p>Specified what aspects should be returned in the matrix.</p>\n</div></li></ul></div></div></div><div id='method-getPosTan' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.PathMeasure'>android.graphics.PathMeasure</span><br/><a href='source/PathMeasure.html#android-graphics-PathMeasure-method-getPosTan' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.PathMeasure-method-getPosTan' class='name expandable'>getPosTan</a>( <span class='pre'>distance, pos, tan</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Pins distance to 0 &lt;= distance &lt;= getLength(), and then computes the\n corresponding position and tangent. ...</div><div class='long'><p>Pins distance to 0 &lt;= distance &lt;= getLength(), and then computes the\n corresponding position and tangent. Returns false if there is no path,\n or a zero-length path was specified, in which case position and tangent\n are unchanged.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>distance</span> : Number<div class='sub-desc'><p>The distance along the current contour to sample</p>\n</div></li><li><span class='pre'>pos</span> : Object {float[]}<div class='sub-desc'><p>If not null, returns the sampled position (x==[0], y==[1])</p>\n</div></li><li><span class='pre'>tan</span> : Object {float[]}<div class='sub-desc'><p>If not null, returns the sampled tangent (x==[0], y==[1])</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>false if there was no path associated with this measure object</p>\n</div></li></ul></div></div></div><div id='method-getSegment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.PathMeasure'>android.graphics.PathMeasure</span><br/><a href='source/PathMeasure.html#android-graphics-PathMeasure-method-getSegment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.PathMeasure-method-getSegment' class='name expandable'>getSegment</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Given a start and stop distance, return in dst the intervening\n segment(s). ...</div><div class='long'><p>Given a start and stop distance, return in dst the intervening\n segment(s). If the segment is zero-length, return false, else return\n true. startD and stopD are pinned to legal values (0..getLength()).\n If startD >= stopD then return false (and leave dst untouched).\n Begin the segment with a moveTo if startWithMoveTo is true.</p>\n\n<p> <p>On android.os.Build.VERSION_CODES.KITKAT and earlier\n releases, the resulting path may not display on a hardware-accelerated\n Canvas. A simple workaround is to add a single operation to this path,\n such as <code>dst.rLineTo(0, 0)</code>.</p></p>\n</div></div></div><div id='method-isClosed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.PathMeasure'>android.graphics.PathMeasure</span><br/><a href='source/PathMeasure.html#android-graphics-PathMeasure-method-isClosed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.PathMeasure-method-isClosed' class='name expandable'>isClosed</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return true if the current contour is closed() ...</div><div class='long'><p>Return true if the current contour is closed()</p>\n</div></div></div><div id='method-nextContour' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.PathMeasure'>android.graphics.PathMeasure</span><br/><a href='source/PathMeasure.html#android-graphics-PathMeasure-method-nextContour' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.PathMeasure-method-nextContour' class='name expandable'>nextContour</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Move to the next contour in the path. ...</div><div class='long'><p>Move to the next contour in the path. Return true if one exists, or\n false if we're done with the path.</p>\n</div></div></div><div id='method-setPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.graphics.PathMeasure'>android.graphics.PathMeasure</span><br/><a href='source/PathMeasure.html#android-graphics-PathMeasure-method-setPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.graphics.PathMeasure-method-setPath' class='name expandable'>setPath</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Assign a new path, or null to have none. ...</div><div class='long'><p>Assign a new path, or null to have none.</p>\n</div></div></div></div></div></div></div>","meta":{}});