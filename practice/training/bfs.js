/**
 * 广度优先的实现
 */

var node = {
  id: "root",
  children: {
    p1: {
      id: "p1",
      children: {
        p1c1: {
          id: "p1c1",
          children: {
            p1c1g1: {
              id: "p1c1g1"
            },
            p1c1g2: {
              id: "p1c1g1"
            }
          }
        },
        p1c2: {
          id: "p1c2",
          children: {
            p1c2g1: {
              id: "p1c2g1"
            }
          }
        }
      }
    },
    p2: {
      id: "p2",
      children: {
        p2c1: {
          id: "p2c1"
        }
      }
    }
  }
};

// 广度优先遍历：非递归遍历，按照队列的先进先出
// function Bfs(node) {
//   let nodes = [];
//   let stack = [];
//   if (node) {
//     stack.push(node);
//     while (stack.length) {
//       let item = stack.shift();
//       let children = item.children;
//       nodes.push(item);
//       for (let i = 0; i < children.length; i++) {
//         stack.push(children[i]);
//       }
//     }
//   }
//   return nodes;
// }
// let nodes = Bfs(node);

var visited = []; // 访问过的
var arr = []; // 辅助队列,记录本层遍历的
var nextRound = []; // 下一层需要的遍历
function bfs() {
  arr = nextRound;
  nextRound = [];
  for (var i = 0; i < arr.length; i++) {
    visited.push(arr[i]); // 访问arr[i]
    for (var j = 0; j < arr[i].children.length; i++) {
      nextRound.push(arr[i].children[j]);
    }
  }
  while (nextRound.length) {
    bfs();
  }
  console.log(nextRound);
}
bfs();
