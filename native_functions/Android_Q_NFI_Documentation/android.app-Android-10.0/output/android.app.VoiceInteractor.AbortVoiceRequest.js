Ext.data.JsonP.android_app_VoiceInteractor_AbortVoiceRequest({"tagname":"class","name":"android.app.VoiceInteractor.AbortVoiceRequest","autodetected":{},"files":[{"filename":"AbortVoiceRequest.js","href":"AbortVoiceRequest.html#android-app-VoiceInteractor-AbortVoiceRequest"}],"extends":"android.app.VoiceInteractor.Request","members":[{"name":"onAbortResult","tagname":"method","owner":"android.app.VoiceInteractor.AbortVoiceRequest","id":"method-onAbortResult","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.app.VoiceInteractor.AbortVoiceRequest","short_doc":"Reports that the current interaction can not be complete with voice, so the\n application will need to switch to a tra...","classIcon":"icon-class","superclasses":["android.app.VoiceInteractor.Request"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>android.app.VoiceInteractor.Request<div class='subclass '><strong>android.app.VoiceInteractor.AbortVoiceRequest</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/AbortVoiceRequest.html#android-app-VoiceInteractor-AbortVoiceRequest' target='_blank'>AbortVoiceRequest.js</a></div></pre><div class='doc-contents'><p>Reports that the current interaction can not be complete with voice, so the\n application will need to switch to a traditional input UI.  Applications should\n only use this when they need to completely bail out of the voice interaction\n and switch to a traditional UI.  When the response comes back, the voice\n system has handled the request and is ready to switch; at that point the application\n can start a new non-voice activity.  Be sure when starting the new activity\n to use Intent.FLAG_ACTIVITY_NEW_TASK to keep the new activity out of the current voice\n interaction task.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-onAbortResult' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.VoiceInteractor.AbortVoiceRequest'>android.app.VoiceInteractor.AbortVoiceRequest</span><br/><a href='source/AbortVoiceRequest.html#android-app-VoiceInteractor-AbortVoiceRequest-method-onAbortResult' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.VoiceInteractor.AbortVoiceRequest-method-onAbortResult' class='name expandable'>onAbortResult</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});