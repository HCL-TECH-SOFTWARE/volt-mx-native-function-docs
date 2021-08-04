Ext.data.JsonP.android_animation_RectEvaluator({"tagname":"class","name":"android.animation.RectEvaluator","autodetected":{},"files":[{"filename":"RectEvaluator.js","href":"RectEvaluator.html#android-animation-RectEvaluator"}],"extends":"java.lang.Object","members":[{"name":"evaluate","tagname":"method","owner":"android.animation.RectEvaluator","id":"method-evaluate","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.animation.RectEvaluator","short_doc":"implements android.animation.TypeEvaluator\n\nThis evaluator can be used to perform type interpolation between Rect val...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.animation.RectEvaluator</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/RectEvaluator.html#android-animation-RectEvaluator' target='_blank'>RectEvaluator.js</a></div></pre><div class='doc-contents'><p>implements <a href=\"#!/api/android.animation.TypeEvaluator\" rel=\"android.animation.TypeEvaluator\" class=\"docClass\">android.animation.TypeEvaluator</a></p>\n\n<p>This evaluator can be used to perform type interpolation between <code>Rect</code> values.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-evaluate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.RectEvaluator'>android.animation.RectEvaluator</span><br/><a href='source/RectEvaluator.html#android-animation-RectEvaluator-method-evaluate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.RectEvaluator-method-evaluate' class='name expandable'>evaluate</a>( <span class='pre'>fraction, startValue, endValue</span> ) : Object {android.graphics.Rect}<span class=\"signature\"></span></div><div class='description'><div class='short'>This function returns the result of linearly interpolating the start and\n end Rect values, with fraction representing...</div><div class='long'><p>This function returns the result of linearly interpolating the start and\n end Rect values, with <code>fraction</code> representing the proportion\n between the start and end values. The calculation is a simple parametric\n calculation on each of the separate components in the Rect objects\n (left, top, right, and bottom).</p>\n\n<p> <p>If RectEvaluator(android.graphics.Rect) was used to construct\n this RectEvaluator, the object returned will be the <code>reuseRect</code>\n passed into the constructor.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fraction</span> : Number<div class='sub-desc'><p>The fraction from the starting to the ending values</p>\n</div></li><li><span class='pre'>startValue</span> : Object {Rect}<div class='sub-desc'><p>The start Rect</p>\n</div></li><li><span class='pre'>endValue</span> : Object {Rect}<div class='sub-desc'><p>The end Rect</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.graphics.Rect}</span><div class='sub-desc'><p>A linear interpolation between the start and end values, given the\n         <code>fraction</code> parameter.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});