document.addEventListener("DOMContentLoaded", () => {
    const itemInput = document.getElementById("item-input");
    const addButton = document.getElementById("add-button");
    const itemsList = document.getElementById("items");

    let items = [];

    addButton.addEventListener("click", addItem);

    function addItem() {
        const itemText = itemInput.value.trim();
        if (itemText !== "") {
            const itemId = Date.now().toString();
            const item = { id: itemId, text: itemText };
            items.push(item);
            itemInput.value = "";
            renderItems();
        }
    }

    function renderItems() {
        itemsList.innerHTML = "";
        items.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span id="text-${item.id}">${item.text}</span>
                <input id="input-${item.id}" class="edit-input" type="text" value="${item.text}" style="display:none;">
                <div>
                    <button onclick="editItem('${item.id}')">Edit</button>
                    <button onclick="deleteItem('${item.id}')">Delete</button>
                    <button onclick="saveItem('${item.id}')" style="display:none;">Save</button>
                </div>
            `;
            itemsList.appendChild(li);
        });
    }

    window.editItem = (id) => {
        document.getElementById(`text-${id}`).style.display = "none";
        document.getElementById(`input-${id}`).style.display = "inline";
        document.querySelector(`button[onclick="editItem('${id}')"]`).style.display = "none";
        document.querySelector(`button[onclick="saveItem('${id}')"]`).style.display = "inline";
    };

    window.saveItem = (id) => {
        const newText = document.getElementById(`input-${id}`).value.trim();
        if (newText !== "") {
            const item = items.find(item => item.id === id);
            item.text = newText;
            renderItems();
        }
    };

    window.deleteItem = (id) => {
        items = items.filter(item => item.id !== id);
        renderItems();
    };
});
