import * as assert from "power-assert";
import * as util from "util";
import * as td from "testdouble";

import HelloServie from "../../../src/common/service/helloService";

describe("class HelloServie", () => {
    describe("greet(): string", () => {
        it(`should be if called
            then not null and not undefined.`,
           () => {
                assert(
                    new HelloServie().greet()
                );
            }
        );
    });
});
