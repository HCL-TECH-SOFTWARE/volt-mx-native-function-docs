Ext.data.JsonP.android_app_admin_FreezePeriod({"tagname":"class","name":"android.app.admin.FreezePeriod","autodetected":{},"files":[{"filename":"FreezePeriod.js","href":"FreezePeriod.html#android-app-admin-FreezePeriod"}],"extends":"java.lang.Object","members":[{"name":"getEnd","tagname":"method","owner":"android.app.admin.FreezePeriod","id":"method-getEnd","meta":{}},{"name":"getStart","tagname":"method","owner":"android.app.admin.FreezePeriod","id":"method-getStart","meta":{}},{"name":"toString","tagname":"method","owner":"android.app.admin.FreezePeriod","id":"method-toString","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.app.admin.FreezePeriod","short_doc":"A class that represents one freeze period which repeats annually. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.app.admin.FreezePeriod</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/FreezePeriod.html#android-app-admin-FreezePeriod' target='_blank'>FreezePeriod.js</a></div></pre><div class='doc-contents'><p>A class that represents one freeze period which repeats <em>annually</em>. A freeze period has\n two java.time.MonthDay values that define the start and end dates of the period, both\n inclusive. If the end date is earlier than the start date, the period is considered wrapped\n around the year-end. As far as freeze period is concerned, leap year is disregarded and February\n 29th should be treated as if it were February 28th: so a freeze starting or ending on February\n 28th is identical to a freeze starting or ending on February 29th. When calulating the length of\n a freeze or the distance bewteen two freee periods, February 29th is also ignored.</p>\n\n<p> @see SystemUpdatePolicy#setFreezePeriods</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getEnd' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.admin.FreezePeriod'>android.app.admin.FreezePeriod</span><br/><a href='source/FreezePeriod.html#android-app-admin-FreezePeriod-method-getEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.admin.FreezePeriod-method-getEnd' class='name expandable'>getEnd</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the end date (inclusive) of this freeze period. ...</div><div class='long'><p>Returns the end date (inclusive) of this freeze period.</p>\n</div></div></div><div id='method-getStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.admin.FreezePeriod'>android.app.admin.FreezePeriod</span><br/><a href='source/FreezePeriod.html#android-app-admin-FreezePeriod-method-getStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.admin.FreezePeriod-method-getStart' class='name expandable'>getStart</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the start date (inclusive) of this freeze period. ...</div><div class='long'><p>Returns the start date (inclusive) of this freeze period.</p>\n</div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.admin.FreezePeriod'>android.app.admin.FreezePeriod</span><br/><a href='source/FreezePeriod.html#android-app-admin-FreezePeriod-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.admin.FreezePeriod-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});