Ext.data.JsonP.android_net_wifi_rtt_RangingResult({"tagname":"class","name":"android.net.wifi.rtt.RangingResult","autodetected":{},"files":[{"filename":"RangingResult.js","href":"RangingResult.html#android-net-wifi-rtt-RangingResult"}],"extends":"java.lang.Object","members":[{"name":"CREATOR","tagname":"property","owner":"android.net.wifi.rtt.RangingResult","id":"property-CREATOR","meta":{}},{"name":"STATUS_FAIL","tagname":"property","owner":"android.net.wifi.rtt.RangingResult","id":"property-STATUS_FAIL","meta":{}},{"name":"STATUS_RESPONDER_DOES_NOT_SUPPORT_IEEE80211MC","tagname":"property","owner":"android.net.wifi.rtt.RangingResult","id":"property-STATUS_RESPONDER_DOES_NOT_SUPPORT_IEEE80211MC","meta":{}},{"name":"STATUS_SUCCESS","tagname":"property","owner":"android.net.wifi.rtt.RangingResult","id":"property-STATUS_SUCCESS","meta":{}},{"name":"describeContents","tagname":"method","owner":"android.net.wifi.rtt.RangingResult","id":"method-describeContents","meta":{}},{"name":"equals","tagname":"method","owner":"android.net.wifi.rtt.RangingResult","id":"method-equals","meta":{}},{"name":"getDistanceMm","tagname":"method","owner":"android.net.wifi.rtt.RangingResult","id":"method-getDistanceMm","meta":{}},{"name":"getDistanceStdDevMm","tagname":"method","owner":"android.net.wifi.rtt.RangingResult","id":"method-getDistanceStdDevMm","meta":{}},{"name":"getMacAddress","tagname":"method","owner":"android.net.wifi.rtt.RangingResult","id":"method-getMacAddress","meta":{}},{"name":"getNumAttemptedMeasurements","tagname":"method","owner":"android.net.wifi.rtt.RangingResult","id":"method-getNumAttemptedMeasurements","meta":{}},{"name":"getNumSuccessfulMeasurements","tagname":"method","owner":"android.net.wifi.rtt.RangingResult","id":"method-getNumSuccessfulMeasurements","meta":{}},{"name":"getPeerHandle","tagname":"method","owner":"android.net.wifi.rtt.RangingResult","id":"method-getPeerHandle","meta":{}},{"name":"getRangingTimestampMillis","tagname":"method","owner":"android.net.wifi.rtt.RangingResult","id":"method-getRangingTimestampMillis","meta":{}},{"name":"getRssi","tagname":"method","owner":"android.net.wifi.rtt.RangingResult","id":"method-getRssi","meta":{}},{"name":"getStatus","tagname":"method","owner":"android.net.wifi.rtt.RangingResult","id":"method-getStatus","meta":{}},{"name":"getUnverifiedResponderLocation","tagname":"method","owner":"android.net.wifi.rtt.RangingResult","id":"method-getUnverifiedResponderLocation","meta":{}},{"name":"hashCode","tagname":"method","owner":"android.net.wifi.rtt.RangingResult","id":"method-hashCode","meta":{}},{"name":"writeToParcel","tagname":"method","owner":"android.net.wifi.rtt.RangingResult","id":"method-writeToParcel","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.net.wifi.rtt.RangingResult","short_doc":"implements android.os.Parcelable\n\nRanging result for a request started by\n java.util.concurrent.Executor, android.net...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.net.wifi.rtt.RangingResult</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult' target='_blank'>RangingResult.js</a></div></pre><div class='doc-contents'><p>implements android.os.Parcelable</p>\n\n<p>Ranging result for a request started by\n java.util.concurrent.Executor, android.net.wifi.rtt.RangingResultCallback).\n Results are returned in android.net.wifi.rtt.RangingResultCallback.onRangingResults(List).\n <p>\n A ranging result is the distance measurement result for a single device specified in the\n <a href=\"#!/api/android.net.wifi.rtt.RangingRequest\" rel=\"android.net.wifi.rtt.RangingRequest\" class=\"docClass\">android.net.wifi.rtt.RangingRequest</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-CREATOR' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-property-CREATOR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-property-CREATOR' class='name expandable'>CREATOR</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-STATUS_FAIL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-property-STATUS_FAIL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-property-STATUS_FAIL' class='name expandable'>STATUS_FAIL</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Individual range request status, getStatus(). ...</div><div class='long'><p>Individual range request status, <a href=\"#!/api/android.net.wifi.rtt.RangingResult-method-getStatus\" rel=\"android.net.wifi.rtt.RangingResult-method-getStatus\" class=\"docClass\">getStatus</a>(). Indicates ranging operation failed\nand the distance value is invalid.</p>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-STATUS_RESPONDER_DOES_NOT_SUPPORT_IEEE80211MC' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-property-STATUS_RESPONDER_DOES_NOT_SUPPORT_IEEE80211MC' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-property-STATUS_RESPONDER_DOES_NOT_SUPPORT_IEEE80211MC' class='name expandable'>STATUS_RESPONDER_DOES_NOT_SUPPORT_IEEE80211MC</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Individual range request status, getStatus(). ...</div><div class='long'><p>Individual range request status, <a href=\"#!/api/android.net.wifi.rtt.RangingResult-method-getStatus\" rel=\"android.net.wifi.rtt.RangingResult-method-getStatus\" class=\"docClass\">getStatus</a>(). Indicates that the ranging operation\nfailed because the specified peer does not support IEEE 802.11mc RTT operations. Support by\nan Access Point can be confirmed using\nandroid.net.wifi.ScanResult.is80211mcResponder().</p>\n\n<p><p>\nOn such a failure, the individual result fields of <a href=\"#!/api/android.net.wifi.rtt.RangingResult\" rel=\"android.net.wifi.rtt.RangingResult\" class=\"docClass\">android.net.wifi.rtt.RangingResult</a> such as\ngetDistanceMm() are invalid.</p>\n<p>Defaults to: <code>&quot;2&quot;</code></p></div></div></div><div id='property-STATUS_SUCCESS' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-property-STATUS_SUCCESS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-property-STATUS_SUCCESS' class='name expandable'>STATUS_SUCCESS</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Individual range request status, getStatus(). ...</div><div class='long'><p>Individual range request status, <a href=\"#!/api/android.net.wifi.rtt.RangingResult-method-getStatus\" rel=\"android.net.wifi.rtt.RangingResult-method-getStatus\" class=\"docClass\">getStatus</a>(). Indicates ranging operation was\nsuccessful and distance value is valid.</p>\n<p>Defaults to: <code>&quot;0&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-describeContents' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-method-describeContents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-method-describeContents' class='name expandable'>describeContents</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-equals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-method-equals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-method-equals' class='name expandable'>equals</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getDistanceMm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-method-getDistanceMm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-method-getDistanceMm' class='name expandable'>getDistanceMm</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The distance (in mm) to the device specified by getMacAddress() or\n getPeerHandle().\n <p>\n Note: the measured distance may be negative for very close devices.\n <p>\n Only valid if getStatus() returns <a href=\"#!/api/android.net.wifi.rtt.RangingResult-property-STATUS_SUCCESS\" rel=\"android.net.wifi.rtt.RangingResult-property-STATUS_SUCCESS\" class=\"docClass\">STATUS_SUCCESS</a>, otherwise will throw an\n exception.</p>\n</div></li></ul></div></div></div><div id='method-getDistanceStdDevMm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-method-getDistanceStdDevMm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-method-getDistanceStdDevMm' class='name expandable'>getDistanceStdDevMm</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The standard deviation of the measured distance (in mm) to the device specified by\n getMacAddress() or getPeerHandle(). The standard deviation is calculated\n over the measurements executed in a single RTT burst. The number of measurements is returned\n by getNumSuccessfulMeasurements() - 0 successful measurements indicate that the\n standard deviation is not valid (a valid standard deviation requires at least 2 data points).\n <p>\n Only valid if getStatus() returns <a href=\"#!/api/android.net.wifi.rtt.RangingResult-property-STATUS_SUCCESS\" rel=\"android.net.wifi.rtt.RangingResult-property-STATUS_SUCCESS\" class=\"docClass\">STATUS_SUCCESS</a>, otherwise will throw an\n exception.</p>\n</div></li></ul></div></div></div><div id='method-getMacAddress' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-method-getMacAddress' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-method-getMacAddress' class='name expandable'>getMacAddress</a>( <span class='pre'></span> ) : Object {android.net.MacAddress}<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.net.MacAddress}</span><div class='sub-desc'><p>The MAC address of the device whose range measurement was requested. Will correspond\n to the MAC address of the device in the RangingRequest.\n <p>\n Will return a {@code null} for results corresponding to requests issued using a {@code\n PeerHandle}, i.e. using the RangingRequest.Builder.addWifiAwarePeer(PeerHandle) API.</p>\n</div></li></ul></div></div></div><div id='method-getNumAttemptedMeasurements' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-method-getNumAttemptedMeasurements' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-method-getNumAttemptedMeasurements' class='name expandable'>getNumAttemptedMeasurements</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The number of attempted measurements used in the RTT exchange resulting in this set\n of results. The number of successful measurements is returned by\n getNumSuccessfulMeasurements() which at most, if there are no errors, will be 1 less\n that the number of attempted measurements.\n <p>\n Only valid if getStatus() returns <a href=\"#!/api/android.net.wifi.rtt.RangingResult-property-STATUS_SUCCESS\" rel=\"android.net.wifi.rtt.RangingResult-property-STATUS_SUCCESS\" class=\"docClass\">STATUS_SUCCESS</a>, otherwise will throw an\n exception.</p>\n</div></li></ul></div></div></div><div id='method-getNumSuccessfulMeasurements' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-method-getNumSuccessfulMeasurements' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-method-getNumSuccessfulMeasurements' class='name expandable'>getNumSuccessfulMeasurements</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The number of successful measurements used to calculate the distance and standard\n deviation. If the number of successful measurements if 1 then then standard deviation,\n returned by getDistanceStdDevMm(), is not valid (a 0 is returned for the standard\n deviation).\n <p>\n The total number of measurement attempts is returned by\n getNumAttemptedMeasurements(). The number of successful measurements will be at\n most 1 less then the number of attempted measurements.\n <p>\n Only valid if getStatus() returns <a href=\"#!/api/android.net.wifi.rtt.RangingResult-property-STATUS_SUCCESS\" rel=\"android.net.wifi.rtt.RangingResult-property-STATUS_SUCCESS\" class=\"docClass\">STATUS_SUCCESS</a>, otherwise will throw an\n exception.</p>\n</div></li></ul></div></div></div><div id='method-getPeerHandle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-method-getPeerHandle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-method-getPeerHandle' class='name expandable'>getPeerHandle</a>( <span class='pre'></span> ) : Object {android.net.wifi.aware.PeerHandle}<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.net.wifi.aware.PeerHandle}</span><div class='sub-desc'><p>The PeerHandle of the device whose reange measurement was requested. Will correspond\n to the PeerHandle of the devices requested using\n RangingRequest.Builder.addWifiAwarePeer(PeerHandle).\n <p>\n Will return a {@code null} for results corresponding to requests issued using a MAC address.</p>\n</div></li></ul></div></div></div><div id='method-getRangingTimestampMillis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-method-getRangingTimestampMillis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-method-getRangingTimestampMillis' class='name expandable'>getRangingTimestampMillis</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The timestamp at which the ranging operation was performed. The timestamp is in\n milliseconds since boot, including time spent in sleep, corresponding to values provided by\n android.os.SystemClock.elapsedRealtime().\n <p>\n Only valid if getStatus() returns <a href=\"#!/api/android.net.wifi.rtt.RangingResult-property-STATUS_SUCCESS\" rel=\"android.net.wifi.rtt.RangingResult-property-STATUS_SUCCESS\" class=\"docClass\">STATUS_SUCCESS</a>, otherwise will throw an\n exception.</p>\n</div></li></ul></div></div></div><div id='method-getRssi' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-method-getRssi' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-method-getRssi' class='name expandable'>getRssi</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The average RSSI, in units of dBm, observed during the RTT measurement.\n <p>\n Only valid if getStatus() returns <a href=\"#!/api/android.net.wifi.rtt.RangingResult-property-STATUS_SUCCESS\" rel=\"android.net.wifi.rtt.RangingResult-property-STATUS_SUCCESS\" class=\"docClass\">STATUS_SUCCESS</a>, otherwise will throw an\n exception.</p>\n</div></li></ul></div></div></div><div id='method-getStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-method-getStatus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-method-getStatus' class='name expandable'>getStatus</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The status of ranging measurement: <a href=\"#!/api/android.net.wifi.rtt.RangingResult-property-STATUS_SUCCESS\" rel=\"android.net.wifi.rtt.RangingResult-property-STATUS_SUCCESS\" class=\"docClass\">STATUS_SUCCESS</a> in case of success, and\n <a href=\"#!/api/android.net.wifi.rtt.RangingResult-property-STATUS_FAIL\" rel=\"android.net.wifi.rtt.RangingResult-property-STATUS_FAIL\" class=\"docClass\">STATUS_FAIL</a> in case of failure.</p>\n</div></li></ul></div></div></div><div id='method-getUnverifiedResponderLocation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-method-getUnverifiedResponderLocation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-method-getUnverifiedResponderLocation' class='name expandable'>getUnverifiedResponderLocation</a>( <span class='pre'></span> ) : Object {android.net.wifi.rtt.ResponderLocation}<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.net.wifi.rtt.ResponderLocation}</span><div class='sub-desc'><p>The unverified responder location represented as ResponderLocation which\n captures location information the responder is programmed to broadcast. The responder\n location is referred to as unverified, because we are relying on the device/site\n administrator to correctly configure its location data.\n <p>\n Will return a {@code null} when the location information cannot be parsed.\n <p>\n Only valid if getStatus() returns <a href=\"#!/api/android.net.wifi.rtt.RangingResult-property-STATUS_SUCCESS\" rel=\"android.net.wifi.rtt.RangingResult-property-STATUS_SUCCESS\" class=\"docClass\">STATUS_SUCCESS</a>, otherwise will throw an\n exception.</p>\n</div></li></ul></div></div></div><div id='method-hashCode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-method-hashCode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-method-hashCode' class='name expandable'>hashCode</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-writeToParcel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.rtt.RangingResult'>android.net.wifi.rtt.RangingResult</span><br/><a href='source/RangingResult.html#android-net-wifi-rtt-RangingResult-method-writeToParcel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.rtt.RangingResult-method-writeToParcel' class='name expandable'>writeToParcel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});