function jhexdump(array,off,len) { 
    var ptr = Memory.alloc(array.length); 
    for(var i = 0; i < array.length; ++i) 
        Memory.writeS8(ptr.add(i), array[i]); 
    console.log(hexdump(ptr, { offset: 0, length: array.length, header: false, ansi: false })); 
} 
 
function hook_SSLsocketandroid8(){ 
    Java.perform(function(){ 
        console.log("hook_SSLsocket"); 
        Java.use("com.android.org.conscrypt.ConscryptFileDescriptorSocket$SSLOutputStream").write.overload('[B', 'int', 'int').implementation = function(bytearry,int1,int2){ 
            var result = this.write(bytearry,int1,int2); 
            console.log("HTTPS write result,bytearry,int1,int2=>",result,bytearry,int1,int2) 
            var ByteString = Java.use("com.android.okhttp.okio.ByteString"); 
            console.log(jhexdump(bytearry)); 
            return result; 
        } 
         
 
         
        Java.use("com.android.org.conscrypt.ConscryptFileDescriptorSocket$SSLInputStream").read.overload('[B', 'int', 'int').implementation = function(bytearry,int1,int2){ 
            var result = this.read(bytearry,int1,int2); 
            console.log("HTTPS read result,bytearry,int1,int2=>",result,bytearry,int1,int2) 
            var ByteString = Java.use("com.android.okhttp.okio.ByteString"); 
            console.log(jhexdump(bytearry)); 
            return result; 
        } 
         
 
    }) 
} 