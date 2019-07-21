/**
 * 深度优先的实现
 */

var node = {
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
};
var nodeList = [];
function deepTraversal(node) {
  for (var i in node) {
    nodeList.push(i);
    if (node[i].children) {
      deepTraversal(node[i].children);
    }
  }
}
deepTraversal(node);
console.log(nodeList);
