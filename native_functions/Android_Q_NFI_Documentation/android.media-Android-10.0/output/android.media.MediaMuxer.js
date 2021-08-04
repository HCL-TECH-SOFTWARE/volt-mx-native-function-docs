Ext.data.JsonP.android_media_MediaMuxer({"tagname":"class","name":"android.media.MediaMuxer","autodetected":{},"files":[{"filename":"MediaMuxer.js","href":"MediaMuxer.html#android-media-MediaMuxer"}],"extends":"java.lang.Object","members":[{"name":"addTrack","tagname":"method","owner":"android.media.MediaMuxer","id":"method-addTrack","meta":{}},{"name":"release","tagname":"method","owner":"android.media.MediaMuxer","id":"method-release","meta":{}},{"name":"setLocation","tagname":"method","owner":"android.media.MediaMuxer","id":"method-setLocation","meta":{}},{"name":"setOrientationHint","tagname":"method","owner":"android.media.MediaMuxer","id":"method-setOrientationHint","meta":{}},{"name":"start","tagname":"method","owner":"android.media.MediaMuxer","id":"method-start","meta":{}},{"name":"stop","tagname":"method","owner":"android.media.MediaMuxer","id":"method-stop","meta":{}},{"name":"writeSampleData","tagname":"method","owner":"android.media.MediaMuxer","id":"method-writeSampleData","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.media.MediaMuxer","short_doc":"MediaMuxer facilitates muxing elementary streams. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.media.MediaMuxer</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/MediaMuxer.html#android-media-MediaMuxer' target='_blank'>MediaMuxer.js</a></div></pre><div class='doc-contents'><p>MediaMuxer facilitates muxing elementary streams. Currently MediaMuxer supports MP4, Webm\n and 3GP file as the output. It also supports muxing B-frames in MP4 since Android Nougat.\n <p>\n It is generally used like this:</p>\n\n<pre> MediaMuxer muxer = new MediaMuxer(\"temp.mp4\", OutputFormat.MUXER_OUTPUT_MPEG_4);\n // More often, the MediaFormat will be retrieved from MediaCodec.getOutputFormat()\n // or MediaExtractor.getTrackFormat().\n MediaFormat audioFormat = new MediaFormat(...);\n MediaFormat videoFormat = new MediaFormat(...);\n int audioTrackIndex = muxer.addTrack(audioFormat);\n int videoTrackIndex = muxer.addTrack(videoFormat);\n ByteBuffer inputBuffer = ByteBuffer.allocate(bufferSize);\n boolean finished = false;\n BufferInfo bufferInfo = new BufferInfo();\n\n muxer.start();\n while(!finished) {\n   // getInputBuffer() will fill the inputBuffer with one frame of encoded\n   // sample from either MediaCodec or MediaExtractor, set isAudioSample to\n   // true when the sample is audio data, set up all the fields of bufferInfo,\n   // and return true if there are no more samples.\n   finished = getInputBuffer(inputBuffer, isAudioSample, bufferInfo);\n   if (!finished) {\n     int currentTrackIndex = isAudioSample ? audioTrackIndex : videoTrackIndex;\n     muxer.writeSampleData(currentTrackIndex, inputBuffer, bufferInfo);\n   }\n };\n muxer.stop();\n muxer.release();\n </pre>\n\n\n<p> <h4>Metadata Track</h4>\n <p>\n  Per-frame metadata is useful in carrying extra information that correlated with video or audio to\n  facilitate offline processing, e.g. gyro signals from the sensor could help video stabilization when\n  doing offline processing. Metadata track is only supported in MP4 container. When adding a new\n  metadata track, track's mime format must start with prefix \"application/\", e.g. \"applicaton/gyro\".\n  Metadata's format/layout will be defined by the application. Writing metadata is nearly the same as\n  writing video/audio data except that the data will not be from mediacodec. Application just needs\n  to pass the bytebuffer that contains the metadata and also the associated timestamp to the\n  <a href=\"#!/api/android.media.MediaMuxer-method-writeSampleData\" rel=\"android.media.MediaMuxer-method-writeSampleData\" class=\"docClass\">writeSampleData</a> api. The timestamp must be in the same time base as video and audio. The\n  generated MP4 file uses TextMetaDataSampleEntry defined in section 12.3.3.2 of the ISOBMFF to signal\n  the metadata's mime format. When using<a href=\"#!/api/android.media.MediaExtractor\" rel=\"android.media.MediaExtractor\" class=\"docClass\">android.media.MediaExtractor</a> to extract the file with\n  metadata track, the mime format of the metadata will be extracted into <a href=\"#!/api/android.media.MediaFormat\" rel=\"android.media.MediaFormat\" class=\"docClass\">android.media.MediaFormat</a>.</p>\n\n<p> <pre class=prettyprint>\n   MediaMuxer muxer = new MediaMuxer(\"temp.mp4\", OutputFormat.MUXER_OUTPUT_MPEG_4);\n   // SetUp Video/Audio Tracks.\n   MediaFormat audioFormat = new MediaFormat(...);\n   MediaFormat videoFormat = new MediaFormat(...);\n   int audioTrackIndex = muxer.addTrack(audioFormat);\n   int videoTrackIndex = muxer.addTrack(videoFormat);</pre></p>\n\n<p>   // Setup Metadata Track\n   MediaFormat metadataFormat = new MediaFormat(...);\n   metadataFormat.setString(KEY_MIME, \"application/gyro\");\n   int metadataTrackIndex = muxer.addTrack(metadataFormat);</p>\n\n<p>   muxer.start();\n   while(..) {\n       // Allocate bytebuffer and write gyro data(x,y,z) into it.\n       ByteBuffer metaData = ByteBuffer.allocate(bufferSize);\n       metaData.putFloat(x);\n       metaData.putFloat(y);\n       metaData.putFloat(z);\n       BufferInfo metaInfo = new BufferInfo();\n       // Associate this metadata with the video frame by setting\n       // the same timestamp as the video frame.\n       metaInfo.presentationTimeUs = currentVideoTrackTimeUs;\n       metaInfo.offset = 0;\n       metaInfo.flags = 0;\n       metaInfo.size = bufferSize;\n       muxer.writeSampleData(metadataTrackIndex, metaData, metaInfo);\n   };\n   muxer.stop();\n   muxer.release();\n }</p>\n\n<p> <h2 id=History><a name=\"History\"></a>Features and API History</h2>\n <p>\n The following table summarizes the feature support in different API version and containers.\n For API version numbers, see android.os.Build.VERSION_CODES.</p>\n\n<p> <style>\n .api > tr > th, .api > tr > td { text-align: center; padding: 4px 4px; }\n .api > tr > th     { vertical-align: bottom; }\n .api > tr > td     { vertical-align: middle; }\n .sml > tr > th, .sml > tr > td { text-align: center; padding: 2px 4px; }\n .fn { text-align: center; }\n </style></p>\n\n<p> <table align=\"right\" style=\"width: 0%\">\n  <thead>\n   <tbody class=api>\n    <tr><th>Symbol</th>\n    <th>Meaning</th></tr>\n   </tbody>\n  </thead>\n  <tbody class=sml>\n   <tr><td>&#9679;</td><td>Supported</td></tr>\n   <tr><td>&#9675;</td><td>Not supported</td></tr>\n   <tr><td>&#9639;</td><td>Supported in MP4/WebM/3GP</td></tr>\n   <tr><td>&#8277;</td><td>Only Supported in MP4</td></tr>\n  </tbody>\n </table></p>\n\n<table align=\"center\" style=\"width: 100%;\">\n  <thead class=api>\n   <tr>\n    <th rowspan=2>Feature</th>\n    <th colspan=\"24\">SDK Version</th>\n   </tr>\n   <tr>\n    <th>18</th>\n    <th>19</th>\n    <th>20</th>\n    <th>21</th>\n    <th>22</th>\n    <th>23</th>\n    <th>24</th>\n    <th>25</th>\n    <th>26+</th>\n   </tr>\n  </thead>\n <tbody class=api>\n   <tr>\n    <td align=\"center\">MP4 container</td>\n    <td>&#9679;</td>\n    <td>&#9679;</td>\n    <td>&#9679;</td>\n    <td>&#9679;</td>\n    <td>&#9679;</td>\n    <td>&#9679;</td>\n    <td>&#9679;</td>\n    <td>&#9679;</td>\n    <td>&#9679;</td>\n   </tr>\n    <td align=\"center\">WebM container</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9679;</td>\n    <td>&#9679;</td>\n    <td>&#9679;</td>\n    <td>&#9679;</td>\n    <td>&#9679;</td>\n    <td>&#9679;</td>\n   \n    <td align=\"center\">3GP container</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9679;</td>\n   \n    <td align=\"center\">Muxing B-Frames(bi-directional predicted frames)</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#8277;</td>\n    <td>&#8277;</td>\n    <td>&#8277;</td>\n   \n   \n    <td align=\"center\">Muxing Single Video/Audio Track</td>\n    <td>&#9639;</td>\n    <td>&#9639;</td>\n    <td>&#9639;</td>\n    <td>&#9639;</td>\n    <td>&#9639;</td>\n    <td>&#9639;</td>\n    <td>&#9639;</td>\n    <td>&#9639;</td>\n    <td>&#9639;</td>\n   \n   \n    <td align=\"center\">Muxing Multiple Video/Audio Tracks</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#8277;</td>\n   \n   \n    <td align=\"center\">Muxing Metadata Tracks</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#9675;</td>\n    <td>&#8277;</td>\n   \n   </tbody>\n </table>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addTrack' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.MediaMuxer'>android.media.MediaMuxer</span><br/><a href='source/MediaMuxer.html#android-media-MediaMuxer-method-addTrack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.MediaMuxer-method-addTrack' class='name expandable'>addTrack</a>( <span class='pre'>format</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a track with the specified format. ...</div><div class='long'><p>Adds a track with the specified format.\n <p>\n The following table summarizes support for specific format keys across android releases.\n Keys marked with '+:' are required.</p>\n\n<p> <table style=\"width: 0%\">\n  <thead>\n   <tr>\n    <th rowspan=2>OS Version(s)</th>\n    <td colspan=3>{@code MediaFormat} keys used for\n   </td></tr><tr>\n    <th>All Tracks</th>\n    <th>Audio Tracks</th>\n    <th>Video Tracks</th>\n   </tr>\n  </thead>\n  <tbody>\n   <tr>\n    <td>android.os.Build.VERSION_CODES.JELLY_BEAN_MR2</td>\n    <td rowspan=7>+: <a href=\"#!/api/android.media.MediaFormat-property-KEY_MIME\" rel=\"android.media.MediaFormat-property-KEY_MIME\" class=\"docClass\">android.media.MediaFormat.KEY_MIME</a></td>\n    <td rowspan=3>+: <a href=\"#!/api/android.media.MediaFormat-property-KEY_SAMPLE_RATE\" rel=\"android.media.MediaFormat-property-KEY_SAMPLE_RATE\" class=\"docClass\">android.media.MediaFormat.KEY_SAMPLE_RATE</a>,<br>\n        +: <a href=\"#!/api/android.media.MediaFormat-property-KEY_CHANNEL_COUNT\" rel=\"android.media.MediaFormat-property-KEY_CHANNEL_COUNT\" class=\"docClass\">android.media.MediaFormat.KEY_CHANNEL_COUNT</a>,<br>\n        +: <strong>codec-specific data<sup>AAC</sup></strong></td>\n    <td rowspan=5>+: <a href=\"#!/api/android.media.MediaFormat-property-KEY_WIDTH\" rel=\"android.media.MediaFormat-property-KEY_WIDTH\" class=\"docClass\">android.media.MediaFormat.KEY_WIDTH</a>,<br>\n        +: <a href=\"#!/api/android.media.MediaFormat-property-KEY_HEIGHT\" rel=\"android.media.MediaFormat-property-KEY_HEIGHT\" class=\"docClass\">android.media.MediaFormat.KEY_HEIGHT</a>,<br>\n        no {@code KEY_ROTATION},\n        use <a href=\"#!/api/android.media.MediaMuxer-method-setOrientationHint\" rel=\"android.media.MediaMuxer-method-setOrientationHint\" class=\"docClass\">setOrientationHint()</a><sup>.mp4</sup>,<br>\n        +: <strong>codec-specific data<sup>AVC, MPEG4</sup></strong></td>\n   </tr><tr>\n    <td>android.os.Build.VERSION_CODES.KITKAT</td>\n   </tr><tr>\n    <td>android.os.Build.VERSION_CODES.KITKAT_WATCH</td>\n   </tr><tr>\n    <td>android.os.Build.VERSION_CODES.LOLLIPOP</td>\n    <td rowspan=4>as above, plus<br>\n        +: <strong>codec-specific data<sup>Vorbis &amp; .webm</sup></strong></td>\n   </tr><tr>\n    <td>android.os.Build.VERSION_CODES.LOLLIPOP_MR1</td>\n   </tr><tr>\n    <td>android.os.Build.VERSION_CODES.M</td>\n    <td>as above, plus<br>\n        <a href=\"#!/api/android.media.MediaFormat-property-KEY_BIT_RATE\" rel=\"android.media.MediaFormat-property-KEY_BIT_RATE\" class=\"docClass\">android.media.MediaFormat.KEY_BIT_RATE</a><sup>AAC</sup></td>\n   </tr><tr>\n    <td>android.os.Build.VERSION_CODES.N</td>\n    <td>as above, plus<br>\n        <!-- {link MediaFormat#KEY_MAX_BIT_RATE}<sup>AAC, MPEG4</sup>,<br> -->\n        <a href=\"#!/api/android.media.MediaFormat-property-KEY_BIT_RATE\" rel=\"android.media.MediaFormat-property-KEY_BIT_RATE\" class=\"docClass\">android.media.MediaFormat.KEY_BIT_RATE</a><sup>MPEG4</sup>,<br>\n        <a href=\"#!/api/android.media.MediaFormat-property-KEY_HDR_STATIC_INFO\" rel=\"android.media.MediaFormat-property-KEY_HDR_STATIC_INFO\" class=\"docClass\">android.media.MediaFormat.KEY_HDR_STATIC_INFO</a><sup>#, .webm</sup>,<br>\n        <a href=\"#!/api/android.media.MediaFormat-property-KEY_COLOR_STANDARD\" rel=\"android.media.MediaFormat-property-KEY_COLOR_STANDARD\" class=\"docClass\">android.media.MediaFormat.KEY_COLOR_STANDARD</a><sup>#</sup>,<br>\n        <a href=\"#!/api/android.media.MediaFormat-property-KEY_COLOR_TRANSFER\" rel=\"android.media.MediaFormat-property-KEY_COLOR_TRANSFER\" class=\"docClass\">android.media.MediaFormat.KEY_COLOR_TRANSFER</a><sup>#</sup>,<br>\n        <a href=\"#!/api/android.media.MediaFormat-property-KEY_COLOR_RANGE\" rel=\"android.media.MediaFormat-property-KEY_COLOR_RANGE\" class=\"docClass\">android.media.MediaFormat.KEY_COLOR_RANGE</a><sup>#</sup>,<br>\n        +: <strong>codec-specific data<sup>HEVC</sup></strong>,<br>\n        codec-specific data<sup>VP9</sup></td>\n   </tr>\n   <tr>\n    <td colspan=4>\n     <p class=note><strong>Notes:</strong><br>\n      #: storing into container metadata.<br>\n      .mp4, .webm&hellip;: for listed containers<br>\n      MPEG4, AAC&hellip;: for listed codecs\n    </p></td>\n   </tr><tr>\n    <td colspan=4>\n     <p class=note>Note that the codec-specific data for the track must be specified using\n     this method. Furthermore, codec-specific data must not be passed/specified via the\n     <a href=\"#!/api/android.media.MediaMuxer-method-writeSampleData\" rel=\"android.media.MediaMuxer-method-writeSampleData\" class=\"docClass\">writeSampleData()</a> call.\n    </p></td>\n   </tr>\n  </tbody>\n </table></p>\n\n<p> <p>\n The following table summarizes codec support for containers across android releases:</p>\n\n<p> <table style=\"width: 0%\">\n  <thead>\n   <tr>\n    <th rowspan=2>OS Version(s)</th>\n    <td colspan=3>Codec support\n   </td></tr><tr>\n    <th>{@linkplain <a href=\"#!/api/android.media.MediaMuxer.OutputFormat-property-MUXER_OUTPUT_MPEG_4\" rel=\"android.media.MediaMuxer.OutputFormat-property-MUXER_OUTPUT_MPEG_4\" class=\"docClass\">android.media.MediaMuxer.OutputFormat.MUXER_OUTPUT_MPEG_4</a> MP4}</th>\n    <th>{@linkplain <a href=\"#!/api/android.media.MediaMuxer.OutputFormat-property-MUXER_OUTPUT_WEBM\" rel=\"android.media.MediaMuxer.OutputFormat-property-MUXER_OUTPUT_WEBM\" class=\"docClass\">android.media.MediaMuxer.OutputFormat.MUXER_OUTPUT_WEBM</a> WEBM}</th>\n   </tr>\n  </thead>\n  <tbody>\n   <tr>\n    <td>android.os.Build.VERSION_CODES.JELLY_BEAN_MR2</td>\n    <td rowspan=6><a href=\"#!/api/android.media.MediaFormat-property-MIMETYPE_AUDIO_AAC\" rel=\"android.media.MediaFormat-property-MIMETYPE_AUDIO_AAC\" class=\"docClass\">AAC</a>,<br>\n        <a href=\"#!/api/android.media.MediaFormat-property-MIMETYPE_AUDIO_AMR_NB\" rel=\"android.media.MediaFormat-property-MIMETYPE_AUDIO_AMR_NB\" class=\"docClass\">NB-AMR</a>,<br>\n        <a href=\"#!/api/android.media.MediaFormat-property-MIMETYPE_AUDIO_AMR_WB\" rel=\"android.media.MediaFormat-property-MIMETYPE_AUDIO_AMR_WB\" class=\"docClass\">WB-AMR</a>,<br>\n        <a href=\"#!/api/android.media.MediaFormat-property-MIMETYPE_VIDEO_H263\" rel=\"android.media.MediaFormat-property-MIMETYPE_VIDEO_H263\" class=\"docClass\">H.263</a>,<br>\n        <a href=\"#!/api/android.media.MediaFormat-property-MIMETYPE_VIDEO_MPEG4\" rel=\"android.media.MediaFormat-property-MIMETYPE_VIDEO_MPEG4\" class=\"docClass\">MPEG-4</a>,<br>\n        <a href=\"#!/api/android.media.MediaFormat-property-MIMETYPE_VIDEO_AVC\" rel=\"android.media.MediaFormat-property-MIMETYPE_VIDEO_AVC\" class=\"docClass\">AVC</a> (H.264)</td>\n    <td rowspan=3>Not supported</td>\n   </tr><tr>\n    <td>android.os.Build.VERSION_CODES.KITKAT</td>\n   </tr><tr>\n    <td>android.os.Build.VERSION_CODES.KITKAT_WATCH</td>\n   </tr><tr>\n    <td>android.os.Build.VERSION_CODES.LOLLIPOP</td>\n    <td rowspan=3><a href=\"#!/api/android.media.MediaFormat-property-MIMETYPE_AUDIO_VORBIS\" rel=\"android.media.MediaFormat-property-MIMETYPE_AUDIO_VORBIS\" class=\"docClass\">Vorbis</a>,<br>\n        <a href=\"#!/api/android.media.MediaFormat-property-MIMETYPE_VIDEO_VP8\" rel=\"android.media.MediaFormat-property-MIMETYPE_VIDEO_VP8\" class=\"docClass\">VP8</a></td>\n   </tr><tr>\n    <td>android.os.Build.VERSION_CODES.LOLLIPOP_MR1</td>\n   </tr><tr>\n    <td>android.os.Build.VERSION_CODES.M</td>\n   </tr><tr>\n    <td>android.os.Build.VERSION_CODES.N</td>\n    <td>as above, plus<br>\n        <a href=\"#!/api/android.media.MediaFormat-property-MIMETYPE_VIDEO_HEVC\" rel=\"android.media.MediaFormat-property-MIMETYPE_VIDEO_HEVC\" class=\"docClass\">HEVC</a> (H.265)</td>\n    <td>as above, plus<br>\n        <a href=\"#!/api/android.media.MediaFormat-property-MIMETYPE_VIDEO_VP9\" rel=\"android.media.MediaFormat-property-MIMETYPE_VIDEO_VP9\" class=\"docClass\">VP9</a></td>\n   </tr>\n  </tbody>\n </table></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>format</span> : Object {MediaFormat}<div class='sub-desc'><p>The media format for the track.  This must not be an empty\n               MediaFormat.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The track index for this newly added track, and it should be used\n in the <a href=\"#!/api/android.media.MediaMuxer-method-writeSampleData\" rel=\"android.media.MediaMuxer-method-writeSampleData\" class=\"docClass\">writeSampleData</a>.</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalArgumentException if format is invalid.</p>\n</div></li><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalStateException if muxer is in the wrong state.</p>\n</div></li></ul></div></div></div><div id='method-release' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.MediaMuxer'>android.media.MediaMuxer</span><br/><a href='source/MediaMuxer.html#android-media-MediaMuxer-method-release' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.MediaMuxer-method-release' class='name expandable'>release</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Make sure you call this when you're done to free up any resources\n instead of relying on the garbage collector to do ...</div><div class='long'><p>Make sure you call this when you're done to free up any resources\n instead of relying on the garbage collector to do this for you at\n some point in the future.</p>\n</div></div></div><div id='method-setLocation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.MediaMuxer'>android.media.MediaMuxer</span><br/><a href='source/MediaMuxer.html#android-media-MediaMuxer-method-setLocation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.MediaMuxer-method-setLocation' class='name expandable'>setLocation</a>( <span class='pre'>latitude, longitude</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set and store the geodata (latitude and longitude) in the output file. ...</div><div class='long'><p>Set and store the geodata (latitude and longitude) in the output file.\n This method should be called before <a href=\"#!/api/android.media.MediaMuxer-method-start\" rel=\"android.media.MediaMuxer-method-start\" class=\"docClass\">start</a>. The geodata is stored\n in udta box if the output format is\n <a href=\"#!/api/android.media.MediaMuxer.OutputFormat-property-MUXER_OUTPUT_MPEG_4\" rel=\"android.media.MediaMuxer.OutputFormat-property-MUXER_OUTPUT_MPEG_4\" class=\"docClass\">android.media.MediaMuxer.OutputFormat.MUXER_OUTPUT_MPEG_4</a>, and is ignored for other output\n formats. The geodata is stored according to ISO-6709 standard.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>latitude</span> : Number<div class='sub-desc'><p>Latitude in degrees. Its value must be in the range [-90,\n 90].</p>\n</div></li><li><span class='pre'>longitude</span> : Number<div class='sub-desc'><p>Longitude in degrees. Its value must be in the range\n [-180, 180].</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalArgumentException If the given latitude or longitude is out\n of range.</p>\n</div></li><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalStateException If this method is called after <a href=\"#!/api/android.media.MediaMuxer-method-start\" rel=\"android.media.MediaMuxer-method-start\" class=\"docClass\">start</a>.</p>\n</div></li></ul></div></div></div><div id='method-setOrientationHint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.MediaMuxer'>android.media.MediaMuxer</span><br/><a href='source/MediaMuxer.html#android-media-MediaMuxer-method-setOrientationHint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.MediaMuxer-method-setOrientationHint' class='name expandable'>setOrientationHint</a>( <span class='pre'>degrees</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the orientation hint for output video playback. ...</div><div class='long'><p>Sets the orientation hint for output video playback.\n <p>This method should be called before <a href=\"#!/api/android.media.MediaMuxer-method-start\" rel=\"android.media.MediaMuxer-method-start\" class=\"docClass\">start</a>. Calling this\n method will not rotate the video frame when muxer is generating the file,\n but add a composition matrix containing the rotation angle in the output\n video if the output format is\n <a href=\"#!/api/android.media.MediaMuxer.OutputFormat-property-MUXER_OUTPUT_MPEG_4\" rel=\"android.media.MediaMuxer.OutputFormat-property-MUXER_OUTPUT_MPEG_4\" class=\"docClass\">android.media.MediaMuxer.OutputFormat.MUXER_OUTPUT_MPEG_4</a> so that a video player can\n choose the proper orientation for playback. Note that some video players\n may choose to ignore the composition matrix in a video during playback.\n By default, the rotation degree is 0.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>degrees</span> : Number<div class='sub-desc'><p>the angle to be rotated clockwise in degrees.\n The supported angles are 0, 90, 180, and 270 degrees.</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalArgumentException if degree is not supported.</p>\n</div></li><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalStateException If this method is called after <a href=\"#!/api/android.media.MediaMuxer-method-start\" rel=\"android.media.MediaMuxer-method-start\" class=\"docClass\">start</a>.</p>\n</div></li></ul></div></div></div><div id='method-start' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.MediaMuxer'>android.media.MediaMuxer</span><br/><a href='source/MediaMuxer.html#android-media-MediaMuxer-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.MediaMuxer-method-start' class='name expandable'>start</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Starts the muxer. ...</div><div class='long'><p>Starts the muxer.\n <p>Make sure this is called after <a href=\"#!/api/android.media.MediaMuxer-method-addTrack\" rel=\"android.media.MediaMuxer-method-addTrack\" class=\"docClass\">addTrack</a> and before\n <a href=\"#!/api/android.media.MediaMuxer-method-writeSampleData\" rel=\"android.media.MediaMuxer-method-writeSampleData\" class=\"docClass\">writeSampleData</a>.</p></p>\n<h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalStateException If this method is called after <a href=\"#!/api/android.media.MediaMuxer-method-start\" rel=\"android.media.MediaMuxer-method-start\" class=\"docClass\">start</a>\n or Muxer is released</p>\n</div></li></ul></div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.MediaMuxer'>android.media.MediaMuxer</span><br/><a href='source/MediaMuxer.html#android-media-MediaMuxer-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.MediaMuxer-method-stop' class='name expandable'>stop</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Stops the muxer. ...</div><div class='long'><p>Stops the muxer.\n <p>Once the muxer stops, it can not be restarted.</p></p>\n<h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalStateException if muxer is in the wrong state.</p>\n</div></li></ul></div></div></div><div id='method-writeSampleData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.MediaMuxer'>android.media.MediaMuxer</span><br/><a href='source/MediaMuxer.html#android-media-MediaMuxer-method-writeSampleData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.MediaMuxer-method-writeSampleData' class='name expandable'>writeSampleData</a>( <span class='pre'>byteBuf, trackIndex, bufferInfo</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Writes an encoded sample into the muxer. ...</div><div class='long'><p>Writes an encoded sample into the muxer.\n <p>The application needs to make sure that the samples are written into\n the right tracks. Also, it needs to make sure the samples for each track\n are written in chronological order (e.g. in the order they are provided\n by the encoder.)</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>byteBuf</span> : Number<div class='sub-desc'><p>The encoded sample.</p>\n</div></li><li><span class='pre'>trackIndex</span> : Object {ByteBuffer}<div class='sub-desc'><p>The track index for this sample.</p>\n</div></li><li><span class='pre'>bufferInfo</span> : Object {MediaCodec.BufferInfo}<div class='sub-desc'><p>The buffer information related to this sample.</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalArgumentException if trackIndex, byteBuf or bufferInfo is  invalid.</p>\n</div></li><li><span class='pre'>Object</span><div class='sub-desc'><p>IllegalStateException if muxer is in wrong state.\n MediaMuxer uses the flags provided in MediaCodec.BufferInfo,\n to signal sync frames.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});