Ext.data.JsonP.android_bluetooth_BluetoothHidDevice_Callback({"tagname":"class","name":"android.bluetooth.BluetoothHidDevice.Callback","autodetected":{},"files":[{"filename":"Callback.js","href":"Callback.html#android-bluetooth-BluetoothHidDevice-Callback"}],"extends":"java.lang.Object","members":[{"name":"onAppStatusChanged","tagname":"method","owner":"android.bluetooth.BluetoothHidDevice.Callback","id":"method-onAppStatusChanged","meta":{}},{"name":"onConnectionStateChanged","tagname":"method","owner":"android.bluetooth.BluetoothHidDevice.Callback","id":"method-onConnectionStateChanged","meta":{}},{"name":"onGetReport","tagname":"method","owner":"android.bluetooth.BluetoothHidDevice.Callback","id":"method-onGetReport","meta":{}},{"name":"onInterruptData","tagname":"method","owner":"android.bluetooth.BluetoothHidDevice.Callback","id":"method-onInterruptData","meta":{}},{"name":"onSetProtocol","tagname":"method","owner":"android.bluetooth.BluetoothHidDevice.Callback","id":"method-onSetProtocol","meta":{}},{"name":"onSetReport","tagname":"method","owner":"android.bluetooth.BluetoothHidDevice.Callback","id":"method-onSetReport","meta":{}},{"name":"onVirtualCableUnplug","tagname":"method","owner":"android.bluetooth.BluetoothHidDevice.Callback","id":"method-onVirtualCableUnplug","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.bluetooth.BluetoothHidDevice.Callback","short_doc":"The template class that applications use to call callback functions on events from the HID\n host. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.bluetooth.BluetoothHidDevice.Callback</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Callback.html#android-bluetooth-BluetoothHidDevice-Callback' target='_blank'>Callback.js</a></div></pre><div class='doc-contents'><p>The template class that applications use to call callback functions on events from the HID\n host. Callback functions are wrapped in this class and registered to the Android system\n during app registration.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-onAppStatusChanged' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothHidDevice.Callback'>android.bluetooth.BluetoothHidDevice.Callback</span><br/><a href='source/Callback.html#android-bluetooth-BluetoothHidDevice-Callback-method-onAppStatusChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothHidDevice.Callback-method-onAppStatusChanged' class='name expandable'>onAppStatusChanged</a>( <span class='pre'>pluggedDevice, registered</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Callback called when application registration state changes. ...</div><div class='long'><p>Callback called when application registration state changes. Usually it's called due to\n either <a href=\"#!/api/android.bluetooth.BluetoothHidDevice-method-registerApp\" rel=\"android.bluetooth.BluetoothHidDevice-method-registerApp\" class=\"docClass\">(String, String, String, byte, byte[],\n Executor, Callback)</a> or android.bluetooth.BluetoothHidDevice.unregisterApp() , but can be also\n unsolicited in case e.g. Bluetooth was turned off in which case application is\n unregistered automatically.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pluggedDevice</span> : Object {BluetoothDevice}<div class='sub-desc'><p>BluetoothDevice object which represents host that currently\n     has Virtual Cable established with device. Only valid when application is registered,\n     can be <code>null</code>.</p>\n</div></li><li><span class='pre'>registered</span> : Boolean<div class='sub-desc'><p><code>true</code> if application is registered, <code>false</code>\n     otherwise.</p>\n</div></li></ul></div></div></div><div id='method-onConnectionStateChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothHidDevice.Callback'>android.bluetooth.BluetoothHidDevice.Callback</span><br/><a href='source/Callback.html#android-bluetooth-BluetoothHidDevice-Callback-method-onConnectionStateChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothHidDevice.Callback-method-onConnectionStateChanged' class='name expandable'>onConnectionStateChanged</a>( <span class='pre'>device, state</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Callback called when connection state with remote host was changed. ...</div><div class='long'><p>Callback called when connection state with remote host was changed. Application can\n assume than Virtual Cable is established when called with <a href=\"#!/api/android.bluetooth.BluetoothProfile-property-STATE_CONNECTED\" rel=\"android.bluetooth.BluetoothProfile-property-STATE_CONNECTED\" class=\"docClass\">android.bluetooth.BluetoothProfile.STATE_CONNECTED</a> <code>state</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>device</span> : Object {BluetoothDevice}<div class='sub-desc'><p>BluetoothDevice object representing host device which connection\n     state was changed.</p>\n</div></li><li><span class='pre'>state</span> : Number<div class='sub-desc'><p>Connection state as defined in BluetoothProfile.</p>\n</div></li></ul></div></div></div><div id='method-onGetReport' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothHidDevice.Callback'>android.bluetooth.BluetoothHidDevice.Callback</span><br/><a href='source/Callback.html#android-bluetooth-BluetoothHidDevice-Callback-method-onGetReport' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothHidDevice.Callback-method-onGetReport' class='name expandable'>onGetReport</a>( <span class='pre'>type, id, bufferSize</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Callback called when GET_REPORT is received from remote host. ...</div><div class='long'><p>Callback called when GET_REPORT is received from remote host. Should be replied by\n application using byte, byte,\n byte[]).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object {BluetoothDevice}<div class='sub-desc'><p>Requested Report Type.</p>\n</div></li><li><span class='pre'>id</span> : Number<div class='sub-desc'><p>Requested Report Id, can be 0 if no Report Id are defined in descriptor.</p>\n</div></li><li><span class='pre'>bufferSize</span> : Number<div class='sub-desc'><p>Requested buffer size, application shall respond with at least given\n     number of bytes.</p>\n</div></li></ul></div></div></div><div id='method-onInterruptData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothHidDevice.Callback'>android.bluetooth.BluetoothHidDevice.Callback</span><br/><a href='source/Callback.html#android-bluetooth-BluetoothHidDevice-Callback-method-onInterruptData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothHidDevice.Callback-method-onInterruptData' class='name expandable'>onInterruptData</a>( <span class='pre'>reportId, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Callback called when report data is received over interrupt channel. ...</div><div class='long'><p>Callback called when report data is received over interrupt channel. Report Type is\n assumed to be <a href=\"#!/api/android.bluetooth.BluetoothHidDevice-property-REPORT_TYPE_OUTPUT\" rel=\"android.bluetooth.BluetoothHidDevice-property-REPORT_TYPE_OUTPUT\" class=\"docClass\">android.bluetooth.BluetoothHidDevice.REPORT_TYPE_OUTPUT</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>reportId</span> : Object {BluetoothDevice}<div class='sub-desc'><p>Report Id.</p>\n</div></li><li><span class='pre'>data</span> : Number<div class='sub-desc'><p>Report data.</p>\n</div></li></ul></div></div></div><div id='method-onSetProtocol' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothHidDevice.Callback'>android.bluetooth.BluetoothHidDevice.Callback</span><br/><a href='source/Callback.html#android-bluetooth-BluetoothHidDevice-Callback-method-onSetProtocol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothHidDevice.Callback-method-onSetProtocol' class='name expandable'>onSetProtocol</a>( <span class='pre'>protocol</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Callback called when SET_PROTOCOL is received from remote host. ...</div><div class='long'><p>Callback called when SET_PROTOCOL is received from remote host. Application shall use\n this information to send only reports valid for given protocol mode. By default, <a href=\"#!/api/android.bluetooth.BluetoothHidDevice-property-PROTOCOL_REPORT_MODE\" rel=\"android.bluetooth.BluetoothHidDevice-property-PROTOCOL_REPORT_MODE\" class=\"docClass\">android.bluetooth.BluetoothHidDevice.PROTOCOL_REPORT_MODE</a> shall be assumed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>protocol</span> : Object {BluetoothDevice}<div class='sub-desc'><p>Protocol Mode.</p>\n</div></li></ul></div></div></div><div id='method-onSetReport' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothHidDevice.Callback'>android.bluetooth.BluetoothHidDevice.Callback</span><br/><a href='source/Callback.html#android-bluetooth-BluetoothHidDevice-Callback-method-onSetReport' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothHidDevice.Callback-method-onSetReport' class='name expandable'>onSetReport</a>( <span class='pre'>type, id, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Callback called when SET_REPORT is received from remote host. ...</div><div class='long'><p>Callback called when SET_REPORT is received from remote host. In case received data are\n invalid, application shall respond with byte).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object {BluetoothDevice}<div class='sub-desc'><p>Report Type.</p>\n</div></li><li><span class='pre'>id</span> : Number<div class='sub-desc'><p>Report Id.</p>\n</div></li><li><span class='pre'>data</span> : Number<div class='sub-desc'><p>Report data.</p>\n</div></li></ul></div></div></div><div id='method-onVirtualCableUnplug' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothHidDevice.Callback'>android.bluetooth.BluetoothHidDevice.Callback</span><br/><a href='source/Callback.html#android-bluetooth-BluetoothHidDevice-Callback-method-onVirtualCableUnplug' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothHidDevice.Callback-method-onVirtualCableUnplug' class='name expandable'>onVirtualCableUnplug</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Callback called when Virtual Cable is removed. ...</div><div class='long'><p>Callback called when Virtual Cable is removed. After this callback is received connection\n will be disconnected automatically.</p>\n</div></div></div></div></div></div></div>","meta":{}});