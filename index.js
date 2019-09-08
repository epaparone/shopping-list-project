function appendList() {
    $('#js-shopping-list-form').submit(function( event ) {
        event.preventDefault();
        let inputVal = $('#shopping-list-entry').val();
        console.log(inputVal);
        $('.shopping-list').append(`<li>
            <span class="shopping-item">${inputVal}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
            </li>`);
    });
};

//Last thing I need to do is change the delete function to only fire on the delete button
function checkItem() {
    $('.shopping-list').on('click', '.shopping-item-controls', '.shopping-item-toggle', function() {
        $(this).closest('div').prev('span').toggleClass('shopping-item__checked');
    });
};

function deleteItem() {
    $('.shopping-list').on('click', '.shopping-item-controls', '.shopping-item-delete', function() {
        $(this).closest('li').remove();
    });
};

/*function itemControls() {
    $('.shopping-list').on('click', '.shopping-item-controls', 'button', function() {
        if ($(this).hasClass('shopping-item-toggle') === true) {
            checkItem();
        } else if ($(this).hasClass('shopping-item-delete') === true) {
            deleteItem();
        };
    });
};*/

function initJQuery() {
    appendList();
    checkItem();
    deleteItem();
    //itemControls();
};


$(initJQuery)