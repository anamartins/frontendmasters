document.addEventListener('DOMContentLoaded',onDOMReady);

let articlesList = [
    {
        title: 'Carolina Learns HTML & Javascript!', //first Article
        text: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed venenatis dui. Morbi interdum, est ut consequat volutpat, risus est venenatis justo, ac tincidunt leo neque a ligula. Vestibulum libero sapien, pharetra nec tristique a, volutpat tincidunt mi. In hac habitasse platea dictumst. Aenean neque elit, maximus eu libero id, hendrerit lobortis erat. Ut eleifend, eros a dapibus gravida, lectus nisi faucibus elit, nec ultrices quam metus at enim. Integer imperdiet dolor in purus interdum condimentum. Nam pharetra nibh nec auctor interdum.',
            'Nullam tellus mauris, vehicula et nibh interdum, varius cursus mauris. Maecenas elementum, mi quis venenatis gravida, orci leo tempus neque, sed luctus quam orci non nulla. Etiam lacinia enim nisl, in cursus diam imperdiet et. Fusce dignissim tortor in enim ullamcorper molestie. Ut sollicitudin velit quis lectus tincidunt ultricies. Nullam hendrerit porttitor velit. In hac habitasse platea dictumst. Cras aliquet pretium ante vitae varius. Cras accumsan mauris sem, id blandit libero commodo et. Vestibulum a vulputate enim, nec auctor enim. Nulla facilisi. Praesent gravida congue varius.',
            'In magna dui, tristique nec eleifend at, condimentum ac ante. Cras sed fringilla elit. Donec convallis, augue vitae convallis blandit, quam nisl porta nisi, in ullamcorper justo diam a arcu. Integer facilisis erat et est suscipit, at sodales leo ultrices. Aliquam erat volutpat. Ut sit amet libero vitae dui vestibulum pretium in eget felis. Proin tincidunt eros vitae accumsan sollicitudin. Pellentesque ultricies, arcu vel fermentum porta, ligula justo sagittis ligula, vel placerat quam nisl consectetur metus. Vivamus eu bibendum nisi.'
        ],
        type: 'post post-small'
    },

    {
        title: 'BREAKING: Puppies Are Adorable', //second Article
        image: 'http://placecorgi.com/260/180',
        text: [
            'Integer viverra eleifend elit aliquam mattis. Sed nec tincidunt felis. Duis lobortis, risus nec gravida egestas, leo tellus eleifend sem, sollicitudin ullamcorper justo leo hendrerit nulla. Nullam eu orci erat. Nulla et nulla ut velit aliquet posuere. Fusce sit amet enim vel nunc sodales dictum in nec nulla. Proin scelerisque vel velit eget dictum. In viverra eget ex at interdum. Vestibulum interdum erat ac turpis tempus, vitae luctus ante cursus. Proin id tortor non tortor dignissim molestie eget id magna. Morbi vel vestibulum sapien, eu sodales est. Duis nec velit lorem.',
            'Donec at magna tellus. Suspendisse arcu massa, malesuada eu hendrerit nec, molestie a neque. Nullam non turpis leo. Mauris vulputate imperdiet metus, maximus faucibus dui lacinia quis. Sed malesuada et nulla vitae varius. Aenean dictum suscipit risus, id fringilla mi semper vitae. Quisque et sapien vel magna accumsan facilisis sed nec odio. Integer convallis, erat quis maximus sagittis, risus nunc placerat urna, eu sagittis nisi risus vulputate lectus. Donec ornare eu elit quis pharetra.'
        ],
        type: 'post post-big'
    },

    {
        title: 'CSS is Apparently a Thing', //third Article
        text: [
            'Aliquam ac nisl bibendum, ultrices risus vulputate, commodo neque. Donec condimentum ultrices risus, in posuere nunc malesuada id. Mauris consectetur, est sit amet accumsan porttitor, ligula felis hendrerit dolor, nec consequat eros ligula et metus. Aliquam vel fringilla lacus, in vulputate erat. Sed vehicula magna ligula, ac tincidunt urna convallis quis. Nulla lacinia justo quis pretium accumsan. Nunc condimentum odio a metus vulputate, nec venenatis arcu accumsan. Nam ultrices ultricies erat, in vestibulum odio rutrum at. Duis pharetra imperdiet lobortis.',
            'Maecenas sollicitudin posuere ante, ac scelerisque tortor laoreet sit amet. Proin non odio massa. Duis consequat sapien vel mauris mattis hendrerit. Vestibulum vehicula bibendum dui, non molestie odio. Nulla eget dolor eu erat sodales aliquam. Cras rhoncus rhoncus libero, at pharetra nulla gravida in. Cras ullamcorper pharetra metus, ut laoreet nunc dignissim auctor. Vestibulum finibus nisl mauris, sit amet mollis neque pretium ut. Morbi maximus sem a dapibus ultricies. Donec at varius sapien. Vestibulum nec imperdiet nunc. Cras quis ligula elementum, imperdiet tellus nec, interdum nunc.',
            'Vivamus malesuada ac lectus blandit porta. Nam sagittis eros eu mauris porttitor scelerisque. Maecenas nec ante in dui maximus ullamcorper sed a magna. Suspendisse finibus ligula odio, et condimentum leo ultricies tristique. Nullam suscipit nunc vel ornare volutpat. Mauris tempus ut elit sit amet aliquam. In molestie, mi id rhoncus vestibulum, nulla lorem gravida lorem, ut mattis risus nibh eu enim. Morbi ipsum ipsum, consequat ultrices imperdiet ac, auctor ac leo.'
        ],
        type: 'post post-small'
    },
    {
        title: 'Boy Likes Turtles',
        text: [
            'Donec sit amet finibus orci. Mauris gravida pharetra eros molestie venenatis. Suspendisse non consectetur ipsum, at vestibulum ligula. Fusce vitae eleifend lacus. Duis in scelerisque eros. Sed faucibus finibus ex, ornare ullamcorper purus sollicitudin sed. Donec tellus sapien, malesuada quis blandit nec, dapibus euismod dui. Aenean non vehicula enim. Aenean condimentum, purus vitae sagittis vestibulum, tellus massa imperdiet sapien, vel ultricies metus ligula a dolor.',
            'Vivamus malesuada ac lectus blandit porta. Nam sagittis eros eu mauris porttitor scelerisque. Maecenas nec ante in dui maximus ullamcorper sed a magna. Suspendisse finibus ligula odio, et condimentum leo ultricies tristique. Nullam suscipit nunc vel ornare volutpat. Mauris tempus ut elit sit amet aliquam. In molestie, mi id rhoncus vestibulum, nulla lorem gravida lorem, ut mattis risus nibh eu enim. Morbi ipsum ipsum, consequat ultrices imperdiet ac, auctor ac leo.'
        ],
        type: 'post post-small'
    },

    {
        title: 'Carolina Learns HTML & Javascript!', 
        text: [
            'Morbi a risus quis urna facilisis luctus quis pretium mauris. Ut venenatis sollicitudin porttitor. Ut nec nunc vitae leo euismod posuere quis consectetur felis. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin volutpat porttitor faucibus. Nullam nec felis auctor, ullamcorper diam id, fermentum ligula. Mauris sed ornare ipsum. Integer tempus, sem in pellentesque elementum, sem elit consectetur mi, vel cursus ipsum nulla ut nibh. Proin dapibus felis ac leo condimentum, in luctus massa consequat. Integer semper diam magna, eu bibendum purus dapibus eu. Proin finibus erat magna, ac luctus ipsum tincidunt et. Sed lobortis laoreet semper.'
        ],
        type: 'post post-small'
    }

]; 

