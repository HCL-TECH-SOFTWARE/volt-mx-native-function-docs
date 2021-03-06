Ext.data.JsonP.android_telephony_ims_ImsSsInfo({"tagname":"class","name":"android.telephony.ims.ImsSsInfo","autodetected":{},"files":[{"filename":"ImsSsInfo.js","href":"ImsSsInfo.html#android-telephony-ims-ImsSsInfo"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"CLIR_OUTGOING_DEFAULT","tagname":"property","owner":"android.telephony.ims.ImsSsInfo","id":"property-CLIR_OUTGOING_DEFAULT","meta":{}},{"name":"CLIR_OUTGOING_INVOCATION","tagname":"property","owner":"android.telephony.ims.ImsSsInfo","id":"property-CLIR_OUTGOING_INVOCATION","meta":{}},{"name":"CLIR_OUTGOING_SUPPRESSION","tagname":"property","owner":"android.telephony.ims.ImsSsInfo","id":"property-CLIR_OUTGOING_SUPPRESSION","meta":{}},{"name":"CLIR_STATUS_NOT_PROVISIONED","tagname":"property","owner":"android.telephony.ims.ImsSsInfo","id":"property-CLIR_STATUS_NOT_PROVISIONED","meta":{}},{"name":"CLIR_STATUS_PROVISIONED_PERMANENT","tagname":"property","owner":"android.telephony.ims.ImsSsInfo","id":"property-CLIR_STATUS_PROVISIONED_PERMANENT","meta":{}},{"name":"CLIR_STATUS_TEMPORARILY_ALLOWED","tagname":"property","owner":"android.telephony.ims.ImsSsInfo","id":"property-CLIR_STATUS_TEMPORARILY_ALLOWED","meta":{}},{"name":"CLIR_STATUS_TEMPORARILY_RESTRICTED","tagname":"property","owner":"android.telephony.ims.ImsSsInfo","id":"property-CLIR_STATUS_TEMPORARILY_RESTRICTED","meta":{}},{"name":"CLIR_STATUS_UNKNOWN","tagname":"property","owner":"android.telephony.ims.ImsSsInfo","id":"property-CLIR_STATUS_UNKNOWN","meta":{}},{"name":"CREATOR","tagname":"property","owner":"android.telephony.ims.ImsSsInfo","id":"property-CREATOR","meta":{}},{"name":"DISABLED","tagname":"property","owner":"android.telephony.ims.ImsSsInfo","id":"property-DISABLED","meta":{}},{"name":"ENABLED","tagname":"property","owner":"android.telephony.ims.ImsSsInfo","id":"property-ENABLED","meta":{}},{"name":"NOT_REGISTERED","tagname":"property","owner":"android.telephony.ims.ImsSsInfo","id":"property-NOT_REGISTERED","meta":{}},{"name":"SERVICE_NOT_PROVISIONED","tagname":"property","owner":"android.telephony.ims.ImsSsInfo","id":"property-SERVICE_NOT_PROVISIONED","meta":{}},{"name":"SERVICE_PROVISIONED","tagname":"property","owner":"android.telephony.ims.ImsSsInfo","id":"property-SERVICE_PROVISIONED","meta":{}},{"name":"SERVICE_PROVISIONING_UNKNOWN","tagname":"property","owner":"android.telephony.ims.ImsSsInfo","id":"property-SERVICE_PROVISIONING_UNKNOWN","meta":{}},{"name":"describeContents","tagname":"method","owner":"android.telephony.ims.ImsSsInfo","id":"method-describeContents","meta":{}},{"name":"getClirInterrogationStatus","tagname":"method","owner":"android.telephony.ims.ImsSsInfo","id":"method-getClirInterrogationStatus","meta":{}},{"name":"getClirOutgoingState","tagname":"method","owner":"android.telephony.ims.ImsSsInfo","id":"method-getClirOutgoingState","meta":{}},{"name":"getIcbNum","tagname":"method","owner":"android.telephony.ims.ImsSsInfo","id":"method-getIcbNum","meta":{"deprecated":{"text":"<p>Use getIncomingCommunicationBarringNumber() instead.</p>\n"}}},{"name":"getIncomingCommunicationBarringNumber","tagname":"method","owner":"android.telephony.ims.ImsSsInfo","id":"method-getIncomingCommunicationBarringNumber","meta":{}},{"name":"getProvisionStatus","tagname":"method","owner":"android.telephony.ims.ImsSsInfo","id":"method-getProvisionStatus","meta":{}},{"name":"getStatus","tagname":"method","owner":"android.telephony.ims.ImsSsInfo","id":"method-getStatus","meta":{}},{"name":"toString","tagname":"method","owner":"android.telephony.ims.ImsSsInfo","id":"method-toString","meta":{}},{"name":"writeToParcel","tagname":"method","owner":"android.telephony.ims.ImsSsInfo","id":"method-writeToParcel","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.telephony.ims.ImsSsInfo","short_doc":"implements android.os.Parcelable\n\nProvides the result to the update operation for the supplementary service configura...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.telephony.ims.ImsSsInfo</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo' target='_blank'>ImsSsInfo.js</a></div></pre><div class='doc-contents'><p>implements android.os.Parcelable</p>\n\n<p>Provides the result to the update operation for the supplementary service configuration.</p>\n\n<p> Also supports IMS specific Incoming Communication Barring (ICB) as well as Anonymous\n Communication Rejection (ACR), as per 3GPP 24.611.</p>\n\n<p> @see Builder</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-CLIR_OUTGOING_DEFAULT' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-property-CLIR_OUTGOING_DEFAULT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-property-CLIR_OUTGOING_DEFAULT' class='name expandable'>CLIR_OUTGOING_DEFAULT</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Calling line identification restriction (CLIR) is set to the default according to the\nsubscription of the CLIR service. ...</div><div class='long'><p>Calling line identification restriction (CLIR) is set to the default according to the\nsubscription of the CLIR service.</p>\n\n<p>See TS 27.007, section 7.7 for more information.</p>\n<p>Defaults to: <code>&quot;0&quot;</code></p></div></div></div><div id='property-CLIR_OUTGOING_INVOCATION' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-property-CLIR_OUTGOING_INVOCATION' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-property-CLIR_OUTGOING_INVOCATION' class='name expandable'>CLIR_OUTGOING_INVOCATION</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Activate Calling line identification restriction for outgoing calls. ...</div><div class='long'><p>Activate Calling line identification restriction for outgoing calls.</p>\n\n<p>See TS 27.007, section 7.7 for more information.</p>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-CLIR_OUTGOING_SUPPRESSION' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-property-CLIR_OUTGOING_SUPPRESSION' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-property-CLIR_OUTGOING_SUPPRESSION' class='name expandable'>CLIR_OUTGOING_SUPPRESSION</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Deactivate Calling line identification restriction for outgoing calls. ...</div><div class='long'><p>Deactivate Calling line identification restriction for outgoing calls.</p>\n\n<p>See TS 27.007, section 7.7 for more information.</p>\n<p>Defaults to: <code>&quot;2&quot;</code></p></div></div></div><div id='property-CLIR_STATUS_NOT_PROVISIONED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-property-CLIR_STATUS_NOT_PROVISIONED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-property-CLIR_STATUS_NOT_PROVISIONED' class='name expandable'>CLIR_STATUS_NOT_PROVISIONED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Calling line identification restriction is currently not provisioned. ...</div><div class='long'><p>Calling line identification restriction is currently not provisioned.</p>\n\n<p>See TS 27.007, section 7.7 for more information.</p>\n<p>Defaults to: <code>&quot;0&quot;</code></p></div></div></div><div id='property-CLIR_STATUS_PROVISIONED_PERMANENT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-property-CLIR_STATUS_PROVISIONED_PERMANENT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-property-CLIR_STATUS_PROVISIONED_PERMANENT' class='name expandable'>CLIR_STATUS_PROVISIONED_PERMANENT</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Calling line identification restriction is currently provisioned in permanent mode. ...</div><div class='long'><p>Calling line identification restriction is currently provisioned in permanent mode.</p>\n\n<p>See TS 27.007, section 7.7 for more information.</p>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-CLIR_STATUS_TEMPORARILY_ALLOWED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-property-CLIR_STATUS_TEMPORARILY_ALLOWED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-property-CLIR_STATUS_TEMPORARILY_ALLOWED' class='name expandable'>CLIR_STATUS_TEMPORARILY_ALLOWED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Calling line identification restriction temporary mode, temporarily allowed. ...</div><div class='long'><p>Calling line identification restriction temporary mode, temporarily allowed.</p>\n\n<p>See TS 27.007, section 7.7 for more information.</p>\n<p>Defaults to: <code>&quot;4&quot;</code></p></div></div></div><div id='property-CLIR_STATUS_TEMPORARILY_RESTRICTED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-property-CLIR_STATUS_TEMPORARILY_RESTRICTED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-property-CLIR_STATUS_TEMPORARILY_RESTRICTED' class='name expandable'>CLIR_STATUS_TEMPORARILY_RESTRICTED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Calling line identification restriction temporary mode, temporarily restricted. ...</div><div class='long'><p>Calling line identification restriction temporary mode, temporarily restricted.</p>\n\n<p>See TS 27.007, section 7.7 for more information.</p>\n<p>Defaults to: <code>&quot;3&quot;</code></p></div></div></div><div id='property-CLIR_STATUS_UNKNOWN' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-property-CLIR_STATUS_UNKNOWN' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-property-CLIR_STATUS_UNKNOWN' class='name expandable'>CLIR_STATUS_UNKNOWN</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Calling line identification restriction is currently unknown, e.g. ...</div><div class='long'><p>Calling line identification restriction is currently unknown, e.g. no network, etc.</p>\n\n<p>See TS 27.007, section 7.7 for more information.</p>\n<p>Defaults to: <code>&quot;2&quot;</code></p></div></div></div><div id='property-CREATOR' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-property-CREATOR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-property-CREATOR' class='name expandable'>CREATOR</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div><div id='property-DISABLED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-property-DISABLED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-property-DISABLED' class='name expandable'>DISABLED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;0&quot;</code></p></div></div></div><div id='property-ENABLED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-property-ENABLED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-property-ENABLED' class='name expandable'>ENABLED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-NOT_REGISTERED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-property-NOT_REGISTERED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-property-NOT_REGISTERED' class='name expandable'>NOT_REGISTERED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>For the status of service registration or activation/deactivation. ...</div><div class='long'><p>For the status of service registration or activation/deactivation.</p>\n<p>Defaults to: <code>&quot;-1&quot;</code></p></div></div></div><div id='property-SERVICE_NOT_PROVISIONED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-property-SERVICE_NOT_PROVISIONED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-property-SERVICE_NOT_PROVISIONED' class='name expandable'>SERVICE_NOT_PROVISIONED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Service is not provisioned. ...</div><div class='long'><p>Service is not provisioned.</p>\n<p>Defaults to: <code>&quot;0&quot;</code></p></div></div></div><div id='property-SERVICE_PROVISIONED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-property-SERVICE_PROVISIONED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-property-SERVICE_PROVISIONED' class='name expandable'>SERVICE_PROVISIONED</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Service is provisioned. ...</div><div class='long'><p>Service is provisioned.</p>\n<p>Defaults to: <code>&quot;1&quot;</code></p></div></div></div><div id='property-SERVICE_PROVISIONING_UNKNOWN' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-property-SERVICE_PROVISIONING_UNKNOWN' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-property-SERVICE_PROVISIONING_UNKNOWN' class='name expandable'>SERVICE_PROVISIONING_UNKNOWN</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Unknown provision status for the service. ...</div><div class='long'><p>Unknown provision status for the service.</p>\n<p>Defaults to: <code>&quot;-1&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-describeContents' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-method-describeContents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-method-describeContents' class='name expandable'>describeContents</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getClirInterrogationStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-method-getClirInterrogationStatus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-method-getClirInterrogationStatus' class='name expandable'>getClirInterrogationStatus</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>the calling line identification restriction provisioning status upon interrogation of\n the service for this subscription. Will be <a href=\"#!/api/android.telephony.ims.ImsSsInfo-property-CLIR_STATUS_UNKNOWN\" rel=\"android.telephony.ims.ImsSsInfo-property-CLIR_STATUS_UNKNOWN\" class=\"docClass\">CLIR_STATUS_UNKNOWN</a> if not applicable to\n this SS info.</p>\n</div></li></ul></div></div></div><div id='method-getClirOutgoingState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-method-getClirOutgoingState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-method-getClirOutgoingState' class='name expandable'>getClirOutgoingState</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>the Calling Line Identification Restriction State for outgoing calls with respect to\n this subscription. Will be <a href=\"#!/api/android.telephony.ims.ImsSsInfo-property-CLIR_OUTGOING_DEFAULT\" rel=\"android.telephony.ims.ImsSsInfo-property-CLIR_OUTGOING_DEFAULT\" class=\"docClass\">CLIR_OUTGOING_DEFAULT</a> if not applicable to this SS info.</p>\n</div></li></ul></div></div></div><div id='method-getIcbNum' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-method-getIcbNum' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-method-getIcbNum' class='name expandable'>getIcbNum</a>( <span class='pre'></span> )<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p>Use getIncomingCommunicationBarringNumber() instead.</p>\n\n        </div>\n</div></div></div><div id='method-getIncomingCommunicationBarringNumber' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-method-getIncomingCommunicationBarringNumber' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-method-getIncomingCommunicationBarringNumber' class='name expandable'>getIncomingCommunicationBarringNumber</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The Incoming Communication Barring (ICB) number.</p>\n</div></li></ul></div></div></div><div id='method-getProvisionStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-method-getProvisionStatus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-method-getProvisionStatus' class='name expandable'>getProvisionStatus</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>Supplementary Service Provision status.</p>\n</div></li></ul></div></div></div><div id='method-getStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-method-getStatus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-method-getStatus' class='name expandable'>getStatus</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>Supplementary Service Configuration status.</p>\n</div></li></ul></div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-writeToParcel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.telephony.ims.ImsSsInfo'>android.telephony.ims.ImsSsInfo</span><br/><a href='source/ImsSsInfo.html#android-telephony-ims-ImsSsInfo-method-writeToParcel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.telephony.ims.ImsSsInfo-method-writeToParcel' class='name expandable'>writeToParcel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});