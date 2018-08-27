/*
 * @Author: Liang Liang
 * @Date: 2018-08-27 16:56:42
 * @LastEditors: Liang Liang
 * @LastEditTime: 2018-08-27 16:58:38
 * @Description: 
 */
(function() {
  var script = document.createElement('script');
  script.src = 'jquery.i18n.properties.js';
  document.getElementsByTagName('head')[0].appendChild(script);
  script.onload = function() {
    $(function() {
      jQuery.i18n.properties({
        name: 'common',
        path: 'i18n/' + i18nLanguage + '/', //资源文件路径
        mode: 'map', //用Map的方式使用资源文件中的值
        language: i18nLanguage,
        callback: function() {
          //加载成功后设置显示内容
          //初始化页面元素
          $('[data-i18n-placeholder]').each(function() {
            $(this).attr(
              'placeholder',
              $.i18n.prop($(this).data('i18n-placeholder')),
            );
          });
          $('[data-i18n-text]').each(function() {
            //如果text里面还有html需要过滤掉
            $(this).html($.i18n.prop($(this).data('i18n-text')));
          });
          $('[data-i18n-html]').each(function() {
            $(this).replaceWith($.i18n.prop($(this).data('i18n-html')));
          });
          $('[data-i18n-value]').each(function() {
            $(this).val($.i18n.prop($(this).data('i18n-value')));
          });
        },
      });
    });
  };
})();
