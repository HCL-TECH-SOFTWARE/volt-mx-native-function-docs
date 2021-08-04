Ext.data.JsonP.android_media_audiopolicy_AudioMix({"tagname":"class","name":"android.media.audiopolicy.AudioMix","autodetected":{},"files":[{"filename":"AudioMix.js","href":"AudioMix.html#android-media-audiopolicy-AudioMix"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"MIX_STATE_DISABLED","tagname":"property","owner":"android.media.audiopolicy.AudioMix","id":"property-MIX_STATE_DISABLED","meta":{}},{"name":"MIX_STATE_IDLE","tagname":"property","owner":"android.media.audiopolicy.AudioMix","id":"property-MIX_STATE_IDLE","meta":{}},{"name":"MIX_STATE_MIXING","tagname":"property","owner":"android.media.audiopolicy.AudioMix","id":"property-MIX_STATE_MIXING","meta":{}},{"name":"ROUTE_FLAG_LOOP_BACK","tagname":"property","owner":"android.media.audiopolicy.AudioMix","id":"property-ROUTE_FLAG_LOOP_BACK","meta":{}},{"name":"ROUTE_FLAG_RENDER","tagname":"property","owner":"android.media.audiopolicy.AudioMix","id":"property-ROUTE_FLAG_RENDER","meta":{}},{"name":"getMixState","tagname":"method","owner":"android.media.audiopolicy.AudioMix","id":"method-getMixState","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.media.audiopolicy.AudioMix","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.media.audiopolicy.AudioMix</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/AudioMix.html#android-media-audiopolicy-AudioMix' target='_blank'>AudioMix.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-MIX_STATE_DISABLED' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.audiopolicy.AudioMix'>android.media.audiopolicy.AudioMix</span><br/><a href='source/AudioMix.html#android-media-audiopolicy-AudioMix-property-MIX_STATE_DISABLED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.audiopolicy.AudioMix-property-MIX_STATE_DISABLED' class='name expandable'>MIX_STATE_DISABLED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>State of a mix before its policy is enabled. ...</div><div class='long'><p>State of a mix before its policy is enabled.</p>\n<p>Defaults to: <code>&quot;-1&quot;</code></p></div></div></div><div id='property-MIX_STATE_IDLE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.audiopolicy.AudioMix'>android.media.audiopolicy.AudioMix</span><br/><a href='source/AudioMix.html#android-media-audiopolicy-AudioMix-property-MIX_STATE_IDLE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.audiopolicy.AudioMix-property-MIX_STATE_IDLE' class='name expandable'>MIX_STATE_IDLE</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>State of a mix when there is no audio to mix. ...</div><div class='long'><p>State of a mix when there is no audio to mix.</p>\n<p>Defaults to: <code>&quot;0&quot;</code></p></div></div></div><div id='property-MIX_STATE_MIXING' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.audiopolicy.AudioMix'>android.media.audiopolicy.AudioMix</span><br/><a href='source/AudioMix.html#android-media-audiopolicy-AudioMix-property-MIX_STATE_MIXING' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.audiopolicy.AudioMix-property-MIX_STATE_MIXING' class='name expandable'>MIX_STATE_MIXING</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>State of a mix that is actively mixing audio. ...</div><div class='long'><p>State of a mix that is actively mixing audio.</p>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-ROUTE_FLAG_LOOP_BACK' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.audiopolicy.AudioMix'>android.media.audiopolicy.AudioMix</span><br/><a href='source/AudioMix.html#android-media-audiopolicy-AudioMix-property-ROUTE_FLAG_LOOP_BACK' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.audiopolicy.AudioMix-property-ROUTE_FLAG_LOOP_BACK' class='name expandable'>ROUTE_FLAG_LOOP_BACK</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>An audio mix behavior where the output of the mix is rerouted back to the framework and\nis accessible for injection o...</div><div class='long'><p>An audio mix behavior where the output of the mix is rerouted back to the framework and\nis accessible for injection or capture through the AudioTrack and AudioRecord\nAPIs.</p>\n<p>Defaults to: <code>&quot;2&quot;</code></p></div></div></div><div id='property-ROUTE_FLAG_RENDER' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.audiopolicy.AudioMix'>android.media.audiopolicy.AudioMix</span><br/><a href='source/AudioMix.html#android-media-audiopolicy-AudioMix-property-ROUTE_FLAG_RENDER' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.audiopolicy.AudioMix-property-ROUTE_FLAG_RENDER' class='name expandable'>ROUTE_FLAG_RENDER</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>An audio mix behavior where the output of the mix is sent to the original destination of\nthe audio signal, i.e. ...</div><div class='long'><p>An audio mix behavior where the output of the mix is sent to the original destination of\nthe audio signal, i.e. an output device for an output mix, or a recording for an input mix.</p>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getMixState' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.audiopolicy.AudioMix'>android.media.audiopolicy.AudioMix</span><br/><a href='source/AudioMix.html#android-media-audiopolicy-AudioMix-method-getMixState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.audiopolicy.AudioMix-method-getMixState' class='name expandable'>getMixState</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The current mixing state. ...</div><div class='long'><p>The current mixing state.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>one of <a href=\"#!/api/android.media.audiopolicy.AudioMix-property-MIX_STATE_DISABLED\" rel=\"android.media.audiopolicy.AudioMix-property-MIX_STATE_DISABLED\" class=\"docClass\">MIX_STATE_DISABLED</a>, <a href=\"#!/api/android.media.audiopolicy.AudioMix-property-MIX_STATE_IDLE\" rel=\"android.media.audiopolicy.AudioMix-property-MIX_STATE_IDLE\" class=\"docClass\">MIX_STATE_IDLE</a>,\n          <a href=\"#!/api/android.media.audiopolicy.AudioMix-property-MIX_STATE_MIXING\" rel=\"android.media.audiopolicy.AudioMix-property-MIX_STATE_MIXING\" class=\"docClass\">MIX_STATE_MIXING</a>.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});