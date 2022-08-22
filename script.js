fetch('https://www.reddit.com/r/aww/.json')
.then(response => response.json())
.then(data => {
    const children = data.data.children;
    console.log(children);
    for(let i = 0; i<=9; i++){
        const box = document.createElement('div');
        document.body.appendChild(box);
        box.classList.add('container');
        const list = document.createElement('ul');
        box.appendChild(list);
        let listItem = document.createElement('li');
            listItem.innerText = children[i].data.title;       
            list.appendChild(listItem);
            listItem.classList.add('title');
            
            let photoListItem = document.createElement('img');
            photoListItem.classList.add('photo');
            photoListItem.setAttribute('src',children[i].data.thumbnail);   
            list.appendChild(photoListItem);
        
            let permaListItem = document.createElement('a');
            permaListItem.setAttribute('href', children[i].data.permalink);
            permaListItem.classList.add('link');          
            list.appendChild(permaListItem);
    };
});


