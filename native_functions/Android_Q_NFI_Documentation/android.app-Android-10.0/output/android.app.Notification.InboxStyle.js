Ext.data.JsonP.android_app_Notification_InboxStyle({"tagname":"class","name":"android.app.Notification.InboxStyle","autodetected":{},"files":[{"filename":"InboxStyle.js","href":"InboxStyle.html#android-app-Notification-InboxStyle"}],"extends":"android.app.Notification.Style","members":[{"name":"addLine","tagname":"method","owner":"android.app.Notification.InboxStyle","id":"method-addLine","meta":{}},{"name":"build","tagname":"method","owner":"android.app.Notification.Style","id":"method-build","meta":{}},{"name":"setBigContentTitle","tagname":"method","owner":"android.app.Notification.InboxStyle","id":"method-setBigContentTitle","meta":{}},{"name":"setBuilder","tagname":"method","owner":"android.app.Notification.Style","id":"method-setBuilder","meta":{}},{"name":"setSummaryText","tagname":"method","owner":"android.app.Notification.InboxStyle","id":"method-setSummaryText","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.app.Notification.InboxStyle","short_doc":"Helper class for generating large-format notifications that include a list of (up to 5) strings. ...","classIcon":"icon-class","superclasses":["java.lang.Object","android.app.Notification.Style"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><a href='#!/api/android.app.Notification.Style' rel='android.app.Notification.Style' class='docClass'>android.app.Notification.Style</a><div class='subclass '><strong>android.app.Notification.InboxStyle</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/InboxStyle.html#android-app-Notification-InboxStyle' target='_blank'>InboxStyle.js</a></div></pre><div class='doc-contents'><p>Helper class for generating large-format notifications that include a list of (up to 5) strings.</p>\n\n<p> Here's how you'd set the <code>InboxStyle</code> on a notification:\n <pre class=\"prettyprint\">\n Notification notif = new Notification.Builder(mContext)\n     .setContentTitle(&quot;5 New mails from &quot; + sender.toString())\n     .setContentText(subject)\n     .setSmallIcon(R.drawable.new_mail)\n     .setLargeIcon(aBitmap)\n     .setStyle(new Notification.InboxStyle()\n         .addLine(str1)\n         .addLine(str2)\n         .setContentTitle(&quot;&quot;)\n         .setSummaryText(&quot;+3 more&quot;))\n     .build();\n </pre></p>\n\n<p> @see Notification#bigContentView</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addLine' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Notification.InboxStyle'>android.app.Notification.InboxStyle</span><br/><a href='source/InboxStyle.html#android-app-Notification-InboxStyle-method-addLine' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Notification.InboxStyle-method-addLine' class='name expandable'>addLine</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Append a line to the digest section of the Inbox notification. ...</div><div class='long'><p>Append a line to the digest section of the Inbox notification.</p>\n</div></div></div><div id='method-build' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.app.Notification.Style' rel='android.app.Notification.Style' class='defined-in docClass'>android.app.Notification.Style</a><br/><a href='source/Style.html#android-app-Notification-Style-method-build' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Notification.Style-method-build' class='name expandable'>build</a>( <span class='pre'></span> ) : Object {android.app.Notification}<span class=\"signature\"></span></div><div class='description'><div class='short'>Calls android.app.Notification.Builder.build() on the Builder this Style is\n attached to. ...</div><div class='long'><p>Calls android.app.Notification.Builder.build() on the Builder this Style is\n attached to.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.app.Notification}</span><div class='sub-desc'><p>the fully constructed Notification.</p>\n</div></li></ul></div></div></div><div id='method-setBigContentTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Notification.InboxStyle'>android.app.Notification.InboxStyle</span><br/><a href='source/InboxStyle.html#android-app-Notification-InboxStyle-method-setBigContentTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Notification.InboxStyle-method-setBigContentTitle' class='name expandable'>setBigContentTitle</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Overrides ContentTitle in the big form of the template. ...</div><div class='long'><p>Overrides ContentTitle in the big form of the template.\n This defaults to the value passed to setContentTitle().</p>\n</div></div></div><div id='method-setBuilder' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/android.app.Notification.Style' rel='android.app.Notification.Style' class='defined-in docClass'>android.app.Notification.Style</a><br/><a href='source/Style.html#android-app-Notification-Style-method-setBuilder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Notification.Style-method-setBuilder' class='name expandable'>setBuilder</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setSummaryText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.Notification.InboxStyle'>android.app.Notification.InboxStyle</span><br/><a href='source/InboxStyle.html#android-app-Notification-InboxStyle-method-setSummaryText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.Notification.InboxStyle-method-setSummaryText' class='name expandable'>setSummaryText</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the first line of text after the detail section in the big form of the template. ...</div><div class='long'><p>Set the first line of text after the detail section in the big form of the template.</p>\n</div></div></div></div></div></div></div>","meta":{}});