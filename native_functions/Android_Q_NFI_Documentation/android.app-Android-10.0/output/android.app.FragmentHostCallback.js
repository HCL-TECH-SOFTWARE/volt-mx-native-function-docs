Ext.data.JsonP.android_app_FragmentHostCallback({"tagname":"class","name":"android.app.FragmentHostCallback","autodetected":{},"files":[{"filename":"FragmentHostCallback.js","href":"FragmentHostCallback.html#android-app-FragmentHostCallback"}],"extends":"android.app.FragmentContainer","deprecated":{"text":"<p>Use the <a href=\"{@docRoot}tools/extras/support-library.html\">Support Library</a>\n      android.support.v4.app.FragmentHostCallback</p>\n"},"members":[{"name":"onAttachFragment","tagname":"method","owner":"android.app.FragmentHostCallback","id":"method-onAttachFragment","meta":{}},{"name":"onDump","tagname":"method","owner":"android.app.FragmentHostCallback","id":"method-onDump","meta":{}},{"name":"onFindViewById","tagname":"method","owner":"android.app.FragmentHostCallback","id":"method-onFindViewById","meta":{}},{"name":"onGetHost","tagname":"method","owner":"android.app.FragmentHostCallback","id":"method-onGetHost","meta":{}},{"name":"onGetLayoutInflater","tagname":"method","owner":"android.app.FragmentHostCallback","id":"method-onGetLayoutInflater","meta":{}},{"name":"onGetWindowAnimations","tagname":"method","owner":"android.app.FragmentHostCallback","id":"method-onGetWindowAnimations","meta":{}},{"name":"onHasView","tagname":"method","owner":"android.app.FragmentHostCallback","id":"method-onHasView","meta":{}},{"name":"onHasWindowAnimations","tagname":"method","owner":"android.app.FragmentHostCallback","id":"method-onHasWindowAnimations","meta":{}},{"name":"onInvalidateOptionsMenu","tagname":"method","owner":"android.app.FragmentHostCallback","id":"method-onInvalidateOptionsMenu","meta":{}},{"name":"onRequestPermissionsFromFragment","tagname":"method","owner":"android.app.FragmentHostCallback","id":"method-onRequestPermissionsFromFragment","meta":{}},{"name":"onShouldSaveFragmentState","tagname":"method","owner":"android.app.FragmentHostCallback","id":"method-onShouldSaveFragmentState","meta":{}},{"name":"onStartActivityFromFragment","tagname":"method","owner":"android.app.FragmentHostCallback","id":"method-onStartActivityFromFragment","meta":{}},{"name":"onStartIntentSenderFromFragment","tagname":"method","owner":"android.app.FragmentHostCallback","id":"method-onStartIntentSenderFromFragment","meta":{}},{"name":"onUseFragmentManagerInflaterFactory","tagname":"method","owner":"android.app.FragmentHostCallback","id":"method-onUseFragmentManagerInflaterFactory","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.app.FragmentHostCallback","short_doc":"Integration points with the Fragment host. ...","classIcon":"icon-class","superclasses":["java.lang.Object","android.app.FragmentContainer"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><a href='#!/api/android.app.FragmentContainer' rel='android.app.FragmentContainer' class='docClass'>android.app.FragmentContainer</a><div class='subclass '><strong>android.app.FragmentHostCallback</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/FragmentHostCallback.html#android-app-FragmentHostCallback' target='_blank'>FragmentHostCallback.js</a></div></pre><div class='doc-contents'><p>Integration points with the Fragment host.\n <p>\n Fragments may be hosted by any object; such as an <a href=\"#!/api/android.app.Activity\" rel=\"android.app.Activity\" class=\"docClass\">android.app.Activity</a>. In order to\n host fragments, implement <a href=\"#!/api/android.app.FragmentHostCallback\" rel=\"android.app.FragmentHostCallback\" class=\"docClass\">android.app.FragmentHostCallback</a>, overriding the methods\n applicable to the host.</p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This class has been <strong>deprecated</strong> </p>\n        <p>Use the <a href=\"{@docRoot}tools/extras/support-library.html\">Support Library</a>\n      android.support.v4.app.FragmentHostCallback</p>\n\n        </div>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-onAttachFragment' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.FragmentHostCallback'>android.app.FragmentHostCallback</span><br/><a href='source/FragmentHostCallback.html#android-app-FragmentHostCallback-method-onAttachFragment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.FragmentHostCallback-method-onAttachFragment' class='name expandable'>onAttachFragment</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when a android.app.Fragment is being attached to this host, immediately\n after the call to its android.app.Fra...</div><div class='long'><p>Called when a <a href=\"#!/api/android.app.Fragment\" rel=\"android.app.Fragment\" class=\"docClass\">android.app.Fragment</a> is being attached to this host, immediately\n after the call to its android.app.Fragment.onAttach(Context) method and before\n android.app.Fragment.onCreate(Bundle).</p>\n</div></div></div><div id='method-onDump' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.FragmentHostCallback'>android.app.FragmentHostCallback</span><br/><a href='source/FragmentHostCallback.html#android-app-FragmentHostCallback-method-onDump' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.FragmentHostCallback-method-onDump' class='name expandable'>onDump</a>( <span class='pre'>prefix, fd, writer, args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Print internal state into the given stream. ...</div><div class='long'><p>Print internal state into the given stream.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prefix</span> : String<div class='sub-desc'><p>Desired prefix to prepend at each line of output.</p>\n</div></li><li><span class='pre'>fd</span> : Object {FileDescriptor}<div class='sub-desc'><p>The raw file descriptor that the dump is being sent to.</p>\n</div></li><li><span class='pre'>writer</span> : Object {PrintWriter}<div class='sub-desc'><p>The PrintWriter to which you should dump your state. This will be closed\n                  for you after you return.</p>\n</div></li><li><span class='pre'>args</span> : Object {java.lang.String[]}<div class='sub-desc'><p>additional arguments to the dump request.</p>\n</div></li></ul></div></div></div><div id='method-onFindViewById' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.FragmentHostCallback'>android.app.FragmentHostCallback</span><br/><a href='source/FragmentHostCallback.html#android-app-FragmentHostCallback-method-onFindViewById' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.FragmentHostCallback-method-onFindViewById' class='name expandable'>onFindViewById</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/android.app.FragmentContainer-method-onFindViewById\" rel=\"android.app.FragmentContainer-method-onFindViewById\" class=\"docClass\">android.app.FragmentContainer.onFindViewById</a></p></div></div></div><div id='method-onGetHost' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.FragmentHostCallback'>android.app.FragmentHostCallback</span><br/><a href='source/FragmentHostCallback.html#android-app-FragmentHostCallback-method-onGetHost' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.FragmentHostCallback-method-onGetHost' class='name expandable'>onGetHost</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the object that's currently hosting the fragment. ...</div><div class='long'><p>Return the object that's currently hosting the fragment. If a <a href=\"#!/api/android.app.Fragment\" rel=\"android.app.Fragment\" class=\"docClass\">android.app.Fragment</a>\n is hosted by a <a href=\"#!/api/android.app.Activity\" rel=\"android.app.Activity\" class=\"docClass\">android.app.Activity</a>, the object returned here should be the same\n object returned from android.app.Fragment.getActivity().</p>\n</div></div></div><div id='method-onGetLayoutInflater' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.FragmentHostCallback'>android.app.FragmentHostCallback</span><br/><a href='source/FragmentHostCallback.html#android-app-FragmentHostCallback-method-onGetLayoutInflater' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.FragmentHostCallback-method-onGetLayoutInflater' class='name expandable'>onGetLayoutInflater</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return a LayoutInflater. ...</div><div class='long'><p>Return a LayoutInflater.\n See android.app.Activity.getLayoutInflater().</p>\n</div></div></div><div id='method-onGetWindowAnimations' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.FragmentHostCallback'>android.app.FragmentHostCallback</span><br/><a href='source/FragmentHostCallback.html#android-app-FragmentHostCallback-method-onGetWindowAnimations' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.FragmentHostCallback-method-onGetWindowAnimations' class='name expandable'>onGetWindowAnimations</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the window animations. ...</div><div class='long'><p>Return the window animations.</p>\n</div></div></div><div id='method-onHasView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.FragmentHostCallback'>android.app.FragmentHostCallback</span><br/><a href='source/FragmentHostCallback.html#android-app-FragmentHostCallback-method-onHasView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.FragmentHostCallback-method-onHasView' class='name expandable'>onHasView</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/android.app.FragmentContainer-method-onHasView\" rel=\"android.app.FragmentContainer-method-onHasView\" class=\"docClass\">android.app.FragmentContainer.onHasView</a></p></div></div></div><div id='method-onHasWindowAnimations' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.FragmentHostCallback'>android.app.FragmentHostCallback</span><br/><a href='source/FragmentHostCallback.html#android-app-FragmentHostCallback-method-onHasWindowAnimations' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.FragmentHostCallback-method-onHasWindowAnimations' class='name expandable'>onHasWindowAnimations</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return {@code true} if there are window animations. ...</div><div class='long'><p>Return {@code true} if there are window animations.</p>\n</div></div></div><div id='method-onInvalidateOptionsMenu' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.FragmentHostCallback'>android.app.FragmentHostCallback</span><br/><a href='source/FragmentHostCallback.html#android-app-FragmentHostCallback-method-onInvalidateOptionsMenu' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.FragmentHostCallback-method-onInvalidateOptionsMenu' class='name expandable'>onInvalidateOptionsMenu</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Invalidates the activity's options menu. ...</div><div class='long'><p>Invalidates the activity's options menu.\n See android.app.Activity.invalidateOptionsMenu()</p>\n</div></div></div><div id='method-onRequestPermissionsFromFragment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.FragmentHostCallback'>android.app.FragmentHostCallback</span><br/><a href='source/FragmentHostCallback.html#android-app-FragmentHostCallback-method-onRequestPermissionsFromFragment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.FragmentHostCallback-method-onRequestPermissionsFromFragment' class='name expandable'>onRequestPermissionsFromFragment</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Requests permissions from the given fragment. ...</div><div class='long'><p>Requests permissions from the given fragment.\n See int)</p>\n</div></div></div><div id='method-onShouldSaveFragmentState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.FragmentHostCallback'>android.app.FragmentHostCallback</span><br/><a href='source/FragmentHostCallback.html#android-app-FragmentHostCallback-method-onShouldSaveFragmentState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.FragmentHostCallback-method-onShouldSaveFragmentState' class='name expandable'>onShouldSaveFragmentState</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return {@code true} if the fragment's state needs to be saved. ...</div><div class='long'><p>Return {@code true} if the fragment's state needs to be saved.</p>\n</div></div></div><div id='method-onStartActivityFromFragment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.FragmentHostCallback'>android.app.FragmentHostCallback</span><br/><a href='source/FragmentHostCallback.html#android-app-FragmentHostCallback-method-onStartActivityFromFragment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.FragmentHostCallback-method-onStartActivityFromFragment' class='name expandable'>onStartActivityFromFragment</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Starts a new android.app.Activity from the given fragment. ...</div><div class='long'><p>Starts a new <a href=\"#!/api/android.app.Activity\" rel=\"android.app.Activity\" class=\"docClass\">android.app.Activity</a> from the given fragment.\n See int).</p>\n</div></div></div><div id='method-onStartIntentSenderFromFragment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.FragmentHostCallback'>android.app.FragmentHostCallback</span><br/><a href='source/FragmentHostCallback.html#android-app-FragmentHostCallback-method-onStartIntentSenderFromFragment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.FragmentHostCallback-method-onStartIntentSenderFromFragment' class='name expandable'>onStartIntentSenderFromFragment</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Starts a new IntentSender from the given fragment. ...</div><div class='long'><p>Starts a new IntentSender from the given fragment.\n See Intent, int, int, int, Bundle).</p>\n</div></div></div><div id='method-onUseFragmentManagerInflaterFactory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.FragmentHostCallback'>android.app.FragmentHostCallback</span><br/><a href='source/FragmentHostCallback.html#android-app-FragmentHostCallback-method-onUseFragmentManagerInflaterFactory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.FragmentHostCallback-method-onUseFragmentManagerInflaterFactory' class='name expandable'>onUseFragmentManagerInflaterFactory</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return {@code true} if the FragmentManager's LayoutInflaterFactory should be used. ...</div><div class='long'><p>Return {@code true} if the FragmentManager's LayoutInflaterFactory should be used.</p>\n</div></div></div></div></div></div></div>","meta":{"deprecated":{"text":"<p>Use the <a href=\"{@docRoot}tools/extras/support-library.html\">Support Library</a>\n      android.support.v4.app.FragmentHostCallback</p>\n"}}});