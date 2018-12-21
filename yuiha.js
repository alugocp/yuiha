window.yuiha={
  sheets:{},
  key:function(){
    var a=arguments;
    if(a.length==1){
      for(lang in a[0]) this.sheets[lang]=a[0][lang];
    }else if(a.length==2) this.sheets[a[0]]=a[1];
  },
  text:function(id,span){
    var tag=span?"span":"div";
    document.write("<"+tag+" class=\"yuiha "+id+"\"></"+tag+">");
  },
  translate:function(lang){
    $(".yuiha").each(function(){
      var classes=$(this).attr("class").split(/\s+/);
      for(a in classes){
        var text=yuiha.sheets[lang][classes[a]];
        if(text){
          $(this).text(text);
          break;
        }
      }
    });
  }
}
