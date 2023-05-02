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
            img: 'https://previews.123rf.com/images/fincioenj/fincioenj1412/fincioenj141200011/34289040-kumbakonam-india-october-10-2013-close-up-of-older-woman-farmer-with-bad-teeth-and-millet-husks.jpg'
        }
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