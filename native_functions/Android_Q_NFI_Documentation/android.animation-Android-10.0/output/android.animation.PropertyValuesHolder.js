Ext.data.JsonP.android_animation_PropertyValuesHolder({"tagname":"class","name":"android.animation.PropertyValuesHolder","autodetected":{},"files":[{"filename":"PropertyValuesHolder.js","href":"PropertyValuesHolder.html#android-animation-PropertyValuesHolder"}],"extends":"java.lang.Object","members":[{"name":"clone","tagname":"method","owner":"android.animation.PropertyValuesHolder","id":"method-clone","meta":{}},{"name":"getPropertyName","tagname":"method","owner":"android.animation.PropertyValuesHolder","id":"method-getPropertyName","meta":{}},{"name":"ofFloat","tagname":"method","owner":"android.animation.PropertyValuesHolder","id":"method-ofFloat","meta":{}},{"name":"ofInt","tagname":"method","owner":"android.animation.PropertyValuesHolder","id":"method-ofInt","meta":{}},{"name":"ofKeyframe","tagname":"method","owner":"android.animation.PropertyValuesHolder","id":"method-ofKeyframe","meta":{}},{"name":"ofMultiFloat","tagname":"method","owner":"android.animation.PropertyValuesHolder","id":"method-ofMultiFloat","meta":{}},{"name":"ofMultiInt","tagname":"method","owner":"android.animation.PropertyValuesHolder","id":"method-ofMultiInt","meta":{}},{"name":"ofObject","tagname":"method","owner":"android.animation.PropertyValuesHolder","id":"method-ofObject","meta":{}},{"name":"setConverter","tagname":"method","owner":"android.animation.PropertyValuesHolder","id":"method-setConverter","meta":{}},{"name":"setEvaluator","tagname":"method","owner":"android.animation.PropertyValuesHolder","id":"method-setEvaluator","meta":{}},{"name":"setFloatValues","tagname":"method","owner":"android.animation.PropertyValuesHolder","id":"method-setFloatValues","meta":{}},{"name":"setIntValues","tagname":"method","owner":"android.animation.PropertyValuesHolder","id":"method-setIntValues","meta":{}},{"name":"setKeyframes","tagname":"method","owner":"android.animation.PropertyValuesHolder","id":"method-setKeyframes","meta":{}},{"name":"setObjectValues","tagname":"method","owner":"android.animation.PropertyValuesHolder","id":"method-setObjectValues","meta":{}},{"name":"setProperty","tagname":"method","owner":"android.animation.PropertyValuesHolder","id":"method-setProperty","meta":{}},{"name":"setPropertyName","tagname":"method","owner":"android.animation.PropertyValuesHolder","id":"method-setPropertyName","meta":{}},{"name":"toString","tagname":"method","owner":"android.animation.PropertyValuesHolder","id":"method-toString","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.animation.PropertyValuesHolder","short_doc":"implements java.lang.Cloneable\n\nThis class holds information about a property and the values that that property\n shou...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.animation.PropertyValuesHolder</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder' target='_blank'>PropertyValuesHolder.js</a></div></pre><div class='doc-contents'><p>implements java.lang.Cloneable</p>\n\n<p>This class holds information about a property and the values that that property\n should take on during an animation. PropertyValuesHolder objects can be used to create\n animations with ValueAnimator or ObjectAnimator that operate on several different properties\n in parallel.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clone' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.PropertyValuesHolder'>android.animation.PropertyValuesHolder</span><br/><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.PropertyValuesHolder-method-clone' class='name expandable'>clone</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getPropertyName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.PropertyValuesHolder'>android.animation.PropertyValuesHolder</span><br/><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder-method-getPropertyName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.PropertyValuesHolder-method-getPropertyName' class='name expandable'>getPropertyName</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the name of the property that will be animated. ...</div><div class='long'><p>Gets the name of the property that will be animated. This name will be used to derive\n a setter function that will be called to set animated values.\n For example, a property name of <code>foo</code> will result\n in a call to the function <code>setFoo()</code> on the target object. If either\n <code>valueFrom</code> or <code>valueTo</code> is null, then a getter function will\n also be derived and called.</p>\n</div></div></div><div id='method-ofFloat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.PropertyValuesHolder'>android.animation.PropertyValuesHolder</span><br/><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder-method-ofFloat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.PropertyValuesHolder-method-ofFloat' class='name expandable'>ofFloat</a>( <span class='pre'>property, values</span> ) : Object {android.animation.PropertyValuesHolder}<span class=\"signature\"></span></div><div class='description'><div class='short'>Constructs and returns a PropertyValuesHolder with a given property and\n set of float values. ...</div><div class='long'><p>Constructs and returns a PropertyValuesHolder with a given property and\n set of float values.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>property</span> : Object {android.util.Property}<div class='sub-desc'><p>The property being animated. Should not be null.</p>\n</div></li><li><span class='pre'>values</span> : Object {float[]}<div class='sub-desc'><p>The values that the property will animate between.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.animation.PropertyValuesHolder}</span><div class='sub-desc'><p>PropertyValuesHolder The constructed PropertyValuesHolder object.</p>\n</div></li></ul></div></div></div><div id='method-ofInt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.PropertyValuesHolder'>android.animation.PropertyValuesHolder</span><br/><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder-method-ofInt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.PropertyValuesHolder-method-ofInt' class='name expandable'>ofInt</a>( <span class='pre'>property, values</span> ) : Object {android.animation.PropertyValuesHolder}<span class=\"signature\"></span></div><div class='description'><div class='short'>Constructs and returns a PropertyValuesHolder with a given property and\n set of int values. ...</div><div class='long'><p>Constructs and returns a PropertyValuesHolder with a given property and\n set of int values.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>property</span> : Object {android.util.Property}<div class='sub-desc'><p>The property being animated. Should not be null.</p>\n</div></li><li><span class='pre'>values</span> : Object {int[]}<div class='sub-desc'><p>The values that the property will animate between.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.animation.PropertyValuesHolder}</span><div class='sub-desc'><p>PropertyValuesHolder The constructed PropertyValuesHolder object.</p>\n</div></li></ul></div></div></div><div id='method-ofKeyframe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.PropertyValuesHolder'>android.animation.PropertyValuesHolder</span><br/><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder-method-ofKeyframe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.PropertyValuesHolder-method-ofKeyframe' class='name expandable'>ofKeyframe</a>( <span class='pre'>property, values</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Constructs and returns a PropertyValuesHolder object with the specified property and set\n of values. ...</div><div class='long'><p>Constructs and returns a PropertyValuesHolder object with the specified property and set\n of values. These values can be of any type, but the type should be consistent so that\n an appropriate <a href=\"#!/api/android.animation.TypeEvaluator\" rel=\"android.animation.TypeEvaluator\" class=\"docClass\">android.animation.TypeEvaluator</a> can be found that matches\n the common type.\n <p>If there is only one value, it is assumed to be the end value of an animation,\n and an initial value will be derived, if possible, by calling the property's\n android.util.Property.get(Object) function.\n Also, if any value is null, the value will be filled in when the animation\n starts in the same way. This mechanism of automatically getting null values only works\n if the PropertyValuesHolder object is used in conjunction with\n <a href=\"#!/api/android.animation.ObjectAnimator\" rel=\"android.animation.ObjectAnimator\" class=\"docClass\">android.animation.ObjectAnimator</a>, since otherwise PropertyValuesHolder has\n no way of determining what the value should be.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>property</span> : Object {android.util.Property}<div class='sub-desc'><p>The property associated with this set of values. Should not be null.</p>\n</div></li><li><span class='pre'>values</span> : Object {android.animation.Keyframe[]}<div class='sub-desc'><p>The set of values to animate between.</p>\n</div></li></ul></div></div></div><div id='method-ofMultiFloat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.PropertyValuesHolder'>android.animation.PropertyValuesHolder</span><br/><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder-method-ofMultiFloat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.PropertyValuesHolder-method-ofMultiFloat' class='name expandable'>ofMultiFloat</a>( <span class='pre'>propertyName, converter, evaluator, values</span> ) : Object {android.animation.PropertyValuesHolder}<span class=\"signature\"></span></div><div class='description'><div class='short'>Constructs and returns a PropertyValuesHolder object with the specified property name or\n setter name for use in a mu...</div><div class='long'><p>Constructs and returns a PropertyValuesHolder object with the specified property name or\n setter name for use in a multi-float setter function using ObjectAnimator. The values can be\n of any type, but the type should be consistent so that the supplied\n <a href=\"#!/api/android.animation.TypeEvaluator\" rel=\"android.animation.TypeEvaluator\" class=\"docClass\">android.animation.TypeEvaluator</a> can be used to to evaluate the animated value. The\n <code>converter</code> converts the values to parameters in the setter function.</p>\n\n<p> <p>At least two values must be supplied, a start and an end value.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>propertyName</span> : String<div class='sub-desc'><p>The name of the property to associate with the set of values. This\n                     may also be the complete name of a setter function.</p>\n</div></li><li><span class='pre'>converter</span> : Object {android.animation.TypeConverter}<div class='sub-desc'><p>Converts <code>values</code> into float parameters for the setter.\n                     Can be null if the Keyframes have float[] values.</p>\n</div></li><li><span class='pre'>evaluator</span> : Object {android.animation.TypeEvaluator}<div class='sub-desc'><p>Used to interpolate between values.</p>\n</div></li><li><span class='pre'>values</span> : Object {android.animation.Keyframe[]}<div class='sub-desc'><p>The values at specific fractional times to evaluate between</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.animation.PropertyValuesHolder}</span><div class='sub-desc'><p>A PropertyValuesHolder for a multi-float parameter setter.</p>\n</div></li></ul></div></div></div><div id='method-ofMultiInt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.PropertyValuesHolder'>android.animation.PropertyValuesHolder</span><br/><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder-method-ofMultiInt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.PropertyValuesHolder-method-ofMultiInt' class='name expandable'>ofMultiInt</a>( <span class='pre'>propertyName, converter, evaluator, values</span> ) : Object {android.animation.PropertyValuesHolder}<span class=\"signature\"></span></div><div class='description'><div class='short'>Constructs and returns a PropertyValuesHolder object with the specified property name or\n setter name for use in a mu...</div><div class='long'><p>Constructs and returns a PropertyValuesHolder object with the specified property name or\n setter name for use in a multi-int setter function using ObjectAnimator. The values can be\n of any type, but the type should be consistent so that the supplied\n <a href=\"#!/api/android.animation.TypeEvaluator\" rel=\"android.animation.TypeEvaluator\" class=\"docClass\">android.animation.TypeEvaluator</a> can be used to to evaluate the animated value. The\n <code>converter</code> converts the values to parameters in the setter function.</p>\n\n<p> <p>At least two values must be supplied, a start and an end value.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>propertyName</span> : String<div class='sub-desc'><p>The name of the property to associate with the set of values. This\n                     may also be the complete name of a setter function.</p>\n</div></li><li><span class='pre'>converter</span> : Object {android.animation.TypeConverter}<div class='sub-desc'><p>Converts <code>values</code> into int parameters for the setter.\n                     Can be null if the Keyframes have int[] values.</p>\n</div></li><li><span class='pre'>evaluator</span> : Object {android.animation.TypeEvaluator}<div class='sub-desc'><p>Used to interpolate between values.</p>\n</div></li><li><span class='pre'>values</span> : Object {android.animation.Keyframe[]}<div class='sub-desc'><p>The values at specific fractional times to evaluate between</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.animation.PropertyValuesHolder}</span><div class='sub-desc'><p>A PropertyValuesHolder for a multi-int parameter setter.</p>\n</div></li></ul></div></div></div><div id='method-ofObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.PropertyValuesHolder'>android.animation.PropertyValuesHolder</span><br/><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder-method-ofObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.PropertyValuesHolder-method-ofObject' class='name expandable'>ofObject</a>( <span class='pre'>property, converter, path</span> ) : Object {android.animation.PropertyValuesHolder}<span class=\"signature\"></span></div><div class='description'><div class='short'>Constructs and returns a PropertyValuesHolder with a given property and\n a Path along which the values should be anim...</div><div class='long'><p>Constructs and returns a PropertyValuesHolder with a given property and\n a Path along which the values should be animated. This variant supports a\n <code>TypeConverter</code> to convert from <code>PointF</code> to the target\n type.</p>\n\n<p> <p>The PointF passed to <code>converter</code> or <code>property</code>, if\n <code>converter</code> is <code>null</code>, is reused on each animation frame and should\n not be stored by the setter or TypeConverter.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>property</span> : Object {android.util.Property}<div class='sub-desc'><p>The property being animated. Should not be null.</p>\n</div></li><li><span class='pre'>converter</span> : Object {android.animation.TypeConverter}<div class='sub-desc'><p>Converts a PointF to the type associated with the setter. May be\n                  null if conversion is unnecessary.</p>\n</div></li><li><span class='pre'>path</span> : Object {Path}<div class='sub-desc'><p>The Path along which the values should be animated.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.animation.PropertyValuesHolder}</span><div class='sub-desc'><p>PropertyValuesHolder The constructed PropertyValuesHolder object.</p>\n</div></li></ul></div></div></div><div id='method-setConverter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.PropertyValuesHolder'>android.animation.PropertyValuesHolder</span><br/><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder-method-setConverter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.PropertyValuesHolder-method-setConverter' class='name expandable'>setConverter</a>( <span class='pre'>converter</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the converter to convert from the values type to the setter's parameter type. ...</div><div class='long'><p>Sets the converter to convert from the values type to the setter's parameter type.\n If only one value is supplied, <var>converter</var> must be a\n <a href=\"#!/api/android.animation.BidirectionalTypeConverter\" rel=\"android.animation.BidirectionalTypeConverter\" class=\"docClass\">android.animation.BidirectionalTypeConverter</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>converter</span> : Object {android.animation.TypeConverter}<div class='sub-desc'><p>The converter to use to convert values.</p>\n</div></li></ul></div></div></div><div id='method-setEvaluator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.PropertyValuesHolder'>android.animation.PropertyValuesHolder</span><br/><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder-method-setEvaluator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.PropertyValuesHolder-method-setEvaluator' class='name expandable'>setEvaluator</a>( <span class='pre'>evaluator</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>The TypeEvaluator will be automatically determined based on the type of values\n supplied to PropertyValuesHolder. ...</div><div class='long'><p>The TypeEvaluator will be automatically determined based on the type of values\n supplied to PropertyValuesHolder. The evaluator can be manually set, however, if so\n desired. This may be important in cases where either the type of the values supplied\n do not match the way that they should be interpolated between, or if the values\n are of a custom type or one not currently understood by the animation system. Currently,\n only values of type float and int (and their Object equivalents: Float\n and Integer) are  correctly interpolated; all other types require setting a TypeEvaluator.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evaluator</span> : Object {android.animation.TypeEvaluator}<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setFloatValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.PropertyValuesHolder'>android.animation.PropertyValuesHolder</span><br/><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder-method-setFloatValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.PropertyValuesHolder-method-setFloatValues' class='name expandable'>setFloatValues</a>( <span class='pre'>values</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the animated values for this object to this set of floats. ...</div><div class='long'><p>Set the animated values for this object to this set of floats.\n If there is only one value, it is assumed to be the end value of an animation,\n and an initial value will be derived, if possible, by calling a getter function\n on the object. Also, if any value is null, the value will be filled in when the animation\n starts in the same way. This mechanism of automatically getting null values only works\n if the PropertyValuesHolder object is used in conjunction\n <a href=\"#!/api/android.animation.ObjectAnimator\" rel=\"android.animation.ObjectAnimator\" class=\"docClass\">android.animation.ObjectAnimator</a>, and with a getter function\n derived automatically from <code>propertyName</code>, since otherwise PropertyValuesHolder has\n no way of determining what the value should be.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Object {float[]}<div class='sub-desc'><p>One or more values that the animation will animate between.</p>\n</div></li></ul></div></div></div><div id='method-setIntValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.PropertyValuesHolder'>android.animation.PropertyValuesHolder</span><br/><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder-method-setIntValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.PropertyValuesHolder-method-setIntValues' class='name expandable'>setIntValues</a>( <span class='pre'>values</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the animated values for this object to this set of ints. ...</div><div class='long'><p>Set the animated values for this object to this set of ints.\n If there is only one value, it is assumed to be the end value of an animation,\n and an initial value will be derived, if possible, by calling a getter function\n on the object. Also, if any value is null, the value will be filled in when the animation\n starts in the same way. This mechanism of automatically getting null values only works\n if the PropertyValuesHolder object is used in conjunction\n <a href=\"#!/api/android.animation.ObjectAnimator\" rel=\"android.animation.ObjectAnimator\" class=\"docClass\">android.animation.ObjectAnimator</a>, and with a getter function\n derived automatically from <code>propertyName</code>, since otherwise PropertyValuesHolder has\n no way of determining what the value should be.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Object {int[]}<div class='sub-desc'><p>One or more values that the animation will animate between.</p>\n</div></li></ul></div></div></div><div id='method-setKeyframes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.PropertyValuesHolder'>android.animation.PropertyValuesHolder</span><br/><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder-method-setKeyframes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.PropertyValuesHolder-method-setKeyframes' class='name expandable'>setKeyframes</a>( <span class='pre'>values</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the animated values for this object to this set of Keyframes. ...</div><div class='long'><p>Set the animated values for this object to this set of Keyframes.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Object {android.animation.Keyframe[]}<div class='sub-desc'><p>One or more values that the animation will animate between.</p>\n</div></li></ul></div></div></div><div id='method-setObjectValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.PropertyValuesHolder'>android.animation.PropertyValuesHolder</span><br/><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder-method-setObjectValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.PropertyValuesHolder-method-setObjectValues' class='name expandable'>setObjectValues</a>( <span class='pre'>values</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the animated values for this object to this set of Objects. ...</div><div class='long'><p>Set the animated values for this object to this set of Objects.\n If there is only one value, it is assumed to be the end value of an animation,\n and an initial value will be derived, if possible, by calling a getter function\n on the object. Also, if any value is null, the value will be filled in when the animation\n starts in the same way. This mechanism of automatically getting null values only works\n if the PropertyValuesHolder object is used in conjunction\n <a href=\"#!/api/android.animation.ObjectAnimator\" rel=\"android.animation.ObjectAnimator\" class=\"docClass\">android.animation.ObjectAnimator</a>, and with a getter function\n derived automatically from <code>propertyName</code>, since otherwise PropertyValuesHolder has\n no way of determining what the value should be.</p>\n\n<p> <p><strong>Note:</strong> The Object values are stored as references to the original\n objects, which means that changes to those objects after this method is called will\n affect the values on the PropertyValuesHolder. If the objects will be mutated externally\n after this method is called, callers should pass a copy of those objects instead.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Object {java.lang.Object[]}<div class='sub-desc'><p>One or more values that the animation will animate between.</p>\n</div></li></ul></div></div></div><div id='method-setProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.PropertyValuesHolder'>android.animation.PropertyValuesHolder</span><br/><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder-method-setProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.PropertyValuesHolder-method-setProperty' class='name expandable'>setProperty</a>( <span class='pre'>property</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the property that will be animated. ...</div><div class='long'><p>Sets the property that will be animated.</p>\n\n<p> <p>Note that if this PropertyValuesHolder object is used with ObjectAnimator, the property\n must exist on the target object specified in that ObjectAnimator.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>property</span> : Object {android.util.Property}<div class='sub-desc'><p>The property being animated.</p>\n</div></li></ul></div></div></div><div id='method-setPropertyName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.PropertyValuesHolder'>android.animation.PropertyValuesHolder</span><br/><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder-method-setPropertyName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.PropertyValuesHolder-method-setPropertyName' class='name expandable'>setPropertyName</a>( <span class='pre'>propertyName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the name of the property that will be animated. ...</div><div class='long'><p>Sets the name of the property that will be animated. This name is used to derive\n a setter function that will be called to set animated values.\n For example, a property name of <code>foo</code> will result\n in a call to the function <code>setFoo()</code> on the target object. If either\n <code>valueFrom</code> or <code>valueTo</code> is null, then a getter function will\n also be derived and called.</p>\n\n<p> <p>Note that the setter function derived from this property name\n must take the same parameter type as the\n <code>valueFrom</code> and <code>valueTo</code> properties, otherwise the call to\n the setter function will fail.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>propertyName</span> : String<div class='sub-desc'><p>The name of the property being animated.</p>\n</div></li></ul></div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.animation.PropertyValuesHolder'>android.animation.PropertyValuesHolder</span><br/><a href='source/PropertyValuesHolder.html#android-animation-PropertyValuesHolder-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.animation.PropertyValuesHolder-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});