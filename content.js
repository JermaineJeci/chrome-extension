let MichaelImages = [
    "https://m.media-amazon.com/images/M/MV5BMTM1NjExNjg1OV5BMl5BanBnXkFtZTcwMTQ0NzIwMw@@._V1_FMjpg_UX1000_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDGQRt_yYFdw9AhhJj8qkg_-n9CTJ_a0pgUew0S_upw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvYPSBpwvdC9IP249HpnUbgkmoJLVH0waR8I7ofkQdQ&s=10",
    
];

const img = document.getElementsByTagName("img");
for (image of img) {
    const index = Math.floor(Math.random() * MichaelImages.length);
    image.src = MichaelImages[index];
}
