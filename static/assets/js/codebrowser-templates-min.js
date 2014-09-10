this.Handlebars=this.Handlebars||{},this.Handlebars.templates=this.Handlebars.templates||{},this.Handlebars.templates.CoursesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+="\n                <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===o?e.call(a,{hash:{},data:b}):e),f+=p(d)+"/students'>Students</a></li>\n                <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===o?e.call(a,{hash:{},data:b}):e),f+=p(d)+"/students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===o?e.call(a,{hash:{},data:b}):e),f+=p(d)+"'>"+p((d=a&&a.student,d=null==d||d===!1?d:d.name,typeof d===o?d.apply(a):d))+"</a></li>\n            "}function g(a){var b,c="";return c+=" "+p((b=a&&a.student,b=null==b||b===!1?b:b.name,typeof b===o?b.apply(a):b))+" — "}function h(a,b,d){var e,f,g,h="";return h+="\n\n                    <tr>\n\n                        <td class='index'>"+p((f=c.index||a&&a.index,g={hash:{},data:b},f?f.call(a,null==b||b===!1?b:b.index,g):q.call(a,"index",null==b||b===!1?b:b.index,g)))+"</td>\n\n                        ",e=c["if"].call(a,d&&d.studentId,{hash:{},inverse:r.programWithDepth(8,j,b,d),fn:r.programWithDepth(6,i,b,d),data:b}),(e||0===e)&&(h+=e),h+="\n\n                    </tr>\n\n                "}function i(a,b,d){var e,f,g="";return g+="\n\n                            <td class='link'><a href='./#/"+p((e=d&&d.instanceId,typeof e===o?e.apply(a):e))+"/students/"+p((e=d&&d.studentId,typeof e===o?e.apply(a):e))+"/courses/",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===o?f.call(a,{hash:{},data:b}):f),g+=p(e)+"/exercises'>",(f=c.name)?e=f.call(a,{hash:{},data:b}):(f=a&&a.name,e=typeof f===o?f.call(a,{hash:{},data:b}):f),g+=p(e)+"</a></td>\n\n                        "}function j(a,b,d){var e,f,g="";return g+="\n\n                            <td class='link'><a href='./#/"+p((e=d&&d.instanceId,typeof e===o?e.apply(a):e))+"/courses/",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===o?f.call(a,{hash:{},data:b}):f),g+=p(e)+"/exercises'>",(f=c.name)?e=f.call(a,{hash:{},data:b}):(f=a&&a.name,e=typeof f===o?f.call(a,{hash:{},data:b}):f),g+=p(e)+"</a></td>\n\n                        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),d=this.merge(d,a.partials),e=e||{};var k,l,m,n="",o="function",p=this.escapeExpression,q=c.helperMissing,r=this,s=c.blockHelperMissing;return n+="<section>\n\n    <div class='row'>\n\n        <ol class='breadcrumb'>\n\n            <li><a href='./'>Instances</a></li>\n            <li><a href='./#/",(l=c.instanceId)?k=l.call(b,{hash:{},data:e}):(l=b&&b.instanceId,k=typeof l===o?l.call(b,{hash:{},data:e}):l),n+=p(k)+"'>",(l=c.instanceId)?k=l.call(b,{hash:{},data:e}):(l=b&&b.instanceId,k=typeof l===o?l.call(b,{hash:{},data:e}):l),n+=p(k)+"</a></li>\n\n            ",k=c["if"].call(b,b&&b.studentId,{hash:{},inverse:r.noop,fn:r.program(1,f,e),data:e}),(k||0===k)&&(n+=k),n+="\n\n            <li class='active'>Courses</li>\n\n        </ol>\n\n    </div>\n\n    <div class='row header'>\n\n        <h2 class='col-md-9'>\n            ",k=c["if"].call(b,b&&b.studentId,{hash:{},inverse:r.noop,fn:r.program(3,g,e),data:e}),(k||0===k)&&(n+=k),n+=" Courses ("+p((k=b&&b.courses,k=null==k||k===!1?k:k.length,typeof k===o?k.apply(b):k))+")\n        </h2>\n\n        ",k=r.invokePartial(d.search,"search",b,c,d,e),(k||0===k)&&(n+=k),n+="\n\n    </div>\n\n    <div class='row'>\n\n        <table class='table table-hover'>\n\n            <thead>\n                <tr>\n                    <th class='index'>#</th>\n                    <th>Name</th>\n                </tr>\n            </thead>\n\n            <tbody>\n\n                ",m={hash:{},inverse:r.noop,fn:r.programWithDepth(5,h,e,b),data:e},(l=c.courses)?k=l.call(b,m):(l=b&&b.courses,k=typeof l===o?l.call(b,m):l),c.courses||(k=s.call(b,k,{hash:{},inverse:r.noop,fn:r.programWithDepth(5,h,e,b),data:e})),(k||0===k)&&(n+=k),n+="\n\n            </tbody>\n\n        </table>\n\n    </div>\n\n</section>\n"}),this.Handlebars.templates.EditorSettingsContainer=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},"<footer>\n\n    <a href='#editor-settings' data-toggle='modal' data-target='#editor-settings' class='pull-right'><span class='glyphicon glyphicon-wrench icon-gray'></span></a>\n\n    <div id='editor-settings' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='editor-settings-label' aria-hidden='true' data-backdrop='false'>\n\n        <div class='modal-dialog'>\n\n            <div class='modal-content'>\n\n                <div class='modal-header'>\n                    <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>\n                    <h4 class='modal-title' id='editor-settings-label'>Settings</h4>\n                </div>\n\n                <div class='modal-body'>\n\n                    <form class='form-horizontal' role='form'>\n\n                        <div class='form-group'>\n\n                            <div class='col-sm-offset-2 col-sm-10'>\n                                <div class='checkbox'>\n                                    <label>\n                                        <input type='checkbox' data-id='ignore-empty-lines' checked> Ignore empty lines (improves diff results)\n                                    </label>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div class='form-group'>\n\n                            <label for='editor-settings-theme' class='col-sm-2 control-label'>Theme</label>\n\n                            <div class='col-sm-10'>\n\n                                <select id='editor-settings-theme' class='form-control' data-id='theme'>\n                                    <option value='ace/theme/light'>Light</option>\n                                    <option value='ace/theme/dark'>Dark</option>\n                                </select>\n\n                            </div>\n\n                        </div>\n\n                        <div class='form-group'>\n\n                            <label for='editor-settings-font-size' class='col-sm-2 control-label'>Font size</label>\n\n                            <div class='col-sm-10'>\n\n                                <select id='editor-settings-font-size' class='form-control' data-id='font-size'>\n                                    <option value='11'>Small</option>\n                                    <option value='12' selected>Normal</option>\n                                    <option value='13'>Larger</option>\n                                    <option value='14'>Large</option>\n                                    <option value='15'>Extra Large</option>\n                                </select>\n\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </div>\n\n                <div class='modal-footer'>\n                    <button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button>\n                    <button type='button' class='btn btn-primary' data-action='save' data-dismiss='modal'>Save</button>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</footer>\n"}),this.Handlebars.templates.EditorTopContainer=Handlebars.template(function(a,b,c,d,e){function f(){return"\n\n        <section class='split'>\n\n            <div class='previous'><span>Previous</span></div>\n            <div class='current'><span>Current</span></div>\n\n        </section>\n\n    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i,j="",k=c.helperMissing,l=this.escapeExpression,m="function",n=this;return j+="<header>\n\n    <section>\n\n        <h1>"+l((h=c.filename||b&&b.filename,i={hash:{},data:e},h?h.call(b,b&&b.name,i):k.call(b,"filename",b&&b.name,i)))+"</h1>\n\n        <span class='pull-right'>\n\n            + "+l((h=c.duration||b&&b.duration,i={hash:{},data:e},h?h.call(b,(g=b&&b.snapshot,null==g||g===!1?g:g.timestamp),(g=b&&b.previous,g=null==g||g===!1?g:g.snapshot,null==g||g===!1?g:g.timestamp),i):k.call(b,"duration",(g=b&&b.snapshot,null==g||g===!1?g:g.timestamp),(g=b&&b.previous,g=null==g||g===!1?g:g.snapshot,null==g||g===!1?g:g.timestamp),i)))+"\n\n            <a id='editor-inspector' href='#' data-toggle='popover' data-placement='bottom'\n\n               data-original-title='\n\n                    <time>"+l((h=c.date||b&&b.date,i={hash:{},data:e},h?h.call(b,(g=b&&b.previous,g=null==g||g===!1?g:g.snapshot,null==g||g===!1?g:g.timestamp),i):k.call(b,"date",(g=b&&b.previous,g=null==g||g===!1?g:g.snapshot,null==g||g===!1?g:g.timestamp),i)))+" –</time>\n                    <time>"+l((h=c.date||b&&b.date,i={hash:{},data:e},h?h.call(b,(g=b&&b.snapshot,null==g||g===!1?g:g.timestamp),i):k.call(b,"date",(g=b&&b.snapshot,null==g||g===!1?g:g.timestamp),i)))+"</time>\n\n               '\n\n               data-content='\n\n                <dl class=\"dl-horizontal pull-left\">\n\n                  <dt>Change</dt>\n                  <dd>",(h=c.percentageOfChange)?g=h.call(b,{hash:{},data:e}):(h=b&&b.percentageOfChange,g=typeof h===m?h.call(b,{hash:{},data:e}):h),j+=l(g)+" %</dd>\n\n                  <dt>Insert</dt>\n                  <dd>"+l((g=b&&b.difference,g=null==g||g===!1?g:g.insert,typeof g===m?g.apply(b):g))+" "+l((h=c.pluralize||b&&b.pluralize,i={hash:{},data:e},h?h.call(b,(g=b&&b.difference,null==g||g===!1?g:g.insert),"line",i):k.call(b,"pluralize",(g=b&&b.difference,null==g||g===!1?g:g.insert),"line",i)))+"</dd>\n\n                  <dt>Replace</dt>\n                  <dd>"+l((g=b&&b.difference,g=null==g||g===!1?g:g.replace,typeof g===m?g.apply(b):g))+" "+l((h=c.pluralize||b&&b.pluralize,i={hash:{},data:e},h?h.call(b,(g=b&&b.difference,null==g||g===!1?g:g.replace),"line",i):k.call(b,"pluralize",(g=b&&b.difference,null==g||g===!1?g:g.replace),"line",i)))+"</dd>\n\n                  <dt>Delete</dt>\n                  <dd>"+l((g=b&&b.difference,g=null==g||g===!1?g:g["delete"],typeof g===m?g.apply(b):g))+" "+l((h=c.pluralize||b&&b.pluralize,i={hash:{},data:e},h?h.call(b,(g=b&&b.difference,null==g||g===!1?g:g["delete"]),"line",i):k.call(b,"pluralize",(g=b&&b.difference,null==g||g===!1?g:g["delete"]),"line",i)))+"</dd>\n\n                </dl>\n\n            '><span class='glyphicon glyphicon-info-sign icon-gray'></span></a>\n\n        </span>\n\n    </section>\n\n    ",g=c["if"].call(b,b&&b.split,{hash:{},inverse:n.noop,fn:n.program(1,f,e),data:e}),(g||0===g)&&(j+=g),j+="\n\n</header>\n"}),this.Handlebars.templates.Error=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+="<p class='alert ",(g=c["class"])?f=g.call(b,{hash:{},data:e}):(g=b&&b["class"],f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+"'>",(g=c.message)?f=g.call(b,{hash:{},data:e}):(g=b&&b.message,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+"</p>\n"}),this.Handlebars.templates.ExercisesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+="\n                <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===p?e.call(a,{hash:{},data:b}):e),f+=q(d)+"/students'>Students</a></li>\n                <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===p?e.call(a,{hash:{},data:b}):e),f+=q(d)+"/students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===p?e.call(a,{hash:{},data:b}):e),f+=q(d)+"'>"+q((d=a&&a.student,d=null==d||d===!1?d:d.name,typeof d===p?d.apply(a):d))+"</a></li>\n            "}function g(a,b){var d,e,f="";return f+="students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===p?e.call(a,{hash:{},data:b}):e),f+=q(d)+"/"}function h(a){var b,c="";return c+=" "+q((b=a&&a.student,b=null==b||b===!1?b:b.name,typeof b===p?b.apply(a):b))+" — "}function i(a,b,d){var e,f,g,h="";return h+="\n\n                    <tr>\n\n                        <td class='index'>"+q((f=c.index||a&&a.index,g={hash:{},data:b},f?f.call(a,null==b||b===!1?b:b.index,g):r.call(a,"index",null==b||b===!1?b:b.index,g)))+"</td>\n\n                        ",e=c["if"].call(a,d&&d.studentId,{hash:{},inverse:s.programWithDepth(10,k,b,d),fn:s.programWithDepth(8,j,b,d),data:b}),(e||0===e)&&(h+=e),h+="\n\n                    </tr>\n\n                "}function j(a,b,d){var e,f,g="";return g+="\n\n                            <td class='link'><a href='./#/"+q((e=d&&d.instanceId,typeof e===p?e.apply(a):e))+"/students/"+q((e=d&&d.studentId,typeof e===p?e.apply(a):e))+"/courses/"+q((e=d&&d.courseId,typeof e===p?e.apply(a):e))+"/exercises/",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===p?f.call(a,{hash:{},data:b}):f),g+=q(e)+"/snapshots'>",(f=c.name)?e=f.call(a,{hash:{},data:b}):(f=a&&a.name,e=typeof f===p?f.call(a,{hash:{},data:b}):f),g+=q(e)+"</a></td>\n\n                        "}function k(a,b,d){var e,f,g="";return g+="\n\n                            <td class='link'><a href='./#/"+q((e=d&&d.instanceId,typeof e===p?e.apply(a):e))+"/courses/"+q((e=d&&d.courseId,typeof e===p?e.apply(a):e))+"/exercises/",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===p?f.call(a,{hash:{},data:b}):f),g+=q(e)+"/students'>",(f=c.name)?e=f.call(a,{hash:{},data:b}):(f=a&&a.name,e=typeof f===p?f.call(a,{hash:{},data:b}):f),g+=q(e)+"</a></td>\n\n                        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),d=this.merge(d,a.partials),e=e||{};var l,m,n,o="",p="function",q=this.escapeExpression,r=c.helperMissing,s=this,t=c.blockHelperMissing;return o+="<section>\n\n    <div class='row'>\n\n        <ol class='breadcrumb'>\n\n            <li><a href='./'>Instances</a></li>\n            <li><a href='./#/",(m=c.instanceId)?l=m.call(b,{hash:{},data:e}):(m=b&&b.instanceId,l=typeof m===p?m.call(b,{hash:{},data:e}):m),o+=q(l)+"'>",(m=c.instanceId)?l=m.call(b,{hash:{},data:e}):(m=b&&b.instanceId,l=typeof m===p?m.call(b,{hash:{},data:e}):m),o+=q(l)+"</a></li>\n\n            ",l=c["if"].call(b,b&&b.studentId,{hash:{},inverse:s.noop,fn:s.program(1,f,e),data:e}),(l||0===l)&&(o+=l),o+="\n\n            <li><a href='./#/",(m=c.instanceId)?l=m.call(b,{hash:{},data:e}):(m=b&&b.instanceId,l=typeof m===p?m.call(b,{hash:{},data:e}):m),o+=q(l)+"/",l=c["if"].call(b,b&&b.studentId,{hash:{},inverse:s.noop,fn:s.program(3,g,e),data:e}),(l||0===l)&&(o+=l),o+="courses'>Courses</a></li>\n            <li><a href='./#/",(m=c.instanceId)?l=m.call(b,{hash:{},data:e}):(m=b&&b.instanceId,l=typeof m===p?m.call(b,{hash:{},data:e}):m),o+=q(l)+"/",l=c["if"].call(b,b&&b.studentId,{hash:{},inverse:s.noop,fn:s.program(3,g,e),data:e}),(l||0===l)&&(o+=l),o+="courses/",(m=c.courseId)?l=m.call(b,{hash:{},data:e}):(m=b&&b.courseId,l=typeof m===p?m.call(b,{hash:{},data:e}):m),o+=q(l)+"'>"+q((l=b&&b.course,l=null==l||l===!1?l:l.name,typeof l===p?l.apply(b):l))+"</a></li>\n            <li class='active'>Exercises</li>\n\n        </ol>\n\n    </div>\n\n    <div class='row header'>\n\n        <h2 class='col-md-9'>\n            ",l=c["if"].call(b,b&&b.studentId,{hash:{},inverse:s.noop,fn:s.program(5,h,e),data:e}),(l||0===l)&&(o+=l),o+=" "+q((l=b&&b.course,l=null==l||l===!1?l:l.name,typeof l===p?l.apply(b):l))+" — Exercises ("+q((l=b&&b.exercises,l=null==l||l===!1?l:l.length,typeof l===p?l.apply(b):l))+")\n        </h2>\n\n        ",l=s.invokePartial(d.search,"search",b,c,d,e),(l||0===l)&&(o+=l),o+="\n\n    </div>\n\n    <div class='row'>\n\n        <table class='table table-hover'>\n\n            <thead>\n                <tr>\n                    <th class='index'>#</th>\n                    <th>Name</th>\n                </tr>\n            </thead>\n\n            <tbody>\n\n                ",n={hash:{},inverse:s.noop,fn:s.programWithDepth(7,i,e,b),data:e},(m=c.exercises)?l=m.call(b,n):(m=b&&b.exercises,l=typeof m===p?m.call(b,n):m),c.exercises||(l=t.call(b,l,{hash:{},inverse:s.noop,fn:s.programWithDepth(7,i,e,b),data:e})),(l||0===l)&&(o+=l),o+="\n\n            </tbody>\n\n        </table>\n\n    </div>\n\n</section>\n"}),this.Handlebars.templates.InstanceContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<section>\n\n    <div class='row'>\n\n        <ol class='breadcrumb'>\n\n            <li><a href='./'>Instances</a></li>\n            <li class='active'>"+i((f=b&&b.instance,f=null==f||f===!1?f:f.name,typeof f===h?f.apply(b):f))+"</li>\n\n        </ol>\n\n    </div>\n\n    <div class='row header'>\n\n        <h2>\n            Instance — "+i((f=b&&b.instance,f=null==f||f===!1?f:f.name,typeof f===h?f.apply(b):f))+"\n        </h2>\n\n    </div>\n\n    <div class='row'>\n\n        <table class='table table-hover'>\n\n            <thead>\n                <tr>\n                    <th>Navigate to</th>\n                </tr>\n            </thead>\n\n            <tbody>\n\n                <tr>\n                    <td class='link'><a href='./#/"+i((f=b&&b.instance,f=null==f||f===!1?f:f.id,typeof f===h?f.apply(b):f))+"/students'>Students</a></td>\n                </tr>\n\n                <tr>\n                    <td class='link'><a href='./#/"+i((f=b&&b.instance,f=null==f||f===!1?f:f.id,typeof f===h?f.apply(b):f))+"/courses'>Courses</a></td>\n                </tr>\n\n            </tbody>\n\n        </table>\n\n    </div>\n\n</section>\n"}),this.Handlebars.templates.Loading=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},"<div class='spinner'>\n    <div class='double-bounce1'></div>\n    <div class='double-bounce2'></div>\n</div>\n"}),this.Handlebars.templates.NavigationBarContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+="\n\n            <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/courses'>Courses</a></li>\n            <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/courses/",(e=c.courseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.courseId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"'>"+l((d=a&&a.course,d=null==d||d===!1?d:d.name,typeof d===k?d.apply(a):d))+"</a></li>\n            <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/courses/",(e=c.courseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.courseId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/exercises'>Exercises</a></li>\n            <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/courses/",(e=c.courseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.courseId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/exercises/",(e=c.exerciseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.exerciseId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"'>"+l((d=a&&a.exercise,d=null==d||d===!1?d:d.name,typeof d===k?d.apply(a):d))+"</a></li>\n            <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/courses/",(e=c.courseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.courseId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/exercises/",(e=c.exerciseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.exerciseId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/students'>Students</a></li>\n            <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/courses/",(e=c.courseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.courseId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/exercises/",(e=c.exerciseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.exerciseId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"'>"+l((d=a&&a.student,d=null==d||d===!1?d:d.name,typeof d===k?d.apply(a):d))+"</a></li>\n\n        "}function g(a,b){var d,e,f="";return f+="\n\n            <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/students'>Students</a></li>\n            <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"'>"+l((d=a&&a.student,d=null==d||d===!1?d:d.name,typeof d===k?d.apply(a):d))+"</a></li>\n            <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/courses'>Courses</a></li>\n            <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/courses/",(e=c.courseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.courseId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"'>"+l((d=a&&a.course,d=null==d||d===!1?d:d.name,typeof d===k?d.apply(a):d))+"</a></li>\n            <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/courses/",(e=c.courseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.courseId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/exercises'>Exercises</a></li>\n            <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/students/",(e=c.studentId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.studentId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/courses/",(e=c.courseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.courseId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/exercises/",(e=c.exerciseId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.exerciseId,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"'>"+l((d=a&&a.exercise,d=null==d||d===!1?d:d.name,typeof d===k?d.apply(a):d))+"</a></li>\n\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var h,i,j="",k="function",l=this.escapeExpression,m=this;return j+="<section>\n\n    <ol class='breadcrumb'>\n\n        <li><a href='./'>Instances</a></li>\n        <li><a href='./#/",(i=c.instanceId)?h=i.call(b,{hash:{},data:e}):(i=b&&b.instanceId,h=typeof i===k?i.call(b,{hash:{},data:e}):i),j+=l(h)+"'>",(i=c.instanceId)?h=i.call(b,{hash:{},data:e}):(i=b&&b.instanceId,h=typeof i===k?i.call(b,{hash:{},data:e}):i),j+=l(h)+"</a></li>\n\n        ",h=c["if"].call(b,b&&b.courseRoute,{hash:{},inverse:m.program(3,g,e),fn:m.program(1,f,e),data:e}),(h||0===h)&&(j+=h),j+="\n\n        <li class='active'>Snapshots</li>\n\n    </ol>\n\n</section>\n"}),this.Handlebars.templates.RootContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,g="";return g+="\n\n                    <tr>\n\n                        <td class='index'>"+l((e=c.index||a&&a.index,f={hash:{},data:b},e?e.call(a,null==b||b===!1?b:b.index,f):k.call(a,"index",null==b||b===!1?b:b.index,f)))+"</td>\n\n                        <td class='link'><a href='./#/",(e=c.id)?d=e.call(a,{hash:{},data:b}):(e=a&&a.id,d=typeof e===m?e.call(a,{hash:{},data:b}):e),g+=l(d)+"'>",(e=c.id)?d=e.call(a,{hash:{},data:b}):(e=a&&a.id,d=typeof e===m?e.call(a,{hash:{},data:b}):e),g+=l(d)+"</a></td>\n\n                    </tr>\n\n                "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),d=this.merge(d,a.partials),e=e||{};var g,h,i,j="",k=c.helperMissing,l=this.escapeExpression,m="function",n=this,o=c.blockHelperMissing;return j+="<section>\n\n    <div class='row'>\n\n        <ol class='breadcrumb'>\n\n            <li class='active'>Instances</li>\n\n        </ol>\n\n    </div>\n\n    <div class='row header'>\n\n        <h2 class='col-md-9'>\n            Instances ("+l((g=b&&b.instances,g=null==g||g===!1?g:g.length,typeof g===m?g.apply(b):g))+")\n        </h2>\n\n        ",g=n.invokePartial(d.search,"search",b,c,d,e),(g||0===g)&&(j+=g),j+="\n\n    </div>\n\n    <div class='row'>\n\n        <table class='table table-hover'>\n\n            <thead>\n                <tr>\n                    <th class='index'>#</th>\n                    <th>Name</th>\n                </tr>\n            </thead>\n\n            <tbody>\n\n                ",i={hash:{},inverse:n.noop,fn:n.program(1,f,e),data:e},(h=c.instances)?g=h.call(b,i):(h=b&&b.instances,g=typeof h===m?h.call(b,i):h),c.instances||(g=o.call(b,g,{hash:{},inverse:n.noop,fn:n.program(1,f,e),data:e})),(g||0===g)&&(j+=g),j+="\n\n            </tbody>\n\n        </table>\n\n    </div>\n\n</section>\n"}),this.Handlebars.templates.SearchContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+="<div class='col-md-3'>\n\n    <div class='input-group'>\n\n        <input type='text' class='form-control' placeholder='Search' data-id='query-string' value='",(g=c.query)?f=g.call(b,{hash:{},data:e}):(g=b&&b.query,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+"' />\n\n        <span class='input-group-btn'>\n            <button class='btn btn-default' type='button' data-action='search' title='Search'>\n                <span class='glyphicon glyphicon-search'></span>\n            </button>\n        </span>\n\n    </div>\n\n</div>\n"}),this.Handlebars.templates.SnapshotFilesContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b,d){var e,f="";return f+="\n\n            ",e=c["if"].call(a,null==b||b===!1?b:b.key,{hash:{},inverse:p.noop,fn:p.program(2,g,b),data:b}),(e||0===e)&&(f+=e),f+="\n\n            ",e=c.each.call(a,a,{hash:{},inverse:p.noop,fn:p.programWithDepth(4,h,b,d),data:b}),(e||0===e)&&(f+=e),f+="\n\n        "}function g(a,b){var c,d="";return d+="\n\n                <li class='folder'><span class='glyphicon glyphicon-folder-open icon-gray'></span> "+n((c=null==b||b===!1?b:b.key,typeof c===m?c.apply(a):c))+"</li>\n\n            "}function h(a,b,d){var e,f="";return f+="\n\n                ",e=c["if"].call(a,d&&d.courseRoute,{hash:{},inverse:p.programWithDepth(7,j,b,d),fn:p.programWithDepth(5,i,b,d),data:b}),(e||0===e)&&(f+=e),f+="\n\n            "}function i(a,b,d){var e,f,g,h="";return h+="\n\n                    <li data-id='",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===m?f.call(a,{hash:{},data:b}):f),h+=n(e)+"'><a href='./#/"+n((e=d&&d.instanceId,typeof e===m?e.apply(a):e))+"/courses/"+n((e=d&&d.courseId,typeof e===m?e.apply(a):e))+"/exercises/"+n((e=d&&d.exerciseId,typeof e===m?e.apply(a):e))+"/students/"+n((e=d&&d.studentId,typeof e===m?e.apply(a):e))+"/snapshots/"+n((e=d&&d.id,typeof e===m?e.apply(a):e))+"/files/",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===m?f.call(a,{hash:{},data:b}):f),h+=n(e)+"?level="+n((e=d&&d.level,typeof e===m?e.apply(a):e))+"'><i class='icon-file icon-gray'></i> "+n((f=c.filename||a&&a.filename,g={hash:{},data:b},f?f.call(a,a&&a.name,g):o.call(a,"filename",a&&a.name,g)))+"</a></li>\n\n                "}function j(a,b,d){var e,f,g,h="";return h+="\n\n                    <li data-id='",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===m?f.call(a,{hash:{},data:b}):f),h+=n(e)+"'><a href='./#/"+n((e=d&&d.instanceId,typeof e===m?e.apply(a):e))+"/students/"+n((e=d&&d.studentId,typeof e===m?e.apply(a):e))+"/courses/"+n((e=d&&d.courseId,typeof e===m?e.apply(a):e))+"/exercises/"+n((e=d&&d.exerciseId,typeof e===m?e.apply(a):e))+"/snapshots/"+n((e=d&&d.id,typeof e===m?e.apply(a):e))+"/files/",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===m?f.call(a,{hash:{},data:b}):f),h+=n(e)+"?level="+n((e=d&&d.level,typeof e===m?e.apply(a):e))+"'><i class='icon-file icon-gray'></i> "+n((f=c.filename||a&&a.filename,g={hash:{},data:b},f?f.call(a,a&&a.name,g):o.call(a,"filename",a&&a.name,g)))+"</a></li>\n\n                "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var k,l="",m="function",n=this.escapeExpression,o=c.helperMissing,p=this;return l+="<header>\n\n    <h1><span class='glyphicon glyphicon-folder-close icon-gray'></span> "+n((k=b&&b.exercise,k=null==k||k===!1?k:k.name,typeof k===m?k.apply(b):k))+"</h1>\n\n</header>\n\n<ul class='list-unstyled'>\n\n        ",k=c.each.call(b,b&&b.files,{hash:{},inverse:p.noop,fn:p.programWithDepth(1,f,e,b),data:e}),(k||0===k)&&(l+=k),l+="\n\n</ul>\n"}),this.Handlebars.templates.SnapshotNavigationContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+="<div class='row'>\n\n    <div class='col-md-6'>\n\n        <button id='toggleBrowser' type='button' class='btn btn-default btn-sm' data-toggle='button'><span class='icon icon-folder icon-gray'></span></button>\n        <button id='split' type='button' class='btn btn-default btn-sm' data-toggle='button'><span class='icon icon-split-editor icon-gray'></span></button>\n        <button id='diff' type='button' class='btn btn-default btn-sm' data-toggle='button'><span class='icon icon-diff icon-gray'></span></button>\n        <button id='level' type='button' class='btn btn-default btn-sm' data-toggle='button'><span class='icon icon-key-level icon-gray'></span></button>\n        <button id='play' type='button' class='btn btn-default btn-sm' data-toggle='button'><span class='glyphicon glyphicon-play icon-gray'></span></button>\n\n        <select id='speed' class='form-control input-sm'>\n            <option>0.25</option>\n            <option>0.5</option>\n            <option selected>1</option>\n            <option>2</option>\n            <option>4</option>\n        </select>\n\n    </div>\n\n    <div class='col-md-4 col-md-offset-2'>\n\n        <div class='pull-right'>\n\n            <div class='current-index'>",(g=c.current)?f=g.call(b,{hash:{},data:e}):(g=b&&b.current,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+" / ",(g=c.total)?f=g.call(b,{hash:{},data:e}):(g=b&&b.total,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+"</div>\n\n            <div class='btn-group btn-group-sm'>\n                <button type='button' id='first' class='btn btn-default'>First</button>\n                <button type='button' id='previous' class='btn btn-default'>Previous</button>\n                <button type='button' id='next' class='btn btn-default'>Next</button>\n                <button type='button' id='last' class='btn btn-default'>Last</button>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"}),this.Handlebars.templates.SnapshotTagsContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h="";return h+="\n\n    <ul>\n\n        ",f={hash:{},inverse:l.noop,fn:l.program(2,g,b),data:b},(e=c.tags)?d=e.call(a,f):(e=a&&a.tags,d=typeof e===j?e.call(a,f):e),c.tags||(d=m.call(a,d,{hash:{},inverse:l.noop,fn:l.program(2,g,b),data:b})),(d||0===d)&&(h+=d),h+="\n\n    </ul>\n\n"
}function g(a,b){var d,e,f="";return f+="\n\n            <li>",(e=c.text)?d=e.call(a,{hash:{},data:b}):(e=a&&a.text,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+" <button type='button' data-action='delete' data-id='",(e=c.id)?d=e.call(a,{hash:{},data:b}):(e=a&&a.id,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"' class='delete'>×</button></li>\n\n        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var h,i="",j="function",k=this.escapeExpression,l=this,m=c.blockHelperMissing;return i+="<header>\n\n    <h1><i class='icon-tags icon-gray'></i> Tags</h1>\n\n</header>\n\n",h=c["if"].call(b,b&&b.tags,{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+="\n\n<div class='input-append'>\n\n    <form>\n\n        <input type='text' data-id='tag' id='appendedInputButton' placeholder='New tag…'>\n        <button type='submit' data-action='create' class='btn'>+</button>\n\n    </form>\n\n</div>\n"}),this.Handlebars.templates.SnapshotsTimelineBottomContainer=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h,i="",j=c.helperMissing,k=this.escapeExpression;return i+="<div class='row'>\n\n    <div class='col-md-2'>\n\n        <time>"+k((g=c.date||b&&b.date,h={hash:{},data:e},g?g.call(b,(f=b&&b.first,null==f||f===!1?f:f.timestamp),!1,h):j.call(b,"date",(f=b&&b.first,null==f||f===!1?f:f.timestamp),!1,h)))+"</time>\n\n    </div>\n\n    <div class='center text-center'>. . .</div>\n\n    <div class='col-md-3 pull-right'>\n\n        <time class='pull-right'>"+k((g=c.date||b&&b.date,h={hash:{},data:e},g?g.call(b,(f=b&&b.last,null==f||f===!1?f:f.timestamp),!1,h):j.call(b,"date",(f=b&&b.last,null==f||f===!1?f:f.timestamp),!1,h)))+" (+ "+k((g=c.duration||b&&b.duration,h={hash:{},data:e},g?g.call(b,(f=b&&b.last,null==f||f===!1?f:f.timestamp),(f=b&&b.first,null==f||f===!1?f:f.timestamp),h):j.call(b,"duration",(f=b&&b.last,null==f||f===!1?f:f.timestamp),(f=b&&b.first,null==f||f===!1?f:f.timestamp),h)))+")</time>\n\n    </div>\n\n</div>\n"}),this.Handlebars.templates.StudentsContainer=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+="\n                <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===o?e.call(a,{hash:{},data:b}):e),f+=p(d)+"/courses'>Courses</a></li>\n                <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===o?e.call(a,{hash:{},data:b}):e),f+=p(d)+"/courses/"+p((d=a&&a.course,d=null==d||d===!1?d:d.id,typeof d===o?d.apply(a):d))+"'>"+p((d=a&&a.course,d=null==d||d===!1?d:d.name,typeof d===o?d.apply(a):d))+"</a></li>\n                <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===o?e.call(a,{hash:{},data:b}):e),f+=p(d)+"/courses/"+p((d=a&&a.course,d=null==d||d===!1?d:d.id,typeof d===o?d.apply(a):d))+"/exercises'>Exercises</a></li>\n                <li><a href='./#/",(e=c.instanceId)?d=e.call(a,{hash:{},data:b}):(e=a&&a.instanceId,d=typeof e===o?e.call(a,{hash:{},data:b}):e),f+=p(d)+"/courses/"+p((d=a&&a.course,d=null==d||d===!1?d:d.id,typeof d===o?d.apply(a):d))+"/exercises/"+p((d=a&&a.exercise,d=null==d||d===!1?d:d.id,typeof d===o?d.apply(a):d))+"'>"+p((d=a&&a.exercise,d=null==d||d===!1?d:d.name,typeof d===o?d.apply(a):d))+"</a></li>\n            "}function g(a){var b,c="";return c+=" "+p((b=a&&a.course,b=null==b||b===!1?b:b.name,typeof b===o?b.apply(a):b))+" — "+p((b=a&&a.exercise,b=null==b||b===!1?b:b.name,typeof b===o?b.apply(a):b))+" — "}function h(a,b,d){var e,f,g,h="";return h+="\n\n                    <tr>\n\n                        <td class='index'>"+p((f=c.index||a&&a.index,g={hash:{},data:b},f?f.call(a,null==b||b===!1?b:b.index,g):q.call(a,"index",null==b||b===!1?b:b.index,g)))+"</td>\n\n                        ",e=c["if"].call(a,d&&d.course,{hash:{},inverse:r.programWithDepth(8,j,b,d),fn:r.programWithDepth(6,i,b,d),data:b}),(e||0===e)&&(h+=e),h+="\n\n                    </tr>\n\n                "}function i(a,b,d){var e,f,g="";return g+="\n\n                            <td class='link'><a href='./#/"+p((e=d&&d.instanceId,typeof e===o?e.apply(a):e))+"/courses/"+p((e=d&&d.course,e=null==e||e===!1?e:e.id,typeof e===o?e.apply(a):e))+"/exercises/"+p((e=d&&d.exercise,e=null==e||e===!1?e:e.id,typeof e===o?e.apply(a):e))+"/students/",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===o?f.call(a,{hash:{},data:b}):f),g+=p(e)+"/snapshots'>",(f=c.name)?e=f.call(a,{hash:{},data:b}):(f=a&&a.name,e=typeof f===o?f.call(a,{hash:{},data:b}):f),g+=p(e)+"</a></td>\n\n                        "}function j(a,b,d){var e,f,g="";return g+="\n\n                            <td class='link'><a href='./#/"+p((e=d&&d.instanceId,typeof e===o?e.apply(a):e))+"/students/",(f=c.id)?e=f.call(a,{hash:{},data:b}):(f=a&&a.id,e=typeof f===o?f.call(a,{hash:{},data:b}):f),g+=p(e)+"/courses'>",(f=c.name)?e=f.call(a,{hash:{},data:b}):(f=a&&a.name,e=typeof f===o?f.call(a,{hash:{},data:b}):f),g+=p(e)+"</a></td>\n\n                        "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),d=this.merge(d,a.partials),e=e||{};var k,l,m,n="",o="function",p=this.escapeExpression,q=c.helperMissing,r=this,s=c.blockHelperMissing;return n+="<section>\n\n    <div class='row'>\n\n        <ol class='breadcrumb'>\n\n            <li><a href='./'>Instances</a></li>\n            <li><a href='./#/",(l=c.instanceId)?k=l.call(b,{hash:{},data:e}):(l=b&&b.instanceId,k=typeof l===o?l.call(b,{hash:{},data:e}):l),n+=p(k)+"'>",(l=c.instanceId)?k=l.call(b,{hash:{},data:e}):(l=b&&b.instanceId,k=typeof l===o?l.call(b,{hash:{},data:e}):l),n+=p(k)+"</a></li>\n\n            ",k=c["if"].call(b,b&&b.course,{hash:{},inverse:r.noop,fn:r.program(1,f,e),data:e}),(k||0===k)&&(n+=k),n+="\n\n            <li class='active'>Students</li>\n\n        </ol>\n\n    </div>\n\n    <div class='row header'>\n\n        <h2 class='col-md-9'>\n            ",k=c["if"].call(b,b&&b.course,{hash:{},inverse:r.noop,fn:r.program(3,g,e),data:e}),(k||0===k)&&(n+=k),n+=" Students ("+p((k=b&&b.students,k=null==k||k===!1?k:k.length,typeof k===o?k.apply(b):k))+")\n        </h2>\n\n        ",k=r.invokePartial(d.search,"search",b,c,d,e),(k||0===k)&&(n+=k),n+="\n\n    </div>\n\n    <div class='row'>\n\n        <table class='table table-hover'>\n\n            <thead>\n                <tr>\n\n                    <th class='index'>#</th>\n                    <th>Name</th>\n\n                </tr>\n            </thead>\n\n            <tbody>\n\n                ",m={hash:{},inverse:r.noop,fn:r.programWithDepth(5,h,e,b),data:e},(l=c.students)?k=l.call(b,m):(l=b&&b.students,k=typeof l===o?l.call(b,m):l),c.students||(k=s.call(b,k,{hash:{},inverse:r.noop,fn:r.programWithDepth(5,h,e,b),data:e})),(k||0===k)&&(n+=k),n+="\n\n            </tbody>\n\n        </table>\n\n    </div>\n\n</section>\n"});