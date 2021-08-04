Ext.data.JsonP.android_media_tv_TvRecordingClient({"tagname":"class","name":"android.media.tv.TvRecordingClient","autodetected":{},"files":[{"filename":"TvRecordingClient.js","href":"TvRecordingClient.html#android-media-tv-TvRecordingClient"}],"extends":"java.lang.Object","members":[{"name":"release","tagname":"method","owner":"android.media.tv.TvRecordingClient","id":"method-release","meta":{}},{"name":"sendAppPrivateCommand","tagname":"method","owner":"android.media.tv.TvRecordingClient","id":"method-sendAppPrivateCommand","meta":{}},{"name":"startRecording","tagname":"method","owner":"android.media.tv.TvRecordingClient","id":"method-startRecording","meta":{}},{"name":"stopRecording","tagname":"method","owner":"android.media.tv.TvRecordingClient","id":"method-stopRecording","meta":{}},{"name":"tune","tagname":"method","owner":"android.media.tv.TvRecordingClient","id":"method-tune","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.media.tv.TvRecordingClient","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.media.tv.TvRecordingClient</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/TvRecordingClient.html#android-media-tv-TvRecordingClient' target='_blank'>TvRecordingClient.js</a></div></pre><div class='doc-contents'><p>The public interface object used to interact with a specific TV input service for TV program\n recording.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-release' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.tv.TvRecordingClient'>android.media.tv.TvRecordingClient</span><br/><a href='source/TvRecordingClient.html#android-media-tv-TvRecordingClient-method-release' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.tv.TvRecordingClient-method-release' class='name expandable'>release</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Releases the resources in the current recording session immediately. ...</div><div class='long'><p>Releases the resources in the current recording session immediately. This may be called at\n any time, however if the session is already released, it does nothing.</p>\n</div></div></div><div id='method-sendAppPrivateCommand' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.tv.TvRecordingClient'>android.media.tv.TvRecordingClient</span><br/><a href='source/TvRecordingClient.html#android-media-tv-TvRecordingClient-method-sendAppPrivateCommand' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.tv.TvRecordingClient-method-sendAppPrivateCommand' class='name expandable'>sendAppPrivateCommand</a>( <span class='pre'>action, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sends a private command to the underlying TV input. ...</div><div class='long'><p>Sends a private command to the underlying TV input. This can be used to provide\n domain-specific features that are only known between certain clients and their TV inputs.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>action</span> : String<div class='sub-desc'><p>The name of the private command to send. This <em>must</em> be a scoped name,\n            i.e. prefixed with a package name you own, so that different developers will not\n            create conflicting commands.</p>\n</div></li><li><span class='pre'>data</span> : Object {Bundle}<div class='sub-desc'><p>An optional bundle to send with the command.</p>\n</div></li></ul></div></div></div><div id='method-startRecording' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.tv.TvRecordingClient'>android.media.tv.TvRecordingClient</span><br/><a href='source/TvRecordingClient.html#android-media-tv-TvRecordingClient-method-startRecording' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.tv.TvRecordingClient-method-startRecording' class='name expandable'>startRecording</a>( <span class='pre'>programUri</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Starts TV program recording in the current recording session. ...</div><div class='long'><p>Starts TV program recording in the current recording session. Recording is expected to start\n immediately when this method is called. If the current recording session has not yet tuned to\n any channel, this method throws an exception.</p>\n\n<p> <p>The application may supply the URI for a TV program for filling in program specific data\n fields in the <a href=\"#!/api/android.media.tv.TvContract.RecordedPrograms\" rel=\"android.media.tv.TvContract.RecordedPrograms\" class=\"docClass\">android.media.tv.TvContract.RecordedPrograms</a> table.\n A non-null {@code programUri} implies the started recording should be of that specific\n program, whereas null {@code programUri} does not impose such a requirement and the\n recording can span across multiple TV programs. In either case, the application must call\n stopRecording() to stop the recording.</p>\n\n<p> <p>The recording session will respond by calling android.media.tv.TvRecordingClient.RecordingCallback.onError(int) if\n the start request cannot be fulfilled.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>programUri</span> : Object {Uri}<div class='sub-desc'><p>The URI for the TV program to record, built by\n            TvContract.buildProgramUri(long). Can be {@code null}.</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalStateException If <a href=\"#!/api/android.media.tv.TvRecordingClient-method-tune\" rel=\"android.media.tv.TvRecordingClient-method-tune\" class=\"docClass\">tune</a> request hasn't been handled yet.</p>\n</div></li></ul></div></div></div><div id='method-stopRecording' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.tv.TvRecordingClient'>android.media.tv.TvRecordingClient</span><br/><a href='source/TvRecordingClient.html#android-media-tv-TvRecordingClient-method-stopRecording' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.tv.TvRecordingClient-method-stopRecording' class='name expandable'>stopRecording</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Stops TV program recording in the current recording session. ...</div><div class='long'><p>Stops TV program recording in the current recording session. Recording is expected to stop\n immediately when this method is called. If recording has not yet started in the current\n recording session, this method does nothing.</p>\n\n<p> <p>The recording session is expected to create a new data entry in the\n <a href=\"#!/api/android.media.tv.TvContract.RecordedPrograms\" rel=\"android.media.tv.TvContract.RecordedPrograms\" class=\"docClass\">android.media.tv.TvContract.RecordedPrograms</a> table that describes the newly\n recorded program and pass the URI to that entry through to\n android.media.tv.TvRecordingClient.RecordingCallback.onRecordingStopped(Uri).\n If the stop request cannot be fulfilled, the recording session will respond by calling\n android.media.tv.TvRecordingClient.RecordingCallback.onError(int).</p>\n</div></div></div><div id='method-tune' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.tv.TvRecordingClient'>android.media.tv.TvRecordingClient</span><br/><a href='source/TvRecordingClient.html#android-media-tv-TvRecordingClient-method-tune' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.tv.TvRecordingClient-method-tune' class='name expandable'>tune</a>( <span class='pre'>inputId, channelUri, params</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Tunes to a given channel for TV program recording. ...</div><div class='long'><p>Tunes to a given channel for TV program recording. The first tune request will create a new\n recording session for the corresponding TV input and establish a connection between the\n application and the session. If recording has already started in the current recording\n session, this method throws an exception. This can be used to provide domain-specific\n features that are only known between certain client and their TV inputs.</p>\n\n<p> <p>The application may call this method before starting or after stopping recording, but not\n during recording.</p>\n\n<p> <p>The recording session will respond by calling\n android.media.tv.TvRecordingClient.RecordingCallback.onTuned(Uri) if the tune request was fulfilled, or\n android.media.tv.TvRecordingClient.RecordingCallback.onError(int) otherwise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>inputId</span> : String<div class='sub-desc'><p>The ID of the TV input for the given channel.</p>\n</div></li><li><span class='pre'>channelUri</span> : Object {Uri}<div class='sub-desc'><p>The URI of a channel.</p>\n</div></li><li><span class='pre'>params</span> : Object {Bundle}<div class='sub-desc'><p>Domain-specific data for this tune request. Keys <em>must</em> be a scoped\n            name, i.e. prefixed with a package name you own, so that different developers will\n            not create conflicting keys.</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalStateException If recording is already started.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});