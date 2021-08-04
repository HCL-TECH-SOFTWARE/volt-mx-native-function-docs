Ext.data.JsonP.android_database_sqlite_SQLiteQuery({"tagname":"class","name":"android.database.sqlite.SQLiteQuery","autodetected":{},"files":[{"filename":"SQLiteQuery.js","href":"SQLiteQuery.html#android-database-sqlite-SQLiteQuery"}],"extends":"android.database.sqlite.SQLiteProgram","members":[{"name":"acquireReference","tagname":"method","owner":"android.database.sqlite.SQLiteClosable","id":"method-acquireReference","meta":{}},{"name":"bindAllArgsAsStrings","tagname":"method","owner":"android.database.sqlite.SQLiteProgram","id":"method-bindAllArgsAsStrings","meta":{}},{"name":"bindBlob","tagname":"method","owner":"android.database.sqlite.SQLiteProgram","id":"method-bindBlob","meta":{}},{"name":"bindDouble","tagname":"method","owner":"android.database.sqlite.SQLiteProgram","id":"method-bindDouble","meta":{}},{"name":"bindLong","tagname":"method","owner":"android.database.sqlite.SQLiteProgram","id":"method-bindLong","meta":{}},{"name":"bindNull","tagname":"method","owner":"android.database.sqlite.SQLiteProgram","id":"method-bindNull","meta":{}},{"name":"bindString","tagname":"method","owner":"android.database.sqlite.SQLiteProgram","id":"method-bindString","meta":{}},{"name":"clearBindings","tagname":"method","owner":"android.database.sqlite.SQLiteProgram","id":"method-clearBindings","meta":{}},{"name":"close","tagname":"method","owner":"android.database.sqlite.SQLiteClosable","id":"method-close","meta":{}},{"name":"getUniqueId","tagname":"method","owner":"android.database.sqlite.SQLiteProgram","id":"method-getUniqueId","meta":{"deprecated":{"text":"<p>This method is deprecated and must not be used.</p>\n"}}},{"name":"releaseReference","tagname":"method","owner":"android.database.sqlite.SQLiteClosable","id":"method-releaseReference","meta":{}},{"name":"releaseReferenceFromContainer","tagname":"method","owner":"android.database.sqlite.SQLiteClosable","id":"method-releaseReferenceFromContainer","meta":{"deprecated":{"text":"<p>Do not use.</p>\n"}}},{"name":"toString","tagname":"method","owner":"android.database.sqlite.SQLiteQuery","id":"method-toString","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.database.sqlite.SQLiteQuery","short_doc":"Represents a query that reads the resulting rows into a android.database.sqlite.SQLiteQuery. ...","classIcon":"icon-class","superclasses":["java.lang.Object","android.database.sqlite.SQLiteClosable","android.database.sqlite.SQLiteProgram"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><a href='#!/api/android.database.sqlite.SQLiteClosable' rel='android.database.sqlite.SQLiteClosable' class='docClass'>android.database.sqlite.SQLiteClosable</a><div class='subclass '><a href='#!/api/android.database.sqlite.SQLiteProgram' rel='android.database.sqlite.SQLiteProgram' class='docClass'>android.database.sqlite.SQLiteProgram</a><div class='subclass '><strong>android.database.sqlite.SQLiteQuery</strong></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/SQLiteQuery.html#android-database-sqlite-SQLiteQuery' target='_blank'>SQLiteQuery.js</a></div></pre><div class='doc-contents'><p>Represents a query that reads the resulting rows into a <a href=\"#!/api/android.database.sqlite.SQLiteQuery\" rel=\"android.database.sqlite.SQLiteQuery\" class=\"docClass\">android.database.sqlite.SQLiteQuery</a>.\n This class is used by <a href=\"#!/api/android.database.sqlite.SQLiteCursor\" rel=\"android.database.sqlite.SQLiteCursor\" class=\"docClass\">android.database.sqlite.SQLiteCursor</a> and isn't useful itself.\n <p>\n This class is not thread-safe.\n </p></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-acquireReference' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.database.sqlite.SQLiteClosable' rel='android.database.sqlite.SQLiteClosable' class='defined-in docClass'>android.database.sqlite.SQLiteClosable</a><br/><a href='source/SQLiteClosable.html#android-database-sqlite-SQLiteClosable-method-acquireReference' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.database.sqlite.SQLiteClosable-method-acquireReference' class='name expandable'>acquireReference</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Acquires a reference to the object. ...</div><div class='long'><p>Acquires a reference to the object.</p>\n<h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalStateException if the last reference to the object has already\n been released.</p>\n</div></li></ul></div></div></div><div id='method-bindAllArgsAsStrings' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.database.sqlite.SQLiteProgram' rel='android.database.sqlite.SQLiteProgram' class='defined-in docClass'>android.database.sqlite.SQLiteProgram</a><br/><a href='source/SQLiteProgram.html#android-database-sqlite-SQLiteProgram-method-bindAllArgsAsStrings' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.database.sqlite.SQLiteProgram-method-bindAllArgsAsStrings' class='name expandable'>bindAllArgsAsStrings</a>( <span class='pre'>bindArgs</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Given an array of String bindArgs, this method binds all of them in one single call. ...</div><div class='long'><p>Given an array of String bindArgs, this method binds all of them in one single call.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bindArgs</span> : Object {java.lang.String[]}<div class='sub-desc'><p>the String array of bind args, none of which must be null.</p>\n</div></li></ul></div></div></div><div id='method-bindBlob' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.database.sqlite.SQLiteProgram' rel='android.database.sqlite.SQLiteProgram' class='defined-in docClass'>android.database.sqlite.SQLiteProgram</a><br/><a href='source/SQLiteProgram.html#android-database-sqlite-SQLiteProgram-method-bindBlob' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.database.sqlite.SQLiteProgram-method-bindBlob' class='name expandable'>bindBlob</a>( <span class='pre'>index, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Bind a byte array value to this statement. ...</div><div class='long'><p>Bind a byte array value to this statement. The value remains bound until\n <a href=\"#!/api/android.database.sqlite.SQLiteProgram-method-clearBindings\" rel=\"android.database.sqlite.SQLiteProgram-method-clearBindings\" class=\"docClass\">clearBindings</a> is called.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>The 1-based index to the parameter to bind</p>\n</div></li><li><span class='pre'>value</span> : Object {byte[]}<div class='sub-desc'><p>The value to bind, must not be null</p>\n</div></li></ul></div></div></div><div id='method-bindDouble' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.database.sqlite.SQLiteProgram' rel='android.database.sqlite.SQLiteProgram' class='defined-in docClass'>android.database.sqlite.SQLiteProgram</a><br/><a href='source/SQLiteProgram.html#android-database-sqlite-SQLiteProgram-method-bindDouble' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.database.sqlite.SQLiteProgram-method-bindDouble' class='name expandable'>bindDouble</a>( <span class='pre'>index, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Bind a double value to this statement. ...</div><div class='long'><p>Bind a double value to this statement. The value remains bound until\n <a href=\"#!/api/android.database.sqlite.SQLiteProgram-method-clearBindings\" rel=\"android.database.sqlite.SQLiteProgram-method-clearBindings\" class=\"docClass\">clearBindings</a> is called.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>The 1-based index to the parameter to bind</p>\n</div></li><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The value to bind</p>\n</div></li></ul></div></div></div><div id='method-bindLong' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.database.sqlite.SQLiteProgram' rel='android.database.sqlite.SQLiteProgram' class='defined-in docClass'>android.database.sqlite.SQLiteProgram</a><br/><a href='source/SQLiteProgram.html#android-database-sqlite-SQLiteProgram-method-bindLong' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.database.sqlite.SQLiteProgram-method-bindLong' class='name expandable'>bindLong</a>( <span class='pre'>index, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Bind a long value to this statement. ...</div><div class='long'><p>Bind a long value to this statement. The value remains bound until\n <a href=\"#!/api/android.database.sqlite.SQLiteProgram-method-clearBindings\" rel=\"android.database.sqlite.SQLiteProgram-method-clearBindings\" class=\"docClass\">clearBindings</a> is called.\naddToBindArgs</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>The 1-based index to the parameter to bind</p>\n</div></li><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The value to bind</p>\n</div></li></ul></div></div></div><div id='method-bindNull' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.database.sqlite.SQLiteProgram' rel='android.database.sqlite.SQLiteProgram' class='defined-in docClass'>android.database.sqlite.SQLiteProgram</a><br/><a href='source/SQLiteProgram.html#android-database-sqlite-SQLiteProgram-method-bindNull' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.database.sqlite.SQLiteProgram-method-bindNull' class='name expandable'>bindNull</a>( <span class='pre'>index</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Bind a NULL value to this statement. ...</div><div class='long'><p>Bind a NULL value to this statement. The value remains bound until\n <a href=\"#!/api/android.database.sqlite.SQLiteProgram-method-clearBindings\" rel=\"android.database.sqlite.SQLiteProgram-method-clearBindings\" class=\"docClass\">clearBindings</a> is called.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>The 1-based index to the parameter to bind null to</p>\n</div></li></ul></div></div></div><div id='method-bindString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.database.sqlite.SQLiteProgram' rel='android.database.sqlite.SQLiteProgram' class='defined-in docClass'>android.database.sqlite.SQLiteProgram</a><br/><a href='source/SQLiteProgram.html#android-database-sqlite-SQLiteProgram-method-bindString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.database.sqlite.SQLiteProgram-method-bindString' class='name expandable'>bindString</a>( <span class='pre'>index, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Bind a String value to this statement. ...</div><div class='long'><p>Bind a String value to this statement. The value remains bound until\n <a href=\"#!/api/android.database.sqlite.SQLiteProgram-method-clearBindings\" rel=\"android.database.sqlite.SQLiteProgram-method-clearBindings\" class=\"docClass\">clearBindings</a> is called.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>The 1-based index to the parameter to bind</p>\n</div></li><li><span class='pre'>value</span> : String<div class='sub-desc'><p>The value to bind, must not be null</p>\n</div></li></ul></div></div></div><div id='method-clearBindings' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.database.sqlite.SQLiteProgram' rel='android.database.sqlite.SQLiteProgram' class='defined-in docClass'>android.database.sqlite.SQLiteProgram</a><br/><a href='source/SQLiteProgram.html#android-database-sqlite-SQLiteProgram-method-clearBindings' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.database.sqlite.SQLiteProgram-method-clearBindings' class='name expandable'>clearBindings</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Clears all existing bindings. ...</div><div class='long'><p>Clears all existing bindings. Unset bindings are treated as NULL.</p>\n</div></div></div><div id='method-close' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.database.sqlite.SQLiteClosable' rel='android.database.sqlite.SQLiteClosable' class='defined-in docClass'>android.database.sqlite.SQLiteClosable</a><br/><a href='source/SQLiteClosable.html#android-database-sqlite-SQLiteClosable-method-close' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.database.sqlite.SQLiteClosable-method-close' class='name expandable'>close</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Releases a reference to the object, closing the object if the last reference\n was released. ...</div><div class='long'><p>Releases a reference to the object, closing the object if the last reference\n was released.</p>\n\n<p> Calling this method is equivalent to calling <a href=\"#!/api/android.database.sqlite.SQLiteClosable-method-releaseReference\" rel=\"android.database.sqlite.SQLiteClosable-method-releaseReference\" class=\"docClass\">releaseReference</a>.\n@see <a href=\"#!/api/android.database.sqlite.SQLiteClosable-method-releaseReference\" rel=\"android.database.sqlite.SQLiteClosable-method-releaseReference\" class=\"docClass\">releaseReference</a>()\n@see #onAllReferencesReleased()</p>\n</div></div></div><div id='method-getUniqueId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.database.sqlite.SQLiteProgram' rel='android.database.sqlite.SQLiteProgram' class='defined-in docClass'>android.database.sqlite.SQLiteProgram</a><br/><a href='source/SQLiteProgram.html#android-database-sqlite-SQLiteProgram-method-getUniqueId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.database.sqlite.SQLiteProgram-method-getUniqueId' class='name expandable'>getUniqueId</a>( <span class='pre'></span> )<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'>Unimplemented. ...</div><div class='long'><p>Unimplemented.</p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p>This method is deprecated and must not be used.</p>\n\n        </div>\n</div></div></div><div id='method-releaseReference' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.database.sqlite.SQLiteClosable' rel='android.database.sqlite.SQLiteClosable' class='defined-in docClass'>android.database.sqlite.SQLiteClosable</a><br/><a href='source/SQLiteClosable.html#android-database-sqlite-SQLiteClosable-method-releaseReference' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.database.sqlite.SQLiteClosable-method-releaseReference' class='name expandable'>releaseReference</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Releases a reference to the object, closing the object if the last reference\n was released. ...</div><div class='long'><p>Releases a reference to the object, closing the object if the last reference\n was released.\n@see #onAllReferencesReleased()</p>\n</div></div></div><div id='method-releaseReferenceFromContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.database.sqlite.SQLiteClosable' rel='android.database.sqlite.SQLiteClosable' class='defined-in docClass'>android.database.sqlite.SQLiteClosable</a><br/><a href='source/SQLiteClosable.html#android-database-sqlite-SQLiteClosable-method-releaseReferenceFromContainer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.database.sqlite.SQLiteClosable-method-releaseReferenceFromContainer' class='name expandable'>releaseReferenceFromContainer</a>( <span class='pre'></span> )<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'>Releases a reference to the object that was owned by the container of the object,\n closing the object if the last ref...</div><div class='long'><p>Releases a reference to the object that was owned by the container of the object,\n closing the object if the last reference was released.\n@see #onAllReferencesReleasedFromContainer()</p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p>Do not use.</p>\n\n        </div>\n</div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.database.sqlite.SQLiteQuery'>android.database.sqlite.SQLiteQuery</span><br/><a href='source/SQLiteQuery.html#android-database-sqlite-SQLiteQuery-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.database.sqlite.SQLiteQuery-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});