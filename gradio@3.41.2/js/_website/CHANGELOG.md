# website

## 0.2.2

### Features

- [#5284](https://github.com/gradio-app/gradio/pull/5284) [`5f25eb68`](https://github.com/gradio-app/gradio/commit/5f25eb6836f6a78ce6208b53495a01e1fc1a1d2f) - Minor bug fix sweep.  Thanks [@aliabid94](https://github.com/aliabid94)!/n  - Our use of __exit__ was catching errors and corrupting the traceback of any component that failed to instantiate (try running blocks_kitchen_sink off main for an example). Now the __exit__ exits immediately if there's been an exception, so the original exception can be printed cleanly/n  - HighlightedText was rendering weird, cleaned it up

## 0.2.1

### Fixes

- [#5324](https://github.com/gradio-app/gradio/pull/5324) [`31996c99`](https://github.com/gradio-app/gradio/commit/31996c991d6bfca8cef975eb8e3c9f61a7aced19) - ensure login form has correct styles.  Thanks [@pngwn](https://github.com/pngwn)!

## 0.2.0

### Highlights

#### Improve startup performance and markdown support ([#5279](https://github.com/gradio-app/gradio/pull/5279) [`fe057300`](https://github.com/gradio-app/gradio/commit/fe057300f0672c62dab9d9b4501054ac5d45a4ec))

##### Improved markdown support

We now have better support for markdown in `gr.Markdown` and `gr.Dataframe`. Including syntax highlighting and Github Flavoured Markdown. We also have more consistent markdown behaviour and styling.

##### Various performance improvements

These improvements will be particularly beneficial to large applications.

- Rather than attaching events manually, they are now delegated, leading to a significant performance improvement and addressing a performance regression introduced in a recent version of Gradio. App startup for large applications is now around twice as fast.
- Optimised the mounting of individual components, leading to a modest performance improvement during startup (~30%).
- Corrected an issue that was causing markdown to re-render infinitely.
- Ensured that the `gr.3DModel` does re-render prematurely.

 Thanks [@pngwn](https://github.com/pngwn)!

### Features

- [#5298](https://github.com/gradio-app/gradio/pull/5298) [`cf167cd1`](https://github.com/gradio-app/gradio/commit/cf167cd1dd4acd9aee225ff1cb6fac0e849806ba) - Create event listener table for components on docs.  Thanks [@aliabd](https://github.com/aliabd)!
- [#5092](https://github.com/gradio-app/gradio/pull/5092) [`643442e1`](https://github.com/gradio-app/gradio/commit/643442e1a5e25fc0c89a15a38b6279b8955643ac) - generate docs json in ci, reimplement main vs release.  Thanks [@pngwn](https://github.com/pngwn)!
- [#5186](https://github.com/gradio-app/gradio/pull/5186) [`24b66e1c`](https://github.com/gradio-app/gradio/commit/24b66e1cff0452bce71c71cea1b818913aeb8d51) - homepage demo update.  Thanks [@freddyaboulton](https://github.com/freddyaboulton)!

## 0.1.0

### Features

- [#5076](https://github.com/gradio-app/gradio/pull/5076) [`2745075a`](https://github.com/gradio-app/gradio/commit/2745075a26f80e0e16863d483401ff1b6c5ada7a) - Add deploy_discord to docs. Thanks [@freddyaboulton](https://github.com/freddyaboulton)!

### Fixes

- [#5111](https://github.com/gradio-app/gradio/pull/5111) [`b84a35b7`](https://github.com/gradio-app/gradio/commit/b84a35b7b91eca947f787648ceb361b1d023427b) - Add icon and link to DuplicateButton. Thanks [@aliabd](https://github.com/aliabd)!
- [#5037](https://github.com/gradio-app/gradio/pull/5037) [`42488c07`](https://github.com/gradio-app/gradio/commit/42488c076aaf3ac2302b27760773a87f5b6ecc41) - Correct gradio version on website. Thanks [@aliabd](https://github.com/aliabd)!

## 0.0.2

### Features

- [#5009](https://github.com/gradio-app/gradio/pull/5009) [`3e70fc81`](https://github.com/gradio-app/gradio/commit/3e70fc81fc12dcb07f40a280b972a61348c9d263) - Correctly render changelog on website after new formatting. Thanks [@aliabd](https://github.com/aliabd)!

### Fixes

- [#5007](https://github.com/gradio-app/gradio/pull/5007) [`71c90394`](https://github.com/gradio-app/gradio/commit/71c90394012a9cfe10eae312b437a6deff52da3a) - Make sure tags aren't rendered inside a guide. Thanks [@aliabd](https://github.com/aliabd)!