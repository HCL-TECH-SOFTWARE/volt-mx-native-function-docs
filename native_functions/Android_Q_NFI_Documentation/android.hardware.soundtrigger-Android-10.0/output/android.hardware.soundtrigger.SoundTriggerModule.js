Ext.data.JsonP.android_hardware_soundtrigger_SoundTriggerModule({"tagname":"class","name":"android.hardware.soundtrigger.SoundTriggerModule","autodetected":{},"files":[{"filename":"SoundTriggerModule.js","href":"SoundTriggerModule.html#android-hardware-soundtrigger-SoundTriggerModule"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"detach","tagname":"method","owner":"android.hardware.soundtrigger.SoundTriggerModule","id":"method-detach","meta":{}},{"name":"getModelState","tagname":"method","owner":"android.hardware.soundtrigger.SoundTriggerModule","id":"method-getModelState","meta":{}},{"name":"loadSoundModel","tagname":"method","owner":"android.hardware.soundtrigger.SoundTriggerModule","id":"method-loadSoundModel","meta":{}},{"name":"startRecognition","tagname":"method","owner":"android.hardware.soundtrigger.SoundTriggerModule","id":"method-startRecognition","meta":{}},{"name":"stopRecognition","tagname":"method","owner":"android.hardware.soundtrigger.SoundTriggerModule","id":"method-stopRecognition","meta":{}},{"name":"unloadSoundModel","tagname":"method","owner":"android.hardware.soundtrigger.SoundTriggerModule","id":"method-unloadSoundModel","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.hardware.soundtrigger.SoundTriggerModule","short_doc":"The SoundTriggerModule provides APIs to control sound models and sound detection\n on a given sound trigger hardware m...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.hardware.soundtrigger.SoundTriggerModule</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/SoundTriggerModule.html#android-hardware-soundtrigger-SoundTriggerModule' target='_blank'>SoundTriggerModule.js</a></div></pre><div class='doc-contents'><p>The SoundTriggerModule provides APIs to control sound models and sound detection\n on a given sound trigger hardware module.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-detach' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.soundtrigger.SoundTriggerModule'>android.hardware.soundtrigger.SoundTriggerModule</span><br/><a href='source/SoundTriggerModule.html#android-hardware-soundtrigger-SoundTriggerModule-method-detach' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.soundtrigger.SoundTriggerModule-method-detach' class='name expandable'>detach</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Detach from this module. ...</div><div class='long'><p>Detach from this module. The <a href=\"#!/api/android.hardware.soundtrigger.SoundTrigger.StatusListener\" rel=\"android.hardware.soundtrigger.SoundTrigger.StatusListener\" class=\"docClass\">android.hardware.soundtrigger.SoundTrigger.StatusListener</a> callback will not be called\n anymore and associated resources will be released.</p>\n</div></div></div><div id='method-getModelState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.soundtrigger.SoundTriggerModule'>android.hardware.soundtrigger.SoundTriggerModule</span><br/><a href='source/SoundTriggerModule.html#android-hardware-soundtrigger-SoundTriggerModule-method-getModelState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.soundtrigger.SoundTriggerModule-method-getModelState' class='name expandable'>getModelState</a>( <span class='pre'>soundModelHandle</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the current state of a android.hardware.soundtrigger.SoundTrigger.SoundModel. ...</div><div class='long'><p>Get the current state of a <a href=\"#!/api/android.hardware.soundtrigger.SoundTrigger.SoundModel\" rel=\"android.hardware.soundtrigger.SoundTrigger.SoundModel\" class=\"docClass\">android.hardware.soundtrigger.SoundTrigger.SoundModel</a>.\n The state will be returned asynchronously as a android.hardware.soundtrigger.SoundTrigger.RecognitionEvent\n in the callback registered in the android.hardware.soundtrigger.SoundTrigger.startRecognition method.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>soundModelHandle</span> : Number<div class='sub-desc'><p>The sound model handle indicating which model's state to return</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><ul>\n<li>SoundTrigger.STATUS_OK in case of success\n\n<pre><code>   - SoundTrigger.STATUS_ERROR in case of unspecified error\n   - SoundTrigger.STATUS_PERMISSION_DENIED if the caller does not have\n   system permission\n   - SoundTrigger.STATUS_NO_INIT if the native service cannot be reached\n   - SoundTrigger.STATUS_BAD_VALUE if the sound model handle is invalid\n   - SoundTrigger.STATUS_DEAD_OBJECT if the binder transaction to the native\n   service fails\n   - SoundTrigger.STATUS_INVALID_OPERATION if the call is out of sequence\n</code></pre></li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-loadSoundModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.soundtrigger.SoundTriggerModule'>android.hardware.soundtrigger.SoundTriggerModule</span><br/><a href='source/SoundTriggerModule.html#android-hardware-soundtrigger-SoundTriggerModule-method-loadSoundModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.soundtrigger.SoundTriggerModule-method-loadSoundModel' class='name expandable'>loadSoundModel</a>( <span class='pre'>model, soundModelHandle</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Load a android.hardware.soundtrigger.SoundTrigger.SoundModel to the hardware. ...</div><div class='long'><p>Load a <a href=\"#!/api/android.hardware.soundtrigger.SoundTrigger.SoundModel\" rel=\"android.hardware.soundtrigger.SoundTrigger.SoundModel\" class=\"docClass\">android.hardware.soundtrigger.SoundTrigger.SoundModel</a> to the hardware. A sound model must be loaded in\n order to start listening to a key phrase in this model.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Object {SoundTrigger.SoundModel}<div class='sub-desc'><p>The sound model to load.</p>\n</div></li><li><span class='pre'>soundModelHandle</span> : Object {int[]}<div class='sub-desc'><p>an array of int where the sound model handle will be returned.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><ul>\n<li>SoundTrigger.STATUS_OK in case of success\n\n<pre><code>   - SoundTrigger.STATUS_ERROR in case of unspecified error\n   - SoundTrigger.STATUS_PERMISSION_DENIED if the caller does not have\n   system permission\n   - SoundTrigger.STATUS_NO_INIT if the native service cannot be reached\n   - SoundTrigger.STATUS_BAD_VALUE if parameters are invalid\n   - SoundTrigger.STATUS_DEAD_OBJECT if the binder transaction to the native\n   service fails\n   - SoundTrigger.STATUS_INVALID_OPERATION if the call is out of sequence\n</code></pre></li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-startRecognition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.soundtrigger.SoundTriggerModule'>android.hardware.soundtrigger.SoundTriggerModule</span><br/><a href='source/SoundTriggerModule.html#android-hardware-soundtrigger-SoundTriggerModule-method-startRecognition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.soundtrigger.SoundTriggerModule-method-startRecognition' class='name expandable'>startRecognition</a>( <span class='pre'>soundModelHandle, config</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Start listening to all key phrases in a android.hardware.soundtrigger.SoundTrigger.SoundModel. ...</div><div class='long'><p>Start listening to all key phrases in a <a href=\"#!/api/android.hardware.soundtrigger.SoundTrigger.SoundModel\" rel=\"android.hardware.soundtrigger.SoundTrigger.SoundModel\" class=\"docClass\">android.hardware.soundtrigger.SoundTrigger.SoundModel</a>.\n Recognition must be restarted after each callback (success or failure) received on\n the <a href=\"#!/api/android.hardware.soundtrigger.SoundTrigger.StatusListener\" rel=\"android.hardware.soundtrigger.SoundTrigger.StatusListener\" class=\"docClass\">android.hardware.soundtrigger.SoundTrigger.StatusListener</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>soundModelHandle</span> : Number<div class='sub-desc'><p>The sound model handle to start listening to</p>\n</div></li><li><span class='pre'>config</span> : Object {SoundTrigger.RecognitionConfig}<div class='sub-desc'><p>contains configuration information for this recognition request:\n  recognition mode, keyphrases, users, minimum confidence levels...</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><ul>\n<li>SoundTrigger.STATUS_OK in case of success\n\n<pre><code>   - SoundTrigger.STATUS_ERROR in case of unspecified error\n   - SoundTrigger.STATUS_PERMISSION_DENIED if the caller does not have\n   system permission\n   - SoundTrigger.STATUS_NO_INIT if the native service cannot be reached\n   - SoundTrigger.STATUS_BAD_VALUE if the sound model handle is invalid\n   - SoundTrigger.STATUS_DEAD_OBJECT if the binder transaction to the native\n   service fails\n   - SoundTrigger.STATUS_INVALID_OPERATION if the call is out of sequence\n</code></pre></li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-stopRecognition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.soundtrigger.SoundTriggerModule'>android.hardware.soundtrigger.SoundTriggerModule</span><br/><a href='source/SoundTriggerModule.html#android-hardware-soundtrigger-SoundTriggerModule-method-stopRecognition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.soundtrigger.SoundTriggerModule-method-stopRecognition' class='name expandable'>stopRecognition</a>( <span class='pre'>soundModelHandle</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Stop listening to all key phrases in a android.hardware.soundtrigger.SoundTrigger.SoundModel ...</div><div class='long'><p>Stop listening to all key phrases in a <a href=\"#!/api/android.hardware.soundtrigger.SoundTrigger.SoundModel\" rel=\"android.hardware.soundtrigger.SoundTrigger.SoundModel\" class=\"docClass\">android.hardware.soundtrigger.SoundTrigger.SoundModel</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>soundModelHandle</span> : Number<div class='sub-desc'><p>The sound model handle to stop listening to</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><ul>\n<li>SoundTrigger.STATUS_OK in case of success\n\n<pre><code>   - SoundTrigger.STATUS_ERROR in case of unspecified error\n   - SoundTrigger.STATUS_PERMISSION_DENIED if the caller does not have\n   system permission\n   - SoundTrigger.STATUS_NO_INIT if the native service cannot be reached\n   - SoundTrigger.STATUS_BAD_VALUE if the sound model handle is invalid\n   - SoundTrigger.STATUS_DEAD_OBJECT if the binder transaction to the native\n   service fails\n   - SoundTrigger.STATUS_INVALID_OPERATION if the call is out of sequence\n</code></pre></li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-unloadSoundModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.soundtrigger.SoundTriggerModule'>android.hardware.soundtrigger.SoundTriggerModule</span><br/><a href='source/SoundTriggerModule.html#android-hardware-soundtrigger-SoundTriggerModule-method-unloadSoundModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.soundtrigger.SoundTriggerModule-method-unloadSoundModel' class='name expandable'>unloadSoundModel</a>( <span class='pre'>soundModelHandle</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Unload a android.hardware.soundtrigger.SoundTrigger.SoundModel and abort any pendiong recognition ...</div><div class='long'><p>Unload a <a href=\"#!/api/android.hardware.soundtrigger.SoundTrigger.SoundModel\" rel=\"android.hardware.soundtrigger.SoundTrigger.SoundModel\" class=\"docClass\">android.hardware.soundtrigger.SoundTrigger.SoundModel</a> and abort any pendiong recognition</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>soundModelHandle</span> : Number<div class='sub-desc'><p>The sound model handle</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><ul>\n<li>SoundTrigger.STATUS_OK in case of success\n\n<pre><code>   - SoundTrigger.STATUS_ERROR in case of unspecified error\n   - SoundTrigger.STATUS_PERMISSION_DENIED if the caller does not have\n   system permission\n   - SoundTrigger.STATUS_NO_INIT if the native service cannot be reached\n   - SoundTrigger.STATUS_BAD_VALUE if the sound model handle is invalid\n   - SoundTrigger.STATUS_DEAD_OBJECT if the binder transaction to the native\n   service fails\n</code></pre></li>\n</ul>\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});