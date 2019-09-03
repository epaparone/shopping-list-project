// I have an idea of what I need to do
// First I need to say that this code can only execute 
// once the page is fully loaded
function appendList() {
    // I need to find the form element and tell it to do something
    // when a user submits an input
    $('#js-shopping-list-form').submit(function( event ) {
        // Then I need to prevent the default form behavior
        event.preventDefault();
        let inputVal = $('#shopping-list-entry').val();
        console.log(inputVal);
        // Next I need to tell it to take the input and add it to 
        // the end of the shopping list - using .append
        $('.shopping-list').append(`<li><span class="shopping-item">${inputVal}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div></li>`);
        });
    }

function checkItem() {};
function deleteItem() {};

function initJQuery() {
    checkItem();
    deleteItem();
    appendList();
};

$(initJQuery);


  