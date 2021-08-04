Ext.data.JsonP.android_media_SoundPool({"tagname":"class","name":"android.media.SoundPool","autodetected":{},"files":[{"filename":"SoundPool.js","href":"SoundPool.html#android-media-SoundPool"}],"extends":"android.media.PlayerBase","members":[{"name":"autoPause","tagname":"method","owner":"android.media.SoundPool","id":"method-autoPause","meta":{}},{"name":"autoResume","tagname":"method","owner":"android.media.SoundPool","id":"method-autoResume","meta":{}},{"name":"deprecateStreamTypeForPlayback","tagname":"method","owner":"android.media.PlayerBase","id":"method-deprecateStreamTypeForPlayback","meta":{}},{"name":"load","tagname":"method","owner":"android.media.SoundPool","id":"method-load","meta":{}},{"name":"pause","tagname":"method","owner":"android.media.SoundPool","id":"method-pause","meta":{}},{"name":"play","tagname":"method","owner":"android.media.SoundPool","id":"method-play","meta":{}},{"name":"release","tagname":"method","owner":"android.media.SoundPool","id":"method-release","meta":{}},{"name":"resume","tagname":"method","owner":"android.media.SoundPool","id":"method-resume","meta":{}},{"name":"setLoop","tagname":"method","owner":"android.media.SoundPool","id":"method-setLoop","meta":{}},{"name":"setOnLoadCompleteListener","tagname":"method","owner":"android.media.SoundPool","id":"method-setOnLoadCompleteListener","meta":{}},{"name":"setPriority","tagname":"method","owner":"android.media.SoundPool","id":"method-setPriority","meta":{}},{"name":"setRate","tagname":"method","owner":"android.media.SoundPool","id":"method-setRate","meta":{}},{"name":"setStartDelayMs","tagname":"method","owner":"android.media.PlayerBase","id":"method-setStartDelayMs","meta":{}},{"name":"stop","tagname":"method","owner":"android.media.SoundPool","id":"method-stop","meta":{}},{"name":"unload","tagname":"method","owner":"android.media.SoundPool","id":"method-unload","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.media.SoundPool","short_doc":"The SoundPool class manages and plays audio resources for applications. ...","classIcon":"icon-class","superclasses":["java.lang.Object","android.media.PlayerBase"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><a href='#!/api/android.media.PlayerBase' rel='android.media.PlayerBase' class='docClass'>android.media.PlayerBase</a><div class='subclass '><strong>android.media.SoundPool</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/SoundPool.html#android-media-SoundPool' target='_blank'>SoundPool.js</a></div></pre><div class='doc-contents'><p>The SoundPool class manages and plays audio resources for applications.</p>\n\n<p> <p>A SoundPool is a collection of samples that can be loaded into memory\n from a resource inside the APK or from a file in the file system. The\n SoundPool library uses the MediaPlayer service to decode the audio\n into a raw 16-bit PCM mono or stereo stream. This allows applications\n to ship with compressed streams without having to suffer the CPU load\n and latency of decompressing during playback.</p></p>\n\n<p> <p>In addition to low-latency playback, SoundPool can also manage the number\n of audio streams being rendered at once. When the SoundPool object is\n constructed, the maxStreams parameter sets the maximum number of streams\n that can be played at a time from this single SoundPool. SoundPool tracks\n the number of active streams. If the maximum number of streams is exceeded,\n SoundPool will automatically stop a previously playing stream based first\n on priority and then by age within that priority. Limiting the maximum\n number of streams helps to cap CPU loading and reducing the likelihood that\n audio mixing will impact visuals or UI performance.</p></p>\n\n<p> <p>Sounds can be looped by setting a non-zero loop value. A value of -1\n causes the sound to loop forever. In this case, the application must\n explicitly call the stop() function to stop the sound. Any other non-zero\n value will cause the sound to repeat the specified number of times, e.g.\n a value of 3 causes the sound to play a total of 4 times.</p></p>\n\n<p> <p>The playback rate can also be changed. A playback rate of 1.0 causes\n the sound to play at its original frequency (resampled, if necessary,\n to the hardware output frequency). A playback rate of 2.0 causes the\n sound to play at twice its original frequency, and a playback rate of\n 0.5 causes it to play at half its original frequency. The playback\n rate range is 0.5 to 2.0.</p></p>\n\n<p> <p>Priority runs low to high, i.e. higher numbers are higher priority.\n Priority is used when a call to play() would cause the number of active\n streams to exceed the value established by the maxStreams parameter when\n the SoundPool was created. In this case, the stream allocator will stop\n the lowest priority stream. If there are multiple streams with the same\n low priority, it will choose the oldest stream to stop. In the case\n where the priority of the new stream is lower than all the active\n streams, the new sound will not play and the play() function will return\n a streamID of zero.</p></p>\n\n<p> <p>Let's examine a typical use case: A game consists of several levels of\n play. For each level, there is a set of unique sounds that are used only\n by that level. In this case, the game logic should create a new SoundPool\n object when the first level is loaded. The level data itself might contain\n the list of sounds to be used by this level. The loading logic iterates\n through the list of sounds calling the appropriate SoundPool.load()\n function. This should typically be done early in the process to allow time\n for decompressing the audio to raw PCM format before they are needed for\n playback.</p></p>\n\n<p> <p>Once the sounds are loaded and play has started, the application can\n trigger sounds by calling SoundPool.play(). Playing streams can be\n paused or resumed, and the application can also alter the pitch by\n adjusting the playback rate in real-time for doppler or synthesis\n effects.</p></p>\n\n<p> <p>Note that since streams can be stopped due to resource constraints, the\n streamID is a reference to a particular instance of a stream. If the stream\n is stopped to allow a higher priority stream to play, the stream is no\n longer valid. However, the application is allowed to call methods on\n the streamID without error. This may help simplify program logic since\n the application need not concern itself with the stream lifecycle.</p></p>\n\n<p> <p>In our example, when the player has completed the level, the game\n logic should call SoundPool.release() to release all the native resources\n in use and then set the SoundPool reference to null. If the player starts\n another level, a new SoundPool is created, sounds are loaded, and play\n resumes.</p></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-autoPause' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.SoundPool'>android.media.SoundPool</span><br/><a href='source/SoundPool.html#android-media-SoundPool-method-autoPause' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.SoundPool-method-autoPause' class='name expandable'>autoPause</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Pause all active streams. ...</div><div class='long'><p>Pause all active streams.</p>\n\n<p> Pause all streams that are currently playing. This function\n iterates through all the active streams and pauses any that\n are playing. It also sets a flag so that any streams that\n are playing can be resumed by calling autoResume().</p>\n</div></div></div><div id='method-autoResume' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.SoundPool'>android.media.SoundPool</span><br/><a href='source/SoundPool.html#android-media-SoundPool-method-autoResume' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.SoundPool-method-autoResume' class='name expandable'>autoResume</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Resume all previously active streams. ...</div><div class='long'><p>Resume all previously active streams.</p>\n\n<p> Automatically resumes all streams that were paused in previous\n calls to autoPause().</p>\n</div></div></div><div id='method-deprecateStreamTypeForPlayback' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.media.PlayerBase' rel='android.media.PlayerBase' class='defined-in docClass'>android.media.PlayerBase</a><br/><a href='source/PlayerBase.html#android-media-PlayerBase-method-deprecateStreamTypeForPlayback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.PlayerBase-method-deprecateStreamTypeForPlayback' class='name expandable'>deprecateStreamTypeForPlayback</a>( <span class='pre'>streamType, streamType</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>streamType</span> : Number<div class='sub-desc'><p>the stream type to check</p>\n</div></li><li><span class='pre'>streamType</span> : Object<div class='sub-desc'><p>the stream type to check</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalArgumentException</p>\n</div></li></ul></div></div></div><div id='method-load' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.SoundPool'>android.media.SoundPool</span><br/><a href='source/SoundPool.html#android-media-SoundPool-method-load' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.SoundPool-method-load' class='name expandable'>load</a>( <span class='pre'>fd, offset, length, priority</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Load the sound from a FileDescriptor. ...</div><div class='long'><p>Load the sound from a FileDescriptor.</p>\n\n<p> This version is useful if you store multiple sounds in a single\n binary. The offset specifies the offset from the start of the file\n and the length specifies the length of the sound within the file.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fd</span> : Object {FileDescriptor}<div class='sub-desc'><p>a FileDescriptor object</p>\n</div></li><li><span class='pre'>offset</span> : Number<div class='sub-desc'><p>offset to the start of the sound</p>\n</div></li><li><span class='pre'>length</span> : Number<div class='sub-desc'><p>length of the sound</p>\n</div></li><li><span class='pre'>priority</span> : Number<div class='sub-desc'><p>the priority of the sound. Currently has no effect. Use\n                 a value of 1 for future compatibility.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>a sound ID. This value can be used to play or unload the sound.</p>\n</div></li></ul></div></div></div><div id='method-pause' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.SoundPool'>android.media.SoundPool</span><br/><a href='source/SoundPool.html#android-media-SoundPool-method-pause' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.SoundPool-method-pause' class='name expandable'>pause</a>( <span class='pre'>streamID</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Pause a playback stream. ...</div><div class='long'><p>Pause a playback stream.</p>\n\n<p> Pause the stream specified by the streamID. This is the\n value returned by the play() function. If the stream is\n playing, it will be paused. If the stream is not playing\n (e.g. is stopped or was previously paused), calling this\n function will have no effect.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>streamID</span> : Number<div class='sub-desc'><p>a streamID returned by the play() function</p>\n</div></li></ul></div></div></div><div id='method-play' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.SoundPool'>android.media.SoundPool</span><br/><a href='source/SoundPool.html#android-media-SoundPool-method-play' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.SoundPool-method-play' class='name expandable'>play</a>( <span class='pre'>soundID, leftVolume, rightVolume, priority, loop, rate</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Play a sound from a sound ID. ...</div><div class='long'><p>Play a sound from a sound ID.</p>\n\n<p> Play the sound specified by the soundID. This is the value\n returned by the load() function. Returns a non-zero streamID\n if successful, zero if it fails. The streamID can be used to\n further control playback. Note that calling play() may cause\n another sound to stop playing if the maximum number of active\n streams is exceeded. A loop value of -1 means loop forever,\n a value of 0 means don't loop, other values indicate the\n number of repeats, e.g. a value of 1 plays the audio twice.\n The playback rate allows the application to vary the playback\n rate (pitch) of the sound. A value of 1.0 means play back at\n the original frequency. A value of 2.0 means play back twice\n as fast, and a value of 0.5 means playback at half speed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>soundID</span> : Number<div class='sub-desc'><p>a soundID returned by the load() function</p>\n</div></li><li><span class='pre'>leftVolume</span> : Number<div class='sub-desc'><p>left volume value (range = 0.0 to 1.0)</p>\n</div></li><li><span class='pre'>rightVolume</span> : Number<div class='sub-desc'><p>right volume value (range = 0.0 to 1.0)</p>\n</div></li><li><span class='pre'>priority</span> : Number<div class='sub-desc'><p>stream priority (0 = lowest priority)</p>\n</div></li><li><span class='pre'>loop</span> : Number<div class='sub-desc'><p>loop mode (0 = no loop, -1 = loop forever)</p>\n</div></li><li><span class='pre'>rate</span> : Number<div class='sub-desc'><p>playback rate (1.0 = normal playback, range 0.5 to 2.0)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>non-zero streamID if successful, zero if failed</p>\n</div></li></ul></div></div></div><div id='method-release' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.SoundPool'>android.media.SoundPool</span><br/><a href='source/SoundPool.html#android-media-SoundPool-method-release' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.SoundPool-method-release' class='name expandable'>release</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Release the SoundPool resources. ...</div><div class='long'><p>Release the SoundPool resources.</p>\n\n<p> Release all memory and native resources used by the SoundPool\n object. The SoundPool can no longer be used and the reference\n should be set to null.</p>\n</div></div></div><div id='method-resume' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.SoundPool'>android.media.SoundPool</span><br/><a href='source/SoundPool.html#android-media-SoundPool-method-resume' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.SoundPool-method-resume' class='name expandable'>resume</a>( <span class='pre'>streamID</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Resume a playback stream. ...</div><div class='long'><p>Resume a playback stream.</p>\n\n<p> Resume the stream specified by the streamID. This\n is the value returned by the play() function. If the stream\n is paused, this will resume playback. If the stream was not\n previously paused, calling this function will have no effect.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>streamID</span> : Number<div class='sub-desc'><p>a streamID returned by the play() function</p>\n</div></li></ul></div></div></div><div id='method-setLoop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.SoundPool'>android.media.SoundPool</span><br/><a href='source/SoundPool.html#android-media-SoundPool-method-setLoop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.SoundPool-method-setLoop' class='name expandable'>setLoop</a>( <span class='pre'>streamID, loop</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set loop mode. ...</div><div class='long'><p>Set loop mode.</p>\n\n<p> Change the loop mode. A loop value of -1 means loop forever,\n a value of 0 means don't loop, other values indicate the\n number of repeats, e.g. a value of 1 plays the audio twice.\n If the stream does not exist, it will have no effect.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>streamID</span> : Number<div class='sub-desc'><p>a streamID returned by the play() function</p>\n</div></li><li><span class='pre'>loop</span> : Number<div class='sub-desc'><p>loop mode (0 = no loop, -1 = loop forever)</p>\n</div></li></ul></div></div></div><div id='method-setOnLoadCompleteListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.SoundPool'>android.media.SoundPool</span><br/><a href='source/SoundPool.html#android-media-SoundPool-method-setOnLoadCompleteListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.SoundPool-method-setOnLoadCompleteListener' class='name expandable'>setOnLoadCompleteListener</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the callback hook for the OnLoadCompleteListener. ...</div><div class='long'><p>Sets the callback hook for the OnLoadCompleteListener.</p>\n</div></div></div><div id='method-setPriority' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.SoundPool'>android.media.SoundPool</span><br/><a href='source/SoundPool.html#android-media-SoundPool-method-setPriority' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.SoundPool-method-setPriority' class='name expandable'>setPriority</a>( <span class='pre'>streamID</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Change stream priority. ...</div><div class='long'><p>Change stream priority.</p>\n\n<p> Change the priority of the stream specified by the streamID.\n This is the value returned by the play() function. Affects the\n order in which streams are re-used to play new sounds. If the\n stream does not exist, it will have no effect.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>streamID</span> : Number<div class='sub-desc'><p>a streamID returned by the play() function</p>\n</div></li></ul></div></div></div><div id='method-setRate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.SoundPool'>android.media.SoundPool</span><br/><a href='source/SoundPool.html#android-media-SoundPool-method-setRate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.SoundPool-method-setRate' class='name expandable'>setRate</a>( <span class='pre'>streamID, rate</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Change playback rate. ...</div><div class='long'><p>Change playback rate.</p>\n\n<p> The playback rate allows the application to vary the playback\n rate (pitch) of the sound. A value of 1.0 means playback at\n the original frequency. A value of 2.0 means playback twice\n as fast, and a value of 0.5 means playback at half speed.\n If the stream does not exist, it will have no effect.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>streamID</span> : Number<div class='sub-desc'><p>a streamID returned by the play() function</p>\n</div></li><li><span class='pre'>rate</span> : Number<div class='sub-desc'><p>playback rate (1.0 = normal playback, range 0.5 to 2.0)</p>\n</div></li></ul></div></div></div><div id='method-setStartDelayMs' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.media.PlayerBase' rel='android.media.PlayerBase' class='defined-in docClass'>android.media.PlayerBase</a><br/><a href='source/PlayerBase.html#android-media-PlayerBase-method-setStartDelayMs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.PlayerBase-method-setStartDelayMs' class='name expandable'>setStartDelayMs</a>( <span class='pre'>delayMs, delayMs</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>delayMs</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>delayMs</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.SoundPool'>android.media.SoundPool</span><br/><a href='source/SoundPool.html#android-media-SoundPool-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.SoundPool-method-stop' class='name expandable'>stop</a>( <span class='pre'>streamID</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Stop a playback stream. ...</div><div class='long'><p>Stop a playback stream.</p>\n\n<p> Stop the stream specified by the streamID. This\n is the value returned by the play() function. If the stream\n is playing, it will be stopped. It also releases any native\n resources associated with this stream. If the stream is not\n playing, it will have no effect.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>streamID</span> : Number<div class='sub-desc'><p>a streamID returned by the play() function</p>\n</div></li></ul></div></div></div><div id='method-unload' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.SoundPool'>android.media.SoundPool</span><br/><a href='source/SoundPool.html#android-media-SoundPool-method-unload' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.SoundPool-method-unload' class='name expandable'>unload</a>( <span class='pre'>soundID</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Unload a sound from a sound ID. ...</div><div class='long'><p>Unload a sound from a sound ID.</p>\n\n<p> Unloads the sound specified by the soundID. This is the value\n returned by the load() function. Returns true if the sound is\n successfully unloaded, false if the sound was already unloaded.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>soundID</span> : Number<div class='sub-desc'><p>a soundID returned by the load() function</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if just unloaded, false if previously unloaded</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});