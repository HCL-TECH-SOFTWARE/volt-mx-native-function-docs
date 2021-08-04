Ext.data.JsonP.android_net_netlink_NetlinkMessage({"tagname":"class","name":"android.net.netlink.NetlinkMessage","autodetected":{},"files":[{"filename":"NetlinkMessage.js","href":"NetlinkMessage.html#android-net-netlink-NetlinkMessage"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"getHeader","tagname":"method","owner":"android.net.netlink.NetlinkMessage","id":"method-getHeader","meta":{}},{"name":"parse","tagname":"method","owner":"android.net.netlink.NetlinkMessage","id":"method-parse","meta":{}},{"name":"toString","tagname":"method","owner":"android.net.netlink.NetlinkMessage","id":"method-toString","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.net.netlink.NetlinkMessage","short_doc":"NetlinkMessage base class for other, more specific netlink message types. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":["android.net.netlink.ConntrackMessage","android.net.netlink.InetDiagMessage","android.net.netlink.NetlinkErrorMessage","android.net.netlink.RtNetlinkNeighborMessage"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.net.netlink.NetlinkMessage</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/android.net.netlink.ConntrackMessage' rel='android.net.netlink.ConntrackMessage' class='docClass'>android.net.netlink.ConntrackMessage</a></div><div class='dependency'><a href='#!/api/android.net.netlink.InetDiagMessage' rel='android.net.netlink.InetDiagMessage' class='docClass'>android.net.netlink.InetDiagMessage</a></div><div class='dependency'><a href='#!/api/android.net.netlink.NetlinkErrorMessage' rel='android.net.netlink.NetlinkErrorMessage' class='docClass'>android.net.netlink.NetlinkErrorMessage</a></div><div class='dependency'><a href='#!/api/android.net.netlink.RtNetlinkNeighborMessage' rel='android.net.netlink.RtNetlinkNeighborMessage' class='docClass'>android.net.netlink.RtNetlinkNeighborMessage</a></div><h4>Files</h4><div class='dependency'><a href='source/NetlinkMessage.html#android-net-netlink-NetlinkMessage' target='_blank'>NetlinkMessage.js</a></div></pre><div class='doc-contents'><p>NetlinkMessage base class for other, more specific netlink message types.</p>\n\n<p> Classes that extend NetlinkMessage should:\n     - implement a public static parse(StructNlMsgHdr, ByteBuffer) method\n     - returning either null (parse errors) or a new object of the subclass\n       type (cast-able to NetlinkMessage)</p>\n\n<p> NetlinkMessage.parse() should be updated to know which nlmsg_type values\n correspond with which message subclasses.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getHeader' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.netlink.NetlinkMessage'>android.net.netlink.NetlinkMessage</span><br/><a href='source/NetlinkMessage.html#android-net-netlink-NetlinkMessage-method-getHeader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.netlink.NetlinkMessage-method-getHeader' class='name expandable'>getHeader</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-parse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.netlink.NetlinkMessage'>android.net.netlink.NetlinkMessage</span><br/><a href='source/NetlinkMessage.html#android-net-netlink-NetlinkMessage-method-parse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.netlink.NetlinkMessage-method-parse' class='name expandable'>parse</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.netlink.NetlinkMessage'>android.net.netlink.NetlinkMessage</span><br/><a href='source/NetlinkMessage.html#android-net-netlink-NetlinkMessage-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.netlink.NetlinkMessage-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});