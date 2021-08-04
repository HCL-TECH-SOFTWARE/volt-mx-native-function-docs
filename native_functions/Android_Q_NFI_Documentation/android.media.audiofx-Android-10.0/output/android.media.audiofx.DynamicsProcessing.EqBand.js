Ext.data.JsonP.android_media_audiofx_DynamicsProcessing_EqBand({"tagname":"class","name":"android.media.audiofx.DynamicsProcessing.EqBand","autodetected":{},"files":[{"filename":"EqBand.js","href":"EqBand.html#android-media-audiofx-DynamicsProcessing-EqBand"}],"extends":"android.media.audiofx.DynamicsProcessing.BandBase","members":[{"name":"getCutoffFrequency","tagname":"method","owner":"android.media.audiofx.DynamicsProcessing.BandBase","id":"method-getCutoffFrequency","meta":{}},{"name":"getGain","tagname":"method","owner":"android.media.audiofx.DynamicsProcessing.EqBand","id":"method-getGain","meta":{}},{"name":"isEnabled","tagname":"method","owner":"android.media.audiofx.DynamicsProcessing.BandBase","id":"method-isEnabled","meta":{}},{"name":"setCutoffFrequency","tagname":"method","owner":"android.media.audiofx.DynamicsProcessing.BandBase","id":"method-setCutoffFrequency","meta":{}},{"name":"setEnabled","tagname":"method","owner":"android.media.audiofx.DynamicsProcessing.BandBase","id":"method-setEnabled","meta":{}},{"name":"setGain","tagname":"method","owner":"android.media.audiofx.DynamicsProcessing.EqBand","id":"method-setGain","meta":{}},{"name":"toString","tagname":"method","owner":"android.media.audiofx.DynamicsProcessing.EqBand","id":"method-toString","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.media.audiofx.DynamicsProcessing.EqBand","short_doc":"Class for Equalizer Bands\n Equalizer bands have three controllable parameters: enabled/disabled, cutoffFrequency and\n...","classIcon":"icon-class","superclasses":["java.lang.Object","android.media.audiofx.DynamicsProcessing.BandBase"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><a href='#!/api/android.media.audiofx.DynamicsProcessing.BandBase' rel='android.media.audiofx.DynamicsProcessing.BandBase' class='docClass'>android.media.audiofx.DynamicsProcessing.BandBase</a><div class='subclass '><strong>android.media.audiofx.DynamicsProcessing.EqBand</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/EqBand.html#android-media-audiofx-DynamicsProcessing-EqBand' target='_blank'>EqBand.js</a></div></pre><div class='doc-contents'><p>Class for Equalizer Bands\n Equalizer bands have three controllable parameters: enabled/disabled, cutoffFrequency and\n gain</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getCutoffFrequency' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.media.audiofx.DynamicsProcessing.BandBase' rel='android.media.audiofx.DynamicsProcessing.BandBase' class='defined-in docClass'>android.media.audiofx.DynamicsProcessing.BandBase</a><br/><a href='source/BandBase.html#android-media-audiofx-DynamicsProcessing-BandBase-method-getCutoffFrequency' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.audiofx.DynamicsProcessing.BandBase-method-getCutoffFrequency' class='name expandable'>getCutoffFrequency</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>gets cutoffFrequency for this band in Hertz (Hz) ...</div><div class='long'><p>gets cutoffFrequency for this band in Hertz (Hz)</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>cutoffFrequency for this band in Hertz (Hz)</p>\n</div></li></ul></div></div></div><div id='method-getGain' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.audiofx.DynamicsProcessing.EqBand'>android.media.audiofx.DynamicsProcessing.EqBand</span><br/><a href='source/EqBand.html#android-media-audiofx-DynamicsProcessing-EqBand-method-getGain' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.audiofx.DynamicsProcessing.EqBand-method-getGain' class='name expandable'>getGain</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>gets current gain of band in decibels (dB) ...</div><div class='long'><p>gets current gain of band in decibels (dB)</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>current gain of band in decibels (dB)</p>\n</div></li></ul></div></div></div><div id='method-isEnabled' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.media.audiofx.DynamicsProcessing.BandBase' rel='android.media.audiofx.DynamicsProcessing.BandBase' class='defined-in docClass'>android.media.audiofx.DynamicsProcessing.BandBase</a><br/><a href='source/BandBase.html#android-media-audiofx-DynamicsProcessing-BandBase-method-isEnabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.audiofx.DynamicsProcessing.BandBase-method-isEnabled' class='name expandable'>isEnabled</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>returns enabled state of the band ...</div><div class='long'><p>returns enabled state of the band</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if bands is enabled for processing, false otherwise</p>\n</div></li></ul></div></div></div><div id='method-setCutoffFrequency' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.media.audiofx.DynamicsProcessing.BandBase' rel='android.media.audiofx.DynamicsProcessing.BandBase' class='defined-in docClass'>android.media.audiofx.DynamicsProcessing.BandBase</a><br/><a href='source/BandBase.html#android-media-audiofx-DynamicsProcessing-BandBase-method-setCutoffFrequency' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.audiofx.DynamicsProcessing.BandBase-method-setCutoffFrequency' class='name expandable'>setCutoffFrequency</a>( <span class='pre'>frequency</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>sets topmost frequency number (in Hz) this band will process. ...</div><div class='long'><p>sets topmost frequency number (in Hz) this band will process. The\n effective bandwidth for the band is then computed using this and the previous band\n topmost frequency (or 0 Hz for band number 0). Frequencies are expected to increase with\n band number, thus band 0 cutoffFrequency &lt;= band 1 cutoffFrequency, and so on.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>frequency</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setEnabled' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.media.audiofx.DynamicsProcessing.BandBase' rel='android.media.audiofx.DynamicsProcessing.BandBase' class='defined-in docClass'>android.media.audiofx.DynamicsProcessing.BandBase</a><br/><a href='source/BandBase.html#android-media-audiofx-DynamicsProcessing-BandBase-method-setEnabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.audiofx.DynamicsProcessing.BandBase-method-setEnabled' class='name expandable'>setEnabled</a>( <span class='pre'>enabled</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>sets enabled state of the band ...</div><div class='long'><p>sets enabled state of the band</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>enabled</span> : Boolean<div class='sub-desc'><p>true for enabled, false otherwise</p>\n</div></li></ul></div></div></div><div id='method-setGain' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.audiofx.DynamicsProcessing.EqBand'>android.media.audiofx.DynamicsProcessing.EqBand</span><br/><a href='source/EqBand.html#android-media-audiofx-DynamicsProcessing-EqBand-method-setGain' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.audiofx.DynamicsProcessing.EqBand-method-setGain' class='name expandable'>setGain</a>( <span class='pre'>gain</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>sets current gain of band in decibels (dB) ...</div><div class='long'><p>sets current gain of band in decibels (dB)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>gain</span> : Number<div class='sub-desc'><p>desired in decibels (db)</p>\n</div></li></ul></div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.audiofx.DynamicsProcessing.EqBand'>android.media.audiofx.DynamicsProcessing.EqBand</span><br/><a href='source/EqBand.html#android-media-audiofx-DynamicsProcessing-EqBand-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.audiofx.DynamicsProcessing.EqBand-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/android.media.audiofx.DynamicsProcessing.BandBase-method-toString\" rel=\"android.media.audiofx.DynamicsProcessing.BandBase-method-toString\" class=\"docClass\">android.media.audiofx.DynamicsProcessing.BandBase.toString</a></p></div></div></div></div></div></div></div>","meta":{}});