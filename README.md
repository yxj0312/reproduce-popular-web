# Lightning Fast Builds with Vite

## L5 - Moving to Vite

### Env Variables

Vite exposes env variables on the import.meta.env global.

### Require vs Import

When using webpack you might use require calls. In Vite we strongly recommend against require, because it’s technically a node.js concept and it won’t work well with Vite. However, if you’re using a depedency that uses require Vite will handle that.

### Require.contents

This is a feature of webpack that allows you to look at the files of a directory at runtime. Vite has an equivalent called Glob Import, which you’ll want to use instead.
