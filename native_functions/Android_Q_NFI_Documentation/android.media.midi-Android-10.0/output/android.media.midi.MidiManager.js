Ext.data.JsonP.android_media_midi_MidiManager({"tagname":"class","name":"android.media.midi.MidiManager","autodetected":{},"files":[{"filename":"MidiManager.js","href":"MidiManager.html#android-media-midi-MidiManager"}],"extends":"java.lang.Object","members":[{"name":"getDevices","tagname":"method","owner":"android.media.midi.MidiManager","id":"method-getDevices","meta":{}},{"name":"openBluetoothDevice","tagname":"method","owner":"android.media.midi.MidiManager","id":"method-openBluetoothDevice","meta":{}},{"name":"openDevice","tagname":"method","owner":"android.media.midi.MidiManager","id":"method-openDevice","meta":{}},{"name":"registerDeviceCallback","tagname":"method","owner":"android.media.midi.MidiManager","id":"method-registerDeviceCallback","meta":{}},{"name":"unregisterDeviceCallback","tagname":"method","owner":"android.media.midi.MidiManager","id":"method-unregisterDeviceCallback","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.media.midi.MidiManager","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.media.midi.MidiManager</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/MidiManager.html#android-media-midi-MidiManager' target='_blank'>MidiManager.js</a></div></pre><div class='doc-contents'><p>This class is the public application interface to the MIDI service.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getDevices' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.midi.MidiManager'>android.media.midi.MidiManager</span><br/><a href='source/MidiManager.html#android-media-midi-MidiManager-method-getDevices' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.midi.MidiManager-method-getDevices' class='name expandable'>getDevices</a>( <span class='pre'></span> ) : Object {android.media.midi.MidiDeviceInfo}<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the list of all connected MIDI devices. ...</div><div class='long'><p>Gets the list of all connected MIDI devices.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.media.midi.MidiDeviceInfo}</span><div class='sub-desc'><p>an array of all MIDI devices</p>\n</div></li></ul></div></div></div><div id='method-openBluetoothDevice' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.midi.MidiManager'>android.media.midi.MidiManager</span><br/><a href='source/MidiManager.html#android-media-midi-MidiManager-method-openBluetoothDevice' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.midi.MidiManager-method-openBluetoothDevice' class='name expandable'>openBluetoothDevice</a>( <span class='pre'>bluetoothDevice, listener, handler</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Opens a Bluetooth MIDI device for reading and writing. ...</div><div class='long'><p>Opens a Bluetooth MIDI device for reading and writing.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bluetoothDevice</span> : Object {BluetoothDevice}<div class='sub-desc'><p>a android.bluetooth.BluetoothDevice to open as a MIDI device</p>\n</div></li><li><span class='pre'>listener</span> : Object {MidiManager.OnDeviceOpenedListener}<div class='sub-desc'><p>a MidiManager.OnDeviceOpenedListener to be called to receive the\n result</p>\n</div></li><li><span class='pre'>handler</span> : Object {Handler}<div class='sub-desc'><p>the Handler that will be used for delivering\n                the result. If handler is null, then the thread used for the\n                listener is unspecified.</p>\n</div></li></ul></div></div></div><div id='method-openDevice' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.midi.MidiManager'>android.media.midi.MidiManager</span><br/><a href='source/MidiManager.html#android-media-midi-MidiManager-method-openDevice' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.midi.MidiManager-method-openDevice' class='name expandable'>openDevice</a>( <span class='pre'>deviceInfo, listener, handler</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Opens a MIDI device for reading and writing. ...</div><div class='long'><p>Opens a MIDI device for reading and writing.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>deviceInfo</span> : Object {MidiDeviceInfo}<div class='sub-desc'><p>a <a href=\"#!/api/android.media.midi.MidiDeviceInfo\" rel=\"android.media.midi.MidiDeviceInfo\" class=\"docClass\">android.media.midi.MidiDeviceInfo</a> to open</p>\n</div></li><li><span class='pre'>listener</span> : Object {MidiManager.OnDeviceOpenedListener}<div class='sub-desc'><p>a MidiManager.OnDeviceOpenedListener to be called\n                 to receive the result</p>\n</div></li><li><span class='pre'>handler</span> : Object {Handler}<div class='sub-desc'><p>the Handler that will be used for delivering\n                the result. If handler is null, then the thread used for the\n                listener is unspecified.</p>\n</div></li></ul></div></div></div><div id='method-registerDeviceCallback' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.midi.MidiManager'>android.media.midi.MidiManager</span><br/><a href='source/MidiManager.html#android-media-midi-MidiManager-method-registerDeviceCallback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.midi.MidiManager-method-registerDeviceCallback' class='name expandable'>registerDeviceCallback</a>( <span class='pre'>callback, handler</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Registers a callback to receive notifications when MIDI devices are added and removed. ...</div><div class='long'><p>Registers a callback to receive notifications when MIDI devices are added and removed.</p>\n\n<p> The <a href=\"#!/api/android.media.midi.MidiManager.DeviceCallback-method-onDeviceStatusChanged\" rel=\"android.media.midi.MidiManager.DeviceCallback-method-onDeviceStatusChanged\" class=\"docClass\">android.media.midi.MidiManager.DeviceCallback.onDeviceStatusChanged</a> method will be called immediately\n for any devices that have open ports. This allows applications to know which input\n ports are already in use and, therefore, unavailable.</p>\n\n<p> Applications should call <a href=\"#!/api/android.media.midi.MidiManager-method-getDevices\" rel=\"android.media.midi.MidiManager-method-getDevices\" class=\"docClass\">getDevices</a> before registering the callback\n to get a list of devices already added.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Object {MidiManager.DeviceCallback}<div class='sub-desc'><p>a DeviceCallback for MIDI device notifications</p>\n</div></li><li><span class='pre'>handler</span> : Object {Handler}<div class='sub-desc'><p>The Handler that will be used for delivering the\n                device notifications. If handler is null, then the thread used for the\n                callback is unspecified.</p>\n</div></li></ul></div></div></div><div id='method-unregisterDeviceCallback' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.midi.MidiManager'>android.media.midi.MidiManager</span><br/><a href='source/MidiManager.html#android-media-midi-MidiManager-method-unregisterDeviceCallback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.midi.MidiManager-method-unregisterDeviceCallback' class='name expandable'>unregisterDeviceCallback</a>( <span class='pre'>callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Unregisters a android.media.midi.MidiManager.DeviceCallback. ...</div><div class='long'><p>Unregisters a <a href=\"#!/api/android.media.midi.MidiManager.DeviceCallback\" rel=\"android.media.midi.MidiManager.DeviceCallback\" class=\"docClass\">android.media.midi.MidiManager.DeviceCallback</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Object {MidiManager.DeviceCallback}<div class='sub-desc'><p>a DeviceCallback to unregister</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});