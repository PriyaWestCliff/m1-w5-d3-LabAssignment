const photoGallery = document.getElementById('photo-gallery');

const photos = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    'images/image7.jpg',
    'images/image8.jpg',
    'images/image9.jpg',
    'images/image10.jpg'
];

const largePhotos = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    'images/image7.jpg',
    'images/image8.jpg',
    'images/image9.jpg',
    'images/image10.jpg'
];

const captionTexts = [
    'Council Meetings', 'City Agendas', 'Rehabilitation Program', 
    'Budget', 'Contact Us', 'FAQ', 'Contract', 'Grant Programs', 
    'Career', 'Renter'
];

const descTexts = [
    'Know more about City Council Meetings', 'Know more about City Council Agendas', 
    'Residential Rehabilitation Program', 'Business Planning and Budget', 
    'Contact Us here', 'Frequently Asked Questions', 
    'Housing Choice Voucher Program', 'HUD Grant Programs', 
    'Know if you Qualify', 'Renter Resources'
];

const openCaptionTag = '<span class="caption">';
const closeCaptionTag = '</span>';
const openDescTag = '<span class="description">';
const closeDescTag = '</span>';

for (let i = 0; i < photos.length; i++) {
    const listItem = document.createElement('li');
    listItem.id = `photo${i + 1}`;
    listItem.className = 'photo';

    listItem.innerHTML = `
        <img src="${photos[i]}" data-large="${largePhotos[i]}" alt="Photo ${i + 1}" width="200" height="200">
        ${openCaptionTag}${captionTexts[i]}${closeCaptionTag}
        ${openDescTag}${descTexts[i]}${closeDescTag}
    `;

    photoGallery.appendChild(listItem);
}


const additionalInfo = [
    'Stay informed about the latest developments in your community by attending city council meetings.',
    'City council agendas outline the topics and issues.',
    'The Residential Rehabilitation Program offers financial assistance.',
    'Business Planning and Budget resources help local entrepreneurs.',
    'If you have questions or need assistance, feel free to reach out.',
    'Check out our Frequently Asked Questions section',
    'The Housing Choice Voucher Program provides assistance.',
    'Explore various HUD Grant Programs.',
    'Find out if you qualify for local assistance programs.',
    'Renter Resources offer valuable information and support.'
];


const infoBox = document.getElementById('info-box');
const infoHeading = document.getElementById('info-heading');
const infoText = document.getElementById('info-text');
const closeLink = document.getElementById('close-info-box');

document.querySelectorAll('.description').forEach((desc, index) => {
    desc.addEventListener('click', function() {
        infoHeading.innerHTML = captionTexts[index]; 
        infoText.innerHTML = additionalInfo[index];  
        infoBox.style.visibility = 'visible'; 
        infoBox.style.display = 'block';
    });
});

closeLink.addEventListener('click', function(e) {
    e.preventDefault(); 
    infoBox.style.visibility = 'hidden'; 
});
