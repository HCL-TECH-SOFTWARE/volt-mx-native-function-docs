Ext.data.JsonP.android_app_usage_TimeSparseArray({"tagname":"class","name":"android.app.usage.TimeSparseArray","autodetected":{},"files":[{"filename":"TimeSparseArray.js","href":"TimeSparseArray.html#android-app-usage-TimeSparseArray"}],"extends":"android.util.LongSparseArray","members":[{"name":"closestIndexOnOrAfter","tagname":"method","owner":"android.app.usage.TimeSparseArray","id":"method-closestIndexOnOrAfter","meta":{}},{"name":"closestIndexOnOrBefore","tagname":"method","owner":"android.app.usage.TimeSparseArray","id":"method-closestIndexOnOrBefore","meta":{}},{"name":"put","tagname":"method","owner":"android.app.usage.TimeSparseArray","id":"method-put","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.app.usage.TimeSparseArray","short_doc":"An array that indexes by a long timestamp, representing milliseconds since the epoch. ...","classIcon":"icon-class","superclasses":["android.util.LongSparseArray"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>android.util.LongSparseArray<div class='subclass '><strong>android.app.usage.TimeSparseArray</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/TimeSparseArray.html#android-app-usage-TimeSparseArray' target='_blank'>TimeSparseArray.js</a></div></pre><div class='doc-contents'><p>An array that indexes by a long timestamp, representing milliseconds since the epoch.</p>\n\n<p> {@hide}</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-closestIndexOnOrAfter' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.usage.TimeSparseArray'>android.app.usage.TimeSparseArray</span><br/><a href='source/TimeSparseArray.html#android-app-usage-TimeSparseArray-method-closestIndexOnOrAfter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.usage.TimeSparseArray-method-closestIndexOnOrAfter' class='name expandable'>closestIndexOnOrAfter</a>( <span class='pre'>time</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Finds the index of the first element whose timestamp is greater or equal to\n the given time. ...</div><div class='long'><p>Finds the index of the first element whose timestamp is greater or equal to\n the given time.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>time</span> : Number<div class='sub-desc'><p>The timestamp for which to search the array.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The index of the matched element, or -1 if no such match exists.</p>\n</div></li></ul></div></div></div><div id='method-closestIndexOnOrBefore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.usage.TimeSparseArray'>android.app.usage.TimeSparseArray</span><br/><a href='source/TimeSparseArray.html#android-app-usage-TimeSparseArray-method-closestIndexOnOrBefore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.usage.TimeSparseArray-method-closestIndexOnOrBefore' class='name expandable'>closestIndexOnOrBefore</a>( <span class='pre'>time</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Finds the index of the first element whose timestamp is less than or equal to\n the given time. ...</div><div class='long'><p>Finds the index of the first element whose timestamp is less than or equal to\n the given time.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>time</span> : Number<div class='sub-desc'><p>The timestamp for which to search the array.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The index of the matched element, or -1 if no such match exists.</p>\n</div></li></ul></div></div></div><div id='method-put' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.usage.TimeSparseArray'>android.app.usage.TimeSparseArray</span><br/><a href='source/TimeSparseArray.html#android-app-usage-TimeSparseArray-method-put' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.usage.TimeSparseArray-method-put' class='name expandable'>put</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>{@inheritDoc}\n\n  As this container is being used only to keep files,\n there should not be any collisions. ...</div><div class='long'><p>{@inheritDoc}</p>\n\n<p> <p> As this container is being used only to keep files,\n there should not be any collisions. Reporting a String) in case that\n happens, as that will lead to one whole file being dropped.</p>\n</div></div></div></div></div></div></div>","meta":{}});