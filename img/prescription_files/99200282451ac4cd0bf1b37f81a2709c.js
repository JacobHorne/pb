Bootstrapper.bindDependencyDOMParsed(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var gaURL=Bootstrapper.dataManager.getDataElement("madl","PageURL");var sku=Bootstrapper.dataManager.getDataElement("madl","ProductSku");var loc=window.document.domain;jQuery(document).ready(function(){(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date;a=s.createElement(o),m=s.getElementsByTagName(o)[0];
a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create","UA-44972839-1","istockphoto.com");ga("require","displayfeatures");ga("send","pageview",gaURL)});jQuery(document).on("click","#agreeBtn",function(){ga("send","event",{eventCategory:"Download",eventAction:loc,eventLabel:sku})});jQuery(document).on("click",".btnCta1.downloadFile",function(){ga("send","event",{eventCategory:"Download",eventAction:loc,eventLabel:sku})});
jQuery(document).on("click",".downloadFile.btnCta2",function(){ga("send","event",{eventCategory:"Download",eventAction:loc,eventLabel:sku})})},1121823,[1218560],235504,[328417]);