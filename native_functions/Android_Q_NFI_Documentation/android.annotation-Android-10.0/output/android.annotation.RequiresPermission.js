Ext.data.JsonP.android_annotation_RequiresPermission({"tagname":"class","name":"android.annotation.RequiresPermission","autodetected":{},"files":[{"filename":"RequiresPermission.js","href":"RequiresPermission.html#android-annotation-RequiresPermission"}],"hide":true,"members":[{"name":"allOf","tagname":"method","owner":"android.annotation.RequiresPermission","id":"method-allOf","meta":{}},{"name":"anyOf","tagname":"method","owner":"android.annotation.RequiresPermission","id":"method-anyOf","meta":{}},{"name":"conditional","tagname":"method","owner":"android.annotation.RequiresPermission","id":"method-conditional","meta":{}},{"name":"value","tagname":"method","owner":"android.annotation.RequiresPermission","id":"method-value","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.annotation.RequiresPermission","short_doc":"implements java.lang.annotation.Annotation\n\n Denotes that the annotated element requires (or may require) one or more...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/RequiresPermission.html#android-annotation-RequiresPermission' target='_blank'>RequiresPermission.js</a></div></pre><div class='doc-contents'><p>implements java.lang.annotation.Annotation</p>\n\n<p> Denotes that the annotated element requires (or may require) one or more permissions.\n <p/>\n Example of requiring a single permission:\n <pre>{@code\n   {@literal }RequiresPermission(Manifest.permission.SET_WALLPAPER)\n   public abstract void setWallpaper(Bitmap bitmap) throws IOException;</pre></p>\n\n<p>   {@literal }RequiresPermission(ACCESS_COARSE_LOCATION)\n   public abstract Location getLastKnownLocation(String provider);\n }\n Example of requiring at least one permission from a set:\n <pre>{@code\n   {@literal }RequiresPermission(anyOf = {ACCESS_COARSE_LOCATION, ACCESS_FINE_LOCATION})\n   public abstract Location getLastKnownLocation(String provider);\n }</pre>\n Example of requiring multiple permissions:\n <pre>{@code\n   {@literal }RequiresPermission(allOf = {ACCESS_COARSE_LOCATION, ACCESS_FINE_LOCATION})\n   public abstract Location getLastKnownLocation(String provider);\n }</pre>\n Example of requiring separate read and write permissions for a content provider:\n <pre>{@code\n   {@literal }RequiresPermission.Read(@RequiresPermission(READ_HISTORY_BOOKMARKS))\n   {@literal }RequiresPermission.Write(@RequiresPermission(WRITE_HISTORY_BOOKMARKS))\n   public static final Uri BOOKMARKS_URI = Uri.parse(\"content://browser/bookmarks\");\n }</pre>\n <p>\n When specified on a parameter, the annotation indicates that the method requires\n a permission which depends on the value of the parameter. For example, consider\n android.app.Activity.startActivity(Intent):\n <pre>{@code\n   public void startActivity(@RequiresPermission Intent intent) { ... }\n }</pre>\n Notice how there are no actual permission names listed in the annotation. The actual\n permissions required will depend on the particular intent passed in. For example,\n the code may look like this:\n <pre>{@code\n   Intent intent = new Intent(Intent.ACTION_CALL);\n   startActivity(intent);\n }</pre>\n and the actual permission requirement for this particular intent is described on\n the Intent name itself:\n <pre>{@code\n   {@literal }RequiresPermission(Manifest.permission.CALL_PHONE)\n   public static final String ACTION_CALL = \"android.intent.action.CALL\";\n }</pre></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-allOf' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.annotation.RequiresPermission'>android.annotation.RequiresPermission</span><br/><a href='source/RequiresPermission.html#android-annotation-RequiresPermission-method-allOf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.annotation.RequiresPermission-method-allOf' class='name expandable'>allOf</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Specifies a list of permission names that are all required. ...</div><div class='long'><p>Specifies a list of permission names that are all required.\n <p>\n If specified, <a href=\"#!/api/android.annotation.RequiresPermission-method-anyOf\" rel=\"android.annotation.RequiresPermission-method-anyOf\" class=\"docClass\">anyOf</a>() and <a href=\"#!/api/android.annotation.RequiresPermission-method-value\" rel=\"android.annotation.RequiresPermission-method-value\" class=\"docClass\">value</a>() must both be null.</p>\n</div></div></div><div id='method-anyOf' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.annotation.RequiresPermission'>android.annotation.RequiresPermission</span><br/><a href='source/RequiresPermission.html#android-annotation-RequiresPermission-method-anyOf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.annotation.RequiresPermission-method-anyOf' class='name expandable'>anyOf</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Specifies a list of permission names where at least one is required\n \n If specified, allOf() and value() must both be...</div><div class='long'><p>Specifies a list of permission names where at least one is required\n <p>\n If specified, <a href=\"#!/api/android.annotation.RequiresPermission-method-allOf\" rel=\"android.annotation.RequiresPermission-method-allOf\" class=\"docClass\">allOf</a>() and <a href=\"#!/api/android.annotation.RequiresPermission-method-value\" rel=\"android.annotation.RequiresPermission-method-value\" class=\"docClass\">value</a>() must both be null.</p>\n</div></div></div><div id='method-conditional' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.annotation.RequiresPermission'>android.annotation.RequiresPermission</span><br/><a href='source/RequiresPermission.html#android-annotation-RequiresPermission-method-conditional' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.annotation.RequiresPermission-method-conditional' class='name expandable'>conditional</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>If true, the permission may not be required in all cases (e.g. ...</div><div class='long'><p>If true, the permission may not be required in all cases (e.g. it may only be\n enforced on certain platforms, or for certain call parameters, etc.</p>\n</div></div></div><div id='method-value' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.annotation.RequiresPermission'>android.annotation.RequiresPermission</span><br/><a href='source/RequiresPermission.html#android-annotation-RequiresPermission-method-value' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.annotation.RequiresPermission-method-value' class='name expandable'>value</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>The name of the permission that is required, if precisely one permission\n is required. ...</div><div class='long'><p>The name of the permission that is required, if precisely one permission\n is required. If more than one permission is required, specify either\n <a href=\"#!/api/android.annotation.RequiresPermission-method-allOf\" rel=\"android.annotation.RequiresPermission-method-allOf\" class=\"docClass\">allOf</a>() or <a href=\"#!/api/android.annotation.RequiresPermission-method-anyOf\" rel=\"android.annotation.RequiresPermission-method-anyOf\" class=\"docClass\">anyOf</a>() instead.\n <p>\n If specified, <a href=\"#!/api/android.annotation.RequiresPermission-method-anyOf\" rel=\"android.annotation.RequiresPermission-method-anyOf\" class=\"docClass\">anyOf</a>() and <a href=\"#!/api/android.annotation.RequiresPermission-method-allOf\" rel=\"android.annotation.RequiresPermission-method-allOf\" class=\"docClass\">allOf</a>() must both be null.</p>\n</div></div></div></div></div></div></div>","meta":{}});