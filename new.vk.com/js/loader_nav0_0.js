var navMap = {'<void>':['al_index.php',['index.css','index.js']],'<other>':['al_profile.php',['profile.css','page.css','profile.js','page.js']],'public\\d+($|/)':['al_public.php',['public.css','page.css','public.js','page.js']],'event\\d+($|/)':['al_events.php',['groups.css','page.css','groups.js','page.js']],'club\\d+($|/)':['al_groups.php',['groups.css','page.css','groups.js','page.js']],'publics\\d+($|/)':['al_public.php',['public.css','page.css','public.js','page.js']],'groups(\\d+)?$':['al_groups.php',['groups.css','groups_list.js','indexer.js']],'events$':['al_groups.php',['groups.css','page.css','groups.js','page.js']],'changemail$':['register.php',['reg.css']],'mail($|/)':['al_mail.php',['mail.css','mail.js']],'write[-]?\\d*($|/)':['al_mail.php',['mail.css','mail.js']],'im($|/)':['al_im.php',['imn.js','im.css','emoji.js','notifier.css']],'gim\\d+($|/)':['al_im.php',['imn.js','im.css','emoji.js','notifier.css']],'audio-?\\d+_\\d+$':['al_audio.php',['audio.css','audio.js']],'audios(-?\\d+)?$':['al_audio.php',['audio.css','audio.js']],'audio($|/)':['al_audio.php',['audio.css','audio.js']],'apps_check($|/)':['al_apps_check.php',['apps.css','apps.js']],'apps($|/)':['al_apps.php',['apps.css','apps.js']],'editapp($|/)':['al_apps_edit.php',['apps.css','apps.js']],'regstep\\d$':['register.php',['reg.js','reg.css','ui_controls.js','ui_controls.css','selects.js']],'video(-?\\d+_\\d+)?$':['al_video.php',['video.js','video.css','videoview.js','videoview.css','indexer.js']],'videos(-?\\d+)?$':['al_video.php',['video.js','video.css','indexer.js']],'feed$':['al_feed.php',['page.css','page.js','feed.css','feed.js']],'friends$':['al_friends.php',['friends.js','friends.css','privacy.css']],'friendsphotos$':['al_photos.php',['friendsphotos.js','photoview.js','friendsphotos.css','photoview.css']],'wall-?\\d+(_\\d+)?$':['al_wall.php',['page.js','page.css','wall.js','wall.css']],'tag\\d+$':['al_photos.php',['photos.js','photoview.js','photos.css','photoview.css']],'albums(-?\\d+)?$':['al_photos.php',['photos.js','photos.css']],'photos(-?\\d+)?$':['al_photos.php',['photos.js','photos.css']],'album-?\\d+_\\d+$':['al_photos.php',['photos.js','photos.css']],'photo-?\\d+_\\d+$':['al_photos.php',['photos.js','photos.css','photoview.js','photoview.css']],'search$':['al_search.php',['search.css','search.js']],'people($|/)':['al_search.php',['search.css','search.js']],'communities$':['al_search.php',['search.css','search.js']],'brands$':['al_search.php',['search.css','search.js']],'invite$':['invite.php',['invite.css','invite.js','ui_controls.css','ui_controls.js']],'join$':['join.php',['join.css','join.js']],'settings$':['al_settings.php',['settings.js','settings.css']],'edit$':['al_profileEdit.php',['profile_edit.js','profile_edit.css']],'blog($|/)':['blog.php',['blog.css','blog.js','page.js']],'fave$':['al_fave.php',['fave.js','fave.css','page.css','wall.css','qsorter.js','indexer.js']],'topic$':['al_board.php',['board.css']],'board\\d+$':['al_board.php',['board.css','board.js']],'topic-?\\d+_\\d+$':['al_board.php',['board.css','board.js']],'stats($|/)':['al_stats.php',['stats.css']],'ru/(.*)?$':['al_pages.php',['pages.css','pages.js','wk.css','wk.js']],'pages($|/)':['al_pages.php',['pages.css','pages.js','wk.css','wk.js']],'page-?\\d+_\\d+$':['al_pages.php',['pages.css','pages.js','wk.css','wk.js']],'restore($|/)':['al_restore.php',['restore.js','restore.css']],'recover($|/)':['recover.php',['recover.js','recover.css']],'gifts\\d*$':['al_gifts.php',['gifts.js','gifts.css']],'docs($|/)':['docs.php',['docs.css','docs.js','indexer.js']],'doc-?\\d+_\\d+$':['docs.php',['docs.css','docs.js','indexer.js']],'docs-?\\d+$':['docs.php',['docs.css','docs.js','indexer.js']],'login($|/)':['al_login.php',['login.css','login.js']],'tasks($|/)':['tasks.php',['tasks.css','tasks.js']],'abuse($|/)':['abuse.php',['abuse.css','abuse.js']],'abuse2($|/)':['abuse2.php',[]],'restore2($|/)':['restore2.php',['dyn-restore2.css','dyn-restore2.js','dyn-restore2_aa.js','sorter.js']],'datababes($|/)':['datababes.php',[]],'support($|/)':['al_tickets.php',['tickets.css','tickets.js']],'helpdesk($|/)':['al_helpdesk.php',['tickets.css','tickets.js']],'offersdesk($|/)':['offers.php',['offers.css','offers.js']],'payments($|/)':['al_payments.php',['payments.css']],'faq($|\\d+|/)':['al_faq.php',['faq.css','faq.js']],'tlmd($|\\d+|/)':['al_talmud.php',['faq.js','faq.css','tickets.css','tickets.js','tags_dd.js','tags_dd.css']],'sms_office($|/)':['sms_office.php',['sms_office.css','sms_office.js']],'dev($|/)':['dev.php',['dev.css','dev.js']],'developers($|/)':['al_developers.php',['developers.css']],'help($|/)':['al_help.php',['help.css','help.js']],'claims($|/)':['al_claims.php',['claims.css','claims.js']],'video_embed($|/)':['al_video_embed.php',['video_embed.css','video_embed.js']],'ads$':['ads.php',['ads.css','ads.js']],'adbonus$':['ads.php',['ads.css','ads.js']],'adsbonus$':['ads.php',['ads.css','ads.js']],'adregister$':['ads.php',['ads.css','ads.js']],'adsedit$':['ads_edit.php',['ads.css','ads.js','ads_edit.css','ads_edit.js']],'adscreate$':['ads_edit.php',['ads.css','ads.js','ads_edit.css','ads_edit.js']],'adsmoder$':['ads_moder.php',['ads.css','ads.js','ads_moder.css','ads_moder.js']],'adsweb$':['ads_web.php',['ads.css','ads.js','ads_web.css','ads_web.js']],'exchange$':['ads_posts.php',['ads.css','ads.js','exchange.css','exchange.js']],'exchangemoder$':['ads_posts_moder.php',['ads.css','ads.js','exchange_moder.css','exchange_moder.js']],'offers$':['ads_offers.php',['ads.css','ads.js','ads_offers.css','ads_offers.js']],'offersmoder$':['ads_offers_moder.php',['ads.css','ads.js','ads_offers_moder.css','ads_offers_moder.js']],'test$':['al_help.php',['help.css','help.js']],'agenttest$':['al_help.php',['help.css','help.js']],'grouptest$':['al_help.php',['help.css','help.js']],'dmca$':['al_tickets.php',['tickets.css','tickets.js']],'terms$':['al_help.php',['help.css','help.js']],'privacy$':['al_help.php',['help.css','help.js']],'licence$':['al_help.php',['help.css','help.js']],'editdb$':['editdb.php',['editdb.css','editdb.js']],'note\\d+_\\d+$':['al_wall.php',['wall.js','wall.css','wk.js','wk.css','pagination.js']],'notes(\\d+)?$':['al_wall.php',['wall.js','wall.css','wk.js','wk.css','pagination.js']],'bugs($|/)':['bugs.php',['bugs.css','bugs.js']],'wkview.php($)':['wkview.php',['wkview.js','wkview.css','wk.js','wk.css']],'stickers_office($|/)':['stickers_office.php',['stickers_office.css','stickers_office.js']],'charts($|/)':['al_audio.php',['audio.css','audio.js']],'maps($|/)':['maps.php',[]],'jobs$':['al_jobs.php',['jobs.css','jobs.js','blog.css','blog.js']],'about$':['blog.php',['blog.css','blog.js']],'products$':['blog.php',['blog.css','blog.js']],'ui$':['ui.php',[]],'translation$':['al_translation.php',[]],'mobile$':['al_login.php',[]],'stickers($|/)':['al_im.php',['imn.js','im.css','emoji.js','notifier.css']],'print$':['al_print.php',['print.css','print.js']],'pattern(\\d+)?$':['patterns_info.php',['dyn-patterns_info.css','dyn-patterns_info.js','page.css']],'link(\\d+)?$':['patterns_info.php',['dyn-patterns_info.css','dyn-patterns_info.js','page.css']],'autoreg(\\d+)?$':['patterns_info.php',['dyn-patterns_info.css','dyn-patterns_info.js','page.css']],'statlogs($|/)':['statlogs_view.php',['statlogs.css']],'market(-?\\d+)?(_\\d+)?$':['al_market.php',['market.css','market.js']],'landings$':['landings.php',[]],'ach($|/)':['achievements.php',['achievements.css','achievements.js']]}; var stVersions = { 'nav': 0, 'fonts_cnt.css': 2157913508, 'common.js': 1133, 'common.css': 3995527827, 'pads.js': 1601311133, 'pads.css': 1843379990, 'retina.css': 1820592869, 'uncommon.js': 3297864069, 'uncommon.css': 2210232808, 'filebutton.css': 2582548248, 'filebutton.js': 1457823047, 'lite.js': 2518464338, 'lite.css': 3882188917, 'ie6.css': 1054141387, 'ie7.css': 532233945, 'rtl.css': 836314285, 'pagination.js': 46926455, 'blog.css': 2239799421, 'blog.js': 188708593, 'html5audio.js': 1230354391, 'html5video.js': 3599850170, 'html5video.css': 1529932203, 'audioplayer.js': 1779126531, 'audioplayer.css': 701892504, 'audio_html5.js': 3586987067, 'audio.js': 2915867304, 'audio.css': 3533048489, 'gifts.css': 3656945552, 'gifts.js': 2778120873, 'cc.js': 4037201610, 'indexer.js': 4037127100, 'graph.js': 3091977822, 'graph.css': 1261200708, 'boxes.css': 2004769952, 'box.js': 986491972, 'rate.css': 768419415, 'tooltips.js': 3849506067, 'tooltips.css': 3782288480, 'sorter.js': 2514645581, 'qsorter.js': 2821441961, 'usorter.js': 2212338539, 'phototag.js': 923648927, 'phototag.css': 438580694, 'photoview.js': 2448020752, 'photoview.css': 29604868, 'fullscreen_pv.js': 130423898, 'fullscreen_pv.css': 4254746541, 'friendsphotos.js': 3869757571, 'friendsphotos.css': 3816436303, 'friends.js': 1420777660, 'friends.css': 3282760932, 'friends_search.js': 1498932479, 'friends_search.css': 204916655, 'board.js': 3967256739, 'board.css': 1181888864, 'photos.css': 2170369105, 'photos.js': 1108769877, 'photos_add.css': 342517318, 'photos_add.js': 4132061776, 'wkpoll.js': 3872977013, 'wkview.js': 4257777919, 'wkview.css': 1822838798, 'single_pv.css': 1756823785, 'single_pv.js': 2569562240, 'video.js': 2467881146, 'video.css': 3112894896, 'videocat.js': 972120599, 'videocat.css': 683965258, 'videoview.js': 54678605, 'videoview.css': 1717559868, 'video_edit.js': 660308478, 'video_edit.css': 3033331849, 'video_upload.js': 3349478794, 'video_youtube.js': 3123894146, 'video_youtube.css': 3352952199, 'videoplayer.js': 333581228, 'videoplayer.css': 324260572, 'translation.js': 3444393106, 'translation.css': 4017022451, 'reg.css': 1314058211, 'reg.js': 675443900, 'invite.css': 3536868648, 'invite.js': 2046983763, 'prereg.js': 1684494884, 'index.css': 2144451048, 'index.js': 288418575, 'join.css': 1094769679, 'join.js': 748178609, 'intro.css': 632121273, 'post.css': 4087961879, 'module.css': 2820130765, 'owner_photo.js': 777617564, 'owner_photo.css': 2482930139, 'page.js': 281579270, 'page.css': 2888021900, 'page_help.css': 2370291310, 'public.css': 4066778842, 'public.js': 1370745423, 'pages.css': 3840574063, 'pages.js': 3347413999, 'groups.css': 4188033191, 'groups.js': 3132396477, 'groups_list.js': 3462017115, 'groups_edit.css': 3778186696, 'groups_edit.js': 1043994389, 'profile.css': 255388122, 'profile.js': 4198502053, 'calendar.css': 58955122, 'calendar.js': 4175059813, 'wk.css': 2367265388, 'wk.js': 1889427948, 'pay.css': 3455936119, 'pay.js': 1315549380, 'tagger.js': 2246443526, 'tagger.css': 172965549, 'qsearch.js': 2246648013, 'wall.css': 1385065408, 'wall.js': 1905925749, 'walledit.js': 2106680068, 'thumbs_edit.css': 1293875611, 'thumbs_edit.js': 2641086814, 'mail.css': 3405659547, 'mail.js': 4232525143, 'email.css': 3625468312, 'im.css': 829233285, 'imn.js': 4264682110, 'im.js': 4271552496, 'emoji.js': 1702836788, 'wide_dd.css': 2440348481, 'wide_dd.js': 4260857284, 'writebox.css': 3478631584, 'writebox.js': 1878402464, 'sharebox.js': 3936364737, 'fansbox.js': 3553173932, 'postbox.css': 4170744741, 'postbox.js': 2878853436, 'feed.js': 969649559, 'feed.css': 2050972384, 'privacy.js': 817049753, 'privacy.css': 986931467, 'apps.css': 3667322786, 'apps.js': 4128471812, 'apps_edit.js': 807186031, 'apps_edit.css': 2439347778, 'apps_check.js': 698434188, 'apps_check.css': 99682381, 'settings.js': 926348586, 'settings.css': 3487885812, 'profile_edit.js': 277721666, 'profile_edit.css': 2065819755, 'profile_edit_edu.js': 2317370921, 'profile_edit_job.js': 1509540900, 'profile_edit_mil.js': 200684846, 'search.js': 1316350637, 'search.css': 1227212287, 'grid_sorter.js': 3541649883, 'auto_list.js': 2426348809, 'suggester.js': 446460383, 'datepicker.js': 741866923, 'datepicker.css': 456151918, 'oauth_popup.css': 2783037447, 'oauth_page.css': 1269113697, 'oauth_touch.css': 1390775374, 'notes.css': 1902655111, 'notes.js': 1813954736, 'wiki.css': 3342260206, 'fave.js': 3186044579, 'fave.css': 633843132, 'widget_comments.css': 1621487034, 'widget_auth.css': 4102771453, 'widget_community.css': 2289682706, 'widget_contactus.css': 1162536086, 'widget_post.css': 2383412018, 'api/widgets/al_comments.js': 2353978703, 'api/widgets/al_auth.js': 3671685797, 'api/widgets/al_poll.js': 507084589, 'api/widgets/al_community.js': 311752464, 'api/widgets/al_contactus.js': 3313722516, 'api/widgets/al_subscribe.js': 2947008022, 'api/widgets/al_like.js': 1445146359, 'api/widgets/al_post.js': 1579108142, 'api/widgets/community_messages.js': 102543286, 'widget_community_messages.css': 1988547647, 'al_poll.css': 3, 'widget_recommended.css': 1668981855, 'widgets.css': 935731840, 'common_light.js': 2706613887, 'developers.css': 2192083352, 'touch.css': 1524784846, 'notifier.js': 227619342, 'notifier.css': 128366017, 'earthday.js': 1302273681, 'earthday.css': 190978924, 'restore.js': 1578098959, 'restore.css': 3063003476, 'recover.js': 2216623723, 'recover.css': 1708940698, 'docs.js': 388250342, 'docs.css': 1846648280, 'tags_dd.js': 2519761220, 'tags_dd.css': 3629295033, 'tasks.js': 2346279584, 'tasks.css': 2970006707, 'helpdesk.js': 1950533245, 'tickets.js': 2175749834, 'tickets.css': 801903078, 'faq.js': 743323881, 'faq.css': 449966165, 'meminfo.css': 2969290417, 'groupinfo.css': 2377869286, 'bugs.js': 2994463564, 'bugs.css': 444001557, 'login.css': 2961373398, 'login.js': 1559795773, 'upload.js': 2134859430, 'graffiti.js': 1026128914, 'graffiti.css': 3374342273, 'graffiti_new.js': 1101659761, 'graffiti_new.css': 1805236832, 'abuse.js': 1131069015, 'abuse.css': 3360978448, 'verify.css': 262281192, 'away.css': 3487828088, 'stats.css': 1801791014, 'payments.css': 3247100771, 'payments.js': 3222309665, 'offers.css': 1395278909, 'offers.js': 3070210054, 'call.js': 3752504153, 'call.css': 1208034002, 'aes_light.css': 1511176461, 'aes_light.js': 3884708224, 'ads.css': 3661315251, 'ads.js': 3283986967, 'ads_payments.js': 899652112, 'ads_edit.css': 12388220, 'ads_edit.js': 4020796185, 'ads_moder.css': 3409928963, 'ads_moder.js': 1730410251, 'ads_tagger.js': 468647748, 'ads_web.css': 1344536113, 'ads_web.js': 2143800062, 'mrtarg.js': 3995910240, 'mrtarg.css': 3681350201, 'health.css': 4084630120, 'health.js': 53273640, 'pinbar.js': 4083368255, 'sms_office.css': 701386734, 'sms_office.js': 3244045240, 'help.css': 2728043455, 'help.js': 3782508485, 'claims.css': 2249584106, 'claims.js': 4197337467, 'video_embed.js': 531691495, 'video_embed.css': 1190649651, 'site_stats.css': 913929545, 'site_stats.js': 1309466967, 'blank.css': 2360807318, 'wk_editor.js': 2315964559, 'wk_editor.css': 603114021, 'btagger.js': 2682888485, 'btagger.css': 520431514, 'filters.js': 1865892730, 'filters_pe.js': 1406401216, 'pe.js': 2468168913, 'pe.css': 529189933, 'dev.js': 231126814, 'dev.css': 1621133558, 'share.css': 4134512899, 'stickers_office.css': 2865554295, 'stickers_office.js': 2247906357, 'mapbox.js': 4245575080, 'mapbox.css': 1578941304, 'jobs.js': 1431325420, 'jobs.css': 272153865, 'print.js': 1847889256, 'print.css': 2542593047, 'qrcode.js': 2897722391, 'contests.css': 630790975, 'ui.css': 993252443, 'ui.js': 3425210242, 'ui_common.js': 1999103298, 'ui_common.css': 3936650992, 'ui_media_selector.js': 1337732198, 'ui_media_selector.css': 3008550616, 'admin.js': 1614876408, 'admin.css': 22598043, 'exchange.css': 809436780, 'exchange.js': 43495474, 'exchange_moder.css': 4190609504, 'exchange_moder.js': 735536334, 'ads_offers.css': 1806589945, 'ads_offers.js': 990052303, 'ads_offers_moder.css': 729706038, 'ads_offers_moder.js': 2134368643, 'chronicle.css': 3109023779, 'market.css': 2622097292, 'market.js': 1676371719, 'vk2016.css': 1178411485, 'landings/common.css': 2020861391, 'landings/community_message.css': 877172513, 'landings/wdsd.css': 1039861846, 'landings/smartfeed.css': 1217150838, 'landings/job38.css': 257596551, 'vkme.css': 703161760, 'ui_controls.js': 3806767471, 'highcharts.js': 607702664, 'ui_controls.css': 2603924485, 'selects.js': 1852657841, 'mentions.js': 3686976691, 'apps_flash.js': 1016765437, 'maps.js': 302009647, 'places.js': 636892584, 'places.css': 2906799301, 'map2.js': 3492395866, 'map.css': 1691287470, 'sort.js': 1905098063, 'paginated_table.js': 3438566458, 'paginated_table.css': 500407230, 'api/share.js': 404756598, 'api/openapi.js': 252392066, 'api/xdm.js': 1965154462, 'css_clean.js': 824960447, 'q_frame.php': 7, '/swf/api_wrapper.swf': 7, '/swf/api_external.swf': 8, '/swf/api_wrapper2_0.swf': 8, '/swf/audio_lite.swf': 13, '/swf/uploader_lite.swf': 13, '/swf/photo_uploader_lite.swf': 17, '/swf/CaptureImg.swf': 12, '/swf/video.swf': 154, '/swf/vkvideochat.swf': 50, '/swf/vchatdevices.swf': 1, 'snapster/style.css': 3569976985, 'snapster/page.js': 1720549549, 'snapster/mobile.css': 100872175, 'snapster/common.js': 1252755421, 'snapster/main.js': 1262101368, 'snapster/snapster.js': 2619454970, 'snapster/modules.js': 2033915292, 'snapster/snapster.css': 204890028, 'snapster/mob_templates.js': 2325638713, 'snapster/snapster_mobile.js': 2272524840, 'snapster/snapster_mobile.css': 2880436857, 'snapster/templates.js': 3981099978, 'snapster/snapster_ui.js': 67361843, 'snapster/notifier.js': 1904376904, 'snapster/snapster_ui.css': 3351071103, 'favicon': 5, 'lang': 6720}; var stTypes = {fromLib:{'md5.js':1,'clipboard.js':1,'ui_controls.js':1,'highcharts.js':1,'selects.js':1,'sort.js':1,'maps.js':1,'css_clean.js':1},fromRoot:{'api/share.js':1,'api/openapi.js':1,'api/xdm.js':1,'apps_flash.js':1,'mentions.js':1,'map2.js':1,'ui_controls.css':1,'map.css':1,'paginated_table.js':1,'paginated_table.css':1,'snapster/common.js':1,'snapster/style.css':1,'snapster/page.js':1,'snapster/mobile.css':1,'snapster/main.js':1,'mobile/common.js':1,'mobile/oauth.js':1,'mobile/snapster.js':1,'mobile/adaptive_table.css':1,'mobile/base_head.css':1,'mobile/base_screen.css':1,'mobile/common.css':1,'mobile/common_2x.css':1,'mobile/full_browser.css':1,'mobile/gallery.css':1,'mobile/ios_device.css':1,'mobile/medium_head.css':1,'mobile/medium_screen.css':1,'mobile/oauth_android.css':1,'mobile/oauth_ios.css':1,'mobile/oauth_winmobile.css':1,'mobile/small_screen.css':1,'mobile/snapster.css':1,'mobile/wiki.css':1}}; var _rnd = 622;