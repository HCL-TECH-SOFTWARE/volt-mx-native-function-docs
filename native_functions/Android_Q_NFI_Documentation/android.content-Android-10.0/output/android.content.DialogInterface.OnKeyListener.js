Ext.data.JsonP.android_content_DialogInterface_OnKeyListener({"tagname":"class","name":"android.content.DialogInterface.OnKeyListener","autodetected":{},"files":[{"filename":"OnKeyListener.js","href":"OnKeyListener.html#android-content-DialogInterface-OnKeyListener"}],"members":[{"name":"onKey","tagname":"method","owner":"android.content.DialogInterface.OnKeyListener","id":"method-onKey","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.content.DialogInterface.OnKeyListener","short_doc":"Interface definition for a callback to be invoked when a key event is\n dispatched to this dialog. ...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/OnKeyListener.html#android-content-DialogInterface-OnKeyListener' target='_blank'>OnKeyListener.js</a></div></pre><div class='doc-contents'><p>Interface definition for a callback to be invoked when a key event is\n dispatched to this dialog. The callback will be invoked before the key\n event is given to the dialog.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-onKey' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.DialogInterface.OnKeyListener'>android.content.DialogInterface.OnKeyListener</span><br/><a href='source/OnKeyListener.html#android-content-DialogInterface-OnKeyListener-method-onKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.DialogInterface.OnKeyListener-method-onKey' class='name expandable'>onKey</a>( <span class='pre'>dialog, keyCode, event</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when a key is dispatched to a dialog. ...</div><div class='long'><p>Called when a key is dispatched to a dialog. This allows listeners to\n get a chance to respond before the dialog.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dialog</span> : Object {DialogInterface}<div class='sub-desc'><p>the dialog the key has been dispatched to</p>\n</div></li><li><span class='pre'>keyCode</span> : Number<div class='sub-desc'><p>the code for the physical key that was pressed</p>\n</div></li><li><span class='pre'>event</span> : Object {KeyEvent}<div class='sub-desc'><p>the KeyEvent object containing full information about\n              the event</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>{@code true} if the listener has consumed the event,\n         {@code false} otherwise</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});