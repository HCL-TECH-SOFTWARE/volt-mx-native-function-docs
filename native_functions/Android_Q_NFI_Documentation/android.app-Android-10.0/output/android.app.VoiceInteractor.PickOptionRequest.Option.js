Ext.data.JsonP.android_app_VoiceInteractor_PickOptionRequest_Option({"tagname":"class","name":"android.app.VoiceInteractor.PickOptionRequest.Option","autodetected":{},"files":[{"filename":"Option.js","href":"Option.html#android-app-VoiceInteractor-PickOptionRequest-Option"}],"extends":"java.lang.Object","members":[{"name":"CREATOR","tagname":"property","owner":"android.app.VoiceInteractor.PickOptionRequest.Option","id":"property-CREATOR","meta":{}},{"name":"addSynonym","tagname":"method","owner":"android.app.VoiceInteractor.PickOptionRequest.Option","id":"method-addSynonym","meta":{}},{"name":"countSynonyms","tagname":"method","owner":"android.app.VoiceInteractor.PickOptionRequest.Option","id":"method-countSynonyms","meta":{}},{"name":"describeContents","tagname":"method","owner":"android.app.VoiceInteractor.PickOptionRequest.Option","id":"method-describeContents","meta":{}},{"name":"getExtras","tagname":"method","owner":"android.app.VoiceInteractor.PickOptionRequest.Option","id":"method-getExtras","meta":{}},{"name":"getIndex","tagname":"method","owner":"android.app.VoiceInteractor.PickOptionRequest.Option","id":"method-getIndex","meta":{}},{"name":"getLabel","tagname":"method","owner":"android.app.VoiceInteractor.PickOptionRequest.Option","id":"method-getLabel","meta":{}},{"name":"getSynonymAt","tagname":"method","owner":"android.app.VoiceInteractor.PickOptionRequest.Option","id":"method-getSynonymAt","meta":{}},{"name":"setExtras","tagname":"method","owner":"android.app.VoiceInteractor.PickOptionRequest.Option","id":"method-setExtras","meta":{}},{"name":"writeToParcel","tagname":"method","owner":"android.app.VoiceInteractor.PickOptionRequest.Option","id":"method-writeToParcel","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.app.VoiceInteractor.PickOptionRequest.Option","short_doc":"implements android.os.Parcelable\n\nRepresents a single option that the user may select using their voice. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.app.VoiceInteractor.PickOptionRequest.Option</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Option.html#android-app-VoiceInteractor-PickOptionRequest-Option' target='_blank'>Option.js</a></div></pre><div class='doc-contents'><p>implements android.os.Parcelable</p>\n\n<p>Represents a single option that the user may select using their voice. The\n <a href=\"#!/api/android.app.VoiceInteractor.PickOptionRequest.Option-method-getIndex\" rel=\"android.app.VoiceInteractor.PickOptionRequest.Option-method-getIndex\" class=\"docClass\">getIndex</a>() method should be used as a unique ID to identify the option\n when it is returned from the voice interactor.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-CREATOR' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.VoiceInteractor.PickOptionRequest.Option'>android.app.VoiceInteractor.PickOptionRequest.Option</span><br/><a href='source/Option.html#android-app-VoiceInteractor-PickOptionRequest-Option-property-CREATOR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.VoiceInteractor.PickOptionRequest.Option-property-CREATOR' class='name expandable'>CREATOR</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addSynonym' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.VoiceInteractor.PickOptionRequest.Option'>android.app.VoiceInteractor.PickOptionRequest.Option</span><br/><a href='source/Option.html#android-app-VoiceInteractor-PickOptionRequest-Option-method-addSynonym' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.VoiceInteractor.PickOptionRequest.Option-method-addSynonym' class='name expandable'>addSynonym</a>( <span class='pre'>synonym</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add a synonym term to the option to indicate an alternative way the content\n may be matched. ...</div><div class='long'><p>Add a synonym term to the option to indicate an alternative way the content\n may be matched.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>synonym</span> : Object {CharSequence}<div class='sub-desc'><p>The synonym that will be matched against what the user speaks,\n     but not displayed.</p>\n</div></li></ul></div></div></div><div id='method-countSynonyms' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.VoiceInteractor.PickOptionRequest.Option'>android.app.VoiceInteractor.PickOptionRequest.Option</span><br/><a href='source/Option.html#android-app-VoiceInteractor-PickOptionRequest-Option-method-countSynonyms' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.VoiceInteractor.PickOptionRequest.Option-method-countSynonyms' class='name expandable'>countSynonyms</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-describeContents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.VoiceInteractor.PickOptionRequest.Option'>android.app.VoiceInteractor.PickOptionRequest.Option</span><br/><a href='source/Option.html#android-app-VoiceInteractor-PickOptionRequest-Option-method-describeContents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.VoiceInteractor.PickOptionRequest.Option-method-describeContents' class='name expandable'>describeContents</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getExtras' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.VoiceInteractor.PickOptionRequest.Option'>android.app.VoiceInteractor.PickOptionRequest.Option</span><br/><a href='source/Option.html#android-app-VoiceInteractor-PickOptionRequest-Option-method-getExtras' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.VoiceInteractor.PickOptionRequest.Option-method-getExtras' class='name expandable'>getExtras</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return any optional extras information associated with this option, or null\n if there is none. ...</div><div class='long'><p>Return any optional extras information associated with this option, or null\n if there is none.  Note that this method returns a reference to the actual\n extras Bundle in the option, so modifications to it will directly modify the\n extras in the option.</p>\n</div></div></div><div id='method-getIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.VoiceInteractor.PickOptionRequest.Option'>android.app.VoiceInteractor.PickOptionRequest.Option</span><br/><a href='source/Option.html#android-app-VoiceInteractor-PickOptionRequest-Option-method-getIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.VoiceInteractor.PickOptionRequest.Option-method-getIndex' class='name expandable'>getIndex</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the index that was supplied in the constructor. ...</div><div class='long'><p>Return the index that was supplied in the constructor.\n If the option was constructed without an index, -1 is returned.</p>\n</div></div></div><div id='method-getLabel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.VoiceInteractor.PickOptionRequest.Option'>android.app.VoiceInteractor.PickOptionRequest.Option</span><br/><a href='source/Option.html#android-app-VoiceInteractor-PickOptionRequest-Option-method-getLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.VoiceInteractor.PickOptionRequest.Option-method-getLabel' class='name expandable'>getLabel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getSynonymAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.VoiceInteractor.PickOptionRequest.Option'>android.app.VoiceInteractor.PickOptionRequest.Option</span><br/><a href='source/Option.html#android-app-VoiceInteractor-PickOptionRequest-Option-method-getSynonymAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.VoiceInteractor.PickOptionRequest.Option-method-getSynonymAt' class='name expandable'>getSynonymAt</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setExtras' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.VoiceInteractor.PickOptionRequest.Option'>android.app.VoiceInteractor.PickOptionRequest.Option</span><br/><a href='source/Option.html#android-app-VoiceInteractor-PickOptionRequest-Option-method-setExtras' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.VoiceInteractor.PickOptionRequest.Option-method-setExtras' class='name expandable'>setExtras</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set optional extra information associated with this option. ...</div><div class='long'><p>Set optional extra information associated with this option.  Note that this\n method takes ownership of the supplied extras Bundle.</p>\n</div></div></div><div id='method-writeToParcel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.VoiceInteractor.PickOptionRequest.Option'>android.app.VoiceInteractor.PickOptionRequest.Option</span><br/><a href='source/Option.html#android-app-VoiceInteractor-PickOptionRequest-Option-method-writeToParcel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.VoiceInteractor.PickOptionRequest.Option-method-writeToParcel' class='name expandable'>writeToParcel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});