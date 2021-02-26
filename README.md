# HOOKGAGA
HOOKING

function 不要瞎逼逼() {
    Java.perform(function() {
        var ClassName = "以太网.开源网站.github";
        var Platform = Java.use(ClassName);
        var targetMethod = "复制三十法";
        var len = Platform[targetMethod].overloads.length;
        console.log(len);
        for(var i = 0; i < len; ++i) {
            Platform[targetMethod].overloads[i].implementation = function () {
                console.log("class:", ClassName, "target:", targetMethod, " i:", i, JSON.stringify(arguments) );
            }
        }
    });
}


function 好好进步(){
    var native_lib_addr = Module.findBaseAddress("每天进步一点点.so");
    console.log("native_lib_addr => ",native_lib_addr);

    var 第一次学 = Module.findExportByName("每天进步一点.so", "逆向只能学一点");
    console.log("myfirstjniJNI addr => ",myfirstjniJNI);

    var 主动学习 = new NativeFunction(第一次学,"pointer",["pointer","pointer","pointer"])

    Interceptor.replace(第一次学,new NativeCallback(
        function(args0,args1,args2){
        console.log("Interceptor.replace 第一次学 args:",args0,args1,args2);
        var result = 主动学习(args0,args1,args2)
       
        return result;
    },"pointer",["pointer","pointer","pointer"]))
}
