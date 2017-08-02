# riotjs-webpack-sass-boilerplate
riotjs-webpack-sass-boilerplate

## How to use

### Install
``` bash
npm i
```

### Build
``` bash
npm run build
```

### Start development server
``` bash
npm run dev
```

### Start production server

``` bash
npm run prod
```

more simply,
``` bash
npm start
```

### Test
``` bash
npm run test
```

### Coverage
``` bash
npm run coverage
open ./coverage/ts-report/index.html
```



## VSCode Configuration

### settings.json
``` json
{
    "typescript.tsdk": "./node_modules/typescript/lib"
}
```

### launch.json
``` json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "start program",
            "program": "${workspaceRoot}/build/src/index",
            "outFiles": [
                "${workspaceRoot}/build/**/*.js"
            ],
            "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/nodemon",
            "runtimeArgs": [
                "-w",
                "build/src"
            ],
            "sourceMaps": true
        }
    ]
}
```
