Ext.data.JsonP.android_annotation_IntDef({"tagname":"class","name":"android.annotation.IntDef","autodetected":{},"files":[{"filename":"IntDef.js","href":"IntDef.html#android-annotation-IntDef"}],"hide":true,"members":[{"name":"flag","tagname":"method","owner":"android.annotation.IntDef","id":"method-flag","meta":{}},{"name":"prefix","tagname":"method","owner":"android.annotation.IntDef","id":"method-prefix","meta":{}},{"name":"suffix","tagname":"method","owner":"android.annotation.IntDef","id":"method-suffix","meta":{}},{"name":"value","tagname":"method","owner":"android.annotation.IntDef","id":"method-value","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.annotation.IntDef","short_doc":"implements java.lang.annotation.Annotation\n\n Denotes that the annotated element of integer type, represents\n a logica...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/IntDef.html#android-annotation-IntDef' target='_blank'>IntDef.js</a></div></pre><div class='doc-contents'><p>implements java.lang.annotation.Annotation</p>\n\n<p> Denotes that the annotated element of integer type, represents\n a logical type and that its value should be one of the explicitly\n named constants. If the <a href=\"#!/api/android.annotation.IntDef-method-flag\" rel=\"android.annotation.IntDef-method-flag\" class=\"docClass\">flag</a>() attribute is set to true,\n multiple constants can be combined.\n <p></p>\n\n<pre><code>  &#64;Retention(SOURCE)\n  &#64;IntDef({NAVIGATION_MODE_STANDARD, NAVIGATION_MODE_LIST, NAVIGATION_MODE_TABS})\n  public @interface NavigationMode {}\n  public static final int NAVIGATION_MODE_STANDARD = 0;\n  public static final int NAVIGATION_MODE_LIST = 1;\n  public static final int NAVIGATION_MODE_TABS = 2;\n  ...\n  public abstract void setNavigationMode(@NavigationMode int mode);\n  &#64;NavigationMode\n  public abstract int getNavigationMode();\n </code></pre>\n\n\n<p> For a flag, set the flag attribute:</p>\n\n<pre><code>  &#64;IntDef(\n      flag = true,\n      value = {NAVIGATION_MODE_STANDARD, NAVIGATION_MODE_LIST, NAVIGATION_MODE_TABS})\n </code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-flag' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.annotation.IntDef'>android.annotation.IntDef</span><br/><a href='source/IntDef.html#android-annotation-IntDef-method-flag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.annotation.IntDef-method-flag' class='name expandable'>flag</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Defines whether the constants can be used as a flag, or just as an enum (the default) ...</div><div class='long'><p>Defines whether the constants can be used as a flag, or just as an enum (the default)</p>\n</div></div></div><div id='method-prefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.annotation.IntDef'>android.annotation.IntDef</span><br/><a href='source/IntDef.html#android-annotation-IntDef-method-prefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.annotation.IntDef-method-prefix' class='name expandable'>prefix</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Defines the constant prefix for this element ...</div><div class='long'><p>Defines the constant prefix for this element</p>\n</div></div></div><div id='method-suffix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.annotation.IntDef'>android.annotation.IntDef</span><br/><a href='source/IntDef.html#android-annotation-IntDef-method-suffix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.annotation.IntDef-method-suffix' class='name expandable'>suffix</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Defines the constant suffix for this element ...</div><div class='long'><p>Defines the constant suffix for this element</p>\n</div></div></div><div id='method-value' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.annotation.IntDef'>android.annotation.IntDef</span><br/><a href='source/IntDef.html#android-annotation-IntDef-method-value' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.annotation.IntDef-method-value' class='name expandable'>value</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Defines the allowed constants for this element ...</div><div class='long'><p>Defines the allowed constants for this element</p>\n</div></div></div></div></div></div></div>","meta":{}});