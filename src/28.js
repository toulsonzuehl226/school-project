function addNode(node, parent) {
  if (!parent) return [node];
  
  const children = parent.children;
  const currentChildren = children.filter(child => child.id === node.id);
  if (currentChildren.length > 0) {
    currentChildren.push(node);
    return [...children, ...addNode(...currentChildren)];
  } else {
    return [...children, node];
  }
}

function findParent(nodeId, parentIds) {
  const parentIndex = parentIds.findIndex(id => id === nodeId);
  
  if (parentIndex >= 0) {
    return parentIds[parentIndex - 1].id;
  }

  return null;
}
