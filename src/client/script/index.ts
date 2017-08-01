import * as riot from "riot";
import "../tag/view/app.tag";
import HelloService from "../../common/service/helloService";

console.log("before mount")

riot.mount("*", {
    greet: new HelloService().greet()
});

console.log("after mount")
