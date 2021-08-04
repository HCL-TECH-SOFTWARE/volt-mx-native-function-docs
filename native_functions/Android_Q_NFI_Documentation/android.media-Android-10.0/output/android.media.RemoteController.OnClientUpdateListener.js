Ext.data.JsonP.android_media_RemoteController_OnClientUpdateListener({"tagname":"class","name":"android.media.RemoteController.OnClientUpdateListener","autodetected":{},"files":[{"filename":"OnClientUpdateListener.js","href":"OnClientUpdateListener.html#android-media-RemoteController-OnClientUpdateListener"}],"members":[{"name":"onClientChange","tagname":"method","owner":"android.media.RemoteController.OnClientUpdateListener","id":"method-onClientChange","meta":{}},{"name":"onClientMetadataUpdate","tagname":"method","owner":"android.media.RemoteController.OnClientUpdateListener","id":"method-onClientMetadataUpdate","meta":{}},{"name":"onClientPlaybackStateUpdate","tagname":"method","owner":"android.media.RemoteController.OnClientUpdateListener","id":"method-onClientPlaybackStateUpdate","meta":{}},{"name":"onClientTransportControlUpdate","tagname":"method","owner":"android.media.RemoteController.OnClientUpdateListener","id":"method-onClientTransportControlUpdate","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.media.RemoteController.OnClientUpdateListener","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/OnClientUpdateListener.html#android-media-RemoteController-OnClientUpdateListener' target='_blank'>OnClientUpdateListener.js</a></div></pre><div class='doc-contents'><p>Interface definition for the callbacks to be invoked whenever media events, metadata\n and playback status are available.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-onClientChange' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.RemoteController.OnClientUpdateListener'>android.media.RemoteController.OnClientUpdateListener</span><br/><a href='source/OnClientUpdateListener.html#android-media-RemoteController-OnClientUpdateListener-method-onClientChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.RemoteController.OnClientUpdateListener-method-onClientChange' class='name expandable'>onClientChange</a>( <span class='pre'>clearing</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called whenever all information, previously received through the other\n methods of the listener, is no longer valid a...</div><div class='long'><p>Called whenever all information, previously received through the other\n methods of the listener, is no longer valid and is about to be refreshed.\n This is typically called whenever a new <a href=\"#!/api/android.media.RemoteControlClient\" rel=\"android.media.RemoteControlClient\" class=\"docClass\">android.media.RemoteControlClient</a> has been selected\n by the system to have its media information published.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>clearing</span> : Boolean<div class='sub-desc'><p>true if there is no selected RemoteControlClient and no information\n     is available.</p>\n</div></li></ul></div></div></div><div id='method-onClientMetadataUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.RemoteController.OnClientUpdateListener'>android.media.RemoteController.OnClientUpdateListener</span><br/><a href='source/OnClientUpdateListener.html#android-media-RemoteController-OnClientUpdateListener-method-onClientMetadataUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.RemoteController.OnClientUpdateListener-method-onClientMetadataUpdate' class='name expandable'>onClientMetadataUpdate</a>( <span class='pre'>metadataEditor</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called whenever new metadata is available. ...</div><div class='long'><p>Called whenever new metadata is available.\n See the long),\n  String),\n  Bitmap), and\n  Object) methods for the various keys that\n  can be queried.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>metadataEditor</span> : Object {RemoteController.MetadataEditor}<div class='sub-desc'><p>the container of the new metadata.</p>\n</div></li></ul></div></div></div><div id='method-onClientPlaybackStateUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.RemoteController.OnClientUpdateListener'>android.media.RemoteController.OnClientUpdateListener</span><br/><a href='source/OnClientUpdateListener.html#android-media-RemoteController-OnClientUpdateListener-method-onClientPlaybackStateUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.RemoteController.OnClientUpdateListener-method-onClientPlaybackStateUpdate' class='name expandable'>onClientPlaybackStateUpdate</a>( <span class='pre'>state, stateChangeTimeMs, currentPosMs, speed</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called whenever the playback state has changed, and playback position\n and speed are known. ...</div><div class='long'><p>Called whenever the playback state has changed, and playback position\n and speed are known.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>state</span> : Number<div class='sub-desc'><p>one of the playback states authorized\n     in RemoteControlClient.setPlaybackState(int).</p>\n</div></li><li><span class='pre'>stateChangeTimeMs</span> : Number<div class='sub-desc'><p>the system time at which the state change was reported,\n     expressed in ms. Based on android.os.SystemClock.elapsedRealtime().</p>\n</div></li><li><span class='pre'>currentPosMs</span> : Number<div class='sub-desc'><p>a positive value for the current media playback position expressed\n     in ms, a negative value if the position is temporarily unknown.</p>\n</div></li><li><span class='pre'>speed</span> : Number<div class='sub-desc'><p>a value expressed as a ratio of 1x playback: 1.0f is normal playback,\n    2.0f is 2x, 0.5f is half-speed, -2.0f is rewind at 2x speed. 0.0f means nothing is\n    playing (e.g. when state is RemoteControlClient.PLAYSTATE_ERROR).</p>\n</div></li></ul></div></div></div><div id='method-onClientTransportControlUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.RemoteController.OnClientUpdateListener'>android.media.RemoteController.OnClientUpdateListener</span><br/><a href='source/OnClientUpdateListener.html#android-media-RemoteController-OnClientUpdateListener-method-onClientTransportControlUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.RemoteController.OnClientUpdateListener-method-onClientTransportControlUpdate' class='name expandable'>onClientTransportControlUpdate</a>( <span class='pre'>transportControlFlags</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called whenever the transport control flags have changed. ...</div><div class='long'><p>Called whenever the transport control flags have changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>transportControlFlags</span> : Number<div class='sub-desc'><p>one of the flags authorized\n     in RemoteControlClient.setTransportControlFlags(int).</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});