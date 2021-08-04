Ext.data.JsonP.android_content_pm_PackageParserCacheHelper_WriteHelper({"tagname":"class","name":"android.content.pm.PackageParserCacheHelper.WriteHelper","autodetected":{},"files":[{"filename":"WriteHelper.js","href":"WriteHelper.html#android-content-pm-PackageParserCacheHelper-WriteHelper"}],"extends":"android.os.Parcel.ReadWriteHelper","members":[{"name":"finishAndUninstall","tagname":"method","owner":"android.content.pm.PackageParserCacheHelper.WriteHelper","id":"method-finishAndUninstall","meta":{}},{"name":"writeString","tagname":"method","owner":"android.content.pm.PackageParserCacheHelper.WriteHelper","id":"method-writeString","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.content.pm.PackageParserCacheHelper.WriteHelper","classIcon":"icon-class","superclasses":["android.os.Parcel.ReadWriteHelper"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>android.os.Parcel.ReadWriteHelper<div class='subclass '><strong>android.content.pm.PackageParserCacheHelper.WriteHelper</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/WriteHelper.html#android-content-pm-PackageParserCacheHelper-WriteHelper' target='_blank'>WriteHelper.js</a></div></pre><div class='doc-contents'><p>Parcel write helper with a string pool.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-finishAndUninstall' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.PackageParserCacheHelper.WriteHelper'>android.content.pm.PackageParserCacheHelper.WriteHelper</span><br/><a href='source/WriteHelper.html#android-content-pm-PackageParserCacheHelper-WriteHelper-method-finishAndUninstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.PackageParserCacheHelper.WriteHelper-method-finishAndUninstall' class='name expandable'>finishAndUninstall</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Closes a parcel by appending the string pool at the end and updating the pool offset,\n which it assumes is at the fir...</div><div class='long'><p>Closes a parcel by appending the string pool at the end and updating the pool offset,\n which it assumes is at the first byte.  It also uninstalls itself as a read-write helper.</p>\n</div></div></div><div id='method-writeString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.content.pm.PackageParserCacheHelper.WriteHelper'>android.content.pm.PackageParserCacheHelper.WriteHelper</span><br/><a href='source/WriteHelper.html#android-content-pm-PackageParserCacheHelper-WriteHelper-method-writeString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.content.pm.PackageParserCacheHelper.WriteHelper-method-writeString' class='name expandable'>writeString</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Instead of writing a string directly to a parcel, this method adds it to the pool,\n and write the index in the pool t...</div><div class='long'><p>Instead of writing a string directly to a parcel, this method adds it to the pool,\n and write the index in the pool to the parcel.</p>\n</div></div></div></div></div></div></div>","meta":{}});