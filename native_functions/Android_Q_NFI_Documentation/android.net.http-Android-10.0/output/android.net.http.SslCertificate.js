Ext.data.JsonP.android_net_http_SslCertificate({"tagname":"class","name":"android.net.http.SslCertificate","autodetected":{},"files":[{"filename":"SslCertificate.js","href":"SslCertificate.html#android-net-http-SslCertificate"}],"extends":"java.lang.Object","members":[{"name":"getIssuedBy","tagname":"method","owner":"android.net.http.SslCertificate","id":"method-getIssuedBy","meta":{}},{"name":"getIssuedTo","tagname":"method","owner":"android.net.http.SslCertificate","id":"method-getIssuedTo","meta":{}},{"name":"getValidNotAfter","tagname":"method","owner":"android.net.http.SslCertificate","id":"method-getValidNotAfter","meta":{"deprecated":{"text":"<p>Use getValidNotAfterDate()</p>\n"}}},{"name":"getValidNotAfterDate","tagname":"method","owner":"android.net.http.SslCertificate","id":"method-getValidNotAfterDate","meta":{}},{"name":"getValidNotBefore","tagname":"method","owner":"android.net.http.SslCertificate","id":"method-getValidNotBefore","meta":{"deprecated":{"text":"<p>Use getValidNotBeforeDate()</p>\n"}}},{"name":"getValidNotBeforeDate","tagname":"method","owner":"android.net.http.SslCertificate","id":"method-getValidNotBeforeDate","meta":{}},{"name":"getX509Certificate","tagname":"method","owner":"android.net.http.SslCertificate","id":"method-getX509Certificate","meta":{}},{"name":"restoreState","tagname":"method","owner":"android.net.http.SslCertificate","id":"method-restoreState","meta":{}},{"name":"saveState","tagname":"method","owner":"android.net.http.SslCertificate","id":"method-saveState","meta":{}},{"name":"toString","tagname":"method","owner":"android.net.http.SslCertificate","id":"method-toString","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.net.http.SslCertificate","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.net.http.SslCertificate</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/SslCertificate.html#android-net-http-SslCertificate' target='_blank'>SslCertificate.js</a></div></pre><div class='doc-contents'><p>SSL certificate info (certificate details) class</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getIssuedBy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.http.SslCertificate'>android.net.http.SslCertificate</span><br/><a href='source/SslCertificate.html#android-net-http-SslCertificate-method-getIssuedBy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.http.SslCertificate-method-getIssuedBy' class='name expandable'>getIssuedBy</a>( <span class='pre'></span> ) : Object {android.net.http.SslCertificate.DName}<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.net.http.SslCertificate.DName}</span><div class='sub-desc'><p>Issued-by distinguished name or null if none has been set</p>\n</div></li></ul></div></div></div><div id='method-getIssuedTo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.http.SslCertificate'>android.net.http.SslCertificate</span><br/><a href='source/SslCertificate.html#android-net-http-SslCertificate-method-getIssuedTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.http.SslCertificate-method-getIssuedTo' class='name expandable'>getIssuedTo</a>( <span class='pre'></span> ) : Object {android.net.http.SslCertificate.DName}<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.net.http.SslCertificate.DName}</span><div class='sub-desc'><p>Issued-to distinguished name or null if none has been set</p>\n</div></li></ul></div></div></div><div id='method-getValidNotAfter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.http.SslCertificate'>android.net.http.SslCertificate</span><br/><a href='source/SslCertificate.html#android-net-http-SslCertificate-method-getValidNotAfter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.http.SslCertificate-method-getValidNotAfter' class='name expandable'>getValidNotAfter</a>( <span class='pre'></span> ) : String<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p>Use getValidNotAfterDate()</p>\n\n        </div>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Not-after date from the certificate validity period in\n ISO 8601 format or \"\" if none has been set</p>\n</div></li></ul></div></div></div><div id='method-getValidNotAfterDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.http.SslCertificate'>android.net.http.SslCertificate</span><br/><a href='source/SslCertificate.html#android-net-http-SslCertificate-method-getValidNotAfterDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.http.SslCertificate-method-getValidNotAfterDate' class='name expandable'>getValidNotAfterDate</a>( <span class='pre'></span> ) : Object {java.util.Date}<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {java.util.Date}</span><div class='sub-desc'><p>Not-after date from the certificate validity period or\n \"\" if none has been set</p>\n</div></li></ul></div></div></div><div id='method-getValidNotBefore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.http.SslCertificate'>android.net.http.SslCertificate</span><br/><a href='source/SslCertificate.html#android-net-http-SslCertificate-method-getValidNotBefore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.http.SslCertificate-method-getValidNotBefore' class='name expandable'>getValidNotBefore</a>( <span class='pre'></span> ) : String<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p>Use getValidNotBeforeDate()</p>\n\n        </div>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Not-before date from the certificate validity period in\n ISO 8601 format or \"\" if none has been set</p>\n</div></li></ul></div></div></div><div id='method-getValidNotBeforeDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.http.SslCertificate'>android.net.http.SslCertificate</span><br/><a href='source/SslCertificate.html#android-net-http-SslCertificate-method-getValidNotBeforeDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.http.SslCertificate-method-getValidNotBeforeDate' class='name expandable'>getValidNotBeforeDate</a>( <span class='pre'></span> ) : Object {java.util.Date}<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {java.util.Date}</span><div class='sub-desc'><p>Not-before date from the certificate validity period or\n \"\" if none has been set</p>\n</div></li></ul></div></div></div><div id='method-getX509Certificate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.http.SslCertificate'>android.net.http.SslCertificate</span><br/><a href='source/SslCertificate.html#android-net-http-SslCertificate-method-getX509Certificate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.http.SslCertificate-method-getX509Certificate' class='name expandable'>getX509Certificate</a>( <span class='pre'></span> ) : Object {java.security.cert.X509Certificate}<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {java.security.cert.X509Certificate}</span><div class='sub-desc'><p>The {@code X509Certificate} used to create this {@code SslCertificate} or\n {@code null} if no certificate was provided.</p>\n</div></li></ul></div></div></div><div id='method-restoreState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.http.SslCertificate'>android.net.http.SslCertificate</span><br/><a href='source/SslCertificate.html#android-net-http-SslCertificate-method-restoreState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.http.SslCertificate-method-restoreState' class='name expandable'>restoreState</a>( <span class='pre'>bundle</span> ) : Object {android.net.http.SslCertificate}<span class=\"signature\"></span></div><div class='description'><div class='short'>Restores the certificate stored in the bundle ...</div><div class='long'><p>Restores the certificate stored in the bundle</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bundle</span> : Object {Bundle}<div class='sub-desc'><p>The bundle with the certificate state stored in it</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.net.http.SslCertificate}</span><div class='sub-desc'><p>The SSL certificate stored in the bundle or null if fails</p>\n</div></li></ul></div></div></div><div id='method-saveState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.http.SslCertificate'>android.net.http.SslCertificate</span><br/><a href='source/SslCertificate.html#android-net-http-SslCertificate-method-saveState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.http.SslCertificate-method-saveState' class='name expandable'>saveState</a>( <span class='pre'>certificate</span> ) : Object {android.os.Bundle}<span class=\"signature\"></span></div><div class='description'><div class='short'>Saves the certificate state to a bundle ...</div><div class='long'><p>Saves the certificate state to a bundle</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>certificate</span> : Object {SslCertificate}<div class='sub-desc'><p>The SSL certificate to store</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.os.Bundle}</span><div class='sub-desc'><p>A bundle with the certificate stored in it or null if fails</p>\n</div></li></ul></div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.net.http.SslCertificate'>android.net.http.SslCertificate</span><br/><a href='source/SslCertificate.html#android-net-http-SslCertificate-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.net.http.SslCertificate-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>A string representation of this certificate for debugging</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});