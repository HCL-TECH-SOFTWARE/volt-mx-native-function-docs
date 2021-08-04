Ext.data.JsonP.android_app_servertransaction_BaseClientRequest({"tagname":"class","name":"android.app.servertransaction.BaseClientRequest","autodetected":{},"files":[{"filename":"BaseClientRequest.js","href":"BaseClientRequest.html#android-app-servertransaction-BaseClientRequest"}],"hide":true,"members":[{"name":"execute","tagname":"method","owner":"android.app.servertransaction.BaseClientRequest","id":"method-execute","meta":{}},{"name":"postExecute","tagname":"method","owner":"android.app.servertransaction.BaseClientRequest","id":"method-postExecute","meta":{}},{"name":"preExecute","tagname":"method","owner":"android.app.servertransaction.BaseClientRequest","id":"method-preExecute","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.app.servertransaction.BaseClientRequest","short_doc":"implements android.app.servertransaction.ObjectPoolItem\n\n Base interface for individual requests from server to client. ...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/BaseClientRequest.html#android-app-servertransaction-BaseClientRequest' target='_blank'>BaseClientRequest.js</a></div></pre><div class='doc-contents'><p>implements <a href=\"#!/api/android.app.servertransaction.ObjectPoolItem\" rel=\"android.app.servertransaction.ObjectPoolItem\" class=\"docClass\">android.app.servertransaction.ObjectPoolItem</a></p>\n\n<p> Base interface for individual requests from server to client.\n Each of them can be prepared before scheduling and, eventually, executed.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-execute' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.servertransaction.BaseClientRequest'>android.app.servertransaction.BaseClientRequest</span><br/><a href='source/BaseClientRequest.html#android-app-servertransaction-BaseClientRequest-method-execute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.servertransaction.BaseClientRequest-method-execute' class='name expandable'>execute</a>( <span class='pre'>client, token, pendingActions</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Execute the request. ...</div><div class='long'><p>Execute the request.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>client</span> : Object {ClientTransactionHandler}<div class='sub-desc'><p>Target client handler.</p>\n</div></li><li><span class='pre'>token</span> : Object {IBinder}<div class='sub-desc'><p>Target activity token.</p>\n</div></li><li><span class='pre'>pendingActions</span> : Object {PendingTransactionActions}<div class='sub-desc'><p>Container that may have data pending to be used.</p>\n</div></li></ul></div></div></div><div id='method-postExecute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.servertransaction.BaseClientRequest'>android.app.servertransaction.BaseClientRequest</span><br/><a href='source/BaseClientRequest.html#android-app-servertransaction-BaseClientRequest-method-postExecute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.servertransaction.BaseClientRequest-method-postExecute' class='name expandable'>postExecute</a>( <span class='pre'>client, token, pendingActions</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Perform all actions that need to happen after execution, e.g. ...</div><div class='long'><p>Perform all actions that need to happen after execution, e.g. report the result to server.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>client</span> : Object {ClientTransactionHandler}<div class='sub-desc'><p>Target client handler.</p>\n</div></li><li><span class='pre'>token</span> : Object {IBinder}<div class='sub-desc'><p>Target activity token.</p>\n</div></li><li><span class='pre'>pendingActions</span> : Object {PendingTransactionActions}<div class='sub-desc'><p>Container that may have data pending to be used.</p>\n</div></li></ul></div></div></div><div id='method-preExecute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.servertransaction.BaseClientRequest'>android.app.servertransaction.BaseClientRequest</span><br/><a href='source/BaseClientRequest.html#android-app-servertransaction-BaseClientRequest-method-preExecute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.servertransaction.BaseClientRequest-method-preExecute' class='name expandable'>preExecute</a>( <span class='pre'>client, token</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Prepare the client request before scheduling. ...</div><div class='long'><p>Prepare the client request before scheduling.\n An example of this might be informing about pending updates for some values.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>client</span> : Object {ClientTransactionHandler}<div class='sub-desc'><p>Target client handler.</p>\n</div></li><li><span class='pre'>token</span> : Object {IBinder}<div class='sub-desc'><p>Target activity token.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});