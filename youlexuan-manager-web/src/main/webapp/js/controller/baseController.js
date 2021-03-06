app.controller('baseController',function ($scope) {

    //重新加载列表和数据
    $scope.reloadList=function () {
        //切换页码
        $scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
    }

    //分页控件配置
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function(){
            $scope.reloadList();//重新加载
        }
    };

    //更新数组中的id,更新复选框
    $scope.selectIds=[];//定义一个数组，用来装要删除的id
    $scope.updateSelection=function($event,id){

        if ($event.target.checked){
            $scope.selectIds.push(id);
        }else{
            var ids = $scope.selectIds.indexOf(id);
            $scope.selectIds.splice(ids,1);//splice（）表示从数组中移除将索引为ids的元素，移除数量为1
        }
    };

    //提取json字符串数据中某个属性，返回拼接字符串 逗号分隔
    $scope.jsonToString=function(jsonString,key){
        var json=JSON.parse(jsonString);//将json字符串转换为json对象
        var value="";
        for(var i=0;i<json.length;i++){
            if(i>0){
                value+=","
            }
            value+=json[i][key];
        }
        return value;
    }

});
