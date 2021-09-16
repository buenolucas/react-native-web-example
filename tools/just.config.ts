import { task, series, parallel, option, argv, tscTask, cleanTask, eslintTask, prettierTask, prettierCheckTask }  from 'just-scripts'

import {join, relative} from "path"

const srcPath = join(process.cwd(), 'src');
const libPath = join(process.cwd(), 'lib');



option('production');

task(
    'ts',
    tscTask({
        pretty: true,
        allowJs: true,
        target: 'es6',
        outDir: 'lib',
        module: 'commonjs',
        ...(argv().production && { inlineSources: true, sourceRoot: relative(libPath, srcPath) }),
    }),
);

task('lint', eslintTask({ files: ['src/'] }));
task('prettier', () => (argv().fix ? prettierTask : prettierCheckTask));
task('cleanlib', cleanTask([libPath]));

task('build', series('cleanlib', parallel('lint', 'ts')));



/*
module.exports = function preset() {
    task(
        'ts',
        tscTask({
            pretty: true,
            allowJs: true,
            target: 'es6',
            outDir: 'lib',
            module: 'commonjs',
            ...(argv().production && { inlineSources: true, sourceRoot: path.relative(libPath, srcPath) }),
        }),
    );

}
*/



// import {
//     tscTask,
//     esbuildTask,
//     jestTask,
//     eslintTask,
//     task,
//     watch,
//     logger,
//     parallel,
//     series,
//     nodeExecTask
// } from "just-scripts";
// import * as path from "path";
// import * as glob from "fast-glob";
//
//
// task("typecheck", tscTask({ emitDeclarationOnly: true }))
// task("typecheck:watch", tscTask({watch:true, emitDeclarationOnly: true }))
//
// task("build",  esbuildTask({
//     entryPoints: glob.sync("src/**/*.ts"),
//     outdir: "lib",
// }));
//
//
// task("test", jestTask({
//     config: path.join(__dirname, "config", "jest.config.js"),
// }))
//
// task("lint", eslintTask({
//     files: [path.join(process.cwd(), "src")],
//     extensions: ".ts,.tsx",
//     cache: true,
//     fix: process.argv.includes("--fix"),
//     timing: process.argv.includes("--timing"),
// }))
//
//
// ///////////////////////////////////////
// ///////
// ///
// //
//
//
// task('typescript', tscTask({}));
// task('typescript:watch', tscTask({ watch: true }));
//
// task('customNodeTask', nodeExecTask({ enableTypeScript: true, args: ['./tasks/customTask.ts'] }));
//
// task('build', parallel('customNodeTask', 'typescript'));
// task('watch', parallel('typescript:watch'));
//
// task('start', () => {
//     return parallel(
//         () =>
//             watch(['./src/**/*.js'], () => {
//                 console.log('dude js');
//             }),
//             () =>
//             watch(['./src/**/*.ts'], (a) => {
//                 console.log("#!@#!@#@!#!@#!@#!@",a)
//
//             }),
//     );
// });
//
// task('w', (a:any) => {
//     return a
//
//     // const watcher = watch(['./src/**/*.ts']);
//     // watcher.on('change', (evt, file) => {
//     //     console.log(file, 'is changed', evt);
//     // });
// });
//
// task("build",  series('start', 'w'))
//
//
// /*
// export const lint = eslintTask({
//     files: [path.join(process.cwd(), "src")],
//     extensions: ".ts,.tsx",
//     cache: true,
//     fix: process.argv.includes("--fix"),
//     timing: process.argv.includes("--timing"),
// });
// */
//
// // export const watch2 =
// //     w(['./src/**/*.ts', ], (c)=> {
// //     console.log("DASDASDASDAS", c)
// //     })
//
