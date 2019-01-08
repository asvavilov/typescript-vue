Эксперименты с компиляцией typescript и загрузкой однофайловых vue-компонентов/приложений.

compile:
tsc ./app.ts --module amd --target es5 --sourceMap --strict --removeComments
--watch
--lib DOM,ES5,ScriptHost,ES6

sources:
https://embed.plnkr.co/plunk/Y2cEa3
https://www.npmjs.com/package/require-vuejs
https://github.com/vikseriq/requirejs-vue
and other...

# требования, todo/fixme
- (не критично) компиляция *.vue (typescript, под старые браузеры)
- компиляция под старые браузеры
  что-то похожее компилируется для async/await, но нет полифиллов для Promise, Symbol
	нужно самостоятельно подключить полифиллы (polyfill.io или по отдельности только нужные)
	и добавить в lib нужные или объявить их описание (при этом в lib не нужно добавлять)
	но не на все возможности может быть реализован полифилл, это надо иметь ввиду
- подключение файлов из папок выше
- см. System.js (вроде, он посовременней)
- см. полифиллы для модулей ES6 (см. System.js и другие)
