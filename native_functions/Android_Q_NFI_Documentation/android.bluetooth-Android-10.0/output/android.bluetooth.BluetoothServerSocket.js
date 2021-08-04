Ext.data.JsonP.android_bluetooth_BluetoothServerSocket({"tagname":"class","name":"android.bluetooth.BluetoothServerSocket","autodetected":{},"files":[{"filename":"BluetoothServerSocket.js","href":"BluetoothServerSocket.html#android-bluetooth-BluetoothServerSocket"}],"extends":"java.lang.Object","members":[{"name":"accept","tagname":"method","owner":"android.bluetooth.BluetoothServerSocket","id":"method-accept","meta":{}},{"name":"close","tagname":"method","owner":"android.bluetooth.BluetoothServerSocket","id":"method-close","meta":{}},{"name":"getPsm","tagname":"method","owner":"android.bluetooth.BluetoothServerSocket","id":"method-getPsm","meta":{}},{"name":"toString","tagname":"method","owner":"android.bluetooth.BluetoothServerSocket","id":"method-toString","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.bluetooth.BluetoothServerSocket","short_doc":"implements java.io.Closeable\n\nA listening Bluetooth socket. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.bluetooth.BluetoothServerSocket</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/BluetoothServerSocket.html#android-bluetooth-BluetoothServerSocket' target='_blank'>BluetoothServerSocket.js</a></div></pre><div class='doc-contents'><p>implements java.io.Closeable</p>\n\n<p>A listening Bluetooth socket.</p>\n\n<p> <p>The interface for Bluetooth Sockets is similar to that of TCP sockets:\n java.net.Socket and java.net.ServerSocket. On the server\n side, use a <a href=\"#!/api/android.bluetooth.BluetoothServerSocket\" rel=\"android.bluetooth.BluetoothServerSocket\" class=\"docClass\">android.bluetooth.BluetoothServerSocket</a> to create a listening server\n socket. When a connection is accepted by the <a href=\"#!/api/android.bluetooth.BluetoothServerSocket\" rel=\"android.bluetooth.BluetoothServerSocket\" class=\"docClass\">android.bluetooth.BluetoothServerSocket</a>,\n it will return a new <a href=\"#!/api/android.bluetooth.BluetoothSocket\" rel=\"android.bluetooth.BluetoothSocket\" class=\"docClass\">android.bluetooth.BluetoothSocket</a> to manage the connection.\n On the client side, use a single <a href=\"#!/api/android.bluetooth.BluetoothSocket\" rel=\"android.bluetooth.BluetoothSocket\" class=\"docClass\">android.bluetooth.BluetoothSocket</a> to both initiate\n an outgoing connection and to manage the connection.</p>\n\n<p> <p>For Bluetooth BR/EDR, the most common type of socket is RFCOMM, which is the type supported by\n the Android APIs. RFCOMM is a connection-oriented, streaming transport over Bluetooth BR/EDR. It\n is also known as the Serial Port Profile (SPP). To create a listening\n <a href=\"#!/api/android.bluetooth.BluetoothServerSocket\" rel=\"android.bluetooth.BluetoothServerSocket\" class=\"docClass\">android.bluetooth.BluetoothServerSocket</a> that's ready for incoming Bluetooth BR/EDR connections, use <a href=\"#!/api/android.bluetooth.BluetoothAdapter-method-listenUsingRfcommWithServiceRecord\" rel=\"android.bluetooth.BluetoothAdapter-method-listenUsingRfcommWithServiceRecord\" class=\"docClass\">android.bluetooth.BluetoothAdapter.listenUsingRfcommWithServiceRecord()</a>.</p>\n\n<p> <p>For Bluetooth LE, the socket uses LE Connection-oriented Channel (CoC). LE CoC is a\n connection-oriented, streaming transport over Bluetooth LE and has a credit-based flow control.\n Correspondingly, use <a href=\"#!/api/android.bluetooth.BluetoothAdapter-method-listenUsingL2capChannel\" rel=\"android.bluetooth.BluetoothAdapter-method-listenUsingL2capChannel\" class=\"docClass\">android.bluetooth.BluetoothAdapter.listenUsingL2capChannel()</a> to create a listening <a href=\"#!/api/android.bluetooth.BluetoothServerSocket\" rel=\"android.bluetooth.BluetoothServerSocket\" class=\"docClass\">android.bluetooth.BluetoothServerSocket</a>\n that's ready for incoming Bluetooth LE CoC connections. For LE CoC, you can use <a href=\"#!/api/android.bluetooth.BluetoothServerSocket-method-getPsm\" rel=\"android.bluetooth.BluetoothServerSocket-method-getPsm\" class=\"docClass\">getPsm</a>()\n to get the protocol/service multiplexer (PSM) value that the peer needs to use to connect to your\n socket.</p>\n\n<p> <p> After the listening <a href=\"#!/api/android.bluetooth.BluetoothServerSocket\" rel=\"android.bluetooth.BluetoothServerSocket\" class=\"docClass\">android.bluetooth.BluetoothServerSocket</a> is created, call <a href=\"#!/api/android.bluetooth.BluetoothServerSocket-method-accept\" rel=\"android.bluetooth.BluetoothServerSocket-method-accept\" class=\"docClass\">accept</a>() to\n listen for incoming connection requests. This call will block until a connection is established,\n at which point, it will return a <a href=\"#!/api/android.bluetooth.BluetoothSocket\" rel=\"android.bluetooth.BluetoothSocket\" class=\"docClass\">android.bluetooth.BluetoothSocket</a> to manage the connection. Once the\n <a href=\"#!/api/android.bluetooth.BluetoothSocket\" rel=\"android.bluetooth.BluetoothSocket\" class=\"docClass\">android.bluetooth.BluetoothSocket</a> is acquired, it's a good idea to call <a href=\"#!/api/android.bluetooth.BluetoothServerSocket-method-close\" rel=\"android.bluetooth.BluetoothServerSocket-method-close\" class=\"docClass\">close</a>() on the <a href=\"#!/api/android.bluetooth.BluetoothServerSocket\" rel=\"android.bluetooth.BluetoothServerSocket\" class=\"docClass\">android.bluetooth.BluetoothServerSocket</a> when it's no longer needed for accepting\n connections. Closing the <a href=\"#!/api/android.bluetooth.BluetoothServerSocket\" rel=\"android.bluetooth.BluetoothServerSocket\" class=\"docClass\">android.bluetooth.BluetoothServerSocket</a> will <em>not</em> close the returned\n <a href=\"#!/api/android.bluetooth.BluetoothSocket\" rel=\"android.bluetooth.BluetoothSocket\" class=\"docClass\">android.bluetooth.BluetoothSocket</a>.</p>\n\n<p> <p><a href=\"#!/api/android.bluetooth.BluetoothServerSocket\" rel=\"android.bluetooth.BluetoothServerSocket\" class=\"docClass\">android.bluetooth.BluetoothServerSocket</a> is thread\n safe. In particular, <a href=\"#!/api/android.bluetooth.BluetoothServerSocket-method-close\" rel=\"android.bluetooth.BluetoothServerSocket-method-close\" class=\"docClass\">close</a> will always immediately abort ongoing\n operations and close the server socket.</p>\n\n<p> <p class=\"note\"><strong>Note:</strong>\n Requires the android.Manifest.permission.BLUETOOTH permission.</p>\n\n<p> <div class=\"special reference\">\n <h3>Developer Guides</h3>\n <p>For more information about using Bluetooth, read the\n <a href=\"{@docRoot}guide/topics/connectivity/bluetooth.html\">Bluetooth</a> developer guide.</p>\n </div></p>\n\n<p> {@see BluetoothSocket}</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-accept' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothServerSocket'>android.bluetooth.BluetoothServerSocket</span><br/><a href='source/BluetoothServerSocket.html#android-bluetooth-BluetoothServerSocket-method-accept' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothServerSocket-method-accept' class='name expandable'>accept</a>( <span class='pre'></span> ) : Object {android.bluetooth.BluetoothSocket}<span class=\"signature\"></span></div><div class='description'><div class='short'>Block until a connection is established, with timeout. ...</div><div class='long'><p>Block until a connection is established, with timeout.\n <p>Returns a connected <a href=\"#!/api/android.bluetooth.BluetoothSocket\" rel=\"android.bluetooth.BluetoothSocket\" class=\"docClass\">android.bluetooth.BluetoothSocket</a> on successful connection.\n <p>Once this call returns, it can be called again to accept subsequent\n incoming connections.\n <p><a href=\"#!/api/android.bluetooth.BluetoothServerSocket-method-close\" rel=\"android.bluetooth.BluetoothServerSocket-method-close\" class=\"docClass\">close</a> can be used to abort this call from another thread.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.bluetooth.BluetoothSocket}</span><div class='sub-desc'><p>a connected BluetoothSocket</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>IOException on error, for example this call was aborted, or timeout</p>\n</div></li></ul></div></div></div><div id='method-close' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothServerSocket'>android.bluetooth.BluetoothServerSocket</span><br/><a href='source/BluetoothServerSocket.html#android-bluetooth-BluetoothServerSocket-method-close' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothServerSocket-method-close' class='name expandable'>close</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Immediately close this socket, and release all associated resources. ...</div><div class='long'><p>Immediately close this socket, and release all associated resources.\n <p>Causes blocked calls on this socket in other threads to immediately\n throw an IOException.\n <p>Closing the <a href=\"#!/api/android.bluetooth.BluetoothServerSocket\" rel=\"android.bluetooth.BluetoothServerSocket\" class=\"docClass\">android.bluetooth.BluetoothServerSocket</a> will <em>not</em>\n close any <a href=\"#!/api/android.bluetooth.BluetoothSocket\" rel=\"android.bluetooth.BluetoothSocket\" class=\"docClass\">android.bluetooth.BluetoothSocket</a> received from <a href=\"#!/api/android.bluetooth.BluetoothServerSocket-method-accept\" rel=\"android.bluetooth.BluetoothServerSocket-method-accept\" class=\"docClass\">accept</a>().</p>\n</div></div></div><div id='method-getPsm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothServerSocket'>android.bluetooth.BluetoothServerSocket</span><br/><a href='source/BluetoothServerSocket.html#android-bluetooth-BluetoothServerSocket-method-getPsm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothServerSocket-method-getPsm' class='name expandable'>getPsm</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the assigned dynamic protocol/service multiplexer (PSM) value for the listening L2CAP\n Connection-oriented Ch...</div><div class='long'><p>Returns the assigned dynamic protocol/service multiplexer (PSM) value for the listening L2CAP\n Connection-oriented Channel (CoC) server socket. This server socket must be returned by the\n android.bluetooth.BluetoothAdapter.listenUsingL2capChannel() or android.bluetooth.BluetoothAdapter.listenUsingInsecureL2capChannel(). The returned value is undefined if this\n method is called on non-L2CAP server sockets.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>the assigned PSM or LE_PSM value depending on transport</p>\n</div></li></ul></div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.bluetooth.BluetoothServerSocket'>android.bluetooth.BluetoothServerSocket</span><br/><a href='source/BluetoothServerSocket.html#android-bluetooth-BluetoothServerSocket-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.bluetooth.BluetoothServerSocket-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});