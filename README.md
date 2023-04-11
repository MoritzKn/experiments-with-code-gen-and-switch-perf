# Experiments with Code Gen and Switch Performance

Related to this video:
https://www.youtube.com/watch?v=DMQ_HcNSOAI

I was wondering about the performance of native "switch" statements compared to optimized hash tables.
Especially hash tables with a perfect hashing function.

Could the performance be improved by nesting switch statement?
First switch on the length, then on the first, and second letters, etc. That way no bounds checks are
needed and we never go deeper than 3 switches deep.

I benchmarked looking up TypeScript keywords (the return value is the keyword index).
Each iteration looks up 370105 English words and 41000 keywords. So only about every 10th word will be a hit.

Surprisingly, for this use case, the custom nested switch is indeed faster.

With a higher hit rate the performance improvement get's smaller but the improvement is still significant.

I tested this for both Rust and JavaScript:

```
$ node benchmark.js

time_basic_switch: 3335.11725ms 12.4M/s
time_nested_switch: 1254.06154ms 32.9M/s
41210600 checks
```

```
$ cargo run --release

time_basic_switch: 583.816413ms 70.7M/s
time_nested_switch: 362.90529ms 113.8M/s
41210600 checks
```

Benchmarked on an Apple M1.

## Shouldn't Compilers Just Optimizes This?

Yes, probably, maybe, I don't know. I'm not a compiler engineer.

Maybe I discovered a possible compiler optimization. But idk seems to
obvious that no one would have thought of it before.
