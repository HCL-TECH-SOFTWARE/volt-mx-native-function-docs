Ext.data.JsonP.android_net_wifi_p2p_nsd_WifiP2pServiceRequest({"tagname":"class","name":"android.net.wifi.p2p.nsd.WifiP2pServiceRequest","autodetected":{},"files":[{"filename":"WifiP2pServiceRequest.js","href":"WifiP2pServiceRequest.html#android-net-wifi-p2p-nsd-WifiP2pServiceRequest"}],"extends":"java.lang.Object","members":[{"name":"CREATOR","tagname":"property","owner":"android.net.wifi.p2p.nsd.WifiP2pServiceRequest","id":"property-CREATOR","meta":{}},{"name":"describeContents","tagname":"method","owner":"android.net.wifi.p2p.nsd.WifiP2pServiceRequest","id":"method-describeContents","meta":{}},{"name":"equals","tagname":"method","owner":"android.net.wifi.p2p.nsd.WifiP2pServiceRequest","id":"method-equals","meta":{}},{"name":"hashCode","tagname":"method","owner":"android.net.wifi.p2p.nsd.WifiP2pServiceRequest","id":"method-hashCode","meta":{}},{"name":"newInstance","tagname":"method","owner":"android.net.wifi.p2p.nsd.WifiP2pServiceRequest","id":"method-newInstance","meta":{}},{"name":"writeToParcel","tagname":"method","owner":"android.net.wifi.p2p.nsd.WifiP2pServiceRequest","id":"method-writeToParcel","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.net.wifi.p2p.nsd.WifiP2pServiceRequest","short_doc":"implements android.os.Parcelable\n\nA class for creating a service discovery request for use with\n WifiP2pManager.addSe...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":["android.net.wifi.p2p.nsd.WifiP2pDnsSdServiceRequest","android.net.wifi.p2p.nsd.WifiP2pUpnpServiceRequest"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.net.wifi.p2p.nsd.WifiP2pServiceRequest</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/android.net.wifi.p2p.nsd.WifiP2pDnsSdServiceRequest' rel='android.net.wifi.p2p.nsd.WifiP2pDnsSdServiceRequest' class='docClass'>android.net.wifi.p2p.nsd.WifiP2pDnsSdServiceRequest</a></div><div class='dependency'><a href='#!/api/android.net.wifi.p2p.nsd.WifiP2pUpnpServiceRequest' rel='android.net.wifi.p2p.nsd.WifiP2pUpnpServiceRequest' class='docClass'>android.net.wifi.p2p.nsd.WifiP2pUpnpServiceRequest</a></div><h4>Files</h4><div class='dependency'><a href='source/WifiP2pServiceRequest.html#android-net-wifi-p2p-nsd-WifiP2pServiceRequest' target='_blank'>WifiP2pServiceRequest.js</a></div></pre><div class='doc-contents'><p>implements android.os.Parcelable</p>\n\n<p>A class for creating a service discovery request for use with\n WifiP2pManager.addServiceRequest and WifiP2pManager.removeServiceRequest</p>\n\n<p> <p>This class is used to create service discovery request for custom\n vendor specific service discovery protocol <a href=\"#!/api/android.net.wifi.p2p.nsd.WifiP2pServiceInfo-property-SERVICE_TYPE_VENDOR_SPECIFIC\" rel=\"android.net.wifi.p2p.nsd.WifiP2pServiceInfo-property-SERVICE_TYPE_VENDOR_SPECIFIC\" class=\"docClass\">android.net.wifi.p2p.nsd.WifiP2pServiceInfo.SERVICE_TYPE_VENDOR_SPECIFIC</a>\n or to search all service protocols <a href=\"#!/api/android.net.wifi.p2p.nsd.WifiP2pServiceInfo-property-SERVICE_TYPE_ALL\" rel=\"android.net.wifi.p2p.nsd.WifiP2pServiceInfo-property-SERVICE_TYPE_ALL\" class=\"docClass\">android.net.wifi.p2p.nsd.WifiP2pServiceInfo.SERVICE_TYPE_ALL</a>.</p>\n\n<p> <p>For the purpose of creating a UPnP or Bonjour service request, use\n <a href=\"#!/api/android.net.wifi.p2p.nsd.WifiP2pUpnpServiceRequest\" rel=\"android.net.wifi.p2p.nsd.WifiP2pUpnpServiceRequest\" class=\"docClass\">android.net.wifi.p2p.nsd.WifiP2pUpnpServiceRequest</a> or <a href=\"#!/api/android.net.wifi.p2p.nsd.WifiP2pDnsSdServiceRequest\" rel=\"android.net.wifi.p2p.nsd.WifiP2pDnsSdServiceRequest\" class=\"docClass\">android.net.wifi.p2p.nsd.WifiP2pDnsSdServiceRequest</a> respectively.</p>\n\n<p> {@see WifiP2pManager}\n {@see WifiP2pUpnpServiceRequest}\n {@see WifiP2pDnsSdServiceRequest}</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-CREATOR' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.p2p.nsd.WifiP2pServiceRequest'>android.net.wifi.p2p.nsd.WifiP2pServiceRequest</span><br/><a href='source/WifiP2pServiceRequest.html#android-net-wifi-p2p-nsd-WifiP2pServiceRequest-property-CREATOR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.p2p.nsd.WifiP2pServiceRequest-property-CREATOR' class='name expandable'>CREATOR</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Implement the Parcelable interface {@hide} ...</div><div class='long'><p>Implement the Parcelable interface {@hide}</p>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-describeContents' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.p2p.nsd.WifiP2pServiceRequest'>android.net.wifi.p2p.nsd.WifiP2pServiceRequest</span><br/><a href='source/WifiP2pServiceRequest.html#android-net-wifi-p2p-nsd-WifiP2pServiceRequest-method-describeContents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.p2p.nsd.WifiP2pServiceRequest-method-describeContents' class='name expandable'>describeContents</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Implement the Parcelable interface {@hide} ...</div><div class='long'><p>Implement the Parcelable interface {@hide}</p>\n</div></div></div><div id='method-equals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.p2p.nsd.WifiP2pServiceRequest'>android.net.wifi.p2p.nsd.WifiP2pServiceRequest</span><br/><a href='source/WifiP2pServiceRequest.html#android-net-wifi-p2p-nsd-WifiP2pServiceRequest-method-equals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.p2p.nsd.WifiP2pServiceRequest-method-equals' class='name expandable'>equals</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-hashCode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.p2p.nsd.WifiP2pServiceRequest'>android.net.wifi.p2p.nsd.WifiP2pServiceRequest</span><br/><a href='source/WifiP2pServiceRequest.html#android-net-wifi-p2p-nsd-WifiP2pServiceRequest-method-hashCode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.p2p.nsd.WifiP2pServiceRequest-method-hashCode' class='name expandable'>hashCode</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-newInstance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.p2p.nsd.WifiP2pServiceRequest'>android.net.wifi.p2p.nsd.WifiP2pServiceRequest</span><br/><a href='source/WifiP2pServiceRequest.html#android-net-wifi-p2p-nsd-WifiP2pServiceRequest-method-newInstance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.p2p.nsd.WifiP2pServiceRequest-method-newInstance' class='name expandable'>newInstance</a>( <span class='pre'>protocolType</span> ) : Object {android.net.wifi.p2p.nsd.WifiP2pServiceRequest}<span class=\"signature\"></span></div><div class='description'><div class='short'>Create a service discovery request. ...</div><div class='long'><p>Create a service discovery request.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>protocolType</span> : Number<div class='sub-desc'><p>can be WifiP2pServiceInfo.SERVICE_TYPE_ALL\n or WifiP2pServiceInfo.SERVICE_TYPE_VENDOR_SPECIFIC.\n In order to create a UPnP or Bonjour service request, use\n WifiP2pUpnpServiceRequest or WifiP2pDnsSdServiceRequest\n respectively</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.net.wifi.p2p.nsd.WifiP2pServiceRequest}</span><div class='sub-desc'><p>service discovery request.</p>\n</div></li></ul></div></div></div><div id='method-writeToParcel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.p2p.nsd.WifiP2pServiceRequest'>android.net.wifi.p2p.nsd.WifiP2pServiceRequest</span><br/><a href='source/WifiP2pServiceRequest.html#android-net-wifi-p2p-nsd-WifiP2pServiceRequest-method-writeToParcel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.p2p.nsd.WifiP2pServiceRequest-method-writeToParcel' class='name expandable'>writeToParcel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Implement the Parcelable interface {@hide} ...</div><div class='long'><p>Implement the Parcelable interface {@hide}</p>\n</div></div></div></div></div></div></div>","meta":{}});