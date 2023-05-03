let obj = [
        {
            name: 'Omina',
            lover: 'Sarvar',
            img: 'https://photos.hancinema.net/photos/photo1648829.jpg'
        },
        {
            name: 'Dildora',
            lover: 'Abdulloh',
            img: 'https://images.unsplash.com/photo-1599032909756-5deb82fea3b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            name: 'Lobar',
            lover: 'Abdulvodud',
            img: 'https://i.pinimg.com/originals/86/4f/b1/864fb1f6828c6e5040118c56830d4c22.jpg'
        }, 
        {
            name: 'Mirsamatova',
            lover: 'Ibrohim',
            img: 'https://cdn.pixabay.com/photo/2018/06/19/09/48/girl-3484121_1280.jpg'
        },{
            name: 'Aziza',
            lover: 'Abduqodir',
            img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/346a6aec-6fbe-4ee7-b228-068f96e250f4/d58o2hm-afd15146-1d51-4b39-82bd-6b053c29e732.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM0NmE2YWVjLTZmYmUtNGVlNy1iMjI4LTA2OGY5NmUyNTBmNFwvZDU4bzJobS1hZmQxNTE0Ni0xZDUxLTRiMzktODJiZC02YjA1M2MyOWU3MzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pMDo2E_jH8kBXITY_fOxUmVt0jgeK4ys2jGP14MUuPE'
        },   {
            name: '?',
            lover: 'Rasul',
            img: 'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'
        }, 
    ];

    let row = document.getElementById('row');
        
        let html = ""

        html += obj.map((item,index) => `<div class="col-md-6 col-sm-12 mb-4">
            <div class="card text-center">
                <div id="${index}" class="d-none">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <h2>${item.name}</h2>
                    <h3>${item.name} & ${item.lover}</h3>
                    <p>LOVERS</p>
                </div>
                <button onclick="showInfo(${index})" class="btn btn-danger">${item.lover}</button>
            </div>
            </div>`);

            html = html.replaceAll(',','');

        row.innerHTML = html;

    function showInfo(id){
        let info = document.getElementById(id);
    
        if(info.className === 'd-none'){
    
            info.className = 'd-block'
        }else{
            info.className = 'd-none'
        }
    }
