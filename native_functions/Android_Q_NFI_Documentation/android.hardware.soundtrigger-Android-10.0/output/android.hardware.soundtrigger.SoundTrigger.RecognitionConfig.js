Ext.data.JsonP.android_hardware_soundtrigger_SoundTrigger_RecognitionConfig({"tagname":"class","name":"android.hardware.soundtrigger.SoundTrigger.RecognitionConfig","autodetected":{},"files":[{"filename":"RecognitionConfig.js","href":"RecognitionConfig.html#android-hardware-soundtrigger-SoundTrigger-RecognitionConfig"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"CREATOR","tagname":"property","owner":"android.hardware.soundtrigger.SoundTrigger.RecognitionConfig","id":"property-CREATOR","meta":{}},{"name":"allowMultipleTriggers","tagname":"property","owner":"android.hardware.soundtrigger.SoundTrigger.RecognitionConfig","id":"property-allowMultipleTriggers","meta":{}},{"name":"captureRequested","tagname":"property","owner":"android.hardware.soundtrigger.SoundTrigger.RecognitionConfig","id":"property-captureRequested","meta":{}},{"name":"data","tagname":"property","owner":"android.hardware.soundtrigger.SoundTrigger.RecognitionConfig","id":"property-data","meta":{}},{"name":"keyphrases","tagname":"property","owner":"android.hardware.soundtrigger.SoundTrigger.RecognitionConfig","id":"property-keyphrases","meta":{}},{"name":"describeContents","tagname":"method","owner":"android.hardware.soundtrigger.SoundTrigger.RecognitionConfig","id":"method-describeContents","meta":{}},{"name":"toString","tagname":"method","owner":"android.hardware.soundtrigger.SoundTrigger.RecognitionConfig","id":"method-toString","meta":{}},{"name":"writeToParcel","tagname":"method","owner":"android.hardware.soundtrigger.SoundTrigger.RecognitionConfig","id":"method-writeToParcel","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.hardware.soundtrigger.SoundTrigger.RecognitionConfig","short_doc":"implements android.os.Parcelable\n\nA RecognitionConfig is provided to\n  RecognitionConfig) to configure the\n  recognit...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.hardware.soundtrigger.SoundTrigger.RecognitionConfig</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/RecognitionConfig.html#android-hardware-soundtrigger-SoundTrigger-RecognitionConfig' target='_blank'>RecognitionConfig.js</a></div></pre><div class='doc-contents'><p>implements android.os.Parcelable</p>\n\n<p>A RecognitionConfig is provided to\n  RecognitionConfig) to configure the\n  recognition request.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-CREATOR' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.soundtrigger.SoundTrigger.RecognitionConfig'>android.hardware.soundtrigger.SoundTrigger.RecognitionConfig</span><br/><a href='source/RecognitionConfig.html#android-hardware-soundtrigger-SoundTrigger-RecognitionConfig-property-CREATOR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.soundtrigger.SoundTrigger.RecognitionConfig-property-CREATOR' class='name expandable'>CREATOR</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-allowMultipleTriggers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.soundtrigger.SoundTrigger.RecognitionConfig'>android.hardware.soundtrigger.SoundTrigger.RecognitionConfig</span><br/><a href='source/RecognitionConfig.html#android-hardware-soundtrigger-SoundTrigger-RecognitionConfig-property-allowMultipleTriggers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.soundtrigger.SoundTrigger.RecognitionConfig-property-allowMultipleTriggers' class='name expandable'>allowMultipleTriggers</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>True if the service should restart listening after the DSP triggers. ...</div><div class='long'><p>True if the service should restart listening after the DSP triggers.\nNote: This config flag is currently used at the service layer rather than by the DSP.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-captureRequested' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.soundtrigger.SoundTrigger.RecognitionConfig'>android.hardware.soundtrigger.SoundTrigger.RecognitionConfig</span><br/><a href='source/RecognitionConfig.html#android-hardware-soundtrigger-SoundTrigger-RecognitionConfig-property-captureRequested' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.soundtrigger.SoundTrigger.RecognitionConfig-property-captureRequested' class='name expandable'>captureRequested</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>True if the DSP should capture the trigger sound and make it available for further\n capture. ...</div><div class='long'><p>True if the DSP should capture the trigger sound and make it available for further\n capture.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-data' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.soundtrigger.SoundTrigger.RecognitionConfig'>android.hardware.soundtrigger.SoundTrigger.RecognitionConfig</span><br/><a href='source/RecognitionConfig.html#android-hardware-soundtrigger-SoundTrigger-RecognitionConfig-property-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.soundtrigger.SoundTrigger.RecognitionConfig-property-data' class='name expandable'>data</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Opaque data for use by system applications who know about voice engine internals,\n typically during enrollment. ...</div><div class='long'><p>Opaque data for use by system applications who know about voice engine internals,\n typically during enrollment.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-keyphrases' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.soundtrigger.SoundTrigger.RecognitionConfig'>android.hardware.soundtrigger.SoundTrigger.RecognitionConfig</span><br/><a href='source/RecognitionConfig.html#android-hardware-soundtrigger-SoundTrigger-RecognitionConfig-property-keyphrases' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.soundtrigger.SoundTrigger.RecognitionConfig-property-keyphrases' class='name expandable'>keyphrases</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>List of all keyphrases in the sound model for which recognition should be performed with\n options for each keyphrase. ...</div><div class='long'><p>List of all keyphrases in the sound model for which recognition should be performed with\n options for each keyphrase.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-describeContents' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.soundtrigger.SoundTrigger.RecognitionConfig'>android.hardware.soundtrigger.SoundTrigger.RecognitionConfig</span><br/><a href='source/RecognitionConfig.html#android-hardware-soundtrigger-SoundTrigger-RecognitionConfig-method-describeContents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.soundtrigger.SoundTrigger.RecognitionConfig-method-describeContents' class='name expandable'>describeContents</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.soundtrigger.SoundTrigger.RecognitionConfig'>android.hardware.soundtrigger.SoundTrigger.RecognitionConfig</span><br/><a href='source/RecognitionConfig.html#android-hardware-soundtrigger-SoundTrigger-RecognitionConfig-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.soundtrigger.SoundTrigger.RecognitionConfig-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-writeToParcel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.soundtrigger.SoundTrigger.RecognitionConfig'>android.hardware.soundtrigger.SoundTrigger.RecognitionConfig</span><br/><a href='source/RecognitionConfig.html#android-hardware-soundtrigger-SoundTrigger-RecognitionConfig-method-writeToParcel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.soundtrigger.SoundTrigger.RecognitionConfig-method-writeToParcel' class='name expandable'>writeToParcel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});