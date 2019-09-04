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

function checkItem() {
    $('.shopping-item-toggle').click(function() {
        $(this).closest('div').prev('span').toggleClass('shopping-item__checked');
    });
};

function deleteItem() {
    $('.shopping-item-delete').click(function() {
        $(this).closest('li').remove();
    });
};

function initJQuery() {
    appendList();
    checkItem();
    deleteItem();
};


$(initJQuery)