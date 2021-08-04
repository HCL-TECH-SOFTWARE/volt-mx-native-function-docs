Ext.data.JsonP.android_hardware_usb_UsbAccessory({"tagname":"class","name":"android.hardware.usb.UsbAccessory","autodetected":{},"files":[{"filename":"UsbAccessory.js","href":"UsbAccessory.html#android-hardware-usb-UsbAccessory"}],"extends":"java.lang.Object","members":[{"name":"CREATOR","tagname":"property","owner":"android.hardware.usb.UsbAccessory","id":"property-CREATOR","meta":{}},{"name":"describeContents","tagname":"method","owner":"android.hardware.usb.UsbAccessory","id":"method-describeContents","meta":{}},{"name":"equals","tagname":"method","owner":"android.hardware.usb.UsbAccessory","id":"method-equals","meta":{}},{"name":"getDescription","tagname":"method","owner":"android.hardware.usb.UsbAccessory","id":"method-getDescription","meta":{}},{"name":"getManufacturer","tagname":"method","owner":"android.hardware.usb.UsbAccessory","id":"method-getManufacturer","meta":{}},{"name":"getModel","tagname":"method","owner":"android.hardware.usb.UsbAccessory","id":"method-getModel","meta":{}},{"name":"getSerial","tagname":"method","owner":"android.hardware.usb.UsbAccessory","id":"method-getSerial","meta":{}},{"name":"getUri","tagname":"method","owner":"android.hardware.usb.UsbAccessory","id":"method-getUri","meta":{}},{"name":"getVersion","tagname":"method","owner":"android.hardware.usb.UsbAccessory","id":"method-getVersion","meta":{}},{"name":"hashCode","tagname":"method","owner":"android.hardware.usb.UsbAccessory","id":"method-hashCode","meta":{}},{"name":"toString","tagname":"method","owner":"android.hardware.usb.UsbAccessory","id":"method-toString","meta":{}},{"name":"writeToParcel","tagname":"method","owner":"android.hardware.usb.UsbAccessory","id":"method-writeToParcel","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.hardware.usb.UsbAccessory","short_doc":"implements android.os.Parcelable\n\nA class representing a USB accessory, which is an external hardware component\n that...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.hardware.usb.UsbAccessory</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/UsbAccessory.html#android-hardware-usb-UsbAccessory' target='_blank'>UsbAccessory.js</a></div></pre><div class='doc-contents'><p>implements android.os.Parcelable</p>\n\n<p>A class representing a USB accessory, which is an external hardware component\n that communicates with an android application over USB.\n The accessory is the USB host and android the device side of the USB connection.</p>\n\n<p> <p>When the accessory connects, it reports its manufacturer and model names,\n the version of the accessory, and a user visible description of the accessory to the device.\n The manufacturer, model and version strings are used by the USB Manager to choose\n an appropriate application for the accessory.\n The accessory may optionally provide a unique serial number\n and a URL to for the accessory's website to the device as well.</p>\n\n<p> <p>An instance of this class is sent to the application via the\n <a href=\"#!/api/android.hardware.usb.UsbManager-property-ACTION_USB_ACCESSORY_ATTACHED\" rel=\"android.hardware.usb.UsbManager-property-ACTION_USB_ACCESSORY_ATTACHED\" class=\"docClass\">android.hardware.usb.UsbManager.ACTION_USB_ACCESSORY_ATTACHED</a> Intent.\n The application can then call <a href=\"#!/api/android.hardware.usb.UsbManager-method-openAccessory\" rel=\"android.hardware.usb.UsbManager-method-openAccessory\" class=\"docClass\">android.hardware.usb.UsbManager.openAccessory</a> to open a file descriptor\n for reading and writing data to and from the accessory.</p>\n\n<p> <div class=\"special reference\">\n <h3>Developer Guides</h3>\n <p>For more information about communicating with USB hardware, read the\n <a href=\"{@docRoot}guide/topics/usb/index.html\">USB</a> developer guide.</p>\n </div></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-CREATOR' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.usb.UsbAccessory'>android.hardware.usb.UsbAccessory</span><br/><a href='source/UsbAccessory.html#android-hardware-usb-UsbAccessory-property-CREATOR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.usb.UsbAccessory-property-CREATOR' class='name expandable'>CREATOR</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-describeContents' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.usb.UsbAccessory'>android.hardware.usb.UsbAccessory</span><br/><a href='source/UsbAccessory.html#android-hardware-usb-UsbAccessory-method-describeContents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.usb.UsbAccessory-method-describeContents' class='name expandable'>describeContents</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-equals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.usb.UsbAccessory'>android.hardware.usb.UsbAccessory</span><br/><a href='source/UsbAccessory.html#android-hardware-usb-UsbAccessory-method-equals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.usb.UsbAccessory-method-equals' class='name expandable'>equals</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getDescription' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.usb.UsbAccessory'>android.hardware.usb.UsbAccessory</span><br/><a href='source/UsbAccessory.html#android-hardware-usb-UsbAccessory-method-getDescription' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.usb.UsbAccessory-method-getDescription' class='name expandable'>getDescription</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a user visible description of the accessory. ...</div><div class='long'><p>Returns a user visible description of the accessory.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>the accessory description, or {@code null} if not set</p>\n</div></li></ul></div></div></div><div id='method-getManufacturer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.usb.UsbAccessory'>android.hardware.usb.UsbAccessory</span><br/><a href='source/UsbAccessory.html#android-hardware-usb-UsbAccessory-method-getManufacturer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.usb.UsbAccessory-method-getManufacturer' class='name expandable'>getManufacturer</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the manufacturer name of the accessory. ...</div><div class='long'><p>Returns the manufacturer name of the accessory.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>the accessory manufacturer</p>\n</div></li></ul></div></div></div><div id='method-getModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.usb.UsbAccessory'>android.hardware.usb.UsbAccessory</span><br/><a href='source/UsbAccessory.html#android-hardware-usb-UsbAccessory-method-getModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.usb.UsbAccessory-method-getModel' class='name expandable'>getModel</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the model name of the accessory. ...</div><div class='long'><p>Returns the model name of the accessory.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>the accessory model</p>\n</div></li></ul></div></div></div><div id='method-getSerial' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.usb.UsbAccessory'>android.hardware.usb.UsbAccessory</span><br/><a href='source/UsbAccessory.html#android-hardware-usb-UsbAccessory-method-getSerial' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.usb.UsbAccessory-method-getSerial' class='name expandable'>getSerial</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the unique serial number for the accessory. ...</div><div class='long'><p>Returns the unique serial number for the accessory.\n This is an optional serial number that can be used to differentiate\n between individual accessories of the same model and manufacturer</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>the unique serial number, or {@code null} if not set</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>SecurityException if the app targets SDK >= {@value android.os.Build.VERSION_CODES#Q}\n                           and the app does not have permission to read from the accessory.</p>\n</div></li></ul></div></div></div><div id='method-getUri' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.usb.UsbAccessory'>android.hardware.usb.UsbAccessory</span><br/><a href='source/UsbAccessory.html#android-hardware-usb-UsbAccessory-method-getUri' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.usb.UsbAccessory-method-getUri' class='name expandable'>getUri</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the URI for the accessory. ...</div><div class='long'><p>Returns the URI for the accessory.\n This is an optional URI that might show information about the accessory\n or provide the option to download an application for the accessory</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>the accessory URI, or {@code null} if not set</p>\n</div></li></ul></div></div></div><div id='method-getVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.usb.UsbAccessory'>android.hardware.usb.UsbAccessory</span><br/><a href='source/UsbAccessory.html#android-hardware-usb-UsbAccessory-method-getVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.usb.UsbAccessory-method-getVersion' class='name expandable'>getVersion</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the version of the accessory. ...</div><div class='long'><p>Returns the version of the accessory.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>the accessory version, or {@code null} if not set</p>\n</div></li></ul></div></div></div><div id='method-hashCode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.usb.UsbAccessory'>android.hardware.usb.UsbAccessory</span><br/><a href='source/UsbAccessory.html#android-hardware-usb-UsbAccessory-method-hashCode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.usb.UsbAccessory-method-hashCode' class='name expandable'>hashCode</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.usb.UsbAccessory'>android.hardware.usb.UsbAccessory</span><br/><a href='source/UsbAccessory.html#android-hardware-usb-UsbAccessory-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.usb.UsbAccessory-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-writeToParcel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.usb.UsbAccessory'>android.hardware.usb.UsbAccessory</span><br/><a href='source/UsbAccessory.html#android-hardware-usb-UsbAccessory-method-writeToParcel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.usb.UsbAccessory-method-writeToParcel' class='name expandable'>writeToParcel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});