# flow
flow的生态并不让人满意，尝试找出flow和babel以及webpack最合理的集成方式，但是失败了。整理一下尝试过的方法：

## babel+babel-plugin-typecheck
为了找出将flow-bin和babel集成的方法，从Vue工程源码找到这个方法，尝试使用[babel-plugin-typecheck](https://www.npmjs.com/package/babel-plugin-typecheck)，这个工具存在问题，主要是没有真的使用flow-bin，而是自己做了一套模仿flow的类型校验（但是真正表现形式上和flow是有区别的，缺少类型推出，以及很多类型的支持）。最终放弃该方案。

## webpack+flow-webpack-plugin
后来使用[flow-webpack-plugin](https://www.npmjs.com/package/flow-webpack-plugin)，很遗憾，没有集成成功，感觉这个组件存在bug。

## webstorm+flow-bin
使用webstorm这个ide与flow-bin集成，但是仍未成功，虽然大多数语法错误会提示，但是非常卡，而且很多错误并不提示。

## flow check
最终仍然使用**flow check**或者**flow status**这种原始命令行的方式检查语法错误。使用babel和

