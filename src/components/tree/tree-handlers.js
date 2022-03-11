function handleExpandSync(event) {
	const target = event.target;
	const childrenDiv =
		target &&
		target?.classList.contains('tree__node-name') &&
		target?.nextElementSibling?.classList.contains('tree__node-children') ?
			target.nextElementSibling :
			null;

	if (childrenDiv) {
			target.parentNode.classList.toggle('tree__node_expanded');
			childrenDiv.childNodes.forEach(child => {
				if (child.classList.contains('hidden')) {
					child.classList.remove('hidden');
				} else {
					child.classList.add('hidden');
				}
			});
	}
}

function handleExpandAsync(event) {
	const target = event.target;
  console.dir(target.getAttribute('data-id'));
}

export { handleExpandSync, handleExpandAsync };
