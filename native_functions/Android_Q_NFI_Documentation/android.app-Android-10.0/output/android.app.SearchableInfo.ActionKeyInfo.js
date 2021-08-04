Ext.data.JsonP.android_app_SearchableInfo_ActionKeyInfo({"tagname":"class","name":"android.app.SearchableInfo.ActionKeyInfo","autodetected":{},"files":[{"filename":"ActionKeyInfo.js","href":"ActionKeyInfo.html#android-app-SearchableInfo-ActionKeyInfo"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"describeContents","tagname":"method","owner":"android.app.SearchableInfo.ActionKeyInfo","id":"method-describeContents","meta":{}},{"name":"getKeyCode","tagname":"method","owner":"android.app.SearchableInfo.ActionKeyInfo","id":"method-getKeyCode","meta":{}},{"name":"getQueryActionMsg","tagname":"method","owner":"android.app.SearchableInfo.ActionKeyInfo","id":"method-getQueryActionMsg","meta":{}},{"name":"getSuggestActionMsg","tagname":"method","owner":"android.app.SearchableInfo.ActionKeyInfo","id":"method-getSuggestActionMsg","meta":{}},{"name":"getSuggestActionMsgColumn","tagname":"method","owner":"android.app.SearchableInfo.ActionKeyInfo","id":"method-getSuggestActionMsgColumn","meta":{}},{"name":"writeToParcel","tagname":"method","owner":"android.app.SearchableInfo.ActionKeyInfo","id":"method-writeToParcel","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.app.SearchableInfo.ActionKeyInfo","short_doc":"implements android.os.Parcelable\n\nInformation about an action key in searchability meta-data. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.app.SearchableInfo.ActionKeyInfo</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ActionKeyInfo.html#android-app-SearchableInfo-ActionKeyInfo' target='_blank'>ActionKeyInfo.js</a></div></pre><div class='doc-contents'><p>implements android.os.Parcelable</p>\n\n<p>Information about an action key in searchability meta-data.</p>\n\n<p> @see SearchableInfo#findActionKey(int)</p>\n\n<p> This feature is used very little, and on many devices there are no reasonable\n       keys to use for actions.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-describeContents' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.SearchableInfo.ActionKeyInfo'>android.app.SearchableInfo.ActionKeyInfo</span><br/><a href='source/ActionKeyInfo.html#android-app-SearchableInfo-ActionKeyInfo-method-describeContents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.SearchableInfo.ActionKeyInfo-method-describeContents' class='name expandable'>describeContents</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getKeyCode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.SearchableInfo.ActionKeyInfo'>android.app.SearchableInfo.ActionKeyInfo</span><br/><a href='source/ActionKeyInfo.html#android-app-SearchableInfo-ActionKeyInfo-method-getKeyCode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.SearchableInfo.ActionKeyInfo-method-getKeyCode' class='name expandable'>getKeyCode</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the key code that this action key info is for. ...</div><div class='long'><p>Gets the key code that this action key info is for.\n@see android.R.styleable#SearchableActionKey_keycode</p>\n</div></div></div><div id='method-getQueryActionMsg' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.SearchableInfo.ActionKeyInfo'>android.app.SearchableInfo.ActionKeyInfo</span><br/><a href='source/ActionKeyInfo.html#android-app-SearchableInfo-ActionKeyInfo-method-getQueryActionMsg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.SearchableInfo.ActionKeyInfo-method-getQueryActionMsg' class='name expandable'>getQueryActionMsg</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the action message to use for queries. ...</div><div class='long'><p>Gets the action message to use for queries.\n@see android.R.styleable#SearchableActionKey_queryActionMsg</p>\n</div></div></div><div id='method-getSuggestActionMsg' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.SearchableInfo.ActionKeyInfo'>android.app.SearchableInfo.ActionKeyInfo</span><br/><a href='source/ActionKeyInfo.html#android-app-SearchableInfo-ActionKeyInfo-method-getSuggestActionMsg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.SearchableInfo.ActionKeyInfo-method-getSuggestActionMsg' class='name expandable'>getSuggestActionMsg</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the action message to use for suggestions. ...</div><div class='long'><p>Gets the action message to use for suggestions.\n@see android.R.styleable#SearchableActionKey_suggestActionMsg</p>\n</div></div></div><div id='method-getSuggestActionMsgColumn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.SearchableInfo.ActionKeyInfo'>android.app.SearchableInfo.ActionKeyInfo</span><br/><a href='source/ActionKeyInfo.html#android-app-SearchableInfo-ActionKeyInfo-method-getSuggestActionMsgColumn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.SearchableInfo.ActionKeyInfo-method-getSuggestActionMsgColumn' class='name expandable'>getSuggestActionMsgColumn</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the name of the column to get the suggestion action message from. ...</div><div class='long'><p>Gets the name of the column to get the suggestion action message from.\n@see android.R.styleable#SearchableActionKey_suggestActionMsgColumn</p>\n</div></div></div><div id='method-writeToParcel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.SearchableInfo.ActionKeyInfo'>android.app.SearchableInfo.ActionKeyInfo</span><br/><a href='source/ActionKeyInfo.html#android-app-SearchableInfo-ActionKeyInfo-method-writeToParcel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.SearchableInfo.ActionKeyInfo-method-writeToParcel' class='name expandable'>writeToParcel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});