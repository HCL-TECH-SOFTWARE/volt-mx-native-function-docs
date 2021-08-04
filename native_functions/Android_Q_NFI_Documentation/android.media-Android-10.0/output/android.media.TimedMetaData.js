Ext.data.JsonP.android_media_TimedMetaData({"tagname":"class","name":"android.media.TimedMetaData","autodetected":{},"files":[{"filename":"TimedMetaData.js","href":"TimedMetaData.html#android-media-TimedMetaData"}],"extends":"java.lang.Object","members":[{"name":"getMetaData","tagname":"method","owner":"android.media.TimedMetaData","id":"method-getMetaData","meta":{}},{"name":"getTimestamp","tagname":"method","owner":"android.media.TimedMetaData","id":"method-getTimestamp","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.media.TimedMetaData","short_doc":"Class that embodies one timed metadata access unit, including\n\n \n  a time stamp, and \n  raw uninterpreted byte-array ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.media.TimedMetaData</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/TimedMetaData.html#android-media-TimedMetaData' target='_blank'>TimedMetaData.js</a></div></pre><div class='doc-contents'><p>Class that embodies one timed metadata access unit, including</p>\n\n<p> <ul>\n <li> a time stamp, and </li>\n <li> raw uninterpreted byte-array extracted directly from the container. </li>\n </ul></p>\n\n<p> @see MediaPlayer#setOnTimedMetaDataAvailableListener(<a href=\"#!/api/android.media.MediaPlayer.OnTimedMetaDataAvailableListener\" rel=\"android.media.MediaPlayer.OnTimedMetaDataAvailableListener\" class=\"docClass\">android.media.MediaPlayer.OnTimedMetaDataAvailableListener</a>)</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getMetaData' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.TimedMetaData'>android.media.TimedMetaData</span><br/><a href='source/TimedMetaData.html#android-media-TimedMetaData-method-getMetaData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.TimedMetaData-method-getMetaData' class='name expandable'>getMetaData</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>raw, uninterpreted content of this metadata access unit; for ID3 tags this includes\n everything starting from the 3 byte signature \"ID3\".</p>\n</div></li></ul></div></div></div><div id='method-getTimestamp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.TimedMetaData'>android.media.TimedMetaData</span><br/><a href='source/TimedMetaData.html#android-media-TimedMetaData-method-getTimestamp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.TimedMetaData-method-getTimestamp' class='name expandable'>getTimestamp</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>the timestamp associated with this metadata access unit in microseconds;\n 0 denotes playback start.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});