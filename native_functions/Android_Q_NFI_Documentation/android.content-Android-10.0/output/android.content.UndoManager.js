Ext.data.JsonP.android_content_UndoManager({"tagname":"class","name":"android.content.UndoManager","autodetected":{},"files":[{"filename":"UndoManager.js","href":"UndoManager.html#android-content-UndoManager"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"MERGE_MODE_ANY","tagname":"property","owner":"android.content.UndoManager","id":"property-MERGE_MODE_ANY","meta":{}},{"name":"MERGE_MODE_NONE","tagname":"property","owner":"android.content.UndoManager","id":"property-MERGE_MODE_NONE","meta":{}},{"name":"MERGE_MODE_UNIQUE","tagname":"property","owner":"android.content.UndoManager","id":"property-MERGE_MODE_UNIQUE","meta":{}},{"name":"addOperation","tagname":"method","owner":"android.content.UndoManager","id":"method-addOperation","meta":{}},{"name":"beginUpdate","tagname":"method","owner":"android.content.UndoManager","id":"method-beginUpdate","meta":{}},{"name":"commitState","tagname":"method","owner":"android.content.UndoManager","id":"method-commitState","meta":{}},{"name":"countRedos","tagname":"method","owner":"android.content.UndoManager","id":"method-countRedos","meta":{}},{"name":"countUndos","tagname":"method","owner":"android.content.UndoManager","id":"method-countUndos","meta":{}},{"name":"endUpdate","tagname":"method","owner":"android.content.UndoManager","id":"method-endUpdate","meta":{}},{"name":"forgetRedos","tagname":"method","owner":"android.content.UndoManager","id":"method-forgetRedos","meta":{}},{"name":"forgetUndos","tagname":"method","owner":"android.content.UndoManager","id":"method-forgetUndos","meta":{}},{"name":"getHistorySize","tagname":"method","owner":"android.content.UndoManager","id":"method-getHistorySize","meta":{}},{"name":"getLastOperation","tagname":"method","owner":"android.content.UndoManager","id":"method-getLastOperation","meta":{}},{"name":"getOwner","tagname":"method","owner":"android.content.UndoManager","id":"method-getOwner","meta":{}},{"name":"getRedoLabel","tagname":"method","owner":"android.content.UndoManager","id":"method-getRedoLabel","meta":{}},{"name":"getUndoLabel","tagname":"method","owner":"android.content.UndoManager","id":"method-getUndoLabel","meta":{}},{"name":"getUpdateNestingLevel","tagname":"method","owner":"android.content.UndoManager","id":"method-getUpdateNestingLevel","meta":{}},{"name":"hasOperation","tagname":"method","owner":"android.content.UndoManager","id":"method-hasOperation","meta":{}},{"name":"isInUndo","tagname":"method","owner":"android.content.UndoManager","id":"method-isInUndo","meta":{}},{"name":"isInUpdate","tagname":"method","owner":"android.content.UndoManager","id":"method-isInUpdate","meta":{}},{"name":"redo","tagname":"method","owner":"android.content.UndoManager","id":"method-redo","meta":{}},{"name":"restoreInstanceState","tagname":"method","owner":"android.content.UndoManager","id":"method-restoreInstanceState","meta":{}},{"name":"saveInstanceState","tagname":"method","owner":"android.content.UndoManager","id":"method-saveInstanceState","meta":{}},{"name":"setHistorySize","tagname":"method","owner":"android.content.UndoManager","id":"method-setHistorySize","meta":{}},{"name":"setUndoLabel","tagname":"method","owner":"android.content.UndoManager","id":"method-setUndoLabel","meta":{}},{"name":"suggestUndoLabel","tagname":"method","owner":"android.content.UndoManager","id":"method-suggestUndoLabel","meta":{}},{"name":"uncommitState","tagname":"method","owner":"android.content.UndoManager","id":"method-uncommitState","meta":{}},{"name":"undo","tagname":"method","owner":"android.content.UndoManager","id":"method-undo","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.content.UndoManager","short_doc":"Top-level class for managing and interacting with the global undo state for\n a document or application. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.content.UndoManager</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/UndoManager.html#android-content-UndoManager' target='_blank'>UndoManager.js</a></div></pre><div class='doc-contents'><p>Top-level class for managing and interacting with the global undo state for\n a document or application.  This class supports both undo and redo and has\n helpers for merging undoable operations together as they are performed.</p>\n\n<p> <p>A single undoable operation is represented by <a href=\"#!/api/android.content.UndoOperation\" rel=\"android.content.UndoOperation\" class=\"docClass\">android.content.UndoOperation</a> which\n apps implement to define their undo/redo behavior.  The UndoManager keeps\n a stack of undo states; each state can have one or more undo operations\n inside of it.</p></p>\n\n<p> <p>Updates to the stack must be done inside of a <a href=\"#!/api/android.content.UndoManager-method-beginUpdate\" rel=\"android.content.UndoManager-method-beginUpdate\" class=\"docClass\">beginUpdate</a>/<a href=\"#!/api/android.content.UndoManager-method-endUpdate\" rel=\"android.content.UndoManager-method-endUpdate\" class=\"docClass\">endUpdate</a>()\n pair.  During this time you can add new operations to the stack with\n <a href=\"#!/api/android.content.UndoManager-method-addOperation\" rel=\"android.content.UndoManager-method-addOperation\" class=\"docClass\">addOperation</a>, retrieve and modify existing operations with\n <a href=\"#!/api/android.content.UndoManager-method-getLastOperation\" rel=\"android.content.UndoManager-method-getLastOperation\" class=\"docClass\">getLastOperation</a>, control the label shown to the user for this operation\n with <a href=\"#!/api/android.content.UndoManager-method-setUndoLabel\" rel=\"android.content.UndoManager-method-setUndoLabel\" class=\"docClass\">setUndoLabel</a> and <a href=\"#!/api/android.content.UndoManager-method-suggestUndoLabel\" rel=\"android.content.UndoManager-method-suggestUndoLabel\" class=\"docClass\">suggestUndoLabel</a>, etc.</p></p>\n\n<p> <p>Every {link UndoOperation} is associated with an <a href=\"#!/api/android.content.UndoOwner\" rel=\"android.content.UndoOwner\" class=\"docClass\">android.content.UndoOwner</a>, which identifies\n the data it belongs to.  The owner is used to indicate how operations are dependent\n on each other -- operations with the same owner are dependent on others with the\n same owner.  For example, you may have a document with multiple embedded objects.  If the\n document itself and each embedded object use different owners, then you\n can provide undo semantics appropriate to the user's context: while within\n an embedded object, only edits to that object are seen and the user can\n undo/redo them without needing to impact edits in other objects; while\n within the larger document, all edits can be seen and the user must\n undo/redo them as a single stream.</p></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-MERGE_MODE_ANY' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-property-MERGE_MODE_ANY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-property-MERGE_MODE_ANY' class='name expandable'>MERGE_MODE_ANY</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Always allow merge with the last undo state, if possible. ...</div><div class='long'><p>Always allow merge with the last undo state, if possible.</p>\n<p>Defaults to: <code>&quot;2&quot;</code></p></div></div></div><div id='property-MERGE_MODE_NONE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-property-MERGE_MODE_NONE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-property-MERGE_MODE_NONE' class='name expandable'>MERGE_MODE_NONE</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Never merge with the last undo state. ...</div><div class='long'><p>Never merge with the last undo state.</p>\n<p>Defaults to: <code>&quot;0&quot;</code></p></div></div></div><div id='property-MERGE_MODE_UNIQUE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-property-MERGE_MODE_UNIQUE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-property-MERGE_MODE_UNIQUE' class='name expandable'>MERGE_MODE_UNIQUE</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Allow merge with the last undo state only if it contains\noperations with the caller's owner. ...</div><div class='long'><p>Allow merge with the last undo state only if it contains\noperations with the caller's owner.</p>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addOperation' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-addOperation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-addOperation' class='name expandable'>addOperation</a>( <span class='pre'>op, mergeMode</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add a new UndoOperation to the current update. ...</div><div class='long'><p>Add a new UndoOperation to the current update.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>op</span> : Object {android.content.UndoOperation}<div class='sub-desc'><p>The new operation to add.</p>\n</div></li><li><span class='pre'>mergeMode</span> : Number<div class='sub-desc'><p>May be either <a href=\"#!/api/android.content.UndoManager-property-MERGE_MODE_NONE\" rel=\"android.content.UndoManager-property-MERGE_MODE_NONE\" class=\"docClass\">MERGE_MODE_NONE</a>, <a href=\"#!/api/android.content.UndoManager-property-MERGE_MODE_UNIQUE\" rel=\"android.content.UndoManager-property-MERGE_MODE_UNIQUE\" class=\"docClass\">MERGE_MODE_UNIQUE</a>,\n or <a href=\"#!/api/android.content.UndoManager-property-MERGE_MODE_ANY\" rel=\"android.content.UndoManager-property-MERGE_MODE_ANY\" class=\"docClass\">MERGE_MODE_ANY</a>.</p>\n</div></li></ul></div></div></div><div id='method-beginUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-beginUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-beginUpdate' class='name expandable'>beginUpdate</a>( <span class='pre'>label</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Start creating a new undo state. ...</div><div class='long'><p>Start creating a new undo state.  Multiple calls to this function will nest until\n they are all matched by a later call to <a href=\"#!/api/android.content.UndoManager-method-endUpdate\" rel=\"android.content.UndoManager-method-endUpdate\" class=\"docClass\">endUpdate</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>label</span> : Object {CharSequence}<div class='sub-desc'><p>Optional user-visible label for this new undo state.</p>\n</div></li></ul></div></div></div><div id='method-commitState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-commitState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-commitState' class='name expandable'>commitState</a>( <span class='pre'>owner</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Commit the last finished undo state. ...</div><div class='long'><p>Commit the last finished undo state.  This undo state can no longer be\n modified with further <a href=\"#!/api/android.content.UndoManager-property-MERGE_MODE_UNIQUE\" rel=\"android.content.UndoManager-property-MERGE_MODE_UNIQUE\" class=\"docClass\">MERGE_MODE_UNIQUE</a> or\n <a href=\"#!/api/android.content.UndoManager-property-MERGE_MODE_ANY\" rel=\"android.content.UndoManager-property-MERGE_MODE_ANY\" class=\"docClass\">MERGE_MODE_ANY</a> merge modes.  If called while inside of an update,\n this will push any changes in the current update on to the undo stack\n and result with a fresh undo state, behaving as if <a href=\"#!/api/android.content.UndoManager-method-endUpdate\" rel=\"android.content.UndoManager-method-endUpdate\" class=\"docClass\">endUpdate</a>()\n had been called enough to unwind the current update, then the last state\n committed, and <a href=\"#!/api/android.content.UndoManager-method-beginUpdate\" rel=\"android.content.UndoManager-method-beginUpdate\" class=\"docClass\">beginUpdate</a> called to restore the update nesting.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>owner</span> : Object {UndoOwner}<div class='sub-desc'><p>The optional owner to determine whether to perform the commit.\n If this is non-null, the commit will only execute if the current top undo\n state contains an operation with the given owner.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>Returns an integer identifier for the committed undo state, which\n can later be used to try to uncommit the state to perform further edits on it.</p>\n</div></li></ul></div></div></div><div id='method-countRedos' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-countRedos' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-countRedos' class='name expandable'>countRedos</a>( <span class='pre'>owners</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the number of redo states on the undo stack. ...</div><div class='long'><p>Return the number of redo states on the undo stack.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>owners</span> : Object {android.content.UndoOwner[]}<div class='sub-desc'><p>If non-null, only those states containing an operation with one of\n the owners supplied here will be counted.</p>\n</div></li></ul></div></div></div><div id='method-countUndos' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-countUndos' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-countUndos' class='name expandable'>countUndos</a>( <span class='pre'>owners</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the number of undo states on the undo stack. ...</div><div class='long'><p>Return the number of undo states on the undo stack.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>owners</span> : Object {android.content.UndoOwner[]}<div class='sub-desc'><p>If non-null, only those states containing an operation with one of\n the owners supplied here will be counted.</p>\n</div></li></ul></div></div></div><div id='method-endUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-endUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-endUpdate' class='name expandable'>endUpdate</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Finish the creation of an undo state, matching a previous call to\n beginUpdate. ...</div><div class='long'><p>Finish the creation of an undo state, matching a previous call to\n <a href=\"#!/api/android.content.UndoManager-method-beginUpdate\" rel=\"android.content.UndoManager-method-beginUpdate\" class=\"docClass\">beginUpdate</a>.</p>\n</div></div></div><div id='method-forgetRedos' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-forgetRedos' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-forgetRedos' class='name expandable'>forgetRedos</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-forgetUndos' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-forgetUndos' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-forgetUndos' class='name expandable'>forgetUndos</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getHistorySize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-getHistorySize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-getHistorySize' class='name expandable'>getHistorySize</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the current maximum number of undo states. ...</div><div class='long'><p>Return the current maximum number of undo states.</p>\n</div></div></div><div id='method-getLastOperation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-getLastOperation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-getLastOperation' class='name expandable'>getLastOperation</a>( <span class='pre'>clazz, owner, mergeMode</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the most recent android.content.UndoOperation that was added to the update and\n has the given owner. ...</div><div class='long'><p>Return the most recent <a href=\"#!/api/android.content.UndoOperation\" rel=\"android.content.UndoOperation\" class=\"docClass\">android.content.UndoOperation</a> that was added to the update and\n has the given owner.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>clazz</span> : Object {java.lang.Class}<div class='sub-desc'><p>Optional class of the last operation to retrieve.  If null, the\n last operation regardless of class will be retrieved; if non-null, the last\n operation whose class is the same as the given class will be retrieved.</p>\n</div></li><li><span class='pre'>owner</span> : Object {UndoOwner}<div class='sub-desc'><p>Optional owner of last operation to retrieve.  If null, the last\n operation regardless of owner will be retrieved; if non-null, the last operation\n matching the given owner will be retrieved.</p>\n</div></li><li><span class='pre'>mergeMode</span> : Number<div class='sub-desc'><p>May be either <a href=\"#!/api/android.content.UndoManager-property-MERGE_MODE_NONE\" rel=\"android.content.UndoManager-property-MERGE_MODE_NONE\" class=\"docClass\">MERGE_MODE_NONE</a>, <a href=\"#!/api/android.content.UndoManager-property-MERGE_MODE_UNIQUE\" rel=\"android.content.UndoManager-property-MERGE_MODE_UNIQUE\" class=\"docClass\">MERGE_MODE_UNIQUE</a>,\n or <a href=\"#!/api/android.content.UndoManager-property-MERGE_MODE_ANY\" rel=\"android.content.UndoManager-property-MERGE_MODE_ANY\" class=\"docClass\">MERGE_MODE_ANY</a>.</p>\n</div></li></ul></div></div></div><div id='method-getOwner' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-getOwner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-getOwner' class='name expandable'>getOwner</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getRedoLabel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-getRedoLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-getRedoLabel' class='name expandable'>getRedoLabel</a>( <span class='pre'>owners</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the user-visible label for the top redo state on the stack. ...</div><div class='long'><p>Return the user-visible label for the top redo state on the stack.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>owners</span> : Object {android.content.UndoOwner[]}<div class='sub-desc'><p>If non-null, will select the top-most undo state containing an\n operation with one of the owners supplied here.</p>\n</div></li></ul></div></div></div><div id='method-getUndoLabel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-getUndoLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-getUndoLabel' class='name expandable'>getUndoLabel</a>( <span class='pre'>owners</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the user-visible label for the top undo state on the stack. ...</div><div class='long'><p>Return the user-visible label for the top undo state on the stack.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>owners</span> : Object {android.content.UndoOwner[]}<div class='sub-desc'><p>If non-null, will select the top-most undo state containing an\n operation with one of the owners supplied here.</p>\n</div></li></ul></div></div></div><div id='method-getUpdateNestingLevel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-getUpdateNestingLevel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-getUpdateNestingLevel' class='name expandable'>getUpdateNestingLevel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the number of times beginUpdate has been called without a matching\n endUpdate call. ...</div><div class='long'><p>Return the number of times <a href=\"#!/api/android.content.UndoManager-method-beginUpdate\" rel=\"android.content.UndoManager-method-beginUpdate\" class=\"docClass\">beginUpdate</a> has been called without a matching\n <a href=\"#!/api/android.content.UndoManager-method-endUpdate\" rel=\"android.content.UndoManager-method-endUpdate\" class=\"docClass\">endUpdate</a> call.</p>\n</div></div></div><div id='method-hasOperation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-hasOperation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-hasOperation' class='name expandable'>hasOperation</a>( <span class='pre'>owner</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Check whether there is an android.content.UndoOperation in the current beginUpdate\n undo state. ...</div><div class='long'><p>Check whether there is an <a href=\"#!/api/android.content.UndoOperation\" rel=\"android.content.UndoOperation\" class=\"docClass\">android.content.UndoOperation</a> in the current <a href=\"#!/api/android.content.UndoManager-method-beginUpdate\" rel=\"android.content.UndoManager-method-beginUpdate\" class=\"docClass\">beginUpdate</a>\n undo state.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>owner</span> : Object {UndoOwner}<div class='sub-desc'><p>Optional owner of the operation to look for.  If null, will succeed\n if there is any operation; if non-null, will only succeed if there is an operation\n with the given owner.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Returns true if there is a matching operation in the current undo state.</p>\n</div></li></ul></div></div></div><div id='method-isInUndo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-isInUndo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-isInUndo' class='name expandable'>isInUndo</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns true if we are currently inside of an undo/redo operation. ...</div><div class='long'><p>Returns true if we are currently inside of an undo/redo operation.  This is\n useful for editors to know whether they should be generating new undo state\n when they see edit operations happening.</p>\n</div></div></div><div id='method-isInUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-isInUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-isInUpdate' class='name expandable'>isInUpdate</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns true if currently inside of a beginUpdate. ...</div><div class='long'><p>Returns true if currently inside of a <a href=\"#!/api/android.content.UndoManager-method-beginUpdate\" rel=\"android.content.UndoManager-method-beginUpdate\" class=\"docClass\">beginUpdate</a>.</p>\n</div></div></div><div id='method-redo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-redo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-redo' class='name expandable'>redo</a>( <span class='pre'>owners, count</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Perform redo of last/top count undo states in the transient redo stack. ...</div><div class='long'><p>Perform redo of last/top <var>count</var> undo states in the transient redo stack.\n The states impacted by this can be limited through <var>owners</var>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>owners</span> : Object {android.content.UndoOwner[]}<div class='sub-desc'><p>Optional set of owners that should be impacted.  If null, all\n undo states will be visible and available for undo.  If non-null, only those\n states that contain one of the owners specified here will be visible.</p>\n</div></li><li><span class='pre'>count</span> : Number<div class='sub-desc'><p>Number of undo states to pop.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>Returns the number of undo states that were actually redone.</p>\n</div></li></ul></div></div></div><div id='method-restoreInstanceState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-restoreInstanceState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-restoreInstanceState' class='name expandable'>restoreInstanceState</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Restore an undo state previously created with saveInstanceState(Parcel). ...</div><div class='long'><p>Restore an undo state previously created with <a href=\"#!/api/android.content.UndoManager-method-saveInstanceState\" rel=\"android.content.UndoManager-method-saveInstanceState\" class=\"docClass\">saveInstanceState</a>(Parcel).  This\n will restore the UndoManager's state to almost exactly what it was at the point it had\n been previously saved; the only information not restored is the data object\n associated with each <a href=\"#!/api/android.content.UndoOwner\" rel=\"android.content.UndoOwner\" class=\"docClass\">android.content.UndoOwner</a>, which requires separate calls to\n Object) to re-associate the owner with its data.</p>\n</div></div></div><div id='method-saveInstanceState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-saveInstanceState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-saveInstanceState' class='name expandable'>saveInstanceState</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Flatten the current undo state into a Parcel object, which can later be restored\n with java.lang.ClassLoader). ...</div><div class='long'><p>Flatten the current undo state into a Parcel object, which can later be restored\n with java.lang.ClassLoader).</p>\n</div></div></div><div id='method-setHistorySize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-setHistorySize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-setHistorySize' class='name expandable'>setHistorySize</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the maximum number of undo states that will be retained. ...</div><div class='long'><p>Set the maximum number of undo states that will be retained.</p>\n</div></div></div><div id='method-setUndoLabel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-setUndoLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-setUndoLabel' class='name expandable'>setUndoLabel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Forcibly set a new for the new undo state being built within a beginUpdate. ...</div><div class='long'><p>Forcibly set a new for the new undo state being built within a <a href=\"#!/api/android.content.UndoManager-method-beginUpdate\" rel=\"android.content.UndoManager-method-beginUpdate\" class=\"docClass\">beginUpdate</a>.\n Any existing label will be replaced with this one.</p>\n</div></div></div><div id='method-suggestUndoLabel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-suggestUndoLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-suggestUndoLabel' class='name expandable'>suggestUndoLabel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set a new for the new undo state being built within a beginUpdate, but\n only if there is not a label currently set fo...</div><div class='long'><p>Set a new for the new undo state being built within a <a href=\"#!/api/android.content.UndoManager-method-beginUpdate\" rel=\"android.content.UndoManager-method-beginUpdate\" class=\"docClass\">beginUpdate</a>, but\n only if there is not a label currently set for it.</p>\n</div></div></div><div id='method-uncommitState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-uncommitState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-uncommitState' class='name expandable'>uncommitState</a>( <span class='pre'>commitId, owner</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Attempt to undo a previous call to commitState. ...</div><div class='long'><p>Attempt to undo a previous call to <a href=\"#!/api/android.content.UndoManager-method-commitState\" rel=\"android.content.UndoManager-method-commitState\" class=\"docClass\">commitState</a>.  This will work\n if the undo state at the top of the stack has the given id, and has not been\n involved in an undo operation.  Otherwise false is returned.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>commitId</span> : Number<div class='sub-desc'><p>The identifier for the state to be uncommitted, as returned\n by <a href=\"#!/api/android.content.UndoManager-method-commitState\" rel=\"android.content.UndoManager-method-commitState\" class=\"docClass\">commitState</a>.</p>\n</div></li><li><span class='pre'>owner</span> : Object {UndoOwner}<div class='sub-desc'><p>Optional owner that must appear in the committed state.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Returns true if the uncommit is successful, else false.</p>\n</div></li></ul></div></div></div><div id='method-undo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.UndoManager'>android.content.UndoManager</span><br/><a href='source/UndoManager.html#android-content-UndoManager-method-undo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.UndoManager-method-undo' class='name expandable'>undo</a>( <span class='pre'>owners, count</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Perform undo of last/top count undo states. ...</div><div class='long'><p>Perform undo of last/top <var>count</var> undo states.  The states impacted\n by this can be limited through <var>owners</var>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>owners</span> : Object {android.content.UndoOwner[]}<div class='sub-desc'><p>Optional set of owners that should be impacted.  If null, all\n undo states will be visible and available for undo.  If non-null, only those\n states that contain one of the owners specified here will be visible.</p>\n</div></li><li><span class='pre'>count</span> : Number<div class='sub-desc'><p>Number of undo states to pop.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>Returns the number of undo states that were actually popped.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});