Ext.data.JsonP.android_location_GpsMeasurementsEvent({"tagname":"class","name":"android.location.GpsMeasurementsEvent","autodetected":{},"files":[{"filename":"GpsMeasurementsEvent.js","href":"GpsMeasurementsEvent.html#android-location-GpsMeasurementsEvent"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"CREATOR","tagname":"property","owner":"android.location.GpsMeasurementsEvent","id":"property-CREATOR","meta":{}},{"name":"STATUS_GPS_LOCATION_DISABLED","tagname":"property","owner":"android.location.GpsMeasurementsEvent","id":"property-STATUS_GPS_LOCATION_DISABLED","meta":{}},{"name":"STATUS_NOT_SUPPORTED","tagname":"property","owner":"android.location.GpsMeasurementsEvent","id":"property-STATUS_NOT_SUPPORTED","meta":{}},{"name":"STATUS_READY","tagname":"property","owner":"android.location.GpsMeasurementsEvent","id":"property-STATUS_READY","meta":{}},{"name":"describeContents","tagname":"method","owner":"android.location.GpsMeasurementsEvent","id":"method-describeContents","meta":{}},{"name":"getClock","tagname":"method","owner":"android.location.GpsMeasurementsEvent","id":"method-getClock","meta":{}},{"name":"getMeasurements","tagname":"method","owner":"android.location.GpsMeasurementsEvent","id":"method-getMeasurements","meta":{}},{"name":"toString","tagname":"method","owner":"android.location.GpsMeasurementsEvent","id":"method-toString","meta":{}},{"name":"writeToParcel","tagname":"method","owner":"android.location.GpsMeasurementsEvent","id":"method-writeToParcel","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.location.GpsMeasurementsEvent","short_doc":"implements android.os.Parcelable\n\nA class implementing a container for data associated with a measurement event. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.location.GpsMeasurementsEvent</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/GpsMeasurementsEvent.html#android-location-GpsMeasurementsEvent' target='_blank'>GpsMeasurementsEvent.js</a></div></pre><div class='doc-contents'><p>implements android.os.Parcelable</p>\n\n<p>A class implementing a container for data associated with a measurement event.\n Events are delivered to registered instances of <a href=\"#!/api/android.location.GpsMeasurementsEvent.Listener\" rel=\"android.location.GpsMeasurementsEvent.Listener\" class=\"docClass\">android.location.GpsMeasurementsEvent.Listener</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-CREATOR' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.location.GpsMeasurementsEvent'>android.location.GpsMeasurementsEvent</span><br/><a href='source/GpsMeasurementsEvent.html#android-location-GpsMeasurementsEvent-property-CREATOR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.location.GpsMeasurementsEvent-property-CREATOR' class='name expandable'>CREATOR</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-STATUS_GPS_LOCATION_DISABLED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.location.GpsMeasurementsEvent'>android.location.GpsMeasurementsEvent</span><br/><a href='source/GpsMeasurementsEvent.html#android-location-GpsMeasurementsEvent-property-STATUS_GPS_LOCATION_DISABLED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.location.GpsMeasurementsEvent-property-STATUS_GPS_LOCATION_DISABLED' class='name expandable'>STATUS_GPS_LOCATION_DISABLED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>GPS provider or Location is disabled, updates will not be received until they are enabled. ...</div><div class='long'><p>GPS provider or Location is disabled, updates will not be received until they are enabled.</p>\n<p>Defaults to: <code>&quot;2&quot;</code></p></div></div></div><div id='property-STATUS_NOT_SUPPORTED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.location.GpsMeasurementsEvent'>android.location.GpsMeasurementsEvent</span><br/><a href='source/GpsMeasurementsEvent.html#android-location-GpsMeasurementsEvent-property-STATUS_NOT_SUPPORTED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.location.GpsMeasurementsEvent-property-STATUS_NOT_SUPPORTED' class='name expandable'>STATUS_NOT_SUPPORTED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The system does not support tracking of GPS Measurements. ...</div><div class='long'><p>The system does not support tracking of GPS Measurements. This status will not change in the\nfuture.</p>\n<p>Defaults to: <code>&quot;0&quot;</code></p></div></div></div><div id='property-STATUS_READY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.location.GpsMeasurementsEvent'>android.location.GpsMeasurementsEvent</span><br/><a href='source/GpsMeasurementsEvent.html#android-location-GpsMeasurementsEvent-property-STATUS_READY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.location.GpsMeasurementsEvent-property-STATUS_READY' class='name expandable'>STATUS_READY</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>GPS Measurements are successfully being tracked, it will receive updates once they are\navailable. ...</div><div class='long'><p>GPS Measurements are successfully being tracked, it will receive updates once they are\navailable.</p>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-describeContents' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.location.GpsMeasurementsEvent'>android.location.GpsMeasurementsEvent</span><br/><a href='source/GpsMeasurementsEvent.html#android-location-GpsMeasurementsEvent-method-describeContents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.location.GpsMeasurementsEvent-method-describeContents' class='name expandable'>describeContents</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getClock' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.location.GpsMeasurementsEvent'>android.location.GpsMeasurementsEvent</span><br/><a href='source/GpsMeasurementsEvent.html#android-location-GpsMeasurementsEvent-method-getClock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.location.GpsMeasurementsEvent-method-getClock' class='name expandable'>getClock</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getMeasurements' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.location.GpsMeasurementsEvent'>android.location.GpsMeasurementsEvent</span><br/><a href='source/GpsMeasurementsEvent.html#android-location-GpsMeasurementsEvent-method-getMeasurements' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.location.GpsMeasurementsEvent-method-getMeasurements' class='name expandable'>getMeasurements</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets a read-only collection of measurements associated with the current event. ...</div><div class='long'><p>Gets a read-only collection of measurements associated with the current event.</p>\n</div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.location.GpsMeasurementsEvent'>android.location.GpsMeasurementsEvent</span><br/><a href='source/GpsMeasurementsEvent.html#android-location-GpsMeasurementsEvent-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.location.GpsMeasurementsEvent-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-writeToParcel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.location.GpsMeasurementsEvent'>android.location.GpsMeasurementsEvent</span><br/><a href='source/GpsMeasurementsEvent.html#android-location-GpsMeasurementsEvent-method-writeToParcel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.location.GpsMeasurementsEvent-method-writeToParcel' class='name expandable'>writeToParcel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});