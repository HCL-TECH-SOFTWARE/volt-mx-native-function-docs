Ext.data.JsonP.android_hardware_location_GeofenceHardwareMonitorCallback({"tagname":"class","name":"android.hardware.location.GeofenceHardwareMonitorCallback","autodetected":{},"files":[{"filename":"GeofenceHardwareMonitorCallback.js","href":"GeofenceHardwareMonitorCallback.html#android-hardware-location-GeofenceHardwareMonitorCallback"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"onMonitoringSystemChange","tagname":"method","owner":"android.hardware.location.GeofenceHardwareMonitorCallback","id":"method-onMonitoringSystemChange","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.hardware.location.GeofenceHardwareMonitorCallback","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.hardware.location.GeofenceHardwareMonitorCallback</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/GeofenceHardwareMonitorCallback.html#android-hardware-location-GeofenceHardwareMonitorCallback' target='_blank'>GeofenceHardwareMonitorCallback.js</a></div></pre><div class='doc-contents'><p>The callback class associated with the status change of hardware monitors\n in <a href=\"#!/api/android.hardware.location.GeofenceHardware\" rel=\"android.hardware.location.GeofenceHardware\" class=\"docClass\">android.hardware.location.GeofenceHardware</a></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-onMonitoringSystemChange' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.location.GeofenceHardwareMonitorCallback'>android.hardware.location.GeofenceHardwareMonitorCallback</span><br/><a href='source/GeofenceHardwareMonitorCallback.html#android-hardware-location-GeofenceHardwareMonitorCallback-method-onMonitoringSystemChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.location.GeofenceHardwareMonitorCallback-method-onMonitoringSystemChange' class='name expandable'>onMonitoringSystemChange</a>( <span class='pre'>event</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>The callback called when the sate of a monitoring system changes. ...</div><div class='long'><p>The callback called when the sate of a monitoring system changes.\n <a href=\"#!/api/android.hardware.location.GeofenceHardware-property-MONITORING_TYPE_GPS_HARDWARE\" rel=\"android.hardware.location.GeofenceHardware-property-MONITORING_TYPE_GPS_HARDWARE\" class=\"docClass\">android.hardware.location.GeofenceHardware.MONITORING_TYPE_GPS_HARDWARE</a> is an example of a monitoring system.\n <a href=\"#!/api/android.hardware.location.GeofenceHardware-property-MONITOR_CURRENTLY_AVAILABLE\" rel=\"android.hardware.location.GeofenceHardware-property-MONITOR_CURRENTLY_AVAILABLE\" class=\"docClass\">android.hardware.location.GeofenceHardware.MONITOR_CURRENTLY_AVAILABLE</a> is an example of a monitoring status.\n <a href=\"#!/api/android.hardware.location.GeofenceHardware-property-SOURCE_TECHNOLOGY_GNSS\" rel=\"android.hardware.location.GeofenceHardware-property-SOURCE_TECHNOLOGY_GNSS\" class=\"docClass\">android.hardware.location.GeofenceHardware.SOURCE_TECHNOLOGY_GNSS</a> is an example of a source.</p>\n\n<p> This callback must be used instead of\n boolean, android.location.Location).</p>\n\n<p> NOTE: this API is only called on Android API 21 and above.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object {GeofenceHardwareMonitorEvent}<div class='sub-desc'><p>An object representing the monitoring system change event.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});