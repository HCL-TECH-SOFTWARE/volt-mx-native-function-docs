Ext.data.JsonP.android_media_BufferingParams({"tagname":"class","name":"android.media.BufferingParams","autodetected":{},"files":[{"filename":"BufferingParams.js","href":"BufferingParams.html#android-media-BufferingParams"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"CREATOR","tagname":"property","owner":"android.media.BufferingParams","id":"property-CREATOR","meta":{}},{"name":"describeContents","tagname":"method","owner":"android.media.BufferingParams","id":"method-describeContents","meta":{}},{"name":"getInitialMarkMs","tagname":"method","owner":"android.media.BufferingParams","id":"method-getInitialMarkMs","meta":{}},{"name":"getResumePlaybackMarkMs","tagname":"method","owner":"android.media.BufferingParams","id":"method-getResumePlaybackMarkMs","meta":{}},{"name":"writeToParcel","tagname":"method","owner":"android.media.BufferingParams","id":"method-writeToParcel","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.media.BufferingParams","short_doc":"implements android.os.Parcelable\n\nStructure for source buffering management params. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.media.BufferingParams</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/BufferingParams.html#android-media-BufferingParams' target='_blank'>BufferingParams.js</a></div></pre><div class='doc-contents'><p>implements android.os.Parcelable</p>\n\n<p>Structure for source buffering management params.</p>\n\n<p> Used by android.media.MediaPlayer.getBufferingParams() and\n android.media.MediaPlayer.setBufferingParams(BufferingParams)\n to control source buffering behavior.</p>\n\n<p> <p>There are two stages of source buffering in <a href=\"#!/api/android.media.MediaPlayer\" rel=\"android.media.MediaPlayer\" class=\"docClass\">android.media.MediaPlayer</a>: initial buffering\n (when <a href=\"#!/api/android.media.MediaPlayer\" rel=\"android.media.MediaPlayer\" class=\"docClass\">android.media.MediaPlayer</a> is being prepared) and rebuffering (when <a href=\"#!/api/android.media.MediaPlayer\" rel=\"android.media.MediaPlayer\" class=\"docClass\">android.media.MediaPlayer</a>\n is playing back source). <a href=\"#!/api/android.media.BufferingParams\" rel=\"android.media.BufferingParams\" class=\"docClass\">android.media.BufferingParams</a> includes corresponding marks for each\n stage of source buffering. The marks are time based (in milliseconds).</p>\n\n<p> <p><a href=\"#!/api/android.media.MediaPlayer\" rel=\"android.media.MediaPlayer\" class=\"docClass\">android.media.MediaPlayer</a> source component has default marks which can be queried by\n calling android.media.MediaPlayer.getBufferingParams() before any change is made by\n android.media.MediaPlayer.setBufferingParams().\n <ul>\n <li><strong>initial buffering:</strong> initialMarkMs is used when\n <a href=\"#!/api/android.media.MediaPlayer\" rel=\"android.media.MediaPlayer\" class=\"docClass\">android.media.MediaPlayer</a> is being prepared. When cached data amount exceeds this mark\n <a href=\"#!/api/android.media.MediaPlayer\" rel=\"android.media.MediaPlayer\" class=\"docClass\">android.media.MediaPlayer</a> is prepared. </li>\n <li><strong>rebuffering during playback:</strong> resumePlaybackMarkMs is used when\n <a href=\"#!/api/android.media.MediaPlayer\" rel=\"android.media.MediaPlayer\" class=\"docClass\">android.media.MediaPlayer</a> is playing back content.\n <ul>\n <li> <a href=\"#!/api/android.media.MediaPlayer\" rel=\"android.media.MediaPlayer\" class=\"docClass\">android.media.MediaPlayer</a> has internal mark, namely pausePlaybackMarkMs, to decide when\n to pause playback if cached data amount runs low. This internal mark varies based on\n type of data source. </li>\n <li> When cached data amount exceeds resumePlaybackMarkMs, <a href=\"#!/api/android.media.MediaPlayer\" rel=\"android.media.MediaPlayer\" class=\"docClass\">android.media.MediaPlayer</a> will\n resume playback if it has been paused due to low cached data amount. The internal mark\n pausePlaybackMarkMs shall be less than resumePlaybackMarkMs. </li>\n <li> <a href=\"#!/api/android.media.MediaPlayer\" rel=\"android.media.MediaPlayer\" class=\"docClass\">android.media.MediaPlayer</a> has internal mark, namely pauseRebufferingMarkMs, to decide\n when to pause rebuffering. Apparently, this internal mark shall be no less than\n resumePlaybackMarkMs. </li>\n <li> <a href=\"#!/api/android.media.MediaPlayer\" rel=\"android.media.MediaPlayer\" class=\"docClass\">android.media.MediaPlayer</a> has internal mark, namely resumeRebufferingMarkMs, to decide\n when to resume buffering. This internal mark varies based on type of data source. This\n mark shall be larger than pausePlaybackMarkMs, and less than pauseRebufferingMarkMs.\n </li>\n </ul> </li>\n </ul>\n <p>Users should use <a href=\"#!/api/android.media.AudioAttributes.Builder\" rel=\"android.media.AudioAttributes.Builder\" class=\"docClass\">android.media.AudioAttributes.Builder</a> to change <a href=\"#!/api/android.media.BufferingParams\" rel=\"android.media.BufferingParams\" class=\"docClass\">android.media.BufferingParams</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-CREATOR' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.BufferingParams'>android.media.BufferingParams</span><br/><a href='source/BufferingParams.html#android-media-BufferingParams-property-CREATOR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.BufferingParams-property-CREATOR' class='name expandable'>CREATOR</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-describeContents' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.BufferingParams'>android.media.BufferingParams</span><br/><a href='source/BufferingParams.html#android-media-BufferingParams-method-describeContents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.BufferingParams-method-describeContents' class='name expandable'>describeContents</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getInitialMarkMs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.BufferingParams'>android.media.BufferingParams</span><br/><a href='source/BufferingParams.html#android-media-BufferingParams-method-getInitialMarkMs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.BufferingParams-method-getInitialMarkMs' class='name expandable'>getInitialMarkMs</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Return initial buffering mark in milliseconds. ...</div><div class='long'><p>Return initial buffering mark in milliseconds.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>initial buffering mark in milliseconds</p>\n</div></li></ul></div></div></div><div id='method-getResumePlaybackMarkMs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.BufferingParams'>android.media.BufferingParams</span><br/><a href='source/BufferingParams.html#android-media-BufferingParams-method-getResumePlaybackMarkMs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.BufferingParams-method-getResumePlaybackMarkMs' class='name expandable'>getResumePlaybackMarkMs</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the mark in milliseconds for resuming playback. ...</div><div class='long'><p>Return the mark in milliseconds for resuming playback.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>the mark for resuming playback in milliseconds</p>\n</div></li></ul></div></div></div><div id='method-writeToParcel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.BufferingParams'>android.media.BufferingParams</span><br/><a href='source/BufferingParams.html#android-media-BufferingParams-method-writeToParcel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.BufferingParams-method-writeToParcel' class='name expandable'>writeToParcel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});