Ext.data.JsonP.android_hardware_hdmi_HdmiUtils({"tagname":"class","name":"android.hardware.hdmi.HdmiUtils","autodetected":{},"files":[{"filename":"HdmiUtils.js","href":"HdmiUtils.html#android-hardware-hdmi-HdmiUtils"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"getHdmiAddressRelativePosition","tagname":"method","owner":"android.hardware.hdmi.HdmiUtils","id":"method-getHdmiAddressRelativePosition","meta":{}},{"name":"getLocalPortFromPhysicalAddress","tagname":"method","owner":"android.hardware.hdmi.HdmiUtils","id":"method-getLocalPortFromPhysicalAddress","meta":{}},{"name":"isValidPhysicalAddress","tagname":"method","owner":"android.hardware.hdmi.HdmiUtils","id":"method-isValidPhysicalAddress","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.hardware.hdmi.HdmiUtils","short_doc":"Various utilities related to HDMI CEC. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.hardware.hdmi.HdmiUtils</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/HdmiUtils.html#android-hardware-hdmi-HdmiUtils' target='_blank'>HdmiUtils.js</a></div></pre><div class='doc-contents'><p>Various utilities related to HDMI CEC.</p>\n\n<p> TODO(b/110094868): unhide for Q</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getHdmiAddressRelativePosition' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.hdmi.HdmiUtils'>android.hardware.hdmi.HdmiUtils</span><br/><a href='source/HdmiUtils.html#android-hardware-hdmi-HdmiUtils-method-getHdmiAddressRelativePosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.hdmi.HdmiUtils-method-getHdmiAddressRelativePosition' class='name expandable'>getHdmiAddressRelativePosition</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the relative position of two physical addresses. ...</div><div class='long'><p>Returns the relative position of two physical addresses.</p>\n</div></div></div><div id='method-getLocalPortFromPhysicalAddress' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.hdmi.HdmiUtils'>android.hardware.hdmi.HdmiUtils</span><br/><a href='source/HdmiUtils.html#android-hardware-hdmi-HdmiUtils-method-getLocalPortFromPhysicalAddress' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.hdmi.HdmiUtils-method-getLocalPortFromPhysicalAddress' class='name expandable'>getLocalPortFromPhysicalAddress</a>( <span class='pre'>targetPhysicalAddress, myPhysicalAddress</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Method to parse target physical address to the port number on the current device. ...</div><div class='long'><p>Method to parse target physical address to the port number on the current device.</p>\n\n<p> <p>This check assumes target address is valid.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>targetPhysicalAddress</span> : Number<div class='sub-desc'><p>is the physical address of the target device</p>\n</div></li><li><span class='pre'>myPhysicalAddress</span> : Number<div class='sub-desc'><p>is the physical address of the current device</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>If the target device is under the current device, return the port number of current device\n that the target device is connected to. This also applies to the devices that are indirectly\n connected to the current device.</p>\n\n<p> <p>If the target device has the same physical address as the current device, return\n TARGET_SAME_PHYSICAL_ADDRESS.</p>\n\n<p> <p>If the target device is not under the current device, return\n TARGET_NOT_UNDER_LOCAL_DEVICE.</p>\n</div></li></ul></div></div></div><div id='method-isValidPhysicalAddress' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.hdmi.HdmiUtils'>android.hardware.hdmi.HdmiUtils</span><br/><a href='source/HdmiUtils.html#android-hardware-hdmi-HdmiUtils-method-isValidPhysicalAddress' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.hdmi.HdmiUtils-method-isValidPhysicalAddress' class='name expandable'>isValidPhysicalAddress</a>( <span class='pre'>address</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Check if the given physical address is valid. ...</div><div class='long'><p>Check if the given physical address is valid.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>address</span> : Number<div class='sub-desc'><p>physical address</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>{@code true} if the given address is valid</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});