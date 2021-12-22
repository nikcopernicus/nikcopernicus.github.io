window.onload = function () {
    window.customElements.define('about-comment', AboutComment)
    displayRandomComments()
}
class AboutComment extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open'})
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `<style>
            .comment-wrapper {
                height: auto;
                padding-top: 12px;
                padding-bottom: 12px;
            }
            .comment-inner {
                height: auto;
                display:inline-block;
            }

            .comment-inner-right {
                float: left;
                width: calc(100% - 150px);
                margin-left: 50px;
                height: auto;
            }

            .comment-avatar-wrapper {
                height: 100%;
                width: 100px;
                float: left;
            }

            .comment-avatar img, .comment-avatar {
                width: 120px;
                height: 120px;
                float: left;
            }

            .comment-author {
                word-break: break-word;
                color: #0EB09C;
                font-size: 18px;
            }
        </style>
        <div class="comment-wrapper">
            <div class="comment-inner">
                <div class="comment-avatar-wrapper">
                    <div class="comment-avatar">
                        <img src="pictures-inside/logo.jpg">
                    </div>
                </div>
                <div class="comment-inner-right">
                    <div class="comment-author">
                        `+this.getAttribute('author')+`
                    </div>
                    <div class="comment-text">
                        `+this.getAttribute('text')+`
                    </div>
                </div>
            </div>
        </div>`
    }
}

async function loadRandomComments(n = 8) {
    let result = []
    let id = getRandomInt(300)
    for(let i = 0; i < n; i++) {
        let response = await fetch('https://jsonplaceholder.typicode.com/comments/'+id)
        id++
        let json = await response.json()
        result.push({author: json.email, text: json.body})
    }
    return result
}

async function displayRandomComments() {
    showLoadingAnimation()
    let comments = await loadRandomComments()
    hideLoadingAnimation()
    let newInner = ""
    for(let i = 0; i < comments.length; i++)
        newInner += `<about-comment author="`+comments[i].author+`" text="`+comments[i].text+`"></about-comment>`
    document.getElementById('comments-div').innerHTML = newInner
}

function showLoadingAnimation() {
    $("html, body").css("cursor", "progress");
}

function hideLoadingAnimation() {
    $("html, body").css("cursor", "default");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}