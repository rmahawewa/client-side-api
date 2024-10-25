async function f() {
    return 1;
}

f().then(alert);

async function f1(){
    return Promise.resolve(123456);
}

f1().then(alert);

async function f2(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!")
        }, 1000)
    });

    let result = await promise;

    console.log(result);
}

f2();

async function showAvatar(){

    //read our json
    // let response = await fetch('/article/promise-chaining/user.json', {mode: 'cors'});
    // let user = await response.json();
    let user = {name: "rmahawewa"};

    //read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`, {mode: 'cors'});
    let githubUser = await githubResponse.json();

    //show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    //wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
}

showAvatar();