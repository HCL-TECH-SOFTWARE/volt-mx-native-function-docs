Ext.data.JsonP.android_media_AudioTimestamp({"tagname":"class","name":"android.media.AudioTimestamp","autodetected":{},"files":[{"filename":"AudioTimestamp.js","href":"AudioTimestamp.html#android-media-AudioTimestamp"}],"extends":"java.lang.Object","members":[{"name":"TIMEBASE_BOOTTIME","tagname":"property","owner":"android.media.AudioTimestamp","id":"property-TIMEBASE_BOOTTIME","meta":{}},{"name":"TIMEBASE_MONOTONIC","tagname":"property","owner":"android.media.AudioTimestamp","id":"property-TIMEBASE_MONOTONIC","meta":{}},{"name":"framePosition","tagname":"property","owner":"android.media.AudioTimestamp","id":"property-framePosition","meta":{}},{"name":"nanoTime","tagname":"property","owner":"android.media.AudioTimestamp","id":"property-nanoTime","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.media.AudioTimestamp","short_doc":"Structure that groups a position in frame units relative to an assumed audio stream,\n together with the estimated tim...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.media.AudioTimestamp</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/AudioTimestamp.html#android-media-AudioTimestamp' target='_blank'>AudioTimestamp.js</a></div></pre><div class='doc-contents'><p>Structure that groups a position in frame units relative to an assumed audio stream,\n together with the estimated time when that frame enters or leaves the audio\n processing pipeline on that device. This can be used to coordinate events\n and interactions with the external environment.\n <p>\n The time is based on the implementation's best effort, using whatever knowledge\n is available to the system, but cannot account for any delay unknown to the implementation.</p>\n\n<p> @see AudioTrack#getTimestamp AudioTrack.getTimestamp(AudioTimestamp)\n @see AudioRecord#getTimestamp AudioRecord.getTimestamp(AudioTimestamp, int)</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-TIMEBASE_BOOTTIME' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.AudioTimestamp'>android.media.AudioTimestamp</span><br/><a href='source/AudioTimestamp.html#android-media-AudioTimestamp-property-TIMEBASE_BOOTTIME' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.AudioTimestamp-property-TIMEBASE_BOOTTIME' class='name expandable'>TIMEBASE_BOOTTIME</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Clock monotonic including suspend time or its equivalent on the system,\nin the same units and timebase as android.os....</div><div class='long'><p>Clock monotonic including suspend time or its equivalent on the system,\nin the same units and timebase as android.os.SystemClock.elapsedRealtimeNanos.</p>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-TIMEBASE_MONOTONIC' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.AudioTimestamp'>android.media.AudioTimestamp</span><br/><a href='source/AudioTimestamp.html#android-media-AudioTimestamp-property-TIMEBASE_MONOTONIC' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.AudioTimestamp-property-TIMEBASE_MONOTONIC' class='name expandable'>TIMEBASE_MONOTONIC</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Clock monotonic or its equivalent on the system,\nin the same units and timebase as java.lang.System.nanoTime. ...</div><div class='long'><p>Clock monotonic or its equivalent on the system,\nin the same units and timebase as java.lang.System.nanoTime.</p>\n<p>Defaults to: <code>&quot;0&quot;</code></p></div></div></div><div id='property-framePosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.AudioTimestamp'>android.media.AudioTimestamp</span><br/><a href='source/AudioTimestamp.html#android-media-AudioTimestamp-property-framePosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.AudioTimestamp-property-framePosition' class='name expandable'>framePosition</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Position in frames relative to start of an assumed audio stream. ...</div><div class='long'><p>Position in frames relative to start of an assumed audio stream.</p>\n\n<p><p>\nWhen obtained through\n<a href=\"#!/api/android.media.AudioRecord-method-getTimestamp\" rel=\"android.media.AudioRecord-method-getTimestamp\" class=\"docClass\">android.media.AudioRecord.getTimestamp(AudioTimestamp, int)</a>,\nall 64 bits of position are valid.\n<p>\nWhen obtained through\n<a href=\"#!/api/android.media.AudioTrack-method-getTimestamp\" rel=\"android.media.AudioTrack-method-getTimestamp\" class=\"docClass\">android.media.AudioTrack.getTimestamp(AudioTimestamp)</a>,\nthe low-order 32 bits of position is in wrapping frame units similar to\n<a href=\"#!/api/android.media.AudioTrack-method-getPlaybackHeadPosition\" rel=\"android.media.AudioTrack-method-getPlaybackHeadPosition\" class=\"docClass\">android.media.AudioTrack.getPlaybackHeadPosition()</a>.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-nanoTime' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.AudioTimestamp'>android.media.AudioTimestamp</span><br/><a href='source/AudioTimestamp.html#android-media-AudioTimestamp-property-nanoTime' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.AudioTimestamp-property-nanoTime' class='name expandable'>nanoTime</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Time associated with the frame in the audio pipeline. ...</div><div class='long'><p>Time associated with the frame in the audio pipeline.</p>\n\n<p><p>\nWhen obtained through\n<a href=\"#!/api/android.media.AudioRecord-method-getTimestamp\" rel=\"android.media.AudioRecord-method-getTimestamp\" class=\"docClass\">android.media.AudioRecord.getTimestamp(AudioTimestamp, int)</a>,\nthis is the estimated time in nanoseconds when the frame referred to by\n<a href=\"#!/api/android.media.AudioTimestamp-property-framePosition\" rel=\"android.media.AudioTimestamp-property-framePosition\" class=\"docClass\">framePosition</a> was captured. The timebase is either\n<a href=\"#!/api/android.media.AudioTimestamp-property-TIMEBASE_MONOTONIC\" rel=\"android.media.AudioTimestamp-property-TIMEBASE_MONOTONIC\" class=\"docClass\">TIMEBASE_MONOTONIC</a> or <a href=\"#!/api/android.media.AudioTimestamp-property-TIMEBASE_BOOTTIME\" rel=\"android.media.AudioTimestamp-property-TIMEBASE_BOOTTIME\" class=\"docClass\">TIMEBASE_BOOTTIME</a>, depending\non the timebase parameter used in\n<a href=\"#!/api/android.media.AudioRecord-method-getTimestamp\" rel=\"android.media.AudioRecord-method-getTimestamp\" class=\"docClass\">android.media.AudioRecord.getTimestamp(AudioTimestamp, int)</a>.\n<p>\nWhen obtained through\n<a href=\"#!/api/android.media.AudioTrack-method-getTimestamp\" rel=\"android.media.AudioTrack-method-getTimestamp\" class=\"docClass\">android.media.AudioTrack.getTimestamp(AudioTimestamp)</a>,\nthis is the estimated time when the frame was presented or is committed to be presented,\nwith a timebase of <a href=\"#!/api/android.media.AudioTimestamp-property-TIMEBASE_MONOTONIC\" rel=\"android.media.AudioTimestamp-property-TIMEBASE_MONOTONIC\" class=\"docClass\">TIMEBASE_MONOTONIC</a>.</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div></div></div></div></div>","meta":{}});