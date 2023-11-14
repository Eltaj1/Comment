var username;
var usernameSaved = false;

function saveUsername() {
    var usernameInput = document.getElementById("username-input");
    username = usernameInput.value.trim();

    if (username !== "") {
        usernameSaved = true;
        showSavedUsername();
    }
}

function showSavedUsername() {
    var savedUsernameContainer = document.getElementById("saved-username-container");
    var savedUsernameSpan = document.getElementById("saved-username");

    savedUsernameSpan.textContent = "Welcome, " + username + "!";
    savedUsernameContainer.style.display = "flex";

    var usernameContainer = document.getElementById("username-container");
    usernameContainer.style.display = "none";
}

function getUsername() {
    return usernameSaved ? username : "Anonymous";
}

function saveComment() {
    if (!usernameSaved) {
        alert("Please save your username first!");
        return;
    }

    var commentInput = document.getElementById("comment-input");
    var commentText = commentInput.value.trim();

    if (commentText !== "") {
        var commentsList = document.getElementById("comments-list");
        var commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = getUsername() + ": " + commentText;
        commentsList.appendChild(commentDiv);

        commentInput.value = ""; // Clear the input field after saving
    }
}
var username;

document.addEventListener("DOMContentLoaded", function() {
    loadUsername();
});

function loadUsername() {
    username = localStorage.getItem("username");

    if (username) {
        usernameSaved = true;
        showSavedUsername();
    }
}

function saveUsername() {
    var usernameInput = document.getElementById("username-input");
    username = usernameInput.value.trim();

    if (username !== "") {
        localStorage.setItem("username", username);
        usernameSaved = true;
        showSavedUsername();
    }
}

function showSavedUsername() {
    var savedUsernameContainer = document.getElementById("saved-username-container");
    var savedUsernameSpan = document.getElementById("saved-username");

    savedUsernameSpan.textContent = "Welcome, " + username + "!";
    savedUsernameContainer.style.display = "flex";

    var usernameContainer = document.getElementById("username-container");
    usernameContainer.style.display = "none";
}

function getUsername() {
    return username ? username : "Anonymous";
}

function saveComment() {
    if (!usernameSaved) {
        alert("Please save your username first!");
        return;
    }

    var commentInput = document.getElementById("comment-input");
    var commentText = commentInput.value.trim();

    if (commentText !== "") {
        var commentsList = document.getElementById("comments-list");
        var commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = getUsername() + ": " + commentText;
        commentsList.appendChild(commentDiv);

        commentInput.value = ""; // Clear the input field after saving
    }
}
var username;
var usernameSaved = false;
var comments = [];

document.addEventListener("DOMContentLoaded", function() {
    loadUsername();
    loadComments();
    displayComments();
});

function loadUsername() {
    username = localStorage.getItem("username");

    if (username) {
        usernameSaved = true;
        showSavedUsername();
    }
}

function saveUsername() {
    var usernameInput = document.getElementById("username-input");
    username = usernameInput.value.trim();

    if (username !== "") {
        localStorage.setItem("username", username);
        usernameSaved = true;
        showSavedUsername();
    }
}

function showSavedUsername() {
    var savedUsernameContainer = document.getElementById("saved-username-container");
    var savedUsernameSpan = document.getElementById("saved-username");

    savedUsernameSpan.textContent = "Welcome, " + username + "!";
    savedUsernameContainer.style.display = "flex";

    var usernameContainer = document.getElementById("username-container");
    usernameContainer.style.display = "none";
}

function getUsername() {
    return username ? username : "Anonymous";
}

function saveComment() {
    if (!usernameSaved) {
        alert("Please save your username first!");
        return;
    }

    var commentInput = document.getElementById("comment-input");
    var commentText = commentInput.value.trim();

    if (commentText !== "") {
        var comment = { username: getUsername(), text: commentText };
        comments.push(comment);
        saveComments();

        commentInput.value = ""; // Clear the input field after saving

        // Display the updated comments
        displayComments();
    }
}

function saveComments() {
    localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComments() {
    var savedComments = localStorage.getItem("comments");

    if (savedComments) {
        comments = JSON.parse(savedComments);
    }
}

function displayComments() {
    var commentsList = document.getElementById("comments-list");
    commentsList.innerHTML = "";

    comments.forEach(function(comment) {
        var commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = comment.username + ": " + comment.text;
        commentsList.appendChild(commentDiv);
    });
}
// ... (previous code)

function saveComment() {
    if (!usernameSaved) {
        alert("Please save your username first!");
        return;
    }

    var commentInput = document.getElementById("comment-input");
    var commentText = commentInput.value.trim();
    
    var imageInput = document.getElementById("image-input");
    var imageFile = imageInput.files[0];

    if (commentText === "" && !imageFile) {
        alert("Please enter a comment or upload an image!");
        return;
    }

    var comment = { 
        username: getUsername(), 
        text: commentText, 
        image: imageFile ? URL.createObjectURL(imageFile) : null 
    };

    comments.push(comment);
    saveComments();

    commentInput.value = ""; // Clear the comment input field
    imageInput.value = ""; // Clear the image input field

    // Display the updated comments
    displayComments();
}

// ... (remaining code)
// ... (previous code)

// ... (previous code)

function displayComments() {
    var commentsList = document.getElementById("comments-list");
    commentsList.innerHTML = "";

    comments.forEach(function(comment) {
        var commentDiv = document.createElement("div");
        commentDiv.className = "comment";

        // Display username and text
        commentDiv.innerHTML = `<strong>${comment.username}:</strong> ${comment.text}`;

        // Display image if available
        if (comment.image) {
            var imageElement = document.createElement("img");
            imageElement.src = comment.image;
            imageElement.alt = "Uploaded Image";
            imageElement.style.maxWidth = "100%"; // Set maximum width
            commentDiv.appendChild(imageElement);
        }

        commentsList.appendChild(commentDiv);
    });
}

// ... (remaining code)
// ... (previous code)

function displayComments() {
    var commentsList = document.getElementById("comments-list");
    var shouldScrollToBottom = commentsList.scrollTop + commentsList.clientHeight === commentsList.scrollHeight;

    commentsList.innerHTML = "";

    comments.forEach(function(comment) {
        var commentDiv = document.createElement("div");
        commentDiv.className = "comment";

        // Display username and text
        commentDiv.innerHTML = `<strong>${comment.username}:</strong> ${comment.text}`;

        // Display image if available
        if (comment.image) {
            var imageElement = document.createElement("img");
            imageElement.src = comment.image;
            imageElement.alt = "Uploaded Image";
            imageElement.style.maxWidth = "100%"; // Set maximum width
            commentDiv.appendChild(imageElement);
        }

        commentsList.appendChild(commentDiv);
    });

    // Scroll to the bottom if the scroll was at the bottom before updating
    if (shouldScrollToBottom) {
        commentsList.scrollTop = commentsList.scrollHeight;
    }
}

// ... (remaining code)
