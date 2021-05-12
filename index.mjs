add();
import {add,count} from './test4.mjs'

// count += 1
console.log(count)

// -- 找到rootfiber之后进行调度
// -- 根据优先级和触发时间来判断是同步调度还是异步调度，同步的话调用scheduler的sync方法，将事件添加到syncqueue中，同时更新rootfiber的上次执行时间
// -- 下一个setState ... 找到rootfiber ,判断调用时间 == 上次执行时间，说明是在同一个事件中调用的，return ,就不再向syncqueue中添加事件。
// -- 进入 render阶段的beginWork，迭代fiber tree ,由于是update阶段，不可服用节点，进入reconcilerChildFibers中， 根据fiber上的updatequeue队列，判断该fiber是否需要更新，进入queueprocess 遍历所有的update 将该优先级的所有更新统一更新 
// -- setTimeout中触发的setState ,他的context == 0  ，
