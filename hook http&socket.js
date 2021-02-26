
function jhexdump(array,off,len) {
    var ptr = Memory.alloc(array.length);
    for(var i = 0; i < array.length; ++i)
        Memory.writeS8(ptr.add(i), array[i]);
    //console.log(hexdump(ptr, { offset: off, length: len, header: false, ansi: false }));
    console.log(hexdump(ptr, { offset: 0, length: array.length, header: false, ansi: false }));
}

function hook_socket1(){
    Java.perform(function(){
        console.log("hook_socket;")
        Java.use("java.net.SocketOutputStream").write.overload('[B', 'int', 'int').implementation = function(bytearry,int1,int2){
            console.log("HTTP write result,bytearry,int1,int2=>",result,bytearry,int1,int2);
            var result = this.write(bytearry,int1,int2);
            console.log("HTTP write result,bytearry,int1,int2=>",result,bytearry,int1,int2);
            var ByteString = Java.use("com.android.okhttp.okio.ByteString");
            console.log(jhexdump(bytearry));
            console.log(this.socket.value.getLocalAddress().toString());
            console.log(this.socket.value.getLocalPort().toString());
            console.log(this.socket.value.getLocalSocketAddress().toString());
            return result;
        }
        Java.use("java.net.SocketInputStream").read.overload('[B', 'int', 'int').implementation = function(bytearry,int1,int2){
            var result = this.read(bytearry,int1,int2);
            console.log("HTTP read result,bytearry,int1,int2=>",result,bytearry,int1,int2);
            var ByteString = Java.use("com.android.okhttp.okio.ByteString");
            console.log(jhexdump(bytearry));
            console.log(this.socket.value.getLocalAddress().toString());
            console.log(this.socket.value.getLocalPort().toString());
            console.log(this.socket.value.getLocalSocketAddress().toString());
            return result;
        }

    })
}