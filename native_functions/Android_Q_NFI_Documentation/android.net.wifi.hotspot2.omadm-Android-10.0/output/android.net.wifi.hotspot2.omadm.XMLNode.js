Ext.data.JsonP.android_net_wifi_hotspot2_omadm_XMLNode({"tagname":"class","name":"android.net.wifi.hotspot2.omadm.XMLNode","autodetected":{},"files":[{"filename":"XMLNode.js","href":"XMLNode.html#android-net-wifi-hotspot2-omadm-XMLNode"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"addChild","tagname":"method","owner":"android.net.wifi.hotspot2.omadm.XMLNode","id":"method-addChild","meta":{}},{"name":"addText","tagname":"method","owner":"android.net.wifi.hotspot2.omadm.XMLNode","id":"method-addText","meta":{}},{"name":"close","tagname":"method","owner":"android.net.wifi.hotspot2.omadm.XMLNode","id":"method-close","meta":{}},{"name":"equals","tagname":"method","owner":"android.net.wifi.hotspot2.omadm.XMLNode","id":"method-equals","meta":{}},{"name":"getChildren","tagname":"method","owner":"android.net.wifi.hotspot2.omadm.XMLNode","id":"method-getChildren","meta":{}},{"name":"getParent","tagname":"method","owner":"android.net.wifi.hotspot2.omadm.XMLNode","id":"method-getParent","meta":{}},{"name":"getTag","tagname":"method","owner":"android.net.wifi.hotspot2.omadm.XMLNode","id":"method-getTag","meta":{}},{"name":"getText","tagname":"method","owner":"android.net.wifi.hotspot2.omadm.XMLNode","id":"method-getText","meta":{}},{"name":"hashCode","tagname":"method","owner":"android.net.wifi.hotspot2.omadm.XMLNode","id":"method-hashCode","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.net.wifi.hotspot2.omadm.XMLNode","short_doc":"A class represent a node in an XML tree. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.net.wifi.hotspot2.omadm.XMLNode</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/XMLNode.html#android-net-wifi-hotspot2-omadm-XMLNode' target='_blank'>XMLNode.js</a></div></pre><div class='doc-contents'><p>A class represent a node in an XML tree. Each node is an XML element.\n Used by <a href=\"#!/api/android.net.wifi.hotspot2.omadm.XMLParser\" rel=\"android.net.wifi.hotspot2.omadm.XMLParser\" class=\"docClass\">android.net.wifi.hotspot2.omadm.XMLParser</a> for parsing/converting each XML element to XMLNode.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addChild' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.hotspot2.omadm.XMLNode'>android.net.wifi.hotspot2.omadm.XMLNode</span><br/><a href='source/XMLNode.html#android-net-wifi-hotspot2-omadm-XMLNode-method-addChild' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.hotspot2.omadm.XMLNode-method-addChild' class='name expandable'>addChild</a>( <span class='pre'>child</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adding a child node to this node. ...</div><div class='long'><p>Adding a child node to this node. Invoked by <a href=\"#!/api/android.net.wifi.hotspot2.omadm.XMLParser-method-startElement\" rel=\"android.net.wifi.hotspot2.omadm.XMLParser-method-startElement\" class=\"docClass\">android.net.wifi.hotspot2.omadm.XMLParser.startElement</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>child</span> : Object {XMLNode}<div class='sub-desc'><p>XMLNode to be added</p>\n</div></li></ul></div></div></div><div id='method-addText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.hotspot2.omadm.XMLNode'>android.net.wifi.hotspot2.omadm.XMLNode</span><br/><a href='source/XMLNode.html#android-net-wifi-hotspot2-omadm-XMLNode-method-addText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.hotspot2.omadm.XMLNode-method-addText' class='name expandable'>addText</a>( <span class='pre'>text</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adding a text to this node. ...</div><div class='long'><p>Adding a text to this node. Invoked by <a href=\"#!/api/android.net.wifi.hotspot2.omadm.XMLParser-method-characters\" rel=\"android.net.wifi.hotspot2.omadm.XMLParser-method-characters\" class=\"docClass\">android.net.wifi.hotspot2.omadm.XMLParser.characters</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>String to be added</p>\n</div></li></ul></div></div></div><div id='method-close' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.hotspot2.omadm.XMLNode'>android.net.wifi.hotspot2.omadm.XMLNode</span><br/><a href='source/XMLNode.html#android-net-wifi-hotspot2-omadm-XMLNode-method-close' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.hotspot2.omadm.XMLNode-method-close' class='name expandable'>close</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Invoked when the end of the XML element is detected. ...</div><div class='long'><p>Invoked when the end of the XML element is detected. Used for further processing\n of the text enclosed within this XML element. Invoked by <a href=\"#!/api/android.net.wifi.hotspot2.omadm.XMLParser-method-endElement\" rel=\"android.net.wifi.hotspot2.omadm.XMLParser-method-endElement\" class=\"docClass\">android.net.wifi.hotspot2.omadm.XMLParser.endElement</a>.</p>\n</div></div></div><div id='method-equals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.hotspot2.omadm.XMLNode'>android.net.wifi.hotspot2.omadm.XMLNode</span><br/><a href='source/XMLNode.html#android-net-wifi-hotspot2-omadm-XMLNode-method-equals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.hotspot2.omadm.XMLNode-method-equals' class='name expandable'>equals</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getChildren' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.hotspot2.omadm.XMLNode'>android.net.wifi.hotspot2.omadm.XMLNode</span><br/><a href='source/XMLNode.html#android-net-wifi-hotspot2-omadm-XMLNode-method-getChildren' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.hotspot2.omadm.XMLNode-method-getChildren' class='name expandable'>getChildren</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getParent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.hotspot2.omadm.XMLNode'>android.net.wifi.hotspot2.omadm.XMLNode</span><br/><a href='source/XMLNode.html#android-net-wifi-hotspot2-omadm-XMLNode-method-getParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.hotspot2.omadm.XMLNode-method-getParent' class='name expandable'>getParent</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getTag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.hotspot2.omadm.XMLNode'>android.net.wifi.hotspot2.omadm.XMLNode</span><br/><a href='source/XMLNode.html#android-net-wifi-hotspot2-omadm-XMLNode-method-getTag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.hotspot2.omadm.XMLNode-method-getTag' class='name expandable'>getTag</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.hotspot2.omadm.XMLNode'>android.net.wifi.hotspot2.omadm.XMLNode</span><br/><a href='source/XMLNode.html#android-net-wifi-hotspot2-omadm-XMLNode-method-getText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.hotspot2.omadm.XMLNode-method-getText' class='name expandable'>getText</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-hashCode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.wifi.hotspot2.omadm.XMLNode'>android.net.wifi.hotspot2.omadm.XMLNode</span><br/><a href='source/XMLNode.html#android-net-wifi-hotspot2-omadm-XMLNode-method-hashCode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.wifi.hotspot2.omadm.XMLNode-method-hashCode' class='name expandable'>hashCode</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});