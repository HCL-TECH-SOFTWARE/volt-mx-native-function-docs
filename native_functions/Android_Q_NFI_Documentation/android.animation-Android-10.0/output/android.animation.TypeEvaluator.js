Ext.data.JsonP.android_animation_TypeEvaluator({"tagname":"class","name":"android.animation.TypeEvaluator","autodetected":{},"files":[{"filename":"TypeEvaluator.js","href":"TypeEvaluator.html#android-animation-TypeEvaluator"}],"members":[{"name":"evaluate","tagname":"method","owner":"android.animation.TypeEvaluator","id":"method-evaluate","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.animation.TypeEvaluator","short_doc":"Interface for use with the android.animation.ValueAnimator.setEvaluator(TypeEvaluator) function. ...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/TypeEvaluator.html#android-animation-TypeEvaluator' target='_blank'>TypeEvaluator.js</a></div></pre><div class='doc-contents'><p>Interface for use with the android.animation.ValueAnimator.setEvaluator(TypeEvaluator) function. Evaluators\n allow developers to create animations on arbitrary property types, by allowing them to supply\n custom evaluators for types that are not automatically understood and used by the animation\n system.</p>\n\n<p> @see ValueAnimator#setEvaluator(TypeEvaluator)</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-evaluate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.TypeEvaluator'>android.animation.TypeEvaluator</span><br/><a href='source/TypeEvaluator.html#android-animation-TypeEvaluator-method-evaluate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.TypeEvaluator-method-evaluate' class='name expandable'>evaluate</a>( <span class='pre'>fraction, startValue, endValue</span> ) : Object {java.lang.Object}<span class=\"signature\"></span></div><div class='description'><div class='short'>This function returns the result of linearly interpolating the start and end values, with\n fraction representing the ...</div><div class='long'><p>This function returns the result of linearly interpolating the start and end values, with\n <code>fraction</code> representing the proportion between the start and end values. The\n calculation is a simple parametric calculation: <code>result = x0 + t * (x1 - x0)</code>,\n where <code>x0</code> is <code>startValue</code>, <code>x1</code> is <code>endValue</code>,\n and <code>t</code> is <code>fraction</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fraction</span> : Number<div class='sub-desc'><p>The fraction from the starting to the ending values</p>\n</div></li><li><span class='pre'>startValue</span> : Object {Object}<div class='sub-desc'><p>The start value.</p>\n</div></li><li><span class='pre'>endValue</span> : Object {Object}<div class='sub-desc'><p>The end value.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {java.lang.Object}</span><div class='sub-desc'><p>A linear interpolation between the start and end values, given the\n         <code>fraction</code> parameter.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});