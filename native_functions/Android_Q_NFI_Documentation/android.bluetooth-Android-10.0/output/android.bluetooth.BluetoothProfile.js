Ext.data.JsonP.android_bluetooth_BluetoothProfile({"tagname":"class","name":"android.bluetooth.BluetoothProfile","autodetected":{},"files":[{"filename":"BluetoothProfile.js","href":"BluetoothProfile.html#android-bluetooth-BluetoothProfile"}],"members":[{"name":"A2DP","tagname":"property","owner":"android.bluetooth.BluetoothProfile","id":"property-A2DP","meta":{}},{"name":"EXTRA_PREVIOUS_STATE","tagname":"property","owner":"android.bluetooth.BluetoothProfile","id":"property-EXTRA_PREVIOUS_STATE","meta":{}},{"name":"EXTRA_STATE","tagname":"property","owner":"android.bluetooth.BluetoothProfile","id":"property-EXTRA_STATE","meta":{}},{"name":"GATT","tagname":"property","owner":"android.bluetooth.BluetoothProfile","id":"property-GATT","meta":{}},{"name":"GATT_SERVER","tagname":"property","owner":"android.bluetooth.BluetoothProfile","id":"property-GATT_SERVER","meta":{}},{"name":"HEADSET","tagname":"property","owner":"android.bluetooth.BluetoothProfile","id":"property-HEADSET","meta":{}},{"name":"HEALTH","tagname":"property","owner":"android.bluetooth.BluetoothProfile","id":"property-HEALTH","meta":{"deprecated":{"text":"<p>Health Device Profile (HDP) and MCAP protocol are no longer used. New\napps should use Bluetooth Low Energy based solutions such as <a href=\"#!/api/android.bluetooth.BluetoothGatt\" rel=\"android.bluetooth.BluetoothGatt\" class=\"docClass\">android.bluetooth.BluetoothGatt</a>,\nandroid.bluetooth.BluetoothAdapter.listenUsingL2capChannel(), or\nandroid.bluetooth.BluetoothDevice.createL2capChannel(int)</p>\n"}}},{"name":"HEARING_AID","tagname":"property","owner":"android.bluetooth.BluetoothProfile","id":"property-HEARING_AID","meta":{}},{"name":"HID_DEVICE","tagname":"property","owner":"android.bluetooth.BluetoothProfile","id":"property-HID_DEVICE","meta":{}},{"name":"SAP","tagname":"property","owner":"android.bluetooth.BluetoothProfile","id":"property-SAP","meta":{}},{"name":"STATE_CONNECTED","tagname":"property","owner":"android.bluetooth.BluetoothProfile","id":"property-STATE_CONNECTED","meta":{}},{"name":"STATE_CONNECTING","tagname":"property","owner":"android.bluetooth.BluetoothProfile","id":"property-STATE_CONNECTING","meta":{}},{"name":"STATE_DISCONNECTED","tagname":"property","owner":"android.bluetooth.BluetoothProfile","id":"property-STATE_DISCONNECTED","meta":{}},{"name":"STATE_DISCONNECTING","tagname":"property","owner":"android.bluetooth.BluetoothProfile","id":"property-STATE_DISCONNECTING","meta":{}},{"name":"getConnectedDevices","tagname":"method","owner":"android.bluetooth.BluetoothProfile","id":"method-getConnectedDevices","meta":{}},{"name":"getConnectionState","tagname":"method","owner":"android.bluetooth.BluetoothProfile","id":"method-getConnectionState","meta":{}},{"name":"getDevicesMatchingConnectionStates","tagname":"method","owner":"android.bluetooth.BluetoothProfile","id":"method-getDevicesMatchingConnectionStates","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.bluetooth.BluetoothProfile","short_doc":"Public APIs for the Bluetooth Profiles. ...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile' target='_blank'>BluetoothProfile.js</a></div></pre><div class='doc-contents'><p>Public APIs for the Bluetooth Profiles.</p>\n\n<p> <p> Clients should call <a href=\"#!/api/android.bluetooth.BluetoothAdapter-method-getProfileProxy\" rel=\"android.bluetooth.BluetoothAdapter-method-getProfileProxy\" class=\"docClass\">android.bluetooth.BluetoothAdapter.getProfileProxy</a>,\n to get the Profile Proxy. Each public profile implements this\n interface.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-A2DP' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothProfile'>android.bluetooth.BluetoothProfile</span><br/><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile-property-A2DP' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothProfile-property-A2DP' class='name expandable'>A2DP</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A2DP profile. ...</div><div class='long'><p>A2DP profile.</p>\n<p>Defaults to: <code>&quot;2&quot;</code></p></div></div></div><div id='property-EXTRA_PREVIOUS_STATE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothProfile'>android.bluetooth.BluetoothProfile</span><br/><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile-property-EXTRA_PREVIOUS_STATE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothProfile-property-EXTRA_PREVIOUS_STATE' class='name expandable'>EXTRA_PREVIOUS_STATE</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Extra for the connection state intents of the individual profiles. ...</div><div class='long'><p>Extra for the connection state intents of the individual profiles.</p>\n\n<p>This extra represents the previous connection state of the profile of the\nBluetooth device.</p>\n<p>Defaults to: <code>&quot;android.bluetooth.profile.extra.PREVIOUS_STATE&quot;</code></p></div></div></div><div id='property-EXTRA_STATE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothProfile'>android.bluetooth.BluetoothProfile</span><br/><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile-property-EXTRA_STATE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothProfile-property-EXTRA_STATE' class='name expandable'>EXTRA_STATE</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Extra for the connection state intents of the individual profiles. ...</div><div class='long'><p>Extra for the connection state intents of the individual profiles.</p>\n\n<p>This extra represents the current connection state of the profile of the\nBluetooth device.</p>\n<p>Defaults to: <code>&quot;android.bluetooth.profile.extra.STATE&quot;</code></p></div></div></div><div id='property-GATT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothProfile'>android.bluetooth.BluetoothProfile</span><br/><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile-property-GATT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothProfile-property-GATT' class='name expandable'>GATT</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>GATT ...</div><div class='long'><p>GATT</p>\n<p>Defaults to: <code>&quot;7&quot;</code></p></div></div></div><div id='property-GATT_SERVER' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothProfile'>android.bluetooth.BluetoothProfile</span><br/><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile-property-GATT_SERVER' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothProfile-property-GATT_SERVER' class='name expandable'>GATT_SERVER</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>GATT_SERVER ...</div><div class='long'><p>GATT_SERVER</p>\n<p>Defaults to: <code>&quot;8&quot;</code></p></div></div></div><div id='property-HEADSET' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothProfile'>android.bluetooth.BluetoothProfile</span><br/><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile-property-HEADSET' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothProfile-property-HEADSET' class='name expandable'>HEADSET</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Headset and Handsfree profile ...</div><div class='long'><p>Headset and Handsfree profile</p>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-HEALTH' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothProfile'>android.bluetooth.BluetoothProfile</span><br/><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile-property-HEALTH' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothProfile-property-HEALTH' class='name expandable'>HEALTH</a> : String<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'>Health Profile ...</div><div class='long'><p>Health Profile</p>\n<p>Defaults to: <code>&quot;3&quot;</code></p>        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This property has been <strong>deprecated</strong> </p>\n        <p>Health Device Profile (HDP) and MCAP protocol are no longer used. New\napps should use Bluetooth Low Energy based solutions such as <a href=\"#!/api/android.bluetooth.BluetoothGatt\" rel=\"android.bluetooth.BluetoothGatt\" class=\"docClass\">android.bluetooth.BluetoothGatt</a>,\nandroid.bluetooth.BluetoothAdapter.listenUsingL2capChannel(), or\nandroid.bluetooth.BluetoothDevice.createL2capChannel(int)</p>\n\n        </div>\n</div></div></div><div id='property-HEARING_AID' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothProfile'>android.bluetooth.BluetoothProfile</span><br/><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile-property-HEARING_AID' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothProfile-property-HEARING_AID' class='name expandable'>HEARING_AID</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Hearing Aid Device ...</div><div class='long'><p>Hearing Aid Device</p>\n<p>Defaults to: <code>&quot;21&quot;</code></p></div></div></div><div id='property-HID_DEVICE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothProfile'>android.bluetooth.BluetoothProfile</span><br/><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile-property-HID_DEVICE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothProfile-property-HID_DEVICE' class='name expandable'>HID_DEVICE</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>HID Device ...</div><div class='long'><p>HID Device</p>\n<p>Defaults to: <code>&quot;19&quot;</code></p></div></div></div><div id='property-SAP' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothProfile'>android.bluetooth.BluetoothProfile</span><br/><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile-property-SAP' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothProfile-property-SAP' class='name expandable'>SAP</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;10&quot;</code></p></div></div></div><div id='property-STATE_CONNECTED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothProfile'>android.bluetooth.BluetoothProfile</span><br/><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile-property-STATE_CONNECTED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothProfile-property-STATE_CONNECTED' class='name expandable'>STATE_CONNECTED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The profile is in connected state ...</div><div class='long'><p>The profile is in connected state</p>\n<p>Defaults to: <code>&quot;2&quot;</code></p></div></div></div><div id='property-STATE_CONNECTING' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothProfile'>android.bluetooth.BluetoothProfile</span><br/><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile-property-STATE_CONNECTING' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothProfile-property-STATE_CONNECTING' class='name expandable'>STATE_CONNECTING</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The profile is in connecting state ...</div><div class='long'><p>The profile is in connecting state</p>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-STATE_DISCONNECTED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothProfile'>android.bluetooth.BluetoothProfile</span><br/><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile-property-STATE_DISCONNECTED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothProfile-property-STATE_DISCONNECTED' class='name expandable'>STATE_DISCONNECTED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The profile is in disconnected state ...</div><div class='long'><p>The profile is in disconnected state</p>\n<p>Defaults to: <code>&quot;0&quot;</code></p></div></div></div><div id='property-STATE_DISCONNECTING' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothProfile'>android.bluetooth.BluetoothProfile</span><br/><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile-property-STATE_DISCONNECTING' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothProfile-property-STATE_DISCONNECTING' class='name expandable'>STATE_DISCONNECTING</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The profile is in disconnecting state ...</div><div class='long'><p>The profile is in disconnecting state</p>\n<p>Defaults to: <code>&quot;3&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getConnectedDevices' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothProfile'>android.bluetooth.BluetoothProfile</span><br/><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile-method-getConnectedDevices' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothProfile-method-getConnectedDevices' class='name expandable'>getConnectedDevices</a>( <span class='pre'></span> ) : Object {java.util.List}<span class=\"signature\"></span></div><div class='description'><div class='short'>Get connected devices for this specific profile. ...</div><div class='long'><p>Get connected devices for this specific profile.</p>\n\n<p> <p> Return the set of devices which are in state <a href=\"#!/api/android.bluetooth.BluetoothProfile-property-STATE_CONNECTED\" rel=\"android.bluetooth.BluetoothProfile-property-STATE_CONNECTED\" class=\"docClass\">STATE_CONNECTED</a></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {java.util.List}</span><div class='sub-desc'><p>List of devices. The list will be empty on error.</p>\n</div></li></ul></div></div></div><div id='method-getConnectionState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothProfile'>android.bluetooth.BluetoothProfile</span><br/><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile-method-getConnectionState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothProfile-method-getConnectionState' class='name expandable'>getConnectionState</a>( <span class='pre'>device</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the current connection state of the profile ...</div><div class='long'><p>Get the current connection state of the profile</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>device</span> : Object {BluetoothDevice}<div class='sub-desc'><p>Remote bluetooth device.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>State of the profile connection. One of <a href=\"#!/api/android.bluetooth.BluetoothProfile-property-STATE_CONNECTED\" rel=\"android.bluetooth.BluetoothProfile-property-STATE_CONNECTED\" class=\"docClass\">STATE_CONNECTED</a>, <a href=\"#!/api/android.bluetooth.BluetoothProfile-property-STATE_CONNECTING\" rel=\"android.bluetooth.BluetoothProfile-property-STATE_CONNECTING\" class=\"docClass\">STATE_CONNECTING</a>, <a href=\"#!/api/android.bluetooth.BluetoothProfile-property-STATE_DISCONNECTED\" rel=\"android.bluetooth.BluetoothProfile-property-STATE_DISCONNECTED\" class=\"docClass\">STATE_DISCONNECTED</a>, <a href=\"#!/api/android.bluetooth.BluetoothProfile-property-STATE_DISCONNECTING\" rel=\"android.bluetooth.BluetoothProfile-property-STATE_DISCONNECTING\" class=\"docClass\">STATE_DISCONNECTING</a></p>\n</div></li></ul></div></div></div><div id='method-getDevicesMatchingConnectionStates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothProfile'>android.bluetooth.BluetoothProfile</span><br/><a href='source/BluetoothProfile.html#android-bluetooth-BluetoothProfile-method-getDevicesMatchingConnectionStates' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothProfile-method-getDevicesMatchingConnectionStates' class='name expandable'>getDevicesMatchingConnectionStates</a>( <span class='pre'>states</span> ) : Object {java.util.List}<span class=\"signature\"></span></div><div class='description'><div class='short'>Get a list of devices that match any of the given connection\n states. ...</div><div class='long'><p>Get a list of devices that match any of the given connection\n states.</p>\n\n<p> <p> If none of the devices match any of the given states,\n an empty list will be returned.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>states</span> : Object {int[]}<div class='sub-desc'><p>Array of states. States can be one of <a href=\"#!/api/android.bluetooth.BluetoothProfile-property-STATE_CONNECTED\" rel=\"android.bluetooth.BluetoothProfile-property-STATE_CONNECTED\" class=\"docClass\">STATE_CONNECTED</a>, <a href=\"#!/api/android.bluetooth.BluetoothProfile-property-STATE_CONNECTING\" rel=\"android.bluetooth.BluetoothProfile-property-STATE_CONNECTING\" class=\"docClass\">STATE_CONNECTING</a>, <a href=\"#!/api/android.bluetooth.BluetoothProfile-property-STATE_DISCONNECTED\" rel=\"android.bluetooth.BluetoothProfile-property-STATE_DISCONNECTED\" class=\"docClass\">STATE_DISCONNECTED</a>, <a href=\"#!/api/android.bluetooth.BluetoothProfile-property-STATE_DISCONNECTING\" rel=\"android.bluetooth.BluetoothProfile-property-STATE_DISCONNECTING\" class=\"docClass\">STATE_DISCONNECTING</a>,</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {java.util.List}</span><div class='sub-desc'><p>List of devices. The list will be empty on error.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});