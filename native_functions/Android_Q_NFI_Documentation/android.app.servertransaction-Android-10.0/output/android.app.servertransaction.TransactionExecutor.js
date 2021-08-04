Ext.data.JsonP.android_app_servertransaction_TransactionExecutor({"tagname":"class","name":"android.app.servertransaction.TransactionExecutor","autodetected":{},"files":[{"filename":"TransactionExecutor.js","href":"TransactionExecutor.html#android-app-servertransaction-TransactionExecutor"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"cycleToPath","tagname":"method","owner":"android.app.servertransaction.TransactionExecutor","id":"method-cycleToPath","meta":{}},{"name":"execute","tagname":"method","owner":"android.app.servertransaction.TransactionExecutor","id":"method-execute","meta":{}},{"name":"executeCallbacks","tagname":"method","owner":"android.app.servertransaction.TransactionExecutor","id":"method-executeCallbacks","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.app.servertransaction.TransactionExecutor","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.app.servertransaction.TransactionExecutor</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/TransactionExecutor.html#android-app-servertransaction-TransactionExecutor' target='_blank'>TransactionExecutor.js</a></div></pre><div class='doc-contents'><p>Class that manages transaction execution in the correct order.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-cycleToPath' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.servertransaction.TransactionExecutor'>android.app.servertransaction.TransactionExecutor</span><br/><a href='source/TransactionExecutor.html#android-app-servertransaction-TransactionExecutor-method-cycleToPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.servertransaction.TransactionExecutor-method-cycleToPath' class='name expandable'>cycleToPath</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Transition the client between states. ...</div><div class='long'><p>Transition the client between states.</p>\n</div></div></div><div id='method-execute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.servertransaction.TransactionExecutor'>android.app.servertransaction.TransactionExecutor</span><br/><a href='source/TransactionExecutor.html#android-app-servertransaction-TransactionExecutor-method-execute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.servertransaction.TransactionExecutor-method-execute' class='name expandable'>execute</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Resolve transaction. ...</div><div class='long'><p>Resolve transaction.\n First all callbacks will be executed in the order they appear in the list. If a callback\n requires a certain pre- or post-execution state, the client will be transitioned accordingly.\n Then the client will cycle to the final lifecycle state if provided. Otherwise, it will\n either remain in the initial state, or last state needed by a callback.</p>\n</div></div></div><div id='method-executeCallbacks' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.servertransaction.TransactionExecutor'>android.app.servertransaction.TransactionExecutor</span><br/><a href='source/TransactionExecutor.html#android-app-servertransaction-TransactionExecutor-method-executeCallbacks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.servertransaction.TransactionExecutor-method-executeCallbacks' class='name expandable'>executeCallbacks</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Cycle through all states requested by callbacks and execute them at proper times. ...</div><div class='long'><p>Cycle through all states requested by callbacks and execute them at proper times.</p>\n</div></div></div></div></div></div></div>","meta":{}});