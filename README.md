# get-deep

A utility function for getting deeply nested values from object.

## Use case

You have an object `a` and want to get a property deeply buried under `a.b.c.d.e[3].f.g`, but any of these `b`, `c`, `d`,... might be falsy (`null` or `undefined`) and break your code. So you do this terrible check

```
    const result = a && a.b && a.b.c && a.b.c && a.b.c.d && a.b.c.d.e && a.b.c.d.e[3] && a.b.c.d.e[3].f && a.b.c.d.e[3].f.g
```

With get-deep, you can simply do this

```
    import get from 'get-deep';
    const result = get(a, 'b.c.d.e', 3, 'f.g');
```

or if you'd like to complicate things a little bit...

```
    import get from 'get-deep';
    const result = get(a, 'b', ['c.d'], [3, ['f', 'g']])
```

## API

### get(obj, ...paths)

The first parameter `obj` is any javascript variable you want to check.

The rest of parameters accept any combination of **strings**, **numbers**, or **arrays** of them (including nested arrays) that will be resolved to path to the nested property.

`get-deep` will check for any falsy value along the path and return it immediately if there's one.

