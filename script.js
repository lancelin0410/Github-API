const cataurl = 'https://api.github.com/users/lancelin0410/repos'

$.ajax({
    url: cataurl,
    success: function(res){
      datas = res
      $("ul#list").html("")
      datas.forEach((data)=>{
        var data = `
          <li data-id="$(data.id}">
            <h3>
                專案名稱：${data.name}
                <span>專案敘述：${data.description}</span>
                <a href="${data.html_url}"  target="_blank" >專案連結</a>
            </h3>
          </li>`
        $("ul#list").append(data)
      })
    },
    error: function(){
      console.log("載入失敗")
    }
  })