let items = [
    {
        name:  'Politics', 
        colorClass: 'color0',
        link: '#'
    },

    {
        name: 'Technology',
        colorClass: 'color1',
        link: '#'
    },
    
    {
        name: 'Local',
        colorClass: 'color2',
        link: '#'
    },
      
    {
        name: 'Opinion',
        colorClass: 'color3',
        link: '#'
    },

    {
        name: 'Sports',
        colorClass: 'color4',
        link: '#'
        
    }, 

    {
        name: 'TV',
        colorClass: 'color0',
        link: '#'
        
    }
        
];

function onDOMReady(){
    //creating title 
    document.title = 'The News Times';


    //creating the div for the header
    let header = document.createElement('div');
    document.body.appendChild(header);

    //creating the h1 header
    let h1 = document.createElement('h1');
    h1.className = 'page-name';
    header.appendChild(h1);
    h1.innerHTML = 'The News Times';

      // creating section div
      let section = document.createElement('section');
      section.className='article-container';
      document.body.appendChild(section);

    buildingArticles(articlesList, section);
    buildingItems(items,section);

}


function buildingArticles(articlesList, section){

    for (let i=0; i<articlesList.length; i++){
        let article = document.createElement('article'); // creating the article tag
        article.className = articlesList[i].type;
        section.appendChild(article);

        let articleTitle = document.createElement('h1'); //creating the article title
        articleTitle.className = 'article-title';
        article.appendChild(articleTitle);
        articleTitle.innerText = articlesList[i].title;

        if (articlesList[i].image){ //creating the image
            let img = document.createElement('img');
            img.className = 'article-img';
            article.appendChild(img);
            img.src = articlesList[i].image;
        }

        for (let j=0; j<articlesList[i].text.length; j++){ //creating the paragraphs
            let articleParagraph = document.createElement('p'); 
            articleParagraph.className = 'article-text'; 
            article.appendChild(articleParagraph);
            articleParagraph.innerText = articlesList[i].text[j];
        }

    }

}

function buildingItems(items, section){
    let list = document.createElement('ul'); // creating the unordered list
    list.id = 'ul';
    list.className = 'menu';
    section.appendChild(list);

    for (let i=0; i<items.length; i++){ // creating the items, using the item array
        let item = document.createElement('li');
        item.className = 'other-item ' + items[i].colorClass;
        list.appendChild(item);
        let aItem = document.createElement('a');
        aItem.className = 'item-link';
        item.appendChild(aItem);
        aItem.innerText = items[i].name;
        aItem.href = items[i].link;
    }

}