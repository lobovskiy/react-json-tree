function expandChildNodes(event) {
	const target = event.target;
	const childrenDiv =
		target &&
		target?.classList.contains('tree__node-name') &&
		target?.nextElementSibling?.classList.contains('tree__node-children') ?
			target.nextElementSibling :
			null;

	if (childrenDiv) {
			target.parentNode.classList.toggle('tree__node_expanded');
      if (childrenDiv.classList.contains('hidden')) {
        childrenDiv.classList.remove('hidden');
      } else {
        childrenDiv.classList.add('hidden');
				}
	}
}

export { expandChildNodes };
