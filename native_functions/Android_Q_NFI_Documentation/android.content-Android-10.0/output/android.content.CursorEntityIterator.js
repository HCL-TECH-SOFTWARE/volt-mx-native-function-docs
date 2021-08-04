Ext.data.JsonP.android_content_CursorEntityIterator({"tagname":"class","name":"android.content.CursorEntityIterator","autodetected":{},"files":[{"filename":"CursorEntityIterator.js","href":"CursorEntityIterator.html#android-content-CursorEntityIterator"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"close","tagname":"method","owner":"android.content.CursorEntityIterator","id":"method-close","meta":{}},{"name":"getEntityAndIncrementCursor","tagname":"method","owner":"android.content.CursorEntityIterator","id":"method-getEntityAndIncrementCursor","meta":{}},{"name":"hasNext","tagname":"method","owner":"android.content.CursorEntityIterator","id":"method-hasNext","meta":{}},{"name":"next","tagname":"method","owner":"android.content.CursorEntityIterator","id":"method-next","meta":{}},{"name":"remove","tagname":"method","owner":"android.content.CursorEntityIterator","id":"method-remove","meta":{}},{"name":"reset","tagname":"method","owner":"android.content.CursorEntityIterator","id":"method-reset","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.content.CursorEntityIterator","short_doc":"implements android.content.EntityIterator\n\nAbstract implementation of EntityIterator that makes it easy to wrap a cur...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.content.CursorEntityIterator</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/CursorEntityIterator.html#android-content-CursorEntityIterator' target='_blank'>CursorEntityIterator.js</a></div></pre><div class='doc-contents'><p>implements <a href=\"#!/api/android.content.EntityIterator\" rel=\"android.content.EntityIterator\" class=\"docClass\">android.content.EntityIterator</a></p>\n\n<p>Abstract implementation of EntityIterator that makes it easy to wrap a cursor\n that can contain several consecutive rows for an entity.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-close' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.CursorEntityIterator'>android.content.CursorEntityIterator</span><br/><a href='source/CursorEntityIterator.html#android-content-CursorEntityIterator-method-close' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.CursorEntityIterator-method-close' class='name expandable'>close</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Indicates that this iterator is no longer needed and that any associated resources\n may be released (such as a SQLite...</div><div class='long'><p>Indicates that this iterator is no longer needed and that any associated resources\n may be released (such as a SQLite cursor).</p>\n</div></div></div><div id='method-getEntityAndIncrementCursor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.CursorEntityIterator'>android.content.CursorEntityIterator</span><br/><a href='source/CursorEntityIterator.html#android-content-CursorEntityIterator-method-getEntityAndIncrementCursor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.CursorEntityIterator-method-getEntityAndIncrementCursor' class='name expandable'>getEntityAndIncrementCursor</a>( <span class='pre'>cursor</span> ) : Object {android.content.Entity}<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the entity that the cursor is currently pointing to. ...</div><div class='long'><p>Returns the entity that the cursor is currently pointing to. This must take care to advance\n the cursor past this entity. This will never be called if the cursor is at the end.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cursor</span> : Object {Cursor}<div class='sub-desc'><p>the cursor that contains the entity rows</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.content.Entity}</span><div class='sub-desc'><p>the entity that the cursor is currently pointing to</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>RemoteException if a RemoteException is caught while attempting to build the Entity</p>\n</div></li></ul></div></div></div><div id='method-hasNext' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.CursorEntityIterator'>android.content.CursorEntityIterator</span><br/><a href='source/CursorEntityIterator.html#android-content-CursorEntityIterator-method-hasNext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.CursorEntityIterator-method-hasNext' class='name expandable'>hasNext</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns whether there are more elements to iterate, i.e. ...</div><div class='long'><p>Returns whether there are more elements to iterate, i.e. whether the\n iterator is positioned in front of an element.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>{@code true} if there are more elements, {@code false} otherwise.\n@see EntityIterator#next()</p>\n</div></li></ul></div></div></div><div id='method-next' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.CursorEntityIterator'>android.content.CursorEntityIterator</span><br/><a href='source/CursorEntityIterator.html#android-content-CursorEntityIterator-method-next' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.CursorEntityIterator-method-next' class='name expandable'>next</a>( <span class='pre'></span> ) : Object {android.content.Entity}<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the next object in the iteration, i.e. ...</div><div class='long'><p>Returns the next object in the iteration, i.e. returns the element in\n front of the iterator and advances the iterator by one position.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.content.Entity}</span><div class='sub-desc'><p>the next object.</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>java.util.NoSuchElementException\n             if there are no more elements.\n@see EntityIterator#hasNext()</p>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.CursorEntityIterator'>android.content.CursorEntityIterator</span><br/><a href='source/CursorEntityIterator.html#android-content-CursorEntityIterator-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.CursorEntityIterator-method-remove' class='name expandable'>remove</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-reset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.CursorEntityIterator'>android.content.CursorEntityIterator</span><br/><a href='source/CursorEntityIterator.html#android-content-CursorEntityIterator-method-reset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.CursorEntityIterator-method-reset' class='name expandable'>reset</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});