function StateContainer() {
    this.lists = []
    this.cards = {}

    this.node = document.createElement('div')
    this.listsNode = document.createElement('div')

    this.node.id = 'state-container'
    this.listsNode.id = 'state-canvas-board'

    this.titleFormNode = buildListTitleForm()
    this.titleNode.appendChild(document.createTextNode(this.title))

    this.getNextId = function () {
        return '_' + (nextId++).toString()
    }
}

StateContainer.prototype.render = function () {

}

function buildListTitleForm() {
	var node = document.createElement('form')
	node.innerHTML =
		'<div class="newitem-title-wrapper">' +
		'<input  type="text">' +
		'<input  type="submit" value="Save">' +
		'</div>'
	node.style.display = 'none'
	return node
}

document.body.onload = function () {
    var stateContainer = new StateContainer()

    stateContainer.render()
    document.getElementById('container').appendChild(stateContainer.node)
    currentBoard = stateContainer
}